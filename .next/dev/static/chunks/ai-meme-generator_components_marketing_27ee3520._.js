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
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$meme$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronDown, {
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
]);

//# sourceMappingURL=ai-meme-generator_components_marketing_27ee3520._.js.map