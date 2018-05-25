<template>
	<el-main>
		<div class="p15">
	        <h4>功能描述</h4>
	        <p>此款插件多功能展示分页信息，包括总页数、条数、选择盒等信息....</p>
	        <h4>引用</h4>
	        <p>正常JS中直接复制以下节点到文档head中</p>
	        <p></p><pre conf-path="rtlModal">&lt;script type="text/javascript" src="<em>http://front-plugin.wumart.com/dist/plugin/RtlDialog.js</em>"&gt;&lt;/script&gt;</pre><p></p>
	        <p>AMD中，在require.config中找到paths配置</p>
	        <p></p><pre conf-path="rtlModalAmd">rtlModal:'http://front-plugin.wumart.com/dist/js/jquery.min',require(['rtlModal'], function(rtlModal){})</pre><p></p>
	        <div class="alert alert-danger">
	            注：1.在初始化此插件之前请确保引入bootstrap,jQuery 1.9.1+<br>
	            2.此插件有两种提示效果：弹出窗口信息提示和定时消息框用boxType:prompt区分
	        </div>
	        <h4>用法</h4>
	        <pre>          
	           /**
                * @type title: string [require] popup box title, callback: function [require] callback function when operating the pop-up box
                * @type msg: string [require] show message('this is message' for only show, 'this is ###100### pages and total ###300?f00### count' for change color style)
             	* @type button: string [not require] &lt;cancel&gt; for only cancel button &lt;confirm&gt; for only confirm button
             	* @type type: string [not require] default for warning &lt;error&gt; for danger &lt;success&gt; for success
             	* @type boxType: string 'prompt' is show timer message box
             	* @type cancelTimer: number ,How much time is automatically closed
	            */
	            //弹出窗口
                new RtlDialog({
	                title: '批量删除',
	                msg: '您共选择了100件产品，确认删除?',
	                button: '',
	                type: 'warning',
	                cancelTimer:'1000',
	                callback: function (opt) {
	                console.log('this is now operation : ' + opt);
	                }
	                });
                });
	            //定时消息框
	              new RtlDialog({
	                        msg: '您共选择了100件产品，确认删除?',
	                        boxType: 'prompt',
	                        type: 'info' // warning,danger
	                    });
	        </pre>
	    </div>
	</el-main>	
</template>
<script>
</script>
