<template>
    <div class="">
        <el-page-header @back="goBack" content="物资采购和分包信息详情页面" style="margin-top: 15px"> </el-page-header>
        <div class="container">
            <el-tabs v-model="message">
                <el-tab-pane :label="`建材已审批(${unread.length})`" name="first">
                    <el-table :data="unread" :show-header="false" style="width: 100%">
                        <el-table-column>
                            <template slot-scope="scope">
                                <span class="message-title">{{ scope.row.title }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="zje" width="180"></el-table-column>
                        <el-table-column width="120">
                            <template slot-scope="scope">
                                <el-button size="small" @click="handleRead(scope.$index)">查看详情</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane :label="`建材审批中(${recycle.length})`" name="third">
                    <template v-if="message === 'third'">
                        <el-table :data="recycle" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template slot-scope="scope">
                                    <span class="message-title">{{ scope.row.title }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="zt" width="150"></el-table-column>
                            <el-table-column width="120">
                                <template slot-scope="scope">
                                    <el-button size="small" @click="handleRead(scope.$index)">查看详情</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tabs',
    data() {
        return {
            message: 'first',
            showHeader: false,
            unread: [
                {
                    title: '第一期物资采购和分包审批表',
                    zje: '2020-05-12'
                },
                {
                    title: '第二期物资采购和分包审批表',
                    zje: '2020-06-18'
                },
                {
                    title: '第三期物资采购和分包审批表',
                    zje: '2020-07-11'
                },
                {
                    title: '第四期物资采购和分包审批表',
                    zje: '2020-08-08'
                },
            ],
            recycle: [
                {
                    title: '第五期物资采购和分包审批表',
                    zt: '审批中'
                }
            ],
            no: [
                {
                    title: '项目经理月度报告表'
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
        handleRead(index) {
            const item = this.unread.splice(index, 1);
            console.log(item);
            this.read = item.concat(this.read);
        },
        handleDel(index) {
            const item = this.read.splice(index, 1);
            this.recycle = item.concat(this.recycle);
        },
        handleRestore(index) {
            const item = this.recycle.splice(index, 1);
            this.read = item.concat(this.read);
        }
    },
    computed: {
        unreadNum() {
            return this.unread.length;
        }
    }
};
</script>

<style scoped>
.message-title {
    cursor: pointer;
}
.handle-row {
    margin-top: 30px;
}
.container{
    margin-top: 4vh;
}
</style>

