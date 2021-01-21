<template>
    <div id="box">
        <h2>登录</h2>
        <form action>
            <div class="inputbox">
                <input type="text" v-model="username" />
                <label>账号</label>
            </div>
            <div class="inputbox">
                <input type="password" v-model="password" />
                <label>密码</label>
            </div>
            <p>
                <input type="submit" value="确定" @click.prevent="login" />
            </p>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    // mounted() {
    //   this.aa();
    // },
    methods: {
        login() {
            this.$axios({
                method: 'post',
                url: '/api/login',
                data: {
                    gh: this.username,
                    password: this.password
                }
            }).then((res) => {
                console.log(res);
                if (res.data.state == 200 && res.data.data == 1) {
                    this.$router.push({
                        path: 'dashboard'
                    });
                } else if (res.data.state == 200 && res.data.data == 2) {
                    this.$router.push({
                        path: 'jdtj'
                    });
                } else if (res.data.state == 200 && res.data.data == 3){
                    this.$router.push({
                        path: 'jdtj1'
                    });
                }
                else {
                    this.$message.error(res.data.msg);
                }
            });
        },
        aa() {
            this.$router.replace({
                path: '/home'
            });
        }
    }
};
</script>



<style>
body {
    margin: 0;
    padding: 0;
    /* background: url("../assets/images/back.png"); */
    background: url('http://www.yifengzy.com/Application/Home/View/VcEs/pc/default/styles/style1/images/bg.jpg');
    background-size: 100% 100%;
    background-attachment: fixed;
}
#box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background: rgba(0, 0, 0, 0.8);
    padding: 40px;
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}
#box h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
}
#box .inputbox {
    position: relative;
}
#box .inputbox input {
    letter-spacing: 1px;
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 1px solid #fff;
    border-radius: 5px;
}
#box .inputbox label {
    letter-spacing: 1px;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    transition: 0.5s;
}
#box .inputbox input:focus ~ label,
#box .inputbox input:valid ~ label {
    top: -30px;
    left: 0;
    color: #03a9f4;
    font-size: 13px;
}
#box p {
    text-align: center;
    margin: 0;
}
#box p input[type='submit'] {
    background: transparent;
    border: none;
    color: #fff;
    background: #03a9f4;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
}
</style>

