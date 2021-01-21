<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> <i class="el-icon-lx-calendar"></i> 员工 </el-breadcrumb-item>
                <el-breadcrumb-item>事务申请</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="标题">
                        <el-input v-model="form.bt"></el-input>
                    </el-form-item>
                    <el-form-item label="日期时间">
                        <div class="block">
                            <el-date-picker v-model="form.date" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"> </el-date-picker>
                        </div>
                    </el-form-item>
                    <el-form-item label="内容">
                        <el-input type="textarea" rows="10" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
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
                xm: '',
                bt: '',
                date: '',
                desc: ''
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
                url: '/api/swsq',
                data: {
                    state:1,
                    rq: this.form.date,
                    nr: this.form.desc,
                    bt: this.form.bt,
                    gh:this.form.gh,
                    xm:this.form.xm
                }
            }).then((res) => {
                this.$message({
                    message: '提交成功',
                    type: 'success'
                });
            });
        }
    }
};
</script>