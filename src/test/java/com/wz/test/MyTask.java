package com.wz.test;

import java.util.Timer;
import java.util.TimerTask;

public class MyTask extends TimerTask {
	// 声明一个定时器
	private Timer t;

	// 空参构造方法
	public MyTask() {
	}

	// 有参构造方法接收正在使用本任务的定时器对象
	public MyTask(Timer t) {
		this.t = t;
	}

	// 重写run方法
	@Override
	public void run() {
		// 具体实现
		System.out.println("王总，早上好，我在楼下等您");

		// 使用当前正在执行的定时器对象来 关闭定时器
		t.cancel();
	}

}
