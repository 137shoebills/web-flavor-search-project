<template>
    <div>
        <div v-loading="loading" :data="list" class="flavor_cas_container" >
            <div class="flavor_cas_item clearfix">
                <div class="flavor_cas_title">风味选择</div>
                <div id="flavor_cas_ul clearfix">
                    <div class="flavor_cas_li"
                    v-for="item in list"
                    v-bind:key="item.id"
                    v-bind:item="item">
                        <div class="flavor_cas_subtitle">{{item.MainFlaverClass}}</div>
                        <el-cascader
                        :ref="`flavorcas${item.id}`"
                        v-model="item.value"
                        :options="item.FlavorList"
                        :props="{ expandTrigger: 'hover' }"
                        @change="handleChange">
                        </el-cascader>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
import { getflavor } from "../../../api/user/flavors";
export default {
    name: "FlavorCas",
    data() {
        return {
            query: {
                RequestUserID: 0
            },
            list: [],
            total: 0,
            loading: true,
            flavors: []
        };
    },
    methods: {
        getList() {
            console.log("sendrequest");
            this.loading = true;
            getflavor(this.query)
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
        handleChange(value) {
            if (value) {
                for (let i = 0; i < this.list.length; ++i) {
                    if (
                        this.$refs[`flavorcas${i + 1}`][0].getCheckedNodes()
                            .length != 0
                    ) {
                        this.flavors[i] = this.$refs[
                            `flavorcas${i + 1}`
                        ][0].getCheckedNodes()[0].value;
                    } else {
                        this.flavors[i] = "";
                    }
                }
                console.log(this.flavors);
            }
        }
    },
    mounted() {},
    created() {
        console.log("create");
        // 加载列表数据
        this.getList();
    }
};
</script>

<style type="text/scss" lang="scss">
.flavor_cas_item {
    height: auto;
    margin-bottom: 20px;
}
.flavor_cas_title {
    font-size: 14px;
    font-weight: 700;
    line-height: 40px;
    color: #333;
}
.clearfix {
    zoom: 1;
}
.clearfix:after {
    content: " ";
    display: table;
    clear: both;
}
.flavor_cas_li {
    float: left;
    margin-right: 20px;
}
.flavor_cas_subtitle {
    font-size: 14px;
    font-weight: 500;
    color: rgb(40, 91, 115);
    margin-bottom: 5px;
}
</style>
