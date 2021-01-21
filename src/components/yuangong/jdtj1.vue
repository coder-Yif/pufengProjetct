<template>

    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> <i class="el-icon-lx-calendar"></i> 员工 </el-breadcrumb-item>
                <el-breadcrumb-item>进度提交</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card class="box-card">
            <el-form ref="form" :model="form" label-width="300px">
                    <el-form-item label="水果类进货量（个）">
                        <el-input v-model="form.sg" ></el-input>
                    </el-form-item>
                    <el-form-item label="日用品进货量（个）">
                        <el-input v-model="form.ryp"></el-input>
                    </el-form-item>
                    <el-form-item label="零食类进货量（个）">
                        <el-input v-model="form.ls"></el-input>
                    </el-form-item>
                    <el-form-item label="文具类进货量（个）">
                        <el-input v-model="form.wj"></el-input>
                    </el-form-item>
                    <el-form-item label="进货总额（元）">
                        <el-input v-model="form.ze"></el-input>
                    </el-form-item>   
                    <el-form-item label="日期时间">
                        <div class="block">
                            <el-date-picker v-model="form.date" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"> </el-date-picker>
                        </div>
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input type="textarea" rows="5" style="width: 60%;" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value1: '',
            form: {
                gh: '',
                xm: '',
                sg: '',
                ryp: '',
                ls: '',
                wj: '',
                flag: '',
                desc: '',
                date: '',
                ze: ''
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
                if (arr[0] == 'flag') {
                    console.log(arr[1]);
                    this.form.flag = arr[1];
                }
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
                url: '/api/jdtj',
                data: {
                    gh: this.form.gh,
                    // xm: this.form.xm,
                    sg: this.form.sg,
                    ryp: this.form.ryp,
                    ls: this.form.ls,
                    wj: this.form.wj,
                    flag: this.form.flag,
                    dec: this.form.desc,
                    date: this.form.date,
                    ze: this.form.ze
                }
            }).then((res) => {
                console.log(res);
                this.$message({
                    message: '提交成功',
                    type: 'success'
                });
            });
        }
    }
};
</script>
<style scoped>
.text {
    font-size: 14px;
}
.box-card {
    width: 90%;
    margin-left: 5%;
}
.btn1 {
    float: right;
    margin-right: 5%;
}
.el-input{
    width: 60%;
}
</style>