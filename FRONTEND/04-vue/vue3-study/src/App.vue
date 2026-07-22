<template>
  App.vue页面
  <!-- 3.显示组件 -->
  <MyComponent/> 
  <my-component/>
  <MyComponent04 :title="title" :age="age" :names="names"/>

  <p>{{ message }}</p>
  <MyComponent05 @onEvent="getDataHandle"/>
</template>

<script>
  import MyComponent from "./components/03-MyComponent.vue"
  import MyComponent04 from "./components/04-Props组件交互.vue" //1.引入组件
  import MyComponent05 from "./components/05-自定义事件组件交互-反向传递数据.vue"
  export default{
    name:'App',
    components:{ //2.挂载组件
      MyComponent,
      MyComponent04,
      MyComponent05
    },
    data(){
      return{
        title:"我是一个标题",
        age:20,
        names:["iwen","ime","frank"],
        message:""
      }
    },
    methods:{
      getDataHandle(data){
        this.message = data;
      }
    }
  }
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
