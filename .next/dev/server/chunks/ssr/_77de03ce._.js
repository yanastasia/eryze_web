module.exports = [
"[project]/lib/anastasiaPortfolio.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anastasiaPortfolio",
    ()=>anastasiaPortfolio
]);
const anastasiaPortfolio = {
    name: 'Anastasia Yakimovska',
    title: 'Tech Entrepreneur & Software Engineer',
    tagline: 'Building user-centered solutions at the intersection of technology, education, and innovation.',
    bio: 'Aspiring tech entrepreneur with a software engineering background and startup leadership experience. Currently a final-year student at Sofia University and co-founder of KidsGo, an education-tech marketplace. Passionate about leveraging technology to solve real-world problems in Southeast Europe.',
    location: 'Sofia, Bulgaria',
    email: 'anastasiayakimovska@gmail.com',
    notionProjects: 'https://yanastasia.notion.site/Classes-Uni-67c00c65241a4336b7c15fba36d5abec',
    experience: [
        {
            id: 'globalfoundries',
            company: 'GlobalFoundries',
            role: 'Principal Technician Design Enablement, DFM',
            period: 'September 2023 – Present',
            location: 'Sofia, Bulgaria',
            highlights: [
                'Built and maintained infrastructure tools for global DFM workflows, including web-based and UNIX-based applications.',
                'Executed development and QA for DFM decks across multiple technologies, contributing to a dozen successful releases.',
                'Automated deck testing processes, improving efficiency through generation of holding and scoring cells.',
                'Completed SVRF and TCL training, enabling contributions to deck development and automation applications.',
                'Co-authored a technical paper: "Machine learning-assisted pattern optimizations for reducing Design for Manufacturability (DFM) rule check violations."',
                'Finished a 6-month internship, completed Cadence and Calibre Training for DRC and LVS',
                'Initiated and led a Python-based automation project with the FILL team to generate XML files for fill synthesis directly from PSV rules',
                'Active member of GlobalWomen Sofia and GlobalU; co-organized the GlobalWomen conference and mentored students during the Summer Practice 2025 program.',
                'Core member of Early Tenure Professionals (ETP) Bulgaria, supporting initiatives for professional development and community building.'
            ]
        },
        {
            id: 'kidsgo',
            company: 'KidsGo',
            role: 'Co-founder and CEO',
            period: 'January 2023 - Present',
            location: 'Sofia, Bulgaria',
            highlights: [
                'Developed business and financial plans; conducted market and customer research.',
                'Led investor pitches, product design, and team operations.',
                'Built strategic partnerships with universities, foundations, and NGOs.',
                'Participated in leading European accelerators: Start For Future, Beyond, SEEIP, Skills2Scale, and Plug&Pay.',
                'Represented KidsGo on a panel at The Athenian Nexus 2024 Summit.',
                'Awarded 2nd place in the Young Entrepreneurs in Science competition (2023) organized by the Technology Transfer Center at the Research Sector of Sofia University'
            ]
        },
        {
            id: 'mentormate',
            company: 'MentorMate',
            role: 'Software Developer Internship',
            period: 'February 2022 - March 2022',
            location: 'Sofia, Bulgaria',
            highlights: [
                'Completed training in Databases with SQL, Linux, Docker, JavaScript, Typescript, Vue.js'
            ]
        },
        {
            id: 'ministerstvo',
            company: 'Cafe Bar Ministerstvo',
            role: 'Social Media and Event Manager',
            period: 'January 2021 - April 2024',
            location: 'Kumanovo, Macedonia',
            highlights: [
                'Coordinated and handled reservations at a capacity of 200+ people',
                'Provided excellent service and hospitality to customers',
                'Designed and executed social media strategy, including image, video and written content for 3000+ followers on Instagram',
                'Worked closely with photographers and videographers on projects to ensure content alignment with brand'
            ]
        }
    ],
    projects: [
        {
            id: 'actingeurope',
            title: 'ActingEurope.eu: Web Platform for International Theatre Festival',
            year: 2025,
            description: 'Fully designed, developed, and deployed a multilingual web platform for the Acting Europe theatre festival, uniting theatres from Bulgaria, North Macedonia, and Serbia.',
            details: [
                'Built the system end-to-end—from UX/UI design and front-end development to back-end logic, database integration, and cloud deployment.',
                'Implemented user registration, login, and email verification, along with an admin dashboard for managing events and participants.',
                'Ensured GDPR compliance, accessibility, and responsive design.',
                'Collaborated with festival organizers to align the platform with branding and operational needs, supporting a successful event in Kyustendil in September 2025.'
            ],
            technologies: [
                'Vue.js',
                'JavaScript',
                'HTML/CSS',
                'Database Design',
                'Cloud Deployment',
                'GDPR Compliance'
            ],
            link: 'https://actingeurope.eu',
            featured: true
        },
        {
            id: 'kidsgo-marketplace',
            title: 'KidsGo: Marketplace for Kids Activities',
            year: 2023,
            description: 'Co-founded KidsGo, an education-tech marketplace connecting families with quality kids activities and experiences.',
            details: [
                'Led market research and customer discovery across multiple European markets.',
                'Designed and iterated on product and business model through accelerator programs.',
                'Pitched to investors and secured partnerships with educational institutions and NGOs.',
                'Built strategic relationships in the educational technology ecosystem.'
            ],
            technologies: [
                'Product Design',
                'Market Research',
                'Startup Strategy',
                'Investor Pitching'
            ],
            featured: true
        },
        {
            id: 'ai-hackathon',
            title: 'AI&I Hackathon - Education & Culture Solution',
            year: 2022,
            description: 'Participated in an AI-focused hackathon, developing a solution in education and culture.',
            details: [
                'Attended sessions on cybersecurity, ethics, design thinking, pitching, and startup funding.',
                'Collaborated with mentors to develop a comprehensive market assessment, technical structure, business plan, and roadmap.'
            ],
            technologies: [
                'Design Thinking',
                'AI/ML',
                'Business Planning',
                'Pitching'
            ],
            featured: false
        },
        {
            id: 'launchub-vc',
            title: 'LAUNCHub VC Crash Course & Research',
            year: 2025,
            description: 'Participated in LAUNCHub Ventures intensive VC program and published research on startup ecosystems.',
            details: [
                'Completed a full investment memo and presented to a simulated investment committee.',
                'Gained hands-on experience in deal analysis, term sheets, and market sizing.',
                'Published research: "Universities as Startup Hubs: Applicability of Global Models to the Balkan Ecosystem."'
            ],
            technologies: [
                'Venture Capital',
                'Investment Analysis',
                'Research',
                'Market Analysis'
            ],
            featured: false
        },
        {
            id: 'erasmus-program',
            title: 'Basis for students\' autonomy in thinking and action - Erasmus+ Programme',
            year: 2019,
            description: 'International mobility project fostering critical thinking and leadership skills.',
            details: [
                'Acquired professional experience in an international context, exchanging ideas with students from Poland, Turkey, Italy, Greece and North Macedonia.',
                'Developed critical thinking, leadership, communication and social skills.'
            ],
            technologies: [
                'Leadership',
                'Communication',
                'International Collaboration'
            ],
            featured: false
        }
    ],
    skills: {
        softwareDevelopment: {
            label: 'Software Development',
            items: [
                'C++',
                'PHP',
                'Python',
                'JavaScript',
                'TypeScript',
                'Vue.js',
                'HTML/CSS',
                'OOP',
                'Data Structures',
                'Algorithms',
                'XML',
                'TCL',
                'SVRF',
                'UNIX/Linux scripting',
                'Software Documentation'
            ]
        },
        dataAnalysis: {
            label: 'Data Analysis',
            items: [
                'R',
                'SQL',
                'Tableau',
                'Matlab',
                'Data Visualization'
            ]
        },
        productManagement: {
            label: 'Product Management & Design',
            items: [
                'Figma',
                'User Research',
                'Design Thinking',
                'Prototyping',
                'UX Testing',
                'Market Research',
                'Scope Assessment'
            ]
        },
        softSkills: {
            label: 'Soft Skills',
            items: [
                'Technical writing',
                'Documentation',
                'Cross-functional collaboration',
                'Mentorship',
                'Leadership',
                'Public speaking',
                'Event organization',
                'Community building'
            ]
        },
        digitalMarketing: {
            label: 'Digital Marketing',
            items: [
                'Creative direction',
                'Brand positioning',
                'Photo/video editing',
                'Copywriting',
                'Marketing strategies',
                'Content strategy'
            ]
        }
    },
    education: [
        {
            id: 'sofia-uni',
            school: 'Sofia University "St. Kliment Ohridski"',
            degree: 'BSc, Software Engineering',
            period: 'October 2020 — Present',
            details: 'Final-year student, expected to graduate in 2025. Currently completing final exams.'
        },
        {
            id: 'brainster',
            school: 'Brainster Academy',
            degree: 'Academy for Project and Product Management',
            period: 'May 2025 — February 2026',
            details: 'Hands-on program focused on practical skills in project and product management, including agile methodologies, stakeholder communication, roadmap planning, and product lifecycle strategies.'
        },
        {
            id: 'railsgirls',
            school: 'RailsGirls',
            degree: 'Ruby on Rails Bootcamp',
            period: '2023'
        }
    ],
    certifications: [
        'C1 Cambridge English Level 2 Certificate in ESOL International (First)',
        'Google Data Analytics Specialization',
        'Containers K8s and Istio on IBM Cloud'
    ],
    languages: [
        {
            language: 'English',
            proficiency: 'C1'
        },
        {
            language: 'Bulgarian',
            proficiency: 'Fluent'
        },
        {
            language: 'Macedonian',
            proficiency: 'Native'
        },
        {
            language: 'Serbian',
            proficiency: 'Conversational'
        }
    ],
    achievements: [
        {
            title: '2nd Place - Young Entrepreneurs in Science Competition',
            organization: 'Technology Transfer Center at Sofia University',
            year: 2023
        },
        {
            title: 'Panel Speaker',
            organization: 'The Athenian Nexus 2024 Summit',
            year: 2024
        },
        {
            title: 'Co-organizer',
            organization: 'GlobalWomen Sofia Conference',
            year: 2024
        },
        {
            title: 'Accelerator Participant',
            organization: 'Start For Future, Beyond, SEEIP, Skills2Scale, Plug&Pay',
            year: '2023-2024'
        },
        {
            title: 'Technical Paper Co-author',
            organization: 'GlobalFoundries',
            year: 2024,
            details: '"Machine learning-assisted pattern optimizations for reducing Design for Manufacturability (DFM) rule check violations."'
        }
    ],
    social: [
        {
            platform: 'LinkedIn',
            url: '#',
            label: 'linkedin.com/in/anastasia-yakimovska'
        },
        {
            platform: 'GitHub',
            url: '#',
            label: 'github.com/yanastasia'
        },
        {
            platform: 'Twitter',
            url: '#',
            label: '@yanastasia'
        }
    ]
};
}),
"[project]/app/portfolio/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$anastasiaPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/anastasiaPortfolio.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function PortfolioPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen pt-20 pb-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 border-b border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 sm:px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl md:text-6xl font-header text-foreground mb-4",
                                children: "other"
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/page.tsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl text-accent mb-4",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$anastasiaPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anastasiaPortfolio"].title
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/page.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-muted-foreground max-w-2xl",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$anastasiaPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anastasiaPortfolio"].tagline
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/page.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/portfolio/page.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/page.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 border-b border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 sm:px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-8",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$anastasiaPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anastasiaPortfolio"].projects.map((project, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: idx * 0.1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg p-6 border border-border bg-card/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-header text-foreground",
                                                    children: project.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/page.tsx",
                                                    lineNumber: 27,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground text-sm",
                                                    children: project.year
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/page.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portfolio/page.tsx",
                                            lineNumber: 26,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground text-sm",
                                            children: project.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.tsx",
                                            lineNumber: 30,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex gap-2 flex-wrap",
                                            children: project.technologies.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-secondary border border-secondary/30",
                                                    children: tech
                                                }, tech, false, {
                                                    fileName: "[project]/app/portfolio/page.tsx",
                                                    lineNumber: 33,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.tsx",
                                            lineNumber: 31,
                                            columnNumber: 19
                                        }, this),
                                        project.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: project.link,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-block mt-4 text-secondary underline",
                                            children: "View"
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.tsx",
                                            lineNumber: 37,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/page.tsx",
                                    lineNumber: 25,
                                    columnNumber: 17
                                }, this)
                            }, project.id, false, {
                                fileName: "[project]/app/portfolio/page.tsx",
                                lineNumber: 24,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/portfolio/page.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/page.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 border-b border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 sm:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-header text-foreground mb-6",
                            children: "Skills"
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-8",
                            children: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$anastasiaPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anastasiaPortfolio"].skills).map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg p-6 border border-border bg-card/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-header text-foreground",
                                            children: group.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex gap-2 flex-wrap",
                                            children: group.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 rounded-full text-xs bg-white/5 text-muted-foreground border border-white/10",
                                                    children: item
                                                }, item, false, {
                                                    fileName: "[project]/app/portfolio/page.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.tsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, group.label, true, {
                                    fileName: "[project]/app/portfolio/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 border-b border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 sm:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-header text-foreground mb-6",
                            children: "Education"
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/page.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$anastasiaPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anastasiaPortfolio"].education.map((edu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg p-6 border border-border bg-card/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-header text-foreground",
                                                            children: edu.degree
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/portfolio/page.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-accent",
                                                            children: edu.school
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/portfolio/page.tsx",
                                                            lineNumber: 73,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/portfolio/page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground text-sm",
                                                    children: edu.period
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/page.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portfolio/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this),
                                        edu.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground text-sm",
                                            children: edu.details
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, edu.id, true, {
                                    fileName: "[project]/app/portfolio/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/page.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/page.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 sm:px-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-header text-foreground mb-6",
                            children: "Let's Build Something Great"
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/page.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground max-w-2xl mx-auto mb-8",
                            children: "Interested in collaborating on innovative products, startups, or tech solutions? Let's connect and explore how we can work together."
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/page.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 justify-center flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/contact",
                                    className: "px-8 py-3 bg-accent text-primary-foreground rounded",
                                    children: "Get in Touch"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$anastasiaPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anastasiaPortfolio"].email}`,
                                    className: "px-8 py-3 border border-secondary text-secondary rounded",
                                    children: "Send Email"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/page.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/page.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/portfolio/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/anastasia/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Anastasia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$anastasiaPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/anastasiaPortfolio.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portfolio$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/portfolio/page.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Anastasia() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 border-b border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 sm:px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 12
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-header text-foreground mb-6",
                                children: "Experience"
                            }, void 0, false, {
                                fileName: "[project]/app/anastasia/page.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$anastasiaPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anastasiaPortfolio"].experience.map((exp, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg p-6 border border-border bg-card/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-header text-foreground",
                                                                children: exp.role
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/anastasia/page.tsx",
                                                                lineNumber: 21,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-accent",
                                                                children: exp.company
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/anastasia/page.tsx",
                                                                lineNumber: 22,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/anastasia/page.tsx",
                                                        lineNumber: 20,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground text-sm",
                                                        children: exp.period
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/anastasia/page.tsx",
                                                        lineNumber: 24,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/anastasia/page.tsx",
                                                lineNumber: 19,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground text-sm mb-4",
                                                children: exp.location
                                            }, void 0, false, {
                                                fileName: "[project]/app/anastasia/page.tsx",
                                                lineNumber: 26,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: exp.highlights.slice(0, 3).map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-muted-foreground text-sm flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-secondary flex-shrink-0",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/anastasia/page.tsx",
                                                                lineNumber: 30,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: h
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/anastasia/page.tsx",
                                                                lineNumber: 31,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, h, true, {
                                                        fileName: "[project]/app/anastasia/page.tsx",
                                                        lineNumber: 29,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/anastasia/page.tsx",
                                                lineNumber: 27,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, exp.id, true, {
                                        fileName: "[project]/app/anastasia/page.tsx",
                                        lineNumber: 18,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/anastasia/page.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/anastasia/page.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/anastasia/page.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/anastasia/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portfolio$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/anastasia/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=_77de03ce._.js.map