<template>
    <div class="conversation">
        <talk ref="talk" :sID="sID"/>
        <sendContent @sendMessage="sendMessages" :sID="sID"/>
    </div>
</template>

<script>
    import talk from './talk';
    import sendContent from './sendContent';

    export default {
        name: 'conversation',
        data () {
            return {
                sID: ''
            };
        },
        created () {
            this.sID = this.$route.params.id;
        },
        components: {talk, sendContent},
        methods: {
            sendMessages (data) {
                this.$refs.talk.newMessage(data, new Date().pattern('yyyy-MM-dd hh:mm:ss'));
            }
        }
    };
</script>

<style scoped>
    .conversation{
        position: relative;
    }
</style>
