<template>
    <div>
        <navbar></navbar>
    <swiper :options="swiperOption">
        <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%"></div>
        <swiper-slide>
          <img src="./images/slides/1.jpg" alt="" style="width: 100%;height: auto;max-width: 100%;max-height: 100%;">
          <div style="position: absolute;top: 50%;left: 50%;transform: translateX(-50%);transform: translate(-50%)">
            <div class="text" data-swiper-parallax="-300" style="color:#15416e;font-size:60px;">
                <p>健康管理师<br>健康行业最紧缺的人才</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="./images/slides/2.jpg" alt="" style="width: 100%;height: auto;max-width: 100%;max-height: 100%;;">
          <div style="position: absolute;top: 50%;left: 50%;transform: translateX(-50%);transform: translate(-50%)">
            <div class="text" data-swiper-parallax="-300" style="color:#15416e;font-size:60px;">
                <p>精品课程<br>教材编委专家精心打造</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="./images/slides/3.jpg" alt="" style="width: 100%;height: auto;max-width: 100%;max-height: 100%;;">
          <div style="position: absolute;top: 50%;left: 50%;transform: translateX(-50%);transform: translate(-50%)">
            <div class="text" data-swiper-parallax="-300" style="color:#15416e;font-size:60px;">
                <p>手机APP在线学习<br>随时想学就学</p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>

    <div class="flat-row pad-top40px pad-bottom40px">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="no-margin-top no-margin-bottom f-size16px">健康管理师-健康行业黄金岗位</h3>
                </div><!-- /.col-md-12 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </div><!-- /.flat-row -->

    <div class="flat-row pad-top0px">
        <div class="container">
            <div class="row">
                <div class="flat-wrapper">
                    <div class="flat-imagebox clearfix">
                        <div class="item-three-column">
                            <div class="imagebox">
                                <div class="box-wrapper">
                                    <div class="box-image">
                                        <img src="./assets/images/imagebox/1.jpg" alt="images">
                                    </div>
                                    <div class="box-header">
                                        <h5 class="box-title">
                                            <a href="#">政策支持<br>Policy support</a>
                                        </h5>
                                    </div>
                                    <div class="box-content">
                                        <div class="box-desc">国家提出的2030年健康中国计划，使的医疗已经从基本医疗保障转向关注全民健康问题.</div>
                                        <a class="button style1" href="#">Learn more</a>
                                    </div>
                                </div>
                            </div><!-- /.imagebox -->
                        </div><!-- /.item-three-column -->

                        <div class="item-three-column">
                            <div class="imagebox">
                                <div class="box-wrapper">
                                    <div class="box-image">
                                        <img src="./assets/images/imagebox/2.jpg" alt="images">
                                    </div>
                                    <div class="box-header">
                                        <h5 class="box-title">
                                            <a href="#">社会需求<br>Social needs</a>
                                        </h5>
                                    </div>
                                    <div class="box-content">
                                        <div class="box-desc">如何预防慢性病，怎样健康生活，如何少生病，不生病已成为社会广泛需求.</div>
                                        <a class="button style1" href="#">Learn more</a>
                                    </div>
                                </div>
                            </div><!-- /.imagebox -->
                        </div><!-- /.item-three-column -->

                        <div class="item-three-column">
                            <div class="imagebox">
                                <div class="box-wrapper">
                                    <div class="box-image">
                                        <img src="./assets/images/imagebox/3.jpg" alt="images">
                                    </div>
                                    <div class="box-header">
                                        <h5 class="box-title">
                                            <a href="#">人才稀缺<br>Talent scarcity</a>
                                        </h5>
                                    </div>
                                    <div class="box-content">
                                        <div class="box-desc">我国至少存在400万名健康管理师岗位空缺，健康管理师已经成为当今社会黄金职业.</div>
                                        <a class="button style1" href="#">Learn more</a>
                                    </div>
                                </div>
                            </div><!-- /.imagebox -->
                        </div><!-- /.item-three-column -->
                    </div><!-- /.flat-imagebox -->
                </div><!-- /.flat-wrapper -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </div><!-- /.flat-row -->

    <div class="flat-row background-f1f2f8 pad-bottom40px">
        <div class="container">
            <div class="row">
                <div class="flat-wrapper">
                    <div class="flat-title-button">
                        <h3 class="title"><i class="fa fa-line-chart"></i>我们的优势</h3>
                        <p><a class="button sm" href="#">More</a></p>
                    </div>
                </div><!-- /.flat-wrapper -->
            </div><!-- /.row -->

            <div class="flat-divider d30px"></div>

            <div class="row">
                <div class="flat-wrapper">
                    <div class="flat-iconbox clearfix">
                        <div class="item-three-column">
                            <div class="iconbox">
                                <div class="box-header">
                                    <div class="box-icon">
                                        <i class="fa fa-pie-chart"></i>
                                    </div>
                                    <h4 class="box-title">全教材编委专家课程</h4>
                                </div>
                                <div class="box-content">权威专家严格按照课程考试大纲，精心录制全套最新课程体系
                                    <p class="box-readmore">
                                        <a href="#">Learn more</a>
                                    </p>
                                </div>
                            </div><!-- /.iconbox -->
                        </div><!-- /.item-three-column -->

                        <div class="item-three-column">
                            <div class="iconbox">
                                <div class="box-header">
                                    <div class="box-icon">
                                        <i class="fa fa-area-chart"></i>
                                    </div>
                                    <h4 class="box-title">最新全章节练习</h4>
                                </div>
                                <div class="box-content">
                                    严格按照章节划分，学习完立即反复练习，理解课程内容.
                                    <p class="box-readmore">
                                        <a href="#">Learn more</a>
                                    </p>
                                </div>
                            </div><!-- /.iconbox -->
                        </div><!-- /.item-three-column -->

                        <div class="item-three-column">
                            <div class="iconbox">
                                <div class="box-header">
                                    <div class="box-icon">
                                        <i class="fa fa-bar-chart-o"></i>
                                    </div>
                                    <h4 class="box-title">海量真题模考</h4>
                                </div>
                                <div class="box-content">
                                    海量真题，根据最新教材内容，以最新考试周期精准划题，定期测试，随时测试学习成果.
                                    <p class="box-readmore">
                                        <a href="#">Learn more</a>
                                    </p>
                                </div>
                            </div><!-- /.iconbox -->
                        </div><!-- /.item-three-column -->

                        <div class="item-three-column">
                            <div class="iconbox">
                                <div class="box-header">
                                    <div class="box-icon">
                                        <i class="fa fa-line-chart"></i>
                                    </div>
                                    <h4 class="box-title">全国报名通道</h4>
                                </div>
                                <div class="box-content">
                                    全国80%以上城市均可报名，在健康中国计划中永不落伍.
                                    <p class="box-readmore">
                                        <a href="#">Learn more</a>
                                    </p>
                                </div>
                            </div><!-- /.iconbox -->
                        </div><!-- /.item-three-column -->

                        <div class="item-three-column">
                            <div class="iconbox">
                                <div class="box-header">
                                    <div class="box-icon">
                                        <i class="fa fa-bank"></i>
                                    </div>
                                    <h4 class="box-title">9小时考前专家串讲</h4>
                                </div>
                                <div class="box-content">
                                    权威专家考前直播串讲，精准押题，将所有考试内容透彻讲解，考试通过率保障.
                                    <p class="box-readmore">
                                        <a href="#">Learn more</a>
                                    </p>
                                </div>
                            </div><!-- /.iconbox -->
                        </div><!-- /.item-three-column -->

                        <div class="item-three-column">
                            <!-- /.iconbox -->
                            <div class="iconbox">
                                <div class="box-header">
                                    <div class="box-icon"> <i class="fa fa-bank"></i> </div>
                                    <h4 class="box-title">学习进度全程辅导</h4>
                                </div>
                                <div class="box-content"> 每位学员配备学习指导老师，监督学习进度，定期在线指导.
                                    <p class="box-readmore"> <a href="#">Learn more</a> </p>
                                </div>
                            </div>
                        </div><!-- /.item-three-column -->
                    </div><!-- /.flat-iconbox -->
                </div><!-- /.flat-wrapper -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </div><!-- /.flat-row -->

    <div class="bg-themes">
        <div class="flat-row parallax parallax5 pad165px">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="home-title">紧跟2030健康中国目标，我们砥砺前行，努力做到最好。</h3>
                    </div>
                </div><!-- /.row -->
            </div><!-- /.container -->
        </div><!-- /.flat-row -->
    </div>

    <div class="flat-row flat-latest-news pad-bottom70px">
        <div class="container">
            <div class="row">
                <div class="flat-wrapper">
                    <div class="flat-title-button">
                        <h3 class="title"><i class="fa fa-newspaper-o"></i>新闻动态</h3>
                        <p><a class="button sm" href="#">More</a></p>
                    </div>
                </div><!-- /.flat-wrapper -->
            </div><!-- /.row -->

            <div class="flat-divider d30px"></div>

            <div class="row">
                <div class="col-md-18">
                    <div class="row">
                        <div class="col-md-4" v-for="item in list" :key="item.id">
                            <article class="blog-posts">
                                <div class="entry-wrapper">
                                    <div class="entry-cover">
                                        <h4 class="entry-time">
                                            <span class="entry-day">13</span>
                                            <span class="entry-month">Apr</span>
                                        </h4>
                                        <a href="#"><img :src=item.imgUrl alt="images"></a>
                                    </div>
                                    <div class="entry-content-wrap">
                                        <div class="entry-header">
                                            <h2 class="entry-title">
                                                <a href="#">{{item.articleTitle}}</a>
                                            </h2>
                                        </div>
                                        <div class="entry-footer">
                                            <div class="entry-meta">
                                                <span class="entry-author"><a href="#">{{item.articleDescribe}}</a></span>
                                                <!-- <span class="entry-categories"><a href="#">Sales Enablement</a></span> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div><!-- /.col-md-6 -->
                    </div>
                </div><!-- /.col-md-8 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </div><!-- /.flat-row -->

    <div class="flat-row pad-bottom0px background-20242e">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="title-section style1">
                        <h3 class="title"><span>部分授课专家</span></h3>
                    </div>

                    <div class="list-about">
                        <h4>
                            <span>
                                <i class="fa fa-check border"></i>
                                王培玉 教授
                            </span>
                        </h4>
                        <p><span>北大医学部副院长中华医学会健康管理学分会委员
                                《中华预防医学杂志》、《中国健康教育》及《中华健康管理学杂志》编委.</span></p>
                    </div><!-- /.list-about -->

                    <div class="list-about">
                        <h4>
                            <span>
                                <i class="fa fa-check border"></i>
                                何丽 教授
                            </span>
                        </h4>
                        <p><span>全民健康素养巡讲特聘专家
                                中国疾病预防控制中心营养与健康所科技处处长
                                健康管理师职业技能鉴定专家工作委员会委员.</span></p>
                    </div><!-- /.list-about -->

                    <div class="list-about">
                        <h4>
                            <span>
                                <i class="fa fa-check border"></i>
                                曾强 教授
                            </span>
                        </h4>
                        <p><span>中华医学会健康管理学分会主任委员
                                中国人民解放军总医院（301医院）健康管理研究院主任
                                联合国教科文组织生命技术研究院亚洲区副主席.</span></p>
                    </div><!-- /.list-about -->
                </div><!-- /.col-md-6 -->

                <div class="col-md-6">
                    <div class="title-section style1">
                        <h3 class="title"><span>课程试听</span></h3>
                    </div>

                    <div class="flat-divider d30px"></div>

                    <div class="flat-video-fancybox">
                        <a class="fancybox" data-type="iframe"
                            href="https://www.youtube.com/embed/2Ge1GGitzLw?autoplay=1">
                            <img src="images/v1.jpg" alt="images">
                        </a>
                    </div>
                </div><!-- /.col-md-6 -->
            </div><!-- /.row -->
            <div class="clients-image style1 clearfix"></div><!-- /.clients-image -->
        </div><!-- /.container -->
    </div><!-- /.flat-row -->
    </div>
    
</template>

<script>

// import './js/bootstrap.min.js'
// import '@/home/'
import Navbar from '@/navbar/Navbar'
export default {
    name:'Homes',
    data(){
        return{
            swiperOption: {
                speed: 600,
                parallax: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            list:[]
        }
    },
    created(){
      this.getUrl();
    },
    methods:{
        getUrl(){
            let api = this.HOST + '/companyInfo?appId=wx129eaf6876332fba';
            this.$axios.post(api).then((response) => {
                this.list = response.data.data.companyArticleInfoList;
                // console.log(response.data.companyArticleInfoList)
            })
        }
    },
    components:{
        Navbar
    }
}
</script>

<style scoped>
.swiper-slide {
    font-size: 18px;
    color:#fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: transparent!important;
    justify-content: space-around!important;
  }
  .parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
    background-image: url(/static/images/surmon-1.jpg);
  }
  .swiper-slide .title {
    font-size: 41px;
    font-weight: 300;
  }
  .swiper-slide .subtitle {
    font-size: 21px;
  }
  .swiper-slide .text {
    font-size: 14px;
    max-width: 400px;
    line-height: 1.3;
  }
</style>