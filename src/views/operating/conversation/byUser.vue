<template>
    <div class="message">
        <Avatar icon="person" size="large" style="float: right"/>
        <div class="talkinfo usertalkinfo" v-html="message.content"></div>
        <div class="date">{{message.createDate}}</div>
    </div>
</template>

<script>
    export default {
        name: 'by-user',
        props: ['message'],
        methods: {
            showIMG () {
                alert(1);
            }
        }
    };
</script>

<style scoped>
    .message {
        overflow: auto;
        margin-bottom: .6rem;
    }

    .usertalkinfo {
        float: right;
        color: #fff;
        background-color: #8492A6;
        box-shadow: 0 2px 10px #ccc;
    }

    .usertalkinfo:before {
        float: right;
        margin-right: -1.1rem;
        content: ' ';
        display: block;
        width: 0;
        height: 0;
        border-width: 10px 0 10px 10px;
        border-style: solid;
        border-color: transparent transparent transparent #8492A6;
    }

    .talkinfo {
        max-width: 65%;
        margin: 0 1rem;
        word-break: break-all;
        padding: .6rem;
        border-radius: .4rem;
        font-size: .8rem;
    }

    .date {
        text-align: center;
        font-size: .6rem;
        width: 100%;
        line-height: 2rem;
        color: #ccc;
        overflow: auto;
    }
</style>
