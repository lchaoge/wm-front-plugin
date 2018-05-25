/*
 * Description: vuex-mutation.js
 * Author: zhaoyiming
 * Date: 2017/9/17
*/

import getters from './getters.js'

export default {
	setMandt (state, mandt) {
		state.mandt = mandt;
	},
	setIndu (state, indu) {
		state.indu = indu;
	},
	setSiteNo (state, siteNo) {
		state.siteNo = siteNo;
	}
}