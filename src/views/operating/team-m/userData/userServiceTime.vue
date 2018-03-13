<template>
    <div class="teamBalance">
        <Button type="warning" icon="alert" @click="addTime">添加次数</Button>
        <div class="item"  v-for="(it, i) in data" :key="i">
            <div class="title">{{it.teamName}}</div>
            <Row>
                <Col span="4" :sm="8">在线咨询：<span class="main_color">{{it.onlineNum}}</span> 次</Col>
                <Col span="4" :sm="8">电话预约：<span class="main_color">{{it.phoneNum}}</span> 次</Col>
                <Col span="4" :sm="8">专家面诊：<span class="main_color">{{it.expertNum}}</span> 次</Col>
                <Col span="4" :sm="8">视频预约：<span class="main_color">{{it.videoNum}}</span> 次</Col>
                <Col span="4" :sm="8">门特办理：<span class="main_color">{{it.mentorNum}}</span> 次</Col>
            </Row>
        </div>

        <Modal v-model="modal1" title="添加服务次数（请谨慎操作，添加后不可撤销）" @on-ok="ok">
            <Select v-model="addTeamID" style="width:200px">
                <Option v-for="item in data" :value=item.id :key="item.id">{{ item.teamName }}</Option>
            </Select>
            <Select v-model="addServiceID" style="width:200px">
                <Option v-for="item in serVice" :value=item.id :key="item.id">{{ item.serviceName }}</Option>
            </Select>
            <br/>
            <br/>
            <Input v-model="addvalue" placeholder="请输入添加次数" style="width: 200px"></Input>
        </Modal>

    </div>
</template>

<script>
    import {getCustomerServiceDetial} from '../../../../interface';

    export default {
        name: 'user-service-time',
        data () {
            return {
                modal1: false,
                addvalue: '',
                addTeamID: '',
                addServiceID: '',
                serVice: [
                    {serviceName: '在线咨询', id: 1},
                    {serviceName: '电话预约', id: 2},
                    {serviceName: '专家面诊', id: 3},
                    {serviceName: '视频预约', id: 4},
                    {serviceName: '门特办理', id: 5}
                ],
                data: [
                    {team: 'null', id: 1, onlineNum: 3, phoneNum: 2, expertNum: 1, videoNum: 1, mentorNum: 0}
                ]
            };
        },
        methods: {
            addTime () {
                this.modal1 = true;
            },
            ok () {
                this.$Message.success('添加成功');
            }
        },
        created () {
            this.$ajax.get(getCustomerServiceDetial(), {params: {customerId: this.$route.params.user_id }}).then((res) => {
                this.data = res.data.data;
            }).catch((hd) => {
                this.$Message.error('获取失败');
            });
        },
    };
</script>

<style scoped>
    .item .title{
        font-size: 1rem;
        font-weight: bold;
    }
    .item{
        margin: .6rem 0;
    }
</style>