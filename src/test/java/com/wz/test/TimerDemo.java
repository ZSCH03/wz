package com.wz.test;

import java.util.Timer;

/*
 * 
 * schedule(TimerTask task, long delay) 
 安排在指定延迟后执行指定的任务。
 *  void schedule(TimerTask task, long delay, long period) 
 安排指定的任务从指定的延迟后开始进行重复的固定延迟执行。 
 */
public class TimerDemo {

	public static void main(String[] args) {
		// 创建一个定时器对象
		Timer t = new Timer();
		// 创建一个任务对象 并将定时器对象传递过去 为关闭定时器做准备
		MyTask mt = new MyTask(t);
		// 给定时器设施定时任务和延时执行时间
		// t.schedule(mt, 3000);
		//
		t.schedule(mt, 10000, 1000);//

	}
}
