# vue-dropdown-menu-search

## Install
```
npm i vue-dropdown-menu-search
```
## Use 

main.js

```
import VueDropdownMenuSearch from 'vue-dropdown-menu-search';

import 'vue-dropdown-menu-search/dist/vue-dropdown-search-menu.css';

Vue.use(VueDropdownMenuSearch)

```

```

<template>
  <div id="app">
   
    <dropdown-search-menu  v-model="selected" :menu='menu' :list="list" displayItem="name" returnValue="id" @close="menu = false">
        <button @click="menu = true">Button </button>  
    </dropdown-search-menu>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selected:null,
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

```

