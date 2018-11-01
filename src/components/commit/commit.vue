<template>
    <div class="commit">
        <h2>发表评论</h2>
        <hr>
        <textarea maxlength="120" placeholder="请bb吧（最多bb120字,请讲究的bb）"></textarea>
        <mt-button  type="primary" size='large'>发表评论</mt-button>
        <!-- 用户评论内容展示 -->
        <div class="showcommit">
            <ul>
                <li v-for="value in commitData" :key="value.id">
                    <p class="title">第一楼 用户：{{value.user_name}} 发表时间：{{value.add_time|timeFilter}}</p>
                    <p class="content">{{value.content}}</p>
                </li>
            </ul>
        </div>
        <mt-button  type="danger" size='large' plain>加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from "mint-ui";
    export default {
        data() {
           return {
               commitData:[]
           } 
        },
        created(){
            this.getCommit();
        },
        methods:{
            getCommit(){
                var id = this.$route.query.id;
                console.log(id);
                this.$http.get("api/getcomments/"+id+"?pageindex=1").then(res=>{
                    console.log(res.body);
                    if (res.body.status == 0) {
                        this.commitData = res.body.message;
                    } else {
                         Toast({
                            message: '请求评论失败,请重新连接',
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
    .showcommit {
        ul {
            padding: 0;
            margin: 10px 0;
            li {
            list-style: none;
            color: #000!important;
            .title {
                background-color: #ccc;
                line-height: 35px;
            }
            .content {
                line-height: 35px;
                padding-left: 30px;
                box-sizing: border-box;
            }
            
        }
        }
        
    }
</style>

