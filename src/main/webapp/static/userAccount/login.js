var login=(function(){var i,K,D=false;var N=false;var v=120;var E=["__loginbox","__registbox","__forgetpwdbox"];var x=[['<div id="__loginbox" class="tank">','<input type="hidden" id="__salt" name="salt"/>','<ul class="nav">','<li class="active">登录</li>','<li><a href="javascript:login.show(1)">注册</a></li>',"</ul>",'<div class="inputbox border8">','<div class="lable"><span class="mobile"></span></div>','<div class="r_input"><input name="name" _errorId="__reg1" __ct="m" id="__registMobileNo" autocomplete="off" placeholder="请输入手机号" /></div>','<p id="__reg1" style="display:none;">*请您输入正确的手机号码</p>',"</div>",'<div class="inputbox border8">','<div class="lable"><span class="passwords"></span></div>','<div class="r_input"><input name="saltPwd" _errorId="__reg2" __ct="p" autocomplete="off" id="__registPwd" type="password" placeholder="请输入密码" /></div>','<p style="display:none;" id="__reg2">*您输入的密码错误</p>',"</div>",'<div class="inputbox">','<div class="yanma border8"><input _errorId="__reg3" __ct="vc" name="vcode" placeholder="验证码" /></div>','<div class="huoqu"><a id="__loginCaptchaBtn" href="javascript:void(0)"><img id="__loginchapcha" src="javascript:void(0)"/></a><span>59s</span></div>','<p style="display:none;" id="__reg3">*您输入的验证码错误</p>',"</div>",'<div class="wjmm">','<a href="javascript:login.show(2)">忘记密码？</a>',"阳光保险全程保护您的资金交易安全","</div>",'<a href="javascript:void(0)" id="__btnLogin" class="tkbtn_l">登录</a>','<a href="javascript:login.hide()" class="btn_close"></a>',"</div>"].join(""),['<div class="tank" id="__registbox">','<input type="hidden" id="__salt" name="salt"/>','<ul class="nav">','<li><a href="javascript:login.show(0)">登录</a></li>','<li class="active">注册</li>',"</ul>",'<div class="con">','<div class="inputbox border8">','<div class="lable"><span class="mobile"></span></div>','<div class="r_input"><input name="mobileNo" _errorId="__reg1" __ct="m" id="__registMobileNo" placeholder="手机号" /></div>','<p style="display:none;" id="__reg1">*请您输入正确的手机号码</p>','<div class="btx">*</div>',"</div>",'<div class="inputbox border8">','<div class="lable"><span class="passwords"></span></div>','<div class="r_input"><input type="password" id="__onepwd" _errorId="__reg3" __ct="p" autocomplete="off"  name="saltPwd" placeholder="请设置密码" /></div>','<p style="display:none;" id="__reg3">*您输入的密码中至少包含字母和数字，6-16位</p>','<div class="btx">*</div>',"</div>",'<div class="inputbox border8">','<div class="lable"><span class="passwords"></span></div>','<div class="r_input"><input id="__twopwd" name="__pwd" _errorId="__reg4"  __ct="p" autocomplete="off"  name="saltPwd" type="password" placeholder="请确认密码（与设置密码一致）" /></div>','<p id="__reg4" style="display:none;">*您输入的密码不一致，请重新输入</p>','<div class="btx">*</div>',"</div>",'<div class="inputbox border8">','<div class="lable"><span class="yanzM"></span></div>','<div class="r_input yanzImg"><input id="picvcode" _errorId="__reg5" __ct="vc" name="vcode" placeholder="请输入图片验证码" /><a id="__RegCaptchaBtn" href="javascript:void(0)"><img id="__regchapcha" src="javascript:void(0)"/></a></div>','<p id="__reg5" style="display:none;">*图片验证码不正确，请核对！</p>','<div class="btx">*</div>',"</div>",'<div class="inputbox">','<div class="yanma border8"><input id="vcode" _errorId="__reg2" __ct="mc" name="mvcode" placeholder="手机验证码" /></div>','<div class="huoqu"><a id="__reggetmocha" href="javascript:void(0)">点击获取</a><span id="__chatime">59s</span></div>','<p style="display:none;" id="__reg2">*您输入的验证码错误</p>','<div class="btx">*</div>',"</div>",'<div class="inputbox border8">','<div class="lable"><span class="passwords"></span></div>','<div class="r_input"><input id="__recperson" __ct="mn" name="recperson" placeholder="请输入推荐人手机号码" _errorId="__reg5"/></div>','<p style="display:none;" id="__reg5">*请您输入正确的手机号码</p>',"</div>",'<div class="ckxy">','查看<a target="_blank" href="'+SP2P_MAIN_URL+'/static/xiaonuolicai_register_protocol.html">《小诺平台注册协议》</a>',"</div>",'<a id="__btnRegist" href="javascript:void(0)"  class="tkbtn_l">同意协议并注册</a>','<a href="javascript:login.hide()" class="btn_close"></a>',"</div>","</div>","</div>"].join(""),['<div id="__forgetpwdbox" class="tank">','<input type="hidden" id="__salt" name="salt"/>','<ul class="nav">','<li style="width:100px">找回密码</li>',"</ul>",'<div class="inputbox border8">','<div class="lable"><span class="mobile"></span></div>','<div class="r_input"><input type="input" name="name" id="__registMobileNo" _errorId="__reg1" __ct="m"  placeholder="请输入绑定手机号" /></div>','<p style="display:none;" id="__reg1">*请您输入正确的手机号码</p>',"</div>",'<div class="inputbox border8">','<div class="lable"><span class="yjmicon"></span></div>','<div class="r_input jym"><a href="javascript:void(0)" id="__reggetmocha" class="btn_jym">获取</a><span id="__chatime" style="display:none;" >59s</span><input name="mvcode" _errorId="__reg2" __ct="mc" placeholder="请输入校验码" /></div>','<p  style="display:none;" id="__reg2">*您输入的验证码错误</p>',"</div>",'<div class="inputbox border8">','<div class="lable"><span class="passwords"></span></div>','<div class="r_input"><input name="saltPwd" id="__onepwd" _errorId="__reg3" __ct="p" autocomplete="off" type="password" placeholder="请输入新密码" /></div>','<p style="display:none;" id="__reg3">*您输入的密码中至少包含字母和数字，6-16位</p>',"</div>",'<div class="inputbox border8">','<div class="lable"><span class="zcmm"></span></div>','<div class="r_input"><input type="password" name="saltPwd" id="__twopwd" _errorId="__reg4" __ct="p" autocomplete="off" placeholder="请再次输入新密码" /></div>','<p style="display:none;" id="__reg4">*您输入的密码不一致，请重新输入</p>',"</div>",'<p class="go_login"><a href="javascript:login.show(0)">返回登录</a></p>','<a href="javascript:void(0)" id="__btnForget" class="tkbtn_l">确定</a>','<a href="javascript:login.hide()" class="btn_close"></a>',"</div>"].join("")];var F=function(){if(K){return}var O=['<div id="__loginmask" class="shaw" style="display:none;">',"</div>"].join("");$(document.body).append((K=$(O)))};var b=function(R,Q,S){$(R).attr("_countdown",parseInt(new Date().getTime()/1000+Q,10));var O=true;var P;var T=function(){var U=parseInt($(R).attr("_countdown"),10);var V=parseInt(U-new Date().getTime()/1000,10);if(V>0){if(O){$(R).show();$(S).hide();O=false}$(R).text(V+"秒");setTimeout(function(){T()},1000)}else{$("#__reggetmocha").text("点击获取");$(R).hide();$(S).show();clearTimeout(P)}};P=setTimeout(function(){T()},0)};var n=function(){$("#__reggetmocha").click(function(){if(N){return}N=true;q($("#__registMobileNo").val(),function(O){N=false;switch(O.code){case 0:b($("#__chatime"),v,$("#__reggetmocha"));break;case -8:alert("操作频繁，请2分钟后再试");$("#__reggetmocha").text("点击获取");g();break;case -9:alert("手机号码已被注册，如有疑问请联系客服。");$("#__reggetmocha").text("点击获取");g();break;case -6:alert("图片验证码错误");$("#__reggetmocha").text("点击获取");g();break;default:alert("系统错误，ret="+O.code);$("#__reggetmocha").text("点击获取");g();break}},function(){var O=$("#__registMobileNo").attr("_errorId");$("#"+O).show()},"REGIST",$("#picvcode").val())});$("#__RegCaptchaBtn").click(function(){g()});$("#__btnRegist").click(function(){s()});$("input").keydown(function(O){if(O.which==13){$("#__btnRegist").click()}})};var M=function(){$("#__loginCaptchaBtn").click(function(){j()});$("#__btnLogin").click(function(){p()});$("input").keydown(function(O){if(O.which==13){$("#__btnLogin").click()}})};var z=function(){$("#__loginCaptchaBtn").click(function(){j()});$("#__reggetmocha").click(function(){h($("#__registMobileNo").val(),function(O){switch(O.code){case 0:b($("#__chatime"),v,$("#__reggetmocha"));break;case -8:alert("您的操作过于频繁，请您2分钟后再重试");break;case -3:alert("账户不存在，如有疑问请联系客服。");$("#__reggetmocha").text("点击获取");break;default:alert("服务器升级维护中，请您稍候重试，敬请谅解，ret="+O.code);break}},function(){var O=$("#__registMobileNo").attr("_errorId");$("#"+O).show()},"FORGET")});$("#__btnForget").click(function(){G()})};var d=function(R){var O=$(R).attr("__ct");var Q=$(R).val();var P=false;switch(O){case"p":P=H(Q);break;case"m":P=a(Q);break;case"mc":P=e(Q);break;case"vc":P=A(Q);break;case"mn":if(Q){P=a(Q)}else{P=true}break;default:return true}var S=$(R).attr("_errorId");if(!P){if(m!=0){$("#__reg2").text("*您输入的验证码错误")}else{$("#__reg2").text("*您输入的密码错误")}$("#"+S).show()}else{$("#"+S).hide()}return P};var L=function(){var P=E[m];var O=true;$("#"+P+" input").each(function(Q,R){O&=d(R)});return O};var y=function(){switch(m){case 0:M();break;case 1:n();$("__twopwd").blur(function(){f()});break;case 2:z();$("__twopwd").blur(function(){f()});break}$("#"+E[m]+" input").each(function(O,P){$(P).blur(function(){d($(this))})})};var j=function(){$("#__loginchapcha").attr("src",ups("/login/captcha.c?_r"+new Date().getTime()))};var g=function(){$("#__regchapcha").attr("src",ups("/login/captcha.c?_r"+new Date().getTime()))};var a=function(O){return/^1[3|4|5|7|8][0-9]\d{8}$/.test(O)};var H=function(Q){var P=/[A-Z|a-z]/.test(Q);var O=/[0-9]/.test(Q);return P&&O&&/^[\S| ]{6,16}$/.test(Q)};var A=function(O){return/^[A-Z|a-z|0-9]{4,6}$/.test(O)};var e=function(O){return/^[0-9]{4,6}$/.test(O)};var q=function(R,Q,O,P,S){if(!a(R)){N=false;O&&O();return}$("#__reggetmocha").text("发送中...");nyonline.jsonp(ups("/login/getmobilevcodewithpic.c"),{mobileno:R,type:P,vcode:S},function(T){if(T.code==-35){N=false;alert("暂时无法发送验证码，请稍后再试");return}try{Q&&Q(T)}catch(U){}N=false},function(){alert("获取手机验证码失败")})};var h=function(R,Q,O,P){if(!a(R)){N=false;O&&O();return}$("#__reggetmocha").text("发送中...");nyonline.jsonp(ups("/login/getmobilevcode.c"),{mobileno:R,type:P},function(S){if(S.code==-35){N=false;alert("暂时无法发送验证码，请稍后再试");return}try{Q&&Q(S)}catch(T){}N=false},function(){alert("获取手机验证码失败")})};var f=function(){var P=$("#__onepwd").val();var O=$("#__twopwd").val();if(P!=O){$("#__reg4").text("*您输入的密码不一致，请重新输入");$("#__reg4").show();return false}else{if($("oldPwd").val()==P){$("#__reg4").text("*您输入的新密码不能与原密码一致，请重新输入");$("#__reg4").show()}else{$("#__reg4").hide();return true}}};var G=function(){var O=L()&&f();if(!O){return}var Q=E[m];var P={};$("#"+Q+" input").each(function(R,S){P[$(S).attr("name")]=$(S).val()});P.saltPwd=C(P.saltPwd,P.salt);nyonline.jsonp(ups("/login/updatepwd.c"),P,function(R){switch(R.code){case 1:alert("修改成功,请您3秒后重新登录");B(0);break;case -7:alert("手机验证码错误");break;default:alert("操作失败，请您重试,ret="+R.code);B(0);break}},function(R){msgbox.show("提示","操作失败，请您重试")})};var c=false;var s=function(){var O=L()&&f();if(!O){return}if(c){return}c=true;$("#__btnRegist").toggleClass("active gray",true);var Q=E[m];var P={};$("#"+Q+" input").each(function(R,S){P[$(S).attr("name")]=$(S).val()});P.__pwd="";P.saltPwd=C(P.saltPwd,P.salt);nyonline.jsonp(ups("/login/register.c"),P,function(R){c=false;$("#__btnRegist").toggleClass("active gray",false);switch(R.code){case 0:I();msgbox.show("提示","注册成功,3秒后将进入到登录页面");setTimeout(function(){msgbox.hide();l(function(){window.top.location.reload()})},3000);break;case -9:alert("该手机号已被注册");B(1);break;default:alert("操作失败，请您重新注册，"+R.msg);return}},function(R){c=false;alert("操作失败，请您重新注册")})};var C=function(P,O){return nyonline.md5(P+O.toUpperCase()).toString()};var u=false;var p=function(){var O=L();if(!O){return}if(u){return}u=true;var Q=E[m];var P={};$("#"+Q+" input").each(function(R,S){P[$(S).attr("name")]=$(S).val()});$("#__btnLogin").toggleClass("active gray",true);nyonline.jsonp(ups("/login/initLogin.c"),P,function(S){u=false;switch(S.code){case 0:var R=S.salt;P.salt=R;P.saltPwd=C(P.saltPwd,P.salt);nyonline.jsonp(ups("/login/do.c"),P,function(T){switch(T.code){case 0:login.hide();$("#_navilogin").html('<a href="javascript:login.logout(0)">退出</a>');J&&J();break;case -6:j();$("#__reg3").show();break;case -10:$("#__reg2").text("用户名或密码错误，请您重新输入");j();$("#__reg2").show();break;case -2:alert("由于您多次输入密码错误,您的账户已被锁定,请您于12小时后登录");break;default:j();var U=T.msg||"系统错误";alert(U+",ret="+T.code)}},function(T){alert("登录失败!")});break;default:alert("用户名或密码错误");break}$("#__btnLogin").toggleClass("active gray",false)},function(R){u=false;$("#__btnLogin").toggleClass("active gray",false);alert("登录失败")})};var m=0;var J=null;var t=["__loginbox","__registbox","__forgetpwdbox"];var o=function(O){F();if(!O){O=0}$(K).show();m=O;K.html(x[O]);var P=$("#"+t[m]);P.css({position:"absolute",left:($(K).width()-P.outerWidth())/2,top:($(K).height()-P.outerHeight())/2});y()};var w=function(O){J=O};var k=function(O){nyonline.jsonp(ups("/login/islogin.c"),null,function(P){O(P.isLogin?true:false)},function(P){})};var l=function(P,O){D=O;k(function(Q){if(Q){P&&P()}else{w(P);B(0)}})};var r=function(){nyonline.jsonp(ups("/account/out.c"),null,function(O){},function(O){});nyonline.deleteCookie("ny_sid");nyonline.deleteCookie("ny_uid");msgbox.show("提示","您已成功退出");setTimeout(function(){window.top.location.href=client("")},1000)};var B=function(O){switch(O){case 0:o(O);j();break;case 1:nyonline.jsonp(ups("/login/initregister.c"),null,function(P){o(O);$("#__salt").val(P.salt);g()},function(P){msgbox.show("提示","非常抱歉，网络异常，请重新操作")});break;case 2:nyonline.jsonp(ups("/login/initforget.c"),null,function(P){o(O);$("#__salt").val(P.salt)},function(P){msgbox.show("提示","非常抱歉，网络异常，请重新操作")});break}nyonline.stat(101,"H1:1")};var I=function(){$(K).hide();for(var O=0;O<t.length;O++){$("#"+t[O]).hide()}if(D){window.top.location.href=client("/index.c")}nyonline.stat(101,"H1:2")};return{show:B,hide:I,loginAndDo:l,logout:r,checkMobile:a,salted:C}})();var pageLogin=(function(){var e=false;var j=false;var f=function(k){};var g=function(k){if(!k){return}switch(k){case 0:break;case -8:alert("操作频繁，请2分钟后再试");break;case -9:alert("手机号码已被注册，如有疑问请联系客服。");break;case -35:alert("暂时无法发送验证码，请稍后再试");break;case -1001:alert("请填写正确的手机号码");break;default:alert("系统错误，ret="+k);break}};var c=function(n,l,m,k){if(e){return}e=true;if(!m){m=f}if(!k){k=g}if(!login.checkMobile(n)){e=false;k&&k(-1001);return}nyonline.jsonp(ups("/login/getmobilevcode.c"),{mobileno:n,type:l},function(o){switch(o.code){case 0:try{m&&m(o)}catch(p){}break;default:k&&k(o.code);break}e=false},function(){k&&k();e=false})};var d=function(k){msgbox.show("提示","注册成功,3秒后将进入到登录页面");setTimeout(function(){msgbox.hide();login.loginAndDo(function(){window.top.location.reload()})},3000)};var a=function(k,l){switch(k){case 0:msgbox.show("提示","注册成功,3秒后将进入到登录页面");setTimeout(function(){msgbox.hide();login.loginAndDo(function(){window.top.location.reload()})},3000);break;case -9:alert("该手机号已被注册");break;default:alert("操作失败，请您重新注册，"+l);return}};var h=function(k,o,m,l,p,n){if(j){return}j=true;if(!p){p=d}if(!n){n=a}nyonline.jsonp(ups("/login/initregister.c"),null,function(r){var q=r.salt;var s={};s.mobileNo=k;s.saltPwd=o;s.mvcode=m;s.recperson=l;s.salt=q;s.__pwd="";s.saltPwd=login.salted(s.saltPwd,s.salt);nyonline.jsonp(ups("/login/register.c"),s,function(t){j=false;switch(t.code){case 0:p&&p();break;default:n&&n(t.code,t.msg);return}},function(t){j=false;n&&n()})},function(q){j=false;n&&n()})};var b=function(){login.loginAndDo(function(){location.reload()})};var i=function(){login.loginAndDo(function(){window.location.href=SP2P_MAIN_URL+"/my/"})};return{getMobileCaptCha:c,doRegister:h,topLogin:b,goInvestor:i}})();