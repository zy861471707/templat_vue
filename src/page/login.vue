<template>
    <div>
      <div class="container">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="demo-ruleForm" label-position="left">
          <el-form-item prop="name">
              <el-input type="text" placeholder="用户名" clearable v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item prop="password">
              <el-input type="password" placeholder="密码" clearable v-model="form.password"></el-input>
          </el-form-item>
          <el-button class="btn" type="primary" :loading="loading_btn" @click="onSubmit('form')">登录</el-button>
          <div class="list-footer">
              <p>忘记秘密</p>
          </div>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
  data(){
        return {
            loading_btn:false,
            form:{
                name:'',
                password:''
            },
            rules:{
                name:[
                    {required:true,message:"请输入用户名",trigger:"blur"}
                ],
                password:[
                    {required:true,message:"密码不能为空",trigger:"blur"},
                    { min: 6, max: 18, message: '最小为6位，最大为18位', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        onSubmit(formName){
          this.loading_btn = true;
          this.$refs[formName].validate((valid)=>{
              if(valid){
                this.http.post("api/login",{
                  username:this.form.name,
                  userpwd:this.form.password
                }).then(d => {
                  if(d && d.result){
                    console.log(d.data);                    
                    this.Storage.set('userid',d.data.id);
                    setTimeout(()=>{                                        
                      this.$router.push({ path: '/' }) //登录成功之后重定向到首页
                      this.loading_btn = false;
                    },1000)
                  }
                });
              }else{
                this.loading_btn = false;
              }
          })
        }
    }
}
</script>

<style lang="less">
.container {
  width: 50%;
  margin: 0 auto;
  padding-top: 10%;
  .el-form-item{
    margin: 0 auto;
    padding-bottom: 22px;
    width: 50%;
  }
  .el-form-item .is-required .el-form-item__label:before {
    content: '';
  }
  .el-form-item__content {
    margin-left: 0 !important;
  }
  .btn {
    width:50%;
  }
  .list-footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
