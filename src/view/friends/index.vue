<template>
    <div class="list">
       <list-item></list-item>
       <list-item></list-item>
    </div>
</template>
<script>
    import {icon} from 'vant';
    import listItem from '../../components/shadowListItem/index.vue';
    //import $ from '../../../lib/util/util';
    export default {
        components:{
            [icon.name]:icon,
            listItem:listItem
        },
        data: function () {
            return {}
        }
    }
</script>
<style>

</style>