<template>
    <div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div style="padding-bottom: 10px">
                <div class="wrapTop text-center relative" style="background-color: rgba(10,18,100,.8)">
                    <h2 class="title">Payment deal wallet</h2>
                    <div class="flex-box">
                        <dl class="flex">
                            <dt style="border-right: 1px solid #fff;">0.0</dt>
                            <dd>数字资产</dd>
                        </dl>
                        <dl class="flex">
                            <dt>0.0</dt>
                            <dd>当前价格</dd>
                        </dl>
                    </div>
                    <div class="adr-box">
                        <van-row>
                            <van-col :span="5">钱包地址</van-col>
                            <van-col :span="16" class='text-center' style="color: #ddd;">ODihZTFMjc2MmNYjMxMYQ</van-col>
                            <van-col :span="3">
                                <van-button size="mini" style="width: 100%;border: none;">复制</van-button>
                            </van-col>
                        </van-row>
                    </div>
                </div>
                <van-swipe :autoplay="3000" indicator-color="white"
                           style="height: 120px;background: #888;line-height: 120px;text-align: center">
                    <van-swipe-item>1</van-swipe-item>
                    <van-swipe-item>2</van-swipe-item>
                    <van-swipe-item>3</van-swipe-item>
                    <van-swipe-item>4</van-swipe-item>
                </van-swipe>
                <van-row class="text-center partIncomePanel">
                    <van-col :span="6">
                        <dl class="part">
                            <dt>
                                <img src="../../images/barging.png" alt="">
                            </dt>
                            <dd>转出</dd>
                        </dl>
                    </van-col>
                    <van-col :span="6">
                        <dl class="part">
                            <dt>
                                <img src="../../images/barging.png" alt="">
                            </dt>
                            <dd>ICO</dd>
                        </dl>
                    </van-col>
                    <van-col :span="6">
                        <dl class="part">
                            <dt>
                                <img src="../../images/barging.png" alt="">
                            </dt>
                            <dd>P Token</dd>
                        </dl>
                    </van-col>
                    <van-col :span="6">
                        <dl class="part">
                            <dt>
                                <img src="../../images/barging.png" alt="">
                            </dt>
                            <dd>交易</dd>
                        </dl>
                    </van-col>
                </van-row>
            </div>

        </van-pull-refresh>
        <van-tabbar v-model="active">
            <!--<van-tabbar-item info="3">-->
                <!--<span>自定义</span>-->
                <!--<img-->
                        <!--slot="icon"-->
                        <!--slot-scope="props"-->
                        <!--:src="props.active ? icon.active : icon.normal"-->
                <!--&gt;-->
            <!--</van-tabbar-item>-->
            <van-tabbar-item icon="credit-pay" url="/index">PDC</van-tabbar-item>
            <van-tabbar-item icon="friends-o" url="/friends">好友</van-tabbar-item>
            <van-tabbar-item icon="apps-o">应用</van-tabbar-item>
            <van-tabbar-item icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>

</template>
<script>

    import {Swipe, SwipeItem} from 'vant';

    export default {
        components: {
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
        },
        data() {
            return {
                active: 0,
                icon: {
                    normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
                    active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
                },
                isLoading: false
            }
        },
        methods: {
            onRefresh() {
                setTimeout(() => {
                    this.$toast.success('刷新成功');
                    this.isLoading = false;
                    this.count++;
                }, 1000);
            }
        }


    }
</script>
<style lang="less">
    .wrapTop {
        color: #ffffff;
        padding: 60px 0 20px;
        margin-bottom: 21px;

    .title {
        font-size: 18px;
        margin-bottom: 10px;
    }

    dl {
        font-size: 12px;
        padding: 6px;

    dt {
        line-height: 24px;
    }

    }
    .adr-box {
        width: 90%;
        position: absolute;
        left: 50%;
        bottom: 0;
        -webkit-transform: translate(-50%, 60%);
        -moz-transform: translate(-50%, 60%);
        -ms-transform: translate(-50%, 60%);
        -o-transform: translate(-50%, 60%);
        transform: translate(-50%, 60%);
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
        height: 34px;
        line-height: 34px;
        -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, .2);
        -moz-box-shadow: 0 0 5px rgba(0, 0, 0, .2);
        box-shadow: 0 0 5px rgba(0, 0, 0, .2);
        background-color: #ffffff;
        color: #4a4a4a;
    }

    }
    .partIncomePanel {
        background: #fff;
        padding: 20px 0 40px;
        -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
        -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
        box-shadow: 0 2px 5px rgba(0, 0, 0, .2);

    .part {

        img {
            max-width: 36px;
        }

        dd {
        margin-top: 15px;
        }

    }
    }
</style>