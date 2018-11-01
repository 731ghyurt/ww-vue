<template>
    <div class="header">
        <!-- 这是轮播图 -->
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="value in datalist" :key="value.img">
                <img v-bind:src="value.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 这是nav部分 -->
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                        <router-link to="/header/news/newlist">
		                    <a href="#"><img src="../../assets/menu1.png" alt=""></a> 
		                    <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                        <a href="#">
		                   <a href="#"><img src="../../assets/menu2.png" alt=""></a>
		                    <div class="mui-media-body">图片分享</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <a href="#"><img src="../../assets/menu3.png" alt=""></a>
		                    <div class="mui-media-body">商品购买</div></a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <a href="#"><img src="../../assets/menu4.png" alt=""></a>
		                    <div class="mui-media-body">留言反馈</div></a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <a href="#"><img src="../../assets/menu5.png" alt=""></a>
		                    <div class="mui-media-body">视频专区</div></a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <a href="#"><img src="../../assets/menu6.png" alt=""></a>
		                    <div class="mui-media-body">联系我们</div></a>
                    </li>
		        </ul> 
		</div>
    </div>
</template>
<script>
    //请求轮播图数据
  import { Toast } from 'mint-ui';
  import "../../lib/mui/css/mui.min.css"
    export default {
        data:function () {
            return {
                datalist:[]
            }
        },
        created(){
            this.getbar();
        },
        methods:{
            //发送请求得到轮播图数据
            getbar(){
                //请求路径前面不能加/:加了之后是请求根路径
                this.$http.get("api/getlunbo").then(res=>{
                if (res.body.status == 0) {
                   this.datalist = res.body.message;
                } else {
                    Toast({
                        message: '请求失败,请重新连接',
                        position: 'top',
                        duration: 4000
                    });
                }
            })
            }
            
        }
    }
</script>
<style lang="less" scoped>
div {
    .mint-swipe {
        height: 250px;
        img {
            width: 100%;
        }
    }
    .mui-content {
        
        ul {
            background-color: #fff;
            a {
             img  {
                width: 80px;
                }
            }
        }
        
       
    }
}
    
</style>