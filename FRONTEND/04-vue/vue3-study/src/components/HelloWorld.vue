<template>
  <div class="hello">
    <h3>学习Vue:模板语法</h3>
    <p>{{ message }}</p>
    <div>{{ rawHtml }}</div>
    <div v-html="rawHtml"></div>
  </div>
</template>

<script>
export default{
  name: "HelloWorld",
  data(){
    return {
      message: "学习Vue",
      rawHtml:"<a href='http://www.baidu.com'>百度</a>"
    }
  }
}
</script>