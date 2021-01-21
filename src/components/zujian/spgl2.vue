<template>
    <div class="">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-copy"></i> 审批管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-tabs v-model="message">
                <el-tab-pane :label="`未读消息`" name="first">
                    <template v-if="message === 'first'">
                        <el-table :data="dataTables" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template slot-scope="scope">
                                    <span class="message-title">{{ scope.row.title }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column v-if="false" prop="nr" width="180"></el-table-column>
                            <el-table-column v-if="false" prop="id" width="180"></el-table-column>
                            <el-table-column prop="bt" width="180"></el-table-column>
                            <el-table-column prop="rq" width="180"></el-table-column>
                            <el-table-column prop="gh" width="180"></el-table-column>
                            <el-table-column prop="xm" width="180"></el-table-column>
                            <el-table-column width="120">
                                <template slot-scope="scope">
                                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </el-tab-pane>
                <el-tab-pane :label="`已读`" name="second">
                    <template v-if="message === 'second'">
                        <el-table :data="read" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template slot-scope="scope">
                                    <span class="message-title">{{ scope.row.title }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column v-if="false" prop="nr" width="180"></el-table-column>
                            <el-table-column v-if="false" prop="id" width="180"></el-table-column>
                            <el-table-column prop="bt" width="180"></el-table-column>
                            <el-table-column prop="rq" width="180"></el-table-column>
                            <el-table-column prop="gh" width="180"></el-table-column>
                            <el-table-column prop="xm" width="180"></el-table-column>
                            <el-table-column width="120">
                                <template slot-scope="scope">
                                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </el-tab-pane>
                <!-- <el-tab-pane :label="`已拒绝`" name="third">
                    <template v-if="message === 'third'">
                        <el-table :data="recycle" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template slot-scope="scope">
                                    <span class="message-title">{{ scope.row.title }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column v-if="false" prop="nr" width="180"></el-table-column>
                            <el-table-column v-if="false" prop="id" width="180"></el-table-column>
                            <el-table-column prop="bt" width="180"></el-table-column>
                            <el-table-column prop="rq" width="180"></el-table-column>
                            <el-table-column prop="gh" width="180"></el-table-column>
                            <el-table-column prop="xm" width="180"></el-table-column>
                            <el-table-column width="120">
                                <template slot-scope="scope">
                                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </el-tab-pane> -->
            </el-tabs>
        </div>
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%" :model="form">
            <el-form ref="form" label-width="70px">
                <el-form-item label="标题" v-if="false">
                    <el-input v-model="form.id" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="标题">
                    <el-input v-model="form.title" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="日期">
                    <el-input v-model="form.rq" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="内容">
                    <el-input type="textarea" :rows="4" v-model="form.nr" :disabled="true"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取消</el-button>
                <el-button type="primary" @click="sp(form.id, 5)">确定</el-button>
                <!-- <el-button type="primary" @click="sp(form.id, 3)">拒绝</el-button> -->
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'tabs',
    data() {
        return {
            editVisible: false,
            message: 'first',
            showHeader: false,
            id: '',
            form: {},
            dataTables: [],
            read: [],
            recycle: []
        };
    },
    mounted() {
        this.xx1();
        this.xx2();
        this.xx3();
    },
    created(){
        this.xx1();
        this.xx2();
        this.xx3();
    },
    methods: {
        handleEdit(index, row) {
            this.idx = index;
            this.form = row;
            this.editVisible = true;
        },
        xx1() {
            this.$axios({
                method: 'post',
                url: '/api/xx',
                data: {
                    state: 4
                }
            }).then((res) => {
                console.log(res, 111);
                for (let i = 0; i < res.data.length; i++) {
                    // console.log(res.data[i].rq);
                    this.dataTables[i] = {
                        rq: res.data[i].rq,
                        id: res.data[i].id,
                        gh: res.data[i].gh,
                        xm: res.data[i].xm,
                        title: res.data[i].bt,
                        nr: res.data[i].nr
                    };
                }
                this.$set(this.dataTables)
            });
        },
        xx2() {
            this.$axios({
                method: 'post',
                url: '/api/xx',
                data: {
                    state: 5
                }
            }).then((res) => {
                // console.log(res);
                for (let i = 0; i < res.data.length; i++) {
                    // console.log(res);
                    this.read[i] = {
                        rq: res.data[i].rq,
                        id: res.data[i].id,
                        gh: res.data[i].gh,
                        xm: res.data[i].xm,
                        title: res.data[i].bt,
                        nr: res.data[i].nr
                    };
                }
                this.$set(this.read)
            });
        },
        xx3() {
            this.$axios({
                method: 'post',
                url: '/api/xx',
                data: {
                    state: 3
                }
            }).then((res) => {
                // console.log(res);
                for (let i = 0; i < res.data.length; i++) {
                    // console.log(res);
                    this.recycle[i] = {
                        rq: res.data[i].rq,
                        id: res.data[i].id,
                        gh: res.data[i].gh,
                        xm: res.data[i].xm,
                        title: res.data[i].bt,
                        nr: res.data[i].nr
                    };
                }
                this.$set(this.recycle)
            });
        },
        sp(id, index) {
            console.log(id);
            this.$axios({
                method: 'post',
                url: '/api/sp',
                data: {
                    id: id,
                    state: index
                }
            }).then((res) => {
                // console.log(res);
                this.$message.success('确认');
                this.editVisible = false;
            });
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
        // unreadNum() {
        //     // return this.unread.length;
        // }
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

