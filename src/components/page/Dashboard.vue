<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" style="height: 217px">
                    <div class="user-info">
                        <img src="../../assets/img/img.jpg" class="user-avator" alt />
                        <div class="user-info-cont">
                            <div class="user-info-name">{{ name }}</div>
                            <div>{{ role }}</div>
                        </div>
                    </div>
                    <div class="user-info-list">个性签名</div>
                    <!-- <div class="user-info-list">
                        上次登录时间：
                        <span>2019-11-01</span>
                    </div>
                    <div class="user-info-list">
                        上次登录地点：
                        <span>东莞</span>
                    </div> -->
                </el-card>
                <el-card shadow="hover" style="height: 287px">
                    <div slot="header" class="clearfix">
                        <span>项目概况</span>
                    </div>
                    资金预警 <el-progress :percentage="71.3" color="#42b983"></el-progress>成本预警
                    <el-progress :percentage="24.1" color="#f1e05a"></el-progress>工期预警
                    <el-progress :percentage="13.7"></el-progress>质量预警
                    <el-progress :percentage="5.9" color="#f56c6c"></el-progress>环境预警
                    <el-progress :percentage="16.5" color="#f56c6c"></el-progress>
                </el-card>
            </el-col>
            <el-col :span="16">
                <!-- <el-row :gutter="20" class="mgb20">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-lx-people grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">1234</div>
                                    <div>用户访问量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-lx-notice grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">321</div>
                                    <div>系统消息</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-lx-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">5000</div>
                                    <div>数量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row> -->
                <!-- <el-card shadow="hover" style="height:403px;">
                    <div slot="header" class="clearfix">
                        <span>待办事项</span>
                        <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
                    </div>
                    <el-table :show-header="false" :data="todoList" style="width:100%;">
                        <el-table-column width="40">
                            <template slot-scope="scope">
                                <el-checkbox v-model="scope.row.status"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column>
                            <template slot-scope="scope">
                                <div
                                    class="todo-item"
                                    :class="{'todo-item-del': scope.row.status}"
                                >{{scope.row.title}}</div>
                            </template>
                        </el-table-column>
                        <el-table-column width="60">
                            <template>
                                <i class="el-icon-edit"></i>
                                <i class="el-icon-delete"></i>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card> -->
                <el-card shadow="hover" style="height: 527px">
                    <el-collapse accordion>
                        <el-collapse-item>
                            <template slot="title"> 项目组织管理 </template>
                            <div>
                                <Vtable :datas="this.tableData"></Vtable>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="项目经理月度报告">
                            <div>
                                <Vtable :datas="this.tableData1"></Vtable>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="项目合同管理">
                            <div>
                                <Vtable :datas="this.tableData2"></Vtable>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="项目物资及设备管理">
                            <div>
                                <Vtable :datas="this.tableData3"></Vtable>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="项目分包管理">
                            <div>
                                <Vtable :datas="this.tableData4"></Vtable>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="项目工期管理">
                            <Vtable :datas="this.tableData5"></Vtable>
                        </el-collapse-item>
                        <el-collapse-item title="项目成本管理">
                            <div>
                                <Vtable :datas="this.tableData6"></Vtable>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="项目质量管理">
                            <div>
                                <Vtable :datas="this.tableData7"></Vtable>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="项目安全与职业健康管理">
                            <div>
                                <Vtable :datas="this.tableData8"></Vtable>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="项目部收尾">
                            <div>
                                <Vtable :datas="this.tableData9"></Vtable>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </el-card>
            </el-col>
        </el-row>
        <el-row style="width: 100%">
            <el-col style="width: 100%">
                <el-card shadow="hover">
                    <div class="container">
                        <Gantt class="left-container" :tasks="tasks"></gantt>
                    </div>
                    <!-- <schart ref="line" class="schart" canvasId="line" :options="options2"></schart> -->
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Schart from 'vue-schart';
import bus from '../common/bus';
import Vtable from '../common/table.vue';
import Gantt from '../common/gante.vue';
export default {
    name: 'dashboard',
    data() {
        return {
            tasks: {
                data: [
                    {
                        text: 'Test001-001', //任务名
                        start_date: '19-04-2017', //开始时间
                        id: 1, //任务id
                        duration: 13, //任务时长，从start_date开始计算
                        progress: 0.6, //任务完成情况，进度
                        parent: 2, //父任务ID
                        user: '李四', //成员
                        planned_end: '19-04-2017', //计划开始时间
                        planned_start: '10-04-2017', //计划结束时间
                        show: false,
                        open: true, //默认是否打开
                        type: 'project' // gantt.config.types.milestone为里程碑类型
                        // project为项目任务类型，也就是摘要任务，
                        // task为普通任务类型
                    },
                    { id: 2, text: 'Task #1', start_date: '15-04-2017', duration: 3, progress: 0.6 },
                    { id: 3, text: 'Task #2', start_date: '18-04-2017', duration: 3, progress: 0.4 }
                ],
                links: [
                    // links为任务之间连接的线
                    { id: 1, source: 1, target: 2, type: '0' } //source根源 target目标 也就是从id为1的指向id为2的
                    //type:'0'是从1任务完成到2任务开始，type:'1'是1任务开始到2任务开始，
                    //type:'2'是从1任务完成到2任务完成，type:'3'是从1任务开始到2任务完成
                ]
            },
            tableData2: [
                {
                    ID: '01',
                    Name: '项目商务月度报告',
                    Status: '待审核',
                    Date: '2020-09-01'
                }
            ],
            tableData3: [
                {
                    ID: '01',
                    Name: '经理月度报告',
                    Status: '待审核',
                    Date: '2020-09-01'
                }
            ],
            tableData: [
                {
                    ID: '01',
                    Name: '项目经理部组织方案审批表',
                    Status: '待审核',
                    Date: '2020-09-24'
                }
            ]
        };
    },
    components: {
        Schart,
        Vtable,
        Gantt
    },
    computed: {
        role() {
            return this.name === 'admin' ? '超级管理员' : '普通用户';
        }
    },   
    methods: {
        changeDate() {
            const now = new Date().getTime();
            this.data.forEach((item, index) => {
                const date = new Date(now - (6 - index) * 86400000);
                item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            });
        }
    }
};
</script>


<style scoped>
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 15px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
</style>
