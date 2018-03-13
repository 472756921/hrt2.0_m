<template>
    <div>
        <div class="item" v-for="(it, i) in data" :key="i">
            <Row>
                <Col span="6" :sm="12">时间：{{it.crateDate}}</Col>
                <Col span="6" :sm="12">金额：{{it.price}} </Col>
            </Row>
        </div>
    </div>
    
</template>

<script>
    import {getCustomerHistoryOrder} from '../../../../interface';
    export default {
        name: 'user-recharge-record',
        data () {
            return {
                data: []
            };
        },
        created () {
            this.$ajax.get(getCustomerHistoryOrder(), {params: {customerId: this.$route.params.user_id, type: 3, page: 1, size: 100}}).then((res) => {
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
    }

</style>