"use strict";(self.webpackChunkan_mobile=self.webpackChunkan_mobile||[]).push([[6013],{32379:function(o,e,n){var m;n.r(e),n.d(e,{demos:function(){return v}});var t=n(90228),r=n.n(t),l=n(87999),a=n.n(l),s=n(75271),O=n(48692),i=n(794),u=n(31431),_=n(43033),c=n(25554),p=n(21255),E=n(11820),D=n(59821),x=n(9340),f=n(17199),v={"src-auto-center-demo-demo1":{component:s.memo(s.lazy(function(){return Promise.all([n.e(229),n.e(9340),n.e(3569),n.e(9935),n.e(2433)]).then(n.bind(n,56376))})),asset:{type:"BLOCK",id:"src-auto-center-demo-demo1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(10324).Z},react:{type:"NPM",value:"18.3.1"},"../../demos.ts":{type:"FILE",value:n(85132).Z},"../index.ts":{type:"FILE",value:n(46210).Z},"./AutoCenter.less":{type:"FILE",value:n(24489).Z},"./AutoCenter.tsx":{type:"FILE",value:n(87896).Z},"./demo-description.tsx":{type:"FILE",value:n(86010).Z},"./utils/lorem.ts":{type:"FILE",value:n(73331).Z},"./demo-block.tsx":{type:"FILE",value:n(86780).Z},"lorem-ipsum":{type:"NPM",value:"2.0.8"},"./index.less":{type:"FILE",value:n(84157).Z}},entry:"index.tsx"},context:{"../../demos.ts":i,"../index.ts":u,"./AutoCenter.less":_,"./AutoCenter.tsx":c,"./demo-description.tsx":p,"./utils/lorem.ts":E,"./demo-block.tsx":D,"./index.less":f,react:m||(m=n.t(s,2)),"/home/runner/work/an-mobile/an-mobile/src/demos/index.ts":i,"/home/runner/work/an-mobile/an-mobile/src/AutoCenter/index.ts":u,"/home/runner/work/an-mobile/an-mobile/src/AutoCenter/AutoCenter.less":_,"/home/runner/work/an-mobile/an-mobile/src/AutoCenter/AutoCenter.tsx":c,"/home/runner/work/an-mobile/an-mobile/src/demos/demo-description/index.tsx":p,"/home/runner/work/an-mobile/an-mobile/src/demos/utils/lorem.ts":E,"/home/runner/work/an-mobile/an-mobile/src/demos/demo-block/index.tsx":D,"lorem-ipsum":x,"/home/runner/work/an-mobile/an-mobile/src/demos/demo-block/index.less":f},renderOpts:{compile:function(){var C=a()(r()().mark(function h(){var P,M=arguments;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,n.e(7483).then(n.bind(n,77483));case 2:return d.abrupt("return",(P=d.sent).default.apply(P,M));case 3:case"end":return d.stop()}},h)}));function A(){return C.apply(this,arguments)}return A}()}}}},25554:function(o,e,n){n.r(e);var m=n(75271),t=n(52676),r="adm-auto-center",l=function(s){return(0,t.jsx)("div",{className:r,children:(0,t.jsx)("div",{className:"".concat(r,"-content"),children:s.children})})};e.default=l},31431:function(o,e,n){n.r(e);var m=n(25554),t=n(43033);e.default=m.default},59821:function(o,e,n){n.r(e),n.d(e,{DemoBlock:function(){return l}});var m=n(75271),t=n(17199),r=n(52676),l=function(s){return(0,r.jsxs)("div",{className:"demoBlock",children:[(0,r.jsx)("div",{className:"title",children:s.title}),(0,r.jsx)("div",{className:"main",style:{padding:s.padding,background:s.background},children:s.children})]})};l.defaultProps={padding:"12px 12px",background:"var(--adm-color-background)"}},21255:function(o,e,n){n.r(e),n.d(e,{DemoDescription:function(){return r}});var m=n(75271),t=n(52676),r=function(a){return(0,t.jsx)("div",{className:"demoDescription",children:a.content||a.children})}},794:function(o,e,n){n.r(e),n.d(e,{DemoBlock:function(){return t.DemoBlock},DemoDescription:function(){return r.DemoDescription},lorem:function(){return m.lorem}});var m=n(11820),t=n(59821),r=n(21255)},11820:function(o,e,n){n.r(e),n.d(e,{lorem:function(){return t}});var m=n(9340),t=new m.LoremIpsum({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}})},43033:function(o,e,n){n.r(e)},17199:function(o,e,n){n.r(e)},10563:function(o,e,n){n.r(e),n.d(e,{texts:function(){return t}});var m=n(48692);const t=[{value:"\u6587\u672C\u81EA\u52A8\u5C45\u4E2D\u5BF9\u9F50\u3002",paraId:0,tocIndex:0},{value:"\u5185\u5BB9\u4E0D\u591F\u6574\u884C\u5BBD\u5EA6\u3001\u6216\u8FBE\u5230\u6EE1\u5BBD\u540E\u4F7F\u7528\u3002",paraId:1,tocIndex:1}]},24489:function(o,e){e.Z=`@class-prefix-auto-center: ~'adm-auto-center';

.@{class-prefix-auto-center} {
    display: flex;
    justify-content: center;
    &-content {
        flex: 0 1 auto;
    }
}`},87896:function(o,e){e.Z=`import React from "react";

export type AutoCenterProps = {
    children?: React.ReactNode;
}
const classPrefix = 'adm-auto-center';

const AutoCenter: React.FC<AutoCenterProps> = (props) => {
    return <div className={classPrefix}>
        <div className={\`\${classPrefix}-content\`}>
            {props.children}
        </div>
    </div>
}

export default AutoCenter;`},10324:function(o,e){e.Z=`import React from 'react'
import  AutoCenter   from '../index'
import { DemoBlock, lorem } from '../../demos'

const shortText = lorem.generateWords(3)
const longText = lorem.generateParagraphs(2)

export default () => {
  return (
    <>
      <DemoBlock title='\u5185\u5BB9\u4E0D\u591F\u6574\u884C\u5BBD\u5EA6\u65F6\u81EA\u52A8\u5C45\u4E2D'>
        <AutoCenter>{shortText}</AutoCenter>
      </DemoBlock>

      <DemoBlock title='\u5185\u5BB9\u8FBE\u5230\u6EE1\u5BBD\u540E\u4FDD\u6301\u6B63\u5E38\u7684\u5DE6\u5BF9\u9F50'>
        <AutoCenter>{longText}</AutoCenter>
      </DemoBlock>
    </>
  )
}
`},46210:function(o,e){e.Z=`import AutoCenter from "./AutoCenter";
import "./AutoCenter.less";
export type { AutoCenterProps } from "./AutoCenter";

export default AutoCenter;
`},84157:function(o,e){e.Z=`.demoBlock {
  margin-bottom: 12px;
  &:last-of-type {
    padding-bottom: 32px;
  }
}

.title {
  padding: 12px 12px 8px;
  color: #697b8c;
  font-size: 14px;
}

html[data-prefers-color-scheme='dark'] {
  .title {
    color: #959da6;
  }
}

.main {
  border-right: none;
  border-left: none;
}
`},86780:function(o,e){e.Z=`import React from 'react'
import type { FC, ReactNode } from 'react'
import './index.less'

interface Props {
  title: string
  padding?: string
  background?: string
  children?: ReactNode
}

export const DemoBlock: FC<Props> = props => {
  return (
    <div className={'demoBlock'}>
      <div className={'title'}>{props.title}</div>
      <div
        className={'main'}
        style={{
          padding: props.padding,
          background: props.background,
        }}
      >
        {props.children}
      </div>
    </div>
  )
}

DemoBlock.defaultProps = {
  padding: '12px 12px',
  background: 'var(--adm-color-background)',
}
`},86010:function(o,e){e.Z=`import React from 'react'
import type { FC, ReactNode } from 'react'
import  "./index.less"

export const DemoDescription: FC<{
  content?: ReactNode
  children?: ReactNode
}> = props => {
  return (
    <div className='demoDescription'>
      {props.content || props.children}
    </div>
  )
}
`},85132:function(o,e){e.Z=`export { lorem } from './utils/lorem'
export { DemoBlock } from './demo-block'
export { DemoDescription } from './demo-description'
// export { sleep } from '../utils/sleep'
// export { createPropsTable } from './create-props-table'
`},73331:function(o,e){e.Z=`import { LoremIpsum } from 'lorem-ipsum';

export const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
})
 
// console.log(lorem.generateWords(2))     //\u51E0\u4E2A\u5355\u8BCD
// console.log(lorem.generateSentences(5)) //\u51E0\u4E2A\u53E5\u5B50
// console.log(lorem.generateParagraphs(7)) //\u51E0\u4E2A\u6BB5\u843D`}}]);
