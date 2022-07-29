<template>
  <nav class="filter-nav">
    <button @click="filterUpdate('hepsi')" :class="{active:aktifSekme==='hepsi'}">Bütün Yapılacaklar</button>
    <button @click="filterUpdate('tamamlandi')" :class="{active:aktifSekme==='tamamlandi'}">Tamamlanan Yapılacaklar</button>
    <button @click="filterUpdate('yapiliyor')" :class="{active:aktifSekme==='yapiliyor'}">Devam Eden Yapılacaklar</button>
  </nav>
</template>

<script>
export default {
     props:['aktifSekme'],

            methods:{
                filterUpdate(durum){

                    this.$emit('filterDurum',durum)

                }
    }

}
</script>

<style>

.filter-nav button{
    background: none;
    border:none;
    color:#bbb;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    font-weight: bold;
    cursor: pointer;
}
.filter-nav button.active{
    color:rgb(199, 33, 33);
}
</style>