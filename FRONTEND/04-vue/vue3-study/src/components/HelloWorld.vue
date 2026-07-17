<template>
  <div class="hello">
    <h3>学习Vue:模板语法</h3>
    <p>{{ message }}</p>
    <div>{{ rawHtml }}</div>
    <div v-html="rawHtml"></div>

    <div :id="dynamicId">11</div>

    <p>{{ num + 10 }}</p>
    <p>{{ flag ? "孙猴子" : "傻猴子" }}</p>

    <p v-if="flag">我是孙猴子</p>
    <p v-else>我是傻猴子</p>
    <p v-show="ok">Hello!</p>

    <h3>列表渲染</h3>
    <ul>
      <li v-for="item in newsList" :key="item.id">
        {{ item.title }}
      </li>
    </ul>

    <button @click="counter += 1">点击:counter={{ counter }}</button>
    <button @click="clickHandle">撤回按钮</button>
    <p>{{ message }}</p>

    <button @click="say('hi')">say hi</button>
    <button @click="say('what')">say what</button>

    <ul>
      <li @click="clickItemHandle(item)" v-for="(item, index) in names":key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      num: 10,
      flag: false,
      ok: true,
      message: "学习Vue",
      rawHtml: "<a href='http://www.baidu.com'>百度</a>",
      dynamicId: 10001,

      newsList: [
        {
          id: 1001,
          title: "今日新闻1"
        },
        {
          id: 1002,
          title: "今日新闻2"
        },
        {
          id: 1003,
          title: "今日新闻3"
        }
      ],

      counter: 1,

      names:["iwen", "ime", "frank"]
    }
  },
  methods: {
    // clickHandle(){
    //   this.message = "消息被撤回了"
    // }
    clickHandle(event) {
      this.message = "消息被撤回了"
      event.target.innerHTML = "点击之后";
    }
  },
  methods: {
    say(data) {
      console.log(data);
    }
  },
  methods: {
    clickItemHandle(item) {
      console.log(item);
    }
  }
}
</script>