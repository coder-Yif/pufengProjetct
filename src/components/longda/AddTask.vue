<template>
    <div style="margin-top: 3vh">
        <el-page-header @back="goBack" content="任务信息" style="margin-top: 15px"> </el-page-header>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span style="font-size: 20px" v-if="opt1 == 0">添加新任务</span>
                <span style="font-size: 20px" v-if="opt1 == 1">查看新任务</span>
                <span style="font-size: 20px" v-if="opt1 == 2">编辑新任务</span>
            </div>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="任务编号" label-width="100px">
                    <el-input v-model="form.rwbh"></el-input>
                </el-form-item>
                <el-form-item label="任务名称" label-width="100px">
                    <el-input v-model="form.rwmc"></el-input>
                </el-form-item>
                <el-form-item label="建设单位" label-width="100px">
                    <el-input v-model="form.jsdw"></el-input>
                </el-form-item>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="开始日期" label-width="100px">
                            <el-date-picker v-model="form.start" value-format="yyyy-MM-dd" type="datetime" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="结束日期" label-width="100px">
                            <el-date-picker v-model="form.end" type="datetime" value-format="yyyy-MM-dd" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="项目经理" label-width="100px">
                    <el-input v-model="form.xmjl"></el-input>
                </el-form-item>
                <el-form-item label="经理电话" label-width="100px">
                    <el-input v-model="form.jldh"></el-input>
                </el-form-item>
                <el-form-item label="合同额度" label-width="100px">
                    <el-input v-model="form.hted"></el-input>
                </el-form-item>
                <el-form-item label="状态 " label-width="100px">
                    <el-input v-model="form.zt"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
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
            opt1: 0,
            task: [],
            form: {
                hted: "50万",
                jldh: "123-4567-8899",
                xmjl: "陈经理",
                zt:'进行中',
                rwbh:" B001",
                rwmc: "道路施工",
                jsdw: '分包单位一',
                    start: '2020-05-27',
                    end: '2020-06-27',
                    sgzt: '进行中',
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
        this.opt1 = this.$session.get('opt1');
        if (this.opt1 != 0) {
            this.getForm();
        }
    },
    methods: {
        getForm() {
            let arr = this.$session.get('task');
            for (let i = 0; i < arr.length; i++) {
                this.form = {
                    hted: arr[i]['hted'],
                    jldh: arr[i]['jldh'],
                    xmjl: arr[i]['xmjl'],
                    zt: arr[i]['zt'],
                    rwbh: arr[i]['rwbh'],
                    rwmc: arr[i]['rwmc'],
                    jsdw: arr[i]['jsdw'],
                    start: arr[i]['start'],
                    end: arr[i]['end'],
                    sgzt: arr[i]['zt']
                };
            }
            this.$set(this.form);
        },
        goBack() {
            this.$router.push({
                path: '/task'
            });
        },
        onSubmit() {
            console.log('submit!');
            this.task.push(this.form);
            this.$session.set('task', this.task); //存session
            this.$router.push({
                path: '/task'
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
    margin-top: 8px;
    width: 88%;
    margin-left: 6%;
}
.box-card-sml {
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
    height: 4vh;
    width: 6vw;
}
.el-form-item__label {
    width: 100px;
}
</style>