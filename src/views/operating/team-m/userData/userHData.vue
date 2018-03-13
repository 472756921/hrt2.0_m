<template>
    <div>
        <div class="item" v-for="(it, i) in data" :key="it.testTime">
            <Row>
                <Col :lg="5" :md="7">测量时间：{{it.testTime}}</Col>
                <Col :md="4" :sm="6" v-if="it.highPressure != null">高压：{{it.highPressure}} mmHg</Col>
                <Col :md="4" :sm="6" v-if="it.lowPressure != null">低压：{{it.lowPressure}} mmHg</Col>
                <Col :md="4" :sm="6" v-if="it.bloodSugar != null">血糖：{{it.bloodSugar}} mmol/L</Col>
                <Col :md="4" :sm="6" v-if="it.heartRate != null">心率：{{it.heartRate}} 次/分</Col>
            </Row>
        </div>
    </div>
</template>

<script>
    import { userHeaData } from '../../tableData';

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
            },
        },
    };
</script>

<style scoped>
    .item{
        margin: .8rem 0;
        border-bottom: 1px solid #eee;
    }
</style>