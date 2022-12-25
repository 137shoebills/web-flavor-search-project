<template>
<li class="alist_it_container">
    <div class="alist_it">
        <div class="alist_it_left">
            <span class="alist_reply_num pull_left" title="回复数">
            {{item.ReplyCount}}
            </span>
        </div>
        <div class="alist_it_right">
            <div class="alist_it_right_top clearfix">
                <div class="alist_title_wid alist_it_title pull_left">
                    <a href="javascript:void(0);" @click="goToA">
                        {{item.ATitle}}
                    </a>
                </div>
                <div class="alist_au_wid alist_it_au_box pull_right">
                    <span class="alist_it_au alist_it_author">
                        <a href="javascript:void(0);" @click="goToUser(item.AUserID)">
                            {{item.AUserName}}
                        </a>
                    </span>
                    <span class="alist_it_tm pull_right">
                    </span>
                </div>
            </div>
            <div class="alist_it_right_bottom clearfix">
                <div class="alist_title_wid alist_it_detail pull_left">
                    {{item.AContent}}
                </div>
                <div class="alist_au_wid alist_it_rp_box pull_right">
                    <span class="alist_it_au alist_it_author_reply">
                        <a href="javascript:void(0);" @click="goToUser(item.LastBUserID)">
                            {{item.LastBUser}}
                        </a>
                    </span>
                    <span class="alist_it_tm_reply pull_right">
                        {{item.LastReplyTime}}
                    </span>

                </div>
            </div>
            <div class="alist_it_tag_box">
                <el-tag class="alist_it_tag" size="small" effect="plain"> {{item.RegionType}}</el-tag>
                <el-tag class="alist_it_tag" size="small" effect="plain" type="danger"> {{item.AState}}</el-tag>
                <li is="el-tag"
                v-for="flavoritem in item.FlavorType"
                :key="flavoritem.id"
                type="success"
                size="small"
                class="alist_it_tag">
                    {{ flavoritem.tag }}
                </li>
            </div>
        </div>
    </div>
</li>
</template>

<script>
export default {
    name: "AListItem",
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
        }
    }
};
</script>
