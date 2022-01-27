"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[8903],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return b}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),b=r,d=m["".concat(i,".").concat(b)]||m[b]||p[b]||o;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(3117),r=a(7294),o=a(2389),l=a(9443);var s=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(6681),u=a(6010),c="tabItem_1uMI";function p(e){var t,a,o,l=e.lazy,p=e.block,m=e.defaultValue,b=e.values,d=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=b?b:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,i.lx)(y,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===m?m:null!=(t=null!=m?m:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==h&&!y.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=s(),k=g.tabGroupChoices,x=g.setTabGroupChoices,C=(0,r.useState)(h),E=C[0],T=C[1],V=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var _=k[d];null!=_&&_!==E&&y.some((function(e){return e.value===_}))&&T(_)}var N=function(e){var t=e.currentTarget,a=V.indexOf(t),n=y[a].value;n!==E&&(O(t),T(n),null!=d&&x(d,n))},W=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=V.indexOf(e.currentTarget)+1;a=V[n]||V[0];break;case"ArrowLeft":var r=V.indexOf(e.currentTarget)-1;a=V[r]||V[V.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},f)},y.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return V.push(e)},onKeyDown:W,onFocus:N,onClick:N},o,{className:(0,u.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,o.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},1989:function(e,t,a){var n=a(7294),r=a(2263);t.Z=function(e){var t=e.className,a=e.py,o=e.scala,l=e.sourceLink,s=(0,r.Z)().siteConfig.customFields.version,i="https://mmlspark.blob.core.windows.net/docs/"+s+"/pyspark/"+a,u="https://mmlspark.blob.core.windows.net/docs/"+s+"/scala/"+o;return n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,n.createElement("strong",null,"Python API: "),n.createElement("a",{href:i},t)),n.createElement("td",null,n.createElement("strong",null,"Scala API: "),n.createElement("a",{href:u},t)),n.createElement("td",null,n.createElement("strong",null,"Source: "),n.createElement("a",{href:l},t)))))}},3562:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return d},metadata:function(){return v},toc:function(){return y}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),l=a(6396),s=a(8215),i=a(1989),u=["components"],c=[{value:"VowpalWabbitRegressor",id:"vowpalwabbitregressor",children:[],level:2},{value:"VowpalWabbitContextualBandit",id:"vowpalwabbitcontextualbandit",children:[],level:2}],p={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"vowpalwabbitregressor"},"VowpalWabbitRegressor"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import *\n\nvw = (VowpalWabbitRegressor()\n      .setLabelCol("Y1")\n      .setFeaturesCol("features")\n      .setPredictionCol("pred"))\n\nvwRegressor = (VowpalWabbitRegressor()\n      .setNumPasses(20)\n      .setArgs("--holdout_off --loss_function quantile -q :: -l 0.1"))\n'))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.vw._\n\nval vw = (new VowpalWabbitRegressor()\n      .setLabelCol("Y1")\n      .setFeaturesCol("features")\n      .setPredictionCol("pred"))\n\nval vwRegressor = (new VowpalWabbitRegressor()\n      .setNumPasses(20)\n      .setArgs("--holdout_off --loss_function quantile -q :: -l 0.1"))\n\n')))),(0,o.kt)(i.Z,{className:"VowpalWabbitRegressor",py:"synapse.ml.vw.html#module-synapse.ml.vw.VowpalWabbitRegressor",scala:"com/microsoft/azure/synapse/ml/vw/VowpalWabbitRegressor.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/vw/src/main/scala/com/microsoft/azure/synapse/ml/vw/VowpalWabbitRegressor.scala",mdxType:"DocTable"}),(0,o.kt)("h2",{id:"vowpalwabbitcontextualbandit"},"VowpalWabbitContextualBandit"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import *\n\ncb = (VowpalWabbitContextualBandit()\n      .setArgs("--cb_explore_adf --epsilon 0.2 --quiet")\n      .setLabelCol("cost")\n      .setProbabilityCol("prob")\n      .setChosenActionCol("chosen_action")\n      .setSharedCol("shared_features")\n      .setFeaturesCol("action_features")\n      .setUseBarrierExecutionMode(False))\n'))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.vw._\n\nval cb = (new VowpalWabbitContextualBandit()\n      .setArgs("--cb_explore_adf --epsilon 0.2 --quiet")\n      .setLabelCol("cost")\n      .setProbabilityCol("prob")\n      .setChosenActionCol("chosen_action")\n      .setSharedCol("shared_features")\n      .setFeaturesCol("action_features")\n      .setUseBarrierExecutionMode(false))\n\n')))),(0,o.kt)(i.Z,{className:"VowpalWabbitContextualBandit",py:"synapse.ml.vw.html#module-synapse.ml.vw.VowpalWabbitContextualBandit",scala:"com/microsoft/azure/synapse/ml/vw/VowpalWabbitContextualBandit.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/vw/src/main/scala/com/microsoft/azure/synapse/ml/vw/VowpalWabbitContextualBandit.scala",mdxType:"DocTable"}))}m.isMDXComponent=!0;var b=["components"],d={title:"Estimators - Vowpal Wabbit",sidebar_label:"Vowpal Wabbit",hide_title:!0},f="Vowpal Wabbit",v={unversionedId:"documentation/estimators/estimators_vw",id:"documentation/estimators/estimators_vw",title:"Estimators - Vowpal Wabbit",description:"export const toc = [...VWTOC]",source:"@site/docs/documentation/estimators/estimators_vw.md",sourceDirName:"documentation/estimators",slug:"/documentation/estimators/estimators_vw",permalink:"/SynapseML/docs/next/documentation/estimators/estimators_vw",tags:[],version:"current",frontMatter:{title:"Estimators - Vowpal Wabbit",sidebar_label:"Vowpal Wabbit",hide_title:!0},sidebar:"docs",previous:{title:"LightGBM",permalink:"/SynapseML/docs/next/documentation/estimators/estimators_lightgbm"},next:{title:"Build System Commands",permalink:"/SynapseML/docs/next/reference/developer-readme"}},y=[].concat(c),w={toc:y};function h(e){var t=e.components,a=(0,r.Z)(e,b);return(0,o.kt)("wrapper",(0,n.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vowpal-wabbit"},"Vowpal Wabbit"),(0,o.kt)(m,{mdxType:"VW"}))}h.isMDXComponent=!0}}]);