<!--
  -  Copyright 2021 Huawei Technologies Co., Ltd.
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
<div class="demo">
  <div class="source">
    <slot name="demo-source"></slot>
  </div>
  <div class="meta">
    <div class="description">
      <slot name="meta-desc"></slot>
    </div>
    <div class="codes">
      <slot name="codes"></slot>
    </div>
  </div>
  <!--div class="demo-block-control is-fixed" style="left: 661px;">
    <i class="el-icon-caret-top"></i>
    <span style="display: none;">隐藏代码</span>
    <button type="button" class="el-button control-button el-tooltip el-button--text el-button--small" aria-describedby="el-tooltip-9534" tabindex="0" style="">
      <span>
        在线运行
      </span>
    </button>
  </div-->
</div>
</template>
<style lang='less' scoped>
.demo{
  margin-bottom: 24px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
  .source{
    padding: 24px;
  }
  .meta{
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
    transition: height .2s;
    .description{
      padding: 20px;
      box-sizing: border-box;
      border: 1px solid #ebebeb;
      border-radius: 3px;
      font-size: 14px;
      line-height: 22px;
      color: #666;
      word-break: break-word;
      margin: 10px;
      background-color: #fff;
      p{
        margin: 0;
      }
    }
    pre{
      border: none;
      margin: 0;
    }
  }
}
.demo:hover{
  box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%), 0 2px 4px 0 rgb(232 237 250 / 50%);
}
</style>
