(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ProjectCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const projects = [
    {
        title: "KidsGo",
        slug: "kidsgo",
        description: "Marketplace for children’s activities (launch 2026)"
    },
    {
        title: "Acting Europe",
        slug: "acting-europe",
        description: "Theatre & culture booking platform"
    },
    {
        title: "Labs Prototypes",
        slug: "labs-prototypes",
        description: "Experimental builds & hackathon outputs"
    }
];
function Card({ p, onSelect, onHover }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        onMouseEnter: onHover,
        onClick: onSelect,
        className: "group relative h-56 w-64 sm:h-64 sm:w-80 md:h-72 md:w-96 shrink-0 overflow-hidden rounded-xl border border-border bg-card/60 cursor-pointer",
        whileHover: {
            scale: 1.01
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-background to-card"
            }, void 0, false, {
                fileName: "[project]/components/ProjectCarousel.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-30",
                style: {
                    background: "radial-gradient(400px circle at 30% 30%, rgba(121,207,255,0.18), transparent 60%), radial-gradient(400px circle at 70% 70%, rgba(139,92,246,0.18), transparent 60%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/ProjectCarousel.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex flex-col justify-end p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-lg dark:bg-black/40 bg-white/60 backdrop-blur p-3 text-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-header text-base sm:text-lg",
                                    children: p.title
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectCarousel.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/work/${p.slug}`,
                                    className: "text-xs sm:text-sm underline underline-offset-4",
                                    children: "View Project"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectCarousel.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProjectCarousel.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-[11px] sm:text-xs opacity-80",
                            children: p.description
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectCarousel.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProjectCarousel.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProjectCarousel.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProjectCarousel.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = Card;
function ProjectCarousel() {
    _s();
    const [centerIndex, setCenterIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Math.floor(projects.length / 2));
    const goPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectCarousel.useCallback[goPrev]": ()=>setCenterIndex({
                "ProjectCarousel.useCallback[goPrev]": (i)=>Math.max(0, i - 1)
            }["ProjectCarousel.useCallback[goPrev]"])
    }["ProjectCarousel.useCallback[goPrev]"], []);
    const goNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectCarousel.useCallback[goNext]": ()=>setCenterIndex({
                "ProjectCarousel.useCallback[goNext]": (i)=>Math.min(projects.length - 1, i + 1)
            }["ProjectCarousel.useCallback[goNext]"])
    }["ProjectCarousel.useCallback[goNext]"], []);
    const [hovering, setHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Auto-advance when not hovering
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectCarousel.useEffect": ()=>{
            if (hovering) return;
            const id = setInterval({
                "ProjectCarousel.useEffect.id": ()=>{
                    setCenterIndex({
                        "ProjectCarousel.useEffect.id": (i)=>(i + 1) % projects.length
                    }["ProjectCarousel.useEffect.id"]);
                }
            }["ProjectCarousel.useEffect.id"], 5500);
            return ({
                "ProjectCarousel.useEffect": ()=>clearInterval(id)
            })["ProjectCarousel.useEffect"];
        }
    }["ProjectCarousel.useEffect"], [
        hovering
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative hidden md:flex h-72 items-center justify-center overflow-hidden px-4",
                tabIndex: 0,
                onMouseEnter: ()=>setHovering(true),
                onMouseLeave: ()=>setHovering(false),
                onKeyDown: (e)=>{
                    if (e.key === "ArrowLeft") goPrev();
                    if (e.key === "ArrowRight") goNext();
                },
                "aria-label": "Selected Projects Carousel",
                children: [
                    projects.map((p, i)=>{
                        const offset = i - centerIndex;
                        const rotate = 0;
                        const translateX = offset * 110;
                        const translateY = Math.abs(offset) * 10;
                        const scale = 1 - Math.abs(offset) * 0.08;
                        const opacity = offset === 0 ? 1 : Math.max(0.30, 0.85 - Math.abs(offset) * 0.28);
                        const zIndex = 100 - Math.abs(offset);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute",
                            style: {
                                zIndex
                            },
                            "aria-current": offset === 0 ? "true" : undefined,
                            animate: {
                                x: translateX,
                                y: translateY,
                                rotate,
                                scale,
                                opacity
                            },
                            transition: {
                                type: "tween",
                                ease: "easeOut",
                                duration: 0.45
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                p: p,
                                onSelect: ()=>setCenterIndex(i)
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCarousel.tsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this)
                        }, p.slug, false, {
                            fileName: "[project]/components/ProjectCarousel.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-2 flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "rounded-md border border-border bg-card/70 px-3 py-1 text-sm hover:bg-muted",
                                onClick: goPrev,
                                "aria-label": "Previous project",
                                children: "Prev"
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCarousel.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "rounded-md border border-border bg-card/70 px-3 py-1 text-sm hover:bg-muted",
                                onClick: goNext,
                                "aria-label": "Next project",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCarousel.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectCarousel.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProjectCarousel.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden flex gap-6 overflow-x-auto pb-2",
                style: {
                    scrollSnapType: "x mandatory"
                },
                children: projects.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            scrollSnapAlign: "start"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                            p: p
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectCarousel.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this)
                    }, p.slug, false, {
                        fileName: "[project]/components/ProjectCarousel.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ProjectCarousel.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProjectCarousel.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(ProjectCarousel, "IPyjmgYAPETnHBtkPbKlkMpwlc8=");
_c1 = ProjectCarousel;
var _c, _c1;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "ProjectCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProjectCarousel.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/ProjectCarousel.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_ProjectCarousel_tsx_655cd3bd._.js.map