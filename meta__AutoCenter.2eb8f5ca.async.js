"use strict";(self.webpackChunkan_mobile=self.webpackChunkan_mobile||[]).push([[6013],{17307:function(o,e,n){var s;n.r(e),n.d(e,{demos:function(){return C}});var t=n(90228),r=n.n(t),l=n(87999),d=n.n(l),m=n(75271),h=n(35936),_=n(99653),u=n(70878),i=n(60632),c=n(10262),E=n(98257),p=n(55844),D=n(63311),v=n(9340),P=n(58126),C={"src-auto-center-demo-demo1":{component:m.memo(m.lazy(function(){return Promise.all([n.e(6905),n.e(9340),n.e(9738),n.e(8937),n.e(2433)]).then(n.bind(n,59865))})),asset:{type:"BLOCK",id:"src-auto-center-demo-demo1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(95270).Z},react:{type:"NPM",value:"18.3.1"},"../../demos.ts":{type:"FILE",value:n(54520).Z},"../index.ts":{type:"FILE",value:n(23835).Z},"./AutoCenter.less":{type:"FILE",value:n(86934).Z},"./AutoCenter.tsx":{type:"FILE",value:n(74405).Z},"./utils/lorem.ts":{type:"FILE",value:n(71584).Z},"./demo-block.tsx":{type:"FILE",value:n(17770).Z},"./demo-description.tsx":{type:"FILE",value:n(63883).Z},"lorem-ipsum":{type:"NPM",value:"2.0.8"},"./index.less":{type:"FILE",value:n(54251).Z}},entry:"index.tsx"},context:{"../../demos.ts":_,"../index.ts":u,"./AutoCenter.less":i,"./AutoCenter.tsx":c,"./utils/lorem.ts":E,"./demo-block.tsx":p,"./demo-description.tsx":D,"./index.less":P,react:s||(s=n.t(m,2)),"/home/runner/work/an-mobile/an-mobile/src/demos/index.ts":_,"/home/runner/work/an-mobile/an-mobile/src/AutoCenter/index.ts":u,"/home/runner/work/an-mobile/an-mobile/src/AutoCenter/AutoCenter.less":i,"/home/runner/work/an-mobile/an-mobile/src/AutoCenter/AutoCenter.tsx":c,"/home/runner/work/an-mobile/an-mobile/src/demos/utils/lorem.ts":E,"/home/runner/work/an-mobile/an-mobile/src/demos/demo-block/index.tsx":p,"/home/runner/work/an-mobile/an-mobile/src/demos/demo-description/index.tsx":D,"lorem-ipsum":v,"/home/runner/work/an-mobile/an-mobile/src/demos/demo-description/index.less":P},renderOpts:{compile:function(){var x=d()(r()().mark(function M(){var f,O=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(753).then(n.bind(n,10753));case 2:return a.abrupt("return",(f=a.sent).default.apply(f,O));case 3:case"end":return a.stop()}},M)}));function A(){return x.apply(this,arguments)}return A}()}}}},10262:function(o,e,n){n.r(e);var s=n(75271),t=n(52676),r="adm-auto-center",l=function(m){return(0,t.jsx)("div",{className:r,children:(0,t.jsx)("div",{className:"".concat(r,"-content"),children:m.children})})};e.default=l},70878:function(o,e,n){n.r(e);var s=n(10262),t=n(60632);e.default=s.default},55844:function(o,e,n){n.r(e),n.d(e,{DemoBlock:function(){return l}});var s=n(75271),t=n(50231),r=n(52676),l=function(m){return(0,r.jsxs)("div",{className:"demoBlock",children:[(0,r.jsx)("div",{className:"title",children:m.title}),(0,r.jsx)("div",{className:"main",style:{padding:m.padding,background:m.background},children:m.children})]})};l.defaultProps={padding:"12px 12px",background:"var(--adm-color-background)"}},63311:function(o,e,n){n.r(e),n.d(e,{DemoDescription:function(){return l}});var s=n(75271),t=n(58126),r=n(52676),l=function(m){return(0,r.jsx)("div",{className:"demoDescription",children:m.content||m.children})}},99653:function(o,e,n){n.r(e),n.d(e,{DemoBlock:function(){return t.DemoBlock},DemoDescription:function(){return r.DemoDescription},lorem:function(){return s.lorem}});var s=n(98257),t=n(55844),r=n(63311)},98257:function(o,e,n){n.r(e),n.d(e,{lorem:function(){return t}});var s=n(9340),t=new s.LoremIpsum({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}})},60632:function(o,e,n){n.r(e)},50231:function(o,e,n){n.r(e)},58126:function(o,e,n){n.r(e)},59975:function(o,e,n){n.r(e),n.d(e,{texts:function(){return t}});var s=n(35936);const t=[{value:"\u6587\u672C\u81EA\u52A8\u5C45\u4E2D\u5BF9\u9F50\u3002",paraId:0,tocIndex:0},{value:"\u5185\u5BB9\u4E0D\u591F\u6574\u884C\u5BBD\u5EA6\u3001\u6216\u8FBE\u5230\u6EE1\u5BBD\u540E\u4F7F\u7528\u3002",paraId:1,tocIndex:1}]},86934:function(o,e){e.Z=`@class-prefix-auto-center: ~'adm-auto-center';

.@{class-prefix-auto-center} {
    display: flex;
    justify-content: center;
    &-content {
        flex: 0 1 auto;
    }
}`},74405:function(o,e){e.Z=`import React from "react";

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

export default AutoCenter;`},95270:function(o,e){e.Z=`import React from 'react'
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
`},23835:function(o,e){e.Z=`import AutoCenter from "./AutoCenter";
import "./AutoCenter.less";
export type { AutoCenterProps } from "./AutoCenter";

export default AutoCenter;
`},17770:function(o,e){e.Z=`import React from 'react'
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
`},54251:function(o,e){e.Z=`.demoDescription {
    color: var(--adm-color-weak);
  }
  `},63883:function(o,e){e.Z=`import React from 'react'
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
`},54520:function(o,e){e.Z=`export { lorem } from './utils/lorem'
export { DemoBlock } from './demo-block'
export { DemoDescription } from './demo-description'
// export { sleep } from '../utils/sleep'
// export { createPropsTable } from './create-props-table'
`},71584:function(o,e){e.Z=`import { LoremIpsum } from 'lorem-ipsum';

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
