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
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/script.js [app-client] (ecmascript)");
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
                    children: "You just got Rickrolled."
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
                className: "overflow-hidden rounded-xl border border-[var(--canvas-border)] bg-stone-50 w-full aspect-[0.84375]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tenor-gif-embed w-full h-full [&_a]:hidden",
                    "data-postid": "22113173",
                    "data-share-method": "host",
                    "data-aspect-ratio": "0.84375",
                    "data-width": "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://tenor.com/view/rick-roll-rick-ashley-never-gonna-give-you-up-gif-22113173",
                            children: "Rick Roll Rick Ashley GIF"
                        }, void 0, false, {
                            fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        " from ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://tenor.com/search/rick+roll-gifs",
                            children: "Rick Roll GIFs"
                        }, void 0, false, {
                            fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                            lineNumber: 67,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "https://tenor.com/embed.js",
                strategy: "afterInteractive"
            }, void 0, false, {
                fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs text-[var(--canvas-muted)] line-clamp-2",
                children: [
                    "The meme has been used by ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Google"
                    }, void 0, false, {
                        fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                        lineNumber: 77,
                        columnNumber: 35
                    }, this),
                    ", ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "YouTube"
                    }, void 0, false, {
                        fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                        lineNumber: 77,
                        columnNumber: 60
                    }, this),
                    ", ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Reddit"
                    }, void 0, false, {
                        fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                        lineNumber: 77,
                        columnNumber: 86
                    }, this),
                    ", and countless brands."
                ]
            }, void 0, true, {
                fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                lineNumber: 76,
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
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$components$2f$marketing$2f$count$2d$up$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountUp"], {
                                end: end,
                                start: start,
                                duration: 2000,
                                className: "text-sm font-semibold tabular-nums text-[var(--canvas-heading)]"
                            }, void 0, false, {
                                fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, key, true, {
                        fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                lineNumber: 81,
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
"[project]/ai-meme-generator/node_modules/next/dist/client/request-idle-callback.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cancelIdleCallback: null,
    requestIdleCallback: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    },
    requestIdleCallback: function() {
        return requestIdleCallback;
    }
});
const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map
}),
"[project]/ai-meme-generator/node_modules/next/dist/client/script.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    handleClientScriptLoad: null,
    initScriptLoader: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    handleClientScriptLoad: function() {
        return handleClientScriptLoad;
    },
    initScriptLoader: function() {
        return initScriptLoader;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/ai-meme-generator/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/ai-meme-generator/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/ai-meme-generator/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/ai-meme-generator/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/ai-meme-generator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/ai-meme-generator/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)");
