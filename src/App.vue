<template>
<div id="app">
  <h1 v-text="title"></h1>
  <input class="inputCSS" v-model="inputValue" v-on:keyup.enter="addNewItem"></input>
  <ul>
    <li v-for="item in todoItems" v-bind:class="[{finishCss: item.isFinished}]" v-on:click="toggleFinishStatus(item)">
      {{item.content}}
    </li>
  </ul>
</div>
</template>


<script>
import Store from './javascript/Store'
export default {
  data() {
    return {
      title: 'To-Do-List',
      name: 'app',
      todoItems: Store.fetch(),
      inputValue: '',
    }
  },

  watch: {
    todoItems: {
      handler: function(newVal, oldVal) {
        console.log("newVal:" + newVal + "\n oldVal:" + oldVal);
      },
      deep: true
    }
  },

  methods: {

    toggleFinishStatus(item) {
      item.isFinished = !item.isFinished
      Store.sava(this.todoItems);
    },

    addNewItem() {
      this.todoItems.push({
        isFinished: false,
        content: this.inputValue
      })
      this.inputValue = ''
      Store.sava(this.todoItems);
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 18px;
  margin-top: 60px;
}

.ulCss {
  text-align: center;
}

.liCSS {
  color: #000;
  width: 50%;
  background: #ccc;
}

.inputCSS {
  font-size: 18px;
  width: 50%;
  height: 1.5em;
  border-color: #ccc 1px;
}

.finishCss {
  text-decoration: line-through;
  color: #ccc;
  text-align: center;
}
</style>
