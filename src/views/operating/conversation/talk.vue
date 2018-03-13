<template>
    <div class="talk" ref="talk_content" id="msg_end">
        <span v-for="(o, i) in messages" :key="i">
          <byUser v-if="o.type === 0" :message="o"/>
          <byObj v-if="o.type === 1" :message="o"/>
        </span>
    </div>
</template>

<script>
    import byUser from './byUser';
    import byObj from './byObj';
    import {addChatLog, findChatLog} from '../../../interface';

    export default {
        name: 'talk',
        props: ['messageID'],
        components: {byUser, byObj},
        created () {
            this.sID = this.messageID;
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
                    url: findChatLog() + '?type=0&visitServiceId=' + this.sID,
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
                this.$ajax.post(addChatLog(), {content: data, messageId: this.sID, type: 0}).then((res) => {
                    this.messages.push({content: data, type: 0, createDate: date});
                    setTimeout(() => {
                        div.scrollTop = div.scrollHeight;
                    }, 100);
                }).catch((hd) => {
                    this.$Message.error('发送失败');
                });
            }
        }
    };
</script>

<style scoped>
    .talk {
        height: 400px;
        padding: .4rem;
        width: 100%;
        overflow: auto;
    }
</style>
