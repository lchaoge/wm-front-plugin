<template>
	<el-main>
		<div class="p15">
	        <h4>功能描述</h4>
	        <p>此款插件多功能展示分页信息，包括总页数、条数、选择盒等信息....</p>
	        <h4>引用</h4>
	        <p>正常JS中直接复制以下节点到文档head中</p>
	        <p></p><pre conf-path="rtlPaging">&lt;script type="text/javascript" src="<em>http://front-plugin.wumart.com/dist/plugin/RtlPaging.js</em>"&gt;&lt;/script&gt;</pre><p></p>
	        <p>AMD中，在require.config中找到paths配置</p>
	        <p></p><pre conf-path="rtlPagingAmd">rtlPaging:'http://front-plugin.wumart.com/dist/js/jquery.min',require(['rtlPaging'], function(rtlPaging){})</pre><p></p>
	        <div class="alert alert-danger">
	            注：1.在初始化此插件之前请确保引入bootstrap,jQuery 1.9.1+<br>
	        </div>
	        <h4>用法</h4>
	        <p>
	            <pre>
	            	&lt;div id="pagingCtrl"&gt;&lt;/div&gt;
	            </pre>
	        </p>
	        <pre>       
	        /**
	         * @type el String element id, size Number total page size, step Number page step,
	         * @type desc String A=&gt;all C=&gt;count P=&gt;page O=&gt;other, descCount Number page total record count,
	         * @type multi String S=&gt;show whether to display the selection box,
	         * @type multiCallback Function when you change the selection box call back function,
	         * @type callback Function when you click the number button or go button call back function.
	         * @type multiArray the selection box.
	         */
	        new RtlPaging({
	            el: "pagingCtrl",
	            size: 20,
	            step: 2,//默认为2
	            desc: "O",
	            descCount: 400,
	            multi: "S",
	            /* multiArray:[10,20,30,500],*///自定义每页展示的条数，如果没定义默认为[20, 50, 100]
	            multiCallback: function(num, callback){
	                callback(12);//12为总页数
	            },
	            callback:function(num){
	                $("#test").html('now paging number : '+num);
	            }
	        });
	        </pre>
	    </div>
	</el-main>	
</template>
<script>
</script>
