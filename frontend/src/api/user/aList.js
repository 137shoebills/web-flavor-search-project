import axios from "../../utils/axios";

// 寻味道列表

// 列表
export function getaList(query) {
    return axios({
        url: "/user/alist/index",
        method: "get",
        params: query
    });
}
