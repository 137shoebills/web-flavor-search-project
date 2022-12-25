<template>
<li class="amore_it_container">
    <div class="amore_it clearfix">
        <div class="amore_it_author pull_left">
            <div class="amore_it_author_list">
                <div class="louzhubiaoshi">
                </div>
                <div class="author_icon">
                    <a class="author_icon_face" href="javascript:void(0);" @click="goToUser(item.AUserID)">
                            <img class="author_icon_img" :src="img" alt="">
                    </a>
                </div>
                <div class="author_name">
                    <a href="javascript:void(0);" @click="goToUser(item.AUserID)">
                        {{item.AUserName}}
                    </a>
                </div>
                <div class="author_region">
                    <el-tag class="amore_it_tag" size="small" effect="plain"> {{item.RegionType}}</el-tag>
                </div>
            </div>
        </div>

        <div class="amore_it_post">
            <div class="amore_content">
                {{item.AContent}}
            </div>
            <div class="amore_content_info">
                <a href="javascript:void(0);" class="bmore_it_delete" @click="DeleteSure">
                    删除
                </a>
                <span class="amore_floor_cnt">
                    1楼
                </span>
                <span class="amore_floor_time">
                    {{item.ACreateTime}}
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
            img: require("D:/coding/web-project/picture/BlankUserIcon.png")
        };
    },
    name: "aMoreItem",
    props: {
        item: {}
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
