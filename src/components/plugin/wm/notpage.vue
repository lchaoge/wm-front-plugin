<template>
	<el-main>
		<div class="p15">
	        <h4>功能描述</h4>
	        <p>此款插件用于未知最大页时进行分页</p>
	        <h4>引用</h4>
	        <p>正常JS中直接复制以下节点到文档head中</p>
	        <p></p><pre conf-path="rtlPagingInc">&lt;script type="text/javascript" src="<em>http://front-plugin.wumart.com/dist/plugin/RtlPagingInc.js</em>"&gt;&lt;/script&gt;</pre><p></p>
	        <p>AMD中，在require.config中找到paths配置</p>
	        <p></p><pre conf-path="rtlPagingIncAmd">rtlPagingInc:'http://front-plugin.wumart.com/dist/js/jquery.min',require(['rtlPagingInc'], function(rtlPagingInc){})</pre><p></p>
	        <div class="alert alert-danger">
	            注：1.在初始化此插件之前请确保引入bootstrap,jQuery 1.9.1+<br>
	        </div>
	        <h4>用法</h4>
	        <p>
	            <pre>
	            	&lt;button class="btn-refresh btn" id="pagingRefresh"&gt;Refresh&lt;/button&gt;
	            	&lt;div id="pagingCtrlA"&gt;&lt;/div&gt;
	            </pre>
	        </p>
	        <pre>          
	           /**
	             * @type elId String element id,
	             * @type callback:arg0 pageNum
	             * @type isLast not require,default false
	             * @type callback:arg0:'next'/pageNumber,arg1:callback(isLast:true/false)
	             */
	            var _pCounter = 0;
	            var obj = new RtlPagingInc({
	                elId: 'pagingCtrlA',
	                isLast:false,
	                callback: function (arg0, arg1) {
	                    console.log(arguments);
	                    _pCounter ++;
	                    arg1(_pCounter &gt; 9 ? true : false);
	                }
	            });
	            $("#pagingRefresh").on('click', function () {
	                obj.refresh(true);//用于页面数据重新请求刷新页面arg:isLast:true/false
	            });
	        </pre>
	    </div>
	</el-main>	
</template>
<script>
</script>
