<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <el-menu-item>
                <i class="el-icon-menu"></i>
                <span slot="title" @click="route(2)" v-if="flag(2)">进度提交</span>
                <span slot="title" @click="route(4)" v-if="flag(3)">进度提交</span>
            </el-menu-item>
            <el-menu-item>
                <i class="el-icon-menu"></i>
                <span slot="title" @click="route(1)" v-if="flag(2)">绩效查看</span>
                <span slot="title" @click="route(5)" v-if="flag(3)">绩效查看</span>
            </el-menu-item>
            <el-menu-item>
                <i class="el-icon-menu"></i>
                <span slot="title" @click="route(3)">事务申请</span>
            </el-menu-item>
            <el-menu-item>
                <i class="el-icon-menu"></i>
                <span slot="title" @click="route(10)">审批结果</span>
            </el-menu-item>
            <el-menu-item>
                <i class="el-icon-menu"></i>
                <span slot="title" @click="route(8)">修改密码</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
export default {
    created: function () {
    // this.route(1);
  },
    methods: {
        flag(index) {
            var strcookie = document.cookie; //获取cookie字符串
            var arrcookie = strcookie.split('; '); //分割
            // var f=false;
            //遍历匹配
            for (var i = 0; i < arrcookie.length; i++) {
                var arr = arrcookie[i].split('=');
                if (arr[0] == "flag") {
                    console.log(arr[1]);
                    console.log(arr[1]==index)
                    // if(arr[1]==2){
                    //     f=true
                    // }
                    // if(arr[1]==3){
                    //     this.route(4);
                    // }
                    return arr[1]==index;
                    
                }
            }
            return '';
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        route(index) {
            if (index == 1) {
                this.$router.push({
                    path: '/jxck'
                });
            } else if (index == 2) {
                this.$router.push({
                    path: '/jdtj'
                });
            } else if (index == 3) {
                this.$router.push({
                    path: '/swsq'
                });
            } else if (index == 8) {
                this.$router.push({
                    path: '/xgmm2'
                });
            } else if (index == 9) {
                this.$router.push({
                    path: '/tabs'
                });
            } else if (index == 4) {
                this.$router.push({
                    path: '/jdtj1'
                });
            } else if (index == 10) {
                this.$router.push({
                    path: '/spgl2'
                });
            } else if (index == 5) {
                this.$router.push({
                    path: '/jxck1'
                });
            }
        }
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
