<template>
    <div id="entry">
        <div class="a_find_title">
            按地区查看交易量
        </div>
        <div class="matric_option_container">
            <div class="region_cas_box">
                <li is="RegionCas"> </li>
            </div>

            <div class="grain_cas_title">粒度选择</div>
            <div class="grain_cas_box">
                <el-cascader
                ref="grain_cascader"
                :options="grainlist"
                :props="{ expandTrigger: 'hover' }">
                </el-cascader>
            </div>

            <div class="find_button_container">
                <el-button type="primary" round @click="SubmitQuery" class="alist_next_button">确认</el-button>
            </div>
        </div>
<<<<<<< Updated upstream

        <div>
            <div id="echart_etl_stat" style="height: 400px; width: 100%;"></div>
        </div>

=======
        
        <div>
            <div id="echart_etl_stat" style="height: 400px; width: 100%;"></div>
        </div>
        <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort = "{prop: 'date', order: 'descending'}"
        >
            <el-table-column
                prop="date"
                label="日期"
                sortable
                width="180">
            </el-table-column>
            <el-table-column
                prop="region"
                label="地区"
                sortable
                width="180">
            </el-table-column>
            <el-table-column
                prop="price"
                label="成交金额"
                sortable
                width="180">
            </el-table-column>
        </el-table>
>>>>>>> Stashed changes
    </div>
</template>

<script type="text/javascript">
var echarts = require("echarts");
import RegionCas from "../userFeature/shared/myRegionCascader";
import { getMatric } from "../../api/admin/matric";
export default {
    data() {
        return {
<<<<<<< Updated upstream
=======
            tableData: [{
                date: '2022年01月',
                region: '北京 北京市 朝阳区',
                price: 0
                }, {
                date: '2022年02月',
                region: '北京 北京市 朝阳区',
                price: 51
                }, {
                date: '2022年03月',
                region: '北京 北京市 朝阳区',
                price: 22
                }, {
                date: '2022年04月',
                region: '北京 北京市 朝阳区',
                price: 11
                }, {
                date: '2022年05月',
                region: '北京 北京市 朝阳区',
                price: 50
                }, {
                date: '2022年06月',
                region: '北京 北京市 朝阳区',
                price: 0
                }, {
                date: '2022年07月',
                region: '北京 北京市 朝阳区',
                price: 38
                }, {
                date: '2022年08月',
                region: '北京 北京市 朝阳区',
                price: 47
                }, {
                date: '2022年09月',
                region: '北京 北京市 朝阳区',
                price: 0
                }, {
                date: '2022年10月',
                region: '北京 北京市 朝阳区',
                price: 10
                }, {
                date: '2022年11月',
                region: '北京 北京市 朝阳区',
                price: 100
                }, {
                date: '2022年12月',
                region: '北京 北京市 朝阳区',
                price: 0
                }],
>>>>>>> Stashed changes
            query: {
                RequestUserID: 0,
                Grain: "月",
                Region: ""
            },
            list: [],
            total: 0,
            loading: false,
            grainlist: [
                {
                    id: 1,
                    value: "年",
                    label: "年"
                },
                {
                    id: 2,
                    value: "月",
                    label: "月"
                },
                {
                    id: 3,
                    value: "日",
                    label: "日"
                }
            ]
        };
    },
    components: {
        RegionCas
    },
    mounted: {},
    methods: {
        SubmitQuery() {
            console.log("submit");
            // 将参数复制进查询对象
            let query = this.$route.query;
            this.query = Object.assign(this.query, query);
            if (
                this.$refs["grain_cascader"] &&
                this.$refs["grain_cascader"].getCheckedNodes().length > 0
            ) {
                this.query.grain = this.$refs[
                    "grain_cascader"
                ].getCheckedNodes()[0].value;
                console.log(this.query.grain);
            }
            // 加载数据
            this.getList();
        },
        getList() {
            console.log("sendrequest");
            this.loading = true;
            getMatric(this.query)
                .then(response => {
                    console.log("getresponse");
                    this.loading = false;
                    this.list = response.data.list || [];
                    console.log(this.list[0]);
                    this.total = response.data.total || 0;
                    this.init_echarts();
                })
                .catch(() => {
                    console.log("wrong");
                    this.loading = false;
                    this.list = [];
                    this.total = 0;
                });
        },
        init_echarts() {
            // 基于准备好的dom，初始化echarts实例
            var echart_etl_stat = echarts.init(
                document.getElementById("echart_etl_stat")
            );
            // 绘制图表
            echart_etl_stat.setOption({
                title: {
                    text: "交易数统计"
                },
                tooltip: {
                    trigger: "axis"
                },
                legend: {
                    data: ["category1"]
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: this.list[0].datax
                },
                yAxis: {
                    type: "value"
                },
                series: [
                    {
                        name: "category1",
                        type: "line",
                        data: this.list[0].datay
                    }
                ]
            });
        }
    }
};
</script>

<style>
.matric_option_container {
    margin: 0 5px 35px 5px;
    padding: 15px 15px 15px 15px;
    background: #f9f9f9f8;
    border-radius: 4px;
}
.find_button_container {
    margin-top: 20px;
}
.grain_cas_title {
    font-size: 14px;
    font-weight: 700;
    line-height: 40px;
    color: #333;
}
</style>
