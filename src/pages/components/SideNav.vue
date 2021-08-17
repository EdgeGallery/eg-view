<style lang="scss">
  .side-nav {
    width: 100%;
    box-sizing: border-box;
    padding-right: 30px;
    transition: opacity .3s;
    &.is-fade {
      transition: opacity 3s;
    }

    li {
      list-style: none;
    }

    ul {
      padding: 0;
      margin: 0;
      overflow: hidden;
    }

    > ul > .nav-item > a {
      margin-top: 15px;
    }

    > ul > .nav-item:nth-child(-n + 4) > a {
      margin-top: 0;
    }

    .nav-item {
      padding-left: 60px;
      margin: 0 10px;
      a {
        font-size: 20px;
        color: #c9c5d0;
        line-height: 49px;
        height: 49px;
        margin: 0;
        padding: 0;
        text-decoration: none;
        display: block;
        position: relative;
        transition: .15s ease-out;
        &.active {
          color: #380879;
        }
        &.selectTitle{
          color: #380879;
        }
      }
      &:hover a{
        color: #380879;
      }

      &:first-child{
        margin-top: 5px;
      }
      &:hover {
        background: #fff;
        border-radius: 8px;
        color: #380879;
        box-shadow: 0 0 10px 0 rgba(40, 12, 128, 0.1);
      }

        &.select{
          background: #fff;
          border-radius: 8px;
          color: #380879;
          box-shadow: 0 0 10px 0 rgb(40, 12, 128,0.1);
        }
        &.navimg:first-child{
          background-image: url('../assets/images/Introduction.png');
          background-repeat: no-repeat;
          background-position: 30px 15px;
        }
        &.navimg:nth-child(2){
          background-image: url('../assets/images/Development.png');
          background-repeat: no-repeat;
          background-position: 30px 15px;
        }
        &.navimg:nth-child(3){
          background-image: url('../assets/images/Components.png');
          background-repeat: no-repeat;
          background-position: 30px 15px;
        }
        &.navselectimg:first-child{
          background-image: url('../assets/images/IntroductionActive.png');
          background-repeat: no-repeat;
          background-position: 30px 15px;
        }
        &.navselectimg:nth-child(2){
          background-image: url('../assets/images/DevelopmentActive.png');
          background-repeat: no-repeat;
          background-position: 30px 15px;
        }
        &.navselectimg:nth-child(3){
          background-image: url('../assets/images/ComponentsActive.png');
          background-repeat: no-repeat;
          background-position: 30px 15px;
        }

      .nav-item-second {

        a {
          display: block;
          height: 30px;
          color: #7a6e8a;
          line-height: 30px;
          font-size: 16px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: normal;
          padding-left: 60px;
          width: calc(100% - 75px);

          &:hover,
          &.active {
            color: #5e40c8;
            background-image: linear-gradient(to right,#e6e7f3,#f0f0f7);
            border-radius: 0 8px 8px 0;
          }
        }

        &:last-child{
          padding-bottom: 10px;
        }
      }
      .sub-nav{
        margin-left: -60px;
      }

      &.sponsors {
        & > .sub-nav {
          margin-top: -10px;
        }

        & > a {
          color: #777;
          font-weight: 300;
          font-size: 14px;
        }

        .nav-item {
          display: inline-block;

          a {
            height: auto;
            display: inline-block;
            vertical-align: middle;
            margin: 8px 12px 12px 0;

            img {
              width: 42px;
            }
          }

          &:first-child a img {
            width: 36px;
          }
        }
      }
    }

    .nav-group__title {
      font-size: 12px;
      color: #999;
      line-height: 26px;
      margin-top: 15px;
    }

    #code-sponsor-widget {
      margin: 0 0 0 -20px;
    }
  }
  .nav-dropdown-list {
    width: 120px;
    margin-top: -8px;
    li {
      font-size: 14px;
    }
  }
</style>
<template>
  <div
    class="side-nav"
    @mouseenter="isFade = false"
    :class="{ 'is-fade': isFade }"
    :style="navStyle">
    <ul>
      <li
        class="nav-item navimg"
        v-for="(item, index) in data"
        :key="index"
        @mouseenter="hoverList(index)"
        @mouseleave="activeInfo=-1"
        @click="selectList(index)"
        :class="{'navselectimg': activeInfo===index ||selectInfo === index,'select':selectInfo===index}"
        >
        <a v-if="!item.path && !item.href" @click="expandMenu" :class="{'selectTitle':selectInfo===index}">{{item.name}}</a>
        <a v-if="item.href" :href="item.href" target="_blank" :class="{'selectTitle':selectInfo===index}">{{item.name}}</a>
        <router-link
          v-if="item.path"
          active-class="active"
          :to="base + item.path"
          exact
          v-text="item.title || item.name">
        </router-link>
        <ul class="pure-menu-list sub-nav" v-if="item.children">
          <li
            @click="selectList(index)"
            v-show="activeInfo===index || selectInfo===index"
            class="nav-item-second"
            v-for="(navItem, key) in item.children"
            :key="key">
            <router-link
              class=""
              active-class="active"
              :to="base + navItem.path"
              exact
              v-text="navItem.title || navItem.name">
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import bus from '../../bus'
import compoLang from '../i18n/component.json'

export default {
  props: {
    data: Array,
    base: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      highlights: [],
      navState: [],
      isSmallScreen: false,
      isFade: false,
      activeInfo: 0,
      selectInfo: 0
    }
  },
  watch: {
    '$route.path' () {
      this.handlePathChange()
    },
    isFade (val) {
      bus.$emit('navFade', val)
    }
  },
  computed: {
    navStyle () {
      const style = {}
      if (this.isSmallScreen) {
        style.paddingBottom = '60px'
      }
      style.opacity = this.isFade ? '0.5' : '1'
      return style
    },
    lang () {
      return this.$route.meta.lang
    },
    langConfig () {
      return compoLang.filter(config => config.lang === this.lang)[0]['nav']
    }
  },
  methods: {
    hoverList (index) {
      this.activeInfo = index
    },
    selectList (index) {
      this.selectInfo = index
    },
    selectIntro () {
      this.selectInfo = 0
    },
    handleResize () {
      this.isSmallScreen = document.documentElement.clientWidth < 768
      this.handlePathChange()
    },
    handlePathChange () {
      if (!this.isSmallScreen) {
        this.expandAllMenu()
        return
      }
      this.$nextTick(() => {
        this.hideAllMenu()
        let activeAnchor = this.$el.querySelector('a.active')
        let ul = activeAnchor.parentNode
        while (ul.tagName !== 'UL') {
          ul = ul.parentNode
        }
        ul.style.height = 'auto'
      })
    },
    hideAllMenu () {
      [].forEach.call(this.$el.querySelectorAll('.pure-menu-list'), ul => {
        ul.style.height = '0'
      })
    },
    expandAllMenu () {
      [].forEach.call(this.$el.querySelectorAll('.pure-menu-list'), ul => {
        ul.style.height = 'auto'
      })
    },
    expandMenu (event) {
      if (!this.isSmallScreen) return
      let target = event.currentTarget
      if (!target.nextElementSibling || target.nextElementSibling.tagName !== 'UL') return
      this.hideAllMenu()
      event.currentTarget.nextElementSibling.style.height = 'auto'
    }
  },
  created () {
    bus.$on('fadeNav', () => {
      this.isFade = true
    })
  },
  mounted () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>
