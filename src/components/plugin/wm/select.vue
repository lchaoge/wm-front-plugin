<template>
	<el-main>
		<div class="p15">
	        <h4>功能描述</h4>
	        <p>此款插件多功能展示无样式单选下拉</p>
	        <h4>引用</h4>
	        <p>正常JS中直接复制以下节点到文档head中</p>
	        <p></p><pre conf-path="rtlSelect">&lt;script type="text/javascript" src="<em>http://front-plugin.wumart.com/dist/plugin/RtlSelect.js</em>"&gt;&lt;/script&gt;</pre><p></p>
	        <p>AMD中，在require.config中找到paths配置</p>
	        <p></p><pre conf-path="rtlSelectAmd">rtlSelect:'http://front-plugin.wumart.com/dist/js/jquery.min',require(['rtlSelect'], function(rtlSelect){})</pre><p></p>
	        <div class="alert alert-danger">
	            注：1.在初始化此插件之前请确保引入bootstrap,jQuery 1.9.1+<br>
	        </div>
	        <h4>用法</h4>
	        <pre>      
	        /**
	         * @type elId: string, data: Array, type: number 0 said radio and without radio style,1 said checkbox,2 said radio and with radio style,
	         *   paging: boolean 1 is request paging, other not request
	         * @type callback: Function, nowCount: number, totalCount: number
	         */
	            //无样式单选下拉
	            new RtlSelect({
	            elId: 'selectCtrl2',
	            data: [{key: 1, value: 'list item1', checked: true},{key: 2, value: 'list item2'},{key: 3, value: 'list item3'},{key: 4, value: 'list item4'},{key: 5, value: 'list item5'}],
	            callback: function (data) {
	                console.log(data);
	            }
	            });
	            //有样式单选下拉
	               new RtlSelect({
	            elId: 'selectCtrl',
	            multi: 2,
	            callback: function (data) {
	                console.log(data);
	            },
	            data: [{key: 1, value: 'fdsafsfd'},{key: 2, value: 'rewqrewq', checked: true},{key: 3, value: 'tutryeytr'},{key: 4, value: 'ouioiuouiou'},{key: 5, value: 'bvmnnbvnmbmn'}]
	        });
	            //复选下拉
	             new RtlSelect({
	            elId: 'selectCtrl1',
	            multi: 1,
	            callback: function (data) {
	                console.log(data);
	            },
	            data: [{key: 1, value: '12'},{key: 2, value: '123'},{key: 3, value: '321', checked: true},{key: 4, value: '32'},{key: 5, value: '13'}]
	        });
	            //分页单选下拉
	           new RtlSelect({
	            elId: 'selectCtrl3',
	            multi: 2,
	            paging: true,
	            callback: function(num, callback){
	                if(callback) {
	                    var path = location.href;
	                    var url = path.substring(0, path.indexOf('rtl-calendar'));
	                    console.log(url);
	                    $.ajax({
	                        url: '../moke/mokeList.json',
	                        method: 'GET',
	                        success: function(data){
	                            var tData = data.splice((num - 1)*10, 10);
	                            setTimeout(function(){
	                                callback(tData);
	                            }, 1000);
	                        },
	                        error: function(){
	                            callback();
	                        }
	                    });
	                    console.log('now page count is : ' + num);
	                } else {
	                    console.log(num);
	                }
	            },
	            pageCount: 12,
	            nowCount: 1,
	            totalCount: 116,
	            data: [{ "key": "KEY0", "value": "VALUE600"}, { "key": "KEY1", "value": "VALUE601"}, { "key": "KEY2", "value": "VALUE602", checked: true}, { "key": "KEY3", "value": "VALUE603"}, { "key": "KEY4", "value": "VALUE604"}, { "key": "KEY5", "value": "VALUE605"}, { "key": "KEY6", "value": "VALUE606"}, { "key": "KEY7", "value": "VALUE607"}, { "key": "KEY8", "value": "VALUE608"}, { "key": "KEY9", "value": "VALUE609"}, { "key": "KEY10", "value": "VALUE610"}]
	        });
	            //分页复选下拉
	             new RtlSelect({
	            elId: 'selectCtrl4',
	            multi: 1,
	            paging: true,
	            callback: function(num, callback){
	                if(callback) {
	                    var path = location.href;
	                    var url = path.substring(0, path.indexOf('rtl-calendar'));
	                    console.log(url);
	                    $.ajax({
	                        url: '../moke/mokeList.json',
	                        method: 'GET',
	                        success: function(data){
	                            var tData = data.splice((num - 1)*10, 10);
	                            setTimeout(function(){
	                                callback(tData);
	                            }, 1000);
	                        },
	                        error: function(){
	                            callback();
	                        }
	                    });
	                    console.log('now page count is : ' + num);
	                } else {
	                    console.log(num);
	                }
	            },
	            pageCount: 12,
	            nowCount: 1,
	            totalCount: 116,
	            data: [{ "key": "KEY0", "value": "VALUE600"}, { "key": "KEY1", "value": "VALUE601"}, { "key": "KEY2", "value": "VALUE602"}, { "key": "KEY3", "value": "VALUE603", checked: true}, { "key": "KEY4", "value": "VALUE604"}, { "key": "KEY5", "value": "VALUE605"}, { "key": "KEY6", "value": "VALUE606"}, { "key": "KEY7", "value": "VALUE607"}, { "key": "KEY8", "value": "VALUE608"}, { "key": "KEY9", "value": "VALUE609"}, { "key": "KEY10", "value": "VALUE610"}]
	        });
	        </pre>
	    </div>
	</el-main>	
</template>
<script>
</script>
