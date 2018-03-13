<style lang="less">
    @import './login.less';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title"><Icon type="log-in"></Icon> 哈瑞特健管师系统</p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
    import Cookies from 'js-cookie';
    import { teamData } from './operating/init_data';
    import {ajaxLogin, Hdetail} from '../interface';

    export default {
        data () {
            return {
                form: {
                    userName: 'string',
                    password: 'string'
                },
                rules: {
                    userName: [
                        {required: true, message: '账号不能为空', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            handleSubmit () {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        this.$ajax.post(ajaxLogin(), {password: this.form.password, username: this.form.userName, rememberMe: true, vcode: 'string'}).then((res) => {
                            if (res.data.status === 200) {
                                Cookies.set('user', this.form.userName);
                                Cookies.set('password', this.form.password);
                                this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
                                if (this.form.userName === 'iview_admin') {
                                    Cookies.set('access', 0);
                                } else {
                                    Cookies.set('access', 1);
                                }
                                this.$ajax.get(Hdetail(), {params: {page: 1, size: 50, teamId: 1}}).then((res) => {
                                    console.log(res.data);
                                    // teamData = res.data.data;
                                    this.$router.push({
                                        name: 'home_index'
                                    });
                                }).catch((hd) => {
                                });
                            } else {
                                this.$Message.error('账号密码错误');
                            }
                        }).catch((hd) => {
                            this.$Message.error('账号密码错误');
                        });
                    }
                });
            },
        }
    };
</script>

<style>

</style>
