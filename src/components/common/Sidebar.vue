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
              <span slot="title" @click="route(1)">工程管理</span>
            </el-menu-item>
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <span slot="title" @click="route(2)">农民工管理</span>
            </el-menu-item>
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <span slot="title" @click="route(3)">物资管理</span>
            </el-menu-item>
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <span slot="title" @click="route(6)">消息提醒</span>
            </el-menu-item>
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <span slot="title" @click="route(7)">发布通知</span>
            </el-menu-item>
            <el-menu-item >
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
    route(index) {
      if (index == 1) {
        this.$router.push({
          path: "/zhuye",
        });
      } else if (index == 2) {
        this.$router.push({
          path: "/staff",
        });
      } else if (index == 3) {
        this.$router.push({
          path: "/material",
        });
      } else if (index == 5) {
        this.$router.push({
          path: "/jxgl",
        });
      } else if (index == 6) {
        this.$router.push({
          path: "/spgl",
        });
      } else if (index == 7) {
        this.$router.push({
          path: "/fbtz",
        });
      } else if (index == 8) {
        this.$router.push({
          path: "/xgmm",
        });
      } else if (index == 9) {
        this.$router.push({
          path: "/tabs",
        });
      }
    },
  },
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
