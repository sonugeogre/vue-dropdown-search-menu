<template>
  <div id="app">
   
    <!-- <DropdownSearchMenu  v-model="message" :menu='menu' :list="list" displayItem="name" returnValue="id" @close="menu = false">
     
        <button @click="menu = true">Button </button>  
  
    </DropdownSearchMenu> -->
  </div>
</template>

<script>
// import DropdownSearchMenu from './components/DropdownSearchMenu.vue';

export default {
  name: 'App',
  components: {
   // DropdownSearchMenu
  },
  data(){
    return{
      message:null,
      menu:false,
      list:[
        {
          id:1,
          name:'Foo',
          img:'https://i.ibb.co/Xy9cgc4/Avatar-Maker-1.png'
        },
        {
          id:2,
          name:'Bar',
          img:'https://i.ibb.co/Xy9cgc4/Avatar-Maker-1.png'
        },
        {
          id:3,
          name:'baz',
          img:'https://i.ibb.co/Xy9cgc4/Avatar-Maker-1.png'
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
</style>
