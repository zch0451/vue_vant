<template>
        <div class="list-item" style="margin-bottom: 15px">
            <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" class="vm"/>
            你好
        </div>
</template>
<script>
    import {icon} from 'vant';

    export default {
        components:{
            [icon.name]:icon,

        },
        data: function () {
            return {}
        }
    }
</script>
<style>
    .list-item{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width:100%;
        padding:0.7em 1em;
        border:1px solid #8aF;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        -webkit-box-shadow:  0px 5px 8px rgba(3,3,3,.2);
        -moz-box-shadow: 0px 5px 8px rgba(3,3,3,.2);
        box-shadow: 0px 5px 8px rgba(3,3,3,.2);
    }
</style>