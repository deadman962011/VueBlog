<template>
  <div class="home">
    <div class="row">
      <div class="col-sm-12">
       <MainTopBanner v-if="CheckMainTopBanner()" />
       <Carousel />
      </div>

    </div>

    <div class="row">
      <div class="col-sm-8">
  
       <RecentBlog />
      </div>
      <div class="col-sm-4">
       <MainSideBox v-if="CheckMainSideBox()" />
       <CatList />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <MainBottomBanner v-if="CheckMainBottomBanner()" />
      </div>
    </div>




  </div>
</template>

<script>
// @ is an alias to /src

import { mapGetters } from 'vuex'

import Carousel from '@/components/widgets/Carousel.vue';
import RecentBlog from '@/components/lists/RecentBlog.vue';
import CatList from '@/components/widgets/CatList.vue';
import MainSideBox from '@/components/ads/MainSideBox.vue';
import MainTopBanner from '@/components/ads/MainTopBanner.vue';
import MainBottomBanner from '@/components/ads/MainBottomBanner.vue';
export default {
  name: 'Home',

  components:{
    Carousel,
    RecentBlog,
    MainSideBox,
    CatList,
    MainTopBanner,
    MainBottomBanner
  },
  computed:{
        ...mapGetters(['AdsAll']),
    
    },
    methods:{

        //Check Ads
        CheckMainSideBox(){
            var MainSideBox = this.AdsAll[1].AdStatus
            if(MainSideBox != 0){
                return true
            }
        },
        CheckMainTopBanner(){
            var MainTopBanner = this.AdsAll[3].AdStatus
            if(MainTopBanner != 0){
                return true
            }
        },
        CheckMainBottomBanner(){
            var MainBottomBanner = this.AdsAll[4].AdStatus
            if(MainBottomBanner != 0){
                return true
            }
        }

    },


}
</script>

<style scoped>

</style>
