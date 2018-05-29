<template>
	<el-header>
		<router-link :to="{name:'homeLink'}" class="cg-login">
			<img src="../assets/images/LOGO.png" />
		</router-link>
		<el-menu :default-active="activeIndex" text-color="#ffffff" active-text-color="#ffffff" background-color="#42A1FF" class="cg-menu" mode="horizontal" @select="handleSelect">
		  <el-menu-item index="1"><router-link :to="{name:'pluginLink'}">插件</router-link></el-menu-item>
		  <el-submenu index="2">
		    <template slot="title">项目框架</template>
		    <el-menu-item index="2-1">avalon@1.5-pc</el-menu-item>
		    <el-menu-item index="2-2">avalon@1.5-mobile</el-menu-item>
		    <el-menu-item index="2-3"><router-link :to="{name:'frameElementLink'}">vue@2-pc</router-link></el-menu-item>
		    <el-menu-item index="2-4"><router-link :to="{name:'frameMintUILink'}">vue@2-mobile</router-link></el-menu-item>
		    <el-menu-item index="2-5"><router-link :to="{name:'frameEs6Link'}">es6</router-link></el-menu-item>
		  </el-submenu>
		  <el-menu-item index="3">前端工程化</el-menu-item>
		  <el-menu-item index="4"><a href="https://github.com/lchaoge" target="_blank">github</a></el-menu-item>
		  <el-menu-item index="5"><router-link :to="{name:'aboutLink'}">关于</router-link></el-menu-item>
		</el-menu>
	</el-header>
</template>

<script>
export default{
	data(){
		return{
			activeIndex:""
		}
	},
	created(){
		console.log("在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。")
	},
	mounted(){
		console.log("在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。")
	},
	methods:{
		handleSelect(index){
			console.log("nav"+index)
		}
	}
}
</script>

<style>
	.el-header{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		width: 100%;
		background: #409EFF;
	}
	.cg-login{
		float: left;
		padding: 5px 0;
	}
	.cg-login img{
		width: 200px;
		height: 50px;
		display: inline-block;
	}
	.cg-menu{
		display: inline-block;
		background: #409EFF;
	}
	.el-menu-item a{
		display: block;
		text-decoration: none;
		color: #fff;
	}
	.el-menu-item a:hover{
		text-decoration: none;
		color: #fff;
	}
	.el-main{
		margin: 75px auto 0;
	}
	.el-submenu__title i{
		color: #fff;
	}
</style>