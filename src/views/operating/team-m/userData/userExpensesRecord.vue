<template>
    <div>
        <div class="item" v-for="(it, i) in data" :key="it.date">
            <Row>
                <Col span="6" :sm="12">订单号：{{it.orderOn}}</Col>
                <Col span="6" :sm="12">下单时间：{{it.crateDate}}</Col>
                <Col span="6" :sm="12">商品名：{{it.serviceName}} </Col>
                <Col span="6" :sm="12">金额：{{it.price}} </Col>
                <Col span="6" :sm="12">状态：<span v-if="it.status==1" style="color: green">已发货</span><span v-if="it.status==0" style="color: red">未发货</span></Col>
                <Col span="6" :sm="12">发货时间：{{it.sendDate}} </Col>
                <Col span="6" :sm="12">快递公司：{{it.company}} </Col>
                <Col span="6" :sm="12">快递单号：{{it.sendNum}} </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    import {getCustomerHistoryOrder} from '../../../../interface';
    export default {
        name: 'user-expenses-record',
        data () {
            return {
                data: []
            };
        },
        created () {
            this.$ajax.get(getCustomerHistoryOrder(), {params: {customerId: this.$route.params.user_id, type: 2, page: 1, size: 100}}).then((res) => {
                this.data = res.data.data.list;
            }).catch((hd) => {
                this.$Message.error('获取失败');
            });
        },
    };
</script>

<style scoped>
    .item{
        margin: 1rem 0;
        border-bottom: 1px solid #eee;
    }
</style>