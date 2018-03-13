<template>
    <div class="conversation">
        <talk ref="talk" :messageID="messageID"/>
        <sendContent @sendMessage="sendMessages" :messageID="messageID"/>
    </div>
</template>

<script>
    import talk from './talk';
    import sendContent from './sendContent';
    import dateTr from './dateTr';

    export default {
        name: 'conversation',
        props: ['messageID'],
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
