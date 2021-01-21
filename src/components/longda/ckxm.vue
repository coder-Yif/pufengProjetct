<template>
    <div class="">
        <div class="container">
            <el-tabs v-model="message">
                <el-tab-pane :label="`已完成(${unread.length})`" name="first">
                    <el-table :data="unread" :show-header="false" style="width: 100%">
                        <el-table-column>
                            <template slot-scope="scope">
                                <span class="message-title">{{ scope.row.title }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="date" width="180"></el-table-column>
                        <el-table-column width="120">
                            <template slot-scope="scope">
                                <el-button size="small" @click="handleRead(scope.$index)">查看详情</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <!-- <el-tab-pane :label="`已完成(${read.length})`" name="second">
                    <template v-if="message === 'second'">
                        <el-table :data="read" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template slot-scope="scope">
                                    <span class="message-title">{{ scope.row.title }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="150"></el-table-column>
                            <el-table-column width="120">
                                <template slot-scope="scope">
                                    <el-button size="small" @click="handleRead(scope.$index)">查看详情</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </el-tab-pane> -->
                <el-tab-pane :label="`进行中(${recycle.length})`" name="third">
                    <template v-if="message === 'third'">
                        <el-table :data="recycle" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template slot-scope="scope">
                                    <span class="message-title">{{ scope.row.title }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="150"></el-table-column>
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
                    title: '施工组织设计方案'
                },
                 {
                    title: '专项施工方案'
                }
                
            ],
            read: [
                {
                    title: '重大危险源识别控制计划'
                },
                {
                    title: '质量要素控制计划'
                },
                {
                    title: '物资采购和分包审批计划'
                }
            ],
            recycle: [
                 {
                    title: '重大危险源识别控制计划'
                },
                {
                    title: '质量要素控制计划'
                },
                {
                    title: '物资采购和分包审批计划'
                }
            ],
            no: [{
                    title: '项目经理月度报告表'
                }]
        };
    },
    methods: {
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

<style>
.message-title {
    cursor: pointer;
}
.handle-row {
    margin-top: 30px;
}
</style>

