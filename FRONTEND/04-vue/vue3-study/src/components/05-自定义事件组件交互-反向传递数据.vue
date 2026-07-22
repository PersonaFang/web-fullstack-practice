<template>
    <h3>自定义事件传递数据</h3>
    <button @click="sendClickHandle">点击传递</button>
</template>

<script>
export default {
    name: "MyComponent05",
    data(){
        return{
            message:"我是MyComponent05的数据"
        }
    },
    methods:{
        sendClickHandle(){
            // 参数1：字符串-理论上是随便的，但是需要具有意义
            // 参数2：传递的数据
            this.$emit("onEvent", this.message);
        }
    }
}
</script>

