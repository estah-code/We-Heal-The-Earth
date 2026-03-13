module.exports = [
"[project]/src/components/HeroBackground.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function HeroBackground({ variant = 'default' }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
            particles.forEach((p)=>{
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
            });
            // Draw fireflies
            fireflies.forEach((f)=>{
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
            });
            animationId = requestAnimationFrame(draw);
        }
        resize();
        createParticles();
        draw();
        const handleResize = ()=>{
            resize();
            createParticles();
        };
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, [
        theme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hero-bg-layers",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "hero-particles-canvas"
            }, void 0, false, {
                fileName: "[project]/src/components/HeroBackground.js",
                lineNumber: 166,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-gradient-mesh"
            }, void 0, false, {
                fileName: "[project]/src/components/HeroBackground.js",
                lineNumber: 169,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-earth-image"
            }, void 0, false, {
                fileName: "[project]/src/components/HeroBackground.js",
                lineNumber: 172,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-glow-orb hero-glow-orb-1"
            }, void 0, false, {
                fileName: "[project]/src/components/HeroBackground.js",
                lineNumber: 175,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-glow-orb hero-glow-orb-2"
            }, void 0, false, {
                fileName: "[project]/src/components/HeroBackground.js",
                lineNumber: 176,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/src/components/PhotoSlider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhotoSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const sliderImages = [
    {
        url: '/slider-1.png',
        alt: 'Healing the Earth'
    },
    {
        url: '/slider-2.png',
        alt: 'Education Impact'
    },
    {
        url: '/slider-3.png',
        alt: 'Community Empowerment'
    },
    {
        url: '/slider-4.png',
        alt: 'Vision 2047'
    }
];
function PhotoSlider() {
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>{
            setCurrent((prev)=>(prev + 1) % sliderImages.length);
        }, 5000);
        return ()=>clearInterval(timer);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-63ce042a5e4bf7dc" + " " + "photo-slider",
        children: [
            sliderImages.map((image, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundImage: `url(${image.url})`
                    },
                    className: "jsx-63ce042a5e4bf7dc" + " " + `slider-slide ${idx === current ? 'active' : ''}`
                }, idx, false, {
                    fileName: "[project]/src/components/PhotoSlider.js",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-63ce042a5e4bf7dc" + " " + "slider-overlay"
            }, void 0, false, {
                fileName: "[project]/src/components/PhotoSlider.js",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "63ce042a5e4bf7dc",
                children: ".photo-slider.jsx-63ce042a5e4bf7dc{z-index:0;width:100%;height:100%;position:absolute;top:0;left:0;overflow:hidden}.slider-slide.jsx-63ce042a5e4bf7dc{opacity:0;background-position:50%;background-size:cover;width:100%;height:100%;transition:opacity 1.5s ease-in-out,transform 6s linear;position:absolute;top:0;left:0;transform:scale(1.1)}.slider-slide.active.jsx-63ce042a5e4bf7dc{opacity:.4;transform:scale(1)}.slider-overlay.jsx-63ce042a5e4bf7dc{background:radial-gradient(circle at center,transparent 0%,var(--bg)90%);z-index:1;width:100%;height:100%;position:absolute;top:0;left:0}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PhotoSlider.js",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/EventCard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Icons.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function EventCard({ title = "Run for Education", category = "#Sustainability", dateBadge = "22 MAR", dateFull = "March 22, 2026", location = "Hyderabad", description = "An initiative by WE HEAL THE EARTH — run for a child's future, equal opportunities, and a better tomorrow.", imageUrl = "https://skillbloomer.com/uploads/events/1770985327_698f176f3b880_featured.jpg", externalLink = "https://skillbloomer.com/events/run-for-education", statusBadge = "SOLD OUT", isPlaceholder = false }) {
    const [imgError, setImgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleRedirect = (e)=>{
        if (isPlaceholder || !externalLink) return;
        e.stopPropagation();
        window.open(externalLink, '_blank', 'noopener,noreferrer');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "event-card",
        onClick: handleRedirect,
        tabIndex: 0,
        role: isPlaceholder ? "article" : "button",
        "aria-label": isPlaceholder ? "Upcoming event" : `View ${title} event details`,
        onKeyDown: (e)=>{
            if (e.key === 'Enter') handleRedirect(e);
        },
        style: isPlaceholder ? {
            cursor: 'default'
        } : {
            cursor: 'pointer'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-img-wrap",
                children: [
                    !imgError && !isPlaceholder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imageUrl,
                        alt: `${title} event`,
                        loading: "lazy",
                        onError: ()=>setImgError(true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/EventCard.js",
                        lineNumber: 38,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-img-fallback-wrap",
                        style: {
                            width: '100%',
                            height: '100%'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-img-fallback",
                            style: isPlaceholder ? {
                                fontSize: '2rem',
                                fontWeight: '900',
                                letterSpacing: '0.1em',
                                color: 'var(--lime)',
                                opacity: 0.8
                            } : {},
                            children: isPlaceholder ? 'UPCOMING' : 'ES'
                        }, void 0, false, {
                            fileName: "[project]/src/components/EventCard.js",
                            lineNumber: 46,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/EventCard.js",
                        lineNumber: 45,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-img-overlay"
                    }, void 0, false, {
                        fileName: "[project]/src/components/EventCard.js",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this),
                    !isPlaceholder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "card-date-badge",
                        children: dateBadge
                    }, void 0, false, {
                        fileName: "[project]/src/components/EventCard.js",
                        lineNumber: 52,
                        columnNumber: 36
                    }, this),
                    !isPlaceholder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "card-cat-badge",
                        children: category
                    }, void 0, false, {
                        fileName: "[project]/src/components/EventCard.js",
                        lineNumber: 53,
                        columnNumber: 36
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EventCard.js",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "card-title",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/EventCard.js",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-org",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-org-avatar",
                                children: "ES"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EventCard.js",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Estah Society"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EventCard.js",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EventCard.js",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-meta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "meta-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Calendar"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EventCard.js",
                                        lineNumber: 65,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isPlaceholder ? 'To Be Announced' : dateFull
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EventCard.js",
                                        lineNumber: 66,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EventCard.js",
                                lineNumber: 64,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "meta-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MapPin"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EventCard.js",
                                        lineNumber: 69,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isPlaceholder ? 'TBA' : location
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EventCard.js",
                                        lineNumber: 70,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EventCard.js",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EventCard.js",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "card-desc",
                        children: isPlaceholder ? 'We are planning more exciting initiatives. Stay tuned as we finalize the details for our next impactful event.' : description
                    }, void 0, false, {
                        fileName: "[project]/src/components/EventCard.js",
                        lineNumber: 74,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-divider"
                    }, void 0, false, {
                        fileName: "[project]/src/components/EventCard.js",
                        lineNumber: 80,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-footer",
                        children: isPlaceholder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sold-out-badge",
                                    style: {
                                        background: 'var(--surface2)',
                                        color: 'var(--muted)',
                                        borderColor: 'rgba(255,255,255,0.1)'
                                    },
                                    children: "COMING SOON"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EventCard.js",
                                    lineNumber: 85,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "view-details",
                                    style: {
                                        color: 'var(--muted)',
                                        fontWeight: '600'
                                    },
                                    children: "Stay Tuned"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EventCard.js",
                                    lineNumber: 86,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `sold-out-badge ${statusBadge === 'REGISTER NOW' ? 'active-badge' : ''}`,
                                    children: statusBadge
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EventCard.js",
                                    lineNumber: 92,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "view-details",
                                    children: [
                                        "View Details ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "arrow",
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EventCard.js",
                                            lineNumber: 94,
                                            columnNumber: 46
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EventCard.js",
                                    lineNumber: 93,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/EventCard.js",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EventCard.js",
                lineNumber: 56,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/EventCard.js",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/TreeLoader.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TreeLoader",
    ()=>TreeLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const TreeLoader = ({ size = 80, className = '' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
            [
                "1dcbdaf75ccc6208",
                [
                    size * 1.5,
                    size * 1.5
                ]
            ]
        ]) + " " + `premium-tree-loader ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "1dcbdaf75ccc6208",
                        [
                            size * 1.5,
                            size * 1.5
                        ]
                    ]
                ]) + " " + "loader-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: size,
                        height: size,
                        viewBox: "0 0 100 100",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "1dcbdaf75ccc6208",
                                [
                                    size * 1.5,
                                    size * 1.5
                                ]
                            ]
                        ]) + " " + "main-tree-svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "1dcbdaf75ccc6208",
                                        [
                                            size * 1.5,
                                            size * 1.5
                                        ]
                                    ]
                                ]),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "trunkGradient",
                                        x1: "50",
                                        y1: "90",
                                        x2: "50",
                                        y2: "40",
                                        gradientUnits: "userSpaceOnUse",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "1dcbdaf75ccc6208",
                                                [
                                                    size * 1.5,
                                                    size * 1.5
                                                ]
                                            ]
                                        ]),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "#2D5A42",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "var(--lime)",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                        id: "leafGlow",
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "1dcbdaf75ccc6208",
                                                [
                                                    size * 1.5,
                                                    size * 1.5
                                                ]
                                            ]
                                        ]),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "var(--lime)",
                                                stopOpacity: "0.4",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "var(--lime)",
                                                stopOpacity: "0",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M50 95V45",
                                stroke: "url(#trunkGradient)",
                                strokeWidth: "6",
                                strokeLinecap: "round",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "1dcbdaf75ccc6208",
                                        [
                                            size * 1.5,
                                            size * 1.5
                                        ]
                                    ]
                                ]) + " " + "branches",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M50 70C40 60 35 65 30 55",
                                        stroke: "url(#trunkGradient)",
                                        strokeWidth: "3",
                                        strokeLinecap: "round",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M50 60C60 50 65 55 70 45",
                                        stroke: "url(#trunkGradient)",
                                        strokeWidth: "3",
                                        strokeLinecap: "round",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M50 50C45 40 55 35 50 25",
                                        stroke: "url(#trunkGradient)",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "1dcbdaf75ccc6208",
                                        [
                                            size * 1.5,
                                            size * 1.5
                                        ]
                                    ]
                                ]) + " " + "leaves",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "30",
                                        cy: "55",
                                        r: "6",
                                        fill: "var(--lime)",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "70",
                                        cy: "45",
                                        r: "6",
                                        fill: "var(--lime)",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "50",
                                        cy: "25",
                                        r: "8",
                                        fill: "var(--lime)",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "40",
                                        cy: "45",
                                        r: "4",
                                        fill: "var(--lime)",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "60",
                                        cy: "35",
                                        r: "5",
                                        fill: "var(--lime)",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "50",
                                cy: "50",
                                r: "40",
                                fill: "url(#leafGlow)",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
"[project]/src/data/events.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EVENTS_DATA",
    ()=>EVENTS_DATA
]);
const EVENTS_DATA = [
    {
        title: "Run for Education",
        category: "#Education",
        dateBadge: "22 MAR",
        dateFull: "March 22, 2026",
        location: "Gachibowli Stadium, Hyderabad",
        description: "Join the Run for Education Society to train 40K students, create 40K jobs, and impact 4M lives across India.",
        imageUrl: "https://skillbloomer.com/uploads/events/1770985327_698f176f3b880_featured.jpg",
        externalLink: "https://skillbloomer.com/events/run-for-education-society?from=instructor",
        statusBadge: "REGISTER NOW"
    },
    {
        title: "Run for Livelihood",
        category: "#Livelihood",
        dateBadge: "22 MAR",
        dateFull: "March 22, 2026",
        location: "Gachibowli Stadium, Hyderabad",
        description: "Join the national marathon and fellowship program to inspire sustainable livelihood and skill development practices across India.",
        imageUrl: "https://skillbloomer.com/uploads/events/1773315124_69b2a4349426d_featured.jpg",
        externalLink: "https://skillbloomer.com/events/run-for-livelihood?from=instructor",
        statusBadge: "REGISTER NOW"
    },
    {
        title: "Women On Run",
        category: "#Empowerment",
        dateBadge: "22 MAR",
        dateFull: "March 22, 2026",
        location: "Gachibowli Stadium, Hyderabad",
        description: "To inspire women across India to embrace fitness, strength, and self-confidence while promoting gender equality and community transformation.",
        imageUrl: "https://skillbloomer.com/uploads/events/1773315164_69b2a45cc069c_featured.jpg",
        externalLink: "https://skillbloomer.com/events/women-on-run?from=instructor",
        statusBadge: "REGISTER NOW"
    },
    {
        title: "Run For Water",
        category: "#Sustainability",
        dateBadge: "22 MAR",
        dateFull: "March 22, 2026",
        location: "Gachibowli Stadium, Hyderabad",
        description: "To inspire sustainable, solution-based water conservation and management practices that transform communities and create lasting impact.",
        imageUrl: "https://skillbloomer.com/uploads/events/1773315188_69b2a4743c984_featured.jpg",
        externalLink: "https://skillbloomer.com/events/run-for-water?from=instructor",
        statusBadge: "REGISTER NOW"
    }
];
}),
"[project]/src/app/home-page/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Icons.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroBackground$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeroBackground.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhotoSlider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PhotoSlider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EventCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/EventCard.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TreeLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TreeLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/events.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function HomePage() {
    const [latestBlogs, setLatestBlogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingBlogs, setLoadingBlogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [galleryImages, setGalleryImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingGallery, setLoadingGallery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchLatest = async ()=>{
            try {
                // Fetch Blogs
                // const blogRes = await fetch("/api/blogs");
                // const blogData = await blogRes.json();
                // setLatestBlogs(Array.isArray(blogData) ? blogData.slice(0, 3) : []);
                // Fetch Gallery
                const galleryRes = await fetch("/api/gallery");
                const galleryData = await galleryRes.json();
                setGalleryImages(Array.isArray(galleryData) ? galleryData.slice(0, 4) : []);
            } catch (err) {
                console.error("Failed to fetch latest data", err);
            } finally{
                // setLoadingBlogs(false);
                setLoadingGallery(false);
            }
        };
        fetchLatest();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-a22662bb4935650d" + " " + "home-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-a22662bb4935650d" + " " + "home-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhotoSlider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/home-page/page.js",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroBackground$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/home-page/page.js",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a22662bb4935650d" + " " + "hero-content-split",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a22662bb4935650d" + " " + "hero-left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/estah-logo-counsel.jpg",
                                    alt: "Estah The Counsel Logo",
                                    className: "jsx-a22662bb4935650d" + " " + "hero-large-logo"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 59,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a22662bb4935650d" + " " + "hero-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "jsx-a22662bb4935650d" + " " + "hero-title",
                                        children: [
                                            "Healing the Earth Through ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                className: "jsx-a22662bb4935650d",
                                                children: "Education"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-page/page.js",
                                                lineNumber: 67,
                                                columnNumber: 55
                                            }, this),
                                            " and ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                className: "jsx-a22662bb4935650d",
                                                children: "Action"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-page/page.js",
                                                lineNumber: 67,
                                                columnNumber: 78
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 66,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-a22662bb4935650d" + " " + "hero-sub",
                                        children: "We are a sustainability-driven initiative creating lasting impact through regenerative education and community transformation. Join the movement."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 69,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a22662bb4935650d" + " " + "hero-ctas",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/events",
                                            className: "cta-btn primary",
                                            children: "Explore Events"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 75,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 74,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home-page/page.js",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a22662bb4935650d" + " " + "hero-decorations",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a22662bb4935650d" + " " + "blob blob-1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 86,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a22662bb4935650d" + " " + "blob blob-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 87,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home-page/page.js",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home-page/page.js",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-a22662bb4935650d" + " " + "home-stats",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-a22662bb4935650d" + " " + "stats-ticker",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a22662bb4935650d" + " " + "ticker-inner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-a22662bb4935650d",
                                children: "50+ GLOBAL PARTNERS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 95,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-a22662bb4935650d",
                                children: "COLLABORATING FOR IMPACT"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 96,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-a22662bb4935650d",
                                children: "EMPOWERING COMMUNITIES"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 97,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-a22662bb4935650d",
                                children: "DRIVING SUSTAINABLE CHANGE"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 98,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-a22662bb4935650d",
                                children: "50+ GLOBAL PARTNERS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 99,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-a22662bb4935650d",
                                children: "COLLABORATING FOR IMPACT"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 100,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-a22662bb4935650d",
                                children: "EMPOWERING COMMUNITIES"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 101,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-a22662bb4935650d",
                                children: "DRIVING SUSTAINABLE CHANGE"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 102,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home-page/page.js",
                        lineNumber: 94,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/home-page/page.js",
                    lineNumber: 93,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home-page/page.js",
                lineNumber: 92,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-a22662bb4935650d" + " " + "home-story",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-a22662bb4935650d" + " " + "story-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-a22662bb4935650d" + " " + "story-image-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/story-mission.png",
                                    alt: "Planting seeds of change",
                                    className: "jsx-a22662bb4935650d" + " " + "story-main-img"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 111,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a22662bb4935650d" + " " + "img-accent-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-a22662bb4935650d" + " " + "accent-num",
                                            children: "01"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 117,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-a22662bb4935650d",
                                            children: "Our commitment to regenerative growth starts at the grassroots level."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 118,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 116,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/home-page/page.js",
                            lineNumber: 110,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-a22662bb4935650d" + " " + "story-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-a22662bb4935650d" + " " + "section-label",
                                    children: "Our Story"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 125,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-a22662bb4935650d" + " " + "story-title",
                                    children: [
                                        "From ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            className: "jsx-a22662bb4935650d",
                                            children: "Awareness"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 127,
                                            columnNumber: 34
                                        }, this),
                                        " to ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            className: "jsx-a22662bb4935650d",
                                            children: "Accountability"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 127,
                                            columnNumber: 56
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 126,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-a22662bb4935650d" + " " + "story-text",
                                    children: 'Estah Society’s "WE HEAL THE EARTH" initiative is more than just a campaign; it’s a commitment to the Future of India 2047. We bridge the gap between environmental consciousness and tangible community action.'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 129,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a22662bb4935650d" + " " + "story-points",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a22662bb4935650d" + " " + "s-point",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "jsx-a22662bb4935650d",
                                                    children: "Regenerative Mindsets"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-page/page.js",
                                                    lineNumber: 137,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-a22662bb4935650d",
                                                    children: "Teaching communities not just to sustain, but to actively heal their local ecosystems."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-page/page.js",
                                                    lineNumber: 138,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 136,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a22662bb4935650d" + " " + "s-point",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "jsx-a22662bb4935650d",
                                                    children: "Systemic Change"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-page/page.js",
                                                    lineNumber: 144,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-a22662bb4935650d",
                                                    children: "Working with institutional partners to scale sustainable practices across the nation."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-page/page.js",
                                                    lineNumber: 145,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 143,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 135,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/programs",
                                    className: "learn-more-link",
                                    children: [
                                        "Explore our Programs ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 152,
                                            columnNumber: 50
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 151,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/home-page/page.js",
                            lineNumber: 124,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/home-page/page.js",
                    lineNumber: 109,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home-page/page.js",
                lineNumber: 108,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-a22662bb4935650d" + " " + "home-vision",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a22662bb4935650d" + " " + "section-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-a22662bb4935650d" + " " + "section-label",
                                children: "Our Philosophy"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 161,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-a22662bb4935650d" + " " + "section-title",
                                children: [
                                    "A Vision for ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: "jsx-a22662bb4935650d",
                                        children: "India 2047"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 163,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 162,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home-page/page.js",
                        lineNumber: 160,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a22662bb4935650d" + " " + "vision-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a22662bb4935650d" + " " + "vision-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a22662bb4935650d" + " " + "vision-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Leaf"], {
                                            size: 32
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 170,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 169,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-a22662bb4935650d",
                                        children: "Sustainability"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 172,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-a22662bb4935650d",
                                        children: "Healing the earth through conscious living and regenerative educational frameworks."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 173,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 168,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a22662bb4935650d" + " " + "vision-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a22662bb4935650d" + " " + "vision-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GraduationCap"], {
                                            size: 32
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 180,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 179,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-a22662bb4935650d",
                                        children: "Education"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 182,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-a22662bb4935650d",
                                        children: "Bridging the gap with scholarship exams and fellowships for every aspiring mind."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 183,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 178,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a22662bb4935650d" + " " + "vision-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a22662bb4935650d" + " " + "vision-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Zap"], {
                                            size: 32
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 190,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 189,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-a22662bb4935650d",
                                        children: "Empowerment"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 192,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-a22662bb4935650d",
                                        children: "Providing the tools and networks for individual and community transformation."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 193,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 188,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home-page/page.js",
                        lineNumber: 167,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home-page/page.js",
                lineNumber: 159,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-a22662bb4935650d" + " " + "events-strip",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-a22662bb4935650d" + " " + "strip-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-a22662bb4935650d" + " " + "strip-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a22662bb4935650d" + " " + "header-text",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-a22662bb4935650d" + " " + "section-label",
                                            children: "Join Us"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 243,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-a22662bb4935650d" + " " + "strip-title",
                                            children: [
                                                "Upcoming ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    className: "jsx-a22662bb4935650d",
                                                    children: "Events"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-page/page.js",
                                                    lineNumber: 245,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 244,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 242,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/events",
                                    className: "strip-link",
                                    children: [
                                        "View All Events ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 249,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 248,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/home-page/page.js",
                            lineNumber: 241,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-a22662bb4935650d" + " " + "events-row",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENTS_DATA"].map((event, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EventCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    ...event
                                }, idx, false, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 254,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/home-page/page.js",
                            lineNumber: 252,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/home-page/page.js",
                    lineNumber: 240,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home-page/page.js",
                lineNumber: 239,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-a22662bb4935650d" + " " + "photos-strip",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-a22662bb4935650d" + " " + "strip-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-a22662bb4935650d" + " " + "strip-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a22662bb4935650d" + " " + "header-text",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-a22662bb4935650d" + " " + "section-label",
                                            children: "Gallery"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 265,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-a22662bb4935650d" + " " + "strip-title",
                                            children: [
                                                "Moments ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    className: "jsx-a22662bb4935650d",
                                                    children: "in Action"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-page/page.js",
                                                    lineNumber: 267,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 266,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 264,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/gallery",
                                    className: "strip-link",
                                    children: [
                                        "See All Photos ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 271,
                                            columnNumber: 44
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 270,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/home-page/page.js",
                            lineNumber: 263,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-a22662bb4935650d" + " " + "photos-grid",
                            children: loadingGallery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a22662bb4935650d" + " " + "loader-container",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TreeLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TreeLoader"], {
                                    size: 40
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 277,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 276,
                                columnNumber: 29
                            }, this) : galleryImages.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a22662bb4935650d" + " " + "photo-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: img.src,
                                            alt: img.alt,
                                            loading: "lazy",
                                            className: "jsx-a22662bb4935650d"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 282,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a22662bb4935650d" + " " + "photo-overlay",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-a22662bb4935650d",
                                                children: img.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-page/page.js",
                                                lineNumber: 284,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 283,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 281,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/home-page/page.js",
                            lineNumber: 274,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/home-page/page.js",
                    lineNumber: 262,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home-page/page.js",
                lineNumber: 261,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-a22662bb4935650d" + " " + "home-framework",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-a22662bb4935650d" + " " + "framework-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-a22662bb4935650d" + " " + "framework-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-a22662bb4935650d" + " " + "section-label",
                                    children: "Impact Framework"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 297,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-a22662bb4935650d" + " " + "framework-title",
                                    children: [
                                        "The Regenerative ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            className: "jsx-a22662bb4935650d",
                                            children: "Education Model"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 299,
                                            columnNumber: 46
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 298,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-a22662bb4935650d" + " " + "framework-desc",
                                    children: "We don't just teach; we transform. Our ecosystem is built on three pillars that ensure sustainable development from classroom to community."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 301,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a22662bb4935650d" + " " + "framework-points",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a22662bb4935650d" + " " + "f-point",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a22662bb4935650d" + " " + "f-icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Zap"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/home-page/page.js",
                                                        lineNumber: 309,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-page/page.js",
                                                    lineNumber: 308,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a22662bb4935650d" + " " + "f-text",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "jsx-a22662bb4935650d",
                                                            children: "Dynamic Curriculum"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-page/page.js",
                                                            lineNumber: 312,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-a22662bb4935650d",
                                                            children: "Scholarship exams and fellowships designed for modern environmental challenges."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-page/page.js",
                                                            lineNumber: 313,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-page/page.js",
                                                    lineNumber: 311,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 307,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a22662bb4935650d" + " " + "f-point",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a22662bb4935650d" + " " + "f-icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Leaf"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/home-page/page.js",
                                                        lineNumber: 321,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-page/page.js",
                                                    lineNumber: 320,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a22662bb4935650d" + " " + "f-text",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "jsx-a22662bb4935650d",
                                                            children: "Rooted Action"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-page/page.js",
                                                            lineNumber: 324,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-a22662bb4935650d",
                                                            children: "Grassroots community projects that put regenerative theory into practice."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-page/page.js",
                                                            lineNumber: 325,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-page/page.js",
                                                    lineNumber: 323,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 319,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 306,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/home-page/page.js",
                            lineNumber: 296,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-a22662bb4935650d" + " " + "framework-visual",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a22662bb4935650d" + " " + "visual-orb"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 334,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/story-mission.png",
                                    alt: "Framework",
                                    className: "jsx-a22662bb4935650d"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 335,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/home-page/page.js",
                            lineNumber: 333,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/home-page/page.js",
                    lineNumber: 295,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home-page/page.js",
                lineNumber: 294,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-a22662bb4935650d" + " " + "home-pathways",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a22662bb4935650d" + " " + "pathways-head center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-a22662bb4935650d" + " " + "section-label",
                                children: "Scale through Collaboration"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 343,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-a22662bb4935650d" + " " + "section-title",
                                children: [
                                    "Institutional ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: "jsx-a22662bb4935650d",
                                        children: "Pathways"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 345,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 344,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home-page/page.js",
                        lineNumber: 342,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a22662bb4935650d" + " " + "pathways-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a22662bb4935650d" + " " + "path-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a22662bb4935650d" + " " + "path-top",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-a22662bb4935650d" + " " + "path-num",
                                                children: "01"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-page/page.js",
                                                lineNumber: 351,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GraduationCap"], {
                                                size: 32
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-page/page.js",
                                                lineNumber: 352,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 350,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-a22662bb4935650d",
                                        children: "Academic Alliances"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 354,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-a22662bb4935650d",
                                        children: "Partnering with universities to integrate sustainability into mainstream higher education."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 355,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 349,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a22662bb4935650d" + " " + "path-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a22662bb4935650d" + " " + "path-top",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-a22662bb4935650d" + " " + "path-num",
                                                children: "02"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-page/page.js",
                                                lineNumber: 362,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExternalLink"], {
                                                size: 32
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-page/page.js",
                                                lineNumber: 363,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 361,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-a22662bb4935650d",
                                        children: "Corporate Synergy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 365,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-a22662bb4935650d",
                                        children: "Driving CSR initiatives that create measurable environmental and social ROI."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 366,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 360,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a22662bb4935650d" + " " + "path-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a22662bb4935650d" + " " + "path-top",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-a22662bb4935650d" + " " + "path-num",
                                                children: "03"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-page/page.js",
                                                lineNumber: 373,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Zap"], {
                                                size: 32
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-page/page.js",
                                                lineNumber: 374,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 372,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-a22662bb4935650d",
                                        children: "Government Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 376,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-a22662bb4935650d",
                                        children: "Advising on educational frameworks that align with India 2047 sustainability goals."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 377,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 371,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home-page/page.js",
                        lineNumber: 348,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home-page/page.js",
                lineNumber: 341,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-a22662bb4935650d" + " " + "home-sponsors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-a22662bb4935650d" + " " + "sponsors-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-a22662bb4935650d" + " " + "sponsors-header center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-a22662bb4935650d" + " " + "section-title",
                                    children: [
                                        "Powering Change ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            className: "jsx-a22662bb4935650d",
                                            children: "Together"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-page/page.js",
                                            lineNumber: 391,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 390,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-a22662bb4935650d" + " " + "sponsors-desc",
                                    children: "We're grateful to collaborate with organizations that share our vision of environmental restoration and community empowerment. Together, we're creating lasting positive impact."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 393,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/home-page/page.js",
                            lineNumber: 388,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-a22662bb4935650d" + " " + "sponsors-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a22662bb4935650d" + " " + "sponsor-card",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/sponsors/1-1.png",
                                        alt: "Estah",
                                        className: "jsx-a22662bb4935650d"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 401,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 400,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a22662bb4935650d" + " " + "sponsor-card",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/sponsors/4.png",
                                        alt: "C-SED",
                                        className: "jsx-a22662bb4935650d"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 404,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 403,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a22662bb4935650d" + " " + "sponsor-card",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/sponsors/5.png",
                                        alt: "HNF Capital",
                                        className: "jsx-a22662bb4935650d"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 407,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 406,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a22662bb4935650d" + " " + "sponsor-card",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/sponsors/6.png",
                                        alt: "Seal",
                                        className: "jsx-a22662bb4935650d"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 410,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 409,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a22662bb4935650d" + " " + "sponsor-card",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/sponsors/7.png",
                                        alt: "National Parmathon",
                                        className: "jsx-a22662bb4935650d"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 413,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 412,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a22662bb4935650d" + " " + "sponsor-card",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/sponsors/8.png",
                                        alt: "Earth Tree",
                                        className: "jsx-a22662bb4935650d"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 416,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 415,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/home-page/page.js",
                            lineNumber: 399,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/home-page/page.js",
                    lineNumber: 387,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home-page/page.js",
                lineNumber: 386,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-a22662bb4935650d" + " " + "home-community-cta",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-a22662bb4935650d" + " " + "cta-box",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a22662bb4935650d" + " " + "cta-inner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-a22662bb4935650d" + " " + "cta-title",
                                children: [
                                    "Ready to ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: "jsx-a22662bb4935650d",
                                        children: "Heal the Earth?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-page/page.js",
                                        lineNumber: 427,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 426,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-a22662bb4935650d" + " " + "cta-sub",
                                children: "Join thousands of students, educators, and leaders in building a regenerative future."
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 429,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a22662bb4935650d" + " " + "cta-links",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://pages.razorpay.com/pl_HkMCyxeXURf9kK/view",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "jsx-a22662bb4935650d" + " " + "cta-btn primary",
                                    children: "Support the Cause"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-page/page.js",
                                    lineNumber: 434,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-page/page.js",
                                lineNumber: 433,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home-page/page.js",
                        lineNumber: 425,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/home-page/page.js",
                    lineNumber: 424,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home-page/page.js",
                lineNumber: 423,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "a22662bb4935650d",
                children: ".home-container.jsx-a22662bb4935650d{background:var(--bg);color:var(--text)}.home-hero.jsx-a22662bb4935650d{text-align:center;justify-content:center;align-items:center;min-height:100vh;padding:120px 4vw;display:flex;position:relative;overflow:hidden}.hero-content-split.jsx-a22662bb4935650d{z-index:2;align-items:center;gap:60px;width:100%;max-width:1200px;display:flex;position:relative}.hero-left.jsx-a22662bb4935650d{flex:.8;justify-content:center;display:flex}.hero-right.jsx-a22662bb4935650d{text-align:left;flex-direction:column;flex:1.2;align-items:flex-start;display:flex}.hero-large-logo.jsx-a22662bb4935650d{object-fit:contain;background:0 0;border-radius:20px;width:100%;max-width:380px;height:auto;box-shadow:0 15px 40px #0000004d}.hero-title.jsx-a22662bb4935650d{font-family:var(--font-sans);letter-spacing:-.02em;margin-bottom:24px;font-size:max(36px,min(5vw,64px));font-weight:700;line-height:1.2}.hero-title.jsx-a22662bb4935650d em.jsx-a22662bb4935650d{color:#7ed957;font-style:italic;font-weight:700}.hero-sub.jsx-a22662bb4935650d{opacity:.85;max-width:580px;margin:0 0 32px;font-size:max(16px,min(2vw,20px));line-height:1.6}.hero-ctas.jsx-a22662bb4935650d{justify-content:flex-start;gap:16px;display:flex}.cta-btn.jsx-a22662bb4935650d{border-radius:8px;justify-content:center;align-items:center;padding:16px 32px;font-size:16px;font-weight:600;text-decoration:none;transition:all .2s;display:flex}.cta-btn.primary.jsx-a22662bb4935650d{color:#fff;background:#7ed957;padding:18px 36px;font-size:17px;box-shadow:0 4px 12px #7ed9574d}.cta-btn.primary.jsx-a22662bb4935650d:hover{transform:translateY(-2px);box-shadow:0 6px 16px #7ed95766}.cta-btn.secondary.jsx-a22662bb4935650d{color:#fff;background:0 0;border:1px solid #fffc}.cta-btn.secondary.jsx-a22662bb4935650d:hover{background:#ffffff1a;transform:translateY(-2px)}.home-stats.jsx-a22662bb4935650d{background:var(--surface1);border-top:1px solid #ffffff0d;border-bottom:1px solid #ffffff0d;padding:24px 0}.stats-ticker.jsx-a22662bb4935650d{white-space:nowrap;overflow:hidden}.ticker-inner.jsx-a22662bb4935650d{animation:30s linear infinite ticker;display:inline-block}.ticker-inner.jsx-a22662bb4935650d span.jsx-a22662bb4935650d{letter-spacing:.1em;opacity:.8;color:#fff;margin-right:100px;font-size:.9rem;font-weight:900;display:inline-block}@keyframes ticker{0%{transform:translate(0)}to{transform:translate(-50%)}}.home-story.jsx-a22662bb4935650d{max-width:1400px;margin:0 auto;padding:140px 4vw}.story-grid.jsx-a22662bb4935650d{grid-template-columns:1fr 1fr;align-items:center;gap:80px;display:grid}.story-image-wrap.jsx-a22662bb4935650d{position:relative}.story-main-img.jsx-a22662bb4935650d{aspect-ratio:4/5;object-fit:cover;filter:saturate(1.1);border-radius:40px;width:100%;display:block;box-shadow:0 30px 60px #0000004d}.img-accent-card.jsx-a22662bb4935650d{background:var(--surface1);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);border:1px solid #ffffff1a;border-radius:24px;max-width:240px;padding:30px;position:absolute;bottom:-30px;right:-30px;box-shadow:0 20px 40px #0003}.accent-num.jsx-a22662bb4935650d{color:var(--lime);margin-bottom:12px;font-size:2.5rem;font-weight:800;display:block}.img-accent-card.jsx-a22662bb4935650d p.jsx-a22662bb4935650d{font-size:.9rem;font-weight:600;line-height:1.5}.story-title.jsx-a22662bb4935650d{font-family:var(--font-sans);font-size:var(--fs-h2);margin:10px 0 24px;font-weight:900;line-height:1.1}.story-title.jsx-a22662bb4935650d em.jsx-a22662bb4935650d{color:var(--lime);font-style:italic;font-weight:900}.story-text.jsx-a22662bb4935650d{opacity:.8;margin-bottom:40px;font-size:1.15rem;line-height:1.7}.story-points.jsx-a22662bb4935650d{gap:24px;margin-bottom:48px;display:grid}.s-point.jsx-a22662bb4935650d strong.jsx-a22662bb4935650d{color:var(--lime);margin-bottom:4px;display:block}.learn-more-link.jsx-a22662bb4935650d{color:var(--lime);text-transform:uppercase;letter-spacing:.1em;align-items:center;gap:12px;font-size:.9rem;font-weight:800;text-decoration:none;display:flex}.home-vision.jsx-a22662bb4935650d{background:#ffffff03;padding:100px 4vw}.section-header.jsx-a22662bb4935650d{margin-bottom:60px}.section-header.center.jsx-a22662bb4935650d{text-align:center}.section-label.jsx-a22662bb4935650d{color:var(--lime);text-transform:uppercase;letter-spacing:.2em;margin-bottom:16px;font-size:.75rem;font-weight:900}.section-title.jsx-a22662bb4935650d{font-family:var(--font-sans);font-size:var(--fs-h2);letter-spacing:-.01em;font-weight:900}.section-title.jsx-a22662bb4935650d em.jsx-a22662bb4935650d{color:var(--lime);font-style:italic;font-weight:900}.vision-grid.jsx-a22662bb4935650d{grid-template-columns:repeat(3,1fr);gap:30px;max-width:1400px;margin:0 auto;display:grid}.vision-card.jsx-a22662bb4935650d{background:var(--surface1);border:1px solid #ffffff0d;border-radius:32px;padding:50px;transition:all .4s}.vision-card.jsx-a22662bb4935650d:hover{border-color:var(--lime);background:#ffffff0a;transform:translateY(-10px)}.vision-icon.jsx-a22662bb4935650d{color:var(--lime);margin-bottom:30px}.vision-card.jsx-a22662bb4935650d h3.jsx-a22662bb4935650d{font-family:var(--font-sans);margin-bottom:16px;font-size:1.8rem}.vision-card.jsx-a22662bb4935650d p.jsx-a22662bb4935650d{opacity:.7;line-height:1.7}.home-latest-blogs.jsx-a22662bb4935650d{max-width:1400px;margin:0 auto;padding:140px 4vw}.blog-preview-grid.jsx-a22662bb4935650d{grid-template-columns:repeat(3,1fr);gap:30px;margin-top:60px;display:grid}.blog-preview-card.jsx-a22662bb4935650d{background:var(--surface1);color:inherit;border:1px solid #ffffff0d;border-radius:24px;padding:40px;text-decoration:none;transition:all .3s}.blog-preview-card.jsx-a22662bb4935650d:hover{transform:scale(1.02);box-shadow:0 20px 40px #0000004d}.p-category.jsx-a22662bb4935650d{color:var(--lime);text-transform:uppercase;margin-bottom:20px;font-size:.75rem;font-weight:900;display:block}.p-title.jsx-a22662bb4935650d{font-family:var(--font-sans);margin-bottom:16px;font-size:1.4rem;line-height:1.2}.p-excerpt.jsx-a22662bb4935650d{opacity:.6;margin-bottom:24px;font-size:.95rem;line-height:1.6}.p-link.jsx-a22662bb4935650d{color:var(--lime);align-items:center;gap:8px;font-weight:800;display:flex}.center-cta.jsx-a22662bb4935650d{text-align:center;margin-top:60px}.view-all-btn.jsx-a22662bb4935650d{border:1px solid var(--lime);color:var(--lime);background:0 0;border-radius:14px;padding:18px 40px;font-weight:800;text-decoration:none;display:inline-block}.loader-container.jsx-a22662bb4935650d{justify-content:center;padding:40px;display:flex}.events-strip.jsx-a22662bb4935650d,.photos-strip.jsx-a22662bb4935650d{border-top:1px solid #ffffff0d;padding:100px 4vw}.strip-container.jsx-a22662bb4935650d{max-width:1400px;margin:0 auto}.strip-header.jsx-a22662bb4935650d{justify-content:space-between;align-items:flex-end;margin-bottom:50px;display:flex}.strip-title.jsx-a22662bb4935650d{font-family:var(--font-sans);font-size:var(--fs-h2);margin-top:10px;font-weight:900}.strip-title.jsx-a22662bb4935650d em.jsx-a22662bb4935650d{color:var(--lime);font-style:italic;font-weight:900}.strip-link.jsx-a22662bb4935650d{color:var(--lime);align-items:center;gap:12px;font-weight:800;text-decoration:none;display:flex}.events-row.jsx-a22662bb4935650d{scroll-snap-type:x mandatory;scrollbar-width:thin;scrollbar-color:var(--lime)#ffffff1a;gap:30px;margin:0 -10px;padding:10px 10px 30px;display:flex;overflow-x:auto}.events-row.jsx-a22662bb4935650d::-webkit-scrollbar{height:8px}.events-row.jsx-a22662bb4935650d::-webkit-scrollbar-track{background:#ffffff0d;border-radius:10px}.events-row.jsx-a22662bb4935650d::-webkit-scrollbar-thumb{background:var(--lime);border-radius:10px}.events-row>*{scroll-snap-align:start;flex:0 0 400px;min-width:400px}.photos-grid.jsx-a22662bb4935650d{grid-template-columns:repeat(4,1fr);gap:20px;display:grid}.photo-item.jsx-a22662bb4935650d{aspect-ratio:1;border-radius:20px;position:relative;overflow:hidden}.photo-item.jsx-a22662bb4935650d img.jsx-a22662bb4935650d{object-fit:cover;width:100%;height:100%;transition:transform .5s}.photo-item.jsx-a22662bb4935650d:hover img.jsx-a22662bb4935650d{transform:scale(1.1)}.photo-overlay.jsx-a22662bb4935650d{opacity:0;background:linear-gradient(#0000 40%,#000c);align-items:flex-end;padding:20px;transition:opacity .3s;display:flex;position:absolute;inset:0}.photo-item.jsx-a22662bb4935650d:hover .photo-overlay.jsx-a22662bb4935650d{opacity:1}.photo-overlay.jsx-a22662bb4935650d span.jsx-a22662bb4935650d{text-transform:uppercase;color:var(--lime);font-size:.75rem;font-weight:800}.home-framework.jsx-a22662bb4935650d{background:var(--surface1);padding:140px 4vw}.framework-container.jsx-a22662bb4935650d{grid-template-columns:1fr 1fr;align-items:center;gap:80px;max-width:1400px;margin:0 auto;display:grid}.framework-title.jsx-a22662bb4935650d{font-family:var(--font-sans);font-size:var(--fs-h2);margin:10px 0 24px;font-weight:900}.framework-title.jsx-a22662bb4935650d em.jsx-a22662bb4935650d{color:var(--lime);font-style:italic;font-weight:900}.framework-desc.jsx-a22662bb4935650d{opacity:.8;margin-bottom:40px;font-size:1.15rem;line-height:1.7}.framework-points.jsx-a22662bb4935650d{gap:30px;display:grid}.f-point.jsx-a22662bb4935650d{gap:20px;display:flex}.f-icon.jsx-a22662bb4935650d{color:var(--lime)}.f-text.jsx-a22662bb4935650d h4.jsx-a22662bb4935650d{font-family:var(--font-sans);margin-bottom:8px;font-size:1.25rem}.f-text.jsx-a22662bb4935650d p.jsx-a22662bb4935650d{opacity:.7;font-size:.95rem}.framework-visual.jsx-a22662bb4935650d{position:relative}.framework-visual.jsx-a22662bb4935650d img.jsx-a22662bb4935650d{border-radius:40px;width:100%}.home-pathways.jsx-a22662bb4935650d{max-width:1400px;margin:0 auto;padding:140px 4vw}.home-pathways.jsx-a22662bb4935650d .center.jsx-a22662bb4935650d{text-align:center;margin-bottom:80px}.pathways-grid.jsx-a22662bb4935650d{grid-template-columns:repeat(3,1fr);gap:30px;display:grid}.path-card.jsx-a22662bb4935650d{background:var(--surface1);border:1px solid #ffffff0d;border-radius:32px;padding:50px}.path-top.jsx-a22662bb4935650d{color:var(--lime);justify-content:space-between;align-items:center;margin-bottom:30px;display:flex}.path-num.jsx-a22662bb4935650d{opacity:.9;color:#fff;font-size:2.5rem;font-weight:900}.path-card.jsx-a22662bb4935650d h3.jsx-a22662bb4935650d{font-family:var(--font-sans);margin-bottom:16px;font-size:1.5rem}.path-card.jsx-a22662bb4935650d p.jsx-a22662bb4935650d{opacity:.7;line-height:1.6}.home-sponsors.jsx-a22662bb4935650d{background:var(--bg);padding:80px 4vw 140px}.sponsors-container.jsx-a22662bb4935650d{max-width:1200px;margin:0 auto}.sponsors-header.center.jsx-a22662bb4935650d{text-align:center;margin-bottom:60px}.sponsors-label.jsx-a22662bb4935650d{color:#fff;background:#3b82f6;border-radius:30px;margin-bottom:24px;padding:10px 24px;font-size:.95rem;font-weight:800;display:inline-block}.sponsors-desc.jsx-a22662bb4935650d{opacity:.8;max-width:800px;margin:20px auto 0;font-size:1.15rem;line-height:1.6}.sponsors-grid.jsx-a22662bb4935650d{grid-template-columns:repeat(6,1fr);gap:20px;display:grid}.sponsor-card.jsx-a22662bb4935650d{background:var(--surface1);aspect-ratio:4/3;border:1px solid #ffffff0d;border-radius:16px;justify-content:center;align-items:center;padding:24px;transition:transform .3s;display:flex}.sponsor-card.jsx-a22662bb4935650d:hover{background:#ffffff0a;transform:translateY(-5px)}.sponsor-card.jsx-a22662bb4935650d img.jsx-a22662bb4935650d{object-fit:contain;opacity:.8;max-width:100%;max-height:100%;transition:opacity .3s,filter .3s}.sponsor-card.jsx-a22662bb4935650d:hover img.jsx-a22662bb4935650d{opacity:1}.home-community-cta.jsx-a22662bb4935650d{padding:140px 4vw}.cta-box.jsx-a22662bb4935650d{background:linear-gradient(135deg,var(--lime),#4e8c6f);text-align:center;max-width:1200px;color:var(--text-dark);border-radius:48px;margin:0 auto;padding:100px 40px}.cta-title.jsx-a22662bb4935650d{font-family:var(--font-sans);margin-bottom:24px;font-size:3.5rem;font-weight:900}.cta-title.jsx-a22662bb4935650d em.jsx-a22662bb4935650d{color:#fff;font-style:italic}.cta-sub.jsx-a22662bb4935650d{opacity:.9;max-width:700px;margin:0 auto 48px;font-size:1.4rem}.cta-links.jsx-a22662bb4935650d{justify-content:center;gap:20px;display:flex}.cta-box.jsx-a22662bb4935650d .primary.jsx-a22662bb4935650d{color:var(--text-dark);background:#fff}.cta-box.jsx-a22662bb4935650d .secondary.jsx-a22662bb4935650d{color:var(--text-dark);background:#0000001a;border:1px solid #0003}@media (width<=1024px){.home-story.jsx-a22662bb4935650d,.home-vision.jsx-a22662bb4935650d,.home-latest-blogs.jsx-a22662bb4935650d,.events-strip.jsx-a22662bb4935650d,.photos-strip.jsx-a22662bb4935650d,.home-framework.jsx-a22662bb4935650d,.home-pathways.jsx-a22662bb4935650d,.home-community-cta.jsx-a22662bb4935650d{padding:80px 4vw}.story-grid.jsx-a22662bb4935650d{flex-direction:column-reverse;gap:80px;display:flex}.framework-container.jsx-a22662bb4935650d{grid-template-columns:1fr;gap:80px}.story-image-wrap.jsx-a22662bb4935650d,.framework-visual.jsx-a22662bb4935650d{max-width:600px;margin:0 auto}.img-accent-card.jsx-a22662bb4935650d{bottom:-20px;right:-10px}.events-row.jsx-a22662bb4935650d,.vision-grid.jsx-a22662bb4935650d,.blog-preview-grid.jsx-a22662bb4935650d,.pathways-grid.jsx-a22662bb4935650d{grid-template-columns:repeat(2,1fr)}.photos-grid.jsx-a22662bb4935650d{grid-template-columns:repeat(2,1fr);gap:16px}.sponsors-grid.jsx-a22662bb4935650d{grid-template-columns:repeat(4,1fr);gap:16px}.cta-title.jsx-a22662bb4935650d{font-size:2.5rem}}@media (width<=768px){.home-hero.jsx-a22662bb4935650d{text-align:center;padding-top:100px;padding-bottom:60px}.hero-content-split.jsx-a22662bb4935650d{flex-direction:column;gap:30px;margin-bottom:24px}.hero-right.jsx-a22662bb4935650d{display:contents}.eyebrow.jsx-a22662bb4935650d{order:1}.hero-title.jsx-a22662bb4935650d{order:2;margin-bottom:16px}.hero-sub.jsx-a22662bb4935650d{order:3;margin:0 auto!important}.hero-left.jsx-a22662bb4935650d{order:4;margin:10px 0 20px}.hero-ctas.jsx-a22662bb4935650d{flex-direction:column;order:5;justify-content:center;gap:12px;width:100%;padding:0 4vw}.cta-btn.jsx-a22662bb4935650d{width:100%}.hero-large-logo.jsx-a22662bb4935650d{max-width:280px}.vision-grid.jsx-a22662bb4935650d,.blog-preview-grid.jsx-a22662bb4935650d,.pathways-grid.jsx-a22662bb4935650d{grid-template-columns:1fr}.sponsors-grid.jsx-a22662bb4935650d{grid-template-columns:repeat(3,1fr)}.events-row.jsx-a22662bb4935650d,.photos-grid.jsx-a22662bb4935650d{scroll-snap-type:x mandatory;scrollbar-width:none;flex-wrap:nowrap;margin:0 -4vw;padding:0 4vw;display:flex;overflow-x:auto}.events-row.jsx-a22662bb4935650d::-webkit-scrollbar{display:none}.photos-grid.jsx-a22662bb4935650d::-webkit-scrollbar{display:none}.photos-grid.jsx-a22662bb4935650d>.jsx-a22662bb4935650d,.events-row>*{scroll-snap-align:center;flex:0 0 85%;min-width:85%}.photos-grid.jsx-a22662bb4935650d>.jsx-a22662bb4935650d{flex:0 0 70%}}@media (width<=640px){.home-story.jsx-a22662bb4935650d,.home-vision.jsx-a22662bb4935650d,.home-latest-blogs.jsx-a22662bb4935650d,.events-strip.jsx-a22662bb4935650d,.photos-strip.jsx-a22662bb4935650d,.home-framework.jsx-a22662bb4935650d,.home-pathways.jsx-a22662bb4935650d,.home-community-cta.jsx-a22662bb4935650d{padding:60px 4vw}.strip-header.jsx-a22662bb4935650d{flex-direction:column;align-items:flex-start;gap:20px}.cta-links.jsx-a22662bb4935650d{flex-direction:column}.sponsors-grid.jsx-a22662bb4935650d{grid-template-columns:repeat(2,1fr)}.events-row>*{flex:0 0 90%;min-width:90%}.photos-grid.jsx-a22662bb4935650d>.jsx-a22662bb4935650d{flex:0 0 80%;min-width:80%}.img-accent-card.jsx-a22662bb4935650d{z-index:2;max-width:90%;margin:-20px auto 0;position:relative;bottom:auto;right:auto}.hero-large-logo.jsx-a22662bb4935650d{max-width:240px}.hero-brand-mark{margin-bottom:16px!important}.cta-box.jsx-a22662bb4935650d{border-radius:32px;padding:60px 20px}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/home-page/page.js",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_a247df70._.js.map