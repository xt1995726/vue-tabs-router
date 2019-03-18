<template>
  <div class="tags" v-if="showTags">
    <ul>
      <li class="tags-li" v-for="(item, index) in tagsList" :key="index" :class="{'active': isActive(item.path)}">
        <router-link :to="item.path" class="tags-li-title">
          {{item.title}}
        </router-link>
        <span class="tags-li-icon" @click="closeTags(index)"><i class="el-icon-close"></i></span>
      </li>
    </ul>
    <div class="tags-close-box">
      <el-dropdown @command='handleTags'>
        <el-button size="mini" type="primary">
          标签选项<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu size="small" slot="dropdown">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import bus from './bus';
export default {
  data() {
    return {
      tagsList: []
    }
  },
  computed: {
    showTags() {
      return this.tagsList.length > 0;
    }
  },
  methods: {
    isActive(path) {
      return path === this.$route.fullPath;
    },
    // dropmenu 跳转方法
    handleTags(command) {
      command === 'other' ? this.closeOther() : this.closeAll();
    },
    // 设置标签
    setTags(route) {
      const isExist = this.tagsList.some(item => {
        return item.path === route.fullPath;
      })
      if (!isExist) {
        if (this.tagsList.length >= 8) {
          this.tagsList.shift();
        }
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.matched[1].components.default.name
        })
      }
      bus.$emit('tags', this.tagsList);
    },
    // 关闭单个标签
    closeTags(index) {
      const delItem = this.tagsList.splice(index, 1)[0];
      const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];
      if (item) {
        delItem.path === this.$route.fullPath && this.$router.push(item.path);
      } else {
        this.$router.push('/');
      }
    },
    // 关闭其他标签
    closeOther() {
      const curItem = this.tagsList.filter(item => {
        return item.path === this.$route.fullPath;
      });
      this.tagsList = curItem;
    },
    // 关闭所有标签
    closeAll() {
      this.tagsList = [];
      this.$router.push('/');
    }
  },
  created() {
    this.setTags(this.$route);
  },
  watch: {
    $route(newValue, oldValue) {
      this.setTags(newValue);
    }
  }
}
</script>
<style>
.tags {
  position: relative;
  height: 30px;
  overflow: hidden;
  background-color: #fff;
  padding-right: 120px;
  box-shadow: 0 5px 10px #ddd;
}
.tags ul {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.tags-li {
  float: left;
  margin: 3px 5px 2px 3px;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  height: 23px;
  line-height: 23px;
  border: 1px solid #e9eaec;
  cursor: pointer;
  background: #fff;
  padding: 0 5px 0 12px;
  vertical-align: middle;
  color: #0f6fd6;
  transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  -webkit-transition: all 0.3s ease-in;
}
.tags-li:not(.active):hover {
  background: #f8f8f8;
}
.tags-li.active {
  color: #0f6fd6;
  background-color: #eaf5ff;
  border: 1px solid #b6dcff;
}
.tags-li-title {
  float: left;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 5px;
  color: #666;
}
.tags-li.active .tags-li-title {
  color: #0f6fd6;
}
.tags-close-box {
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  width: 110px;
  height: 30px;
  background-color: #fff;
  box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
</style>
