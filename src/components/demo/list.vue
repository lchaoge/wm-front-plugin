<template>
	<el-main>
		<div class="container-fluid">
			<el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{name:'homeLink'}"><i class="glyphicon glyphicon-home"></i>首页</el-breadcrumb-item>
			  <el-breadcrumb-item>列表</el-breadcrumb-item>
			</el-breadcrumb>			
		</div>
		<div class="rtl-custom-box mt15">
			<div class="box-hd">
				<div class="cont">
					<div class="form-horizontal">
						<el-form :inline="true" class="demo-form-inline">
							<el-row>
							    <el-col :span="6">
							  		<el-col :span="8"><label class="control-label">条件1：</label></el-col>
							  		<el-col :span="16">
							  			<el-form-item>
								  			<el-input v-model="pageData.tableObj.query0" placeholder="请输入条件" />
									    </el-form-item>
							  		</el-col>
							    </el-col>
							  <el-col :span="6">
						  		<el-col :span="8"><label class="control-label">提交时间：</label></el-col>
						  		<el-col :span="16">
						  			<el-date-picker v-model="pageData.tableObj.created" value-format="yyyy-MM-dd" type="date" placeholder="请选择日期"></el-date-picker>	
						  		</el-col>
							  </el-col>
								<el-col :span="6" class="text-center">
						  		<el-form-item>
								    <el-button type="primary" @click.stop="queryEvt" icon="el-icon-search">查询</el-button>
								  </el-form-item>
							  </el-col>
							</el-row>
						</el-form>
					</div>
				</div>
			</div>
		</div>
		<div class="box-bd pr mt15">
			<div class="tab-content custom-content">
				<div class="tab-pane in active">
					<div class="table-responsive">
						<el-table border :data="pageData.tableObj.list" style="width: 100%">
					    <el-table-column sortable prop="id" label="序号"></el-table-column>
					    <el-table-column sortable prop="auditorId" label="操作人员工号"></el-table-column>
					    <el-table-column sortable prop="auditorName" label="操作者"></el-table-column>
					    <el-table-column sortable prop="created" label="操作时间"></el-table-column>
					    <el-table-column sortable prop="oaTypeName" label="操作模块"></el-table-column>
					    <el-table-column sortable prop="auditOpinion" label="操作记录"></el-table-column>
					  </el-table>
					</div>
					<div class="page">
						 <div class="block p15 text-center">
					    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" 
					    	:current-page="pageData.tableObj.currentPage" 
					    	:page-sizes="pageData.tableObj.pageArray"
					      :page-size="pageData.tableObj.pageSize"
					      layout="total, sizes, prev, pager, next, jumper"
					      :total="pageData.tableObj.totalRows">
					    </el-pagination>
					  </div>
					</div>
				</div>
			</div>
		</div>
	</el-main>
</template>

<script>
export default {
    data() {
      return {
      	pageData:{
      		tableObj:{
      			auditorId:"", // 操作人员编号
      			created :"", // 提交时间
      			currentPage: 1,
      			pageSize: 10,
      			totalPage: 1, // 多少页
      			totalRows: 1, // 总数
      			pageArray:[10,20,30,40,50],
      			list: []
      		},
      	},
      	value1:'',
      	value2:'',
      	currentPage4: 4,
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    created(){
    	this.initFunc()
    },
    methods: {
    	initFunc(){
    		this.queryEvt()
    	},
      queryEvt() {
      	let obj = {
      		auditorId :this.pageData.tableObj.auditorId,
			created :this.pageData.tableObj.created, 
			currentPage :this.pageData.tableObj.currentPage, 
			pageSize :this.pageData.tableObj.pageSize 
      	}
      	const loading = this.$loading({
          lock: true,
          spinner: 'wm-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
        fetch(this.$api.urls.POST_LOG_QUERYLOGMAIN,{
        	method:'post',
        	headers:{
      			"Content-type":"application/json",
      		},
      		credentials: "include",
        	body:JSON.stringify(obj)
        })
        .then(res=>res.json())
        .then(res=>{
        	setTimeout(() => {
	          loading.close();
	        }, 500)
	        if(res.success){
	        	this.pageData.tableObj.currentPage = res.model.currentPage // 页码当前
      			this.pageData.tableObj.pageSize = res.model.pageSize // 单页行数
      			this.pageData.tableObj.totalPage = res.model.pageCount // 多少页
      			this.pageData.tableObj.totalRows = res.model.count // 总数
      			const data =res.model.data
	        	for(let i =0;i<data.length;i++){
	        		data[i].created = this.$api.dateFormat("yyyy-MM-dd",data[i].created)
//	        		0:面积 1:比例 2:固定值 3:其它
	        		if(data[i].oaType == 1){
	        			data[i].oaTypeName = "面积"
	        		} else if(data[i].oaType == 2){
	        			data[i].oaTypeName = "比例"
	        		} else if(data[i].oaType == 3){
	        			data[i].oaTypeName = "固定值"
	        		} else if(data[i].oaType == 4){
	        			data[i].oaTypeName = "其它"
	        		}
	        	}
	        	this.pageData.tableObj.list = data
	        }else{
	        	this.$message.error(res.message)
	        }
        }).catch(err=>{
        	setTimeout(() => {
	          loading.close();
	        }, 500)
        	this.$message.error("系统错误："+err)
        })
        
      },
    	handleSizeChange(val) {
        this.pageData.tableObj.pageSize = val // 单页行数
        this.queryEvt()
      },
      handleCurrentChange(val) {
        this.pageData.tableObj.currentPage = val // 当前页
        this.queryEvt()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
