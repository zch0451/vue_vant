<template>
    <div class="list">
       <list-item></list-item>
       <list-item></list-item>
    </div>
</template>
<script>
    import {icon} from 'vant';
    import listItem from '../../components/shadowListItem/index.vue';
    import $ from '../../../lib/util/util';
    const querystring = require('querystring');
    export default {
        components:{
            [icon.name]:icon,
            listItem:listItem
        },
        data: function () {
            return {}
        },
        mounted(){
            //$.ajax.post('/movie/top250',{type:1});
            $.ajax({
                method: 'post',
                url: '/help/queryBarrageMessage',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data:  querystring.stringify({
                    firstName: 'Fred',
                    lastName: 'Flintstone'
                })
            });
        }
    }
</script>
<style>

</style>