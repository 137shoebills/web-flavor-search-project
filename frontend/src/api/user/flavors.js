import axios from "../../utils/axios";

// 味型列表

// 列表
export function getflavor(query) {
    return axios({
        url: "/user/flavors/index",
        method: "get",
        params: query
    });
}
