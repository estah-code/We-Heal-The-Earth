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
"[project]/src/data/programs.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"title":"Education as a Service (EaaS)","date":"Jan 24, 2025","category":"Education","link":"https://run4education.com/","description":"Training 40K students and creating 40K jobs through solution-driven education programs."},{"title":"Livelihood as a Service (LaaS)","date":"Feb 12, 2025","category":"Livelihood","link":"https://run4livelihoods.com/","description":"Empowering communities with sustainable skills and livelihood opportunities."},{"title":"Water as a Service (WaaS)","date":"Mar 22, 2025","category":"Sustainability","link":"https://runforwater.in/","description":"Ensuring clean water access and implementing conservation practices globally."},{"title":"Health as a Service (HaaS)","date":"Apr 07, 2025","category":"Health","link":"https://runforhealth.in/","description":"Promoting accessible healthcare and wellness initiatives for rural communities."},{"title":"Entertainment as a Service (EaaS)","date":"May 11, 2025","category":"Culture","link":"http://run4culture.com/","description":"Celebrating cultural diversity and community engagement through the arts."},{"title":"Environmental as a Service (EaaS)","date":"Jun 05, 2025","category":"Conservation","link":"https://run4environment.com/","description":"Driving environmental protection and restoration through collective action."},{"title":"Housing as a Service (HaaS)","date":"Jul 17, 2025","category":"Sustainability","link":"https://runforgreenhousing.org/","description":"Developing eco-friendly housing solutions for sustainable community living."},{"title":"Hub Networking Events (HnEaaS)","date":"Aug 19, 2025","category":"Networking","link":"https://giveambassadorsnetwork.org/","description":"Connecting global ambassadors and change-makers for humanitarian impact."},{"title":"Transport as a Service (TaaS)","date":"Sep 20, 2025","category":"Mobility","link":"https://run4emobilitytransport.com/","description":"Pioneering sustainable and inclusive transport solutions for last-mile connectivity."},{"title":"Energy as a Service (EaaS)","date":"Oct 22, 2025","category":"Energy","link":"https://run4greenenergy.org/","description":"Transitioning communities to clean, renewable energy sources for a greener future."},{"title":"Agriculture as a Service (AaaS)","date":"Dec 23, 2025","category":"Agriculture","link":"https://nationalfarmathon.com/","description":"Modernizing agricultural practices to ensure food security and farmer prosperity."}]);}),
"[project]/src/app/programs/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgramsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroBackground$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeroBackground.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$programs$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/programs.json (json)");
'use client';
;
;
;
;
;
;
function ProgramsPage() {
    const [programs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$programs$2e$json__$28$json$29$__["default"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-6b80953229f8e5ef" + " " + "calendar-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-6b80953229f8e5ef" + " " + "calendar-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroBackground$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/programs/page.js",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6b80953229f8e5ef" + " " + "hero-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-6b80953229f8e5ef" + " " + "eyebrow",
                                children: "Planet Run Calendar 2025"
                            }, void 0, false, {
                                fileName: "[project]/src/app/programs/page.js",
                                lineNumber: 16,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "jsx-6b80953229f8e5ef" + " " + "hero-title",
                                children: [
                                    "A Year of ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: "jsx-6b80953229f8e5ef",
                                        children: "Purpose"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/programs/page.js",
                                        lineNumber: 18,
                                        columnNumber: 35
                                    }, this),
                                    " and ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: "jsx-6b80953229f8e5ef",
                                        children: "Impact"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/programs/page.js",
                                        lineNumber: 18,
                                        columnNumber: 56
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/programs/page.js",
                                lineNumber: 17,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-6b80953229f8e5ef" + " " + "hero-sub",
                                children: "Our structured chronological series of global services and environmental runs. Every month, a new mission to heal the earth."
                            }, void 0, false, {
                                fileName: "[project]/src/app/programs/page.js",
                                lineNumber: 20,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/programs/page.js",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/programs/page.js",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-6b80953229f8e5ef" + " " + "calendar-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-6b80953229f8e5ef" + " " + "calendar-timeline",
                    children: programs.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                '--delay': `${i * 0.1}s`
                            },
                            className: "jsx-6b80953229f8e5ef" + " " + "timeline-item",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6b80953229f8e5ef" + " " + "item-date",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6b80953229f8e5ef" + " " + "date-main",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6b80953229f8e5ef" + " " + "month",
                                                    children: p.date.split(' ')[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/programs/page.js",
                                                    lineNumber: 33,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6b80953229f8e5ef" + " " + "day",
                                                    children: p.date.split(' ')[1].replace(',', '')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/programs/page.js",
                                                    lineNumber: 34,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/programs/page.js",
                                            lineNumber: 32,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6b80953229f8e5ef" + " " + "year",
                                            children: "2025"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/programs/page.js",
                                            lineNumber: 36,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/programs/page.js",
                                    lineNumber: 31,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6b80953229f8e5ef" + " " + "item-connector",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6b80953229f8e5ef" + " " + "dot"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/programs/page.js",
                                            lineNumber: 40,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6b80953229f8e5ef" + " " + "line"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/programs/page.js",
                                            lineNumber: 41,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/programs/page.js",
                                    lineNumber: 39,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6b80953229f8e5ef" + " " + "item-content",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6b80953229f8e5ef" + " " + "card-glass",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6b80953229f8e5ef" + " " + "card-header",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-6b80953229f8e5ef" + " " + "cat-tag",
                                                        children: p.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/programs/page.js",
                                                        lineNumber: 47,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6b80953229f8e5ef" + " " + "service-icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-6b80953229f8e5ef" + " " + "pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/programs/page.js",
                                                            lineNumber: 50,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/programs/page.js",
                                                        lineNumber: 48,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/programs/page.js",
                                                lineNumber: 46,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-6b80953229f8e5ef" + " " + "service-title",
                                                children: p.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/programs/page.js",
                                                lineNumber: 53,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-6b80953229f8e5ef" + " " + "service-desc",
                                                children: p.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/programs/page.js",
                                                lineNumber: 54,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6b80953229f8e5ef" + " " + "card-footer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: p.link,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "jsx-6b80953229f8e5ef" + " " + "visit-btn",
                                                    children: [
                                                        "Visit Program Site",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            stroke: "currentColor",
                                                            strokeWidth: "3",
                                                            fill: "none",
                                                            className: "jsx-6b80953229f8e5ef",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M5 12h14M12 5l7 7-7 7",
                                                                className: "jsx-6b80953229f8e5ef"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/programs/page.js",
                                                                lineNumber: 59,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/programs/page.js",
                                                            lineNumber: 58,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/programs/page.js",
                                                    lineNumber: 56,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/programs/page.js",
                                                lineNumber: 55,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/programs/page.js",
                                        lineNumber: 45,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/programs/page.js",
                                    lineNumber: 44,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/app/programs/page.js",
                            lineNumber: 30,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/programs/page.js",
                    lineNumber: 28,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/programs/page.js",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-6b80953229f8e5ef" + " " + "join-global",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-6b80953229f8e5ef" + " " + "join-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "jsx-6b80953229f8e5ef",
                            children: [
                                "Become a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    className: "jsx-6b80953229f8e5ef",
                                    children: "Global Ambassador"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/programs/page.js",
                                    lineNumber: 72,
                                    columnNumber: 34
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/programs/page.js",
                            lineNumber: 72,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-6b80953229f8e5ef",
                            children: "Help us coordinate these runs and services in your local community."
                        }, void 0, false, {
                            fileName: "[project]/src/app/programs/page.js",
                            lineNumber: 73,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: "action-pill",
                            children: "Partner With Us"
                        }, void 0, false, {
                            fileName: "[project]/src/app/programs/page.js",
                            lineNumber: 74,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/programs/page.js",
                    lineNumber: 71,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/programs/page.js",
                lineNumber: 70,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "6b80953229f8e5ef",
                children: ".calendar-page.jsx-6b80953229f8e5ef{color:#fff;min-height:100vh;font-family:var(--font-outfit);background:#050505}.calendar-hero.jsx-6b80953229f8e5ef{text-align:center;padding:160px 5% 100px;position:relative;overflow:hidden}.hero-content.jsx-6b80953229f8e5ef{z-index:2;max-width:900px;margin:0 auto;position:relative}.eyebrow.jsx-6b80953229f8e5ef{letter-spacing:.2em;color:var(--lime);text-transform:uppercase;margin-bottom:24px;font-size:.9rem;font-weight:800;animation:.8s ease-out fadeInUp;display:inline-block}.hero-title.jsx-6b80953229f8e5ef{letter-spacing:-.04em;margin-bottom:30px;font-size:max(3rem,min(8vw,6rem));font-weight:700;line-height:.9;animation:1s ease-out backwards fadeInUp}.hero-title.jsx-6b80953229f8e5ef em.jsx-6b80953229f8e5ef{color:var(--lime);font-style:italic;font-weight:400}.hero-sub.jsx-6b80953229f8e5ef{opacity:.7;max-width:650px;margin:0 auto;font-size:1.25rem;line-height:1.6;animation:1.2s ease-out backwards fadeInUp}.calendar-section.jsx-6b80953229f8e5ef{padding:80px 5% 150px;position:relative}.calendar-timeline.jsx-6b80953229f8e5ef{max-width:1000px;margin:0 auto;position:relative}.timeline-item.jsx-6b80953229f8e5ef{opacity:0;animation:.6s ease-out forwards slideInUp;animation-delay:var(--delay);gap:40px;margin-bottom:60px;display:flex;transform:translateY(30px)}.item-date.jsx-6b80953229f8e5ef{text-align:right;flex-shrink:0;width:100px;padding-top:20px}.date-main.jsx-6b80953229f8e5ef{flex-direction:column;line-height:1;display:flex}.month.jsx-6b80953229f8e5ef{text-transform:uppercase;color:var(--lime);opacity:.8;font-size:.9rem;font-weight:800}.day.jsx-6b80953229f8e5ef{margin:5px 0;font-size:2.5rem;font-weight:700}.year.jsx-6b80953229f8e5ef{opacity:.4;font-size:.8rem;font-weight:600}.item-connector.jsx-6b80953229f8e5ef{flex-direction:column;flex-shrink:0;align-items:center;width:40px;padding-top:30px;display:flex}.dot.jsx-6b80953229f8e5ef{background:var(--lime);width:12px;height:12px;box-shadow:0 0 15px var(--lime);z-index:2;border-radius:50%}.line.jsx-6b80953229f8e5ef{background:linear-gradient(#c1ff7266,#0000);flex-grow:1;width:2px;margin-top:10px}.item-content.jsx-6b80953229f8e5ef{flex-grow:1}.card-glass.jsx-6b80953229f8e5ef{-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);background:#ffffff08;border:1px solid #ffffff14;border-radius:32px;padding:40px;transition:all .4s cubic-bezier(.16,1,.3,1);position:relative;overflow:hidden}.card-glass.jsx-6b80953229f8e5ef:hover{border-color:var(--lime);background:#ffffff0f;transform:translate(10px)scale(1.02)}.card-header.jsx-6b80953229f8e5ef{justify-content:space-between;margin-bottom:24px;display:flex}.cat-tag.jsx-6b80953229f8e5ef{color:var(--lime);letter-spacing:.05em;text-transform:uppercase;background:#c1ff721a;border-radius:100px;padding:6px 14px;font-size:.7rem;font-weight:900}.service-title.jsx-6b80953229f8e5ef{margin-bottom:12px;font-size:1.8rem;font-weight:600;line-height:1.2}.service-desc.jsx-6b80953229f8e5ef{opacity:.6;margin-bottom:30px;font-size:1.05rem;line-height:1.6}.card-footer.jsx-6b80953229f8e5ef{border-top:1px solid #ffffff0d;padding-top:25px}.visit-btn.jsx-6b80953229f8e5ef{color:var(--lime);align-items:center;gap:12px;font-size:.95rem;font-weight:800;text-decoration:none;transition:gap .3s;display:inline-flex}.visit-btn.jsx-6b80953229f8e5ef:hover{gap:18px}.join-global.jsx-6b80953229f8e5ef{justify-content:center;padding:0 5% 150px;display:flex}.join-card.jsx-6b80953229f8e5ef{text-align:center;background:linear-gradient(45deg,#111,#1a1a1a);border:1px solid #ffffff0d;border-radius:48px;width:100%;max-width:800px;padding:80px 40px}.join-card.jsx-6b80953229f8e5ef h2.jsx-6b80953229f8e5ef{margin-bottom:20px;font-size:2.8rem;font-weight:700}.join-card.jsx-6b80953229f8e5ef h2.jsx-6b80953229f8e5ef em.jsx-6b80953229f8e5ef{color:var(--lime);font-style:italic;font-weight:400}.join-card.jsx-6b80953229f8e5ef p.jsx-6b80953229f8e5ef{opacity:.7;margin-bottom:40px;font-size:1.2rem}.action-pill.jsx-6b80953229f8e5ef{background:var(--lime);color:var(--text-dark);border-radius:20px;padding:20px 48px;font-weight:800;text-decoration:none;transition:transform .3s,box-shadow .3s;display:inline-block}.action-pill.jsx-6b80953229f8e5ef:hover{transform:scale(1.05);box-shadow:0 20px 40px #c1ff7233}@keyframes fadeInUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes slideInUp{to{opacity:1;transform:translateY(0)}}@media (width<=768px){.timeline-item.jsx-6b80953229f8e5ef{flex-direction:column;gap:20px}.item-date.jsx-6b80953229f8e5ef{text-align:left;align-items:center;gap:15px;width:auto;display:flex}.date-main.jsx-6b80953229f8e5ef{flex-direction:row;align-items:baseline;gap:10px}.item-connector.jsx-6b80953229f8e5ef{display:none}.card-glass.jsx-6b80953229f8e5ef{padding:30px}.service-title.jsx-6b80953229f8e5ef{font-size:1.4rem}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/programs/page.js",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_b842b6ed._.js.map