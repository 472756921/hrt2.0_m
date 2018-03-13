<template>
    <div>
        <Row class-name="home-page-row1" :gutter="10">
            <Col :md="24" :lg="12" :style="{marginBottom: '10px'}" v-for="(it, i) in teamList" :key="it.tid">
                <Card>
                    <p slot="title" class="card-title">
                        <Icon type="android-checkbox-outline"></Icon>
                        {{it.teamName}}
                    </p>
                    <a type="text" slot="extra" @click.prevent="addNewToDoItem(it)">
                        <Icon type="plus-round"></Icon>
                    </a>
                    <div class="to-do-list-con" style="line-height: 2.4rem; overflow: hidden">
                        <div style="color: #999999;text-align: center" v-if="it.data.length === 0">暂未设置坐诊时间</div>
                        <div v-for="(item, index) in it.data" :key="'todo-item' + (it.data.length - index)" >
                            <Row :gutter="10" style="text-align: left">
                                <Col span="10"><div>坐诊时间：{{item.visitTime}}</div></Col>
                                <Col span="5"><div>人数上限：{{item.num}}</div></Col>
                                <Col span="4"><div>已报名：{{item.actualNum}}</div></Col>
                                <Col span="5"><Button @click="changeDate(it, item)" type="error">修改时间</Button></Col>
                            </Row>
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>

        <Modal v-model="showAddNewTodo" :title="teamNow.team +'坐诊时间设置'" @on-ok="addNew">
            <Row type="flex" justify="center">
                <Input v-model="newToDoItemValue" icon="compose" placeholder="请输入人数上限" style="width: 300px" />
            </Row>
            <br/>
            <Row type="flex" justify="center">
                <DatePicker  type="datetimerange" format="yyyy-MM-dd HH:mm" v-model="newToDoItemDate" placeholder="选择时间" style="width: 300px" :options="options" @on-change="getDate"></DatePicker>
            </Row>
            <Row slot="footer">
                <Button type="primary" @click="addNew">确定</Button>
            </Row>
        </Modal>
    </div>
</template>

<script>
    import * as tables from '../tableData';
    import {teamGroupTime} from '../../../interface';
    export default {
        name: 'setDate',
        data () {
            return {
                teamList: [],
                showAddNewTodo: false,
                newToDoItemValue: '',
                newToDoItemDate: '',
                vdate: [],
                teamNow: '',
                useNum: '',
                options: {
                    disabledDate (date) {
                        return date && date.valueOf() < Date.now();
                    }
                },
            };
        },
        mounted () {
            this.getData();
        },
        methods: {
            getData () {
                this.$ajax.get(teamGroupTime()).then((res) => {
                    tables.teamData = res.data.data;
                    this.init();
                }).catch((hd) => {
                    this.$Message.error('获取失败');
                });
            },
            init () {
                this.teamList = tables.teamData;
            },
            getDate (d) {
                console.log(d);
                this.vdate = d;
            },
            addNew () {
                console.log(this.vdate);
            },
            addNewToDoItem (it) {
                if (it.data.length >= 3) {
                    this.$Message.error('该团队最多设置3个坐诊时间');
                    return false;
                }
                this.teamNow = it;
                this.showAddNewTodo = true;
            },
            changeDate (it, item) {
                this.teamNow = it;
                console.log(item);
                this.newToDoItemDate = item.visitTime;
                this.newToDoItemValue = item.num;
                this.showAddNewTodo = true;
            }
        },
    };
</script>

<style scoped>

</style>