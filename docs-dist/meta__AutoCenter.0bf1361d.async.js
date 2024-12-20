"use strict";(self.webpackChunkan_mobile=self.webpackChunkan_mobile||[]).push([[6013],{32327:function(o,n,e){var m;e.r(n),e.d(n,{demos:function(){return v}});var t=e(90228),s=e.n(t),a=e(87999),l=e.n(a),r=e(75271),g=e(33930),u=e(92611),i=e(26992),_=e(7654),c=e(71591),p=e(81659),D=e(74252),E=e(41450),f=e(9340),x=e(99617),v={"src-auto-center-demo-demo1":{component:r.memo(r.lazy(function(){return Promise.all([e.e(3407),e.e(9340),e.e(9738),e.e(8809),e.e(2433)]).then(e.bind(e,82174))})),asset:{type:"BLOCK",id:"src-auto-center-demo-demo1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(29162).Z},react:{type:"NPM",value:"18.3.1"},"../../demos.ts":{type:"FILE",value:e(5787).Z},"../index.ts":{type:"FILE",value:e(67093).Z},"./AutoCenter.tsx":{type:"FILE",value:e(70214).Z},"./AutoCenter.less":{type:"FILE",value:e(25953).Z},"./demo-description.tsx":{type:"FILE",value:e(63917).Z},"./demo-block.tsx":{type:"FILE",value:e(86913).Z},"./utils/lorem.ts":{type:"FILE",value:e(68001).Z},"lorem-ipsum":{type:"NPM",value:"2.0.8"},"./index.less":{type:"FILE",value:e(74372).Z}},entry:"index.tsx"},context:{"../../demos.ts":u,"../index.ts":i,"./AutoCenter.tsx":_,"./AutoCenter.less":c,"./demo-description.tsx":p,"./demo-block.tsx":D,"./utils/lorem.ts":E,"./index.less":x,react:m||(m=e.t(r,2)),"/Users/xuguanjie/Desktop/an-mobile/src/demos/index.ts":u,"/Users/xuguanjie/Desktop/an-mobile/src/AutoCenter/index.ts":i,"/Users/xuguanjie/Desktop/an-mobile/src/AutoCenter/AutoCenter.tsx":_,"/Users/xuguanjie/Desktop/an-mobile/src/AutoCenter/AutoCenter.less":c,"/Users/xuguanjie/Desktop/an-mobile/src/demos/demo-description/index.tsx":p,"/Users/xuguanjie/Desktop/an-mobile/src/demos/demo-block/index.tsx":D,"/Users/xuguanjie/Desktop/an-mobile/src/demos/utils/lorem.ts":E,"lorem-ipsum":f,"/Users/xuguanjie/Desktop/an-mobile/src/demos/demo-description/index.less":x},renderOpts:{compile:function(){var C=l()(s()().mark(function M(){var P,O=arguments;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(3570).then(e.bind(e,73570));case 2:return d.abrupt("return",(P=d.sent).default.apply(P,O));case 3:case"end":return d.stop()}},M)}));function A(){return C.apply(this,arguments)}return A}()}}}},7654:function(o,n,e){e.r(n);var m=e(75271),t=e(52676),s="adm-auto-center",a=function(r){return(0,t.jsx)("div",{className:s,children:(0,t.jsx)("div",{className:"".concat(s,"-content"),children:r.children})})};n.default=a},26992:function(o,n,e){e.r(n);var m=e(7654),t=e(71591);n.default=m.default},74252:function(o,n,e){e.r(n),e.d(n,{DemoBlock:function(){return a}});var m=e(75271),t=e(98410),s=e(52676),a=function(r){return(0,s.jsxs)("div",{className:"demoBlock",children:[(0,s.jsx)("div",{className:"title",children:r.title}),(0,s.jsx)("div",{className:"main",style:{padding:r.padding,background:r.background},children:r.children})]})};a.defaultProps={padding:"12px 12px",background:"var(--adm-color-background)"}},81659:function(o,n,e){e.r(n),e.d(n,{DemoDescription:function(){return a}});var m=e(75271),t=e(99617),s=e(52676),a=function(r){return(0,s.jsx)("div",{className:"demoDescription",children:r.content||r.children})}},92611:function(o,n,e){e.r(n),e.d(n,{DemoBlock:function(){return t.DemoBlock},DemoDescription:function(){return s.DemoDescription},lorem:function(){return m.lorem}});var m=e(41450),t=e(74252),s=e(81659)},41450:function(o,n,e){e.r(n),e.d(n,{lorem:function(){return t}});var m=e(9340),t=new m.LoremIpsum({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}})},71591:function(o,n,e){e.r(n)},98410:function(o,n,e){e.r(n)},99617:function(o,n,e){e.r(n)},26218:function(o,n,e){e.r(n),e.d(n,{texts:function(){return t}});var m=e(33930);const t=[{value:"\u6587\u672C\u81EA\u52A8\u5C45\u4E2D\u5BF9\u9F50\u3002",paraId:0,tocIndex:0},{value:"\u5185\u5BB9\u4E0D\u591F\u6574\u884C\u5BBD\u5EA6\u3001\u6216\u8FBE\u5230\u6EE1\u5BBD\u540E\u4F7F\u7528\u3002",paraId:1,tocIndex:1}]},25953:function(o,n){n.Z=`@class-prefix-auto-center: ~'adm-auto-center';

.@{class-prefix-auto-center} {
    display: flex;
    justify-content: center;
    &-content {
        flex: 0 1 auto;
    }
}`},70214:function(o,n){n.Z=`import React from "react";

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

export default AutoCenter;`},29162:function(o,n){n.Z=`import React from 'react'
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
`},67093:function(o,n){n.Z=`import AutoCenter from "./AutoCenter";
import "./AutoCenter.less";
export type { AutoCenterProps } from "./AutoCenter";

export default AutoCenter;
`},86913:function(o,n){n.Z=`import React from 'react'
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
`},74372:function(o,n){n.Z=`.demoDescription {
    color: var(--adm-color-weak);
  }
  `},63917:function(o,n){n.Z=`import React from 'react'
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
`},5787:function(o,n){n.Z=`export { lorem } from './utils/lorem'
export { DemoBlock } from './demo-block'
export { DemoDescription } from './demo-description'
// export { sleep } from '../utils/sleep'
// export { createPropsTable } from './create-props-table'
`},68001:function(o,n){n.Z=`import { LoremIpsum } from 'lorem-ipsum';

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
