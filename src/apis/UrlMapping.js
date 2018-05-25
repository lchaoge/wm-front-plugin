/*
 * Description: UrlMapping
 * Author: chaoge
 * Date: 2018/05/23
*/


export default class UrlMapping {
	constructor(){
		this.isLocalHost = window.location.host.toLowerCase() == 'http://localhost:8080';
		this.origin = window.location.origin;
		
		this.POST_QUERYCOMMONINFO = (this.isLocalHost?'/apis':this.origin)+'/wumart/partner/queryCommonInfo';                // 列表-通过门店编号（siteNo）获取业态，小店类型，大区号
		this.POST_QUERYSUBJECTTYPE = (this.isLocalHost?'/apis':this.origin)+'/wumart/partner/querySubjectType';              // 列表-查询科目
		
		this.POST_PARTNER_QUERYSITESHOP = (this.isLocalHost?'/apis':this.origin)+'/wumart/partner/querySiteShop';            // 列表-小店维护
		this.POST_PARTNER_CREATE = (this.isLocalHost?'/apis':this.origin)+'/wumart/partner/create';                          // 新建-小店维护
		this.POST_PARTNER_QUERYPARTNERTEAM = (this.isLocalHost?'/apis':this.origin)+'/wumart/partner/queryPartnerTeam';      // 列表-合伙人组
		this.POST_PARTNER_QUERYSHOPTYPE = (this.isLocalHost?'/apis':this.origin)+'/wumart/partner/queryShopType';            // 列表-小店类型
		this.POST_PARTNER_UPDATE = (this.isLocalHost?'/apis':this.origin)+'/wumart/partner/update';                          // 更新-小店维护
		this.POST_PARTNER_QUERYSHOP = (this.isLocalHost?'/apis':this.origin)+'/wumart/partner/queryShop';                    // 列表-小店列表查询
		
		this.POST_AREA_QUERYAREAMAIN = (this.isLocalHost?'/apis':this.origin)+'/wumart/partner/area/queryAreaMain';          // 列表-面积查询
		this.POST_AREA_QUERYAREAITEM = (this.isLocalHost?'/apis':this.origin)+'/wumart/partner/area/queryAreaItem';          // 详细-面积查询
		this.POST_AREA_CREATEAREA = (this.isLocalHost?'/apis':this.origin)+'/wumart/partner/area/createArea';                // 列表-小店列表查询
		
		this.POST_FEE_QUERYFEEMAIN = (this.isLocalHost?'/apis':this.origin)+'/wumart/partner/Fee/queryFeeMain';               // 列表-费用录入
		this.POST_FEE_QUERYFEEITEM = (this.isLocalHost?'/apis':this.origin)+'/wumart/partner/Fee/queryFeeItem';               // 详细-费用录入
		this.POST_FEE_CREATEFEE = (this.isLocalHost?'/apis':this.origin)+'/wumart/partner/Fee/createFee';                     // 新建-录入费用
		this.POST_FEE_TOTALFEEFROMBIDDATA = (this.isLocalHost?'/apis':this.origin)+'/wumart/partner/Fee/getTotalFeeFromBigData';     // 获取总费用
		
		this.POST_RATE_CREATERATE = (this.isLocalHost?'/apis':this.origin)+'/wumart/partner/rate/createRate';                 // 新建-百分比审批
		this.POST_RATE_QUERYRATEITEM = (this.isLocalHost?'/apis':this.origin)+'/wumart/partner/rate/queryRateItem';           // 详细-费用录入
		this.POST_RATE_QUERYRATEMAIN = (this.isLocalHost?'/apis':this.origin)+'/wumart/partner/rate/queryRateMain';           // 列表-费用录入
		
		this.POST_RATE_QUERYOAAREAITEM = (this.isLocalHost?'/apis':this.origin)+'/wumart/partner/area/queryOaAreaItem';       // 详细OA-面积查询
		
		this.POST_LOG_QUERYLOGMAIN = (this.isLocalHost?'/apis':this.origin)+'/wumart/partner/log/queryLogMain';               // 列表-日志
	}
	
}
