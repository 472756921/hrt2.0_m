<style lang="less">
    @import '../../../styles/common.less';
    @import '../../tables/components/table.less';
    .ivu-table .demo-table-noc-row {
        color: #ff6600;
    }
    .ivu-table .demo-table-doing-row {
        color: #2db7f5;
    }
    .chatBOX{
        /*height: 400px;*/
        /*border: 1px solid #eee;*/
        /*border-radius: 5px;*/
        /*box-shadow: 0 0 10px 0 #eee;*/
    }
</style>

<template>
    <div>
        <Card>
            <p slot="title"><Icon type="pinpoint"></Icon> 在线咨询预约</p>
            <Row>
                <Input v-model="searchConName1" icon="search" @on-change="handleSearch1" placeholder="请输入姓名搜索..." style="width: 200px"/>
            </Row>
            <Row class="margin-top-10 searchable-table-con1">
                <Table :columns="columns1" :data="data1" :row-class-name="rowClassName"></Table>
            </Row>
        </Card>

        <Modal v-model="chatF" :title="'与' + userName + '聊天'" :mask-closable="false">
            <conversationC :listType="listType" :messageID="messsageID" v-if="chatF"/>
            <div slot="footer">
                <Button type="warning" size="large" long @click="chatF=false">关闭窗口</Button>
            </div>
        </Modal>

    </div>
</template>

<script>
    import conversationC from './q_conversation';
    import * as tables from '../tableData';
    import * as initData from '../init_data';
    import { userServicies, updateVisit } from '../../../interface';

    const replyButton = (vm, h, currentRow, index) => {
        return h('Button', {
            style: {
                margin: '0 5px'
            },
            props: {
                type: 'success',
                size: 'small',
                placement: 'top'
            },
            on: {
                click: () => {
                    vm.chatF = true;
                    vm.messsageID = currentRow.id;
                    vm.listType = 'back';
                    vm.userName = currentRow.name;
                }
            }
        }, '回复');
    };
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
                    vm.chatF = true;
                    vm.userName = currentRow.name;
                    vm.messsageID = currentRow.id;
                    vm.listType = 'show';
                }
            }
        }, '查看记录');
    };
    const closeButton = (vm, h, currentRow, index) => {
        return h('Poptip', {
            props: {
                confirm: true,
                title: '您确定要结束这条问答消息吗?',
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
            }, '结束服务')
        ]);
    };
    export default {
        name: 'list',
        components: {
            conversationC
        },
        data () {
            return {
                userName: '吴彦祖',
                searchConName1: '',
                chatF: false,
                listType: 'back',
                columns1: [],
                data1: [],
                initTable1: [],
                messsageID: ''
            };
        },
        mounted () {
            this.getData();
        },
        methods: {
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
                                if (item === 'reply' && param.row.status !== 2) {
                                    children.push(replyButton(this, h, currentRowData, param.index));
                                } else if (item === 'close' && param.row.status === 1) {
                                    children.push(closeButton(this, h, currentRowData, param.index));
                                } else if (item === 'check' && param.row.status === 2) {
                                    children.push(checkButton(this, h, currentRowData, param.index));
                                }
                            });
                            return h('div', children);
                        };
                    }
                });
            },
            getData () {
                this.$ajax.get(userServicies(), {params: {page: 1, size: 50, type: 0}}).then((res) => {
                    tables.searchTable1 = res.data.data.list;
                    this.init();
                }).catch((hd) => {
                    this.$Message.error('获取失败');
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
            rowClassName (row, index) {
                if (row.status === 0) {
                    return 'demo-table-noc-row';
                } else if (row.status === 1) {
                    return 'demo-table-doing-row';
                }
                return '';
            }
        }
    };
</script>
