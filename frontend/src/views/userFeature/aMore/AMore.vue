<template>
    <div>
        <div v-loading="loading" :data="list" class="amore_container" >
            <div class="amore_title_box">
                <div class="amore_title">
                    {{list[0].ATitle}}
                <el-tag class="alist_it_tag amore_state_type_tag" size="small" effect="plain" type="danger"> {{list[0].AState}}</el-tag>
                <li is="el-tag"
                v-for="flavoritem in list[0].FlavorType"
                :key="flavoritem.id"
                type="success"
                size="small"
                class="alist_it_tag">
                    {{ flavoritem.tag }}
                </li>
                </div>
            </div>
            <ul id="amore_ul">
                <li v-if="list[0].WithA"
                is="AMoreItem"
                v-bind:item="AItem">
                </li>
                <li is="BMoreItem"
                v-for="item in BList"
                v-bind:key="item.id"
                v-bind:item="item"
                v-bind:APrice="list[0].APrice">
                </li>
            </ul>

            <div class="next_button_container">
                <el-button v-if="nextButtonVis" @click="goToNext" class="alist_next_button">点击跳转下一页</el-button>
            </div>

            <div class="amore_tinymce_box">
                <div class="amore_tinymce_title">
                    发表回复
                </div>

                <el-input class="a_post_ct_input" :autosize="{ minRows: 6}" type="textarea" placeholder="请输入内容" v-model="query2.BContent" maxlength="1024" show-word-limit></el-input>

                <div class="up_pic_box">
                    <li is="picUpload" @func="getPicUrl"> </li>
                </div>

                <div class="reply_button_container">
                    <el-button type="primary" round @click="submitReply" class="alist_next_button">发表</el-button>
                </div>
            </div>

        </div>

        <div v-if="!total" class="no_data_amore">
            这里空空如也
            <el-button  @click="goToHome" class="amore_no_data_button">点击回到首页</el-button>
        </div>

    </div>

</template>


<script>
import { getaMore } from "../../../api/user/aMore";
import AMoreItem from "./AMoreItem";
import BMoreItem from "./BMoreItem";
import picUpload from "../shared/picUpload";

const bItemJson = {
    AID: 0,
    AUserID: 0,
    BUserID: 0,
    BUserName: "",
    BRegionType: "",
    BContent: "",
    BImagePath: "",
    BCreateTime: ""
};
export default {
    data() {
        return {
            query: {
                AID: 0,
                page: 1,
                limit: 10
            },
            query2: {
                AID: 0,
                BContent: "",
                BImgPath: ""
            },
            list: [],
            AItem: {},
            BList: [],
            total: 0,
            loading: true,
            nextButtonVis: true
        };
    },
    methods: {
        getList() {
            console.log("sendrequest");
            this.loading = true;
            getaMore(this.query)
                .then(response => {
                    console.log("getresponse");
                    this.loading = false;
                    this.list = response.data.list || [];
                    this.total = response.data.total || 0;
                    this.AItem = this.list[0].AItem || {};
                    this.BList = this.list[0].BList || [];
                })
                .catch(() => {
                    console.log("wrong");
                    this.loading = false;
                    this.list = [];
                    this.total = 0;
                    this.AItem = {};
                    this.BList = [];
                });
        },
        submitReply() {
            this.$router.push({
                path: "/looka/detail",
                query: {
                    page: this.query.page,
                    AID: this.query.AID
                }
            });
        },
        goToNext() {
            this.$router.push({
                path: "/looka/detail",
                query: {
                    page: this.query.page + 1,
                    AID: this.query.AID
                }
            });
        },
        goToHome() {
            this.$router.push({
                path: "/home"
            });
        },
        getPicUrl(data) {
            this.picUrl = data;
            console.log("fathergeturl" + this.query.picUrl);
        }
    },
    components: {
        AMoreItem,
        BMoreItem,
        picUpload
    },
    mounted() {},
    created() {
        console.log("create");
        // 将参数复制进查询对象
        let query = this.$route.query;
        this.query = Object.assign(this.query, query);
        this.query.page = parseInt(this.query.page);
        this.query.AID = parseInt(this.query.AID);
        this.query.limit = parseInt(this.query.limit);
        // 加载列表数据
        this.getList();
    }
};
</script>

