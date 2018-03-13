<template>
    <div class="ask">
        <textarea rows="4" maxlength="200" v-model="sendMessage"></textarea>
        <button class="send" @click="send" v-if="isContent">发送</button>
        <Button class="getMessage" @click="getMessage" v-if="!isContent" type="primary" icon="images"></Button>
        <input type="file" id="fileElem" multiple accept="image/*" name="file" style="display:none"
               @change="handleFiles()">
        <Modal v-model="showF" title="查看详情">
            <img :src="imgSrc" width="100%"/>
        </Modal>
    </div>
</template>

<script>
    import {uploadImg} from '../../../interface';

    export default {
        name: 'send-content',
        props: ['messageID'],
        created () {
            this.sID = this.messageID;
        },
        data () {
            return {
                sID: '',
                imgSrc: '',
                sendMessage: '',
                isContent: false,
                showF: false
            };
        },
        watch: {
            sendMessage (n, o) {
                if (n !== '') {
                    this.isContent = true;
                }
                if (n === '') {
                    this.isContent = false;
                }
            }
        },
        methods: {
            send () {
                if (this.sendMessage !== '') {
                    this.$emit('sendMessage', this.sendMessage);
                    this.sendMessage = '';
                }
            },
            getMessage () {
                document.getElementById('fileElem').click();
            },
            handleFiles () {
                let file = document.getElementById('fileElem');
                let reader = new FileReader();
                reader.readAsDataURL(file.files[0]);

                let formData = new FormData();
                let fobj = file.files[0];
                formData.append('file', fobj);

                reader.onload = (e) => {
                    this.$ajax({
                        method: 'POST',
                        url: uploadImg(),
                        contentType: false,
                        processData: false,
                        async: false,
                        dataType: 'JSON',
                        data: formData
                    }).then((res) => {
                        this.$emit('sendMessage', '<img src=' + res.data.data.url + ' style="width:100%" onclick="showIMG(this)"/>');
                    }).catch((error) => {
                        this.$Message.error('网络掉了，请您稍后');
                    });
                    window.showIMG = (data) => {
                        this.showF = true;
                        this.imgSrc = data.src;
                    };
                };
            }
        }
    };
</script>

<style scoped>
    .ask {
        width: 100%;
        left: 0;
        padding: 0;
        margin: 0;
        height: 4rem;
        bottom: 0;
        background: #fff;
        border-top: 1px solid #125589;
    }
    textarea {
        width: 70%;
        resize: none;
        border: none;
        height: 64px;
    }
    .send {
        font-family: Microsoft YaHei;
        width: 30%;
        float: right;
        height: 4.1rem;
        background: #125589;
        color: #fff;
        font-size: 1rem;
        border: none;
    }
    .getMessage {
        border-radius: 0;
        font-family: Microsoft YaHei;
        width: 30%;
        float: right;
        height: 4.1rem;
        background: #125589;
        color: #fff;
        font-size: 2rem;
        border: none;
    }
    .send:active {
        background: #F7BA2A;
    }
</style>
