/*
 * Description: vue-router-index.js
 * Author: chaoge
 * Date: 2018/04/16
*/


// 一级路由
import Home from './../components/home'

import Plugin from './../components/plugin/index'
import Calendar from './../components/plugin/wm/calendar'
import CalendarCtrl from './../components/plugin/wm/calendarCtrl'
import Kselect from './../components/plugin/wm/kselect'
import Load from './../components/plugin/wm/load'
import Modal from './../components/plugin/wm/modal'
import NoteCalendar from './../components/plugin/wm/noteCalendar'
import Notpage from './../components/plugin/wm/notpage'
import Page from './../components/plugin/wm/page'
import PhoneCalendar from './../components/plugin/wm/phoneCalendar'
import Select from './../components/plugin/wm/select'
import Tables from './../components/plugin/wm/tables'
import Tree from './../components/plugin/wm/tree'


export const routes = [
	{path:'/',name:'homeLink',component:Home,redirect:'/plugin',children:[
		
		// 插件
		{path:'/plugin',name:'pluginLink',component:Plugin},
		
		{path:'/plugin/calendar',name:'calendarLink',component:Calendar},
		{path:'/plugin/calendarCtrl',name:'calendarCtrlLink',component:CalendarCtrl},
		{path:'/plugin/kselect',name:'kselectLink',component:Kselect},
		{path:'/plugin/load',name:'loadLink',component:Load},
		{path:'/plugin/modal',name:'modalLink',component:Modal},
		{path:'/plugin/noteCalendar',name:'noteCalendarLink',component:NoteCalendar},
		{path:'/plugin/notpage',name:'notpageLink',component:Notpage},
		{path:'/plugin/page',name:'pageLink',component:Page},
		{path:'/plugin/phoneCalendar',name:'phoneCalendarLink',component:PhoneCalendar},
		{path:'/plugin/select',name:'selectLink',component:Select},
		{path:'/plugin/tables',name:'tablesLink',component:Tables},
		{path:'/plugin/tree',name:'treeLink',component:Tree},
		
	]},
	{path:'*',redirect:'/'},
	
]
