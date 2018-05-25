<template>
	<el-main>
		<div class="container-fluid">
			<el-breadcrumb class="breadcrumb" separator-class=",el-icon-arrow-right">
			  <el-breadcrumb-item :to="{name:'homeLink'}"><i class="glyphicon glyphicon-home"></i>首页</el-breadcrumb-item>
			  <el-breadcrumb-item>Icon图标</el-breadcrumb-item>
			</el-breadcrumb>			
		</div>
		<div class="box-bd pr mt15">
			<div class="tab-content custom-content p15">
				<div>
					<el-row class="mb10">
					  <i class="el-icon-edit"></i>
						<i class="el-icon-share"></i>
						<i class="el-icon-delete"></i>
						<el-button type="primary" icon="el-icon-search">搜索</el-button>
					</el-row>
					
					<el-row>
						<div style="border: 1px solid seagreen;text-align: center;background: seagreen;padding: 10px;" class="mb10 mr10 i-block" v-for="item in list">
							<el-button type="success" round  :icon="item"></el-button>
							<p style="color: #fff;">{{item}}</p>
						</div>
					</el-row>
				</div>
			</div>
		</div>
	</el-main>
</template>
<script>
	export default{
		data(){
			return {
				list:[
					'el-icon-info',
					'el-icon-error',
					'el-icon-success',
					'el-icon-warning',
					'el-icon-question',
					'el-icon-back',
					'el-icon-arrow-left',
					'el-icon-arrow-down',
					'el-icon-arrow-right',
					'el-icon-arrow-up',
					'el-icon-caret-left',
					'el-icon-caret-bottom',
					'el-icon-caret-top',
					'el-icon-caret-right',
					'el-icon-d-arrow-left',
					'el-icon-d-arrow-right',
					'el-icon-minus',
					'el-icon-plus',
					'el-icon-remove',
					'el-icon-circle-plus',
					'el-icon-remove-outline',
					'el-icon-circle-plus-outline',
					'el-icon-close',
					'el-icon-check',
					'el-icon-circle-close',
					'el-icon-circle-check',
					'el-icon-circle-close-outline',
					'el-icon-circle-check-outline',
					'el-icon-zoom-out',
					'el-icon-zoom-in',
					'el-icon-d-caret',
					'el-icon-sort',
					'el-icon-sort-down',
					'el-icon-sort-up',
					'el-icon-tickets',
					'el-icon-document',
					'el-icon-goods',
					'el-icon-sold-out',
					'el-icon-news',
					'el-icon-message',
					'el-icon-date',
					'el-icon-printer',
					'el-icon-time',
					'el-icon-bell',
					'el-icon-mobile-phone',
					'el-icon-service',
					'el-icon-view',
					'el-icon-menu',
					'el-icon-more',
					'el-icon-more-outline',
					'el-icon-star-on',
					'el-icon-star-off',
					'el-icon-location',
					'el-icon-location-outline',
					'el-icon-phone',
					'el-icon-phone-outline',
					'el-icon-picture',
					'el-icon-picture-outline',
					'el-icon-delete',
					'el-icon-search',
					'el-icon-edit',
					'el-icon-edit-outline',
					'el-icon-rank',
					'el-icon-refresh',
					'el-icon-share',
					'el-icon-setting',
					'el-icon-upload',
					'el-icon-upload2',
					'el-icon-download',
					'el-icon-loading'
					]
			}
		}
		
	}
	
</script>
