import DropdownSearchMenu from './components/DropdownSearchMenu.vue';

const DropdownSearchMenuCom = {
    install(Vue, options) {
     // Let's register our component globally
     // https://vuejs.org/v2/guide/components-registration.html
     Vue.component("dropdown-search-menu", DropdownSearchMenu);
    }
   };
   
   // Automatic installation if Vue has been added to the global scope.
   if (typeof window !== 'undefined' && window.Vue) {
       window.Vue.use(DropdownSearchMenuCom);
   }
   
   export default DropdownSearchMenuCom;