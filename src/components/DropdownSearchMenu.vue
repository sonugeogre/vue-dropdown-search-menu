<template>
  <div class="vdm-menu-container">
    <slot></slot>
    <div v-if="menu" class="vdm-dropdown-menu-container">
        <div class="vdm-menu">
            <div class="vdm-menu-header">
                <div class="vdm-menu-search">
                    <div class="vdm-menu-search-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3187 18.0275L13.232 11.9407C14.1766 10.7197 14.6875 9.22668 14.6875 7.65637C14.6875 5.77668 13.9539 4.01418 12.6273 2.68528C11.3008 1.35637 9.53359 0.625122 7.65625 0.625122C5.77891 0.625122 4.01172 1.35872 2.68516 2.68528C1.35625 4.01184 0.625 5.77668 0.625 7.65637C0.625 9.53372 1.35859 11.3009 2.68516 12.6275C4.01172 13.9564 5.77656 14.6876 7.65625 14.6876C9.22656 14.6876 10.7172 14.1767 11.9383 13.2345L18.025 19.3189C18.0428 19.3367 18.064 19.3509 18.0874 19.3606C18.1107 19.3702 18.1357 19.3752 18.1609 19.3752C18.1862 19.3752 18.2112 19.3702 18.2345 19.3606C18.2578 19.3509 18.279 19.3367 18.2969 19.3189L19.3187 18.2993C19.3366 18.2815 19.3508 18.2603 19.3604 18.237C19.3701 18.2137 19.3751 18.1887 19.3751 18.1634C19.3751 18.1382 19.3701 18.1132 19.3604 18.0898C19.3508 18.0665 19.3366 18.0453 19.3187 18.0275ZM11.3688 11.3689C10.375 12.3603 9.05781 12.9064 7.65625 12.9064C6.25469 12.9064 4.9375 12.3603 3.94375 11.3689C2.95234 10.3751 2.40625 9.05793 2.40625 7.65637C2.40625 6.25481 2.95234 4.93528 3.94375 3.94387C4.9375 2.95247 6.25469 2.40637 7.65625 2.40637C9.05781 2.40637 10.3773 2.95012 11.3688 3.94387C12.3602 4.93762 12.9062 6.25481 12.9062 7.65637C12.9062 9.05793 12.3602 10.3775 11.3688 11.3689Z" fill="#434343"/>
                        </svg>
                    </div>
                    <input type="text" v-model="search"   placeholder="Search" autocomplete="off" class="vdm-menu-search-input" />
                    
                </div>
            </div>
            <div class="vdm-menu-body">
                <div v-for="(item,index) in getFilterList(this.search)" :key="index">
                    <div class="vdm-menu-list-item"  @click="selectItem(item)" :class="{'vdm-menu-list-selected': item[returnValue]==$attrs.selected}">
                        <div class="vdm-menu-item-icon" v-if="item.img != undefined">
                            <img :src="item.img" alt="">
                        </div>
                        <div>
                            {{item[displayItem]}}
                        </div>
                    </div>
                </div>
                <div class="vdm-menu-list-item" v-if="getFilterList(this.search).length == 0">
                    No item found
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        menu:Boolean,
        list:Array,
        displayItem:String,
        returnValue:String
    },
    model: {
        prop: 'selected',
        event: 'change'
    },
    mounted(){
        this.menuItem = this.list;
    },
    watch: {
        menu:function (n) {
            if(n){
                this.key = false
                document.removeEventListener('click',this.closeMenu)
                document.addEventListener('click', this.closeMenu)
            }else{
                document.removeEventListener('click',this.closeMenu)
            }
        }
    },
    data(){
        return{
            menuItem:[],
            search:'',
            selected_item:null
        }
    },
    methods:{
        closeMenu (e) {
            if (!this.$el.contains(e.target)) {
                this.$emit('close');
            }
        },
        selectItem(item){
            this.$emit('change', item[this.returnValue])
            this.$emit('close');
        },
      
        getFilterList(search){
            if(search == ''){
                return this.menuItem
            }else{
                return this.menuItem.filter((item) =>{
                    if (item[this.displayItem].toUpperCase().includes(search.toUpperCase())) {
                        return true;
                    }
                    return false;
                })
            }
        }
    }
}
</script>

<style lang="scss">

.vdm-menu-container{
    position: relative;
}
.vdm-dropdown-menu-container {
    width: auto !important;
    display: block;
    opacity: 1;
    position: absolute;
    top: 100%;
    left: 10px;
    right: auto;
    margin: 5px 0;
    box-shadow: 0 1px 10px #00000040;
    background: #fff;
    border-radius: 8px;
    z-index: 1000;
    min-width: 200px ;
    max-height: calc(100vh - 20px);
    overflow-y: auto;
}
.vdm-menu {
    display: flex;
    flex-direction: column;
    min-width: 280px;
    width: 100%;
    max-height: 400px;
    max-width: 448px;
}
.vdm-menu-header{
    flex-shrink: 0;
}
.vdm-menu-search {
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #f4f4f4;
}
.vdm-menu-search-input{
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    padding: 16px 44px 15px 20px;
    color: #2a2e34;
    border: none;
    margin: 0 0 0px;
}
.vdm-menu-search-input:focus{
    outline: none;
}
.vdm-menu-search-icon{
    padding-left: 10px;
}
.vdm-menu-body{
    overflow: auto;
    flex: 0 1 auto;
    max-height: 351px;
    padding: 5px 0;
}
.vdm-menu-list-item {
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 44px;
    cursor: pointer;
    position: relative;
}
.vdm-menu-list-selected{
    background: #d9d9d9;
}
.vdm-menu-item-icon{
    margin-right: 10px;
}
.vdm-menu-item-icon img{
    border-radius: 50%;
    display: block;
    margin: 0px;
    position: relative;
    height: 32px;
    width: 32px;
    z-index: 0;
    -webkit-background-size: 32px 32px;
    background-size: 32px 32px;
    border: 0;
    -webkit-border-radius: 50%;
}
</style>