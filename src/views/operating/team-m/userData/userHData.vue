<template>
    <div>
        <div class="item" v-for="(it, i) in data" :key="it.testTime">
            <Row>
                <Col :lg="5" :md="7">测量时间：{{it.test_time}}</Col>
                <Col :md="4" :sm="6" v-if="it.high_pressure != null">高压：{{it.high_pressure}} mmHg</Col>
                <Col :md="4" :sm="6" v-if="it.low_pressure != null">低压：{{it.low_pressure}} mmHg</Col>
                <Col :md="4" :sm="6" v-if="it.blood_sugar != null">血糖：{{it.blood_sugar}} mmol/L</Col>
                <Col :md="4" :sm="6" v-if="it.heart_rate != null">心率：{{it.heart_rate}} 次/分</Col>
            </Row>
        </div>
    </div>
</template>

<script>
    import { userHeaData } from '../../tableData';
    import {healthdata} from '../../../../interface';

    export default {
        name: 'user-h-data',
        data () {
            return {
                data: []
            };
        },
        created () {
            this.init();
        },
        methods: {
            init () {
                this.data = userHeaData;
                this.$ajax.get(healthdata(), {params: {customerId: this.$route.params.user_id}}).then((res) => {
                    this.data = res.data.data;
                }).catch((hd) => {
                    this.$Message.error('获取失败');
                });
            }
        }
    };
</script>

<style scoped>
    .item{
        margin: .8rem 0;
        border-bottom: 1px solid #eee;
    }
</style>