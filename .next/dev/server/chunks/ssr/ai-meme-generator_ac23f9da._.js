module.exports = [
"[project]/ai-meme-generator/components/marketing/page-shell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageShell",
    ()=>PageShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
function PageShell({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("min-h-screen bg-stone-100/90 text-stone-900", // Equal top, side, and bottom padding so footer gap matches hero gap
        "px-3 pt-3 pb-3 sm:px-4 sm:pt-4 sm:pb-4 md:px-5 md:pt-5 md:pb-5 lg:px-6 lg:pt-6 lg:pb-6", "flex flex-col items-center gap-10 sm:gap-12 md:gap-16 lg:gap-20", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/ai-meme-generator/components/marketing/page-shell.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/ai-meme-generator/components/marketing/section-background.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionBackground",
    ()=>SectionBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
function SectionBackground({ variant, className, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 overflow-hidden", className),
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0", variant === "hero" && "bg-gradient-to-br from-sky-50/95 via-blue-50/90 to-indigo-50/80", variant === "gallery" && "bg-gradient-to-b from-stone-50/98 to-amber-50/30", variant === "features" && "bg-gradient-to-b from-emerald-50/40 via-white/90 to-teal-50/30", variant === "founder" && "bg-gradient-to-b from-orange-50/30 via-amber-50/20 to-white/95", variant === "pricing" && "bg-gradient-to-b from-violet-50/25 via-white/95 to-slate-50/40", variant === "faq" && "bg-gradient-to-b from-slate-50/50 to-white/98", variant === "footer" && "bg-gradient-to-b from-stone-900 to-stone-950")
            }, void 0, false, {
                fileName: "[project]/ai-meme-generator/components/marketing/section-background.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            variant === "hero" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/ai-meme-generator/components/marketing/section-background.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-100/50 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/ai-meme-generator/components/marketing/section-background.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/ai-meme-generator/components/marketing/section-background.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            variant === "gallery" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -right-16 top-1/4 h-56 w-56 rounded-full bg-amber-100/50 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/ai-meme-generator/components/marketing/section-background.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 h-40 w-40 rounded-full bg-stone-200/30 blur-2xl"
                    }, void 0, false, {
                        fileName: "[project]/ai-meme-generator/components/marketing/section-background.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            variant === "features" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 top-0 h-64 w-64 rounded-full bg-emerald-100/40 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/ai-meme-generator/components/marketing/section-background.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-0 h-48 w-48 rounded-full bg-teal-100/30 blur-2xl"
                    }, void 0, false, {
                        fileName: "[project]/ai-meme-generator/components/marketing/section-background.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            variant === "founder" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute right-0 top-1/3 h-52 w-52 rounded-full bg-orange-100/40 blur-3xl"
                }, void 0, false, {
                    fileName: "[project]/ai-meme-generator/components/marketing/section-background.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            }, void 0, false),
            variant === "pricing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -left-12 top-0 h-44 w-44 rounded-full bg-violet-100/40 blur-2xl"
                    }, void 0, false, {
                        fileName: "[project]/ai-meme-generator/components/marketing/section-background.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-1/4 h-36 w-36 rounded-full bg-slate-200/30 blur-2xl"
                    }, void 0, false, {
                        fileName: "[project]/ai-meme-generator/components/marketing/section-background.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            variant === "footer" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/4 top-0 h-80 w-80 rounded-full bg-stone-800/60 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/ai-meme-generator/components/marketing/section-background.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-0 h-64 w-64 rounded-full bg-stone-800/40 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/ai-meme-generator/components/marketing/section-background.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/ai-meme-generator/components/marketing/section-background.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/ai-meme-generator/components/marketing/framed-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FramedSection",
    ()=>FramedSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$components$2f$marketing$2f$section$2d$background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/components/marketing/section-background.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const variantStyles = {
    hero: {
        maxWidth: "max-w-[1600px]",
        // Top padding smaller than page gutters so nav–frame gap < site–frame gap
        padding: "px-4 pt-1.5 pb-8 sm:px-6 sm:pt-2 sm:pb-10 md:px-8 md:pt-3 md:pb-12 lg:px-10 lg:pt-4 lg:pb-16",
        radius: "rounded-3xl sm:rounded-[2rem] md:rounded-[2.25rem]",
        shadow: "shadow-xl shadow-black/5",
        border: "border border-stone-200/80"
    },
    default: {
        maxWidth: "max-w-[1200px]",
        padding: "px-6 py-12 sm:px-8 sm:py-16 md:px-10 md:py-20",
        radius: "rounded-2xl sm:rounded-3xl",
        shadow: "shadow-lg shadow-black/[0.04]",
        border: "border border-stone-200/60"
    },
    footer: {
        maxWidth: "max-w-[1600px]",
        // Match hero container gaps exactly
        padding: "px-4 pt-1.5 pb-8 sm:px-6 sm:pt-2 sm:pb-10 md:px-8 md:pt-3 md:pb-12 lg:px-10 lg:pt-4 lg:pb-16",
        radius: "rounded-3xl sm:rounded-[2rem] md:rounded-[2.25rem]",
        shadow: "shadow-2xl shadow-black/10",
        border: "border border-stone-700/50"
    }
};
function FramedSection({ variant, backgroundVariant, children, className, id, "aria-labelledby": ariaLabelledby }) {
    const styles = variantStyles[variant];
    const bgVariant = backgroundVariant ?? (variant === "default" ? "gallery" : variant);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        "aria-labelledby": ariaLabelledby,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full", id && "scroll-mt-24", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative mx-auto", styles.maxWidth, styles.radius, styles.shadow, styles.border, styles.padding, variant !== "hero" && "overflow-hidden", variant === "footer" && "bg-stone-900/95 text-stone-100"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$components$2f$marketing$2f$section$2d$background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionBackground"], {
                    variant: bgVariant
                }, void 0, false, {
                    fileName: "[project]/ai-meme-generator/components/marketing/framed-section.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/ai-meme-generator/components/marketing/framed-section.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ai-meme-generator/components/marketing/framed-section.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/ai-meme-generator/components/marketing/framed-section.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
"[project]/ai-meme-generator/hooks/use-count-up.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCountUp",
    ()=>useCountUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useCountUp({ end, duration = 1800, start = 0, onComplete }) {
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(start);
    const [prefersReducedMotion, setPrefersReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const mq = undefined;
        const handler = undefined;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (prefersReducedMotion || end === start) {
            setValue(end);
            onComplete?.();
            return;
        }
        const startTime = performance.now();
        const tick = (now)=>{
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
        };
        const frame = requestAnimationFrame(tick);
        return ()=>cancelAnimationFrame(frame);
    }, [
        end,
        start,
        duration,
        prefersReducedMotion,
        onComplete
    ]);
    return value;
}
}),
"[project]/ai-meme-generator/lib/format-number.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/ai-meme-generator/components/marketing/count-up.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CountUp",
    ()=>CountUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$hooks$2f$use$2d$count$2d$up$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/hooks/use-count-up.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$format$2d$number$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/lib/format-number.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function CountUp({ end, duration = 1800, start = 0, className }) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$hooks$2f$use$2d$count$2d$up$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCountUp"])({
        end,
        duration,
        start
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: className,
        "aria-label": `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$format$2d$number$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatNumber"])(value)}`,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$format$2d$number$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatNumber"])(value)
    }, void 0, false, {
        fileName: "[project]/ai-meme-generator/components/marketing/count-up.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/ai-meme-generator/components/marketing/engagement-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EngagementCard",
    ()=>EngagementCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/script.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-ssr] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$components$2f$marketing$2f$count$2d$up$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/components/marketing/count-up.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const METRICS = [
    {
        key: "likes",
        label: "Likes",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        start: 124,
        end: 1247,
        color: "text-[#1877F2]"
    },
    {
        key: "shares",
        label: "Shares",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"],
        start: 12,
        end: 146,
        color: "text-[#42B72A]"
    },
    {
        key: "comments",
        label: "Comments",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
        start: 4,
        end: 63,
        color: "text-[#1877F2]"
    },
    {
        key: "saves",
        label: "Saves",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"],
        start: 8,
        end: 94,
        color: "text-[#65676B]"
    }
];
function EngagementCard({ className }) {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reduceMotion, setReduceMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const mq = undefined;
        const handler = undefined;
        const t = undefined;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full max-w-sm rounded-2xl border border-[var(--canvas-border)] bg-[var(--canvas-surface)] p-4 shadow-lg transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-0.5", "opacity-0 translate-y-3 transition-all duration-500 ease-out", mounted && "opacity-100 translate-y-0", className),
        "aria-label": "Social engagement preview",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden rounded-xl border border-[var(--canvas-border)] bg-stone-50 w-full aspect-[0.84375]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tenor-gif-embed w-full h-full [&_a]:hidden",
                    "data-postid": "22113173",
                    "data-share-method": "host",
                    "data-aspect-ratio": "0.84375",
                    "data-width": "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://tenor.com/view/rick-roll-rick-ashley-never-gonna-give-you-up-gif-22113173",
                            children: "Rick Roll Rick Ashley GIF"
                        }, void 0, false, {
                            fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        " from ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "https://tenor.com/embed.js",
                strategy: "afterInteractive"
            }, void 0, false, {
                fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs text-[var(--canvas-muted)] line-clamp-2",
                children: [
                    "The meme has been used by ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Google"
                    }, void 0, false, {
                        fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                        lineNumber: 77,
                        columnNumber: 35
                    }, this),
                    ", ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "YouTube"
                    }, void 0, false, {
                        fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                        lineNumber: 77,
                        columnNumber: 60
                    }, this),
                    ", ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex items-center justify-between gap-2 border-t border-[var(--canvas-border)] pt-3",
                children: METRICS.map(({ key, label, icon: Icon, start, end, color }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-0.5 min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex shrink-0", mounted && !reduceMotion && "animate-icon-pop"),
                                style: mounted && !reduceMotion ? {
                                    animationDelay: `${200 + i * 80}ms`
                                } : undefined,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", color),
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$components$2f$marketing$2f$count$2d$up$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CountUp"], {
                                end: end,
                                start: start,
                                duration: 2000,
                                className: "text-sm font-semibold tabular-nums text-[var(--canvas-heading)]"
                            }, void 0, false, {
                                fileName: "[project]/ai-meme-generator/components/marketing/engagement-card.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/ai-meme-generator/components/marketing/floating-note.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingNote",
    ()=>FloatingNote
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/lib/utils.ts [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border border-[var(--canvas-border)] shadow-sm transition-shadow duration-200 hover:shadow-md", accentBg[accent], rotateClass, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/ai-meme-generator/components/marketing/floating-note.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/ai-meme-generator/components/marketing/faq-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQSection",
    ()=>FAQSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$components$2f$marketing$2f$framed$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/components/marketing/framed-section.tsx [app-ssr] (ecmascript)");
"use client";
;
;
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
    const [openId, setOpenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$components$2f$marketing$2f$framed$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FramedSection"], {
        variant: "default",
        backgroundVariant: "faq",
        id: "faq-heading",
        "aria-labelledby": "faq-heading",
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: "faq-heading",
                className: "text-center text-2xl font-bold text-stone-900 md:text-3xl",
                children: "Frequently asked questions"
            }, void 0, false, {
                fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "marketing-copy mx-auto mt-2 max-w-xl text-center",
                children: "Quick answers to common questions."
            }, void 0, false, {
                fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 space-y-2",
                children: FAQ_ITEMS.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-stone-200 bg-white/80 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setOpenId(openId === i ? null : i),
                                className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
                                "aria-expanded": openId === i,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-stone-900",
                                        children: item.question
                                    }, void 0, false, {
                                        fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5 shrink-0 text-stone-500 transition-transform", openId === i && "rotate-180")
                                    }, void 0, false, {
                                        fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden transition-all", openId === i ? "max-h-64 opacity-100" : "max-h-0 opacity-0"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "marketing-copy border-t border-stone-200 px-5 py-4 text-sm",
                                    children: item.answer
                                }, void 0, false, {
                                    fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ai-meme-generator/components/marketing/faq-section.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/ai-meme-generator/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/ai-meme-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/ai-meme-generator/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}),
"[project]/ai-meme-generator/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/head-manager-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/ai-meme-generator/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].HeadManagerContext; //# sourceMappingURL=head-manager-context.js.map
}),
"[project]/ai-meme-generator/node_modules/next/dist/client/set-attributes-from-props.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setAttributesFromProps", {
    enumerable: true,
    get: function() {
        return setAttributesFromProps;
    }
});
const DOMAttributeNames = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv',
    noModule: 'noModule'
};
const ignoreProps = [
    'onLoad',
    'onReady',
    'dangerouslySetInnerHTML',
    'children',
    'onError',
    'strategy',
    'stylesheets'
];
function isBooleanScriptAttribute(attr) {
    return [
        'async',
        'defer',
        'noModule'
    ].includes(attr);
}
function setAttributesFromProps(el, props) {
    for (const [p, value] of Object.entries(props)){
        if (!props.hasOwnProperty(p)) continue;
        if (ignoreProps.includes(p)) continue;
        // we don't render undefined props to the DOM
        if (value === undefined) {
            continue;
        }
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr)) {
            // Correctly assign boolean script attributes
            // https://github.com/vercel/next.js/pull/20748
            ;
            el[attr] = !!value;
        } else {
            el.setAttribute(attr, String(value));
        }
        // Remove falsy non-zero boolean attributes so they are correctly interpreted
        // (e.g. if we set them to false, this coerces to the string "false", which the browser interprets as true)
        if (value === false || el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr) && (!value || value === 'false')) {
            // Call setAttribute before, as we need to set and unset the attribute to override force async:
            // https://html.spec.whatwg.org/multipage/scripting.html#script-force-async
            el.setAttribute(attr, '');
            el.removeAttribute(attr);
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=set-attributes-from-props.js.map
}),
"[project]/ai-meme-generator/node_modules/next/dist/client/request-idle-callback.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/ai-meme-generator/node_modules/next/dist/client/script.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _interop_require_default = __turbopack_context__.r("[project]/ai-meme-generator/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/ai-meme-generator/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/ai-meme-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/ai-meme-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/ai-meme-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/ai-meme-generator/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/head-manager-context.js [app-ssr] (ecmascript)");
const _setattributesfromprops = __turbopack_context__.r("[project]/ai-meme-generator/node_modules/next/dist/client/set-attributes-from-props.js [app-ssr] (ecmascript)");
const _requestidlecallback = __turbopack_context__.r("[project]/ai-meme-generator/node_modules/next/dist/client/request-idle-callback.js [app-ssr] (ecmascript)");
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
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
"[project]/ai-meme-generator/node_modules/next/script.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/ai-meme-generator/node_modules/next/dist/client/script.js [app-ssr] (ecmascript)");
}),
"[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Heart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Heart", [
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
"[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Heart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript)");
}),
"[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Share2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Share2", [
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
"[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Share2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript)");
}),
"[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const MessageCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("MessageCircle", [
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
"[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript)");
}),
"[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Bookmark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Bookmark", [
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
"[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-ssr] (ecmascript) <export default as Bookmark>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bookmark",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-ssr] (ecmascript)");
}),
"[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ChevronDown", [
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
"[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=ai-meme-generator_ac23f9da._.js.map