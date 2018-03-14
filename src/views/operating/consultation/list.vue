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
            <p slot="title"><Icon type="pinpoint"></Icon> 专家面诊</p>
            <Row>
                <Input v-model="searchConName1" icon="search" @on-change="handleSearch1" placeholder="请输入姓名搜索..." style="width: 200px"/>
            </Row>
            <Row class="margin-top-10 searchable-table-con1">
                <Table :columns="columns1" :data="data1" :row-class-name="rowClassName"></Table>
            </Row>
        </Card>
    </div>
</template>

<script>
    import * as tables from '../tableData';
    import * as initData from '../init_data';
    import { userServicies, updateVisit } from '../../../interface';
    const replyButton = (vm, h, currentRow, index) => {
        return h('Poptip', {
            props: {
                confirm: true,
                title: '您确定要开始这次服务?',
                transfer: true
            },
            on: {
                'on-ok': () => {
                    vm.openService(currentRow.id, index);
                }
            }
        }, [
            h('Button', {
                style: {
                    margin: '0 5px'
                },
                props: {
                    type: 'primary',
                    size: 'small',
                    placement: 'top'
                }
            }, '开始')
        ]);
    };
    const closeButton = (vm, h, currentRow, index) => {
        return h('Poptip', {
            props: {
                confirm: true,
                title: '您确定要完成这次服务?',
                transfer: true
            },
            on: {
                'on-ok': () => {
                    vm.closeQuestion(currentRow.id, index);
                }
            }
        }, [
            h('Button', {
                style: {
                    margin: '0 5px'
                },
                props: {
                    type: 'error',
                    size: 'small',
                    placement: 'top'
                }
            }, '完成')
        ]);
    };
    export default {
        name: 'list',
        data () {
            return {
                searchConName1: '',
                columns1: [],
                data1: [],
                initTable1: []
            };
        },
        methods: {
            getData () {
                this.$ajax.get(userServicies(), {params: {page: 1, size: 50, type: 2}}).then((res) => {
                    tables.searchTable1 = res.data.data.list;
                    this.init();
                }).catch((hd) => {
                    this.$Message.error('获取失败');
                });
            },
            init () {
                this.data1 = this.initTable1 = tables.searchTable1;
                this.columns1 = tables.c(initData.teamData);
                this.columns1.forEach(item => {
                    if (item.key === 'name') {
                        item.render = (h, currentRow) => {
                            return h('Button', {
                                style: {
                                    margin: '0 5px'
                                },
                                props: {
                                    type: 'text',
                                    size: 'small',
                                    placement: 'top'
                                },
                                on: {
                                    click: () => {
                                        let argu = {user_id: currentRow.row.userId};
                                        this.$router.push({
                                            name: 'user_info',
                                            params: argu
                                        });
                                    }
                                }
                            }, currentRow.row.name);
                        };
                    }
                    if (item.handle) {
                        item.render = (h, param) => {
                            let currentRowData = this.data1[param.index];
                            let children = [];
                            item.handle.forEach(item => {
                                if (item === 'reply' && param.row.status === 0) {
                                    children.push(replyButton(this, h, currentRowData, param.index));
                                } else if (item === 'close' && param.row.status === 1) {
                                    children.push(closeButton(this, h, currentRowData, param.index));
                                }
                            });
                            return h('div', children);
                        };
                    }
                });
            },
            changeStatus (status, reback, id) {
                this.$ajax.get(updateVisit(), {params: { id: id, status: status }}).then((res) => {
                    reback();
                }).catch((hd) => {
                    this.$Message.error('失败');
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
                const _this = this;
                this.changeStatus(2, function () { _this.data1[index].status = 2; }, qid);
            },
            openService (qid, index) {
                const _this = this;
                this.changeStatus(1, function () { _this.data1[index].status = 1; _this.$Message.success({ content: '您开始了对' + _this.data1[index].name + '的服务，请尽快与患者确认', duration: 3 }); }, qid);
            },
            rowClassName (row, index) {
                if (row.status === 0) {
                    return 'demo-table-noc-row';
                } else if (row.status === 1) {
                    return 'demo-table-doing-row';
                }
                return '';
            }
        },
        mounted () {
            this.getData();
        }
    };
</script>
