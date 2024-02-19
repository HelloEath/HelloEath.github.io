var posts=["2024/02/19/hello-world/","2024/02/19/从0到1搭建自己的hexo博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };