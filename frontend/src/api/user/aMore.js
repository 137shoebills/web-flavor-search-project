import axios from "../../utils/axios";

// 寻味道详情

// 列表
export function getaMore(query) {
    return axios({
        url: "/user/amore/index",
        method: "get",
        params: query
    });
}
