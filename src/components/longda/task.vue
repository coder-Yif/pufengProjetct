<template>
    <div>
        <!-- <div class="box">
            <el-button type="success" icon="el-icon-circle-plus-outline" style="float: right; margin-left: 10px"><span @click="route(1)">添加任务</span></el-button>
            <el-button type="primary" icon="el-icon-search" style="float: right">搜索</el-button>
            <el-input v-model="input" placeholder="请输入任务编号" style="float: right; width: 15%"></el-input>
        </div> -->
        <el-card class="box-card">
            <el-table :data="tableData" border style="width:100vw">
                <el-table-column prop="rwbh" label="任务编号" width="168"> </el-table-column>
                <el-table-column prop="rwmc" label="任务名称" width="180"> </el-table-column>
                <el-table-column prop="jsdw" label="建设单位" width="180"> </el-table-column>
                <el-table-column prop="ksrq" label="开始日期" width="160"> </el-table-column>
                <el-table-column prop="jsrq" label="结束日期" width="160"> </el-table-column>
                <el-table-column prop="sgzt" label="施工状态" width="137"> </el-table-column>
                <el-table-column prop="cz" label="操作" width="220">
                    <el-button icon="el-icon-view"><span @click="route(2)">查看</span></el-button>
                    <el-button icon="el-icon-edit"><span @click="route(3)">编辑</span></el-button>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
            value: '',
            input: '',
            tableData: [
                {
                    rwbh: 'B001',
                    rwmc: '道路施工',
                    jsdw: '分包单位一',
                    ksrq: '2020-05-27',
                    jsrq: '2020-06-27',
                    sgzt: '进行中'
                },
               {
                    rwbh: 'B002',
                    rwmc: '停车场改造',
                    jsdw: '分包单位二',
                    ksrq: '2020-06-29',
                    jsrq: '2020-07-05',
                    sgzt: '进行中'
                },
            ]
        };
    },
    mounted() {
        this.getTable();
    },
    methods: {
        getTable() {
            let arr = this.$session.get('task');
            for (let i = 0; i < arr.length; i++) {
                this.tableData[i+2] = {
                    rwbh: arr[i]["rwbh"],
                    rwmc: arr[i]["rwmc"],
                    jsdw: arr[i]["jsdw"],
                    ksrq: arr[i]["start"],
                    jsrq: arr[i]["end"],
                    sgzt: arr[i]["zt"],
                };
            }
            this.$set(this.tableData)
        },
        route(index) {
            if (index == 1) {
                this.$router.push({
                    path: '/AddTask'
                });
                this.$session.set('opt1', 0); 
            } else if (index == 2) {
                this.$router.push({
                    path: '/AddTask'
                });
                this.$session.set('opt1', 1); 
            } else if (index == 3) {
                this.$router.push({
                    path: '/AddTask'
                });
                this.$session.set('opt1', 2); 
            } else if (index == 5) {
                this.$router.push({
                    path: '/jxgl'
                });
            } else if (index == 6) {
                this.$router.push({
                    path: '/spgl'
                });
            } else if (index == 7) {
                this.$router.push({
                    path: '/fbtz'
                });
            } else if (index == 8) {
                this.$router.push({
                    path: '/xgmm'
                });
            } else if (index == 9) {
                this.$router.push({
                    path: '/tabs'
                });
            }
        }
    }
};
</script>

<style scoped>
.text {
    font-size: 14px;
}

.item {
    padding: 18px 0;
}

.box-card {
    position: absolute;
    width: 97%;
    margin: 2% 0%;
}
.box {
    position: absolute;
    /* margin-left: 5%; */
    width: 97%;
    margin-top: 2%;
}
</style>