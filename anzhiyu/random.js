var posts=["2024/11/08/Openwrt防检测—PC/","2024/11/08/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };