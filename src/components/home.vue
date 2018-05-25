<template>
	<el-container>
		<wm-header></wm-header>
		<router-view></router-view>
	</el-container>
</template>
<script>
	import wmHeader from './wm-header'
	export default{
		data(){
			return {
				
			}
		},
		components:{
			wmHeader
		}
	}
</script>
