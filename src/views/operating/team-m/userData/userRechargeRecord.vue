<template>
    <div>
        <div class="item" v-for="(it, i) in data" :key="i">
            <Row>
                <Col span="6" :sm="12">时间：{{it.date}}</Col>
                <Col span="6" :sm="12">金额：{{it.price}} </Col>
            </Row>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'user-recharge-record',
        data () {
            return {
                data: [
                    { date: '2012/12/12 10:18', price: 100 },
                    { date: '2012/12/12 10:18', price: 300 },
                    { date: '2012/12/12 10:18', price: 1000 },
                    { date: '2012/12/12 10:18', price: 500 }
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