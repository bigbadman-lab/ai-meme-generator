(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ai-meme-generator/components/marketing/canvas-background.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasBackground",
    ()=>CanvasBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function CanvasBackground() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 -z-10",
        style: {
            backgroundColor: "var(--canvas-bg)",
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--canvas-dot) 1px, transparent 0)`,
            backgroundSize: "24px 24px"
        },
        "aria-hidden": true
    }, void 0, false, {
        fileName: "[project]/ai-meme-generator/components/marketing/canvas-background.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = CanvasBackground;
var _c;
__turbopack_context__.k.register(_c, "CanvasBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ai-meme-generator/hooks/use-count-up.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCountUp",
    ()=>useCountUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useCountUp({ end, duration = 1800, start = 0, onComplete }) {
    _s();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(start);
    const [prefersReducedMotion, setPrefersReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCountUp.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
            setPrefersReducedMotion(mq.matches);
            const handler = {
                "useCountUp.useEffect.handler": ()=>setPrefersReducedMotion(mq.matches)
            }["useCountUp.useEffect.handler"];
            mq.addEventListener("change", handler);
            return ({
                "useCountUp.useEffect": ()=>mq.removeEventListener("change", handler)
            })["useCountUp.useEffect"];
        }
    }["useCountUp.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCountUp.useEffect": ()=>{
            if (prefersReducedMotion || end === start) {
                setValue(end);
                onComplete?.();
                return;
            }
            const startTime = performance.now();
            const tick = {
                "useCountUp.useEffect.tick": (now)=>{
                    const elapsed = now - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    // Ease out for a smooth deceleration at the end
                    const eased = 1 - (1 - progress) ** 2;
                    const current = Math.round(start + (end - start) * eased);
                    setValue(current);
                    if (progress < 1) {
                        requestAnimationFrame(tick);
                    } else {
                        setValue(end);
                        onComplete?.();
                    }
                }
            }["useCountUp.useEffect.tick"];
            const frame = requestAnimationFrame(tick);
            return ({
                "useCountUp.useEffect": ()=>cancelAnimationFrame(frame)
            })["useCountUp.useEffect"];
        }
    }["useCountUp.useEffect"], [
        end,
        start,
        duration,
        prefersReducedMotion,
        onComplete
    ]);
    return value;
}
_s(useCountUp, "RHCW0YuAzMoPHF7qExAQWg4FE/c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ai-meme-generator/lib/format-number.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Format a number with commas for display (e.g. 1240 → "1,240").
 */ __turbopack_context__.s([
    "formatNumber",
    ()=>formatNumber
]);
function formatNumber(value) {
    return Math.round(value).toLocaleString();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ai-meme-generator/components/marketing/count-up.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CountUp",
    ()=>CountUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$hooks$2f$use$2d$count$2d$up$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/hooks/use-count-up.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$format$2d$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/lib/format-number.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CountUp({ end, duration = 1800, start = 0, className }) {
    _s();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$hooks$2f$use$2d$count$2d$up$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCountUp"])({
        end,
        duration,
        start
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: className,
        "aria-label": `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$format$2d$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(value)}`,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$format$2d$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(value)
    }, void 0, false, {
        fileName: "[project]/ai-meme-generator/components/marketing/count-up.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(CountUp, "fQQB/+/+sys770S3LXYSurHUOn8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$hooks$2f$use$2d$count$2d$up$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCountUp"]
    ];
});
_c = CountUp;
var _c;
__turbopack_context__.k.register(_c, "CountUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ai-meme-generator/components/marketing/engagement-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EngagementCard",
    ()=>EngagementCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$components$2f$marketing$2f$count$2d$up$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/components/marketing/count-up.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const METRICS = [
    {
        key: "likes",
        label: "Likes",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        start: 124,
        end: 1247,
        color: "text-[#1877F2]"
    },
    {
        key: "shares",
        label: "Shares",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"],
        start: 12,
        end: 146,
        color: "text-[#42B72A]"
    },
    {
        key: "comments",
        label: "Comments",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
        start: 4,
        end: 63,
        color: "text-[#1877F2]"
    },
    {
        key: "saves",
        label: "Saves",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"],
        start: 8,
        end: 94,
        color: "text-[#65676B]"
    }
];
function EngagementCard({ className }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reduceMotion, setReduceMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EngagementCard.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
            setReduceMotion(mq.matches);
            const handler = {
                "EngagementCard.useEffect.handler": ()=>setReduceMotion(mq.matches)
            }["EngagementCard.useEffect.handler"];
            mq.addEventListener("change", handler);
            if (mq.matches) {
                setMounted(true);
                return ({
                    "EngagementCard.useEffect": ()=>mq.removeEventListener("change", handler)
                })["EngagementCard.useEffect"];
            }
            const t = setTimeout({
                "EngagementCard.useEffect.t": ()=>setMounted(true)
            }["EngagementCard.useEffect.t"], 100);
            return ({
                "EngagementCard.useEffect": ()=>{
                    clearTimeout(t);
                    mq.removeEventListener("change", handler);
                }
            })["EngagementCard.useEffect"];
        }
    }["EngagementCard.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full max-w-sm rounded-2xl border border-[var(--canvas-border)] bg-[var(--canvas-surface)] p-4 shadow-lg transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-0.5", "opacity-0 translate-y-3 transition-all duration-500 ease-out", mounted && "opacity-100 translate-y-0", className),
        "aria-label": "Social engagement preview",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "rounded-full bg-[var(--canvas-accent-mint)] px-3 py-1 text-xs font-medium text-[var(--canvas-heading)]",
                    children: "Engagement rising"
                }, void 0, false, {
                    fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden rounded-xl border border-[var(--canvas-border)] bg-stone-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "aspect-[4/3] flex flex-col items-center justify-center p-4 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium text-[var(--canvas-heading)] leading-snug",
                            children: [
                                "When the brief says",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                "“make it pop”"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-[var(--canvas-muted)]",
                            children: "— and you actually do"
                        }, void 0, false, {
                            fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs text-[var(--canvas-muted)] line-clamp-2",
                children: "On-brand meme, ready for social. Reach and engagement in one asset."
            }, void 0, false, {
                fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex items-center justify-between gap-2 border-t border-[var(--canvas-border)] pt-3",
                children: METRICS.map(({ key, label, icon: Icon, start, end, color }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-0.5 min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex shrink-0", mounted && !reduceMotion && "animate-icon-pop"),
                                style: mounted && !reduceMotion ? {
                                    animationDelay: `${200 + i * 80}ms`
                                } : undefined,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", color),
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$components$2f$marketing$2f$count$2d$up$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountUp"], {
                                end: end,
                                start: start,
                                duration: 2000,
                                className: "text-sm font-semibold tabular-nums text-[var(--canvas-heading)]"
                            }, void 0, false, {
                                fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, key, true, {
                        fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(EngagementCard, "Hx2JAe7fvzlzQ5RbN56+bGFAFXg=");
_c = EngagementCard;
var _c;
__turbopack_context__.k.register(_c, "EngagementCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ai-meme-generator/components/marketing/floating-note.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingNote",
    ()=>FloatingNote
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
const accentBg = {
    yellow: "bg-[var(--canvas-accent-yellow)]",
    mint: "bg-[var(--canvas-accent-mint)]",
    peach: "bg-[var(--canvas-accent-peach)]",
    blue: "bg-[var(--canvas-accent-blue)]",
    white: "bg-[var(--canvas-surface)]"
};
function FloatingNote({ children, className, accent = "white", rotate = 0 }) {
    const rotateClass = rotate === -2 ? "-rotate-[4deg]" : rotate === -1 ? "-rotate-[2deg]" : rotate === 1 ? "rotate-[2deg]" : rotate === 2 ? "rotate-[4deg]" : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border border-[var(--canvas-border)] shadow-sm transition-shadow duration-200 hover:shadow-md", accentBg[accent], rotateClass, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/ai-meme-generator/components/marketing/floating-note.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = FloatingNote;
var _c;
__turbopack_context__.k.register(_c, "FloatingNote");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ai-meme-generator/components/marketing/faq-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQSection",
    ()=>FAQSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const FAQ_ITEMS = [
    {
        question: "What kind of memes can I create?",
        answer: "You can create image-based memes using popular templates (e.g. Drake, Change My Mind, Two Buttons). Add your own captions and branding. We focus on formats that work for launches, promos, and social."
    },
    {
        question: "Is it suitable for my brand?",
        answer: "Yes. Meme Builder is built for businesses. You control the tone, add promo context, and keep everything in a library so your memes stay on brand."
    },
    {
        question: "How fast can I get a meme?",
        answer: "Pick a template, add your text, and generate. Most memes are ready in seconds. You can tweak and re-download as needed."
    },
    {
        question: "Can my team use it?",
        answer: "Pro and Enterprise plans include team seats. Share templates, manage a shared library, and keep campaigns consistent across the team."
    }
];
function FAQSection() {
    _s();
    const [openId, setOpenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq-heading",
        className: "scroll-mt-24 px-6 py-20 md:py-28",
        "aria-labelledby": "faq-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: "faq-heading",
                    className: "text-center text-2xl font-bold text-[var(--canvas-heading)] md:text-3xl",
                    children: "Frequently asked questions"
                }, void 0, false, {
                    fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mx-auto mt-2 max-w-xl text-center text-[var(--canvas-muted)]",
                    children: "Quick answers to common questions."
                }, void 0, false, {
                    fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 space-y-2",
                    children: FAQ_ITEMS.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-[var(--canvas-border)] bg-[var(--canvas-surface)] shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setOpenId(openId === i ? null : i),
                                    className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
                                    "aria-expanded": openId === i,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-[var(--canvas-heading)]",
                                            children: item.question
                                        }, void 0, false, {
                                            fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5 shrink-0 text-[var(--canvas-muted)] transition-transform", openId === i && "rotate-180")
                                        }, void 0, false, {
                                            fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden transition-all", openId === i ? "max-h-64 opacity-100" : "max-h-0 opacity-0"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "border-t border-[var(--canvas-border)] px-5 py-4 text-sm leading-relaxed text-[var(--canvas-muted)]",
                                        children: item.answer
                                    }, void 0, false, {
                                        fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(FAQSection, "uzWrgrZsf6o9FyukgR4niCncjho=");
_c = FAQSection;
var _c;
__turbopack_context__.k.register(_c, "FAQSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Heart
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Heart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Heart", [
    [
        "path",
        {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
            key: "c3ymky"
        }
    ]
]);
;
 //# sourceMappingURL=heart.js.map
}),
"[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Heart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript)");
}),
"[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Share2
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Share2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Share2", [
    [
        "circle",
        {
            cx: "18",
            cy: "5",
            r: "3",
            key: "gq8acd"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "12",
            r: "3",
            key: "w7nqdw"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "19",
            r: "3",
            key: "1xt0gg"
        }
    ],
    [
        "line",
        {
            x1: "8.59",
            x2: "15.42",
            y1: "13.51",
            y2: "17.49",
            key: "47mynk"
        }
    ],
    [
        "line",
        {
            x1: "15.41",
            x2: "8.59",
            y1: "6.51",
            y2: "10.49",
            key: "1n3mei"
        }
    ]
]);
;
 //# sourceMappingURL=share-2.js.map
}),
"[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Share2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript)");
}),
"[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessageCircle
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const MessageCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("MessageCircle", [
    [
        "path",
        {
            d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
            key: "vv11sd"
        }
    ]
]);
;
 //# sourceMappingURL=message-circle.js.map
}),
"[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript)");
}),
"[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Bookmark
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Bookmark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Bookmark", [
    [
        "path",
        {
            d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
            key: "1fy3hk"
        }
    ]
]);
;
 //# sourceMappingURL=bookmark.js.map
}),
"[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bookmark",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript)");
}),
"[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChevronDown
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChevronDown", [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=ai-meme-generator_98ee8001._.js.map