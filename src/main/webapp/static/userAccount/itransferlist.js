var _ITransferlist={};_ITransferlist.loadInvestList=function(a){hx_transferable_pn=a;nyonline.jsonp("/investor/queryLoans.c",{type:2,pn:a},function(f){var g="";g+="<tr>";g+="<th>编号</th>";g+="<th><span>剩余本金</span></th>";g+="<th><span>剩余期限</span></th>";g+="<th><span>下期还款日</span></th>";g+="<th><span>状态</span></th>";g+="<th><span>操作</span></th>";g+="</tr>";if(f.transfers&&f.transfers.record.length>0){$("#recordlist").removeClass("nothing");for(var d=0;d<f.transfers.record.length;d++){var c=f.transfers.record[d];g+="<tr >";if(c.flag==1){g+='<td><a href="'+SP2P_MAIN_URL+"/bidlist/"+c.bidId+'.html" target="_top">'+c.bidTile+"</a>"}else{g+='<td><a target="_top" href="'+SP2P_MAIN_URL+"/transferlist/"+c.transferId+'.html">'+c.bidTile+"<a></td>"}if(c.leftCorpus==0){g+="<td>--</td>"}else{g+="<td>"+nyonline.formatAmountMon(c.leftCorpus/100)+"元</td>"}if(c.leftPeriods==0){g+="<td>--</td>"}else{g+="<td>"+c.leftPeriods+"个月</td>"}g+="<td>"+c.nextGetDay+"</td>";if(c.flag==1&&c.isFreeze==1){g+='<td class="po_re">'+c.statusTitle;g+='<img src="'+SP2P_MAIN_URL+'/image/infoicon.png" alt="提示" class="infoicon"><p class="info"><img src="'+SP2P_MAIN_URL+'/image/toparrow.png">未出封闭期或距离还款日五日之内的债权，不可申请转让</p>';g+="</td>"}else{g+="<td>"+c.statusTitle;g+="</td>"}if(c.flag==1){if(c.isFreeze==0){if(c.status==-5){g+="<td><a href=\"javascript:revoketrans('"+c.bidTile+"',"+c.investId+');">取消转让</a></td>'}else{g+='<td><a href="javascript:gotransfer('+c.investId+",'"+c.nextGetDay+"',"+c.bidId+",'"+c.bidTile+"',"+c.leftPeriods+","+c.leftCorpus+')" >转让</a></td>'}}else{g+="<td>转让</td>"}}else{if(c.flag==2){g+="<td>转让中</td>"}else{if(c.flag==3){g+="<td>已转出</td>"}else{if(c.flag==-6){g+="<td>处理中</td>"}}}}g+="</tr>"}$("#recordlist").html(g);$("#pageDiv").append('<div id="pageManage"></div>');var e=pagemanage.splitPage2(f.transfers,"_ITransferlist.loadInvestList");$("#pageManage").html(e);hx_transferable_pn=f.transfers.pn}else{g+="<tr>";g+='<td colspan="6"  style="font-size: 14px;color: #777;">暂无数据</td>';g+="</tr>";$("#recordlist").addClass("nothing");$("#recordlist").html(g)}},function(){MsgBox.tips("提示","非常抱歉，网络异常，请重新操作")})};function gotransfer(f,e,g,c,b,d){var a="/investor/querytransferinfo.c";if(d<10000){MsgBox.tips("申请转让失败<br><br>","剩余本金小于100时不可申请转让");return}nyonline.jsonp(a,{invest_id:f},function(h){if(-29==h.code){MsgBox.tips("提示<br><br>",h.msg)}else{var i=h.info;transVerify(c,g,f,b,i,h.xyhtml)}},function(){MsgBox.tips("提示","非常抱歉，网络异常，请重新操作")})}var trans_params=new Object();var trans_child_func=function(a){a.call()};_ITransferlist.loanTitle="";_ITransferlist.loanLeftCorpus=0;function transVerify(c,f,d,a,g,e){var b=[];b.push('<div class="mask"></div>');b.push('<div id="parent_tank" class="win bindWin tansfer" >');b.push('<a href="#" class="btn_close"></a>');b.push("<h2><span>债权转让</span></h2>");b.push('<div class="box" >');b.push("<p>"+c+"</p>");b.push("<p>年化利率："+(g.apr/100)+"%</p>");b.push("<p>借款期限："+g.periods+"个月</p>");b.push("<p>剩余期限："+a+"个月</p>");b.push('<p class="mt20"><span class="w182">待收本金：'+nyonline.formatMoney(g.shengybj)+"元&nbsp;&nbsp;</span>");b.push("<span>待收收益："+g.dssy+"元&nbsp;&nbsp;</span>");b.push('<span class="po_re">服务费：'+g.fwf+'元<img src="'+SP2P_MAIN_URL+'/image/infoicon.png" alt="提示" class="infoicon"><em class="info"><img src="'+SP2P_MAIN_URL+'/image/downarrow.png">转让服务费=转让债权的剩余本金*0.2%，最低1元。</em></span></p>');b.push('<a href="#" class="bind apply" id="ok_btn">申请转让</a>');b.push('<div class="agreebox"><input id="_checkedTransferId" type="checkbox"  checked="checked" style="width:20px;"/>我已同意并阅读'+e+"</div>");b.push("</div>");b.push("</div>");_ITransferlist.loanTitle=c;_ITransferlist.loanLeftCorpus=g.shengybj/100;parentTank(b.join(""),applyTrans);trans_params={bid_id:f,invest_id:d,amounts:g.amounts,shengybj:g.shengybj,title:c,period:g.periods}}function applyTrans(){if(trans_params.shengybj<10000){MsgBox.tips("申请转让失败<br><br>","剩余本金小于100时不可申请转让");return}var a="/account/transfer.c";var b={bid:trans_params.bid_id,invest_id:trans_params.invest_id,title:trans_params.title,amount:trans_params.shengybj,period:trans_params.period};nyonline.jsonp(a,b,function(c){if(c.code!=0){MsgBox.tips("提示",c.msg)}else{MsgBox.commonBox(NyMsgBox.commitLoanTransfer("您已申请转让"+_ITransferlist.loanTitle+"<br>剩余本金"+nyonline.formatAmountMon(_ITransferlist.loanLeftCorpus)+"元<br>我们将尽快为您审核并转让"));_ITransferlist.loadInvestList(hx_transferable_pn);_ITransferlist.loanTitle="";_ITransferlist.loanLeftCorpus=0}},function(){MsgBox.tips("提示","网络异常")})}var hx_invest_id;function revoketrans(b,a){hx_invest_id=a;MsgBox.commonBox(NyMsgBox.cancelLoanTransfer("您是否确认取消转让"+b+"？"));return}function applyrevoketrans(){var a="/investor/revoketransfer.c";var b={invest_id:hx_invest_id};nyonline.jsonp(a,b,function(c){switch(c.code){case -100:MsgBox.tips("提示","参数错误，请刷新重试");break;case -11:login.loginAndDo(applyrevoketrans);break;case 0:MsgBox.commonBox(NyMsgBox.commitLoanTransfer("转让已取消"));_ITransferlist.loadInvestList(hx_transferable_pn);break;case -18:MsgBox.tips("提示","对不起，访问网页出错，请选择刷新重试");break;default:MsgBox.tips("提示","系统错误，请刷新重试，ret="+c.code);break}},function(){MsgBox.tips("提示","非常抱歉，网络异常，请重新操作")})};