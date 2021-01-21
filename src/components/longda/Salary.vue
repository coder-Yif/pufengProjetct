<template>
    <div class="">
        <el-page-header @back="goBack" content="工资发放信息详情页面" style="margin-top: 15px"> </el-page-header>
        <div class="container">
            <el-tabs v-model="message">
                <el-tab-pane :label="`工资已发放(${unread.length})`" name="first">
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
                    <!-- <div class="handle-row">
                        <el-button type="primary">全部标为已读</el-button>
                    </div> -->
                </el-tab-pane>
                <el-tab-pane :label="`工资发放确认中(${read.length})`" name="second">
                    <template v-if="message === 'second'">
                        <el-table :data="read" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template slot-scope="scope">
                                    <span class="message-title">{{ scope.row.title }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="fs" width="150"> </el-table-column>
                            <el-table-column width="120">
                                <template slot-scope="scope">
                                    <el-button size="small" @click="handleRead(scope.$index)">查看详情</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <!-- <div class="handle-row">
                            <el-button type="danger">删除全部</el-button>
                        </div> -->
                    </template>
                </el-tab-pane>
                <el-tab-pane :label="`工资待发放(${recycle.length})`" name="third">
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
                        <!-- <div class="handle-row">
                            <el-button type="danger">清空回收站</el-button>
                        </div> -->
                    </template>
                </el-tab-pane>
                <!-- <el-tab-pane :label="`审批不通过(${no.length})`" name="forth">
                    <template v-if="message === 'forth'">
                        <el-table :data="no" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template slot-scope="scope">
                                    <span class="message-title">{{ scope.row.title }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="150"></el-table-column>
                            <el-table-column width="120">
                                <template slot-scope="scope">
                                    <el-button size="small" @click="handleRead(scope.$index)">重新填写</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </el-tab-pane> -->
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
                    title: '2020-03工资发放情况表',
                    zje: '150000.00元'
                },
                {
                    title: '2020-04工资发放情况表',
                    zje: '150000.00元'
                },
                {
                    title: '2020-05工资发放情况表',
                    zje: '150000.00元'
                },
                {
                    title: '2020-06工资发放情况表',
                    zje: '150000.00元'
                },
                {
                    title: '2020-07工资发放情况表',
                    zje: '150000.00元'
                },
                {
                    title: '2020-08工资发放情况表',
                    zje: '150000.00元'
                }
            ],
            read: [
                {
                    title: '2020-09工资发放情况表',
                    fs: '218/225'
                }
            ],
            recycle: [
                {
                    title: '2020-10工资发放情况表',
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

