<style lang="less">
    @import '../../../styles/common.less';
    @import '../../tables/components/table.less';
    .ivu-table .demo-table-noc-row {
        color: #ff6600;
    }
    .ivu-table .demo-table-doing-row {
        color: #2db7f5;
    }
</style>

<template>
    <div>
        <Card>
            <p slot="title"><Icon type="pinpoint"></Icon> 用户列表</p>
            <Row>
                <Input v-model="searchConName1" icon="search" @on-change="handleSearch1" placeholder="请输入姓名搜索..." style="width: 200px"/>
                <Select v-model="model1" style="width:200px" @on-change="onSelectedDrug">
                    <Option v-for="item in teamList" :value="item.id" :key="item.id">{{ item.teamName }}</Option>
                </Select>
            </Row>
            <Row class="margin-top-10 searchable-table-con1">
                <Table :columns="columns1" :data="data1"></Table>
            </Row>
        </Card>
    </div>
</template>

<script>
    import * as tables from '../tableData';
    import * as initData from '../init_data';
    import { usersList, Hdetail } from '../../../interface';

    const checkButton = (vm, h, currentRow, index) => {
        return h('Button', {
            style: {
                margin: '0 5px'
            },
            props: {
                type: 'primary',
                size: 'small',
                placement: 'top'
            },
            on: {
                click: () => {
                    let argu = { user_id: currentRow.id };
                    vm.$router.push({
                        name: 'user_info',
                        params: argu
                    });
                }
            }
        }, '详情');
    };
    export default {
        name: 'userList',
        data () {
            return {
                model1: '',
                searchConName1: '',
                columns1: [],
                data1: [],
                initTable1: [],
                teamList: []
            };
        },
        methods: {
            getData () {
                this.$ajax.get(Hdetail()).then((res) => {
                    initData.teamData = res.data.data.data;
                    if (res.data.data.data.length !== 0) {
                        this.model1 = res.data.data.data[0].id;
                    }
                    this.$ajax.get(usersList(), {params: {page: 1, size: 50, teamId: res.data.data.data[0].id}}).then((res) => {
                        initData.userData = res.data.data.list;
                        this.init();
                    }).catch((hd) => {
                        this.$Message.error('获取失败');
                    });
                }).catch((hd) => {
                });
            },
            init () {
                this.data1 = this.initTable1 = initData.userData;
                this.teamList = initData.teamData;
                this.columns1 = tables.columns2;
                this.columns1.forEach(item => {
                    if (item.handle) {
                        item.render = (h, param) => {
                            let currentRowData = this.data1[param.index];
                            let children = [];
                            item.handle.forEach(item => {
                                if (item === 'check') {
                                    children.push(checkButton(this, h, currentRowData, param.index));
                                }
                            });
                            return h('div', children);
                        };
                    }
                });
            },
            search (data, argumentObj) {
                let res = data;
                let dataClone = data;
                for (let argu in argumentObj) {
                    if (argumentObj[argu].length > 0) {
                        res = dataClone.filter(d => {
                            return d[argu].indexOf(argumentObj[argu]) > -1;
                        });
                        dataClone = res;
                    }
                }
                return res;
            },
            handleSearch1 () {
                this.data1 = this.initTable1;
                this.data1 = this.search(this.data1, {name: this.searchConName1});
            },
            closeQuestion (qid, index) {
                this.data1[index].status = 2;
                alert('关闭了id：' + qid + '的问题');
            },
            openService (qid, index) {
                this.data1[index].status = 1;
                this.$Message.success({ content: '您开始了对' + this.data1[index].name + '的服务，请尽快联系医生进行通话', duration: 3 });
                alert('开始了id：' + qid + '的问题');
            },
            onSelectedDrug () {
                this.$ajax.get(usersList(), {params: {page: 1, size: 50, teamId: this.model1}}).then((res) => {
                    initData.userData = res.data.data.list;
                    this.init();
                }).catch((hd) => {
                    this.$Message.error('获取失败');
                });
            }
        },
        mounted () {
            this.getData();
        }
    };
</script>
