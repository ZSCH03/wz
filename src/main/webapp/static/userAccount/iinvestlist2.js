var _IInvestlist={};_IInvestlist.pageNo=1;_IInvestlist.invest_id=0;_IInvestlist.jumpPage=function(a){nyonline.jsonp("/investor/iinvestlistExV2.c",{pn:a},_IInvestlist.fillInvestList,_IInvestlist.failCallBack)};_IInvestlist.fillInvestList=function(e){if(e.investPage&&e.investPage.record.length>0){var f="";f+='<div class="fl right">';f+='<div class="column periods_plan sz_plan">';f+='<table cellspadding="0" cellspacing="0" width="100%">';f+="<tr>";f+="<th>编号</th>";f+="<th><span>购买金额(元)</span></th>";f+="<th><span>购买日期</span></th>";f+='<th><span class="po_re">封闭截止日<img src="'+SP2P_MAIN_URL+'/image/infoicon.png" alt="提示" class="infoicon"><p class="info"><img src="'+SP2P_MAIN_URL+'/image/toparrow.png">从起息日，开始计算封闭期，封闭天数=月数*30天。在封闭期内，债权不可转让，超过封闭期，债权可转让。</p></span></th>';f+="<th><span>状态</span></th>";f+="<th><span>账单</span></th>";f+="</tr>";for(var c=0;c<e.investPage.record.length;c++){var a=e.investPage.record[c];f+="<tr>";f+='<td><a href="'+SP2P_MAIN_URL+"/bidlist/"+a.bid_id+'.html" target="_top">'+a.payInfos.apptitle+"</a></td>";f+='<td class="jine_left">'+a.payInfos.amount+"</td>";f+="<td>"+a.payInfos.createtime+"</td>";f+="<td>";if(a.bid_type==6){f+="<span>-</span>"}else{if(a.status==0||a.status==5){f+=a.payInfos.freeze}else{f+="<span>-</span>"}}f+="</td>";f+="<td>"+a.payInfos.status+"</td>";f+="<td>";if(a.status==0||a.status==-4||a.status==-5||a.status==5||a.status==7||a.status==-1){f+='<a href="javascript:_IInvestlist.loadInvestBillList('+a.id+",1,"+a.payInfos.freeze2+","+a.bid_id+');" class="btn_huank">查看</a>'}else{f+="<span>-</span>"}f+="</td>";f+="</tr>"}f+="</table>";f+='<div id="pageManage"></div>';f+="</div>";f+="</div>";$("#right_main").html(f);window.top.scrollTo(0,100);var d=pagemanage.splitPage2(e.investPage,"_IInvestlist.jumpPage");$("#pageManage").html(d);_IInvestlist.pageNo=e.investPage.pn}};_IInvestlist.failCallBack=function(){MsgBox.commonBox(NyMsgBox.warnBoxParam())};_IInvestlist.loadInvestBillList=function(c,b,a,d){_IInvestlist.invest_id=c;_IInvestlist.freezeDate=a;_IInvestlist.bid_id=d;_IInvestlist.jumpIBillPage(b)};_IInvestlist.downloadContract=function(a,b){if(b!=null&&b!=undefined){Contract.downloadDataContract(a,0,b)}else{Contract.downloadDataContract(a,0)}};_IInvestlist.jumpIBillPage=function(b){var a="_IInvestlist.jumpPage";nyonline.jsonp("/investor/iinvestbillV2.c",{invest_id:_IInvestlist.invest_id,pn:b,freezeDate:_IInvestlist.freezeDate,bid_id:_IInvestlist.bid_id},function(g){if(g.billPage&&g.billPage.record.length>0){var h="";var d;h+='<div class="fl right">';h+='<div class="column detailtop">';h+='<div class="cf t">';h+='<h2 class="fl"><span class="icon_product selected"></span>'+g.title;h+='<em id="bidStatusId">'+g.status_str+"</em>";h+="</h2>";if(g.invest){if(g.invest.bid_type==6){h+='<a class="fr" href="javascript:Contract.downloadDataContract('+_IInvestlist.invest_id+","+g.contract_id+');">点击下载协议</a>'}else{if(g.invest.invest_type==0){h+='<a class="fr" href="javascript:_IInvestlist.downloadContract('+_IInvestlist.invest_id+","+g.transfers_id+');">点击下载协议</a>'}else{h+='<a class="fr" href="javascript:Contract.downloadDataContract('+g.invest.transfers_id+',2);">点击下载协议</a>'}}}h+="</div>";h+='<div class="b">';h+="<p>";h+="购买日： <span>"+g.create_time_point+"</span>";h+="起息日： <span>"+g.pre_loan_date+"</span>";h+="年化利率: <em>"+g.apr+"%</em>";if(g.period_unit==0){d="年"}if(g.period_unit==1){d="月"}if(g.period_unit==2){d="天"}h+="借款期限("+d+")： <span>"+g.period+"</span>";h+="</p>";h+='<ul class="cf">';h+='<li class="t_l">购买金额(元)：<span>'+g.amount+"</span><i></i></li>";h+='<li id="expectIntStr">预期收益(元)：<span>'+g.expectIn+"</span><i></i></li>";if(g.invest.bid_type==6){h+='<li class="w286">封闭截止日：<span>-</span></li>'}else{h+='<li class="w286">封闭截止日：<span>'+g.freeze+"</span></li>"}h+="</ul>";h+="</div>";h+="</div>";h+='<div class="column detailbottom periods_plan sz_plan">';h+="<h2>账单明细</h2>";h+='<table cellspadding="0" cellspacing="0" width="100%">';h+="<tr>";h+="<th>回款日</th>";h+="<th><span>应收本金(元)</span></th>";h+="<th><span>应收利息(元)</span></th>";h+="<th><span>服务费(元)</span></th>";h+="<th><span>实收回款(元)</span></th>";h+="<th><span>回款状态</span></th>";h+="</tr>";for(var e=0;e<g.billPage.record.length;e++){var c=g.billPage.record[e];h+="<tr>";h+="<td>"+c.payInfos.receive_time+"</td>";h+="<td>"+c.payInfos.receive_corpus+"</td>";h+="<td>"+c.payInfos.receive_interest+"</td>";if(g.invest.bid_type==6){h+="<td>0.00</td>"}else{h+="<td>"+c.payInfos.service_fee+"</td>"}if(c.payInfos.real_receive_all==0){h+="<td>-</td>"}else{h+="<td> "+c.payInfos.real_receive_all+"</td>"}h+="<td>"+c.payInfos.status+"</td>";h+="</tr>"}h+="</table>";h+='<div id="pageManage"></div>';h+="</div>";h+="</div>";$("#right_main").html(h);_IInvestlist.initStatusStr(g);window.top.scrollTo(0,100);var f=pagemanage.splitPage2(g.billPage,"_IInvestlist.jumpIBillPage");$("#pageManage").html(f)}else{$("#right_main").html('<p>没找到记录<br/><a href="javascript:_IInvestlist.jumpPage('+_IInvestlist.pageNo+');" class="btn_rightchk">返回上一级</a></p>')}},function(){MsgBox.commonBox(NyMsgBox.warnBoxParam())})};_IInvestlist.initStatusStr=function(a){status=a.statusCode;if(status==5||status==7){$("#bidStatusId").attr("class","");$("#expectIntStr").html("已收收益(元)：<span>"+a.expectIn+"</span><i></i>")}if(status==4){$("#bidStatusId").attr("class","bg-blue")}if(status==1){$("#bidStatusId").attr("class","bg-yellow")}if(status==3){$("#bidStatusId").attr("class","bg-red")}if(status==-4||status==-5){$("#bidStatusId").attr("class","bg-gray")}};_IInvestlist.init=function(b){var a=pagemanage.splitPage2(b,"_IInvestlist.jumpPage");$("#pageManage").html(a)};