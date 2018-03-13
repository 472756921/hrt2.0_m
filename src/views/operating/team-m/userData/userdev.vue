<template>
    <div>
        <div class="item" v-for="(it, i) in data" :key="it.date">
            <Row>
                <Col span="8">绑定时间：{{it.createDate}}</Col>
                <Col span="8">编号：{{it.couldId}} </Col>
                <Col span="8">类型：<span v-if="it.type==2">血糖仪</span><span v-if="it.type==1">血压计</span> </Col>
            </Row>
        </div>
    </div>
    
</template>

<script>
    import {equipment} from '../../../../interface';

    export default {
        name: 'user-dev',
        data () {
            return {
                data: [
                    { createDate: '2012/12/12 10:18', couldId: 123876, type: 1 },
                    { createDate: '2012/12/12 10:18', couldId: 123876, type: 2 }
                ]
            };
        },
        created () {
            this.$ajax.get(equipment(), {params: {customerId: this.$route.params.user_id}}).then((res) => {
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