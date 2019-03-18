<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu" :default-active='onRoutes' background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
      <template v-for="item in items">
        <el-menu-item :index='item.index' :key='item.index'>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          index: 'HelloWorld',
          title: '系统首页'
        },
        {
          index: 'Page1',
          title: 'Page1'
        },
        {
          index: 'Page2',
          title: 'Page2'
        },
        {
          index: 'Page3',
          title: 'Page3'
        },
        {
          index: 'Page4',
          title: 'Page4'
        },
        {
          index: 'Page5',
          title: 'Page5'
        },
      ]
    }
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '');
    }
  }
}
</script>
<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>