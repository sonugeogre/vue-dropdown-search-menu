# vue-dropdown-menu-search
An vue components  which can use for drop down seach menu

## Install
```
npm i vue-dropdown-menu-search
```

![alt text](https://github.com/sonugeogre/vue-dropdown-search-menu/blob/main/static/1.png)
![alt text](https://github.com/sonugeogre/vue-dropdown-search-menu/blob/main/static/2.png)



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
   
    <dropdown-search-menu  
      v-model="selected"
      :menu='menu'
      :list="list"
      displayItem="name"
      returnValue="id"
      @close="menu = false"
      >
      //you can use your own buttons
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

# props
| Property             | Type          | Description                                                   |
| -------------------- |:-------------:| :-------------------------------------------------------------:
| menu                 | boolean       | Show or hide for dropdown                                     |
| list                 | array         | Dropdown list items array                                     |
| displayItem          | string        | Displaying key in list                                        |
| returnValue          | string        | selected item return value key                                |

event `@close` used for closing the dropdown menu

For without image list don't pass `img` key in array
