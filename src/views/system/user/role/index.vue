<template>
  <el-main>
    <!-- 搜索 -->
    <el-form :inline="true" :model="listQuery">
      <el-form-item>
        <el-input v-model="listQuery.userName" placeholder="用户名" style="width: 180px;" class="filter-item" @keyup.enter.native="" @blur="" />
      </el-form-item>
      <el-form-item>
        <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-plus" @click="">新增用户</el-button>
        <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="">编辑用户</el-button>
        <el-button class="filter-item" style="margin-left: 10px;" type="success" icon="el-icon-edit" @click="">密码重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格 -->
  </el-main>
</template>
<script>
export default {
  name: 'User',
  data() {
    return {
      listQuery: {
        userName: ''
      },
      list: [
        { username: '刘燃燃', user: 'admin', phone: '17671644839', creattime: '2021-06-06 17:40:00', updatetime: '2021-06-06 17:40:00' },
        { username: '刘燃燃', user: 'admin', phone: '17671644839', creattime: '2021-06-06 17:40:00', updatetime: '2021-06-06 17:40:00' },
        { username: '刘燃燃', user: 'admin', phone: '17671644839', creattime: '2021-06-06 17:40:00', updatetime: '2021-06-06 17:40:00' },
        { username: '刘燃燃', user: 'admin', phone: '17671644839', creattime: '2021-06-06 17:40:00', updatetime: '2021-06-06 17:40:00' }
      ]
    }
  }
}
</script>
<style lang="sss" scoped>

</style>
