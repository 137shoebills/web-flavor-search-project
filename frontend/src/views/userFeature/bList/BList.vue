<template>
    <div>
        <div v-loading="loading" :data="list" class="blist_container" >
            <ul id="blist_ul">
                <li
                is="BListItem"
                v-for="item in list"
                v-bind:key="item.id"
                v-bind:item="item">
                </li>
            </ul>
            <div class="next_button_container">
<<<<<<< Updated upstream
                <el-button v-if="nextButtonVis" @click.native="goToNext" class="blist_next_button">点击跳转下一页</el-button>
=======
                <el-button v-if="nextButtonVis" @click.native="goToNext" class="blist_next_button">下一页</el-button>
>>>>>>> Stashed changes
            </div>
        </div>

        <el-button v-if="total==0&&!loading" class="blist_no_item">
            没有发布的请品鉴内容
        </el-button>
    </div>

</template>


<script>
import { getbList } from "../../../api/user/bList";
import BListItem from "./BListItem";
const bListItemJson = {
    AID: 0,
    ATitle: "",
    AUserID: 0,
    AUserName: "",
    BUserID: 0,
    BUserName: "",
    BRegionType: "",
    BContent: "",
    BCreateTime: ""
};
export default {
    data() {
        return {
            query: {
                title: "",
                UserID: 0,
                RequestUserID: 0,
                type: 0,
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
            getbList(this.query)
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
                path: "/mypost/myb",
                query: { page: this.query.page + 1 }
            });
        }
    },
    components: {
        BListItem
    },
    mounted() {},
    created() {
        console.log("create");
        // 将参数复制进查询对象
        let query = this.$route.query;
        this.query = Object.assign(this.query, query);
        this.query.RequestUserID = 0;
        this.query.UserID = 0;
        this.query.type = 0;
        this.query.limit = parseInt(this.query.limit);
        this.query.page = parseInt(this.query.page);
        // 加载列表数据
        this.getList();
    }
};
</script>

<style type="text/scss" lang="scss">
.blist_container {
    font-size: 14px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #333;
    line-height: 22px;
    box-sizing: content-box;
}
.blist_container .blist_it_container {
    padding: 10px 0;
    margin: 0 20px;
}
.blist_container .blist_it_container {
    border-bottom: 1px dotted #e0e0e0;
}
.blist_container .blist_it_left {
    float: left;
    width: 600px;
    padding: 20px 0 21px 10px;
}
.blist_container .blist_rep_box {
    font-size: 14px;
    line-height: 20px;
    padding-bottom: 10px;
}
.blist_container .blist_rep_content {
    overflow: hidden;
    word-wrap: break-word;
}
.blist_container .blist_it_left_bottom {
    color: #989898;
}

.blist_container .blist_it_title {
    color: #000;
    padding: 0 3px;
}
.blist_container .blist_it_right {
    text-align: right;
    color: #989898;
    padding: 20px 10px 21px 0;
    overflow: hidden;
    word-wrap: break-word;
}
.blist_container .blist_it_right_top {
    line-height: 20px;
    padding-bottom: 10px;
}
.blist_container .blist_it_delete {
    padding-right: 10px;
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
.blist_container .next_button_container {
    margin-top: 20px;
}
</style>