<style type="text/scss" lang="scss">
#amore_ul {
    margin-bottom: 20px;
}
.amore_it_container {
    font-size: 14px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #333;
    line-height: 22px;
    box-sizing: content-box;
}
.amore_container .amore_title_box {
    width: 1000px;
    height: 56px;
    line-height: 56px;
    background: #fff;
    border-bottom: 1px solid #bbbdbf;
    position: relative;
}
.amore_container .amore_title {
    font-weight: 400;
    font-size: 16px;
    line-height: 56px;
    color: #333;
}
.amore_container .amore_it_container {
    border: 0;
    border-left: 1px solid #e5e5e5;
    border-bottom: 1px solid #e1e4e6;
    background: url(//tb2.bdstatic.com/tb/static-pb/widget/post_list/img/bg_ba2195f.jpg)
        repeat-y;
    width: 1000px;
}
.amore_container .amore_it_author {
    width: 130px;
    text-align: center;
    padding: 15px 0;
}
.amore_container .amore_it_author_list {
    position: relative;
    text-align: center;
}
.amore_container .author_icon {
    position: relative;
    display: inline-block;
    *display: inline;
    zoom: 1;
    top: 0;
    left: 0;
    padding: 4px;
    margin-top: 2px;
}
.amore_container .author_icon_face {
    background: none repeat scroll 0 0 #fff;
    border: 1px solid #ccc;
    display: block;
    height: 88px;
    padding: 3px;
    width: 88px;
    cursor: pointer;
}
.amore_container .author_icon img {
    float: left;
    width: 80px;
    height: 80px;
    box-sizing: content-box;
}
.amore_container .author_name {
    padding-bottom: 10px;
}
.amore_container .author_region {
    padding-bottom: 20px;
}
.amore_container .amore_it_post {
    position: relative;
    float: left;
    width: 870px;
    padding: 20px 20px 8px 20px;
    background: #fff;
}
.amore_container .amore_content {
    line-height: 24px;
    font-size: 14px;
    word-wrap: break-word;
    overflow: hidden;
    height: auto !important;
    min-height: 170px;
}
.amore_container .amore_content_info {
    float: right;
    line-height: 28px;
}
.amore_container .amore_tinymce_box {
    padding: 0 20px 20px 20px;
    width: 1000px;
    margin: 20px 0 0 0;
    background: url(//tb2.bdstatic.com/tb/static-frs/img/frs_bright/images_bmg/f_editor_b77597eb.jpg?t=1663125732100)
        repeat;
}
.amore_container .amore_tinymce_title {
    font-size: 14px;
    font-weight: 700;
    line-height: 56px;
    color: #333;
}
.amore_container .reply_button_container {
    margin: 10px 0 0 0;
}
.amore_container .next_button_container {
    margin-top: 20px;
}
.amore_container .alist_it_tag {
    margin-right: 10px;
}
.amore_container .amore_state_type_tag {
    margin-left: 40px;
}
.amore_container .up_pic_box {
    margin-top: 10px;
}
.amore_floor_delete_button {
    margin-right: 5px;
}
.amore_floor_choose_button {
    margin-right: 10px;
}
.bmore_it_best {
    color: red;
}
.louzhubiaoshi {
    position: absolute;
    width: 36px;
    height: 36px;
    top: -15px;
    right: 0;
    background: url(http://tb2.bdstatic.com/tb/static-user/widget/pb_author/images/louzhu_f37d453.png)
        no-repeat -44px 0;
    border: 0 solid red;
}
.pull_left {
    float: left;
}
.pull_right {
    float: right;
}
.clearfix {
    zoom: 1;
}
.clearfix:after {
    content: " ";
    display: table;
    clear: both;
}
</style>
