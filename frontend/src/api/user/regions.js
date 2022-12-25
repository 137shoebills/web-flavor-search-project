import axios from "../../utils/axios";

// 地区列表

// 列表
export function getregion(query) {
    return axios({
        url: "/user/regions/index",
        method: "get",
        params: query
    });
}
