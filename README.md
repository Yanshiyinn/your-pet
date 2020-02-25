# YOUR PET宠物定制 微信小程序

### 一、项目要求与目的

通过学习微信小程序的相关开发知识，掌握`HTML`/`CSS`/`JS`/`JSON`的基础语法，能够对界面动态渲染，对数据和事件进行反馈，以小组为单位根据各自的情况进行微信小程序的应用开发。

### 二、项目内容

宠物是现代很多人生活中一个重要的组成部分，为人们带来了很多慰藉，然而在宠物的选择上，人们可能会遇到一些困难，不知道该如何挑选到心仪的宠物，因此针对这一问题，开发组选择了宠物推荐定制的主题来开发微信小程序。

开发组设计的微信小程序功能主要是向用户推荐适合他的宠物。下方功能菜单包括第一页：罗列展示本系统包含的宠物及其个性标签和详细信息；第二页：根据用户选择的标签筛选或罗列符合条件的宠物；第三页：心理测试推荐适合用户的宠物和个人喜好里记录用户浏览过的宠物信息详情页。

### 三、系统概要设计说明

#### 系统概要说明：

要向用户推荐宠物，一是在展示页面记录他感兴趣的宠物，二是根据根据他喜欢的宠物特征筛选，推荐符合条件的宠物，三是提供心理测试推荐适合他的宠物，这样能从用户主动和被动两个角度完成宠物推荐系统的功能。

#### 功能模块：

##### 1.  查看页面：

分为狗、猫、鸟、其他四个类别，可以滑动，每种宠物可以点进详情页查看信息，此时记录用户对此宠物的好感度加1。

<img src="https://wx2.sinaimg.cn/mw1024/a4bfa50fgy1gc8ifirxajj20ba0k6dh4.jpg" alt="img" style="zoom:67%;" /> <img src="https://wx4.sinaimg.cn/mw1024/a4bfa50fgy1gc8ifiqonuj20be0k1q47.jpg" alt="img" style="zoom:67%;" /> <img src="https://wx2.sinaimg.cn/mw1024/a4bfa50fgy1gc8ifirzryj20bf0k47e6.jpg" alt="img" style="zoom:67%;" /> <img src="https://wx4.sinaimg.cn/mw1024/a4bfa50fgy1gc8ig1mohij20bc0k312u.jpg" alt="img" style="zoom:67%;" />

##### 2. 标签页面：

根据用户选择的标签，筛选或罗列符合条件的宠物。筛选是同时符合标签的宠物，罗列是所有具有这些标签特征的宠物。在结果页面可以点进宠物的详情页。如第一组图如果分别选择筛选和罗列。第二组图是筛选的结果，金毛犬和布偶猫同时符合中型和温顺两个标签。第三组图是罗列的结果，其中的乌龟只符合温顺的标签。若没有同时符合几个标签的宠物，即筛选结果为0，显示无同时符合条件的宠物。

<img src="https://wx4.sinaimg.cn/mw1024/a4bfa50fgy1gc8ig1m1q2j20be0k4dhb.jpg" alt="img" style="zoom:67%;" /><img src="https://wx4.sinaimg.cn/mw1024/a4bfa50fgy1gc8ig1l62sj20bd0k5q4b.jpg" alt="img" style="zoom:67%;" />

<img src="https://wx3.sinaimg.cn/mw1024/a4bfa50fgy1gc8ig1nvunj20bd0k63yr.jpg" alt="img" style="zoom:67%;" /> <img src="https://wx1.sinaimg.cn/mw1024/a4bfa50fgy1gc8ig1tltcj20bc0jzak6.jpg" alt="img" style="zoom:67%;" /> <img src="https://wx2.sinaimg.cn/mw1024/a4bfa50fgy1gc8ig1tj3fj20ba0k0tip.jpg" alt="img" style="zoom:67%;" />

<img src="https://wx1.sinaimg.cn/mw690/a4bfa50fgy1gc8ig1rk5mj20bd0k5753.jpg" alt="img" style="zoom:67%;" /> <img src="https://wx4.sinaimg.cn/mw690/a4bfa50fgy1gc8ig1xu02j20bd0k2dq2.jpg" alt="img" style="zoom:67%;" />

<img src="https://wx4.sinaimg.cn/mw690/a4bfa50fgy1gc8ig1se2ej20bb0k6wfy.jpg" alt="img" style="zoom:67%;" /><img src="https://wx4.sinaimg.cn/mw690/a4bfa50fgy1gc8ig1sx1vj20be0k3dg4.jpg" alt="img" style="zoom:67%;" />

##### 3. 关于页面：

宠物小测试根据每道题的选项计算分数推荐和分数相匹配的宠物。我的宠物是将用户浏览过的宠物详情页根据次数从大到小罗列。

<img src="https://wx1.sinaimg.cn/mw690/a4bfa50fgy1gc8ig1wos3j20bc0k4jt1.jpg" alt="img" style="zoom:67%;" /> <img src="https://wx3.sinaimg.cn/mw690/a4bfa50fgy1gc8igdvjtjj20bd0k4t93.jpg" alt="img" style="zoom:67%;" />

<img src="https://wx2.sinaimg.cn/mw690/a4bfa50fgy1gc8igdwjacj20b90k6gv1.jpg" alt="img" style="zoom:67%;" /> <img src="https://wx3.sinaimg.cn/mw690/a4bfa50fgy1gc8igdxy1fj20ba0k2wnr.jpg" alt="img" style="zoom:67%;" /> <img src="https://wx1.sinaimg.cn/mw690/a4bfa50fgy1gc8ignv98fj20bb0k47ei.jpg" alt="img" style="zoom:67%;" />