var newerGuide=(function(){var n=function(r){nyonline.jsonp("/newerGuide/getStatusInfo.c",null,function(s){if(r){r(s.newerGuideSwitch,s.newerStatus)}},function(){isLogining=false;MsgBox.tips("提示","网络异常")},function(){})};var d=function(){Myaccount.goUrl("/regist/openRealNameV2.c")};var o=function(){Myaccount.goUrl("/my/rechargeSel.c")};var h=function(){n(function(t,r){if(t==true){var s="";if(r==0){s='<div class="guide_tips cf"><span class="hb s60"></span><p>为保障您的账户安全，需开通银行存管账户，请实名认证</p><span>认证成功可获得60元红包</span><a id="_r107136" sdata="0|D2:107136" href="javascript:newerGuide.goRealName();" class="fr btn">立即认证</a></div>';$("#myaccountPartTop").before(s)}else{if(r==1){s='<div class="guide_tips cf"><span class="hb s80"></span><p>为保障您的账户安全，请添加银行卡，用于充值和提现</p><span>添加成功可获得80元红包</span><a id="_r107137" sdata="0|D2:107137" href="javascript:newerGuide.goBankCardList();" class="fr btn">立即添加</a></div>';$("#myaccountPartTop").before(s)}}}})};var f=function(r){n(function(v,s){var u='<p class="c33 t_c">为保障您的资金安全，请添加银行卡，用于充值和提现</p>';if(v==true){if(s==1){u+='<p class="c77 t_c">添加成功可获得<span class="cc2">80元红包</span></p>'}var t='<a id="999003" sdata="1|D2:999003" href="javascript:BankCard.addRechargeCard(true,'+s+');"  class="btn nextStep preStep">确认</a>';t+='<span id="err_msg" class="mobileige"></span>"'}$("#newerGuide"+r).html(u);$("#addRechageCard").html(t)})};var c=function(){var r='<div class="shaw"><div id="suc" class="win tipWin goiden ideWin"><a sdata="1|D2:999004" href="javascript:void(0);" id="msgbox_close" class="btn_close"></a><p class="p70_55">为保障您的账户安全，需开通银行存管账户，<br>请实名认证</p><a sdata="1|D2:999005" href="javascript:void(0);" id="msgbox_confirm" class="bind">确定</a></div></div>';return{id:"realNameTipsBox",item:$(r),onload:function(){$("#msgbox_confirm").bind("click",function(){Myaccount.goUrl("/regist/openRealNameV2.c")})},destoryselector:"#msgbox_close,#msgbox_confirm",ondestory:function(){$("#msgbox_close").unbind();$("#msgbox_confirm").unbind()}}};var g=function(){MsgBox.commonBox(c())};var l=function(){var r='<div class="shaw"><div class="idenSuc"><div class="idenpro1"><em class="hbb b60"></em><p>恭喜您认证成功</p><span>60元红包已经放入您的账户</span></div><div class="idenpro2"><span class="idenpro"></span><p>添加银行卡可得80元红包</p><a sdata="0|D2:112134" href="javascript:void(0);" id="msgbox_add_bankcard" class="bind">添加银行卡</a><a sdata="0|D2:112135" href="javascript:void(0);" id="msgbox_confirm" class="finish">完成</a></div></div></div>';return{id:"realNameSuccBox",item:$(r),onload:function(){$("#msgbox_add_bankcard").bind("click",function(){Myaccount.goUrl("/my/rechargeSel.c")});$("#msgbox_confirm").bind("click",function(){Myaccount.goUrl("/investor/myaccountPart.c")})},destoryselector:"#msgbox_add_bankcard,#msgbox_confirm",ondestory:function(){$("#msgbox_add_bankcard").unbind();$("#msgbox_confirm").unbind()}}};var q=function(){MsgBox.commonBox(l())};var j=function(){n(function(s,r){if(s==true){$("#realNameDiv").before('<p class="c77 t_c">认证成功可获得<span class="cc2">60元红包</span></p>')}})};var b=function(){var r=SP2P_MAIN_URL+"/my";var s='<div class="shaw">';s+='<div class="idenSuc idenSuc1">';s+='<div class="idenpro1">';s+='<em class="hbb b10"></em>';s+="<p>恭喜您已经成为小诺理财用户</p>";s+="<span>10元红包已经放入您的账户</span>";s+="</div>";s+='<div class="idenpro2">';s+='<span class="idenpro"></span>';s+="<p>认证成功可得60元红包</p>";s+='<p class="f14">添加银行卡可得80元红包</p>';s+='<a id="_r112132" sdata="1|D2:112132" href="'+SP2P_MAIN_URL+'/investor/myaccount.c?menu_id=13" class="bind">立即认证</a>';s+='<a id="_r112133" sdata="1|D2:112133" href="'+SP2P_MAIN_URL+'/investor/myaccount.c" class="finish"  id="finish">完成</a>';s+="</div></div></div>";return{id:"registSuccessGuideTips",item:$(s),onload:function(){},destoryselector:"",ondestory:function(){}}};var k=function(r){var s='<div class="shaw">';s+='<div id="suc" class="win tipWin goiden ideWin">';s+='<a sdata="1|D2:999010" href="javascript:void(0);" id="msgbox_close" class="btn_close"></a>';s+='<span class="suc"></span>';s+='<h6 class="f16">添加成功</h6>';s+='<p class="mtb20 mb15">'+r+"</p>";s+='<div class="t_c">';s+='<a sdata="1|D2:999011" href="javascript:void(0);" class="bind mr30" id="goRedPack">查看红包</a><a sdata="1|D2:999012" href="javascript:void(0);" class="bind" id="goInvest">马上出借</a>';s+="</div>";s+="</div>";s+="</div>";return{id:"bindCardSucc",item:$(s),onload:function(){$("#msgbox_close").bind("click",function(){Myaccount.goUrl("/my/bankcardlist.c")});$("#goInvest").bind("click",function(){window.location.href=SP2P_MAIN_URL+"/"});$("#goRedPack").bind("click",function(){Myaccount.goUrl("/my/userRed.c")})},destoryselector:"#msgbox_close,#goRedPack,#goInvest",ondestory:function(){$("#msgbox_close").unbind();$("#goRedPack").unbind();$("#goInvest").unbind()}}};var a=function(){var r='<div class="shaw">';r+='<div class="win tipWin idenfail">';r+='<a sdata="1|D2:999013" href="javascript:void(0);" id="msgbox_close" class="btn_close"></a>';r+='<span class="suc sunNo"></span>';r+='<h6 class="f16">添加失败</h6>';r+='<p class="f14">您的银行卡未开通“在线支付”功能，您可以：</p>';r+='<ul class="onlinepay">';r+='<li>1. 更换银行卡，<a sdata="1|D2:999014" id="rebind" href="javascript:void(0);">重新绑定</a>；</li>';r+='<li>2. 开通此卡“在线支付”功能，前往<a sdata="1|D2:999015" id="unionpay" href="https://www.95516.com/static/union/pages/card/openFirst.html?entry=openPay" target="_blank">银联官网</a>开通，<br>查看<a sdata="1|D2:999016" id="payhelp" href="https://static.nyonline.cn/webstatic/helpcenter.html#2_5" target="_blank">开通教程</a>。</li>';r+="</ul>";r+='<p class="f12">有疑问请联系客服400-818-8880</p>';r+="</div>";r+="</div>";return{id:"bindCardFail",item:$(r),onload:function(){$("#rebind").bind("click",function(){Myaccount.goUrl("/my/rechargeSel.c")})},destoryselector:"#msgbox_close,#rebind",ondestory:function(){$("#msgbox_close").unbind();$("#rebind").unbind()}}};var i=function(r){var s='<div class="shaw">';s+='<div id="suc" class="win tipWin goiden ideWin" >';s+='<a sdata="1|D2:9990017" href="javascript:void(0);" id="msgbox_close" class="btn_close"></a>';s+='<span class="suc sunNo"></span>';s+='<h6 class="f16">添加失败</h6>';s+='<p class="mtb20">'+r+"</p>";s+='<a sdata="1|D2:9990018" href="javascript:void(0);" id="confirm" class="bind">确定</a>';s+='<p class="c77 f12 mt5">有疑问请联系客服400-818-8880</p>';s+="</div>";s+="</div>";return{id:"bindCardFail_",item:$(s),onload:function(){},destoryselector:"#msgbox_close,#confirm",ondestory:function(){$("#msgbox_close").unbind();$("#confirm").unbind()}}};var e=function(r){MsgBox.commonBox(k(r))};var m=function(){MsgBox.commonBox(a())};var p=function(r){MsgBox.commonBox(i(r))};return{getStatusInfo:n,myaccountPartTips:h,goRealName:d,goBankCardList:o,realNameTips:g,realNameSuccTips:q,realNameRedPacketTips:j,registSuccessGuide:b,addRechargeNewerGuide:f,bindCardSucc:k,bindCardFail:a,bindCardFail_:i,bindCardSuccTips:e,bindCardFailTips:m,bindCardFail_Tips:p}})();