<template>
    <div style="margin-top: 3vh">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 24px; height: 7vh">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>新项目方案</el-breadcrumb-item>
            <!-- <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
        </el-breadcrumb>

        <el-card class="box-card">
            <el-form ref="form" :model="form" label-width="80px">
                <div class="head1">
                    <el-form-item>
                        <el-button type="primary" class="buttn" @click="goback" size="medium">取消编辑</el-button>
                        <el-button type="primary" class="buttn" @click="onSubmit" v-if="this.opt==0">立即创建</el-button>
                        <el-button type="primary" class="buttn" @click="generate" v-if="this.opt==1">立即导出</el-button>
                    </el-form-item>
                </div>
                <div>
                    <div style="margin: 0 auto">
                        <div style="text-align: center; margin-top: 20px; font-size: 30px">工程项目开工审批表</div>
                        <el-card class="box-card-sml">
                            <div slot="header" class="clearfix">
                                <span style="font-size: 20px">工程基本信息</span>
                            </div>
                            <div>
                                <el-form-item label="工程编号" label-width="100px">
                                    <el-input v-model="form.gcbh"></el-input>
                                </el-form-item>
                                <el-form-item label="工程名称" label-width="100px">
                                    <el-input v-model="form.gcmc"></el-input>
                                </el-form-item>
                                <el-form-item label="合同金额" label-width="100px">
                                    <el-input v-model="form.htje"></el-input>
                                </el-form-item>
                                <el-form-item label="工程内容" label-width="100px">
                                    <el-input type="textarea" v-model="form.htnr" rows="10"></el-input>
                                </el-form-item>
                                <el-form-item label="施工进场日期" label-width="100px">
                                    <el-input v-model="form.sgjcrq"></el-input>
                                </el-form-item>
                                <el-form-item label="计划工期" label-width="100px">
                                    <el-input v-model="form.jhgq"></el-input>
                                </el-form-item>
                                <span style="font-size: 20px">建设信息</span>
                                <el-divider></el-divider>
                                <el-form-item label="建设单位" label-width="100px">
                                    <el-input v-model="form.jsdw1"></el-input>
                                </el-form-item>
                                <el-row>
                                    <el-col :span="12">
                                        <el-form-item label="项目负责人" label-width="100px">
                                            <el-input v-model="form.jsdw"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="项目联系人" label-width="100px">
                                            <el-input v-model="form.jsdw"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-form-item label="总承包单位" label-width="100px">
                                    <el-input v-model="form.jsdw"></el-input>
                                </el-form-item>
                                <el-row>
                                    <el-col :span="12">
                                        <el-form-item label="项目经理" label-width="100px">
                                            <el-input v-model="form.jsdw"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="项目联系人" label-width="100px">
                                            <el-input v-model="form.jsdw"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-form-item label="总承包单 位 人员组成" label-width="100px">
                                    <el-input v-model="form.jsdw"></el-input>
                                </el-form-item>
                                <el-row>
                                    <el-col :span="12">
                                        <el-form-item label="负责人" label-width="100px">
                                            <el-input v-model="form.jsdw"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="监理单位" label-width="100px">
                                            <el-input v-model="form.jsdw"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="12">
                                        <el-form-item label="监理工程师" label-width="100px">
                                            <el-input v-model="form.jsdw"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="监理工程师" label-width="100px">
                                            <el-input v-model="form.jsdw"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <span style="font-size: 20px">开工具备条件(总承包单位审查)</span>
                                <el-divider></el-divider>
                                <el-form-item label="施工图已经审查--负责人" label-width="270px" style="text-align: left">
                                    <el-input v-model="form.jsdw"></el-input>
                                </el-form-item>
                                <el-form-item label="施工组织设计(或施工方案)已批准--负责人" label-width="270px" style="text-align: left">
                                    <el-input v-model="form.jsdw"></el-input>
                                </el-form-item>
                                <el-form-item label="施工现场“三通一平”已完成--负责人" label-width="270px" style="text-align: left">
                                    <el-input v-model="form.jsdw"></el-input>
                                </el-form-item>
                                <el-form-item label="主要设备和材料已落实--负责人" label-width="270px" style="text-align: left">
                                    <el-input v-model="form.jsdw"></el-input>
                                </el-form-item>
                                <el-form-item label="合同及技术交底--负责人" label-width="270px" style="text-align: left">
                                    <el-input v-model="form.jsdw"></el-input>
                                </el-form-item>
                                <el-form-item label="分包单位资质符合要求--负责人" label-width="270px" style="text-align: left">
                                    <el-input v-model="form.jsdw"></el-input>
                                </el-form-item>
                                <span style="font-size: 20px">申请单位</span>
                                <el-divider></el-divider>
                                <el-form-item label="负责人" label-width="100px">
                                    <el-input v-model="form.jsdw"></el-input>
                                </el-form-item>
                                <el-form-item label="日期" label-width="100px">
                                    <el-date-picker
                                        v-model="value1"
                                        align="right"
                                        type="date"
                                        placeholder="选择日期"
                                        format="yyyy 年 MM 月 dd 日"
                                        :picker-options="pickerOptions"
                                    >
                                    </el-date-picker>
                                </el-form-item>
                                <span style="font-size: 20px">生产管理部</span>
                                <el-divider></el-divider>
                                <el-form-item label="生产管理部意见" label-width="110px">
                                    <el-input v-model="form.jsdw"></el-input>
                                </el-form-item>
                                <el-form-item label="负责人" label-width="110px">
                                    <el-input v-model="form.jsdw"></el-input>
                                </el-form-item>
                                <el-form-item label="日期" label-width="110px">
                                    <el-date-picker
                                        v-model="value1"
                                        align="right"
                                        type="date"
                                        placeholder="选择日期"
                                        format="yyyy 年 MM 月 dd 日"
                                        :picker-options="pickerOptions"
                                    >
                                    </el-date-picker>
                                </el-form-item>
                                <span style="font-size: 20px">主管领导</span>
                                <el-divider></el-divider>
                                <el-form-item label="主管领导意见" label-width="100px">
                                    <el-input v-model="form.jsdw"></el-input>
                                </el-form-item>
                                <el-form-item label="主管领导" label-width="100px">
                                    <el-input v-model="form.jsdw"></el-input>
                                </el-form-item>
                                <el-form-item label="日期" label-width="100px">
                                    <el-date-picker
                                        v-model="value1"
                                        align="right"
                                        type="date"
                                        placeholder="选择日期"
                                        format="yyyy 年 MM 月 dd 日"
                                        :picker-options="pickerOptions"
                                    >
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                        </el-card>
                    </div>
                </div>
                <!-- <div>
                <button @click="generate">导出</button>
            </div> -->
            </el-form>
        </el-card>
    </div>
