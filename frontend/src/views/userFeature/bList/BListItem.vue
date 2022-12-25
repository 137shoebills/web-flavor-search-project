<template>
<li class="blist_it_container clearfix">
        <div class="blist_it_left clearfix">
            <div class="blist_it_left_top clearfix">
                <div class="blist_rep_box">
                    <div class="blist_rep_user pull_left">
                        <a href="javascript:void(0);" @click="goToUser(item.BUserID)">
                            {{item.BUserName}}
                        </a> ：
                    </div>
                    <div class="blist_rep_content">
                        {{item.BContent}}
                    </div>
                </div>
            </div>
            <div class="blist_it_left_bottom clearfix">
                <div class="blist_title_box">
                    回复的主题：“
                    <a href="javascript:void(0);" @click="goToA">
                        {{item.ATitle}}
                    </a>
                    ”
                </div>
            </div>
        </div>
        <div class="blist_it_right">
            <div class="blist_it_right_top">
                <div class="blist_time_box pull_right">
                    {{item.BCreateTime}}
                </div>
                <div class="blist_delete_btn pull_right">
                    <a href="javascript:void(0);" class="blist_it_delete" @click="DeleteSure">
                        删除
                    </a>
                </div>
            </div>
        </div>
</li>
</template>

<script>
export default {
    name: "BListItem",
    props: {
        item: {}
    },
    methods: {
        goToA() {
            this.$router.push({
                path: "/looka/detail",
                query: {
                    AID: this.item.AID,
                    page: 1
                }
            });
        },
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
    }
};
</script>
