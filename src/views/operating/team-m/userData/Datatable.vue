<template>
    <div>
        <Collapse v-model="value1" accordion style="line-height: 2.6rem">
            <Panel name="1">
                出院诊断
                <div slot="content">
                    <div>检查时间：<DatePicker type="date" placeholder="Select date" style="width: 200px" v-model="repData.checkTime"></DatePicker></div>
                    <div>登记号：<Input v-model="repData.checkNum" placeholder="请输入数值..." style="width: 300px"></Input></div>
                    <div>首次病程记录/诊断意见：<Input v-model="repData.diagnosis" type="textarea" :autosize="true" placeholder="请输入数值..."></Input></div>
                    <div>冠脉造影结果:<Input v-model="repData.coronaryAngiographyResults" type="textarea" :autosize="true" placeholder="请输入数值..."></Input></div>
                    <div>支架置入个数、部位：<Input v-model="repData.supportCountPosition" type="textarea" :autosize="true" placeholder="请输入数值..."></Input></div>
                </div>
            </Panel>
            <Panel name="2">
                心脏彩超
                <div slot="content">
                    <div>LV：<Input v-model="repData.lv" placeholder="请输入数值..." style="width: 300px"></Input></div>
                    <div>LA：<Input v-model="repData.la" placeholder="请输入数值..." style="width: 300px"></Input></div>
                    <div>RV：<Input v-model="repData.rv" placeholder="请输入数值..." style="width: 300px"></Input></div>
                    <div>RA：<Input v-model="repData.ra" placeholder="请输入数值..." style="width: 300px"></Input></div>
                    <div>EF：<Input v-model="repData.ef" placeholder="请输入数值..." style="width: 300px"></Input></div>
                </div>
            </Panel>
            <Panel name="3">
                生化指标
                <div slot="content">
                    <div>
                        <span class="titleA">丙氨酸氨基转移酶：</span><Input v-model="repData.altValues" placeholder="请输入数值..." style="width: 300px"></Input> IU/L<span class="ckz">（参考值：<{{repData2.altValues_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">门冬氨酸氨基转移酶：</span><Input v-model="repData.astValues" placeholder="请输入数值..." style="width: 300px"></Input> IU/L<span class="ckz">（参考值：<{{repData2.astValues_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">总蛋白：</span><Input v-model="repData.tpValues" placeholder="请输入数值..." style="width: 300px"></Input>g/L<span class="ckz">（参考值：{{repData2.albValues_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">白蛋白：</span><Input v-model="repData.albValues" placeholder="请输入数值..." style="width: 300px"></Input>g/L<span class="ckz">（参考值：{{repData2.alb_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">葡萄糖：</span><Input v-model="repData.glucoseValues" placeholder="请输入数值..." style="width: 300px"></Input>mmol/L<span class="ckz">（参考值：{{repData2.glucose_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">尿素：</span><Input v-model="repData.ureaValues" placeholder="请输入数值..." style="width: 300px"></Input>mmol/L<span class="ckz">（参考值：{{repData2.urea_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">肌酐：</span><Input v-model="repData.creValues" placeholder="请输入数值..." style="width: 300px"></Input>umol/L<span class="ckz">（参考值：{{repData2.cre_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">估算肾小球滤过率：</span><Input v-model="repData.gfrValues" placeholder="请输入数值..." style="width: 300px"></Input>ml/min/1.73m2<span class="ckz">（参考值：{{repData2.gfr_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">尿酸：</span><Input v-model="repData.uricAcidValues" placeholder="请输入数值..." style="width: 300px"></Input>umol/L<span class="ckz">（参考值：{{repData2.uric_acid_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">甘油三脂：</span><Input v-model="repData.tgValues" placeholder="请输入数值..." style="width: 300px"></Input>mmol/L<span class="ckz">（参考值：{{repData2.tg_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">胆固醇：</span><Input v-model="repData.cholesterolValues" placeholder="请输入数值..." style="width: 300px"></Input>mmol/L<span class="ckz">（参考值：{{repData2.cholesterolValues_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">高密度脂蛋白：</span><Input v-model="repData.hdlValues" placeholder="请输入数值..." style="width: 300px"></Input>mmol/L<span class="ckz">（参考值：> {{repData2.hdl_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">低密度脂蛋白：</span><Input v-model="repData.ldlValues" placeholder="请输入数值..." style="width: 300px"></Input>mmol/L<span class="ckz">（参考值：< {{repData2.ldl_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">谷氨酰转肽酶：</span><Input v-model="repData.ygtValues" placeholder="请输入数值..." style="width: 300px"></Input>IU/L<span class="ckz">（参考值：< {{repData2.ygt_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">肌酸激酶：</span><Input v-model="repData.ckValues" placeholder="请输入数值..." style="width: 300px"></Input>IU/L<span class="ckz">（参考值：{{repData2.ck_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">乳酸脱氢酶：</span><Input v-model="repData.ldhValues" placeholder="请输入数值..." style="width: 300px"></Input>IU/L<span class="ckz">（参考值：{{repData2.ldh_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">羟丁酸脱氢酶：</span><Input v-model="repData.hbdhValues" placeholder="请输入数值..." style="width: 300px"></Input>IU/L<span class="ckz">（参考值：{{repData2.hbdh_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">钠：</span><Input v-model="repData.proBnpValues" placeholder="请输入数值..." style="width: 300px"></Input>mmol/L<span class="ckz">（参考值：{{repData2.na_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">钾：</span><Input v-model="repData.kvalues" placeholder="请输入数值..." style="width: 300px"></Input>mmol/L<span class="ckz">（参考值：{{repData2.k_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">氯：</span><Input v-model="repData.clValues" placeholder="请输入数值..." style="width: 300px"></Input>mmol/L<span class="ckz">（参考值：{{repData2.cl_values}}）</span>
                    </div>
                </div>
            </Panel>
            <Panel name="4">
                血常规
                <div slot="content">
                    <div>
                        <span class="titleA">红细胞计数：</span><Input v-model="repData.rbcValues" placeholder="请输入数值..." style="width: 300px"></Input>10^12/L<span class="ckz">（参考值：{{repData2.rbc_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">血红蛋白：</span><Input v-model="repData.hgbValues" placeholder="请输入数值..." style="width: 300px"></Input>g/L<span class="ckz">（参考值：{{repData2.hgb_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">血小板计数：</span><Input v-model="repData.plateletValues" placeholder="请输入数值..." style="width: 300px"></Input>10^9/L<span class="ckz">（参考值：{{repData2.platelet_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">白细胞计数：</span><Input v-model="repData.wbcValues" placeholder="请输入数值..." style="width: 300px"></Input>10^10/L<span class="ckz">（参考值：{{repData2.wbc_values}}）</span>
                    </div>
                </div>
            </Panel>
            <Panel name="5">
                心肌标志物
                <div slot="content">
                    <div>
                        <span class="titleA">肌红蛋白：</span><Input v-model="repData.myoValues" placeholder="请输入数值..." style="width: 300px"></Input>ng/ml<span class="ckz">（参考值：< {{repData2.myo_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">肌酸激酶同功酶MB质量：</span><Input v-model="repData.creatineKinaseIsoenzymesMbValues" placeholder="请输入数值..." style="width: 300px"></Input>ng/ml<span
                            class="ckz">（参考值：< {{repData2.creatine_kinase_isoenzymes_mb_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">尿钠素：</span><Input v-model="repData.proBnpValues" placeholder="请输入数值..." style="width: 300px"></Input>pg/ml<span class="ckz">（参考值：{{repData2.pro_bnp_values}}）</span>
                    </div>
                    <div>
                        <span class="titleA">肌钙蛋白-T：</span><Input v-model="repData.tnTValues" placeholder="请输入数值..." style="width: 300px"></Input>ng/ml<span class="ckz">（参考值：{{repData2.tn_t_values}}）</span>
                    </div>
                </div>
            </Panel>
            <Panel name="6">
                大便隐血
                <div slot="content">
                    <div>
                        <span class="titleA">大便隐血：<Input v-model="repData.stoolOb" placeholder="请输入数值..." style="width: 300px"></Input></span>
                    </div>
                </div>
            </Panel>
            <Panel name="7">
                其他
                <div slot="content">
                    <div>
                        <span class="titleA">其他：<Input v-model="repData.others" placeholder="请输入数值..." style="width: 300px"></Input></span>
                    </div>
                </div>
            </Panel>
        </Collapse>
    </div>
</template>

<script>

    export default {
        name: 'Datatable',
        data () {
            return {
                value1: '1',
                repData2: {
                    altValues_values: 50,
                    astValues_values: 40,
                    albValues_values: '65-85',
                    alb_values: '40-55',
                    glucose_values: '3.9-5.9',
                    urea_values: '3.82-8.86',
                    cre_values: '53-140',
                    gfr_values: '56-122',
                    uric_acid_values: '240-490',
                    tg_values: '0.29-1.83',
                    cholesterolValues_values: '2.8-5.7',
                    hdl_values: 0.9,
                    ldl_values: 4,
                    ygt_values: 60,
                    ck_values: '19-226',
                    ldh_values: '110-220',
                    hbdh_values: '72-182',
                    na_values: '137-147',
                    k_values: '3.5-5.3',
                    cl_values: '99-110',
                    rbc_values: '4.3-5.8',
                    hgb_values: '130-175',
                    platelet_values: '100-300',
                    wbc_values: '3.9-9.5',
                    myo_values: '72',
                    creatine_kinase_isoenzymes_mb_values: '4.94',
                    pro_bnp_values: '0-227',
                    tn_t_values: '0-14',
                },
                repData: {
                    albValues: '',
                    altValues: '',
                    astValues: '',
                    checkNum: '',
                    checkTime: '',
                    cholesterolValues: '',
                    ckValues: '',
                    clValues: '',
                    coronaryAngiographyResults: '',
                    creValues: '',
                    creatineKinaseIsoenzymesMbValues: '',
                    diagnosis: '',
                    ef: '',
                    gfrValues: '',
                    glucoseValues: '',
                    hbdhValues: '',
                    hdlValues: '',
                    hgbValues: '',
                    id: 0,
                    kvalues: '',
                    la: '',
                    ldhValues: '',
                    ldlValues: '',
                    lv: '',
                    myoValues: '',
                    naValues: '',
                    others: '',
                    plateletValues: '',
                    proBnpValues: '',
                    ra: '',
                    rbcValues: '',
                    rv: '',
                    stoolOb: '',
                    supportCountPosition: '',
                    tgValues: '',
                    tnTValues: '',
                    tpValues: '',
                    ureaValues: '',
                    uricAcidValues: '',
                    wbcValues: '',
                    ygtValues: ''
                }
            };
        },
        created () {
            // this.getData();
        },
        methods: {
        }
    };
</script>

<style scoped>

</style>
