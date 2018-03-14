<template>
    <div class="conversation">
        <talk ref="talk" :messageID="messageID"/>
        <sendContent @sendMessage="sendMessages" :messageID="messageID" v-if="listType=='back'"/>
    </div>
</template>

<script>
    import talk from './talk';
    import sendContent from './sendContent';
    import dateTr from './dateTr';

    export default {
        name: 'conversation',
        props: ['messageID', 'listType'],
        components: {talk, sendContent},
        methods: {
            sendMessages (data) {
                this.$refs.talk.newMessage(data, '');
            }
        }
    };
</script>

<style scoped>
    .conversation{
        position: relative;
    }
</style>
