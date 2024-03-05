var posts=["2024/02/19/从0到1搭建自己的hexo博客/","2024/02/21/网络编程懒人入门-二-：快速理解网络通信协议（下篇）/","2024/02/21/网络编程懒人入门-一-：快速理解网络通信协议（上篇）/","2024/03/05/iOS添加各地区节假日日历/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };