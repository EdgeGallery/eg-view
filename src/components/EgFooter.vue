<!--
  -  Copyright 2020-2021 Huawei Technologies Co., Ltd.
  -
  -  Licensed under the Apache License, Version 2.0 (the "License");
  -  you may not use this file except in compliance with the License.
  -  You may obtain a copy of the License at
  -
  -      http://www.apache.org/licenses/LICENSE-2.0
  -
  -  Unless required by applicable law or agreed to in writing, software
  -  distributed under the License is distributed on an "AS IS" BASIS,
  -  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  -  See the License for the specific language governing permissions and
  -  limitations under the License.
  -->

<template>
  <div
    class="footerBar specific_Bg"
  >
    <div
      class="footer_list"
      v-if="homePage"
    >
      <div class="list_div padding_default clear">
        <ul>
          <li
            v-for="(item,index) in footerData"
            :key="index"
          >
            <p class="tit">
              {{ language==='cn'?item.title:item.titleEn }}
            </p>
            <div v-if="item.listData">
              <p
                v-for="(itemSub,indexSub) in item.listData"
                :key="indexSub"
              >
                <el-link
                  :href="language==='cn'?itemSub.url:itemSub.urlEn"
                  target="_blank"
                >
                  {{ language==='cn'?itemSub.name:itemSub.nameEn }}
                </el-link>
              </p>
            </div>
            <div v-if="item.lastLi">
              <div class="icon_div">
                <div
                  class="img_div"
                  @mouseenter="showWechat=true"
                  @mouseleave="showWechat=false"
                >
                  <img
                    src="../assets/images/footer_wechat.png"
                    alt=""
                    class="imgIcon"
                  >
                </div>
                <el-collapse-transition>
                  <div
                    class="showDiv footer_wechat"
                    v-show="showWechat"
                    @mouseenter="showWechat=true"
                    @mouseleave="showWechat=false"
                  >
                    <img
                      src="../assets/images/home_footer_wechat_eg.png"
                      alt=""
                    >
                  </div>
                </el-collapse-transition>
                <el-collapse-transition>
                  <div
                    class="showDiv footer_text"
                    v-show="showWechat"
                    @mouseenter="showWechat=true"
                    @mouseleave="showWechat=false"
                  >
                    <el-link
                      :underline="false"
                      class="defaultLink"
                    >
                      {{ language==='cn'?publicList.weChatPublic:publicList.weChatPublicEn }}
                    </el-link>
                  </div>
                </el-collapse-transition>
              </div>
              <div class="icon_div">
                <div
                  class="img_div"
                  @mouseenter="showGitee=true"
                  @mouseleave="showGitee=false"
                >
                  <img
                    src="../assets/images/footer_gitee.png"
                    alt=""
                    class="imgIcon"
                  >
                </div>
                <el-collapse-transition>
                  <div
                    class="showDiv footer_text"
                    v-show="showGitee"
                    @mouseenter="showGitee=true"
                    @mouseleave="showGitee=false"
                  >
                    <el-link
                      :href="giteeUrl"
                      target="_blank"
                    >
                      {{ language==='cn'?publicList.codeWarehouse:publicList.codeWarehouseEn }}
                    </el-link>
                  </div>
                </el-collapse-transition>
              </div>
              <div class="icon_div">
                <div
                  class="img_div"
                  @mouseenter="showWeibo=true"
                  @mouseleave="showWeibo=false"
                >
                  <img
                    src="../assets/images/footer_weibo.png"
                    alt=""
                    class="imgIcon"
                  >
                </div>
                <el-collapse-transition>
                  <div
                    class="showDiv footer_text"
                    v-show="showWeibo"
                    @mouseenter="showWeibo=true"
                    @mouseleave="showWeibo=false"
                  >
                    <el-link
                      :href="weiboUrl"
                      target="_blank"
                    >
                      {{ language==='cn'?publicList.followWeibo:publicList.followWeiboEn }}
                    </el-link>
                  </div>
                </el-collapse-transition>
              </div>
              <div class="icon_div">
                <div
                  class="img_div"
                  @mouseenter="showEmail=true"
                  @mouseleave="showEmail=false"
                >
                  <img
                    src="../assets/images/footer_email.png"
                    alt=""
                    class="imgIcon"
                  >
                </div>
                <el-collapse-transition>
                  <div
                    class="showDiv footer_text"
                    v-show="showEmail"
                    @mouseenter="showEmail=true"
                    @mouseleave="showEmail=false"
                  >
                    <el-link
                      :href="emailUrl"
                      target="_blank"
                    >
                      {{ language==='cn'?publicList.mailingList:publicList.mailingListEn }}
                    </el-link>
                  </div>
                </el-collapse-transition>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer_bot padding_default">
      <p>
        {{ language==='cn'?copyrightlist.copyRight:copyrightlist.copyRightEn }}
      </p>
      <p class="right">
        <el-link
          :href="language==='cn'?copyrightlist.legalNoticeUrl:copyrightlist.legalNoticeUrlEn"
          target="_blank"
        >
          {{ language==='cn'?copyrightlist.legalNotice:copyrightlist.legalNoticeEn }}
        </el-link>
        <span>|</span>
        <el-link
          :href="language==='cn'?copyrightlist.privacyPolicyUrl:copyrightlist.privacyPolicyUrlEn"
          target="_blank"
        >
          {{ language==='cn'?copyrightlist.privacyPolicy:copyrightlist.privacyPolicyEn }}
        </el-link>
      </p>
    </div>
  </div>
</template>

<script>
import pageData from '../pageData/footerData.js'
export default {
  name: 'FooterBar',
  props: {
    language: {
      require: true,
      type: String,
      default: 'en'
    },
    // Receive names and links of other platforms, such as:
    // [{name:'Appstore',url:'xxxx'}]
    platformData: {
      require: true,
      type: Array,
      default: () => []
    },
    // App.vue page judges the page to be fully displayed at the bottom
    homePage: {
      require: true,
      type: Boolean,
      default: true
    },
    // App.vue page judges the page to add a custom background
    specificBg: {
      require: true,
      type: Boolean,
      default: true
    },
    // The custom background color to be used for the App.vue page transfer value
    specificBgColor: {
      type: String,
      default: '#ffffff'
    }
  },
  data () {
    return {
      giteeUrl: 'https://gitee.com/edgegallery',
      weiboUrl: 'https://weibo.com/u/7575392977?is_all=1',
      emailUrl: 'https://edgegallery.groups.io/g/main',
      showWechat: false,
      showGitee: false,
      showWeibo: false,
      showEmail: false,
      footerData: [],
      publicList: {},
      copyrightlist: {}
    }
  },
  watch: {
    '$i18n.locale': function () {
      this.language = localStorage.getItem('language')
    },
    specificBg (newVal) {
      this.setFooterBg(newVal)
    }
  },
  methods: {
    setFooterBg (specificBg) {
      let oDiv = document.getElementsByClassName('specific_Bg')
      if (specificBg && oDiv[0]) {
        oDiv[0].style.background = this.specificBgColor
      } else {
        oDiv[0].style.background = 'transparent'
      }
    }
  },
  mounted () {
    this.setFooterBg(this.specificBg)
    this.footerData = pageData.footerData
    this.publicList = pageData.publicData
    this.copyrightlist = pageData.copyrightData
    // Put the list of received platform names into the total bottom data
    this.footerData.forEach(item => {
      if (item.titleEn === 'About EdgeGallery') {
        this.platformData.forEach(itemSub => {
          let obj = {
            name: '',
            nameEn: '',
            url: '',
            urlEn: ''
          }
          obj.name = obj.nameEn = itemSub.name
          obj.url = obj.urlEn = itemSub.url
          item.listData.push(obj)
        })
      }
    })
  }
}
</script>

<style lang='less' scoped>
.footerBar{
  width: 100%;
  z-index: 99;
  padding-top: 100px;
  .footer_list{
    background: #380879;
    padding: 50px 0;
    color: #fff;
    ul{
      li{
        float: left;
        margin-right: 100px;
        p{
          margin-bottom: 18px;
        }
      }
      li:nth-last-child(2){
        margin-right: 0;
      }
      li:last-child{
        float: right;
        margin-right: 0;
        position: relative;
        .tit{
          text-align: right;
        }
        .icon_div{
          float: left;
          position: relative;
          margin-left: 30px;
          .defaultLink{
            cursor: default;
          }
        }
        .img_div{
          width: 41px;
          height: 41px;
          background: url('../assets/images/footer_right_picbg.png');
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .imgIcon{
          transition: all 0.5s;
          cursor: pointer;
        }
        .imgIcon:hover{
          transform:rotate(360deg);
        }
        .showDiv{
          width: 160px;
          text-align: center;
          img{
            float: right;
            width: 130px;
          }
        }
      }
      .footer_wechat{
        position: absolute;
        left: -160px;
        bottom: 0;
        padding-right: 10px;
      }
      .footer_text{
        position: absolute;
        left: 50%;
        top: 40px;
        margin-left: -80px;
        .el-link{
          padding-top: 10px;
        }
      }
    }
    .tit{
      font-size: 16px;
      margin-bottom: 25px;
    }
    .el-link{
      color: #fff;
    }
    .el-link.el-link--default:after{
      border-color: #fff;
    }
  }
  .footer_bot{
    background: #e4e4e4;
    padding-bottom: 30px;
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .record{
      font-size: 12px;
      display: inline-block;
      margin-top: 10px;
    }
    .right{
      .el-link{
        color: #000;
      }
      .el-link.el-link--default:after{
        border-color: #000;
      }
      span{
        margin: 0 13px;
        color: #000;
      }
    }
  }
}
</style>
