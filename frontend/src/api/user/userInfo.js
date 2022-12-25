import axios from "../../utils/axios";

// 用户信息详情

// 列表
export function getuserInfo(query) {
    return axios({
        url: "/user/userinfo/index",
        method: "get",
        params: query
    });
}
