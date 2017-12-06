package com.wz.controller;

import javax.servlet.http.HttpServletRequest;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.wz.utils.AccountEmailException;
import com.wz.utils.SendMail;

@Controller
public class Test {
	
	/**
	 * 发送邮箱
	 * @param req
	 * @throws AccountEmailException
	 */
	@RequestMapping("/index")
	public String ss(){
		return "index";
	}
	
	@RequestMapping("/sendEmail")
	public void sendEmail(HttpServletRequest req,String address) throws AccountEmailException {
		
		String path = req.getContextPath();
		
		//String email = EmailUtil.rigisterEmail(req.getScheme()+"://"+req.getServerName()+":"+req.getServerPort()+path+"/jihuo?jihuoid="+666666);
		
		SendMail.SendEmail(address, "王者牛逼");
		
	}

}
