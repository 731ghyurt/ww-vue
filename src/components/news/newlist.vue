<template>
    <div class="newlist">
       <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="value in navlist" :key="value.id">
					<router-link :to="'/header/news/newlist/newinfo?id='+value.id">
						<img class="mui-media-object mui-pull-left" :src="value.img_url">
						<div class="mui-media-body">
							{{value.title}}
							<p class="mui-ellipsis">
                                <span>发表时间:{{value.add_time | timeFilter}}</span>
                                <span>点击：{{value.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
       </ul>
      
    </div>
</template>
<script>
  import { Toast } from 'mint-ui';

    export default {
        data(){
            return {
                navlist:[]
            }
        },
        created(){
            this.getnavlist();
        },
        methods: {
            getnavlist() {
                this.$http.get("api/getnewslist").then(res=>{
                    // console.log(res.body.message);
                    if (res.body.status == 0) {
                        this.navlist = res.body.message;
                    } else {
                         Toast({
                            message: '请求失败,请重新连接',
                            position: 'top',
                            duration: 4000
                        });
                    }
                });
            }
        }
    }
</script>
<style lang="less" scoped>
.mui-media-body {
    font-weight: 900;
    .mui-ellipsis {
        color:blue;
        display: flex;
        font-weight: 700;
        margin-top:5px;
        justify-content: space-between;
    }
}
    
</style>

