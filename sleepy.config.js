module.exports = {
    seo: {
        title: "行者无境",
        keywords: "记录, 分享",
        description: "yuncme@foxmail.com",
        copyright: '© 2019 All Rights Reserved. 行者无境.'
    },
    github: {
        clientID: "07a13537d064eb900972",
        clientSecret: "534295853f33c3f5b3fc80f1b3cdeca28945ce23",
        repo: "elaw",
        owner: "fydy",
        admin: ["fydy"]
    },
    baidutongji: '50a85c9e5a3774a7c7cc0b0644c3785c',
    theme: {
        banner: '',
        avatar: '',
        poster: '',
        bodyBg: ''
    },
    post: {
        excerpt: 120,
        pageSize: 8
    },
    menus: [
        {
            name: "首页",
            link: "/"
        },
        {
            name: "关于",
            link: "/about"
        },
        {
            name: "邻居",
            link: "/friends"
        }
    ],
    i18n: {
        default: 'zh-cn',
        language: {
            'zh-cn': {
                loadEnd: '加载完毕',
                loadMore: '加载更多',
                loading: '加载中...',
                notFoundTitle: '未发现页面',
                notFoundMsg: '您查询的页面不存在，请重新检查',
                commentLocked: '评论已锁定'
            },
            'en': {
                loadEnd: 'Load completed',
                loadMore: 'Load more',
                loading: 'Loading...',
                notFoundTitle: 'No Page Found',
                notFoundMsg: 'The page you are querying does not exist, please check again',
                commentLocked: 'Comment locked'
            }
        }
    },
};
