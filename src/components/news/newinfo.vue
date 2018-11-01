<template>
    <div class="newInfo">
        <div>
            <h3 class="title">{{newinfo.title}}</h3>
            <p class="time"> 
                <span>发表时间: {{newinfo.add_time|timeFilter}}</span>
                <span>点击： {{newinfo.click}} 次</span>
            </p>
            <hr>
            <div class="content">
            {{newinfo.content}}
            </div>
        </div>
        <!--发表评论区域 -->
        <commit></commit>
    </div>
</template>
<script>
import {Toast} from "mint-ui";
  import commit from "../commit/commit.vue";
    export default {
        data(){
            return {
                newinfo:{}
            }
        },
        created(){
            this.getnewinfo();
        },
        methods:{
            getnewinfo() {
                var id = this.$route.query.id;
                // console.log(id);
                this.$http.get("api/getnew/"+id).then(res=>{
                    // console.log(res.body.message);
                    if (res.body.status == 0) {
                        this.newinfo = res.body.message;
                    } else {
                        Toast({
                            message: '不好意思，请求的数据不存在',
                            position: 'top',
                            duration: 4000
                        });
                    }
                });

            }
        },
        components:{//用来注册子组件的节点
            "commit":commit
        }
    }
</script>
<style lang="less" scoped>
    .newInfo {
        .title {
            color:red;
            text-align: center;
        }
        .time {
            display: flex;
            justify-content: space-between;
            color: skyblue;
            line-height: 40px;
            padding: 0 10px;
        }
    .content {
       padding: 0 10px;
       line-height: 30px;
       color: #666; 
    }
    }
</style>

