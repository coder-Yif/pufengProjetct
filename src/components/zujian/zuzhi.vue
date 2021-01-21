<template>
    <div style="margin-top: 3vh;">
        <el-breadcrumb
            separator-class="el-icon-arrow-right"
            style="font-size: 24px;height: 7vh;"
        >
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>新项目方案</el-breadcrumb-item>
            <!-- <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
        </el-breadcrumb>

        <el-card class="box-card">
            <div class="head1">
                <el-button type="primary" class="buttn">提交</el-button>
                <el-button type="primary" class="buttn">保存</el-button>
                <el-button type="primary" class="buttn" @click="generate">导出</el-button>
            </div>
            <form action method="post">
                <div>
                    <div style="margin:0 auto;">
                        <div style="text-align:center;margin-top:20px;font-size: 30px;">新项目方案</div>
                        <table
                            class="table table-striped table-bordered"
                            align="center"
                            valign="center"
                        >
                            <tr>
                                <td class="column">项目名称</td>
                                <td class="value" colspan="5">
                                    <input type="text" v-model="wordData.xmmc" />
                                </td>
                            </tr>
                            <tr>
                                <td class="column">建设单位</td>
                                <td class="value" colspan="2">
                                    <input type="text" v-model="wordData.jsdw" />
                                </td>
                                <td class="column">投资金额</td>
                                <td class="value" colspan="2">
                                    <input type="text" v-model="wordData.tzje" />
                                </td>
                            </tr>
                            <!-- <tr>
                                <td
                                    class="column"
                                    colspan="6"
                                    style="text-align: left;font-size: 20px;padding-left: 22px;background-color: white;"
                                >项目经理部人员名单</td>
                            </tr>
                            <tr>
                                <td class="column">岗位名称</td>
                                <td class="column">姓名</td>
                                <td class="column">年龄</td>
                                <td class="column">学历</td>
                                <td class="column">职称</td>
                                <td class="column">
                                    职业证书
                                    <br />及编号
                                </td>
                            </tr>
                            <tr>
                                <td class="column">项目负责人</td>
                                <td class="column">
                                    <input type="text" v-model="wordData.xm1" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.nl1" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.xl1" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.zc1" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.bh1" />
                                </td>
                            </tr>
                            <tr>
                                <td class="column">项目经理</td>
                                <td class="column">
                                    <input type="text" v-model="wordData.xm2" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.nl2" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.xl2" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.zc2" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.bh2" />
                                </td>
                            </tr>
                            <tr>
                                <td class="column">技术负责人</td>
                                <td class="column">
                                    <input type="text" v-model="wordData.xm3" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.nl3" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.xl3" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.zc3" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.bh3" />
                                </td>
                            </tr>
                            <tr>
                                <td class="column">质量负责人</td>
                                <td class="column">
                                    <input type="text" v-model="wordData.xm4" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.nl4" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.xl4" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.zc4" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.bh4" />
                                </td>
                            </tr>
                            <tr>
                                <td class="column">安全负责人</td>
                                <td class="column">
                                    <input type="text" v-model="wordData.xm7" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.nl7" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.xl7" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.zc7" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.bh7" />
                                </td>
                            </tr>
                            <tr>
                                <td class="column">民管员</td>
                                <td class="column">
                                    <input type="text" v-model="wordData.xm5" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.nl5" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.xl5" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.zc5" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.bh5" />
                                </td>
                            </tr>
                            <tr>
                                <td class="column">预算员</td>
                                <td class="column">
                                    <input type="text" v-model="wordData.xm6" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.nl6" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.xl6" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.zc6" />
                                </td>
                                <td class="column">
                                    <input type="text" v-model="wordData.bh6" />
                                </td>
                            </tr>

                            <tr>
                                <td class="value" colspan="6"></td>
                            </tr>
                            <tr style="height: 17vh;">
                                <td class="value" colspan="3">
                                    <p style="text-align: left;font-size: 18px;">申请单位(签字盖章)：</p>
                                    <br />
                                    <br />
                                    <p
                                        style="text-align: right;font-size: 18px;"
                                    >年&emsp;&emsp;月&emsp;&emsp;日</p>
                                </td>
                                <td class="value" colspan="3">
                                    <p style="text-align: left;font-size: 18px;">生产管理部(签字盖章)：</p>
                                    <br />
                                    <br />
                                    <p
                                        style="text-align: right;font-size: 18px;"
                                    >年&emsp;&emsp;月&emsp;&emsp;日</p>
                                </td>
                            </tr> -->
                            <tr style="height: 17vh;">
                                <td class="value" colspan="6">
                                    <p
                                        style="text-align: left;font-size: 18px"
                                    >主管领导意见(签字)：</p>
                                    <br />
                                    <br />
                                    <p
                                        style="text-align: right;font-size: 18px;"
                                    >年&emsp;&emsp;月&emsp;&emsp;日</p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </form>
            <!-- <div>
                <button @click="generate">导出</button>
            </div> -->
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
            wordData: {
                xmmc:'',
                jsdw:'',
                tzje:'',
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
            }
        };
    },

    methods: {
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
        onSubmit() {
            console.log('submit!');
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
    width: 70%;
    margin-left: 15%;
}
.el-form--inline .el-form-item__label {
    float: left;
}
.demo-form-inline {
    height: 55px;
    float: right;
}
.table tr {
    height: 6vh;
}

td input {
    height: 60px;
    font-family: 'Arial Normal', 'Arial';
    text-align: center;
    font-size: 19px;
    width: 100%;
    border: none;
}
.table {
    border-collapse: collapse;
    border-spacing: 0;
    background-color: transparent;
    display: table;
    width: 100%;
    max-width: 100%;
    width: 800px;
    margin: 0 auto;
}
.table td {
    width: 39px;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    font-family: 'Arial Normal', 'Arial';
    color: #333333;
}
.table-bordered {
    border: 1px solid #ddd;
}
* {
    margin: 0px;
    padding: 0px;
}
.column {
    border: 1px solid #333;
    background: #f1f1f1;
}
.value {
    width: 70px;
    height: 30px;
    border: 1px solid #333;
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
    width: 4vw;
}
</style>