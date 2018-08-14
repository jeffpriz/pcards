define(["TFS/WorkItemTracking/RestClient","TFS/WorkItemTracking/Contracts","q"],function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";t.__esModule=!0,t.extend=s,t.indexOf=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!a.test(e))return e;return e.replace(i,o)},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=s({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},i=/[&<>"'`=]/g,a=/[&<>"'`=]/;function o(e){return r[e]}function s(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var l=Object.prototype.toString;t.toString=l;var u=function(e){return"function"==typeof e};u(/x/)&&(t.isFunction=u=function(e){return"function"==typeof e&&"[object Function]"===l.call(e)}),t.isFunction=u;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===l.call(e)};t.isArray=c},function(e,t,n){"use strict";t.__esModule=!0;var r=["description","fileName","lineNumber","message","name","number","stack"];function i(e,t){var n=t&&t.loc,a=void 0,o=void 0;n&&(e+=" - "+(a=n.start.line)+":"+(o=n.start.column));for(var s=Error.prototype.constructor.call(this,e),l=0;l<r.length;l++)this[r[l]]=s[r[l]];Error.captureStackTrace&&Error.captureStackTrace(this,i);try{n&&(this.lineNumber=a,Object.defineProperty?Object.defineProperty(this,"column",{value:o,enumerable:!0}):this.column=o)}catch(e){}}i.prototype=new Error,t.default=i,e.exports=t.default},function(e,t,n){e.exports=n(9).default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=u;var i=n(0),a=r(n(1)),o=n(10),s=n(18),l=r(n(20));t.VERSION="4.0.11";t.COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};function u(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},o.registerDefaultHelpers(this),s.registerDefaultDecorators(this)}u.prototype={constructor:u,logger:l.default,log:l.default.log,registerHelper:function(e,t){if("[object Object]"===i.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple helpers");i.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===i.toString.call(e))i.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===i.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple decorators");i.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var c=l.default.log;t.log=c,t.createFrame=i.createFrame,t.logger=l.default},function(e,t,n){var r,i;r=[n,t,n(5),n(6),n(7)],void 0===(i=function(e,t,r,i,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),s=n(25),l=VSS.getExtensionContext(),u=(VSS.getWebContext(),r.getClient()),c=[{name:"Assigned To",referenceName:"System.AssignedTo"},{name:"State",referenceName:"System.State"},{name:"Created Date",referenceName:"System.CreatedDate"},{name:"Description",referenceName:"System.Description"},{name:"Acceptance Criteria",referenceName:"Microsoft.VSTS.Common.AcceptanceCriteria"},{name:"History",referenceName:"System.History"}];String.prototype.sanitize=function(){return this.replace(/\s/g,"-").replace(/[^a-z0-9\-]/gi,"")},String.prototype.htmlize=function(){return this.replace(/<\/*(step|param|desc|comp)(.*?)>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,"&")};var d={getMenuItems:function(e){var t="Pretty Card";return e.workItemIds&&e.workItemIds.length>1&&(t="Pretty Cards"),[{action:function(e){return function(e){return u.getWorkItems(e,void 0,void 0,i.WorkItemExpand.Fields)}(e.workItemIds||e.ids||[e.workItemId||e.id]).then(function(e){return function(e){return e.map(function(e){return a.all([function(e){return VSS.getService(VSS.ServiceIds.ExtensionData).then(function(t){return t.getValue("pcards-"+e.fields["System.WorkItemType"].sanitize(),{scopeType:"user",defaultValue:c})})}(e),function(e){return u.getComments(e.id)}(e),u.getFields()]).then(function(e){return e}).spread(function(t,n,r){var i={};return"User Story"===e.fields["System.WorkItemType"]&&(i={type:e.fields["System.WorkItemType"],title:e.fields["System.Title"],description:e.fields["System.Description"],acceptance_criteria:e.fields["Microsoft.VSTS.Common.AcceptanceCriteria"],id:e.fields["System.Id"]}),"Bug"===e.fields["System.WorkItemType"]&&(i={type:e.fields["System.WorkItemType"],title:e.fields["System.Title"],repro_steps:e.fields["Microsoft.VSTS.TCM.ReproSteps"],system_info:e.fields["Microsoft.VSTS.TCM.SystemInfo"],id:e.fields["System.Id"]}),i})})}(e)}).then(function(e){return a.all(e)}).then(function(e){var t=document.createElement("div");t.setAttribute("class","container border"),e.forEach(function(e){var n,r;"Bug"===e.type&&(n=s({number:e.id,title:e.title,repro_steps:e.repro_steps,system_info:e.system_info})),"User Story"===e.type&&(r=o({number:e.id,title:e.title,description:e.description,acceptance_criteria:e.acceptance_criteria})),"Bug"===e.type&&(t.innerHTML+=n),"User Story"===e.type&&(t.innerHTML+=r)}),document.body.appendChild(t),setTimeout(function(){window.focus(),document.execCommand("print",!1,null)||window.print(),t.parentElement.removeChild(t)},1e3)})},icon:"static/img/print14.png",text:t,title:t}]}};VSS.register(l.publisherId+"."+l.extensionId+".print-work-item",d)}.apply(t,r))||(e.exports=i)},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){var r=n(2);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,i){var a,o,s=null!=t?t:e.nullContext||{},l=n.helperMissing,u=e.escapeExpression;return'<div class="container border-blue">\n  <div class="title-and-estimate-container">\n    <div class="title-container">\n      <div class="title-text">\n        <strong>Title:&nbsp;</strong>'+u("function"==typeof(o=null!=(o=n.title||(null!=t?t.title:t))?o:l)?o.call(s,{name:"title",hash:{},data:i}):o)+'\n      </div>\n    </div>\n    <div class="estimate-container border-blue"></div>\n  </div>\n  <div class="userstory-and-discipline-container">\n    <div class="user-story"> \n      <strong>Description:</strong><br/>\n      '+(null!=(a="function"==typeof(o=null!=(o=n.description||(null!=t?t.description:t))?o:l)?o.call(s,{name:"description",hash:{},data:i}):o)?a:"")+'\n     </div>\n    <div class="discipline-container">\n      <div class="discipline">\n        <div class="description">Dev</div>\n        <div class="box border-blue"></div>\n      </div>\n      <div class="discipline">\n        <div class="description">UX</div>\n        <div class="box border-blue"></div>\n      </div>\n    </div>\n  </div>\n  <div class="po-vsts-container">\n    <div class="po">\n      <strong>Product Owner:</strong>\n    </div>\n    <div class="vsts-number">\n      <strong>'+u("function"==typeof(o=null!=(o=n.number||(null!=t?t.number:t))?o:l)?o.call(s,{name:"number",hash:{},data:i}):o)+'</strong> \n    </div>\n  </div>\n  \n  <hr/>\n  \n  <div class="acceptance-criteria-container">\n    <div class="acceptance-criteria">\n      <strong>Acceptance Criteria:</strong><br/>\n        '+(null!=(a="function"==typeof(o=null!=(o=n.acceptance_criteria||(null!=t?t.acceptance_criteria:t))?o:l)?o.call(s,{name:"acceptance_criteria",hash:{},data:i}):o)?a:"")+"\n    </div>\n  </div>\n</div>"},useData:!0})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.__esModule=!0;var a=i(n(3)),o=r(n(21)),s=r(n(1)),l=i(n(0)),u=i(n(22)),c=r(n(23));function d(){var e=new a.HandlebarsEnvironment;return l.extend(e,a),e.SafeString=o.default,e.Exception=s.default,e.Utils=l,e.escapeExpression=l.escapeExpression,e.VM=u,e.template=function(t){return u.template(t,e)},e}var f=d();f.create=d,c.default(f),f.default=f,t.default=f,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){i.default(e),a.default(e),o.default(e),s.default(e),l.default(e),u.default(e),c.default(e)};var i=r(n(11)),a=r(n(12)),o=r(n(13)),s=r(n(14)),l=r(n(15)),u=r(n(16)),c=r(n(17))},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,n){var i=n.inverse,a=n.fn;if(!0===t)return a(this);if(!1===t||null==t)return i(this);if(r.isArray(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):i(this);if(n.data&&n.ids){var o=r.createFrame(n.data);o.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:o}}return a(t,n)})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(n(1));t.default=function(e){e.registerHelper("each",function(e,t){if(!t)throw new i.default("Must pass iterator to #each");var n=t.fn,a=t.inverse,o=0,s="",l=void 0,u=void 0;function c(t,i,a){l&&(l.key=t,l.index=i,l.first=0===i,l.last=!!a,u&&(l.contextPath=u+t)),s+=n(e[t],{data:l,blockParams:r.blockParams([e[t],t],[u+t,null])})}if(t.data&&t.ids&&(u=r.appendContextPath(t.data.contextPath,t.ids[0])+"."),r.isFunction(e)&&(e=e.call(this)),t.data&&(l=r.createFrame(t.data)),e&&"object"==typeof e)if(r.isArray(e))for(var d=e.length;o<d;o++)o in e&&c(o,o,o===e.length-1);else{var f=void 0;for(var p in e)e.hasOwnProperty(p)&&(void 0!==f&&c(f,o-1),f=p,o++);void 0!==f&&c(f,o-1,!0)}return 0===o&&(s=a(this)),s})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new r.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("if",function(e,t){return r.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||r.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var i=1;null!=n.hash.level?i=n.hash.level:n.data&&null!=n.data.level&&(i=n.data.level),t[0]=i,e.log.apply(e,t)})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t){return e&&e[t]})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("with",function(e,t){r.isFunction(e)&&(e=e.call(this));var n=t.fn;if(r.isEmpty(e))return t.inverse(this);var i=t.data;return t.data&&t.ids&&((i=r.createFrame(t.data)).contextPath=r.appendContextPath(t.data.contextPath,t.ids[0])),n(e,{data:i,blockParams:r.blockParams([e],[i&&i.contextPath])})})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){r.default(e)};var r=function(e){return e&&e.__esModule?e:{default:e}}(n(19))},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerDecorator("inline",function(e,t,n,i){var a=e;return t.partials||(t.partials={},a=function(i,a){var o=n.partials;n.partials=r.extend({},o,t.partials);var s=e(i,a);return n.partials=o,s}),t.partials[i.args[0]]=i.fn,a})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),i={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=r.indexOf(i.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=i.lookupLevel(e),"undefined"!=typeof console&&i.lookupLevel(i.level)<=e){var t=i.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];console[t].apply(console,r)}}};t.default=i,e.exports=t.default},function(e,t,n){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,n=a.COMPILER_REVISION;if(t!==n){if(t<n){var r=a.REVISION_CHANGES[n],o=a.REVISION_CHANGES[t];throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+o+").")}throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}},t.template=function(e,t){if(!t)throw new i.default("No environment passed to template");if(!e||!e.main)throw new i.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n={strict:function(e,t){if(!(t in e))throw new i.default('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var n=e.length,r=0;r<n;r++)if(e[r]&&null!=e[r][t])return e[r][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:r.escapeExpression,invokePartial:function(n,a,o){o.hash&&(a=r.extend({},a,o.hash),o.ids&&(o.ids[0]=!0));n=t.VM.resolvePartial.call(this,n,a,o);var s=t.VM.invokePartial.call(this,n,a,o);null==s&&t.compile&&(o.partials[o.name]=t.compile(n,e.compilerOptions,t),s=o.partials[o.name](a,o));if(null!=s){if(o.indent){for(var l=s.split("\n"),u=0,c=l.length;u<c&&(l[u]||u+1!==c);u++)l[u]=o.indent+l[u];s=l.join("\n")}return s}throw new i.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,i){var a=this.programs[e],s=this.fn(e);return t||i||r||n?a=o(this,e,s,t,n,r,i):a||(a=this.programs[e]=o(this,e,s)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=r.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function s(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=r.data;s._setup(r),!r.partial&&e.useData&&(i=function(e,t){t&&"root"in t||((t=t?a.createFrame(t):{}).root=e);return t}(t,i));var o=void 0,u=e.useBlockParams?[]:void 0;function c(t){return""+e.main(n,t,n.helpers,n.partials,i,u,o)}return e.useDepths&&(o=r.depths?t!=r.depths[0]?[t].concat(r.depths):r.depths:[t]),(c=l(e.main,c,n,r.depths||[],i,u))(t,r)}return s.isTop=!0,s._setup=function(r){r.partial?(n.helpers=r.helpers,n.partials=r.partials,n.decorators=r.decorators):(n.helpers=n.merge(r.helpers,t.helpers),e.usePartial&&(n.partials=n.merge(r.partials,t.partials)),(e.usePartial||e.useDecorators)&&(n.decorators=n.merge(r.decorators,t.decorators)))},s._child=function(t,r,a,s){if(e.useBlockParams&&!a)throw new i.default("must pass block params");if(e.useDepths&&!s)throw new i.default("must pass parent depths");return o(n,t,e[t],r,0,a,s)},s},t.wrapProgram=o,t.resolvePartial=function(e,t,n){e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return e},t.invokePartial=function(e,t,n){var o=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var l=void 0;n.fn&&n.fn!==s&&function(){n.data=a.createFrame(n.data);var e=n.fn;l=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=a.createFrame(n.data),n.data["partial-block"]=o,e(t,n)},e.partials&&(n.partials=r.extend({},n.partials,e.partials))}();void 0===e&&l&&(e=l);if(void 0===e)throw new i.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},t.noop=s;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),i=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),a=n(3);function o(e,t,n,r,i,a,o){function s(t){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=o;return!o||t==o[0]||t===e.nullContext&&null===o[0]||(s=[t].concat(o)),n(e,t,e.helpers,e.partials,i.data||r,a&&[i.blockParams].concat(a),s)}return(s=l(n,s,e,o,r,a)).program=t,s.depth=o?o.length:0,s.blockParams=i||0,s}function s(){return""}function l(e,t,n,i,a,o){if(e.decorator){var s={};t=e.decorator(t,s,n,i&&i[0],a,o,i),r.extend(t,s)}return t}},function(e,t,n){"use strict";(function(n){t.__esModule=!0,t.default=function(e){var t=void 0!==n?n:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default}).call(this,n(24))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(2);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,i){var a,o,s=null!=t?t:e.nullContext||{},l=n.helperMissing,u=e.escapeExpression;return'<div class="container border-red">\n  <div class="title-and-estimate-container">\n    <div class="title-container">\n      <div class="title-text">\n        <strong>Title:&nbsp;</strong>'+u("function"==typeof(o=null!=(o=n.title||(null!=t?t.title:t))?o:l)?o.call(s,{name:"title",hash:{},data:i}):o)+'\n      </div>\n    </div>\n    <div class="estimate-container border-red"></div>\n  </div>\n  <div class="userstory-and-discipline-container">\n    <div class="user-story"> \n      <strong>Reproduction Steps:</strong>\n      <br/>\n        '+(null!=(a="function"==typeof(o=null!=(o=n.repro_steps||(null!=t?t.repro_steps:t))?o:l)?o.call(s,{name:"repro_steps",hash:{},data:i}):o)?a:"")+"\n      <br/><br/>\n      <strong>System Info:</strong>\n      <br/>\n        "+(null!=(a="function"==typeof(o=null!=(o=n.system_info||(null!=t?t.system_info:t))?o:l)?o.call(s,{name:"system_info",hash:{},data:i}):o)?a:"")+'\n      <br/>\n     </div>\n    <div class="discipline-container">\n      <div class="discipline">\n        <div class="description">Dev</div>\n        <div class="box border-red"></div>\n      </div>\n      <div class="discipline">\n        <div class="description">UX</div>\n        <div class="box border-red"></div>\n      </div>\n    </div>\n  </div>\n  <div class="po-vsts-container">\n    <div class="po">\n      <strong>Product Owner:</strong>\n    </div>\n    <div class="vsts-number">\n      <strong>'+u("function"==typeof(o=null!=(o=n.number||(null!=t?t.number:t))?o:l)?o.call(s,{name:"number",hash:{},data:i}):o)+"</strong>\n    </div>\n  </div>\n</div>"},useData:!0})}])});
//# sourceMappingURL=pcards.js.map