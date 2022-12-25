import axios from "../../utils/axios";

// 用户数据

// 列表
export function getMatric(query) {
    return axios({
        url: "/admin/matric",
        method: "get",
        params: query
    });
}
