(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{325:function(e,t,n){"use strict";var i=n(171),l=n(174),r=n(5),a=n(20),o=n(93),s=n(172),c=n(11),d=n(173),u=n(65),g=n(2),h=[].push,f=Math.min,x=!g((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=String(a(this)),r=void 0===n?4294967295:n>>>0;if(0===r)return[];if(void 0===e)return[i];if(!l(e))return t.call(i,e,r);for(var o,s,c,d=[],g=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,x=new RegExp(e.source,g+"g");(o=u.call(x,i))&&!((s=x.lastIndex)>f&&(d.push(i.slice(f,o.index)),o.length>1&&o.index<i.length&&h.apply(d,o.slice(1)),c=o[0].length,f=s,d.length>=r));)x.lastIndex===o.index&&x.lastIndex++;return f===i.length?!c&&x.test("")||d.push(""):d.push(i.slice(f)),d.length>r?d.slice(0,r):d}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var l=a(this),r=null==t?void 0:t[e];return void 0!==r?r.call(t,l,n):i.call(String(l),t,n)},function(e,l){var a=n(i,e,this,l,i!==t);if(a.done)return a.value;var u=r(e),g=String(this),h=o(u,RegExp),p=u.unicode,b=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(x?"y":"g"),k=new h(x?u:"^(?:"+u.source+")",b),m=void 0===l?4294967295:l>>>0;if(0===m)return[];if(0===g.length)return null===d(k,g)?[g]:[];for(var v=0,C=0,G=[];C<g.length;){k.lastIndex=x?C:0;var L,S=d(k,x?g:g.slice(C));if(null===S||(L=f(c(k.lastIndex+(x?0:C)),g.length))===v)C=s(g,C,p);else{if(G.push(g.slice(v,C)),G.length===m)return G;for(var y=1;y<=S.length-1;y++)if(G.push(S[y]),G.length===m)return G;C=v=L}}return G.push(g.slice(v)),G}]}),!x)},326:function(e,t,n){"use strict";var i=n(0),l=n(29).find,r=n(94),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{find:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),r("find")},338:function(e){e.exports=JSON.parse('{"/":{"lang":"en-US","title":"GCT Generator","selectText":"🌐 Language","label":"English","ariaLabel":"Language","editLinkText":"Edit this page on GitHub","nav":[{"text":"Cookbook","link":"/guide.html"},{"text":"Code Reference","link":"/code-reference/index.html"},{"text":"Installing IOS58","link":"/ios58.html"},{"text":"Sunshine Discord","link":"https://discord.gg/9dGJWEc"},{"text":"Changelog","link":"https://github.com/BitPatty/gctGenerator/blob/master/changelog.md"}]},"/de/":{"lang":"de-CH","title":"GCT Generator","selectText":"🌐 Sprache","label":"Deutsch","ariaLabel":"Sprache","editLinkText":"Bearbeite diese Seite auf GitHub","activeHeaderLinks":false,"nav":[{"text":"Cookbook","link":"/de/guide.html"},{"text":"Code Referenz","link":"/de/code-reference/index.html"},{"text":"IOS58 Installation","link":"/de/ios58.html"},{"text":"Sunshine Discord","link":"https://discord.gg/9dGJWEc"},{"text":"Changelog","link":"https://github.com/BitPatty/gctGenerator/blob/master/changelog.md"}]},"/fr/":{"lang":"fr-FR","title":"Générateur GCT","selectText":"🌐 Langue","label":"Français","ariaLabel":"Langue","editLinkText":"Modifier cette page sur GitHub","activeHeaderLinks":false,"nav":[{"text":"Cookbook","link":"/fr/guide.html"},{"text":"Référence des codes","link":"/fr/code-reference/index.html"},{"text":"Installation d\'IOS58","link":"/fr/ios58.html"},{"text":"Discord de Sunshine","link":"https://discord.gg/9dGJWEc"},{"text":"Changelog","link":"https://github.com/BitPatty/gctGenerator/blob/master/changelog.md"}]},"/ja/":{"lang":"ja-JP","title":"GCT Generator","selectText":"🌐 言語設定","label":"日本語","ariaLabel":"言語設定","editLinkText":"GitHubでこのページを編集","activeHeaderLinks":false,"nav":[{"text":"導入ガイド","link":"/ja/guide.html"},{"text":"チートコード一覧","link":"/ja/code-reference/index.html"},{"text":"IOS58のインストール","link":"/ja/ios58.html"},{"text":"Discord","link":"https://discord.gg/c5xffvr"},{"text":"変更ログ","link":"https://github.com/BitPatty/gctGenerator/blob/master/changelog.md"}]}}')},408:function(e,t,n){},457:function(e,t,n){"use strict";n(408)},464:function(e,t,n){"use strict";n.r(t);n(101),n(97),n(98),n(95),n(64),n(178);var i=n(334),l=n(338),r=n(324),a={data:function(){return{gameVersions:i}},methods:{onCardClick:function(e){var t=this,n=(Object.keys(l),"");Object.keys(l).forEach((function(e){l[e].lang===t.$lang&&(n=e.replace(/\/+$/,""))})),window.location.href="".concat(n,"/code-reference/").concat(e.identifier.toLowerCase(),".html")},getLabel:function(e){return Object(r.a)(e,this.$lang)}}},o=(n(457),n(26)),s=Object(o.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},e._l(e.gameVersions,(function(t){return n("div",{staticClass:"card",on:{click:function(n){return e.onCardClick(t)}}},[n("h3",[e._v(e._s(e.getLabel("common."+t.identifier)))])])})),0)}),[],!1,null,"57177999",null);t.default=s.exports}}]);