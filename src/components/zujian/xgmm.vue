<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> <i class="el-icon-lx-calendar"></i> 表单 </el-breadcrumb-item>
                <el-breadcrumb-item>基本表单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="旧密码">
                        <el-input v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码">
                        <el-input v-model="form.xmm"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码">
                        <el-input v-model="form.qrmm"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">确认修改</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'baseform',
    data() {
        return {
            value1: '',
            form: {
                gh: '',
                password: '',
                xmm: '',
                qrmm: ''
            }
        };
    },
    mounted() {
        this.flag();
    },
    methods: {
        flag() {
            var strcookie = document.cookie; //获取cookie字符串
            var arrcookie = strcookie.split('; '); //分割
            //遍历匹配
            for (var i = 0; i < arrcookie.length; i++) {
                var arr = arrcookie[i].split('=');
                if (arr[0] == 'name') {
                    console.log(arr[1]);
                    this.form.xm = arr[1];
                }
                if (arr[0] == 'sno') {
                    console.log(arr[1]);
                    this.form.gh = arr[1];
                }
            }
            return '';
        },
        onSubmit() {
            this.$axios({
                method: 'post',
                url: '/api/xgmm',
                data: {
                    gh: this.form.gh,
                    password: this.form.password,
                    xmm: this.form.xmm,
                    qrmm: this.form.qrmm
                }
            }).then((res) => {
                console.log(res);
                if (res.data.state) {
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    });
                }else{
                    this.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                }
            });
        }
    }
};
</script>