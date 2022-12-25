import axios from "../../utils/axios";

// 请品鉴列表

// 列表
export function getbList(query) {
    return axios({
        url: "/user/blist/index",
        method: "get",
        params: query
    });
}
