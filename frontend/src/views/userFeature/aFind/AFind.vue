<template>
    <div>
        <div class="a_find_box">
            <div class="a_find_title">
                按条件查找寻味道
            </div>

            <div class="fla_cas_box">
                <li is="FlavorCas"> </li>
            </div>

            <div class="region_cas_box">
                <li is="RegionCas"> </li>
            </div>

            <div class="find_button_container">
                <el-button type="primary" round @click="submitReply" class="alist_next_button">查找</el-button>
            </div>
        </div>
        <div class="afind_list_box" v-if="showlist">
            <li is="aList">
            </li>
        </div>
    </div>
</template>

<script>
import picUpload from "../shared/picUpload";
import FlavorCas from "../shared/myFlavorCascader";
import RegionCas from "../shared/myRegionCascader";
import aList from "../aList/AList";
export default {
    name: "aFind",
    data() {
        return {
            query: {
                Atitle: "",
                AContent: "",
                picUrl: "",
                tag: [],
                AUserID: 0,
                AUserName: ""
            },
            showlist: false
        };
    },
    components: {
        picUpload,
        FlavorCas,
        RegionCas,
        aList
    },
    methods: {
        getPicUrl(data) {
            this.picUrl = data;
            console.log("fathergeturl" + this.query.picUrl);
        },
        submitReply() {
            this.showlist = true;
        }
    },
    mounted() {},
    created() {
        console.log("create");
        // 将参数复制进查询对象
        let query = this.$route.query;
        this.query = Object.assign(this.query, query);
        console.log(this.$route.query.page);
        if (this.$route.query.page && this.$route.query.page != 1)
            this.showlist = true;
        // 加载列表数据
    }
};
</script>

<style type="text/scss" lang="scss">
.a_find_box {
    margin: 0 5px 5px 5px;
    padding: 15px 15px 15px 15px;
    background: #f9f9f9f8;
    border-radius: 4px;
}
.a_find_title {
    font-size: 20px;
    font-weight: 700;
    line-height: 40px;
    color: #333;
}
.fla_cas_box {
    margin-top: 10px;
}
.region_cas_box {
    margin-top: 10px;
}
.find_button_container {
    margin-top: 10px;
}
.afind_list_box {
    margin-top: 20px;
}
</style>
