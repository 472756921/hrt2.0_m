<template>
    <div>
        <Card>
            <p slot="title" class="card-title">
                <Icon type="folder"></Icon> 用户信息
            </p>
            <Row style="overflow: auto;">
                <Col :md="2" :lg="1" :sm="2"><div><Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" /></div></Col>
                <Col :md="4" :lg="2" :sm="5"><div>姓名：{{this.user.realName}}</div></Col>
                <Col :md="3" :lg="2" :sm="3"><div>年龄：{{this.user.gender}}</div></Col>
                <Col :md="2" :lg="2" :sm="3"><div>性别：{{this.user.gender}}</div></Col>
                <Col :md="5" :lg="3" :sm="7"><div>电话：{{this.user.phone}}</div></Col>
                <Col :md="8" :lg="5" :sm="11"><div>身份证号码：{{this.user.idNumber}}</div></Col>
                <Col :md="5" :lg="3" :sm="7"><div>健康豆余额：{{this.user.money}}</div></Col>
                <Col :md="5" :lg="3" :sm="6"><div>紧急联系人：{{this.user.urgentName}}</div></Col>
                <Col :md="5" :lg="3" :sm="7"><div>号码：{{this.user.urgentPhone}}</div></Col>
                <Col :md="6" :lg="4" :sm="8"><div>团队：{{this.user.gender}}</div></Col>
            </Row>
            <br/>
            <Button type="primary" size="small" icon="ios-telephone" v-if="!isPC"><a :href="'tel:'+this.user.phone" style="color: #fff">呼叫用户</a></Button>
            <Button type="success" size="small" icon="ios-telephone" v-if="!isPC"><a :href="'tel:'+this.user.urgentPhone" style="color: #fff">呼叫紧急联系人</a></Button>
            <Button type="error" size="small" icon="social-yen" @click="czckF=true">充值</Button>
        </Card>
        <br/>
        <Card>
            <p slot="title" class="card-title">
                <Icon type="document-text"></Icon> 用户记录
            </p>
            <Collapse v-model="value1">
                <Panel name="1">
                    生理指标（基础）
                    <userHData slot="content"></userHData>
                </Panel>
                <Panel name="2">
                    充值记录
                    <userRechargeRecord slot="content"></userRechargeRecord>
                </Panel>
                <Panel name="3">
                    购买记录
                    <userExpensesRecord slot="content"></userExpensesRecord>
                </Panel>
                <Panel name="4">
                    服务余额
                    <userServiceTime slot="content"></userServiceTime>
                </Panel>
                <Panel name="5">
                    服务记录
                    <userServiceHister slot="content"></userServiceHister>
                </Panel>
                <Panel name="6">
                    用户云设备
                    <userdev slot="content"></userdev>
                </Panel>
                <Panel name="8">
                    用户重点指标数据
                    <KeyIndicators  slot="content"></KeyIndicators>
                </Panel>
            </Collapse>
        </Card>
        <br/>
        <Card>
            <p slot="title" class="card-title">
                <Icon type="stats-bars"></Icon> 生理数据图表
            </p>
            <userinfoTable></userinfoTable>
        </Card>

        <Modal v-model="czckF" title="用户充值" @on-ok="czgn">
            <p>请核对后，填写充值金额为该用户充值健康豆<span style="color: red">（充值后不可撤销）</span></p>
            <Input v-model="moeny" placeholder="请填写健康豆数量" style="width: 300px"></Input>
        </Modal>

    </div>
</template>

<script>
    import userinfoTable from './userData/userinfoTable';
    import userHData from './userData/userHData';
    import userExpensesRecord from './userData/userExpensesRecord';
    import userRechargeRecord from './userData/userRechargeRecord';
    import userServiceTime from './userData/userServiceTime';
    import userdev from './userData/userdev';
    import userServiceHister from './userData/userServiceHister';
    import Datatable from './userData/Datatable';
    import KeyIndicators from './userData/KeyIndicators';
    import {userdetail} from '../../../interface';

    export default {
        name: 'userinfo',
        components: {
            userinfoTable,
            userHData,
            userExpensesRecord,
            userRechargeRecord,
            userServiceTime,
            userdev,
            userServiceHister,
            Datatable,
            KeyIndicators
        },
        data () {
            return {
                moeny: '',
                value1: '',
                isPC: false,
                czckF: false,
                user: ''
            };
        },
        created () {
            var ua = navigator.userAgent.toLowerCase() || window.navigator.userAgent.toLowerCase();
            // 判断user-agent
            let isWX = /MicroMessenger/i.test(ua); // 微信端
            let isIOS = /(iPhone|iPad|iPod|iOS)/i.test(ua); // 苹果家族
            let isAndroid = /(android|nexus)/i.test(ua); // 安卓家族
            let isWindows = /(Windows Phone|windows[\s+]phone)/i.test(ua); // 微软家族
            let isBlackBerry = /BlackBerry/i.test(ua); // 黑莓家族
            if (!isWX && !isIOS && !isAndroid && !isWindows && !isBlackBerry) {
                this.isPC = true;
            }
            this.getData();
        },
        methods: {
            czgn () {
                alert(this.moeny);
            },
            getData () {
                this.$ajax.get(userdetail(), {params: {customerId: this.$route.params.user_id}}).then((res) => {
                    this.user = res.data.data;
                }).catch((hd) => {
                    this.$Message.error('获取失败');
                });
            }
        }
    };
</script>

<style scoped>

</style>