<template>
	<el-main>
		<div class="p15">
	        <h4>功能描述</h4>
	        <p>此款插件解决多需求选择日期，用户可以根据自己的需求选择自然日、自然周、自然月、自然年、自定义，然后选择具体的时间或范围</p>
	        <h4>引用</h4>
	        <p>正常JS中直接复制以下节点到文档head中</p>
	        <p></p><pre conf-path="rtlCalendar">&lt;script type="text/javascript" src="<em>http://front-plugin.wumart.com/dist/plugin/RtlCalendar.js</em>"&gt;&lt;/script&gt;</pre><p></p>
	        <p>AMD中，在require.config中找到paths配置</p>
	        <p></p><pre conf-path="rtlCalendarAmd">rtlCalendar:'http://front-plugin.wumart.com/dist/js/jquery.min',require(['rtlCalendar'], function(rtlCalendar){})</pre><p></p>
	        <div class="alert alert-danger">
	            注：1.在初始化此插件之前请确保引入bootstrap,jquery<br>
	        </div>
	        <h4>用法</h4>
	        <p>
	            <pre>
	            	&lt;div id="calCtrl"&gt;&lt;/div&gt;
	            </pre>
	        </p>
	        <pre>   
	        /**
	         * @type elNode: Element, checked: Function, treeType: string, styles: cssStyle, startTime: string
	         * @type endTime: string, sIptN: Element, dHeadN: Element, dContentN: Element, dTreeN: Element
	         * @type isModal: bool
	         */
	        new RtlCalendar('calCtrl', {
	            checked: function(){
	                console.log(arguments);
	            },
	            isModal: 1,
	            startDate: '2016/07/13',
	            endDate: '2016/12/26',
	            pull: 'left',
	            format: 'dmwyS',
	
	            setDate: '2016/11/08&amp;2016-11'
	        });
	        </pre>
	    </div>
	</el-main>	
</template>
<script>
</script>
