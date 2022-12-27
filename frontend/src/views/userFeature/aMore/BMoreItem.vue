<template>
<li class="amore_it_container">
    <div class="amore_it clearfix">
        <div class="amore_it_author pull_left">
            <div class="amore_it_author_list">
                <div class="author_icon">
                    <a class="author_icon_face" href="javascript:void(0);" @click="goToUser(item.BUserID)">
                        <img class="author_icon_img" :src="img" alt="">
                    </a>
                </div>
                <div class="author_name">
                    <a href="javascript:void(0);" @click="goToUser(item.BUserID)">
                        {{item.BUserName}}
                    </a>
                </div>
                <div class="author_region">
                    <el-tag class="amore_it_tag" size="small" effect="plain"> {{item.RegionType}}</el-tag>
                </div>
                </div>
        </div>

        <div class="amore_it_post">
            <div class="amore_content">
                {{item.BContent}}
            </div>
            <div class="amore_content_info">
                <span class="amore_floor_choose_button">
                    <el-button type="danger" roundclass="bmore_it_best" size="small" @click="ChooseBest(APrice)">
                        选为最佳回答
                    </el-button>
                </span>
                <span class="amore_floor_delete_button">
                    <a href="javascript:void(0);" class="bmore_it_delete" @click="DeleteSure">
                        删除
                    </a>
                </span>
                <span class="amore_floor_cnt">
                    {{item.BfloorCnt}}楼
                </span>
                <span class="amore_floor_time">
                    {{item.BTime}}
                </span>
            </div>
        </div>
    </div>
</li>
</template>

<script>
export default {
    data() {
        return {
<<<<<<< Updated upstream
            img: require("D:/coding/web-project/picture/BlankUserIcon.png")
=======
            img: require("C:/Javaworkspace/web-flavor-search-project/picture/BlankUserIcon.png")
>>>>>>> Stashed changes
        };
    },
    name: "bMoreItem",
    props: {
        item: {},
        APrice: Number
    },
    methods: {
        goToUser(userID) {
            this.$router.push({
                path: "/userinfo/detail",
                query: {
                    userID: userID
                }
            });
        },
        ChooseBest(price) {
            this.$confirm(
                "此操作选择该层为最佳回答，支付中介费 " +
                    price +
                    " 元,是否确认？",
                "提示",
                {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }
            )
                .then(() => {
                    this.$message({
                        type: "success",
                        message: "选择成功!"
                    });
                    location.reload();
                })
                .catch(() => {
                    this.$message({
                        type: "info",
<<<<<<< Updated upstream
                        message: "已取消xuanze"
=======
                        message: "已取消选择"
>>>>>>> Stashed changes
                    });
                });
        },
        DeleteSure() {
            this.$confirm("此操作将永久删除该回复, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    this.$message({
                        type: "success",
                        message: "删除成功!"
                    });
                    location.reload();
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        }
    },
    created() {
        if (this.item.imagepath != "") this.img = require(this.item.imagepath);
    }
};
</script>
