<template>
  <div class="mian_layout">
    <el-container>
      <el-header class="header">
        <p class="header_title">{{msg}}</p>
        <div>
          <p>张三</p>
        </div>
      </el-header>
      <el-container>
        <el-aside class="aside">
          <p>这是侧边栏</p>
        </el-aside>
        <el-main class="main">
          <p>这是主页面</p>
        </el-main>
      </el-container>      
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Vue前端后台模板'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.mian_layout {
  .header {
    display: flex;
    justify-content: space-between;
    background-color: #3366FF;
    color: #fff;
    .header_title {
      text-align: left;
      font-size: 18px;      
    }
  }
  .aside {
    background-color: rgb(48, 65, 86);
    color: rgb(191, 203, 217);
  }
  .main {
    background-color: #fff;
    color: #333333;
  }
}
</style>
