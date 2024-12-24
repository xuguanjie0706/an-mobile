"use strict";(self.webpackChunkan_mobile=self.webpackChunkan_mobile||[]).push([[9104],{71758:function(d,e,n){var a;n.r(e),n.d(e,{demos:function(){return _}});var o=n(90228),t=n.n(o),l=n(87999),i=n.n(l),r=n(75271),P=n(98034),c=n(69935),s=n(794),_={"src-divider-demo-demo1":{component:r.memo(r.lazy(function(){return Promise.all([n.e(229),n.e(9340),n.e(3569),n.e(9935),n.e(2433)]).then(n.bind(n,85601))})),asset:{type:"BLOCK",id:"src-divider-demo-demo1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(48079).Z},"an-mobile":{type:"NPM",value:"0.0.9"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"an-mobile":c,"an-mobile/demos":s,react:a||(a=n.t(r,2))},renderOpts:{compile:function(){var v=i()(t()().mark(function E(){var u,I=arguments;return t()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n.e(7483).then(n.bind(n,77483));case 2:return m.abrupt("return",(u=m.sent).default.apply(u,I));case 3:case"end":return m.stop()}},E)}));function D(){return v.apply(this,arguments)}return D}()}}}},25554:function(d,e,n){n.r(e);var a=n(75271),o=n(52676),t="adm-auto-center",l=function(r){return(0,o.jsx)("div",{className:t,children:(0,o.jsx)("div",{className:"".concat(t,"-content"),children:r.children})})};e.default=l},31431:function(d,e,n){n.r(e);var a=n(25554),o=n(43033);e.default=a.default},59821:function(d,e,n){n.r(e),n.d(e,{DemoBlock:function(){return l}});var a=n(75271),o=n(17199),t=n(52676),l=function(r){return(0,t.jsxs)("div",{className:"demoBlock",children:[(0,t.jsx)("div",{className:"title",children:r.title}),(0,t.jsx)("div",{className:"main",style:{padding:r.padding,background:r.background},children:r.children})]})};l.defaultProps={padding:"12px 12px",background:"var(--adm-color-background)"}},21255:function(d,e,n){n.r(e),n.d(e,{DemoDescription:function(){return t}});var a=n(75271),o=n(52676),t=function(i){return(0,o.jsx)("div",{className:"demoDescription",children:i.content||i.children})}},794:function(d,e,n){n.r(e),n.d(e,{DemoBlock:function(){return o.DemoBlock},DemoDescription:function(){return t.DemoDescription},lorem:function(){return a.lorem}});var a=n(11820),o=n(59821),t=n(21255)},11820:function(d,e,n){n.r(e),n.d(e,{lorem:function(){return o}});var a=n(9340),o=new a.LoremIpsum({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}})},43033:function(d,e,n){n.r(e)},17199:function(d,e,n){n.r(e)},13280:function(d,e,n){n.r(e),n.d(e,{texts:function(){return o}});var a=n(98034);const o=[{value:"\u533A\u9694\u5185\u5BB9\u7684\u5206\u5272\u7EBF\u3002",paraId:0,tocIndex:0},{value:"\u5BF9\u4E0D\u540C\u7AE0\u8282\u7684\u6587\u672C\u6BB5\u843D\u8FDB\u884C\u5206\u5272\u3002",paraId:1,tocIndex:1},{value:"\u5BF9\u884C\u5185\u6587\u5B57/\u94FE\u63A5\u8FDB\u884C\u5206\u5272\uFF0C\u4F8B\u5982\u8868\u683C\u7684\u64CD\u4F5C\u5217\u3002",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"contentPosition",paraId:2,tocIndex:4},{value:"\u5185\u5BB9\u4F4D\u7F6E\uFF0C\u4EC5\u5728 ",paraId:2,tocIndex:4},{value:"direction",paraId:2,tocIndex:4},{value:" \u4E3A ",paraId:2,tocIndex:4},{value:"horizontal",paraId:2,tocIndex:4},{value:" \u65F6\u6709\u6548",paraId:2,tocIndex:4},{value:"'center' | 'left' | 'right'",paraId:2,tocIndex:4},{value:"'center'",paraId:2,tocIndex:4},{value:"direction",paraId:2,tocIndex:4},{value:"\u6C34\u5E73\u8FD8\u662F\u5782\u76F4\u7C7B\u578B",paraId:2,tocIndex:4},{value:"'horizontal' | 'vertical'",paraId:2,tocIndex:4},{value:"'horizontal'",paraId:2,tocIndex:4}]},48079:function(d,e){e.Z=`


import { Divider } from 'an-mobile';
import { DemoBlock } from 'an-mobile/demos';
import React from 'react';


export default () => {
    return <>
        <DemoBlock title='\u57FA\u7840\u5206\u5272\u7EBF'>
        <Divider />
      </DemoBlock>

      <DemoBlock title='\u5E26\u5185\u5BB9\u7684\u5206\u5272\u7EBF'>
        <Divider>\u9ED8\u8BA4\u5185\u5BB9\u5728\u4E2D\u95F4</Divider>
        <Divider contentPosition='left'>\u5DE6\u4FA7\u5185\u5BB9</Divider>
        <Divider contentPosition='right'>\u53F3\u4FA7\u5185\u5BB9</Divider>
      </DemoBlock>

      <DemoBlock title='\u81EA\u5B9A\u4E49\u6837\u5F0F'>
        <Divider
          style={{
            color: '#1677ff',
            borderColor: '#1677ff',
            borderStyle: 'dashed',
          }}
        >
          \u81EA\u5B9A\u4E49\u6837\u5F0F
        </Divider>
      </DemoBlock>
      <DemoBlock title='\u7AD6\u5411\u5206\u5272\u7EBF'>
        <>
          Text
          <Divider direction='vertical' />
          <a href='#'>Link</a>
          <Divider direction='vertical' />
          <a href='#'>Link</a>
        </>
      </DemoBlock>
    </>
}`}}]);
