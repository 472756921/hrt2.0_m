<template>
    <div style="width:100%;height:400px;" id="service_request_con"></div>
</template>

<script>
import echarts from 'echarts';
import {healthdata} from '../../../../interface';

let time = [];
let bloodSugar = [];
let heartRate = [];
let highPressure = [];
let lowPressure = [];

export default {
    name: 'serviceRequests',
    created() {
        time = [];
        bloodSugar = [];
        heartRate = [];
        highPressure = [];
        lowPressure = [];
        this.$ajax.get(healthdata(), {params: {customerId: this.$route.params.user_id}}).then((res) => {
            res.data.data.map((it, i) => {
                time.push(it.test_time);
                bloodSugar.push(it.blood_sugar);
                heartRate.push(it.heart_rate);
                highPressure.push(it.high_pressure);
                lowPressure.push(it.low_pressure);
            });
            this.createTable();
        }).catch((hd) => {
            this.$Message.error('获取失败');
        });
    },
    methods: {
        createTable () {
            const option = {
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['高压', '低压', '血糖', '心率'],
                    top: 20,
                    orient: 'horizontal'
                },
                grid: {
                    left: '1rem',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: time,
                    axisLabel: {
                        rotate: 0,
                    }
                },
                yAxis: {
                    type: 'value'
                },
                dataZoom: [
                    {
                        type: 'slider',
                        show: true,
                        start: 0,
                        end: 100
                    },
                    {
                        type: 'inside',
                        show: true,
                        start: 0,
                        end: 100
                    }
                ],
                series: [
                    {
                        name: '高压',
                        type: 'line',
                        stack: '高压',
                        data: highPressure,
                    },
                    {
                        name: '低压',
                        type: 'line',
                        stack: '低压',
                        data: lowPressure,
                    },
                    {
                        name: '血糖',
                        type: 'line',
                        stack: '血糖',
                        data: bloodSugar,
                    },
                    {
                        name: '心率',
                        type: 'line',
                        stack: '心率',
                        data: heartRate,
                    },
                ]
            };
            const serviceRequestCharts = echarts.init(document.getElementById('service_request_con'));
            serviceRequestCharts.setOption(option);
            window.addEventListener('resize', function () {
                serviceRequestCharts.resize();
            });
        }
    },
    mounted () {
    }
};
</script>