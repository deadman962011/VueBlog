<template>
    <div class="heading">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-4">
                    icon
                </div>
                <div class="col-sm-8">
                    <MainHeadBanner  v-if="CheckAdMainHeadBanner()" />
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import MainHeadBanner from '@/components/ads/MainHeadBanner';
import { mapGetters } from 'vuex';

export default {
    
    components:{
        MainHeadBanner
    },
    computed:{
        ...mapGetters(['AdsAll']),
    
    },
    methods:{

        //Check Ads
        CheckAdMainHeadBanner(){
            console.log(this.AdsAll)
            var MainHeadBannerStatus = this.AdsAll[0].AdStatus
            if(MainHeadBannerStatus != 0){
                return true
            }
        }

    },




}
</script>


<style scoped>

</style>