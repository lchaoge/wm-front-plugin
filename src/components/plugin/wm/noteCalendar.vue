<template>
	<el-main>
		 <div class="p15">
	         <h4>功能描述</h4>
	        <p>此款插件可以满足用户以日历形式快速查看一个月内订货单，退货单的相关重要信息</p>
	        <h4>引用</h4>
	        <p>正常JS中直接复制以下节点到文档head中</p>
	        <p></p><pre conf-path="rtlNoteCalendar">&lt;script type="text/javascript" src="<em>http://front-plugin.wumart.com/dist/plugin/RtlNoteCalendar.js</em>"&gt;&lt;/script&gt;</pre><p></p>
	        <p>AMD中，在require.config中找到paths配置</p>
	        <p></p><pre conf-path="rtlNoteCalendarAmd">rtlNoteCalendar:'http://front-plugin.wumart.com/dist/js/jquery.min',require(['rtlNoteCalendar'], function(rtlNoteCalendar){})</pre><p></p>
	        <div class="alert alert-danger">
	            注：1.在初始化此插件之前请确保引入bootstrap,jQuery 1.9.1+<br>
	        </div>
	        <h4>用法</h4>
	        <div class="alert alert-info">
	             说明：&nbsp;elId:element ID必传；type:bubbles展示气泡，""无气泡，默认为无气泡；date:非必传，默认为当前日期；<br>
	            data:初始化时非必传，默认为[]<br>
	            callback:见下表
	
	        </div>
	        <h4>用法</h4>
	        <p>
	            <!--html代码:<img src="../images/noteCalendar.png">-->
	        </p>
	        <pre>
	        /**
	         * @type elId: string require element id, type: string require need to show bubbles, date: date not require, data: array not require
	         * @type callback: function arguments[0] type of event target
	         */
	        new RtlNoteCalendar({
	            elId: 'noteCalCtr',
	            type: 'bubble',
	            date: '2016-09-10',
	            data: {},
	            /**
                 * return param
                 * button: arguments[1] 起始日期 arguments[2] 结束日期 arguments[3] 重置日历回调函数
                 * init: arguments[1] 起始日期 arguments[2] 结束日期 arguments[3] 重置日历回调函数
                 * span： arguments[1] 状态 arguments[2] 数量 arguments[3] 日期
                 */
	            callback: function () {
	                var args = arguments;
	                if(args[0] === 'button' || args[0] === 'init'){
	                   //to do......
	                    console.log(args[1] + ' ; ' + args[2]);
	                       args[3](
	                       //气泡传入回调函数的数据格式
	                       [
	                         {
	                            date: '2016/8/9',//必传
	                            data: {
	                                orders: 18,//订货单数量，非必传
	                                refunds: 26,//退货单数量，非必传
	                                notConfirmed: 23,//未确认单数量，非必传
	                                newFlag: 1,//是否新订单1,0，非必传
	                                emergency: 1//是否紧急1,0，非必传
	                                salesFlag:1//是否促销1,0，非必传
	                            }
	                         }
	                       ]
	                   //无气泡传入回调函数的数据格式
	                       [
	                        {
	                            date: '2016/8/9',
	                            data: {
	                                hasConfirmed: 10,//已确认单数量，非必传
	                                notConfirmed: 20,//未确认单数量，非必传
	                                arrived: 18,//已到货订单数量，非必传
	                                refunds: 26//退货单数量，非必传
	                            }
	
	                        }
	                    );
	                } else {
	                    console.log(args);
	                    //to do......
	                }
	            }
	        });
	        </pre> 
	    </div>
	</el-main>	
</template>
<script>
</script>
