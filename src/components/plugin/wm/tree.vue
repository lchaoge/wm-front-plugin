<template>
	<el-main>
		<div class="p15">
	        <h4>功能描述</h4>
	        <p>此款插件解决树形菜单tree;</p>
	        <h4>引用</h4>
	        <p>正常JS中直接复制以下节点到文档head中</p>
	        <p></p><pre conf-path="rtlTree">&lt;script type="text/javascript" src="<em>http://front-plugin.wumart.com/dist/plugin/rtlTree.js</em>"&gt;&lt;/script&gt;</pre><p></p>
	        <p>AMD中，在require.config中找到paths配置</p>
	        <p></p><pre conf-path="rtlTreeAmd">rtlPagingInc:'http://front-plugin.wumart.com/dist/js/jquery.min',require(['rtlTree'], function(rtlTree){})</pre><p></p>
	        <div class="alert alert-danger">
	            注：1.在初始化此插件之前请确保引入bootstrap,jquery<br>
	          2.页面调用方法:(JSON格式必须按照给出的样板拼装，每次点击页面的勾选按钮在回调函数种都将放回一个页面已操作后的新数)
	        </div>
	        <h4>用法</h4>
	        <p>
	
	        </p>
	        <pre>       页面调用方法:(JSON格式必须按照给出的样板拼装，每次点击页面的勾选按钮在回调函数种都将放回一个页面已操作后的新数);
	            //console打印出相应的数据结构
	       new RtlTree({
	                    elId: 'treeDemo',
	                    data: [
	                        {
	                            "txt": "华北区01",
	                            "id": 1,
	                            "ops": {
	                                "disable": false,
	                                "checked": true
	                            },
	                            "children": [
	                                {
	                                    "txt": "物美营运部",
	                                    "id": 11,
	                                    "ops": {
	                                        "disable": false,
	                                        "checked": true
	                                    },
	                                    "children": [
	                                        {
	                                            "txt": "海淀一区",
	                                            "id": 111,
	                                            "ops": {
	                                                "disable": false,
	                                                "checked": true
	                                            },
	                                            "children": [
	                                                {
	                                                    "txt": "01 志新店",
	                                                    "id": 1111,
	                                                    "ops": {
	                                                        "disable": false,
	                                                        "checked": true
	                                                    }
	                                                },
	                                                {
	                                                    "txt": "01 清河店",
	                                                    "id": 1112,
	                                                    "ops": {
	                                                        "disable": false,
	                                                        "checked": true
	                                                    }
	                                                },
	                                                {
	                                                    "txt": "01 百旺店",
	                                                    "id": 1113,
	                                                    "ops": {
	                                                        "disable": false,
	                                                        "checked": false
	                                                    }
	                                                }
	                                            ]
	                                        },
	                                        {
	                                            "txt": "海淀二区",
	                                            "id": 111,
	                                            "ops": {
	                                                "disable": true,
	                                                "checked": false
	                                            },
	                                            "children": [
	                                                {
	                                                    "txt": "02 志新店",
	                                                    "id": 1111,
	                                                    "ops": {
	                                                        "disable": false,
	                                                        "checked": false
	                                                    }
	                                                },
	                                                {
	                                                    "txt": "02 清河店",
	                                                    "id": 1112,
	                                                    "ops": {
	                                                        "disable": false,
	                                                        "checked": false
	                                                    }
	                                                },
	                                                {
	                                                    "txt": "02 百旺店",
	                                                    "id": 1113,
	                                                    "ops": {
	                                                        "disable": true,
	                                                        "checked": false
	                                                    }
	                                                }
	                                            ]
	                                        }
	                                    ]
	                                },
	                                {
	                                    "txt": "物美便利店",
	                                    "id": 12,
	                                    "ops": {
	                                        "disable": true,
	                                        "checked": true
	                                    },
	                                    "children": [
	                                        {
	                                            "txt": "海淀一区",
	                                            "id": 121,
	                                            "ops": {
	                                                "disable": false,
	                                                "checked": true
	                                            },
	                                            "children": [
	                                                {
	                                                    "txt": "01 志新店",
	                                                    "id": 1211,
	                                                    "ops": {
	                                                        "disable": false,
	                                                        "checked": true
	                                                    }
	                                                },
	                                                {
	                                                    "txt": "01 清河店",
	                                                    "id": 1212,
	                                                    "ops": {
	                                                        "disable": false,
	                                                        "checked": true
	                                                    }
	                                                },
	                                                {
	                                                    "txt": "01 百旺店",
	                                                    "id": 1213,
	                                                    "ops": {
	                                                        "disable": false,
	                                                        "checked": false
	                                                    }
	                                                }
	                                            ]
	                                        }
	                                    ]
	                                }
	                            ]
	                        },
	                        {
	                            "txt": "华北区02",
	                            "id": 1,
	                            "ops": {
	                                "disable": false,
	                                "checked": true
	                            }
	                        },
	                        {
	                            "txt": "华北区03",
	                            "id": 1,
	                            "ops": {
	                                "disable": false,
	                                "checked": true
	                            }
	                        },
	                        {
	                            "txt": "华北区04",
	                            "id": 1,
	                            "ops": {
	                                "disable": false,
	                                "checked": true
	                            },
	                            "children": [
	                                {
	                                    "txt": "物美营运部",
	                                    "id": 11,
	                                    "ops": {
	                                        "disable": false,
	                                        "checked": true
	                                    },
	                                    "children": [
	                                        {
	                                            "txt": "海淀一区",
	                                            "id": 111,
	                                            "ops": {
	                                                "disable": false,
	                                                "checked": true
	                                            },
	                                            "children": [
	                                                {
	                                                    "txt": "01 志新店",
	                                                    "id": 1111,
	                                                    "ops": {
	                                                        "disable": false,
	                                                        "checked": true
	                                                    }
	                                                },
	                                                {
	                                                    "txt": "01 清河店",
	                                                    "id": 1112,
	                                                    "ops": {
	                                                        "disable": false,
	                                                        "checked": true
	                                                    }
	                                                },
	                                                {
	                                                    "txt": "01 百旺店",
	                                                    "id": 1113,
	                                                    "ops": {
	                                                        "disable": false,
	                                                        "checked": false
	                                                    }
	                                                }
	                                            ]
	                                        },
	                                        {
	                                            "txt": "海淀二区",
	                                            "id": 111,
	                                            "ops": {
	                                                "disable": true,
	                                                "checked": false
	                                            },
	                                            "children": [
	                                                {
	                                                    "txt": "02 志新店",
	                                                    "id": 1111,
	                                                    "ops": {
	                                                        "disable": false,
	                                                        "checked": false
	                                                    }
	                                                },
	                                                {
	                                                    "txt": "海淀二区",
	                                                    "id": 111,
	                                                    "ops": {
	                                                        "disable": true,
	                                                        "checked": false
	                                                    },
	                                                    "children": [
	                                                        {
	                                                            "txt": "02 志新店",
	                                                            "id": 1111,
	                                                            "ops": {
	                                                                "disable": false,
	                                                                "checked": false
	                                                            }
	                                                        },
	                                                        {
	                                                            "txt": "02 清河店",
	                                                            "id": 1112,
	                                                            "ops": {
	                                                                "disable": false,
	                                                                "checked": false
	                                                            }
	                                                        },
	                                                        {
	                                                            "txt": "02 百旺店",
	                                                            "id": 1113,
	                                                            "ops": {
	                                                                "disable": true,
	                                                                "checked": false
	                                                            }
	                                                        }
	                                                    ]
	                                                },
	                                                {
	                                                    "txt": "02 百旺店",
	                                                    "id": 1113,
	                                                    "ops": {
	                                                        "disable": true,
	                                                        "checked": false
	                                                    }
	                                                }
	                                            ]
	                                        }
	                                    ]
	                                },
	                                {
	                                    "txt": "物美便利店",
	                                    "id": 12,
	                                    "ops": {
	                                        "disable": true,
	                                        "checked": true
	                                    },
	                                    "children": [
	                                        {
	                                            "txt": "海淀一区",
	                                            "id": 121,
	                                            "ops": {
	                                                "disable": false,
	                                                "checked": true
	                                            },
	                                            "children": [
	                                                {
	                                                    "txt": "01 志新店",
	                                                    "id": 1211,
	                                                    "ops": {
	                                                        "disable": false,
	                                                        "checked": true
	                                                    }
	                                                },
	                                                {
	                                                    "txt": "01 清河店",
	                                                    "id": 1212,
	                                                    "ops": {
	                                                        "disable": false,
	                                                        "checked": true
	                                                    }
	                                                },
	                                                {
	                                                    "txt": "01 百旺店",
	                                                    "id": 1213,
	                                                    "ops": {
	                                                        "disable": false,
	                                                        "checked": false
	                                                    }
	                                                }
	                                            ]
	                                        }
	                                    ]
	                                }
	                            ]
	                        }
	                    ],
	                    callback: function(data) {
	                        console.log(JSON.stringify(data));
	                    }
	                });
	        </pre>
	    </div>
	</el-main>	
</template>
<script>
</script>
