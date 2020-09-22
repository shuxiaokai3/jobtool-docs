module.exports = {
    title: "快乐摸鱼",
    description: "管理工具学习和开发文档",
    head: [
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        ],
    ],
    configureWebpack: {
        resolve: {
            alias: {
                "@": "src/.vuepress/config.js"
            }
        }
    },
    themeConfig: {
        repo: "",
        editLinks: false,
        docsDir: "",
        editLinkText: "",
        lastUpdated: false,
        nav: [
            {
                text: "文档介绍",
                link: "/introduction/introduction"
            },
            {
                text: "接口文档",
                items: [
                    {
                        text: "使用指南",
                        link: "/apidoc/use/use",
                        items: [
                            {
                                text: "创建项目",
                                link: "/apidoc/use/children/a"
                            },
                            {
                                text: "书写文档",
                                link: "/apidoc/use/children/b"
                            },
                        ]
                    },
                    {
                        text: "开发指南",
                        link: "/apidoc/dev/dev",
                        items: [
                            {
                                text: "前端指南",
                                link: "/apidoc/dev/client/a",
                            },
                            {
                                text: "后端指南",
                                link: "/apidoc/dev/server/a",
                            }
                        ]
                    },
                ]

            },
            {
                text: "权限控制",
                link: "/permission/",
            },
            {
                text: "GitHub",
                link: "https://github.com/shuxiaokai3/jobtool-electron",
            },
        ],
        sidebarDepth: 3,
        sidebar: {
            "/introduction/introduction": [
                {
                    title: "文档介绍",
                    path: "/introduction/introduction",
                }
            ],
            "/apidoc/use/": [
                {
                    title: "创建项目",
                    path: "/apidoc/use/children/a",
                },
                {
                    title: "书写文档",
                    path: "/apidoc/use/children/b"
                },
            ],
            "/apidoc/dev/": [
                {
                    title: "开发指南",
                    path: "/apidoc/dev/dev",
                }
            ]

        },
    },
    plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
