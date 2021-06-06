<template>
  <div class="logo">
    <transition name="fade">
      <span v-if="isCollapse" key="0" class="logo_title is-bold " :class="{'is-text':!type,'is-img':type}">
        <template v-if="type">
          <img :src="website.logo" width="40" height="40">
        </template>
        <template v-else>
          {{ website.logo }}
        </template>
      </span>
    </transition>
    <transition-group name="fade">
      <template v-if="!isCollapse">
        <span key="1" class="logo_title is-bold"> {{ generateSkinTitle('common','title') }} </span>
        <!-- <span key="2" class="logo_subtitle">111</span> -->
      </template>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { generateSkinTitle } from '@/utils/i18n'
export default {
  name: 'Logo',
  props: ['isCollapse'],
  data() {
    return {}
  },
  created() {},
  computed: {
    ...mapGetters(['website']),
    type: function(val) {
      return this.website.logo.indexOf('static') !== -1
    }
  },
  methods: {
    generateSkinTitle
  }
}
</script>

<style scoped="scoped" lang="scss">
div{
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  }
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-active {
  transition: opacity 2.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.logo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 230px;
  height: 64px;
  line-height: 64px;
  background: rgb(105, 89, 205);
  color: #fdfdfd;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  overflow: hidden;
  box-sizing: border-box;
  cursor:pointer

}
.logo_title {
  padding: 0 5px 0 0;
  color: #42b983;
  font-size: 20px;
  &.is-bold {
    font-weight: 700;
  }
}
.is-text {
  position: absolute;
  top: 0;
  // left: 20px;
}
.is-img {
  position: absolute;
  top: 10px;
  left: 10px;
}
.logo_subtitle {
  font-size: 16px;
  padding-top: 5px;
}
</style>
