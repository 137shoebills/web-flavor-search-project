<template>
    <div>
        <div class="user_setting_box">
            <li is="userInfo"> </li>

            <div class="user_icon_title main_title_a">
                修改头像
            </div>

             <div class="set_user_icon_box">
                <div class="up_pic_box">
                    <li is="picUpload" @func="getPicUrl"> </li>
                </div>
            </div>

            <div class="user_info_title main_title_a">
                修改个人信息
            </div>

            <div class="set_user_text_box">
                <div class="a_sub_title set_user_name_box">
                    修改昵称:
                </div>
                <el-input class="a_post_tt_input" :autosize="{ minRows: 1, maxRows:1}" type="text" placeholder="请输入修改后的昵称" v-model="query2.UserName" maxlength="10" show-word-limit></el-input>


                <div class="a_sub_title set_user_content_box">
                    修改简介:
                </div>
                <el-input class="a_post_ct_input" :autosize="{ minRows: 6}" type="textarea" placeholder="请输入简介" v-model="query2.UserContent" maxlength="512" show-word-limit></el-input>

                <div class="region_cas_box">
                    <li is="RegionCas"> </li>
                </div>
                <div class="post_button_container">
                    <el-button type="primary" round @click="submitChanging" class="alist_next_button">确认修改</el-button>
                </div>
            </div>
    </div>
</div>
</template>

<script>
import picUpload from "../shared/picUpload";
import RegionCas from "../shared/myRegionCascader";
import userInfo from "./UserInfo";
export default {
    name: "userSetting",
    data() {
        return {
            query: {
                UserID: 0,
                RequestUserID: 0
            },
            query2: {
                UserID: 0,
                RequestUserID: 0,
                UserName: "",
                UserContent: "",
                RegionType: ""
            },
            query3: {
                UserIconPath: ""
            },
            list: [],
            total: 0,
            loading: true
        };
    },
    components: {
        picUpload,
        RegionCas,
        userInfo
    },
    methods: {
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

        this.query2 = Object.assign(this.query2, query);
        this.query2.UserID = parseInt(this.query2.UserID);
        this.query2.RequestUserID = parseInt(this.query2.RequestUserID);
    }
};
</script>

<style type="text/scss" lang="scss">
.set_user_icon_box {
    margin: 5px 5px 5px 5px;
    padding: 15px 15px 15px 15px;
    background: #f9f9f9f8;
    border-radius: 4px;
}
.set_user_text_box {
    margin: 5px 5px 5px 5px;
    padding: 15px 15px 15px 15px;
    background: #f9f9f9f8;
    border-radius: 4px;
}
.user_setting_title {
    padding: 30px 0 0 20px;
    font-size: 18px;
    font-size: 18px;
    font-weight: 700;
    line-height: 40px;
    color: #333;
}
.main_title_a {
    padding: 30px 0 0 20px;
    font-size: 18px;
    font-size: 18px;
    font-weight: 700;
    line-height: 40px;
    color: #333;
}
.a_sub_title {
    font-size: 14px;
    font-weight: 700;
    line-height: 40px;
    color: #333;
}
.set_user_id_box {
    margin-top: 10px;
}
.set_user_content_box {
    margin-top: 10px;
}
.up_pic_box {
    margin-top: 10px;
}
.region_cas_box {
    margin-top: 10px;
}
.post_button_container {
    margin-top: 10px;
}
</style>
