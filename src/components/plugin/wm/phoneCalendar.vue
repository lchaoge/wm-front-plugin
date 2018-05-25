<template>
	<el-main>
		<div class="p15">
	        <h4>功能描述</h4>
	        <p>此款插件解决手机日期;(注：请在chrome的手机模式下查看)</p>
	        <h4>引用</h4>
	        <p>正常JS中直接复制以下节点到文档head中</p>
	        <p></p><pre conf-path="rtlTableScroll"></pre><p></p>
	        <p>AMD中，在require.config中找到paths配置</p>
	        <p></p><pre conf-path="rtlTableScrollAmd"></pre><p></p>
	        <div class="alert alert-danger">
	            注：1.在初始化此插件之前请确保引入jquery或者zepto<br>
	        </div>
	        <h4>用法</h4>
	        <pre>     
	         new PhoneCalendar({
	            elId: 'phoneCalendar',
	            date: '2016/12/09',
	            callback: function (num) {
	                console.log(num);
	            }
	          });
	        </pre>
	    </div>
	</el-main>	
</template>
<script>
</script>
