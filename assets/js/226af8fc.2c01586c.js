(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[7363],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),f=r,b=m["".concat(i,".").concat(f)]||m[f]||p[f]||o;return a?n.createElement(b,s(s({ref:t},u),{},{components:a})):n.createElement(b,s({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1332:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},5386:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(7294),r=a(8578);var o=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(6010),l="tabItem_2kG2",i="tabItemActive_3NDg";var c=37,u=39;var p=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,p=e.values,m=e.groupId,f=e.className,b=o(),v=b.tabGroupChoices,y=b.setTabGroupChoices,d=(0,n.useState)(r),w=d[0],h=d[1],g=n.Children.toArray(e.children),k=[];if(null!=m){var V=v[m];null!=V&&V!==w&&p.some((function(e){return e.value===V}))&&h(V)}var T=function(e){var t=e.currentTarget,a=k.indexOf(t),n=p[a].value;h(n),null!=m&&(y(m,n),setTimeout((function(){var e,a,n,r,o,s,l,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,s=window,l=s.innerHeight,c=s.innerWidth,a>=0&&o<=c&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case u:var n=k.indexOf(e.target)+1;a=k[n]||k[0];break;case c:var r=k.indexOf(e.target)-1;a=k[r]||k[k.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},f)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,s.Z)("tabs__item",l,{"tabs__item--active":w===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:C,onFocus:T,onClick:T},a)}))),t?(0,n.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},8578:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},1989:function(e,t,a){"use strict";var n=a(7294),r=a(2263);t.Z=function(e){var t=e.className,a=e.py,o=e.scala,s=e.sourceLink,l=(0,r.Z)().siteConfig.customFields.version,i="https://mmlspark.blob.core.windows.net/docs/"+l+"/pyspark/"+a,c="https://mmlspark.blob.core.windows.net/docs/"+l+"/scala/"+o;return n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,n.createElement("strong",null,"Python API: "),n.createElement("a",{href:i},t)),n.createElement("td",null,n.createElement("strong",null,"Scala API: "),n.createElement("a",{href:c},t)),n.createElement("td",null,n.createElement("strong",null,"Source: "),n.createElement("a",{href:s},t)))))}},8478:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return f},default:function(){return v}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),s=a(5386),l=a(1332),i=a(1989),c=["components"],u={},p=void 0,m={unversionedId:"documentation/transformers/_VW",id:"version-0.9.1/documentation/transformers/_VW",isDocsHomePage:!1,title:"_VW",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.1/documentation/transformers/_VW.md",sourceDirName:"documentation/transformers",slug:"/documentation/transformers/_VW",permalink:"/SynapseML/docs/documentation/transformers/_VW",version:"0.9.1",frontMatter:{}},f=[{value:"VectorZipper",id:"vectorzipper",children:[]},{value:"VowpalWabbitClassifier",id:"vowpalwabbitclassifier",children:[]},{value:"VowpalWabbitFeaturizer",id:"vowpalwabbitfeaturizer",children:[]},{value:"VowpalWabbitInteractions",id:"vowpalwabbitinteractions",children:[]}],b={toc:f};function v(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"vectorzipper"},"VectorZipper"),(0,o.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import *\n\ndf = spark.createDataFrame([\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f")\n], ["action1", "action2"])\n\nactionOneFeaturizer = (VowpalWabbitFeaturizer()\n    .setInputCols(["action1"])\n    .setOutputCol("sequence_one"))\n\nactionTwoFeaturizer = (VowpalWabbitFeaturizer()\n    .setInputCols(["action2"])\n    .setOutputCol("sequence_two"))\n\nseqDF = actionTwoFeaturizer.transform(actionOneFeaturizer.transform(df))\n\nvectorZipper = (VectorZipper()\n    .setInputCols(["sequence_one", "sequence_two"])\n    .setOutputCol("out"))\n\ndisplay(vectorZipper.transform(seqDF))\n'))),(0,o.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.vw._\n\nval df = (Seq(\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f")\n    ).toDF("action1", "action2"))\n\nval actionOneFeaturizer = (new VowpalWabbitFeaturizer()\n    .setInputCols(Array("action1"))\n    .setOutputCol("sequence_one"))\n\nval actionTwoFeaturizer = (new VowpalWabbitFeaturizer()\n    .setInputCols(Array("action2"))\n    .setOutputCol("sequence_two"))\n\nval seqDF = actionTwoFeaturizer.transform(actionOneFeaturizer.transform(df))\n\nval vectorZipper = (new VectorZipper()\n    .setInputCols(Array("sequence_one", "sequence_two"))\n    .setOutputCol("out"))\n\ndisplay(vectorZipper.transform(seqDF))\n')))),(0,o.kt)(i.Z,{className:"VectorZipper",py:"synapse.ml.vw.html#module-synapse.ml.vw.VectorZipper",scala:"com/microsoft/azure/synapse/ml/vw/VectorZipper.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/vw/src/main/scala/com/microsoft/azure/synapse/ml/vw/VectorZipper.scala",mdxType:"DocTable"}),(0,o.kt)("h2",{id:"vowpalwabbitclassifier"},"VowpalWabbitClassifier"),(0,o.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.vw import *\n\nvw = (VowpalWabbitClassifier()\n      .setNumBits(10)\n      .setLearningRate(3.1)\n      .setPowerT(0)\n      .setLabelConversion(False))\n"))),(0,o.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import com.microsoft.azure.synapse.ml.vw._\n\nval vw = (new VowpalWabbitClassifier()\n      .setNumBits(10)\n      .setLearningRate(3.1)\n      .setPowerT(0)\n      .setLabelConversion(false))\n")))),(0,o.kt)(i.Z,{className:"VowpalWabbitClassifier",py:"synapse.ml.vw.html#module-synapse.ml.vw.VowpalWabbitClassifier",scala:"com/microsoft/azure/synapse/ml/vw/VowpalWabbitClassifier.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/vw/src/main/scala/com/microsoft/azure/synapse/ml/vw/VowpalWabbitClassifier.scala",mdxType:"DocTable"}),(0,o.kt)("h2",{id:"vowpalwabbitfeaturizer"},"VowpalWabbitFeaturizer"),(0,o.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import *\n\nfeaturizer = (VowpalWabbitFeaturizer()\n      .setStringSplitInputCols(["in"])\n      .setPreserveOrderNumBits(2)\n      .setNumBits(18)\n      .setPrefixStringsWithColumnName(False)\n      .setOutputCol("features"))\n'))),(0,o.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.vw._\n\nval featurizer = (new VowpalWabbitFeaturizer()\n      .setStringSplitInputCols(Array("in"))\n      .setPreserveOrderNumBits(2)\n      .setNumBits(18)\n      .setPrefixStringsWithColumnName(false)\n      .setOutputCol("features"))\n')))),(0,o.kt)(i.Z,{className:"VowpalWabbitFeaturizer",py:"synapse.ml.vw.html#module-synapse.ml.vw.VowpalWabbitFeaturizer",scala:"com/microsoft/azure/synapse/ml/vw/VowpalWabbitFeaturizer.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/vw/src/main/scala/com/microsoft/azure/synapse/ml/vw/VowpalWabbitFeaturizer.scala",mdxType:"DocTable"}),(0,o.kt)("h2",{id:"vowpalwabbitinteractions"},"VowpalWabbitInteractions"),(0,o.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import *\n\ninteractions = (VowpalWabbitInteractions()\n    .setInputCols(["v1"])\n    .setOutputCol("out"))\n'))),(0,o.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.vw._\nimport org.apache.spark.ml.linalg._\n\ncase class Data(v1: Vector, v2: Vector, v3: Vector)\n\nval df = spark.createDataFrame(Seq(Data(\n  Vectors.dense(Array(1.0, 2.0, 3.0)),\n  Vectors.sparse(8, Array(5), Array(4.0)),\n  Vectors.sparse(11, Array(8, 9), Array(7.0, 8.0))\n)))\n\nval interactions = (new VowpalWabbitInteractions()\n    .setInputCols(Array("v1"))\n    .setOutputCol("out"))\n\ndisplay(interactions.transform(df))\n')))),(0,o.kt)(i.Z,{className:"VowpalWabbitInteractions",py:"mmlspark.vw.html#module-mmlspark.vw.VowpalWabbitInteractions",scala:"com/microsoft/azure/synapse/ml/vw/VowpalWabbitInteractions.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/vw/src/main/scala/com/microsoft/azure/synapse/ml/vw/VowpalWabbitInteractions.scala",mdxType:"DocTable"}))}v.isMDXComponent=!0},6010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);