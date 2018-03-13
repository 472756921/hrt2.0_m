<template>
    <div class="conversation_content">
        <conversation/>
    </div>
</template>

<script>
    import conversation from '../conversation/conversation';

    export default {
        name: 'q_conversation',
        components: {conversation},
        props: ['listType'],
        created () {
        },
        methods: {
            showIMG () {
                alert(1);
            }
        }
    };
</script>

<style scoped>
    .conversation_content{
        width: 100%;
        border: 1px solid #eee;
        box-shadow: 0 3px 10px 0 #eee;
    }
</style>
