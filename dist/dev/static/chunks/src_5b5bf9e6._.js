(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/HeroBackground.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function HeroBackground({ variant = 'default' }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            let animationId;
            let particles = [];
            let fireflies = [];
            function resize() {
                const parent = canvas.parentElement;
                canvas.width = parent.offsetWidth;
                canvas.height = parent.offsetHeight;
            }
            function createParticles() {
                particles = [];
                fireflies = [];
                const w = canvas.width;
                const h = canvas.height;
                // Define colors based on theme
                let baseHue = 100; // Default green
                if (theme === 'ocean') baseHue = 35; // Refined Orange #f8a533
                // Floating leaf-like particles
                for(let i = 0; i < 18; i++){
                    particles.push({
                        x: Math.random() * w,
                        y: Math.random() * h,
                        size: 2 + Math.random() * 4,
                        speedX: (Math.random() - 0.5) * 0.3,
                        speedY: -0.15 - Math.random() * 0.35,
                        opacity: 0.15 + Math.random() * 0.25,
                        hue: baseHue + (Math.random() * 40 - 20),
                        wobble: Math.random() * Math.PI * 2,
                        wobbleSpeed: 0.01 + Math.random() * 0.02
                    });
                }
                // Firefly / sparkle particles
                for(let i = 0; i < 12; i++){
                    fireflies.push({
                        x: Math.random() * w,
                        y: Math.random() * h,
                        size: 1.5 + Math.random() * 2.5,
                        speedX: (Math.random() - 0.5) * 0.2,
                        speedY: (Math.random() - 0.5) * 0.2,
                        opacity: 0,
                        maxOpacity: 0.3 + Math.random() * 0.4,
                        phase: Math.random() * Math.PI * 2,
                        phaseSpeed: 0.015 + Math.random() * 0.02,
                        glowSize: 8 + Math.random() * 16,
                        isGold: Math.random() > 0.6
                    });
                }
            }
            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                const w = canvas.width;
                const h = canvas.height;
                // Draw floating particles
                particles.forEach({
                    "HeroBackground.useEffect.draw": (p)=>{
                        p.wobble += p.wobbleSpeed;
                        p.x += p.speedX + Math.sin(p.wobble) * 0.3;
                        p.y += p.speedY;
                        // Wrap around
                        if (p.y < -10) {
                            p.y = h + 10;
                            p.x = Math.random() * w;
                        }
                        if (p.x < -10) p.x = w + 10;
                        if (p.x > w + 10) p.x = -10;
                        ctx.save();
                        ctx.globalAlpha = p.opacity;
                        ctx.fillStyle = `hsla(${p.hue}, 50%, 55%, 1)`;
                        ctx.beginPath();
                        // Draw leaf-like shapes
                        ctx.ellipse(p.x, p.y, p.size, p.size * 0.6, p.wobble, 0, Math.PI * 2);
                        ctx.fill();
                        // Soft glow around particle
                        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
                        gradient.addColorStop(0, `hsla(${p.hue}, 50%, 55%, 0.15)`);
                        gradient.addColorStop(1, 'transparent');
                        ctx.fillStyle = gradient;
                        ctx.fillRect(p.x - p.size * 3, p.y - p.size * 3, p.size * 6, p.size * 6);
                        ctx.restore();
                    }
                }["HeroBackground.useEffect.draw"]);
                // Draw fireflies
                fireflies.forEach({
                    "HeroBackground.useEffect.draw": (f)=>{
                        f.phase += f.phaseSpeed;
                        f.opacity = f.maxOpacity * (0.5 + 0.5 * Math.sin(f.phase));
                        f.x += f.speedX;
                        f.y += f.speedY;
                        // Gentle drift changes
                        if (Math.random() < 0.005) {
                            f.speedX = (Math.random() - 0.5) * 0.2;
                            f.speedY = (Math.random() - 0.5) * 0.2;
                        }
                        // Wrap
                        if (f.x < -20) f.x = w + 20;
                        if (f.x > w + 20) f.x = -20;
                        if (f.y < -20) f.y = h + 20;
                        if (f.y > h + 20) f.y = -20;
                        ctx.save();
                        ctx.globalAlpha = f.opacity;
                        // Outer glow
                        let glowHue = f.isGold ? 42 : 140;
                        if (theme === 'ocean') glowHue = f.isGold ? 42 : 35;
                        const glowColor = `${glowHue}, 38%, 54%`;
                        const glow = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.glowSize);
                        glow.addColorStop(0, `hsla(${glowColor}, 0.6)`);
                        glow.addColorStop(0.4, `hsla(${glowColor}, 0.15)`);
                        glow.addColorStop(1, 'transparent');
                        ctx.fillStyle = glow;
                        ctx.fillRect(f.x - f.glowSize, f.y - f.glowSize, f.glowSize * 2, f.glowSize * 2);
                        // Core dot
                        ctx.fillStyle = f.isGold ? '#D4A843' : theme === 'ocean' ? '#f8a533' : '#7CB5A0';
                        ctx.beginPath();
                        ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.restore();
                    }
                }["HeroBackground.useEffect.draw"]);
                animationId = requestAnimationFrame(draw);
            }
            resize();
            createParticles();
            draw();
            const handleResize = {
                "HeroBackground.useEffect.handleResize": ()=>{
                    resize();
                    createParticles();
                }
            }["HeroBackground.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "HeroBackground.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    cancelAnimationFrame(animationId);
                }
            })["HeroBackground.useEffect"];
        }
    }["HeroBackground.useEffect"], [
        theme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hero-bg-layers",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "hero-particles-canvas"
            }, void 0, false, {
                fileName: "[project]/src/components/HeroBackground.js",
                lineNumber: 166,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-gradient-mesh"
            }, void 0, false, {
                fileName: "[project]/src/components/HeroBackground.js",
                lineNumber: 169,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-earth-image"
            }, void 0, false, {
                fileName: "[project]/src/components/HeroBackground.js",
                lineNumber: 172,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-glow-orb hero-glow-orb-1"
            }, void 0, false, {
                fileName: "[project]/src/components/HeroBackground.js",
                lineNumber: 175,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-glow-orb hero-glow-orb-2"
            }, void 0, false, {
                fileName: "[project]/src/components/HeroBackground.js",
                lineNumber: 176,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-vignette"
            }, void 0, false, {
                fileName: "[project]/src/components/HeroBackground.js",
                lineNumber: 179,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroBackground.js",
        lineNumber: 164,
        columnNumber: 9
    }, this);
}
_s(HeroBackground, "1SeC1cCDcQD/CfDZ9wzkDo5yrpE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = HeroBackground;
var _c;
__turbopack_context__.k.register(_c, "HeroBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TreeLoader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TreeLoader",
    ()=>TreeLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
;
const TreeLoader = ({ size = 80, className = '' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
            [
                "1dcbdaf75ccc6208",
                [
                    size * 1.5,
                    size * 1.5
                ]
            ]
        ]) + " " + `premium-tree-loader ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "1dcbdaf75ccc6208",
                        [
                            size * 1.5,
                            size * 1.5
                        ]
                    ]
                ]) + " " + "loader-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: size,
                        height: size,
                        viewBox: "0 0 100 100",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "1dcbdaf75ccc6208",
                                [
                                    size * 1.5,
                                    size * 1.5
                                ]
                            ]
                        ]) + " " + "main-tree-svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "1dcbdaf75ccc6208",
                                        [
                                            size * 1.5,
                                            size * 1.5
                                        ]
                                    ]
                                ]),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "trunkGradient",
                                        x1: "50",
                                        y1: "90",
                                        x2: "50",
                                        y2: "40",
                                        gradientUnits: "userSpaceOnUse",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "1dcbdaf75ccc6208",
                                                [
                                                    size * 1.5,
                                                    size * 1.5
                                                ]
                                            ]
                                        ]),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "#2D5A42",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "1dcbdaf75ccc6208",
                                                        [
                                                            size * 1.5,
                                                            size * 1.5
                                                        ]
                                                    ]
                                                ])
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TreeLoader.js",
                                                lineNumber: 18,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "var(--lime)",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "1dcbdaf75ccc6208",
                                                        [
                                                            size * 1.5,
                                                            size * 1.5
                                                        ]
                                                    ]
                                                ])
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TreeLoader.js",
                                                lineNumber: 19,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TreeLoader.js",
                                        lineNumber: 17,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                        id: "leafGlow",
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "1dcbdaf75ccc6208",
                                                [
                                                    size * 1.5,
                                                    size * 1.5
                                                ]
                                            ]
                                        ]),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "var(--lime)",
                                                stopOpacity: "0.4",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "1dcbdaf75ccc6208",
                                                        [
                                                            size * 1.5,
                                                            size * 1.5
                                                        ]
                                                    ]
                                                ])
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TreeLoader.js",
                                                lineNumber: 22,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "var(--lime)",
                                                stopOpacity: "0",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "1dcbdaf75ccc6208",
                                                        [
                                                            size * 1.5,
                                                            size * 1.5
                                                        ]
                                                    ]
                                                ])
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TreeLoader.js",
                                                lineNumber: 23,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TreeLoader.js",
                                        lineNumber: 21,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TreeLoader.js",
                                lineNumber: 16,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M50 95V45",
                                stroke: "url(#trunkGradient)",
                                strokeWidth: "6",
                                strokeLinecap: "round",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "1dcbdaf75ccc6208",
                                        [
                                            size * 1.5,
                                            size * 1.5
                                        ]
                                    ]
                                ]) + " " + "animate-trunk"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TreeLoader.js",
                                lineNumber: 28,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "1dcbdaf75ccc6208",
                                        [
                                            size * 1.5,
                                            size * 1.5
                                        ]
                                    ]
                                ]) + " " + "branches",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M50 70C40 60 35 65 30 55",
                                        stroke: "url(#trunkGradient)",
                                        strokeWidth: "3",
                                        strokeLinecap: "round",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "1dcbdaf75ccc6208",
                                                [
                                                    size * 1.5,
                                                    size * 1.5
                                                ]
                                            ]
                                        ]) + " " + "branch left"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TreeLoader.js",
                                        lineNumber: 38,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M50 60C60 50 65 55 70 45",
                                        stroke: "url(#trunkGradient)",
                                        strokeWidth: "3",
                                        strokeLinecap: "round",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "1dcbdaf75ccc6208",
                                                [
                                                    size * 1.5,
                                                    size * 1.5
                                                ]
                                            ]
                                        ]) + " " + "branch right"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TreeLoader.js",
                                        lineNumber: 39,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M50 50C45 40 55 35 50 25",
                                        stroke: "url(#trunkGradient)",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "1dcbdaf75ccc6208",
                                                [
                                                    size * 1.5,
                                                    size * 1.5
                                                ]
                                            ]
                                        ]) + " " + "branch top"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TreeLoader.js",
                                        lineNumber: 40,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TreeLoader.js",
                                lineNumber: 37,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "1dcbdaf75ccc6208",
                                        [
                                            size * 1.5,
                                            size * 1.5
                                        ]
                                    ]
                                ]) + " " + "leaves",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "30",
                                        cy: "55",
                                        r: "6",
                                        fill: "var(--lime)",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "1dcbdaf75ccc6208",
                                                [
                                                    size * 1.5,
                                                    size * 1.5
                                                ]
                                            ]
                                        ]) + " " + "leaf l1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TreeLoader.js",
                                        lineNumber: 45,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "70",
                                        cy: "45",
                                        r: "6",
                                        fill: "var(--lime)",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "1dcbdaf75ccc6208",
                                                [
                                                    size * 1.5,
                                                    size * 1.5
                                                ]
                                            ]
                                        ]) + " " + "leaf l2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TreeLoader.js",
                                        lineNumber: 46,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "50",
                                        cy: "25",
                                        r: "8",
                                        fill: "var(--lime)",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "1dcbdaf75ccc6208",
                                                [
                                                    size * 1.5,
                                                    size * 1.5
                                                ]
                                            ]
                                        ]) + " " + "leaf l3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TreeLoader.js",
                                        lineNumber: 47,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "40",
                                        cy: "45",
                                        r: "4",
                                        fill: "var(--lime)",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "1dcbdaf75ccc6208",
                                                [
                                                    size * 1.5,
                                                    size * 1.5
                                                ]
                                            ]
                                        ]) + " " + "leaf l4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TreeLoader.js",
                                        lineNumber: 48,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "60",
                                        cy: "35",
                                        r: "5",
                                        fill: "var(--lime)",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "1dcbdaf75ccc6208",
                                                [
                                                    size * 1.5,
                                                    size * 1.5
                                                ]
                                            ]
                                        ]) + " " + "leaf l5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TreeLoader.js",
                                        lineNumber: 49,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TreeLoader.js",
                                lineNumber: 44,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "50",
                                cy: "50",
                                r: "40",
                                fill: "url(#leafGlow)",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "1dcbdaf75ccc6208",
                                        [
                                            size * 1.5,
                                            size * 1.5
                                        ]
                                    ]
                                ]) + " " + "bloom-glow"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TreeLoader.js",
                                lineNumber: 53,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TreeLoader.js",
                        lineNumber: 8,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "1dcbdaf75ccc6208",
                                [
                                    size * 1.5,
                                    size * 1.5
                                ]
                            ]
                        ]) + " " + "particles",
                        children: [
                            ...Array(8)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "1dcbdaf75ccc6208",
                                        [
                                            size * 1.5,
                                            size * 1.5
                                        ]
                                    ]
                                ]) + " " + `particle p${i + 1}`
                            }, i, false, {
                                fileName: "[project]/src/components/TreeLoader.js",
                                lineNumber: 59,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/TreeLoader.js",
                        lineNumber: 57,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TreeLoader.js",
                lineNumber: 7,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "1dcbdaf75ccc6208",
                dynamic: [
                    size * 1.5,
                    size * 1.5
                ],
                children: `.premium-tree-loader.__jsx-style-dynamic-selector{width:${size * 1.5}px;height:${size * 1.5}px;justify-content:center;align-items:center;display:flex;position:relative}.loader-content.__jsx-style-dynamic-selector{justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:relative}.main-tree-svg.__jsx-style-dynamic-selector{z-index:10;filter:drop-shadow(0 0 15px #4e8c6f4d)}.animate-trunk.__jsx-style-dynamic-selector{stroke-dasharray:60;stroke-dashoffset:60px;animation:3s cubic-bezier(.4,0,.2,1) infinite growTrunk}.branch.__jsx-style-dynamic-selector{opacity:0;stroke-dasharray:30;stroke-dashoffset:30px}.branch.left.__jsx-style-dynamic-selector{animation:3s ease-out .5s infinite growBranch}.branch.right.__jsx-style-dynamic-selector{animation:3s ease-out .8s infinite growBranch}.branch.top.__jsx-style-dynamic-selector{animation:3s ease-out 1.1s infinite growBranch}.leaf.__jsx-style-dynamic-selector{opacity:0;transform-origin:50%;transform:scale(0)}.leaf.l1.__jsx-style-dynamic-selector{animation:3s ease-out 1s infinite bloom}.leaf.l2.__jsx-style-dynamic-selector{animation:3s ease-out 1.3s infinite bloom}.leaf.l3.__jsx-style-dynamic-selector{animation:3s ease-out 1.6s infinite bloom}.leaf.l4.__jsx-style-dynamic-selector{animation:3s ease-out 1.2s infinite bloom}.leaf.l5.__jsx-style-dynamic-selector{animation:3s ease-out 1.5s infinite bloom}.bloom-glow.__jsx-style-dynamic-selector{opacity:0;animation:3s ease-in-out infinite pulseGlow}.particles.__jsx-style-dynamic-selector{animation:15s linear infinite rotateAll;position:absolute;inset:0}.particle.__jsx-style-dynamic-selector{background:var(--lime);opacity:0;border-radius:50% 0 50% 50%;width:6px;height:6px;position:absolute}.p1.__jsx-style-dynamic-selector{animation:4s ease-in-out infinite float;top:10%;left:50%}.p2.__jsx-style-dynamic-selector{animation:5s ease-in-out .5s infinite float;top:50%;left:90%}.p3.__jsx-style-dynamic-selector{animation:4s ease-in-out 1s infinite float;top:90%;left:50%}.p4.__jsx-style-dynamic-selector{animation:4.5s ease-in-out 1.5s infinite float;top:50%;left:10%}.p5.__jsx-style-dynamic-selector{animation:6s ease-in-out .2s infinite float;top:25%;left:25%}.p6.__jsx-style-dynamic-selector{animation:5.5s ease-in-out .7s infinite float;top:25%;left:75%}.p7.__jsx-style-dynamic-selector{animation:4.8s ease-in-out 1.2s infinite float;top:75%;left:25%}.p8.__jsx-style-dynamic-selector{animation:5.2s ease-in-out 1.7s infinite float;top:75%;left:75%}@keyframes growTrunk{0%{stroke-dashoffset:60px}30%,70%{stroke-dashoffset:0}90%,to{stroke-dashoffset:60px;opacity:0}}@keyframes growBranch{0%,20%{opacity:0;stroke-dashoffset:30px}40%,70%{opacity:1;stroke-dashoffset:0}90%,to{opacity:0;stroke-dashoffset:30px}}@keyframes bloom{0%,40%{opacity:0;transform:scale(0)}60%,80%{opacity:1;transform:scale(1)}90%,to{opacity:0;transform:scale(0)}}@keyframes pulseGlow{0%,50%{opacity:0;transform:scale(.8)}70%{opacity:1;transform:scale(1.2)}90%,to{opacity:0;transform:scale(.8)}}@keyframes float{0%{opacity:0;transform:translateY(0)rotate(0)}20%{opacity:.6}80%{opacity:.6}to{opacity:0;transform:translateY(-40px)rotate(360deg)}}@keyframes rotateAll{0%{transform:rotate(0)}to{transform:rotate(360deg)}}`
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TreeLoader.js",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = TreeLoader;
var _c;
__turbopack_context__.k.register(_c, "TreeLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/programs.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":0,"title":"Planet Run: Hyderabad","link":"#","date":"22 MAR","description":"Join the run.","category":"Sustainability"}]);}),
"[project]/src/app/programs/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgramsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroBackground$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeroBackground.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TreeLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TreeLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$programs$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/programs.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ProgramsPage() {
    _s();
    const [programs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$programs$2e$json__$28$json$29$__["default"]);
    const [loading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "jsx-e52517a4052455f" + " " + "status-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroBackground$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/programs/page.js",
                    lineNumber: 17,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TreeLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TreeLoader"], {
                    size: 80
                }, void 0, false, {
                    fileName: "[project]/src/app/programs/page.js",
                    lineNumber: 18,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "jsx-e52517a4052455f" + " " + "loading-text",
                    children: "Mapping out Impact Journeys..."
                }, void 0, false, {
                    fileName: "[project]/src/app/programs/page.js",
                    lineNumber: 19,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: "e52517a4052455f",
                    children: ".status-container.jsx-e52517a4052455f{min-height:80vh;color:var(--text);text-align:center;flex-direction:column;justify-content:center;align-items:center;padding:120px 20px;display:flex;position:relative;overflow:hidden}.loading-text.jsx-e52517a4052455f{font-family:var(--font-outfit);opacity:.8;margin-top:30px;font-weight:600}"
                }, void 0, false, void 0, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/programs/page.js",
            lineNumber: 16,
            columnNumber: 13
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "jsx-4b4df63dea7cb962" + " " + "status-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroBackground$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/programs/page.js",
                    lineNumber: 47,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-4b4df63dea7cb962" + " " + "error-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "jsx-4b4df63dea7cb962",
                            children: "Connection Interrupted"
                        }, void 0, false, {
                            fileName: "[project]/src/app/programs/page.js",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-4b4df63dea7cb962",
                            children: "We couldn't reach the live program calendar."
                        }, void 0, false, {
                            fileName: "[project]/src/app/programs/page.js",
                            lineNumber: 50,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.location.reload(),
                            className: "jsx-4b4df63dea7cb962" + " " + "retry-btn",
                            children: "Retry Connection"
                        }, void 0, false, {
                            fileName: "[project]/src/app/programs/page.js",
                            lineNumber: 51,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/programs/page.js",
                    lineNumber: 48,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: "4b4df63dea7cb962",
                    children: ".status-container.jsx-4b4df63dea7cb962{justify-content:center;align-items:center;min-height:80vh;display:flex;position:relative}.error-card.jsx-4b4df63dea7cb962{background:var(--surface1);text-align:center;z-index:2;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid #ffffff1a;border-radius:24px;max-width:400px;padding:40px}.retry-btn.jsx-4b4df63dea7cb962{background:var(--lime);color:var(--text-dark);border-radius:12px;margin-top:20px;padding:12px 24px;font-weight:800}"
                }, void 0, false, void 0, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/programs/page.js",
            lineNumber: 46,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-46c2972728ac0745" + " " + "programs-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-46c2972728ac0745" + " " + "programs-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroBackground$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/programs/page.js",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-46c2972728ac0745" + " " + "hero-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-46c2972728ac0745" + " " + "eyebrow",
                                children: "Planet Run Calendar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/programs/page.js",
                                lineNumber: 89,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "jsx-46c2972728ac0745" + " " + "hero-title",
                                children: [
                                    "Transforming ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: "jsx-46c2972728ac0745",
                                        children: "Potential"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/programs/page.js",
                                        lineNumber: 91,
                                        columnNumber: 38
                                    }, this),
                                    " into ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: "jsx-46c2972728ac0745",
                                        children: "Progress"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/programs/page.js",
                                        lineNumber: 91,
                                        columnNumber: 62
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/programs/page.js",
                                lineNumber: 90,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-46c2972728ac0745" + " " + "hero-sub",
                                children: "Explore our regular series of community runs and environmental initiatives. Directly synced from the We Heal The Earth global movement."
                            }, void 0, false, {
                                fileName: "[project]/src/app/programs/page.js",
                                lineNumber: 93,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/programs/page.js",
                        lineNumber: 88,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/programs/page.js",
                lineNumber: 86,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-46c2972728ac0745" + " " + "programs-grid-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-46c2972728ac0745" + " " + "grid-container",
                    children: programs.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-46c2972728ac0745" + " " + "program-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-46c2972728ac0745" + " " + "card-top",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-46c2972728ac0745" + " " + "category-label",
                                            children: p.category || 'Environmental'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/programs/page.js",
                                            lineNumber: 105,
                                            columnNumber: 33
                                        }, this),
                                        p.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-46c2972728ac0745" + " " + "date-badge",
                                            children: p.date
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/programs/page.js",
                                            lineNumber: 106,
                                            columnNumber: 44
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/programs/page.js",
                                    lineNumber: 104,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "jsx-46c2972728ac0745" + " " + "p-title",
                                    children: p.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/programs/page.js",
                                    lineNumber: 108,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-46c2972728ac0745" + " " + "p-desc",
                                    children: p.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/programs/page.js",
                                    lineNumber: 109,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-46c2972728ac0745" + " " + "p-footer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: p.link,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "jsx-46c2972728ac0745" + " " + "p-cta",
                                        children: [
                                            "Participate Now",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-46c2972728ac0745" + " " + "arrow",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/programs/page.js",
                                                lineNumber: 113,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/programs/page.js",
                                        lineNumber: 111,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/programs/page.js",
                                    lineNumber: 110,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/app/programs/page.js",
                            lineNumber: 103,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/programs/page.js",
                    lineNumber: 101,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/programs/page.js",
                lineNumber: 100,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-46c2972728ac0745" + " " + "programs-cta",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-46c2972728ac0745" + " " + "cta-box",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "jsx-46c2972728ac0745",
                            children: [
                                "Want to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    className: "jsx-46c2972728ac0745",
                                    children: "Partner"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/programs/page.js",
                                    lineNumber: 123,
                                    columnNumber: 33
                                }, this),
                                " with us?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/programs/page.js",
                            lineNumber: 123,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-46c2972728ac0745",
                            children: "We are always looking for institutional partners and corporate sponsors to scale our impact."
                        }, void 0, false, {
                            fileName: "[project]/src/app/programs/page.js",
                            lineNumber: 124,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: "cta-btn secondary",
                            children: "Get in Touch"
                        }, void 0, false, {
                            fileName: "[project]/src/app/programs/page.js",
                            lineNumber: 125,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/programs/page.js",
                    lineNumber: 122,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/programs/page.js",
                lineNumber: 121,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "46c2972728ac0745",
                children: ".programs-container.jsx-46c2972728ac0745{background:var(--bg);min-height:100vh;color:var(--text)}.programs-hero.jsx-46c2972728ac0745{text-align:center;padding:160px 4vw 100px;position:relative;overflow:hidden}.hero-content.jsx-46c2972728ac0745{z-index:2;max-width:800px;margin:0 auto;position:relative}.eyebrow.jsx-46c2972728ac0745{letter-spacing:.15em;color:var(--lime);text-transform:uppercase;margin-bottom:24px;font-size:.85rem;font-weight:800}.hero-title.jsx-46c2972728ac0745{font-family:var(--font-sans);letter-spacing:-.02em;margin-bottom:32px;font-size:max(3rem,min(7vw,5rem));font-weight:700;line-height:.95}.hero-title.jsx-46c2972728ac0745 em.jsx-46c2972728ac0745{color:var(--lime);font-style:italic;font-weight:500}.hero-sub.jsx-46c2972728ac0745{opacity:.8;max-width:600px;margin:0 auto;font-size:1.15rem;line-height:1.6}.programs-grid-section.jsx-46c2972728ac0745{padding:0 4vw 100px}.grid-container.jsx-46c2972728ac0745{grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:30px;max-width:1400px;margin:0 auto;display:grid}.program-card.jsx-46c2972728ac0745{background:var(--surface1);border:1px solid #ffffff0d;border-radius:24px;flex-direction:column;padding:40px;transition:all .4s cubic-bezier(.16,1,.3,1);display:flex}.program-card.jsx-46c2972728ac0745:hover{border-color:var(--lime);background:#ffffff08;transform:translateY(-8px)}.card-top.jsx-46c2972728ac0745{justify-content:space-between;align-items:center;margin-bottom:24px;display:flex}.category-label.jsx-46c2972728ac0745{text-transform:uppercase;color:var(--lime);letter-spacing:.1em;font-size:.7rem;font-weight:900}.date-badge.jsx-46c2972728ac0745{background:#ffffff0d;border-radius:20px;padding:4px 12px;font-size:.75rem;font-weight:700}.p-title.jsx-46c2972728ac0745{font-family:var(--font-sans);margin-bottom:16px;font-size:1.6rem;line-height:1.2}.p-desc.jsx-46c2972728ac0745{opacity:.7;flex-grow:1;margin-bottom:30px;font-size:.95rem;line-height:1.7}.p-footer.jsx-46c2972728ac0745{border-top:1px solid #ffffff0d;padding-top:20px}.p-cta.jsx-46c2972728ac0745{color:var(--lime);align-items:center;gap:8px;font-weight:800;text-decoration:none;display:flex}.programs-cta.jsx-46c2972728ac0745{justify-content:center;padding:100px 4vw;display:flex}.cta-box.jsx-46c2972728ac0745{background:var(--surface1);text-align:center;border:1px solid #ffffff0d;border-radius:40px;width:100%;max-width:800px;padding:60px}.cta-box.jsx-46c2972728ac0745 h2.jsx-46c2972728ac0745{font-family:var(--font-sans);margin-bottom:20px;font-size:2.5rem}.cta-box.jsx-46c2972728ac0745 h2.jsx-46c2972728ac0745 em.jsx-46c2972728ac0745{color:var(--lime);font-style:italic;font-weight:500}.cta-box.jsx-46c2972728ac0745 p.jsx-46c2972728ac0745{opacity:.8;margin-bottom:40px}.cta-btn.jsx-46c2972728ac0745{background:var(--lime);color:var(--text-dark);border-radius:16px;padding:18px 40px;font-weight:800;text-decoration:none;display:inline-block}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/programs/page.js",
        lineNumber: 85,
        columnNumber: 9
    }, this);
}
_s(ProgramsPage, "22ymPbtP7eqZqo6DPTuc7XakwAc=");
_c = ProgramsPage;
var _c;
__turbopack_context__.k.register(_c, "ProgramsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_5b5bf9e6._.js.map