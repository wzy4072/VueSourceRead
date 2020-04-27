// 99 
Vue.options = {
    directives: {
        // exports.text =
        // exports.html =
        // exports.attr =
        // exports.show =
        // exports['class'] =
        // exports.el =
        // exports.ref =
        // exports.cloak =
        // exports.style =
        // exports.partial =
        // exports.transition =

        // // event listener directives
        // exports.on =
        // exports.model =

        // // child vm directives
        // exports.component =
        // exports.repeat =
        // exports['if'] =
        // exports['with'] =
    },
    filters:{
        // json: ƒ (value, indent)
        // capitalize: ƒ (value)
        // uppercase: ƒ (value)
        // lowercase: ƒ (value)
        // currency: ƒ (value, sign)
        // pluralize: ƒ (value)
        // key: ƒ (handler, key)
        // filterBy: ƒ (arr, searchKey, delimiter, dataKey)
        // orderBy: ƒ (arr, sortKey, reverseKey)
    },
    partials: {},
    transitions: {},
    components: {},
  }

//   2377 module.exports = function mergeOptions(parent, child, vm) {

 // 6102   function Observer(value, type) {


// 6025  p.convert = function (key, val) { 观察者模式核心


1 <span v-bind:title="message">提示信息！</span> 可以简写为（）

A <span @title="message">提示信息！</span> 

B <span :title="message">提示信息！</span> 

C <span title="message">提示信息！</span> C



2 <button v-on:click="counter += 1">Add 1</button>可以简写为（）

A <button on:click="counter += 1">Add 1</button>

B <button @:click="counter += 1">Add 1</button>

C <button :click="counter += 1">Add 1</button>


3 父组件给子组件传递参数时，通过（）



3 子组件接收参数时，通过（props）

3 子组向父组件抛出参数时，可以通过（emit 事件）


