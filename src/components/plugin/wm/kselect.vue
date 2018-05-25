<template>
	<el-main>
		<div class="p15">
	        <h4>功能描述</h4>
	        <p>此款插件下拉类别增删排序</p>
	        <h4>引用</h4>
	        <p>正常JS中直接复制以下节点到文档head中</p>
	        <p></p><pre conf-path="rtlKSelect">&lt;script type="text/javascript" src="<em>http://front-plugin.wumart.com/dist/plugin/rtlKSelect.js</em>"&gt;&lt;/script&gt;</pre><p></p>
	        <p>AMD中，在require.config中找到paths配置</p>
	        <p></p><pre conf-path="rtlkSelectAmd">rtlPagingInc:'http://front-plugin.wumart.com/dist/js/jquery.min',require(['rtlKSelect'], function(rtlKSelect){})</pre><p></p>
	        <div class="alert alert-danger">
	            注：1.在初始化此插件之前请确保引入bootstrap.css<br>
	        </div>
	        <h4>用法</h4>
	        <pre>         
	           /**
	            * @type arr: array,id:elementid
	            * @type callback: Function, arr:array
	            */
	            rtlkSelect.initSelect({
	                arr:dd,
	                id:'test',
	                updateCallback:function (arr,callback) {
	                    console.log(arr);//[{key:'',value:''}]
	                    callback({code:'success'})
	                },
	                createCallback:function (obj,callback) {
	                    console.log(obj);
	                    /*返回创建的id*/
	                    callback({code:'success',key:data.model.id})
	                },
	                deleteCallback:function (checkArr,callback) {
	                    console.log(checkArr);
	                    callback({code:'success'});
	                }
	        });
	        </pre> 
	    </div>
	</el-main>	
</template>
<script>
</script>
