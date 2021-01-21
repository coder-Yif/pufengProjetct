<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" @click="route(2)">日志</el-menu-item>
            <el-menu-item index="2" @click="route(3)">文档</el-menu-item>
            <el-menu-item index="3" @click="route(1)">任务</el-menu-item>
            <el-menu-item index="4" @click="route(4)">甘特图</el-menu-item>
        </el-menu>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    created: function () {
        this.route(2);
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        route(index) {
            if (index == 1) {
                this.$router.push({
                    path: '/task'
                });
            } else if (index == 2) {
                this.$router.push({
                    path: '/logo'
                });
            } else if (index == 3) {
                this.$router.push({
                    path: '/ckxm'
                });
            } else if (index == 4) {
                this.$router.push({
                    path: '/gante'
                });
            } else if (index == 5) {
                this.$router.push({
                    path: '/shetuanappstu'
                });
            } else if (index == 6) {
                this.$router.push({
                    path: '/huodongappstu'
                });
            } else if (index == 7) {
                this.$router.push({
                    path: '/my'
                });
            } else if (index == 8) {
                this.$router.push({
                    path: '/myhuodong'
                });
            } else if (index == 9) {
                this.$router.push({
                    path: '/mangeapp'
                });
            }
        }
    }
};
</script>