/*
 * Description: vuex-actions.js
 * Author: chaoge
 * Date: 2018/04/16
*/


import mutations from './mutations.js'

export default {
	// 设置mandt
	setMandt({commit},mandt){
		commit("setMandt",mandt)
	},
	setIndu({commit},indu){
		commit("setIndu",indu)
	},
	setSiteNo({commit},siteNo){
		commit("setSiteNo",siteNo)
	}
}