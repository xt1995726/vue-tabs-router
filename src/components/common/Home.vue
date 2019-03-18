<template>
  <div class="wrapper">
    <v-sidebar></v-sidebar>
    <div class="content-box">
      <v-tags></v-tags>
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import vSidebar from './Sidebar.vue'
import vTags from './Tags.vue'
import bus from './bus'
export default {
  data() {
    return {
      tagsList: []
    }
  },
  components: {
    vSidebar,
    vTags
  },
  created() {
    bus.$on('tags', msg => {
      let arr = [];
      for (let i = 0; i < msg.length; i++) {
        msg[i].name && arr.push(msg[i].name)
      }
      this.tagsList = arr;
    });
  }

}
</script>