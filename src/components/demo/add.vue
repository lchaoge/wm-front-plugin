<template>
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