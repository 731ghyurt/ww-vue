<template>
  <div>
    <!-- 这是头部 -->
    <mt-header fixed title="ww之vue项目"></mt-header>
    <!-- 这是主体部分 -->
    <div class="content">
			<transition>
				<router-view></router-view>
			</transition>
		</div>
    <!-- 这是底部导航 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/header">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/car">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
</script>


<style lang="less" scoped>
div {
		.content {
			// background-color: #fff;
			padding-top: 40px;
			.v-enter {
				opacity: 0;
				transform:translateX(100%);
			}
			.v-leave-to {
				opacity: 0;
				transform:translateX(-100%);
			}
		}
}
  
</style>
