<template>
    <div class="KeyIndicators" ref="KeyIndicators">
        <Tabs value="name1">
            <TabPane label="血常规" name="name1">
                <Row :gutter="10">
                    <Col span="12" v-for="(it, i) in data.data_1" :key="i">
                    <img :src="'http://118.31.38.185'+it.imageUrl" width="100%" @click="show(it.imageUrl)"/></Col>
                </Row>
                <div v-if="data.data_1.length==0" class="noData">暂无数据</div>
                <!--<uploadImg :dlength="data.data_1.length" @getImgUrl="imgUpSuccess" :type="1" :num="5"/>-->
            </TabPane>
            <TabPane label="生化指标" name="name2">
                <Row :gutter="10">
                    <Row :gutter="10">
                        <Col span="12" v-for="(it, i) in data.data_2" :key="i">
                        <img :src="'http://118.31.38.185'+it.imageUrl" width="100%" @click="show(it.imageUrl)"/></Col>
                    </Row>
                    <div v-if="data.data_2.length==0" class="noData">暂无数据</div>
                </Row>
                <!--<uploadImg :dlength="data.data_2.length" @getImgUrl="imgUpSuccess" :type="2" :num="5"/>-->
            </TabPane>
            <TabPane label="心脏彩超" name="name3">
                <Row :gutter="10">
                    <Row :gutter="10">
                        <Col span="12" v-for="(it, i) in data.data_3" :key="i">
                        <img :src="'http://118.31.38.185'+it.imageUrl" width="100%" @click="show(it.imageUrl)"/></Col>
                    </Row>
                    <div v-if="data.data_3.length==0" class="noData">暂无数据</div>
                </Row>
                <!--<uploadImg :dlength="data.data_3.length" @getImgUrl="imgUpSuccess" :type="3" :num="5"/>-->
            </TabPane>
            <TabPane label="心肌标志物" name="name4">
                <Row :gutter="10">
                    <Row :gutter="10">
                        <Col span="12" v-for="(it, i) in data.data_4" :key="i">
                        <img :src="'http://118.31.38.185'+it.imageUrl" width="100%" @click="show(it.imageUrl)"/></Col>
                    </Row>
                    <div v-if="data.data_4.length==0" class="noData">暂无数据</div>
                </Row>
                <!--<uploadImg :dlength="data.data_4.length" @getImgUrl="imgUpSuccess" :type="4" :num="5"/>-->
            </TabPane>
            <TabPane label="大便常规" name="name5">
                <Row :gutter="10">
                    <Row :gutter="10">
                        <Col span="12" v-for="(it, i) in data.data_5" :key="i">
                        <img :src="'http://118.31.38.185'+it.imageUrl" width="100%" @click="show(it.imageUrl)"/></Col>
                    </Row>
                    <div v-if="data.data_5.length==0" class="noData">暂无数据</div>
                </Row>
                <!--<uploadImg :dlength="data.data_5.length" @getImgUrl="imgUpSuccess" :type="5" :num="5"/>-->
            </TabPane>
            <TabPane label="冠脉造影" name="name6">
                <Row>
                    <Row :gutter="10">
                        <Col span="12" v-for="(it, i) in data.data_6" :key="i">
                        <img :src="'http://118.31.38.185'+it.imageUrl" width="100%" @click="show(it.imageUrl)"/></Col>
                    </Row>
                    <div v-if="data.data_6.length==0" class="noData">暂无数据</div>
                </Row>
                <!--<uploadImg :dlength="data.data_6.length" @getImgUrl="imgUpSuccess" :type="6" :num="5"/>-->
            </TabPane>
            <TabPane label="表格" name="name7">
                <Datatable/>
            </TabPane>
        </Tabs>

        <Modal v-model="showF" width="360">
            <p slot="header" style="color:#368ec6;text-align:center;font-size: 1rem">
                <Icon type="information-circled"></Icon>
                <span>查看详情</span>
            </p>
            <div>
                <img :src="ADIMG" width="100%"/>
            </div>
            <div slot="footer">
                <Button type="primary" size="large" long @click="showF=false">关闭</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    // import {getByCustomerCustomerHasImages, addCustomerHasImage} from '../../../../interface';
    // import uploadImg from '../../../../components/upload';
    import Datatable from './Datatable.vue';

    export default {
        name: 'key-indicators',
        components: {
            Datatable
            // uploadImg
        },
        data () {
            return {
                ADIMG: '',
                showF: false,
                data: {
                    data_1: [],
                    data_2: [],
                    data_3: [],
                    data_4: [],
                    data_5: [],
                    data_6: []
                }
            };
        },
        mounted () {
            this.getData(1);
            this.getData(2);
            this.getData(3);
            this.getData(4);
            this.getData(5);
            this.getData(6);
        },
        methods: {
            getData (value) {
            //     this.$ajax({
            //         method: 'get',
            //         url: getByCustomerCustomerHasImages() + value,
            //         dataType: 'JSON',
            //         contentType: 'application/json;charset=UTF-8',
            //     }).then((res) => {
            //         this.makeData(res.data.data, value);
            //     }).catch((error) => {
            //         this.$Message.error('获取失败');
            //     });
            },
            makeData (datas, num) {
                // let name = 'data_';
                this.data['data_' + num] = datas;
            },
            imgUpSuccess (id, url, type) {
                // this.$ajax({
                //     method: 'post',
                //     url: addCustomerHasImage(),
                //     data: {
                //         imageId: id,
                //         type: type
                //     },
                //     dataType: 'JSON',
                //     contentType: 'application/json;charset=UTF-8',
                // }).then((res) => {
                //     this.$Message.success('上传成功');
                //     this.data['data_' + type].push({id: id, imageUrl: url});
                // }).catch((error) => {
                //     this.$Message.error('获取失败');
                // });
            },
            show (url) {
                this.ADIMG = 'http://118.31.38.185' + url;
                this.showF = true;
            }
        }
    };
</script>


<style scoped>
    .KeyIndicators {
        padding: .4rem;
        color: #000;
    }
    .KeyIndicators .title {
        font-weight: 600;
        color: #000;
        text-align: center;
        font-size: 1.2rem;
        padding: .6rem 0;
    }
    .KeyIndicators .content {
        width: 100%;
    }
    .noData{
        text-align: center;
    }
</style>
