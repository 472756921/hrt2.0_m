<template>
    <div>
        <div class="item" v-for="(it, i) in data" :key="i">
            <Row>
                <Col span="4" :span="12">时间：{{it.visiteDate}}</Col>
                <Col span="4" :span="12">团队：{{it.teamName}} </Col>
                <Col span="3" :span="12">项目：{{it.serviceName}} </Col>
                <Col span="4" :span="12">状态：<span v-if="it.status==2">已完成</span><span v-if="it.status==1" style="color: #00a800">进行中</span><span v-if="it.status==0" style="color: red">未开始</span></Col>
            </Row>
        </div>
    </div>
    
</template>

<script>
    import {getServiceDetial} from '../../../../interface';

    export default {
        name: 'userServiceHister',
        data () {
            return {
                data: [
                ]
            };
        },
        created () {
            this.$ajax.get(getServiceDetial(), {params: { customerId: this.$route.params.user_id }}).then((res) => {
                this.data = res.data.data;
            }).catch((hd) => {
                this.$Message.error('获取失败');
            });
        },
    };
</script>

<style scoped>
    .item{
        margin: 1rem 0;
    }

</style>