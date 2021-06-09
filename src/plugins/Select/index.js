//导入组件,组件必须声明name
import Select from "./src/Select";

//为组件提供install 安装方法,供按需引入
Select.install = (Vue)=>{
    Vue.component(Select.name,Select)
}
//导出组件

export default Select
