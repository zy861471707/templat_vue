<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="demo-card">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="demo-ruleForm" label-position="left">
              <el-form-item prop="name">
                  <el-input type="text" placeholder="用户名" clearable v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                  <el-input type="password" placeholder="密码" clearable v-model="form.password"></el-input>
              </el-form-item>
              <el-button class="btn" type="primary" @click="onSubmit('form')">登录</el-button>
              <div class="list-footer">
                  <p>忘记秘密</p>
                  <p>注册</p>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
// import cookie from '../servers/cookie';
export default {
  data(){
        return {
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
            this.$refs[formName].validate((valid)=>{
                console.log(valid)
                if(valid){
                  this.http.post("api/login",{
                    username:this.form.name,
                    userpwd:this.form.password
                  }).then(d => {
                    if(d && d.result){
                      console.log(d.data);
                      // this.userInfo = d.data.data;
                      // cookie.set('userid',d.data.data.id);
                      
                      console.log(this.Storage.get('userid'))
                      setTimeout(()=>{
                        console.log(1111)
                        this.$router.push({ path: '/' }) //登录成功之后重定向到首页
                      },1000)
                    }
                  });
                }
            })
        }
    },
    created () {
      console.log(this.Storage)
    }
}
</script>

<style>
.container {
  margin-top: 7%;
  position: relative;
  z-index: 3;
}
.row {
  display: flex;
  justify-content: center;
}
.demo-card {
  background-color: transparent !important;
  border-radius: 8px;
  min-width: 251px;
  margin: 20px 0;
  min-height: 400px;
  padding: 30px;
}
.el-form-item.is-required .el-form-item__label:before {
    content: '';
}
.btn {
  width:100%;
}
.list-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-form-item__content {
  margin-left: 0 !important;;
}
</style>
