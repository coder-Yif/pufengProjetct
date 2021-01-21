<template>
    <div>
        <el-page-header @back="goBack" content="农民工信息详情页面" style="margin-top:15px"> </el-page-header>
        <el-card class="box-card">
            <el-table :data="tableData" border>
                <el-table-column prop="id" label="ID" width="180"> </el-table-column>
                <el-table-column prop="xm" label="姓名" width="180"> </el-table-column>
                <el-table-column prop="sfzh" label="身份证号" width="280"> </el-table-column>
                <el-table-column prop="yhk" label="银行卡" width="290"> </el-table-column>
                <el-table-column prop="khh" label="开户行" width="287"> </el-table-column>
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
                    id: 1,
                    xm: '张三',
                    sfzh: '1234 5678 9123 4567 89',
                    yhk: '0000 0000 0000 0000 001 ',
                    khh: 'xxxxxxxxx分行'
                },
                {
                    id: 2,
                    xm: '张四',
                    sfzh: '1234 5678 9123 4567 90',
                    yhk: '0000 0000 0000 0000 002 ',
                    khh: 'xxxxxxxxx分行'
                },
                {
                    id: 3,
                    xm: '张五',
                    sfzh: '1234 5678 9123 4567 91',
                    yhk: '0000 0000 0000 0000 003 ',
                    khh: 'xxxxxxxxx分行'
                },
                {
                    id: 4,
                    xm: '张六',
                    sfzh: '1234 5678 9123 4567 92',
                    yhk: '0000 0000 0000 0000 003 ',
                    khh: 'xxxxxxxxx分行'
                },
                {
                    id: 5,
                    xm: '张七',
                    sfzh: '1234 5678 9123 4567 93',
                    yhk: '0000 0000 0000 0000 003 ',
                    khh: 'xxxxxxxxx分行'
                },
                {
                    id: 6,
                    xm: '张八',
                    sfzh: '1234 5678 9123 4567 94',
                    yhk: '0000 0000 0000 0000 003 ',
                    khh: 'xxxxxxxxx分行'
                }
            ]
        };
    },
    methods: {
        goBack() {
            this.$router.push({
                    path: '/staff'
                });
        },
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