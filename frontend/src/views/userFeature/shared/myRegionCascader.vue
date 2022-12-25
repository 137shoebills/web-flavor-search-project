<template>
    <div>
        <div v-loading="loading" :data="list" class="region_cas_container" >
            <div class="region_cas_item">
                <div class="region_cas_title">地区选择</div>
                <div class="region_cas_box">
                    <el-cascader
                    ref="region_cascader"
                    :options="list"
                    :props="{ expandTrigger: 'hover' }"
                    @change="handleChange">
                    </el-cascader>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
import { getregion } from "../../../api/user/regions";
export default {
    name: "RegionCas",
    data() {
        return {
            query: {
                RequestUserID: 0
            },
            list: [],
            total: 0,
            loading: true,
            region: ""
        };
    },
    methods: {
        getList() {
            console.log("sendrequest");
            this.loading = true;
            getregion(this.query)
                .then(response => {
                    console.log("getresponse");
                    this.loading = false;
                    this.list = response.data.list || [];
                    this.total = response.data.total || 0;
                    this.creatOption();
                })
                .catch(() => {
                    console.log("wrong");
                    this.loading = false;
                    this.list = [];
                    this.total = 0;
                });
        },
        handleChange(value) {
            if (
                value &&
                this.$refs["region_cascader"] &&
                this.$refs["region_cascader"].getCheckedNodes().length > 0
            ) {
                this.region = this.$refs[
                    "region_cascader"
                ].getCheckedNodes()[0].value;
                console.log(this.region);
            }
        },
        creatOption() {}
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
.region_cas_item {
    height: 100px;
}
.region_cas_title {
    font-size: 14px;
    font-weight: 700;
    line-height: 40px;
    color: #333;
}
</style>
