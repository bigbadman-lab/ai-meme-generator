type TemplateLike = {
  template_id: string;
  slug?: string | null;
};

type SelectionStage = "unused_pool" | "reset_pool" | "cooldown_fallback";

export type WorkspaceFamilyCycleDiagnostics = {
  selection_scope: "workspace_family_cycle";
  output_family: string;
  eligible_pool_size: number;
  used_pool_size_before_pick: number;
  unused_pool_size_before_pick: number;
  cooldown_window_size: number;
  cooldown_applied: boolean;
  cycle_exhausted: boolean;
  cycle_reset_applied: boolean;
  selected_template_id: string | null;
  selected_template_slug: string | null;
  selection_stage: SelectionStage;
};

export function deriveWorkspaceFamilyTemplateHistory(params: {
  rows: Array<{ template_id?: unknown }>;
  eligibleTemplateIds: Set<string>;
  cooldownWindow?: number;
}): {
  usedTemplateIds: Set<string>;
  recentTemplateIds: string[];
} {
  const cooldownWindow = Math.max(1, Math.floor(params.cooldownWindow ?? 3));
  const usedTemplateIds = new Set<string>();
  const recentTemplateIds: string[] = [];
  const seenRecent = new Set<string>();

  for (const row of params.rows) {
    const templateId = String(row.template_id ?? "").trim();
    if (!templateId || !params.eligibleTemplateIds.has(templateId)) continue;
    usedTemplateIds.add(templateId);
    if (!seenRecent.has(templateId) && recentTemplateIds.length < cooldownWindow) {
      seenRecent.add(templateId);
      recentTemplateIds.push(templateId);
    }
  }

  return { usedTemplateIds, recentTemplateIds };
}

export function selectTemplatesFromWorkspaceFamilyCycle<T extends TemplateLike>(params: {
  eligibleTemplates: T[];
  usedTemplateIds: Set<string>;
  recentTemplateIds: string[];
  outputFamily: string;
  count?: number;
  cooldownWindow?: number;
}): {
  selected: T[];
  diagnostics: WorkspaceFamilyCycleDiagnostics;
} {
  const count = Math.max(1, Math.floor(params.count ?? 1));
  const cooldownWindow = Math.max(1, Math.floor(params.cooldownWindow ?? 3));

  const eligibleTemplates = params.eligibleTemplates.filter(
    (template, index, arr) =>
      template.template_id &&
      arr.findIndex((candidate) => candidate.template_id === template.template_id) === index
  );

  if (eligibleTemplates.length === 0) {
    return {
      selected: [],
      diagnostics: {
        selection_scope: "workspace_family_cycle",
        output_family: params.outputFamily,
        eligible_pool_size: 0,
        used_pool_size_before_pick: 0,
        unused_pool_size_before_pick: 0,
        cooldown_window_size: cooldownWindow,
        cooldown_applied: false,
        cycle_exhausted: false,
        cycle_reset_applied: false,
        selected_template_id: null,
        selected_template_slug: null,
        selection_stage: "cooldown_fallback",
      },
    };
  }

  const eligibleIdSet = new Set(eligibleTemplates.map((template) => template.template_id));
  const usedIdsInEligible = new Set(
    [...params.usedTemplateIds].filter((templateId) => eligibleIdSet.has(templateId))
  );
  const unusedTemplates = eligibleTemplates.filter(
    (template) => !usedIdsInEligible.has(template.template_id)
  );

  const cycleExhausted = unusedTemplates.length === 0;
  const cycleResetApplied = cycleExhausted;
  const immediatePreviousTemplateId = params.recentTemplateIds[0] ?? null;
  const cooldownIds = new Set(
    params.recentTemplateIds.slice(0, cooldownWindow).filter(Boolean)
  );

  const removeImmediateRepeat = (templates: T[]): T[] => {
    if (!immediatePreviousTemplateId || eligibleTemplates.length <= 1) return templates;
    return templates.filter(
      (template) => template.template_id !== immediatePreviousTemplateId
    );
  };

  const removeCooldown = (templates: T[]): T[] =>
    templates.filter((template) => !cooldownIds.has(template.template_id));

  // Required fallback order:
  // 1) candidate = unused - cooldown
  // 2) if empty -> candidate = unused
  // 3) if still empty (post-reset) -> candidate = eligible - cooldown
  // 4) if still empty -> candidate = eligible
  let stage: SelectionStage = cycleResetApplied ? "reset_pool" : "unused_pool";

  const step1 = removeImmediateRepeat(removeCooldown(unusedTemplates));
  const step2 = removeImmediateRepeat(unusedTemplates);
  const step3 = removeImmediateRepeat(removeCooldown(eligibleTemplates));
  const step4 = removeImmediateRepeat(eligibleTemplates);

  let candidatePool: T[] = step1;
  if (candidatePool.length === 0) {
    candidatePool = step2;
    if (candidatePool.length === 0) {
      candidatePool = step3;
      stage = cycleResetApplied ? "reset_pool" : "cooldown_fallback";
      if (candidatePool.length === 0) {
        candidatePool = step4;
        stage = "cooldown_fallback";
      }
    } else {
      stage = "cooldown_fallback";
    }
  }

  if (candidatePool.length === 0) {
    // eligibleTemplates.length > 0 and pool > 1 can still collapse if immediate-repeat
    // filtering removed the final option. In that case, allow raw eligible templates.
    candidatePool = eligibleTemplates;
    stage = "cooldown_fallback";
  }

  const available = [...candidatePool];
  const selected: T[] = [];
  while (available.length > 0 && selected.length < count) {
    const chosen = available[Math.floor(Math.random() * available.length)];
    selected.push(chosen);
    const next = available.filter(
      (template) => template.template_id !== chosen.template_id
    );
    available.length = 0;
    available.push(...next);
  }

  const firstSelected = selected[0] ?? null;
  const cooldownApplied =
    cooldownIds.size > 0 && (step1.length > 0 || step3.length > 0 || stage !== "unused_pool");

  return {
    selected,
    diagnostics: {
      selection_scope: "workspace_family_cycle",
      output_family: params.outputFamily,
      eligible_pool_size: eligibleTemplates.length,
      used_pool_size_before_pick: usedIdsInEligible.size,
      unused_pool_size_before_pick: unusedTemplates.length,
      cooldown_window_size: cooldownWindow,
      cooldown_applied: cooldownApplied,
      cycle_exhausted: cycleExhausted,
      cycle_reset_applied: cycleResetApplied,
      selected_template_id: firstSelected?.template_id ?? null,
      selected_template_slug: firstSelected?.slug ?? null,
      selection_stage: stage,
    },
  };
}
