<template>
	<el-main>
		<div class="p15">
	        <h4>功能描述</h4>
	        <p>此款插件用于日期选择，时间选择</p>
	        <h4>引用</h4>
	        <p>正常JS中直接复制以下节点到文档head中</p>
	        <p></p><pre conf-path="rtlCalendarCtrl">&lt;script type="text/javascript" src="<em>http://front-plugin.wumart.com/dist/plugin/RtlCalendarCtrl.js</em>"&gt;&lt;/script&gt;</pre><p></p>
	        <p>AMD中，在require.config中找到paths配置</p>
	        <p></p><pre conf-path="rtlCalendarCtrlAmd">rtlCalendarCtrl:'http://front-plugin.wumart.com/dist/js/jquery.min',require(['rtlCalendarCtrl'], function(rtlCalendarCtrl){})</pre><p></p>
	        <div class="alert alert-danger">
	            注：1.在初始化此插件之前请确保引入bootstrap,jquery<br>
	        </div>
	        <h4>用法</h4>
	        <p>
	            <!--html代码:<img src="../images/calCtrl.png">-->
	        </p>
	        <pre>       
	        	/**
	              * el [require] =&gt; element id;callback [require] =&gt; after checked callback function,return a date string;
	              * td [not require] =&gt; set initial date;sd [not require] =&gt; start date;ed [not require] =&gt; end date;
	              * nt [not require] =&gt; need time box type ['Y' =&gt; checked date then show time box];
	              * ts [not require] =&gt; time step;
	            */
	            new CalendarCtrl({
	              el: 'CalendarCtrl',
	              td: '2016-09-28',
	              sd: '2016-08-09',
	              ed: '2016-10-15',
	              nt: 'Y',
	              ts: 20,
	              callback: function (data) {
	                console.log('now date is ', data);
	              }
	            });
	        </pre>
	    </div>
	</el-main>	
</template>
<script>
</script>
