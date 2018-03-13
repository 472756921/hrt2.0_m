<template>
    <div class="talk" ref="talk_content" id="msg_end">
        <span v-for="(o, i) in messages" :key="i">
          <byUser v-if="o.type === 1" :message="o"/>
          <byObj v-if="o.type === 0" :message="o"/>
        </span>
    </div>
</template>

<script>
    import byUser from './byUser';
    import byObj from './byObj';
    import {addChatLog, findChatLog} from '../../../interface';

    export default {
        name: 'talk',
        components: {byUser, byObj},
        created () {
            this.sID = this.$route.params.id;
            this.getList();
        },
        data () {
            return {
                sID: '',
                messages: []
            };
        },
        mounted () {
            document.getElementById('msg_end').scrollTop = document.getElementById('msg_end').scrollHeight;
        },
        methods: {
            getList () {
                this.$ajax({
                    method: 'get',
                    url: findChatLog() + '?type=0&messageId=' + this.sID,
                    dataType: 'JSON',
                    contentType: 'application/json;charset=UTF-8',
                }).then((res) => {
                    this.messages = res.data.data;
                }).catch((error) => {
                    this.$Message.error('网络掉了，请您稍后');
                });
            },
            newMessage (data, date) {
                let div = document.getElementById('msg_end');
                this.$ajax({
                    method: 'post',
                    data: {
                        content: data,
                        messageId: this.sID,
                        type: 1
                    },
                    url: addChatLog(),
                    dataType: 'JSON',
                    contentType: 'application/json;charset=UTF-8',
                }).then((res) => {
                }).catch((error) => {
                    this.$Message.error('获取失败');
                });
                this.messages.push({content: data, type: 1, createDate: date});
                setTimeout(() => {
                    div.scrollTop = div.scrollHeight;
                }, 100);
            }
        }
    };
</script>

<style scoped>
    .talk {
        height: 300px;
        padding: .4rem;
        margin-top: 2.3rem;
        margin-bottom: 4rem;
        width: 100%;
        overflow: auto;
    }
</style>
