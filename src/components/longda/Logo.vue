<template>
    <div>
        <el-card class="box-card">
            <div class="block">
                <el-timeline>
                    <el-timeline-item timestamp="2018/4/12" placement="top">
                        <el-card>
                            <h4>王经理填写了项目部组建方案审批表</h4>
                            <p>王小虎 提交于 2018/4/12 20:46</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018/4/3" placement="top">
                        <el-card>
                            <h4>李经理填写了项目经理月度报告表</h4>
                            <p>王小虎 提交于 2018/4/3 20:46</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018/4/2" placement="top">
                        <el-card>
                            <h4>张经理填写了项目部组建方案审批表</h4>
                            <p>王小虎 提交于 2018/4/2 20:46</p>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
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
    /* margin: 6% 0%; */
}
.block {
    width: 60%;
    padding: 20px;
    margin-left: 20%;
}
.box {
    position: absolute;
    /* margin-left: 5%; */
    width: 98%;
    margin-top: 2%;
}
</style>