(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[2030],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,f=p["".concat(i,".").concat(g)]||p[g]||m[g]||s;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1332:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5386:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),a=n(8578);var s=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),o="tabItem_2kG2",i="tabItemActive_3NDg";var c=37,u=39;var m=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,m=e.values,p=e.groupId,g=e.className,f=s(),b=f.tabGroupChoices,h=f.setTabGroupChoices,d=(0,r.useState)(a),y=d[0],v=d[1],k=r.Children.toArray(e.children),L=[];if(null!=p){var C=b[p];null!=C&&C!==y&&m.some((function(e){return e.value===C}))&&v(C)}var N=function(e){var t=e.currentTarget,n=L.indexOf(t),r=m[n].value;v(r),null!=p&&(h(p,r),setTimeout((function(){var e,n,r,a,s,l,o,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,s=e.right,l=window,o=l.innerHeight,c=l.innerWidth,n>=0&&s<=c&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},M=function(e){var t,n;switch(e.keyCode){case u:var r=L.indexOf(e.target)+1;n=L[r]||L[0];break;case c:var a=L.indexOf(e.target)-1;n=L[a]||L[L.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},g)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return L.push(e)},onKeyDown:M,onFocus:N,onClick:N},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},8578:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},1989:function(e,t,n){"use strict";var r=n(7294),a=n(2263);t.Z=function(e){var t=e.className,n=e.py,s=e.scala,l=e.sourceLink,o=(0,a.Z)().siteConfig.customFields.version,i="https://mmlspark.blob.core.windows.net/docs/"+o+"/pyspark/"+n,c="https://mmlspark.blob.core.windows.net/docs/"+o+"/scala/"+s;return r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement("strong",null,"Python API: "),r.createElement("a",{href:i},t)),r.createElement("td",null,r.createElement("strong",null,"Scala API: "),r.createElement("a",{href:c},t)),r.createElement("td",null,r.createElement("strong",null,"Source: "),r.createElement("a",{href:l},t)))))}},3366:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return g},default:function(){return b}});var r=n(2122),a=n(9756),s=(n(7294),n(3905)),l=n(5386),o=n(1332),i=n(1989),c=["components"],u={},m=void 0,p={unversionedId:"documentation/estimators/_LightGBM",id:"version-0.9.1/documentation/estimators/_LightGBM",isDocsHomePage:!1,title:"_LightGBM",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.1/documentation/estimators/_LightGBM.md",sourceDirName:"documentation/estimators",slug:"/documentation/estimators/_LightGBM",permalink:"/SynapseML/docs/documentation/estimators/_LightGBM",version:"0.9.1",frontMatter:{}},g=[{value:"LightGBMClassifier",id:"lightgbmclassifier",children:[]},{value:"LightGBMRanker",id:"lightgbmranker",children:[]},{value:"LightGBMRegressor",id:"lightgbmregressor",children:[]}],f={toc:g};function b(e){var t=e.components,n=(0,a.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"lightgbmclassifier"},"LightGBMClassifier"),(0,s.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import *\n\nlgbmClassifier = (LightGBMClassifier()\n      .setFeaturesCol("features")\n      .setRawPredictionCol("rawPrediction")\n      .setDefaultListenPort(12402)\n      .setNumLeaves(5)\n      .setNumIterations(10)\n      .setObjective("binary")\n      .setLabelCol("labels")\n      .setLeafPredictionCol("leafPrediction")\n      .setFeaturesShapCol("featuresShap"))\n'))),(0,s.kt)(o.Z,{value:"scala",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.lightgbm._\n\nval lgbmClassifier = (new LightGBMClassifier()\n      .setFeaturesCol("features")\n      .setRawPredictionCol("rawPrediction")\n      .setDefaultListenPort(12402)\n      .setNumLeaves(5)\n      .setNumIterations(10)\n      .setObjective("binary")\n      .setLabelCol("labels")\n      .setLeafPredictionCol("leafPrediction")\n      .setFeaturesShapCol("featuresShap"))\n')))),(0,s.kt)(i.Z,{className:"LightGBMClassifier",py:"synapse.ml.lightgbm.html#module-synapse.ml.lightgbm.LightGBMClassifier",scala:"com/microsoft/azure/synapse/ml/lightgbm/LightGBMClassifier.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/lightgbm/src/main/scala/com/microsoft/azure/synapse/ml/lightgbm/LightGBMClassifier.scala",mdxType:"DocTable"}),(0,s.kt)("h2",{id:"lightgbmranker"},"LightGBMRanker"),(0,s.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import *\n\nlgbmRanker = (LightGBMRanker()\n      .setLabelCol("labels")\n      .setFeaturesCol("features")\n      .setGroupCol("query")\n      .setDefaultListenPort(12402)\n      .setRepartitionByGroupingColumn(False)\n      .setNumLeaves(5)\n      .setNumIterations(10))\n'))),(0,s.kt)(o.Z,{value:"scala",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.lightgbm._\n\nval lgbmRanker = (new LightGBMRanker()\n      .setLabelCol("labels")\n      .setFeaturesCol("features")\n      .setGroupCol("query")\n      .setDefaultListenPort(12402)\n      .setRepartitionByGroupingColumn(false)\n      .setNumLeaves(5)\n      .setNumIterations(10))\n')))),(0,s.kt)(i.Z,{className:"LightGBMRanker",py:"synapse.ml.lightgbm.html#module-synapse.ml.lightgbm.LightGBMRanker",scala:"com/microsoft/azure/synapse/ml/lightgbm/LightGBMRanker.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/lightgbm/src/main/scala/com/microsoft/azure/synapse/ml/lightgbm/LightGBMRanker.scala",mdxType:"DocTable"}),(0,s.kt)("h2",{id:"lightgbmregressor"},"LightGBMRegressor"),(0,s.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import *\n\nlgbmRegressor = (LightGBMRegressor()\n      .setLabelCol("labels")\n      .setFeaturesCol("features")\n      .setDefaultListenPort(12402)\n      .setNumLeaves(5)\n      .setNumIterations(10))\n'))),(0,s.kt)(o.Z,{value:"scala",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.lightgbm._\n\nval lgbmRegressor = (new LightGBMRegressor()\n      .setLabelCol("labels")\n      .setFeaturesCol("features")\n      .setDefaultListenPort(12402)\n      .setNumLeaves(5)\n      .setNumIterations(10))\n')))),(0,s.kt)(i.Z,{className:"LightGBMRegressor",py:"synapse.ml.lightgbm.html#module-synapse.ml.lightgbm.LightGBMRegressor",scala:"com/microsoft/azure/synapse/ml/lightgbm/LightGBMRegressor.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/lightgbm/src/main/scala/com/microsoft/azure/synapse/ml/lightgbm/LightGBMRegressor.scala",mdxType:"DocTable"}))}b.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);