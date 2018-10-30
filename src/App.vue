<template>
  <div>
    <!-- 这是头部 -->
    <mt-header fixed title="ww之vue项目"></mt-header>
    <!-- 这是主体部分 -->
    <div class="content">1111</div>
    <!-- 这是底部导航 -->
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item mui-active" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
  </div>
</template>

<script>
</script>


<style lang="css" scoped>
  .content {
    padding-top: 40px;
  }
</style>
