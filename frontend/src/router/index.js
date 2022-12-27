import Vue from "vue";
import VueRouter from "vue-router";

if (process.env.NODE_ENV === "development") {
    Vue.use(VueRouter);
}

import { ROUTER_MODE } from "../config/app";

import Home from "../views/home/index.vue";

// 管理组相关
import adminRouter from "../views/userManage/admin/router.vue";
import authAdmin from "../views/userManage/admin/authAdmin.vue";
import authRole from "../views/userManage/admin/authRole.vue";
import authPermissionRule from "../views/userManage/admin/authPermissionRule.vue";

//UserFeature
import userSetting from "../views/userFeature/userSetting/UserSetting.vue";
import aList from "../views/userFeature/aList/AList.vue";
import bList from "../views/userFeature/bList/BList.vue";
import aFind from "../views/userFeature/aFind/AFind.vue";
import aMore from "../views/userFeature/aMore/AMore.vue";
import userInfo from "../views/userFeature/userSetting/UserInfo.vue";
import checkMetric from "../views/adminFeature/CheckMetric.vue";
// Vue.use(VueRouter);

const err401 = r =>
    require.ensure([], () => r(require("../views/error/err401.vue")), "home");
const err404 = r =>
    require.ensure([], () => r(require("../views/error/err404.vue")), "home");
const login = r =>
    require.ensure([], () => r(require("../views/login/index.vue")), "home");
const main = r =>
    require.ensure([], () => r(require("../views/home/main.vue")), "home");

// 注意 权限字段 authRule （严格区分大小写）
export const constantRouterMap = [
    {
        path: "*",
        component: err404,
        hidden: true
    },
    {
        path: "/401",
        component: err401,
        name: "401",
        hidden: true
    },
    {
        path: "/404",
        component: err404,
        name: "404",
        hidden: true
    },
    {
        path: "/500",
        component: err404,
        name: "500",
        hidden: true
    },
    {
        path: "/login",
        component: login,
        name: "登录",
        hidden: true
    },
    {
        path: "/",
        component: Home,
        redirect: "/home",
        name: "首页",
        hidden: true
    },
    {
        path: "/home",
        component: Home,
        redirect: "/home/main",
        icon: "all",
        name: "首页",
        noDropdown: true,
        children: [
            {
                path: "main",
                component: main
            }
        ]
    },
    {
        path: "/settings",
        component: Home,
        redirect: "/settings/user",
        icon: "set",
        name: "设置",
        noDropdown: true,
        children: [
            {
                path: "user",
                component: userSetting
            }
        ]
    },
    {
        path: "/mypost",
        component: Home,
        redirect: "/mypost/mya",
        icon: "form",
        name: "我的帖子",
        children: [
            {
                path: "mya",
                name: "我的寻味道",
                component: aList,
                props: {
                    fatherpath: "/mypost/mya",
                    fatherRegion: "",
                    fatherFlavor: []
                }
            },
            {
                path: "myb",
                name: "我的请品鉴",
                component: bList
            }
        ]
    },
    {
        path: "/looka",
        redirect: "/looka/detail",
        component: Home,
        hidden: true,
        children: [
            {
                path: "detail",
                name: "寻味道详情",
                component: aMore
            }
        ]
        //hidden: true,
    },
    {
        path: "/userinfo",
        redirect: "/userinfo/detail",
        component: Home,
        hidden: true,
        children: [
            {
                path: "detail",
                name: "用户信息",
                component: userInfo
            }
        ]
    },
    {
        path: "/search",
        component: Home,
        redirect: "/search/fina",
        icon: "search",
        name: "查找",
        noDropdown: true,
        children: [
            {
                path: "finda",
                name: "查找寻味道",
                component: aFind
            }
        ]
    }
];

export default new VueRouter({
    // mode: 'history', //后端支持可开
    mode: ROUTER_MODE,
    routes: constantRouterMap,
    strict: process.env.NODE_ENV !== "production"
});

export const asyncRouterMap = [
    {
        path: "/userManage",
        redirect: "/userManage/adminManage/index",
        component: Home,
        icon: "account",
        name: "用户管理",
        meta: {
            authRule: ["user_manage"]
        },
        hidden: true,
        // noDropdown: true,
        children: [
            {
                path: "/userManage/adminManage",
                component: adminRouter,
                redirect: "/userManage/authAdmin/index",
                name: "管理组",
                icon: "",
                meta: {
                    authRule: ["user_manage/admin_manage"]
                },
                children: [
                    {
                        path: "authAdmin",
                        component: authAdmin,
                        name: "管理员管理",
                        icon: "",
                        meta: {
                            authRule: ["admin/auth/admin/index"]
                        }
                    },
                    {
                        path: "authRole",
                        component: authRole,
                        name: "角色管理",
                        icon: "",
                        meta: {
                            authRule: ["admin/auth/role/index"]
                        }
                    },
                    {
                        path: "authPermissionRule",
                        component: authPermissionRule,
                        name: "权限管理",
                        icon: "",
                        meta: {
                            authRule: ["admin/auth/permission_rule/index"]
                        }
                    }
                ]
            }
        ]
    },
    {
        path: "/userdata",
        redirect: "/userdata/metric / histogram",
        component: Home,
        icon: "earth",
        name: "用户数据",
        meta: {
            authRule: ["user_data"]
        },
        //noDropdown: true,
        children: [
            {
                path: "histogram",
                component: checkMetric,
<<<<<<< Updated upstream
                name: "折线图",
                icon: "",
                meta: {
                    authRule: ["user_data/auth/admin/index"]
=======
                name: "图表",
                icon: "",
                meta: {
                    authRule: ["user_data/auth/histogram/index"]
>>>>>>> Stashed changes
                }
            }
        ]
    }
];
