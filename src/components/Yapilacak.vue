<template>
  <div class="yapilacak" :class="{yapildi:yapilacak.yapildi}">
    <div  class="baslik">
        <h3 @click="detaygoster = !detaygoster;">{{yapilacak.baslik}}</h3>
        <div class="icons">
            <router-link :to="{name:'yapilacakGuncelle',params:{id:yapilacak.id}}">
            <span class="material-symbols-outlined icon">edit</span>
            </router-link>
            <span class="material-symbols-outlined icon" @click="sil">delete</span>
            <span class="material-symbols-outlined icon" @click="toogle()" tick> check</span>
          </div>
    </div>

    <div v-if="detaygoster" class="detay">
       <p>{{yapilacak.icerik}}</p> 
       
    </div>
  </div>
</template>

<script>




export default {
    
    props:['yapilacak'],
    data(){
        return{
            detaygoster:false,
            uri:'http://localhost:3000/yapilacaklar/'+this.yapilacak.id
        }
    },
    methods:{
        sil(){
            fetch(this.uri,{method:'DELETE'}) // silme işleminden sonra home sayfasına bildirilmelidir.Bütün yapılacaklar listesinden de veri silinmelidir
                .then(()=> this.$emit('silme',this.yapilacak.id))
                .catch((err)=> console.log(err))
        },
        toogle(){
            
                const data = {
                    yapildi: !this.yapilacak.yapildi
                };
                fetch(this.uri, {
                    method:'PATCH',
                    headers:{'Content-Type':'application/json'},
                    body: JSON.stringify(data)
                })
                .then(() => {
                    this.$emit('yapildi',this.yapilacak.id)
                })

        }
    },


}         
</script>

<style>
.yapilacak{
    margin:20px auto;
    background-color:rgb(248, 248, 255);
    padding: 10px 20px;
    border-radius: 15px;
    border:3px solid rgb(194, 15, 15);
    position: relative; 
    color:rgb(41, 41, 41);
}
.yapilacak:hover{
    box-shadow: 8px 10px 10px rgba(56, 21, 21, 0.2);
}
h3{
    cursor:pointer;
}

.baslik{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}

.icon{

    font-size:22px;
    margin-right: 10px;
    cursor: pointer;
}

.icon:hover{
    color:#6d6b6b
}

.yapilacak.yapildi{
    border: 4px solid #48b660
}

.yapilacak.yapildi.tick{
    color:#48b660
}
</style>