</template>
<script>
import 'docxtemplater/build/docxtemplater.js';
import 'pizzip/dist/pizzip.js';
import 'pizzip/dist/pizzip-utils.js';
import 'file-saver';
export default {
    data() {
        return {
            opt:3,
            test: [],
            form: {
                gcbh:'',
                gcmc: '',
                htje: '',
                htnr: '',
                sgjcrq: '',
                jhgq: '',
                jsdw1: ''
            },
            wordData: {
                xmmc: '',
                jsdw: '',
                tzje: '',
                xm1: '',
                nl1: '',
                xl1: '',
                zc1: '',
                bh1: '',
                xm2: '',
                nl2: '',
                xl2: '',
                zc2: '',
                bh2: '',
                xm3: '',
                nl3: '',
                xl3: '',
                zc3: '',
                bh3: '',
                xm4: '',
                nl4: '',
                xl4: '',
                zc4: '',
                bh4: '',
                xm5: '',
                nl5: '',
                xl5: '',
                zc5: '',
                bh5: '',
                xm6: '',
                nl6: '',
                xl6: '',
                zc6: '',
                bh6: '',
                xm7: '',
                nl7: '',
                xl7: '',
                zc7: '',
                bh7: ''
            },
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [
                    {
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    },
                    {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    },
                    {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }
                ]
            },
            value1: '',
            value2: ''
        };
    },
    mounted() {
        this.opt= this.$session.get('opt');
        if(this.opt==1){
            this.getForm();
        }
        
    },
    methods: {
        getForm(){
            let arr= this.$session.get('key');
            for (let i = 0; i < arr.length; i++) {
                this.form = {
                    gcbh: arr[i]["gcbh"],
                    gcmc: arr[i]["gcmc"],
                    htje: arr[i]["jsdw1"],
                    htnr: arr[i]["sgjcrq"],
                    sgjcrq: arr[i]["htje"],
                    jhgq: "审批中",
                    jsdw1:arr[i]["jsdw1"],
                };
            }
            this.$set(this.form)
        },
        goback() {
            this.$router.push({
                path: '/zhuye'
            });
        },
        onSubmit() {
            console.log('submitsssss!');
            this.test.push(this.form);
            this.$session.set('key', this.test); //存session
            this.$router.push({
                path: '/zhuye'
            });
        },
        loadFile(url, callback) {
            PizZipUtils.getBinaryContent(url, callback);
        },
        generate() {
            var that = this;
            this.loadFile('test.docx', function (error, content) {
                if (error) {
                    throw error;
                }
                var zip = new PizZip(content);
                var doc = new window.docxtemplater().loadZip(zip);
                doc.setData({
                    ...that.wordData
                });
                try {
                    // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
                    doc.render();
                } catch (error) {
                    var e = {
                        message: error.message,
                        name: error.name,
                        stack: error.stack,
                        properties: error.properties
                    };
                    console.log(
                        JSON.stringify({
                            error: e
                        })
                    );
                    // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
                    throw error;
                }
                var out = doc.getZip().generate({
                    type: 'blob',
                    mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                }); //Output the document using Data-URI
                saveAs(out, '项目经理部组件方案审批.docx');
            });
        },
        // 取消编辑
        cancelEdit() {
            this.isEdit = false;
            this.editForm = this.deepClone(this.currentItem);
        },

        // 查看图片
        inited(viewer) {
            this.$viewer = viewer;
        },
        show() {
            if (!this.images.length) {
                this.$message.error('暂无图片');
                return;
            }
            this.$viewer.show();
        }
    }
};
</script>
<style scoped >
.box-card {
    width: 88%;
    margin-left: 6%;
}
.box-card-sml {
    margin-top: 9px;
    width: 88%;
    margin-left: 6%;
}
.head1 {
    height: 4vh;
    /* background-color: yellow; */
    width: 100%;
}
.buttn {
    float: right;
    margin-right: 25px;
    height: 4.5vh;
    width: 6vw;
}
.el-form-item__label {
    width: 100px;
}
</style>