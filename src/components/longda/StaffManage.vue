<template>
    <div>
        <el-card class="box-card">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="gcbh" label="工程编号" width="180"> </el-table-column>
                <el-table-column prop="xmmc" label="项目名称" width="180"> </el-table-column>
                <el-table-column prop="zbdw" label="总包单位" width="180"> </el-table-column>
                <el-table-column prop="tjsj" label="分包公司" width="180"> </el-table-column>
                <el-table-column prop="gczt" label="工程状态" width="180"> </el-table-column>  
                <el-table-column prop="cz" label="详情">
                    <el-button icon="el-icon-view"><span @click="route(1)">农民工信息</span></el-button>
                    <el-button icon="el-icon-view"><span @click="route(2)">工资发放详情</span></el-button>
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
                    zbdw: '隆达建筑工程公司',
                    tjsj: '天津三建',
                    gczt: '进行中'
                },
            ]
        };
    },
    methods: {
        route(index) {
            if (index == 1) {
                this.$router.push({
                    path: '/StaffInfo'
                });
            } else if (index == 2) {
                this.$router.push({
                    path: '/Salary'
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
    margin: 2% 0%;
}
.box {
    position: absolute;
    /* margin-left: 5%; */
    width: 98%;
    margin-top: 2%;
}
</style>