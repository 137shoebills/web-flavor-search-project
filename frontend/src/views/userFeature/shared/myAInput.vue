<template>
    <div class="a_input_box">
        <div class="a_post_title">
            发表寻味道
        </div>

        <div class="a_post_box">

            <el-input class="a_post_tt_input" :autosize="{ minRows: 1, maxRows:1}" type="text" placeholder="请输入标题" v-model="query.Atitle" maxlength="64" show-word-limit></el-input>

            <el-input class="a_post_ct_input" :autosize="{ minRows: 6}" type="textarea" placeholder="请输入内容" v-model="query.AContent" maxlength="1024" show-word-limit></el-input>

            <div class="up_pic_box">
                <li is="picUpload" @func="getPicUrl"> </li>
            </div>

            <div class="fla_cas_box">
                <li is="FlavorCas"> </li>
            </div>
            <div class="post_button_container">
                <el-button type="primary" round @click="submitReply" class="alist_next_button">发表</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import picUpload from "./picUpload";
import FlavorCas from "./myFlavorCascader";
export default {
    name: "aInput",
    data() {
        return {
            query: {
                Atitle: "",
                AContent: "",
                picUrl: "",
                tag: [],
                AUserID: 0,
                AUserName: ""
            }
        };
    },
    components: {
        picUpload,
        FlavorCas
    },
    methods: {
        getPicUrl(data) {
            this.picUrl = data;
            console.log("fathergeturl" + this.query.picUrl);
        },
        submitReply() {}
    },
    mounted() {},
    created() {
        console.log("create");
        // 将参数复制进查询对象
        let query = this.$route.query;
        this.query = Object.assign(this.query, query);
        // 加载列表数据
    }
};
</script>

<style type="text/scss" lang="scss">
.a_input_box {
    margin-top: 20px;
}
.a_post_box {
    margin: 5px 5px 5px 5px;
    padding: 15px 15px 15px 15px;
    background: #f9f9f9f8;
    border-radius: 4px;
}
.a_post_title {
    padding: 20px 0 0 20px;
    font-size: 20px;
    font-weight: 700;
    line-height: 40px;
    color: #333;
}
.a_post_tt_input {
    margin-top: 10px;
}
.a_post_ct_input {
    margin-top: 10px;
}
.up_pic_box {
    margin-top: 10px;
}
.fla_cas_box {
    margin-top: 10px;
}
.post_button_container {
    margin-top: 10px;
}
</style>
