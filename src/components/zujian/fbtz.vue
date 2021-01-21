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
                    <el-form-item label="标题">
                        <el-input v-model="form.bt"></el-input>
                    </el-form-item>
                    <el-form-item label="日期时间">
                        <div class="block">
                            <el-date-picker v-model="form.date" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"> </el-date-picker>
                        </div>
                    </el-form-item>
                    <!-- <el-form-item label="范围">
                        <el-radio-group v-model="form.fw">
                            <el-radio label="1">全部</el-radio>
                            <el-radio label="3">货物部</el-radio>
                            <el-radio label="2">销售部</el-radio>
                        </el-radio-group>
                    </el-form-item> -->
                    <el-form-item label="内容">
                        <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">发布</el-button>
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
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: true,
                type: ['步步高'],
                resource: '小天才',
                desc: '',
                options: []
            }
        };
    },
    methods: {
        onSubmit() {
            this.$axios({
                method: 'post',
                url: '/api/swsq',
                data: {
                    state:4,
                    rq: this.form.date,
                    nr: this.form.desc,
                    bt: this.form.bt,
                    fw:this.form.fw,
                    gh:"2020001",
                    xm:this.form.xm
                }
            }).then((res) => {
                this.$message({
                    message: '发布成功',
                    type: 'success'
                });
            });
        }
    }
};
</script>