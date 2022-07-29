<template>
<div class="home">
 <NavbarFilter @filterDurum="aktifSekme=$event" :aktifSekme="aktifSekme" />
  <div v-if="yapilacaklar.length > 0">
    <div v-for="yap in filteredTodo" :key="yap.id">
      <Yapilacak :yapilacak="yap" @silme="veriSil" @yapildi="veriYapildi"/>
    </div>
  </div>

  <div v-else>
    <p>Yapılacaklar yükleniyor</p>

  </div>
</div>
</template>

<script>

import Yapilacak from '../components/Yapilacak.vue';
import NavbarFilter from '../components/NavbarFilter.vue';

export default {

  components:{
    Yapilacak,
    NavbarFilter,

},
  data(){
    return{
      yapilacaklar:[],
      aktifSekme:'hepsi'
    }
  },
  mounted(){
    
    fetch("http://localhost:3000/yapilacaklar")
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      this.yapilacaklar = data;
    })
    .catch((err)=>{
      console.log(err)
    })
  },
  methods:{
    veriSil(id){
      this.yapilacaklar=this.yapilacaklar.filter(yap=>{
        return yap.id!==id;
      })
    },
    veriYapildi(id){
     let yap=this.yapilacaklar.find(yapilacak=>{
        return yapilacak.id==id;
     });
     yap.yapildi=!yap.yapildi;
    }
  },
  computed:{
   
   filteredTodo(){
        if(this.aktifSekme==='tamamlandi'){
          return this.yapilacaklar.filter(yapilacak=>yapilacak.yapildi)
        }
        if(this.aktifSekme==='yapiliyor'){
          return this.yapilacaklar.filter(yapilacak=>!yapilacak.yapildi)
        }
        return this.yapilacaklar
}
  }

}
</script>
