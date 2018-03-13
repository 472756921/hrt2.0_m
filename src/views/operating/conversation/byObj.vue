<template>
    <div class="message">
        <Avatar icon="person" size="large" style="float: left"/>
        <div class="talkinfo doctalkinfo" v-html="message.content"></div>
        <div class="date">{{message.createDate}}</div>
    </div>
</template>

<script>
    export default {
        name: 'by-obj',
        props: ['message']
    };
</script>

<style scoped>
    .talkinfo {
        max-width: 65%;
        margin: 0 1rem;
        word-break: break-all;
        background-color: #D3DCE6;
        padding: .6rem;
        border-radius: .4rem;
        font-size: .8rem;
        box-shadow: -2px 2px 10px #666;
    }

    .doctalkinfo {
        float: left;
        color: #000;
    }

    .doctalkinfo:before {
        margin-left: -1.2rem;
        float: left;
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-width: 10px 10px 10px 0;
        border-style: solid;
        border-color: transparent #D3DCE6 transparent transparent;
    }

    .message {
        overflow: auto;
        margin-bottom: .6rem;
    }

    .date {
        text-align: center;
        font-size: .6rem;
        width: 100%;
        line-height: 2rem;
        color: #fff;
        overflow: auto;
    }
</style>
