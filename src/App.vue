<template>
  <div id="app">
   
    <DropdownSearchMenu  v-model="message" :menu='menu' :list="list" displayItem="name" returnValue="id" @close="menu = false" :onButtonMenu="false">
     
        <button class="add-btn" @click="menu = true">+ </button>  
  
    </DropdownSearchMenu>
  </div>
</template>

<script>
import DropdownSearchMenu from './components/DropdownSearchMenu.vue';

export default {
  name: 'App',
  components: {
   DropdownSearchMenu
  },
  data(){
    return{
      message:null,
      menu:false,
      list:[
        {
          id:1,
          name:'Foo',
          
        },
        {
          id:2,
          name:'Bar',
         
        },
        {
          id:3,
          name:'baz',
          
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.add-btn{
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #f4f4f4;
  font-size: 20px;
}
</style>
