<template>
	<el-main>
		<div class="p15">
			
	        <h4>功能描述</h4>
	        <p>ES6_Javascript_最全最新讲解。<a href="https://github.com/lchaoge/es6" class="btn btn-success" target="_blank">查看源码</a></p>
			<br />	        
			<h4>数组方法(forEach、map、filter、find、every、some)</h4>
			<pre>
				
		// forEach 遍历数组
		colors.forEach((color)=>{
			console.log(color)
		});
		
		// map 遍历返回数组
		var doubled = numbers.map((number)=>{
			return number*2
		})
		
		// filter 筛选返回数组
		var filtered2 = products.filter((product)=>{
			return product.type === 'fruit';
		})
		
		// find 找到符合条件的对象
		var use = users.find((user)=>{
			return user.name === 'Alex';
		})
		
		// every 一假即假
		var every = computers.every((computer)=>{
			return computer.ram > 16
		})
		
		// some 一真即真
		var some = computers.some((computer)=>{
			return computer.ram > 16;
		})
		
		// reduce 初始值, 或者计算结束后的返回值、当前元素）
		var colors = primaryColors.reduce((previous,primaryColor)=>{
			previous.push(primaryColor.color)
			return previous
		},[])
				
			</pre>
			<h4>增强对象字面量</h4>
			
			<h4>模板字符串</h4>
			
			<h4>箭头函数</h4>
			
			<h4>函数参数默认值</h4>
			
			<h4>展开运算符</h4>
			
			<h4>解构(对象,数组，对象数组)</h4>
			
			<h4>Class(万事皆对象)</h4>
			
			<h4>generator生成器</h4>
			
			<h4>新数据结构(map,set)</h4>
			
			<h4>Promise</h4>
			
			<h4>fetch Apis</h4>
			
			<h4>async await</h4>
			
			<h4>async封装fetch</h4>
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