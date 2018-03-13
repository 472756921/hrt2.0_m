<template>
    <div>
        <div class="item" v-for="(it, i) in data" :key="it.date">
            <Row>
                <Col span="6" :sm="12">订单号：{{it.num}}</Col>
                <Col span="6" :sm="12">下单时间：{{it.date}}</Col>
                <Col span="6" :sm="12">商品名：{{it.name}} </Col>
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
    export default {
        name: 'user-expenses-record',
        data () {
            return {
                data: [
                    { date: '2012/12/12 10:18', price: 385.6, name: '小米空气净化器', status: 0, num: 12229192, sendNum: '', company: '', sendDate: '' },
                    { date: '2012/12/15 08:45', price: 2399, name: '荣耀8智能手机', status: 1, num: 12229192, sendNum: 19292838434, company: '顺丰', sendDate: '2012/12/12 17:00' },
                    { date: '2012/12/16 11:35', price: 300, name: '小木鱼暖手器', status: 1, num: 12229192, sendNum: 19292838434, company: '韵达', sendDate: '2012/12/12 17:00' },
                    { date: '2012/12/22 14:45', price: 1380, name: 'LG高清显示器', status: 1, num: 12229192, sendNum: 19292838434, company: '中通', sendDate: '2012/12/12 17:00' }
                ]
            };
        },
    };
</script>

<style scoped>
    .item{
        margin: 1rem 0;
        border-bottom: 1px solid #eee;
    }
</style>