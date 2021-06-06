<template>
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="!item.hidden&&item.children">

      <router-link
        v-if="hasOneShowingChildren(item.children) && !item.children[0].children&&!item.alwaysShow"
        :key="item.children[0].name"
        :to="item.path+'/'+item.children[0].path"
      >
        <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
          <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon" />
          <span v-if="item.children[0].meta&&item.children[0].meta.title" slot="title">{{ generateTitle(item.children[0].meta.title) }}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :key="item.name" :index="item.name||item.path">
        <template slot="title">
          <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon" />
          <span v-if="item.meta&&item.meta.title" slot="title">{{ generateTitle(item.meta.title) }}</span>
        </template>

        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item v-if="child.children&&child.children.length>0" :key="child.path" :is-nest="true" class="nest-menu" :routes="[child]" />

          <router-link v-else :key="child.name" :to="item.path+'/'+child.path">
            <el-menu-item :index="item.path+'/'+child.path">
              <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon" />
              <span v-if="child.meta&&child.meta.title" slot="title">{{ generateTitle(child.meta.title) }}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>
  </div>
</template>

<script>
import { generateTitle } from '@/utils/i18n'
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  created() {
    for (const o in this.routes) {
      const obj = this.routes[o]
      if (obj.path.indexOf('myiframe') >= 0) {
        obj.children[0].path = 'urlPath?src=https://www.baidu.com'
      }
    }
  },
  methods: {
    generateTitle,
    hasOneShowingChildren(children) {
      const showingChildren = children.filter(item => {
        return !item.hidden
      })
      if (showingChildren.length === 1) {
        return true
      }
      return false
    }
  }
}
</script>
