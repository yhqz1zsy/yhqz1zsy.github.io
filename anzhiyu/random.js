var posts=["2024/01/17/hello-world/","2024/02/03/博客搭建历程/","2024/01/31/寒假日常/","2024/01/19/我的第一篇博客blog/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};