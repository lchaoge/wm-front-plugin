<template>
	<el-main>
		<div class="p15">
	        <h4>功能描述</h4>
	        <p>此款插件用于请求数据时展示加载提示</p>
	        <h4>引用</h4>
	        <p>正常JS中直接复制以下节点到文档head中</p>
	        <p></p><pre conf-path="rtlLoading">&lt;script type="text/javascript" src="<em>http://front-plugin.wumart.com/dist/plugin/RtlLoading.js</em>"&gt;&lt;/script&gt;</pre><p></p>
	        <p>AMD中，在require.config中找到paths配置</p>
	        <p></p><pre conf-path="rtlLoadingAmd">rtlLoading:'http://front-plugin.wumart.com/dist/js/jquery.min',require(['rtlLoading'], function(rtlLoading){})</pre><p></p>
	        <div class="alert alert-danger">
	            注：1.在初始化此插件之前请确保引入bootstrap,jQuery 1.9.1+<br>+.
	        </div>
	        <h4>用法</h4>
	        <pre>         
	        	var loadNode = new RtlLoading();//初始化加载遮罩层
	            loadNode.hide();//关闭加载遮罩层
	        </pre>
	    </div>
	</el-main>	
</template>
<script>
</script>
