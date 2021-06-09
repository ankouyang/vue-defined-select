# vue-defined-select

## Project setup
```
npm install --save vue-defined-select或者yarn add  vue-defined-select
```



### 全局引入
```
import  Select  from 'vue-defined-select'
import "vue-defined-select/lib/definedSelect.css";
Vue.use(Select)
```


### 局部引入
```
import  Select  from 'vue-defined-select'
import "vue-defined-select/lib/definedSelect.css";
components:{
   Select
}
```



### 模板引入
```
<Select v-model="selected" :options="options" :multiple="true" />
```




### 调用
```
export default {
  name: 'App',
  data:()=>({
    selected:[],
    options:[
      {label:'苹果',value:1},
      {label:'橘子',value:2},
      {label:'栗子',value:3},
      {label:'香蕉',value:4},
      {label:'火龙果',value:5},
    ]
  })
}
```

