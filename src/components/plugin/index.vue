<template>
	<el-main>
		<div class="w1200">
			<el-row>
			  	<el-col class="p15" :span="6" v-for="item in pageData.list" :key="item.title">
			    	<router-link :to="{name:`${item.routerName}`}" class="wm-router-card">
			    		<el-card>
				    		<img :src="item.image" class="image">
						    <div style="padding: 14px;">
						        <h5>{{item.title}}</h5>
						        <small class="desc">{{ item.desc }}</small>
						    </div>
					    </el-card>
			    	</router-link>
			  	</el-col>
			</el-row>
		</div>
	</el-main>
</template>

<script>
export default{
	data(){
		return{
			pageData:{
				list:[
					{title:'表格左右滑动和表头固定插件',desc:'方便多数据左右滑动，兼容至IE8',image:'./static/images/plugin/wmTables.png',routerName:'tablesLink'},
					{title:'多功能日期控件',desc:'年月日周自定义选择日期，兼容至IE8',image:'./static/images/plugin/wmCalendar.png',routerName:'calendarLink'},
					{title:'气泡记事日期插件',desc:'方便快速浏览本月订货单退货单相关信息',image:'./static/images/plugin/wmNoteCalendar.png',routerName:'noteCalendarLink'},
					{title:'分页插件',desc:'多功能分页插件',image:'./static/images/plugin/wmPage.png',routerName:'pageLink'},
					{title:'未知最大页分页插件',desc:'未知最大页分页插件',image:'./static/images/plugin/wmNotpage.png',routerName:'notpageLink'},
					{title:'请求数据等待时加载遮罩层',desc:'加载遮罩层，兼容至IE8',image:'./static/images/plugin/wmLoad.png',routerName:'loadLink'},
					{title:'模态弹出提示框和定时消息框',desc:'兼容至IE8',image:'./static/images/plugin/wmModal.png',routerName:'modalLink'},
					{title:'多功能下拉',desc:'兼容至IE8',image:'./static/images/plugin/wmSelect.png',routerName:'selectLink'},
					{title:'日期插件',desc:'兼容至IE8',image:'./static/images/plugin/wmCalendarCtrl.png',routerName:'calendarCtrlLink'},
					{title:'手机日期插件',desc:'兼容至IE8',image:'./static/images/plugin/wmPhoneCalendar.png',routerName:'phoneCalendarLink'},
					{title:'下拉列表增删排序',desc:'兼容至IE8',image:'./static/images/plugin/wmKselect.png',routerName:'kselectLink'},
					{title:'菜单tree',desc:'兼容至IE8',image:'./static/images/plugin/wmTree.png',routerName:'treeLink'},
				]	
			}
			
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
	
	.el-main>.w1200{
		margin: 0 auto;
	}
	.wm-router-card:hover{
		text-decoration: none;
	}
	h5{
		text-decoration: none;
		color: #409EFF;
	}
	.desc {
		display: inline-block;
		line-height: 18px;
		height: 36px;
		overflow: hidden;
	    font-size: 12px;
	    color: #999;
	    margin-bottom: 0;
	}
	.image {
	    width: 100%;
	    display: block;
	}

</style>