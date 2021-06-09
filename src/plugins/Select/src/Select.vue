<template>
    <div class="selectComponent">
        <div  @click="show = !show" class="selectHeader">
            <span v-if="multiple">
                <span v-if="selected.length===0">请选择数据</span>
                <span v-else>
                     <span v-for="(item,index) in selected" :key="index" class="has-select" >
                         {{labelName(item).label}}
                         <i class="close" @click.stop="multipleSelect(item)">x</i>
                     </span>
                </span>

            </span>
            <span v-else style="margin-top: 5px;display: inline-block">{{selected?labelName(selected).label:'请选择数据'}}</span>
        </div>
        <div v-if="show"  class="selectList" >
            <div v-if="options.length>0">
                <ul v-if="multiple">
                    <li v-for="(item,index) in options" :key="index" @click="multipleSelect(item)" :class="{'selected':selected.some((i)=>i === item.value)}" >{{item.label}}</li>
                </ul>
                <ul v-else>
                    <li v-for="(item,index) in options" :key="index" @click="select(item)" :class="{'selected':selected===item.value}">{{item.label}}</li>
                </ul>
            </div>
            <ul v-else>
                <li>暂无数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Select",
        model:{
            prop:'selected',
            event:'change'
        },
        props:['selected','options','multiple'],
        data:()=>({
            show:false,
        }),
        methods:{
            select(item){
                this.$emit('change',item.value)
                this.show = false
            },
            labelName(item){
                return  this.options.find(value=>item === value.value)
            },
            multipleSelect(item){
                let choice= this.selected
                const hasSelct = item.value?choice.some((i)=>i === item.value):true
                if(!hasSelct){
                    choice.push(item.value)
                }else {
                    choice.map((key,index1)=>{
                        if(key === item.value&&item||key===item){
                            choice.splice(index1,1)
                        }
                    })

                }
                this.$emit('change',choice)
            }
        }
    }
</script>

<style scoped>
    .selectComponent{
        max-width: 300px;
    }
    .selectHeader{
        border: 1px solid #ddd;
        height: 30px;
        border-radius: 2px;
        text-align: left;
        text-indent: 10px;
    }
    .selectList{
        transition: all .5s;
        border: 1px solid #ddd;
    }
    .has-select{
        text-indent: 0;
        display: inline-block;
        padding: 2px 15px;
        border-radius: 10px;
        font-size: 12px;
        margin-top: 5px;
        background-color: #f4f4f5;
        border-color: #e9e9eb;
        color: #909399;

    }
    ul{
        padding: 0;
        margin: 5px;
    }
    ul>li{
        list-style: none;
        cursor: pointer;
        margin: 5px;
    }
    ul>li:hover{
        background-color: #efefef;
    }
    li.selected,li.selected:hover{
        background-color: aqua;
    }
    .close{
        font-style: normal;
        font-weight: 400;
        font-variant: normal;
        text-transform: none;
        display: inline-block;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #c0c4cc;
        border-radius: 50%;
        text-align: center;
        position: relative;
        font-size: 12px;
        height: 14px;
        width: 14px;
        line-height: 14px;
        vertical-align: middle;
        cursor: pointer;
    }
    .close:hover{
        background-color: #999;
        color: #fff;
    }
</style>