<template>
    <div>
        <div class="item" v-for="(it, i) in data" :key="i">
            <Row>
                <Col span="4" :span="12">时间：{{it.date}}</Col>
                <Col span="4" :span="12">团队：{{it.teamName}} </Col>
                <Col span="3" :span="12">项目：{{it.serviceName}} </Col>
                <Col span="4" :span="12">状态：<span v-if="it.status==2">已完成</span><span v-if="it.status==1" style="color: #00a800">进行中</span><span v-if="it.status==0" style="color: red">未开始</span></Col>
            </Row>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'userServiceHister',
        data () {
            return {
                data: [
                    { date: '2012/12/12 10:18', serviceName: '在线问诊', teamName: '王勉医生团队', status: 0 },
                    { date: '2012/12/12 10:18', serviceName: '电话预约', teamName: '吴彦祖医生团队', status: 1 },
                    { date: '2012/12/12 10:18', serviceName: '在线问诊', teamName: '刘德华医生团队', status: 1 },
                    { date: '2012/12/12 10:18', serviceName: '门特办理', teamName: '王华医生团队', status: 2 }
                ]
            };
        },
    };
</script>

<style scoped>
    .item{
        margin: 1rem 0;
    }

</style>