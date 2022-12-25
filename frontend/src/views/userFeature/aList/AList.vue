<template>
    <div>
        <div v-loading="loading" :data="list" class="alist_container" >
            <ul id="alist_ul">
                <li
                is="AListItem"
                v-for="item in list"
                v-bind:key="item.id"
                v-bind:item="item">
                </li>
            </ul>
            <div class="next_button_container">
                <el-button v-if="nextButtonVis" @click.native="goToNext" class="blist_next_button">点击跳转下一页</el-button>
            </div>
        </div>

        <el-button v-if="total==0&&!loading" class="alist_no_item">
            没有发布的寻味道内容
        </el-button>
    </div>

</template>


<script>
import { getaList } from "../../../api/user/aList";
import AListItem from "./AListItem";
const aListItemJson = {
    AID: 0,
    AUserID: 0,
    AUserName: "",
    AState: "",
    FlavorType: [],
    RegionType: "",
    ATitle: "",
    AContent: "",
    ImagePath: "",
    APrice: "",
    ACreateTime: "",
    AEndTime: "",
    AChangeTime: ""
};
export default {
    name: "aList",
    props: {
        fatherpath: String,
        fatherRegion: String,
        fatherFlavor: Array
    },
    data() {
        return {
            query: {
                title: "",
                UserID: 0,
                RequestUserID: 0,
                region: "",
                flavor: "",
                page: 1,
                limit: 10
            },
            list: [],
            total: 0,
            loading: true,
            nextButtonVis: true
        };
    },
    methods: {
        getList() {
            console.log("sendrequest");
            this.loading = true;
            getaList(this.query)
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
        goToNext() {
            this.$router.push({
                path: this.fatherpath,
                query: { page: this.query.page + 1 }
            });
        }
    },
    components: {
        AListItem
    },
    mounted() {},
    created() {
        console.log("create");
        // 将参数复制进查询对象
        let query = this.$route.query;
        this.query = Object.assign(this.query, query);
        this.query.RequestUserID = 0;
        this.query.UserID = 0;
        this.query.region = "";
        this.query.flavor = "";
        this.query.limit = parseInt(this.query.limit);
        this.query.page = parseInt(this.query.page);
        // 加载列表数据
        this.getList();
    }
};
</script>

<style type="text/scss" lang="scss">
.alist_container {
    font-size: 14px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #333;
    line-height: 22px;
    box-sizing: content-box;
}
.alist_container .alist_it_container {
    position: relative;
    border-bottom: 1px dotted #e4e6eb;
    padding: 10px 0;
    margin: 0 20px;
}
.alist_container .alist_it {
    padding: 20px 0 11px 0;
}
.alist_container .alist_it_left {
    width: 70px;
    min-height: 1px;
}
.alist_container .alist_reply_num {
    display: inline-block;
    width: 50px;
    height: 30px;
    line-height: 26px;
    margin-right: 20px;
    text-align: center;
    background: url(//tb2.bdstatic.com/tb/img/f_reply_bg_8ec77f0.png) no-repeat;
}
.alist_container .alist_it_right {
    margin-left: 70px;
}
.alist_container .alist_it_title {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.alist_container .alist_it_right_bottom {
    padding-top: 3px;
    position: relative;
}
.alist_container .alist_it_detail {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #666;
}
.alist_container .alist_title_wid {
    width: 420px;
}
.alist_container .alist_it_tag_box {
    padding-top: 10px;
}
.alist_container .alist_it_tag {
    margin-right: 5px;
}
.alist_container .alist_au_wid {
    width: 200px;
    color: #999;
    text-decoration: none;
}
.alist_container .alist_au {
    width: 165px;
    color: #999;
    text-decoration: none;
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
.alist_container .next_button_container {
    margin-top: 20px;
}
</style>
