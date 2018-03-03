<template>
  <div class="layout">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu default-active="startIndex" class="el-menu-vertical-layout" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <template v-for="(parentItem, index) in urlData">
        <el-submenu index="parentItem.path" :key="index">
          <template slot="title">
            <span slot="title">{{parentItem.title}}</span>
          </template>
          <template v-for="(childrenItem,index) in parentItem.children" v-if="pathItem.children.length > 0">
            <el-submenu index="parentItem.path" :key="index">
              <template slot="title">
                <span slot="title">{{parentItem.title}}</span>
              </template>
              <el-menu-item index="childrenItem.path" :key="index">{{ childrenItem.title }}</el-menu-item>
            </el-submenu>
          </template>
        </el-submenu>
      </template> 
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    urlData: { type: Array, required: true },
    startIndex: { type: String, required: true }
  },
  data() {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