const _setattributesfromprops = __turbopack_context__.r("[project]/ai-meme-generator/node_modules/next/dist/client/set-attributes-from-props.js [app-client] (ecmascript)");
const _requestidlecallback = __turbopack_context__.r("[project]/ai-meme-generator/node_modules/next/dist/client/request-idle-callback.js [app-client] (ecmascript)");
const ScriptCache = new Map();
const LoadCache = new Set();
const insertStylesheets = (stylesheets)=>{
    // Case 1: Styles for afterInteractive/lazyOnload with appDir injected via handleClientScriptLoad
    //
    // Using ReactDOM.preinit to feature detect appDir and inject styles
    // Stylesheets might have already been loaded if initialized with Script component
    // Re-inject styles here to handle scripts loaded via handleClientScriptLoad
    // ReactDOM.preinit handles dedup and ensures the styles are loaded only once
    if (_reactdom.default.preinit) {
        stylesheets.forEach((stylesheet)=>{
            _reactdom.default.preinit(stylesheet, {
                as: 'style'
            });
        });
        return;
    }
    // Case 2: Styles for afterInteractive/lazyOnload with pages injected via handleClientScriptLoad
    //
    // We use this function to load styles when appdir is not detected
    // TODO: Use React float APIs to load styles once available for pages dir
    if (typeof window !== 'undefined') {
        let head = document.head;
        stylesheets.forEach((stylesheet)=>{
            let link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.href = stylesheet;
            head.appendChild(link);
        });
    }
};
const loadScript = (props)=>{
    const { src, id, onLoad = ()=>{}, onReady = null, dangerouslySetInnerHTML, children = '', strategy = 'afterInteractive', onError, stylesheets } = props;
    const cacheKey = id || src;
    // Script has already loaded
    if (cacheKey && LoadCache.has(cacheKey)) {
        return;
    }
    // Contents of this script are already loading/loaded
    if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
        ScriptCache.get(src).then(onLoad, onError);
        return;
    }
    /** Execute after the script first loaded */ const afterLoad = ()=>{
        // Run onReady for the first time after load event
        if (onReady) {
            onReady();
        }
        // add cacheKey to LoadCache when load successfully
        LoadCache.add(cacheKey);
    };
    const el = document.createElement('script');
    const loadPromise = new Promise((resolve, reject)=>{
        el.addEventListener('load', function(e) {
            resolve();
            if (onLoad) {
                onLoad.call(this, e);
            }
            afterLoad();
        });
        el.addEventListener('error', function(e) {
            reject(e);
        });
    }).catch(function(e) {
        if (onError) {
            onError(e);
        }
    });
    if (dangerouslySetInnerHTML) {
        // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
        el.innerHTML = dangerouslySetInnerHTML.__html || '';
        afterLoad();
    } else if (children) {
        el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        afterLoad();
    } else if (src) {
        el.src = src;
        // do not add cacheKey into LoadCache for remote script here
        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
        ScriptCache.set(src, loadPromise);
    }
    (0, _setattributesfromprops.setAttributesFromProps)(el, props);
    if (strategy === 'worker') {
        el.setAttribute('type', 'text/partytown');
    }
    el.setAttribute('data-nscript', strategy);
    // Load styles associated with this script
    if (stylesheets) {
        insertStylesheets(stylesheets);
    }
    document.body.appendChild(el);
};
function handleClientScriptLoad(props) {
    const { strategy = 'afterInteractive' } = props;
    if (strategy === 'lazyOnload') {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    } else {
        loadScript(props);
    }
}
function loadLazyScript(props) {
    if (document.readyState === 'complete') {
        (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
    } else {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    }
}
function addBeforeInteractiveToCache() {
    const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
    ];
    scripts.forEach((script)=>{
        const cacheKey = script.id || script.getAttribute('src');
        LoadCache.add(cacheKey);
    });
}
function initScriptLoader(scriptLoaderItems) {
    scriptLoaderItems.forEach(handleClientScriptLoad);
    addBeforeInteractiveToCache();
}
/**
 * Load a third-party scripts in an optimized way.
 *
 * Read more: [Next.js Docs: `next/script`](https://nextjs.org/docs/app/api-reference/components/script)
 */ function Script(props) {
    const { id, src = '', onLoad = ()=>{}, onReady = null, strategy = 'afterInteractive', onError, stylesheets, ...restProps } = props;
    // Context is available only during SSR
    let { updateScripts, scripts, getIsSsr, appDir, nonce } = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    // if a nonce is explicitly passed to the script tag, favor that over the automatic handling
    nonce = restProps.nonce || nonce;
    /**
   * - First mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
   *      onReady is skipped, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
   *      Once the script is loaded, the onLoad and onReady will be called by then
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   *
   * - Second mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
   *      onReady is called, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. The script is already loaded, loadScript bails out
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   */ const hasOnReadyEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        const cacheKey = id || src;
        if (!hasOnReadyEffectCalled.current) {
            // Run onReady if script has loaded before but component is re-mounted
            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
                onReady();
            }
            hasOnReadyEffectCalled.current = true;
        }
    }, [
        onReady,
        id,
        src
    ]);
    const hasLoadScriptEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        if (!hasLoadScriptEffectCalled.current) {
            if (strategy === 'afterInteractive') {
                loadScript(props);
            } else if (strategy === 'lazyOnload') {
                loadLazyScript(props);
            }
            hasLoadScriptEffectCalled.current = true;
        }
    }, [
        props,
        strategy
    ]);
    if (strategy === 'beforeInteractive' || strategy === 'worker') {
        if (updateScripts) {
            scripts[strategy] = (scripts[strategy] || []).concat([
                {
                    id,
                    src,
                    onLoad,
                    onReady,
                    onError,
                    ...restProps,
                    nonce
                }
            ]);
            updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
            // Script has already loaded during SSR
            LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
            loadScript({
                ...props,
                nonce
            });
        }
    }
    // For the app directory, we need React Float to preload these scripts.
    if (appDir) {
        // Injecting stylesheets here handles beforeInteractive and worker scripts correctly
        // For other strategies injecting here ensures correct stylesheet order
        // ReactDOM.preinit handles loading the styles in the correct order,
        // also ensures the stylesheet is loaded only once and in a consistent manner
        //
        // Case 1: Styles for beforeInteractive/worker with appDir - handled here
        // Case 2: Styles for beforeInteractive/worker with pages dir - Not handled yet
        // Case 3: Styles for afterInteractive/lazyOnload with appDir - handled here
        // Case 4: Styles for afterInteractive/lazyOnload with pages dir - handled in insertStylesheets function
        if (stylesheets) {
            stylesheets.forEach((styleSrc)=>{
                _reactdom.default.preinit(styleSrc, {
                    as: 'style'
                });
            });
        }
        // Before interactive scripts need to be loaded by Next.js' runtime instead
        // of native <script> tags, because they no longer have `defer`.
        if (strategy === 'beforeInteractive') {
            if (!src) {
                // For inlined scripts, we put the content in `children`.
                if (restProps.dangerouslySetInnerHTML) {
                    // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
                    restProps.children = restProps.dangerouslySetInnerHTML.__html;
                    delete restProps.dangerouslySetInnerHTML;
                }
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([
                            0,
                            {
                                ...restProps,
                                id
                            }
                        ])})`
                    }
                });
            } else {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([
                            src,
                            {
                                ...restProps,
                                id
                            }
                        ])})`
                    }
                });
            }
        } else if (strategy === 'afterInteractive') {
            if (src) {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
            }
        }
    }
    return null;
}
Object.defineProperty(Script, '__nextScript', {
    value: true
});
const _default = Script;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=script.js.map
}),
"[project]/ai-meme-generator/node_modules/next/script.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/ai-meme-generator/node_modules/next/dist/client/script.js [app-client] (ecmascript)");
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

//# sourceMappingURL=ai-meme-generator_6755ce8b._.js.map