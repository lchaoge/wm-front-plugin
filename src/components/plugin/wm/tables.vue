<template>
	<el-main>
		<div class="p15">
	        <h4>功能描述</h4>
	        <p>此款插件解决表格太宽太高，无法快速操作左右滑动和快速浏览表头内容;</p>
	        <h4>引用</h4>
	        <p>正常JS中直接复制以下节点到文档head中</p>
	        <p></p><pre conf-path="rtlTableScroll">&lt;script type="text/javascript" src="<em>http://front-plugin.wumart.com/dist/plugin/RtlTableScroll.js</em>"&gt;&lt;/script&gt;</pre><p></p>
	        <p>AMD中，在require.config中找到paths配置</p>
	        <p></p><pre conf-path="rtlTableScrollAmd">rtlTableScroll:'http://front-plugin.wumart.com/dist/js/jquery.min',require(['rtlTableScroll'], function(rtlTableScroll){})</pre><p></p>
	        <div class="alert alert-danger">
	            注：1.在初始化此插件之前请确保引入bootstrap,jquery<br>
	                2.内容超出div范围出现滚动条的时候左右滑动按钮才出现，div高度固定内滚动的时候表头锁定不出现
	        </div>
	        <h4>用法</h4>
	        <p>
	            <pre>
	            	&lt;duv class="table-responsive" id="tableDemo"&gt;
	            		&lt;table&gt; class="table table-bordered table-striped table-hover"&gt;
	            			&lt;thead&gt;
	            				&lt;tr class="rtl-table-header"&gt;
	            					&lt;th class="mw200"&gt;表头1&lt;/th&gt;
	            					&lt;th class="mw200"&gt;表头2&lt;/th&gt;
	            					&lt;th class="mw200"&gt;表头3&lt;/th&gt;
	            					&lt;th class="mw200"&gt;表头4&lt;/th&gt;
	            					&lt;th class="mw200"&gt;表头5&lt;/th&gt;
	            					&lt;th class="mw200"&gt;表头6&lt;/th&gt;
	            					&lt;th class="mw200"&gt;表头7&lt;/th&gt;
	            					&lt;th class="mw200"&gt;表头8&lt;/th&gt;
	            					&lt;th class="mw200"&gt;表头9&lt;/th&gt;
	            				&lt;/tr&gt;
	            			&lt;/thead&gt;
	            			&lt;tbody class="rel-table-body"&gt;
	            			&lt;/tbody&gt;
	            		&lt;/table&gt;
	            	&lt;/div&gt;
	            </pre>
	        </p>
	        <pre>     
	        /**
	         * elId:table外div的id/class ;必传
	         * isFixed//此处可不写，默认为0；1：表头锁定，0：表头不锁定，此只为简单的单行表头
	         * isScroll//此处可不写，默认为0；1：不显示，0：显示左右滚动
	         * isOpen//此处可不写，默认为0；1：显示，0：不显示展开隐藏，有隐藏的table列才起作用,在相应的的隐藏表头添加&lt;th class="mw200" rowspan="2" rtl-data-visible&gt;表头11&lt;/th&lt;//rtl-data-visible非常重要
	         * */
	        new RtlTableScroll({
	            elId:"tableDemo",
	            isFixed:1,
	        });
	        </pre>
	    </div>
	</el-main>	
</template>
<script>
</script>
