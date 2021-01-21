<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> <i class="el-icon-lx-cascades"></i> 员工信息 </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <!-- <div class="handle-box">
                <el-select v-model="query.address" placeholder="部门" class="handle-select mr10">
                    <el-option key="1" label="销售部" value="广东省"></el-option>
                    <el-option key="2" label="技术部" value="湖南省"></el-option>
                </el-select>
                <el-input v-model="query.gh" placeholder="工号" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div> -->
            <el-table :data="tableData" border style="width: 100%" class="tab" id="tab">
                <el-table-column prop="gh" label="工号" width="180"> </el-table-column>
                <el-table-column prop="xm" label="姓名" width="180"> </el-table-column>
                <el-table-column prop="xb" label="性别"> </el-table-column>
                <el-table-column prop="bm" label="部门"> </el-table-column>
                <el-table-column prop="zw" label="职务"> </el-table-column>
                <el-table-column prop="gz" label="工资"> </el-table-column>
                <el-table-column prop="cz" label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)"
                            >开除</el-button
                        >
                    </template></el-table-column
                >
            </el-table>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="工号" v-if="false">
                    <el-input v-model="form.gh"></el-input>
                </el-form-item>
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
            multipleSelection: [],
            delList: [],
            editVisible: false,
            pageTotal: 0,
            form: {},
            idx: -1,
            id: -1,
            tableData: [{}],
            gh: ''
        };
    },
    // created() {
    //     this.flag();
    //     this.yg();
    //     // this.yg();
    // },
    // mounted() {
    //     this.flag();
    //     this.yg();
    // },
     created() {
        
        this.flag();
        this.yg();
        // this.yg();
        console.log(this.tableData,"?????????????????????????????/")
    },
    methods: {
        yg() {
            this.$axios({
                method: 'post',
                url: '/api/ygxx',
                data: {}
            }).then((res) => {
                for (let i = 0; i < res.data.length; i++) {
                    this.tableData[i] = {
                        gh: res.data[i].gh,
                        xm: res.data[i].xm,
                        xb: res.data[i].xb,
                        bm: res.data[i].bm,
                        zw: res.data[i].zw,
                        gz: res.data[i].gz
                    };
                }
                this.$set(this.tableData)
            });
        },
        flag() {
            var strcookie = document.cookie; //获取cookie字符串
            var arrcookie = strcookie.split('; '); //分割
            //遍历匹配
            for (var i = 0; i < arrcookie.length; i++) {
                var arr = arrcookie[i].split('=');

                if (arr[0] == 'sno') {
                    console.log(arr[1]);
                    this.gh = arr[1];
                }
            }
            return '';
        },
        saveEdit() {
            this.$axios({
                method: 'post',
                url: '/api/bj',
                data: {
                    gh: this.form.gh,
                    bm: this.form.bm,
                    zw: this.form.zw,
                    gz: this.form.gz
                }
            }).then((res) => {
                console.log(res);
                this.editVisible = false;
                this.$message.success(`修改成功`);
                this.$set(this.tableData, this.idx, this.form);
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
                    // console.log(index)
                    // console.log() 
                    this.$axios({
                        method: 'post',
                        url: '/api/kc',
                        data: {
                            gh: this.tableData[index].gh,
                        }
                    }).then((res) => {
                        console.log(res);
                    });
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
        // saveEdit() {
        //     this.editVisible = false;
        //     this.$message.success(`修改第 ${this.idx + 1} 行成功`);
        //     this.$set(this.tableData, this.idx, this.form);
        // },
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
