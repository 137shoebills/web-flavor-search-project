<template>
    <div class="user_info_container ">
        <div class="user_info_title">
            个人信息
        </div>
        <div class="user_Info_box">

            <div class="user_info_icon_box">
                <div class="user_icon">
                    <a class="user_icon_face">
                            <img class="user_icon_img" :src="UserIconPath" alt="">
                    </a>
                </div>
            </div>
            <div class="user_info_name_box">
                <span class="user_info_text"> 用户名：</span> {{list[0].UserName}}
            </div>
            <div class="user_info_region_box">
                <span class="user_info_text"> 地区：</span> <el-tag class="user_info_region_tag" size="small" effect="plain"> {{list[0].RegionType}}</el-tag>
            </div>
            <div class="user_info_time_box">
                <span class="user_info_text"> 注册时间：</span> {{list[0].SignUpTime}}
            </div>
            <div class="user_info_content_box">
                <span class="user_info_text"> 自我介绍：</span> {{list[0].UserContent}}
            </div>
        </div>
    </div>
</template>

<script>
import { getuserInfo } from "../../../api/user/userInfo";
export default {
    name: "userInfo",
    data() {
        return {
            query: {
                UserID: 0,
                RequestUserID: 0
            },
            UserIconPath: require("D:/coding/web-project/picture/BlankUserIcon.png"),
            list: [],
            total: 0,
            loading: true
        };
    },
    methods: {
        getList() {
            console.log("sendrequest");
            this.loading = true;
            getuserInfo(this.query)
                .then(response => {
                    console.log("getresponse");
                    this.loading = false;
                    this.list = response.data.list || [];
                    this.total = response.data.total || 0;
                })
                .catch(() => {
                    console.log("wrong");
                    this.loading = false;
                    this.list = [];
                    this.total = 0;
                });
        },
        submitIconChanging() {
            location.reload();
        },
        submitChanging() {
            location.reload();
        },
        getPicUrl(data) {
            this.query3.picUrl = data;
            console.log("fathergeturl" + this.query3.picUrl);
            this.submitIconChanging();
        }
    },
    mounted() {},
    created() {
        console.log("create");
        // 将参数复制进查询对象
        let query = this.$route.query;

        this.query = Object.assign(this.query, query);
        this.query.UserID = parseInt(this.query.UserID);
        this.query.RequestUserID = parseInt(this.query.RequestUserID);
        // 加载列表数据
        this.getList();

        if (this.list[0] && this.list[0].UserIconPath != "")
            this.img = require(this.list[0].UserIconPath);
    }
};
</script>

<style type="text/scss" lang="scss">
.user_info_container {
    font-size: 14px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #333;
    line-height: 22px;
    box-sizing: content-box;
}
.user_info_title {
    padding: 20px 0 0 20px;
    font-size: 20px;
    font-weight: 700;
    line-height: 40px;
    color: #333;
}
.user_Info_box {
    margin: 5px 5px 5px 5px;
    padding: 15px 15px 15px 15px;
    background: #f9f9f9f8;
    border-radius: 4px;
}
.user_info_text {
    font-size: 14px;
    font-weight: 700;
    line-height: 40px;
    color: #333;
    padding-top: 10px;
}

.user_info_container .user_icon_face {
    background: none repeat scroll 0 0 #fff;
    border: 1px solid #ccc;
    display: block;
    height: 120px;
    padding: 10px;
    width: 120px;
    margin-bottom: 10px;
}

.user_info_container .user_icon_img {
    width: 100px;
    height: 100px;
    box-sizing: content-box;
}
</style>
