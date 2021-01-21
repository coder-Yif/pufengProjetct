<template>
    <div>
        <div class="box">
            <!-- <el-button type="danger" icon="el-icon-delete" style="float: right; margin-left: 10px">删除</el-button> -->
            <el-button type="success" icon="el-icon-circle-plus-outline" style="float: right; margin-left: 10px"
                ><span @click="route(2)">添加新项目</span></el-button
            >
            <el-button type="primary" icon="el-icon-search" style="float: right">搜索</el-button>
            <!-- <el-select v-model="value" placeholder="请输入工程编号" style="float: right; margin-left: 10px">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select> -->
            <el-input v-model="input" placeholder="请输入工程编号" style="float: right; width: 15%"></el-input>
        </div>
        <el-card class="box-card">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="gcbh" label="工程编号" width="180"> </el-table-column>
                <el-table-column prop="xmmc" label="项目名称" width="180"> </el-table-column>
                <el-table-column prop="jsdw" label="建设单位" width="180"> </el-table-column>
                <el-table-column prop="tjsj" label="添加时间" width="180"> </el-table-column>
                <el-table-column prop="htje" label="合同金额" width="180"> </el-table-column>
                <el-table-column prop="gczt" label="工程状态" width="100"> </el-table-column>  
                <el-table-column prop="cz" label="操作">
                    <el-button icon="el-icon-view"><span @click="route(3)">查看</span></el-button>
                    <el-button icon="el-icon-edit"><span @click="route(4)">编辑</span></el-button>
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
                    gcbh: 'A188515',
                    xmmc: '天津小区改造项目',
                    jsdw: '普丰',
                    tjsj: '2020-05-25',
                    htje: '3000万',
                    gczt: '审批通过'
                }
                // {
                //     gcbh: 'A188516',
                //     xmmc: 'xx社区改造项目',
                //     jsdw: '普丰',
                //     tjsj: '2020-03-24 16:30:30',
                //     htje: '1000万',
                //     gczt: '审批中'
                // }
            ]
        };
    },
    mounted() {
        this.getTable();
    },
    methods: {
        getTable() {
            let arr = this.$session.get('key');
            for (let i = 0; i < arr.length; i++) {
                this.tableData[i+1] = {
                    gcbh: arr[i]["gcbh"],
                    xmmc: arr[i]["gcmc"],
                    jsdw: arr[i]["jsdw1"],
                    tjsj: arr[i]["sgjcrq"],
                    htje: arr[i]["htje"],
                    gczt: "审批中"
                };
            }
            this.$set(this.tableData)
        },
        route(index) {
            if (index == 1) {
                this.$router.push({
                    path: '/ckxm'
                });
            } else if (index == 2) {
                this.$router.push({
                    path: '/newProject'
                });
                this.$session.set('opt', 0); //存session
            } else if (index == 3) {
                this.$router.push({
                    path: '/view'
                });
            } else if (index == 4) {
                this.$router.push({
                    path: '/newProject'
                });
                this.$session.set('opt', 1); //存session
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
    width: 98%;
    margin: 6% 0%;
}
.box {
    position: absolute;
    /* margin-left: 5%; */
    width: 98%;
    margin-top: 2%;
}
</style>