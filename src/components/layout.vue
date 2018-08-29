<template>
  <div class="mian_layout">
    <el-container>
      <el-header class="header">
        <p class="header_title">{{msg}}</p>
        <div class="user_info">
          <p>
            <i class="iconfont icon-02"></i>
            张三
            <i :class="icon_class" style="padding-left:10px;cursor: pointer;padding-right: 10px;" @click="iconClick"></i>
          </p>
          <ul class="user_select" v-if="userShow">
            <li>个人信息</li>
            <li>退出登录</li>
          </ul>
        </div>
      </el-header>
      <el-container>
        <el-aside class="aside">
          <nav-menu></nav-menu>
        </el-aside>
        <el-main class="main">
          <p>这是主页面</p>
        </el-main>
      </el-container>      
    </el-container>
  </div>
</template>

<script>
import NavMenu from '@/components/navmenu';
export default {
  components: {
    NavMenu
  },
  data () {
    return {
      msg: 'Vue前端后台模板',
      icon_class:'el-icon-caret-bottom',
      userShow:false
    }
  },
  methods: {
    iconClick(){
      if(this.icon_class === 'el-icon-caret-bottom'){
        this.icon_class = 'el-icon-caret-top';
        this.userShow = true;
      }else{
        this.icon_class = 'el-icon-caret-bottom';
        this.userShow = false;
      }
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
    background-color: #3399CC;
    color: #fff;
    .header_title {
      text-align: left;
      font-size: 18px; 
    }
    .user_info {
      position: relative;
      .user_select {
        position: absolute;
        background-color: #fff;
        color: #333333;
        width: 85px;
        padding-left: 10px;
        padding-right: 10px;  
        margin: 0;
        border: 1px solid #eeeeee;
        border-radius: 5px;
        right: 0;
        top: 42px;
        li {
          list-style: none;
          margin: 6px auto;
          cursor: pointer;
        }
      }
    }
    
  }
  .aside {
    width: 250px !important;
    background-color: rgb(48, 65, 86);
    color: rgb(191, 203, 217);
  }
  .main {
    background-color: #fff;
    color: #333333;
  }
}
</style>
