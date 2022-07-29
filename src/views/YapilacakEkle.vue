<template>

<div class="main">
  <form @submit.prevent="yapilacakEkle">
  <div class="full-width">
  <label>Başlık:</label>
  <input v-model="baslik" type="text" required/>
  </div>
  <div class="full-width"> 
  <label >İçerik:</label>
  <input v-model="icerik" type="text" required>
  </div>
    <div class="full-width"> 
  <button>Ekle</button>
    </div>
  </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            baslik:'',
            icerik:''
        }
    },
    methods:{
        yapilacakEkle(){
            let yapilacak= {
                id:Math.floor(Math.random()*100),
                baslik:this.baslik,
                icerik: this.icerik,
                yapildi:false
  
            }

            fetch('http://localhost:3000/yapilacaklar',{
                method:'POST',
                headers:{"Content-Type":'application/json'},
                body:JSON.stringify(yapilacak)
            }).then(()=>{
                this.$router.push('/');
            }).catch((err)=>console.log(err))
    
        }

    }

}
</script>

<style>
form{
     box-sizing: border-box;
  padding: 2rem;
  border-radius: 1rem;
  background-color: hsl(0, 0%, 100%);
  border: 4px solid hsl(0, 0%, 90%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
label{
    display: block;
    color:#bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight:bold ;
    letter-spacing: 1px;
    margin: 20px 0 10px 0;
}
input{
    padding:10;

    widows: 100%;
    box-sizing: border-box;
    border:2px solid #bbb;
    padding: 10px;
    width: 100%;

}


form button{
    display: block;
    margin: 20px auto 0;
    background: #00ce89;
    color:white;
    padding: 10px;
    border:0;
    border-radius: 6px;
    font-size: 16px;
    width:100px;
}
main {
  margin: 0 auto;
  padding: 4rem 0;
  width: 90%;
  max-width: 60rem;
}

.full-width {
  grid-column: span 2;
}
</style>