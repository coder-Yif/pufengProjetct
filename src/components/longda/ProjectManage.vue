<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 24px; height: 7vh">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>查看项目</el-breadcrumb-item>
            <!-- <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
        </el-breadcrumb>
        <el-card class="box-card">
            <el-row :gutter="12">
                <el-col :span="6">
                    <el-card shadow="hover" style="text-align: center;height: 45vh;">
                        <el-link @click="route(5)" target="_blank"><p style="font-size: 36px;margin-top:15vh">日志</p> </el-link></el-card
                    >
                </el-col>
                <el-col :span="6">
                    <el-card shadow="hover" style="text-align: center;height: 45vh;">
                        <el-link @click="route(1)" target="_blank"><p style="font-size: 36px;margin-top:15vh">文档</p> </el-link>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card shadow="hover" style="text-align: center;height: 45vh;">
                        <el-link @click="route(6)" target="_blank"><p style="font-size: 36px;margin-top:15vh">任务</p> </el-link>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card shadow="hover" style="text-align: center;height: 45vh;">
                        <el-link @click="route(2)" target="_blank"><p style="font-size: 36px;margin-top:15vh">甘特图</p> </el-link>
                    </el-card>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            options: [
                {
                    value: '选项2',
                    label: '双皮奶'
                },
                {
                    value: '选项3',
                    label: '蚵仔煎'
                },
                {
                    value: '选项4',
                    label: '龙须面'
                },
                {
                    value: '选项5',
                    label: '北京烤鸭'
                }
            ],
            value: '',
            input: '',
            tableData: [
                {
                    gcbh: 'A188515',
                    xmmc: '天津小区改造项目',
                    jsdw: '普丰',
                    tjsj: '2020-05-25 15:48:32',
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
    methods: {
        route(index) {
            if (index == 1) {
                this.$router.push({
                    path: '/ckxm'
                });
            } else if (index == 2) {
                this.$router.push({
                    path: '/newProject'
                });
            } else if (index == 3) {
                this.$router.push({
                    path: '/hwgl'
                });
            } else if (index == 5) {
                this.$router.push({
                    path: '/Logo'
                });
            } else if (index == 6) {
                this.$router.push({
                    path: '/task'
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
    height: 50vh;
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