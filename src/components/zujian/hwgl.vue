<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> <i class="el-icon-lx-cascades"></i> 货物信息 </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="mc" label="名称" width="180"> </el-table-column>
                <el-table-column prop="dqsj" label="过期时间" width="180"> </el-table-column>
                <el-table-column prop="lr" label="单品利润"> </el-table-column>
                <el-table-column prop="xl" label="昨日销量"> </el-table-column>
                <el-table-column prop="zlr" label="昨日利润"> </el-table-column>
            </el-table>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">   
                <el-form-item label="部门">
                    <el-input v-model="form.bm"></el-input>
                </el-form-item>
                <el-form-item label="职务">
                    <el-input v-model="form.zw"></el-input>
                </el-form-item>
                <el-form-item label="工资">
                    <el-input v-model="form.gz"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { fetchData } from '../../api/index';
export default {
    name: 'basetable',
    data() {
        return {
            query: {
                address: '',
                name: '',
                pageIndex: 1,
                pageSize: 10
            },
            tableData: [],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            pageTotal: 0,
            form: {},
            idx: -1,
            id: -1,
            tableData: [
                {
                    gh: '2020001',
                    xm: '张三',
                    xb: '男 ',
                    bm: '技术部',
                    zw: '普工',
                    gz: '3500'
                },
                
            ]
        };
    },
    created() {
        this.hw();
    },
    mounted(){
        this.hw();
    },
    methods: {
        hw() {
            this.$axios({
                method: 'post',
                url: '/api/hw',
                data: {}
            }).then((res) => {
                console.log(res);
                for (let i = 0; i < res.data.length; i++) {
                    this.tableData[i] = {
                        mc: res.data[i].mc,
                        dqsj: res.data[i].dqsj,
                        lr: res.data[i].lr,
                        xl: res.data[i].xl,
                        zlr: res.data[i].zlr
                    };
                }
                this.$set(this.tableData)
            });
        },
        // 获取 easy-mock 的模拟数据
        getData() {
            fetchData(this.query).then((res) => {
                console.log(res);
                this.tableData = res.list;
                this.pageTotal = res.pageTotal || 50;
            });
        },
        // 触发搜索按钮
        handleSearch() {
            this.$set(this.query, 'pageIndex', 1);
            this.getData();
        },
        // 删除操作
        handleDelete(index, row) {
            // 二次确认删除
            this.$confirm('确定要开除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    this.$message.success('开除成功');
                    this.tableData.splice(index, 1);
                })
                .catch(() => {});
        },
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        delAllSelection() {
            const length = this.multipleSelection.length;
            let str = '';
            this.delList = this.delList.concat(this.multipleSelection);
            for (let i = 0; i < length; i++) {
                str += this.multipleSelection[i].name + ' ';
            }
            this.$message.error(`删除了${str}`);
            this.multipleSelection = [];
        },
        // 编辑操作
        handleEdit(index, row) {
            this.idx = index;
            this.form = row;
            this.editVisible = true;
        },
        // 保存编辑
        saveEdit() {
            this.editVisible = false;
            this.$message.success(`修改第 ${this.idx + 1} 行成功`);
            this.$set(this.tableData, this.idx, this.form);
        },
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            this.getData();
        }
    }
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>
