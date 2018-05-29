<template>
	<el-main>
		<div class="p15">
	        <h4>功能描述</h4>
	        <p>使用Vue+VueX+ElementUI的代码框架。<a href="https://github.com/lchaoge/wm-vue-pc" class="btn btn-success btn-link" target="_blank">查看源码</a></p>
	        <p>配合ElementUI官网文档使用。<a href="http://element.eleme.io" class="btn btn-success btn-link" target="_blank">查看文档</a></p>
	    </div>
	</el-main>	
</template>

<script>
export default{
	data(){
		return{
			
		}
	},
	created(){
		console.log("在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。")
	},
	mounted(){
		console.log("在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。")
	},
	methods:{
		
	}
}
</script>

<style>
</style>