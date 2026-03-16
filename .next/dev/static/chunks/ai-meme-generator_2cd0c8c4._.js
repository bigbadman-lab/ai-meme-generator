(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ai-meme-generator/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ai-meme-generator/components/marketing/hero-nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroNav",
    ()=>HeroNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/ai-meme-generator/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-meme-generator/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const NAV_LINKS = [
    {
        href: "/#why",
        label: "Why"
    },
    {
        href: "/#features-heading",
        label: "Features"
    },
    {
        href: "/#pricing-heading",
        label: "Pricing"
    },
    {
        href: "/#faq-heading",
        label: "FAQ"
    }
];
function HeroNav() {
    _s();
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full",
        "aria-label": "Main navigation",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-auto flex max-w-4xl items-center justify-between gap-4", "rounded-full border border-white/60 bg-white/80 px-4 py-1.5 shadow-lg shadow-black/5 backdrop-blur-md", "sm:px-5 sm:py-2"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "shrink-0 text-base font-semibold tracking-tight text-stone-900 hover:opacity-80 transition-opacity",
                        children: "Meme Builder"
                    }, void 0, false, {
                        fileName: "[project]/ai-meme-generator/components/marketing/hero-nav.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-center gap-8 sm:flex",
                        children: NAV_LINKS.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors",
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/ai-meme-generator/components/marketing/hero-nav.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/ai-meme-generator/components/marketing/hero-nav.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-center gap-3 sm:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                className: "rounded-full px-3 py-1.5 text-sm font-medium text-stone-600 hover:bg-stone-100 transition-colors",
                                children: "Log in"
                            }, void 0, false, {
                                fileName: "[project]/ai-meme-generator/components/marketing/hero-nav.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/signup",
                                className: "rounded-full bg-stone-900 px-3 py-1.5 text-sm font-medium !text-white shadow-sm hover:bg-stone-800 transition-colors font-display",
                                children: "Get started"
                            }, void 0, false, {
                                fileName: "[project]/ai-meme-generator/components/marketing/hero-nav.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ai-meme-generator/components/marketing/hero-nav.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setMobileOpen(!mobileOpen),
                        className: "flex h-9 w-9 items-center justify-center rounded-full text-stone-600 hover:bg-white/80 sm:hidden",
                        "aria-expanded": mobileOpen,
                        "aria-label": mobileOpen ? "Close menu" : "Open menu",
                        children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/ai-meme-generator/components/marketing/hero-nav.tsx",
                            lineNumber: 71,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/ai-meme-generator/components/marketing/hero-nav.tsx",
                            lineNumber: 71,
                            columnNumber: 53
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ai-meme-generator/components/marketing/hero-nav.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ai-meme-generator/components/marketing/hero-nav.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute left-0 right-0 top-full z-30 mt-2 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:hidden"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1",
                    children: [
                        NAV_LINKS.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                onClick: ()=>setMobileOpen(false),
                                className: "rounded-lg px-4 py-3 text-sm font-medium text-stone-700 hover:bg-stone-100",
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/ai-meme-generator/components/marketing/hero-nav.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex gap-2 border-t border-stone-200 pt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    onClick: ()=>setMobileOpen(false),
                                    className: "flex-1 rounded-lg border border-stone-200 py-3 text-center text-sm font-medium text-stone-700",
                                    children: "Log in"
                                }, void 0, false, {
                                    fileName: "[project]/ai-meme-generator/components/marketing/hero-nav.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/signup",
                                    onClick: ()=>setMobileOpen(false),
                                    className: "flex-1 rounded-lg bg-stone-900 py-3 text-center text-sm font-medium !text-white font-display",
                                    children: "Get started"
                                }, void 0, false, {
                                    fileName: "[project]/ai-meme-generator/components/marketing/hero-nav.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ai-meme-generator/components/marketing/hero-nav.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ai-meme-generator/components/marketing/hero-nav.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/ai-meme-generator/components/marketing/hero-nav.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ai-meme-generator/components/marketing/hero-nav.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(HeroNav, "33pz4tKGxA4/1e2zOoGo8gBQzP0=");
_c = HeroNav;
var _c;
__turbopack_context__.k.register(_c, "HeroNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=ai-meme-generator_2cd0c8c4._.js.map