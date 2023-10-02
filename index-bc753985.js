(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var X,l,Ie,Pe,A,ve,Ae,ie,Me,D={},Ee=[],Qe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ue=Array.isArray;function I(t,e){for(var n in e)t[n]=e[n];return t}function De(t){var e=t.parentNode;e&&e.removeChild(t)}function Xe(t,e,n){var i,r,o,a={};for(o in e)o=="key"?i=e[o]:o=="ref"?r=e[o]:a[o]=e[o];if(arguments.length>2&&(a.children=arguments.length>3?X.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)a[o]===void 0&&(a[o]=t.defaultProps[o]);return G(t,a,i,r,null)}function G(t,e,n,i,r){var o={type:t,props:e,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++Ie};return r==null&&l.vnode!=null&&l.vnode(o),o}function Y(t){return t.children}function O(t,e){this.props=t,this.context=e}function N(t,e){if(e==null)return t.__?N(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?N(t):null}function Le(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Le(t)}}function oe(t){(!t.__d&&(t.__d=!0)&&A.push(t)&&!B.__r++||ve!==l.debounceRendering)&&((ve=l.debounceRendering)||Ae)(B)}function B(){var t,e,n,i,r,o,a,_,c;for(A.sort(ie);t=A.shift();)t.__d&&(e=A.length,i=void 0,r=void 0,o=void 0,_=(a=(n=t).__v).__e,(c=n.__P)&&(i=[],r=[],(o=I({},a)).__v=a.__v+1,ce(c,a,o,n.__n,c.ownerSVGElement!==void 0,a.__h!=null?[_]:null,i,_??N(a),a.__h,r),qe(i,a,r),a.__e!=_&&Le(a)),A.length>e&&A.sort(ie));B.__r=0}function He(t,e,n,i,r,o,a,_,c,y,d){var s,S,f,u,h,M,v,g,x,k=0,b=i&&i.__k||Ee,U=b.length,T=U,E=e.length;for(n.__k=[],s=0;s<E;s++)(u=n.__k[s]=(u=e[s])==null||typeof u=="boolean"||typeof u=="function"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?G(null,u,null,null,u):ue(u)?G(Y,{children:u},null,null,null):u.__b>0?G(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u)!=null?(u.__=n,u.__b=n.__b+1,(g=Ye(u,b,v=s+k,T))===-1?f=D:(f=b[g]||D,b[g]=void 0,T--),ce(t,u,f,r,o,a,_,c,y,d),h=u.__e,(S=u.ref)&&f.ref!=S&&(f.ref&&le(f.ref,null,u),d.push(S,u.__c||h,u)),h!=null&&(M==null&&(M=h),(x=f===D||f.__v===null)?g==-1&&k--:g!==v&&(g===v+1?k++:g>v?T>E-v?k+=g-v:k--:k=g<v&&g==v-1?g-v:0),v=s+k,typeof u.type!="function"||g===v&&f.__k!==u.__k?typeof u.type=="function"||g===v&&!x?u.__d!==void 0?(c=u.__d,u.__d=void 0):c=h.nextSibling:c=Oe(t,h,c):c=Ue(u,c,t),typeof n.type=="function"&&(n.__d=c))):(f=b[s])&&f.key==null&&f.__e&&(f.__e==c&&(c=N(f)),re(f,f,!1),b[s]=null);for(n.__e=M,s=U;s--;)b[s]!=null&&(typeof n.type=="function"&&b[s].__e!=null&&b[s].__e==n.__d&&(n.__d=b[s].__e.nextSibling),re(b[s],b[s]))}function Ue(t,e,n){for(var i,r=t.__k,o=0;r&&o<r.length;o++)(i=r[o])&&(i.__=t,e=typeof i.type=="function"?Ue(i,e,n):Oe(n,i.__e,e));return e}function Oe(t,e,n){return n==null||n.parentNode!==t?t.insertBefore(e,null):e==n&&e.parentNode!=null||t.insertBefore(e,n),e.nextSibling}function Ye(t,e,n,i){var r=t.key,o=t.type,a=n-1,_=n+1,c=e[n];if(c===null||c&&r==c.key&&o===c.type)return n;if(i>(c!=null?1:0))for(;a>=0||_<e.length;){if(a>=0){if((c=e[a])&&r==c.key&&o===c.type)return a;a--}if(_<e.length){if((c=e[_])&&r==c.key&&o===c.type)return _;_++}}return-1}function Ze(t,e,n,i,r){var o;for(o in n)o==="children"||o==="key"||o in e||R(t,o,null,n[o],i);for(o in e)r&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===e[o]||R(t,o,e[o],n[o],i)}function me(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Qe.test(e)?n:n+"px"}function R(t,e,n,i,r){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)n&&e in n||me(t.style,e,"");if(n)for(e in n)i&&n[e]===i[e]||me(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?i||t.addEventListener(e,o?ye:ge,o):t.removeEventListener(e,o?ye:ge,o);else if(e!=="dangerouslySetInnerHTML"){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function ge(t){return this.l[t.type+!1](l.event?l.event(t):t)}function ye(t){return this.l[t.type+!0](l.event?l.event(t):t)}function ce(t,e,n,i,r,o,a,_,c,y){var d,s,S,f,u,h,M,v,g,x,k,b,U,T,E,w=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,_=e.__e=n.__e,e.__h=null,o=[_]),(d=l.__b)&&d(e);e:if(typeof w=="function")try{if(v=e.props,g=(d=w.contextType)&&i[d.__c],x=d?g?g.props.value:d.__:i,n.__c?M=(s=e.__c=n.__c).__=s.__E:("prototype"in w&&w.prototype.render?e.__c=s=new w(v,x):(e.__c=s=new O(v,x),s.constructor=w,s.render=tt),g&&g.sub(s),s.props=v,s.state||(s.state={}),s.context=x,s.__n=i,S=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),w.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=I({},s.__s)),I(s.__s,w.getDerivedStateFromProps(v,s.__s))),f=s.props,u=s.state,s.__v=e,S)w.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(w.getDerivedStateFromProps==null&&v!==f&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(v,x),!s.__e&&(s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(v,s.__s,x)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(s.props=v,s.state=s.__s,s.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(F){F&&(F.__=e)}),k=0;k<s._sb.length;k++)s.__h.push(s._sb[k]);s._sb=[],s.__h.length&&a.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(v,s.__s,x),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(f,u,h)})}if(s.context=x,s.props=v,s.__P=t,s.__e=!1,b=l.__r,U=0,"prototype"in w&&w.prototype.render){for(s.state=s.__s,s.__d=!1,b&&b(e),d=s.render(s.props,s.state,s.context),T=0;T<s._sb.length;T++)s.__h.push(s._sb[T]);s._sb=[]}else do s.__d=!1,b&&b(e),d=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++U<25);s.state=s.__s,s.getChildContext!=null&&(i=I(I({},i),s.getChildContext())),S||s.getSnapshotBeforeUpdate==null||(h=s.getSnapshotBeforeUpdate(f,u)),He(t,ue(E=d!=null&&d.type===Y&&d.key==null?d.props.children:d)?E:[E],e,n,i,r,o,a,_,c,y),s.base=e.__e,e.__h=null,s.__h.length&&a.push(s),M&&(s.__E=s.__=null)}catch(F){e.__v=null,(c||o!=null)&&(e.__e=_,e.__h=!!c,o[o.indexOf(_)]=null),l.__e(F,e,n)}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=et(n.__e,e,n,i,r,o,a,c,y);(d=l.diffed)&&d(e)}function qe(t,e,n){for(var i=0;i<n.length;i++)le(n[i],n[++i],n[++i]);l.__c&&l.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(o){o.call(r)})}catch(o){l.__e(o,r.__v)}})}function et(t,e,n,i,r,o,a,_,c){var y,d,s,S=n.props,f=e.props,u=e.type,h=0;if(u==="svg"&&(r=!0),o!=null){for(;h<o.length;h++)if((y=o[h])&&"setAttribute"in y==!!u&&(u?y.localName===u:y.nodeType===3)){t=y,o[h]=null;break}}if(t==null){if(u===null)return document.createTextNode(f);t=r?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,f.is&&f),o=null,_=!1}if(u===null)S===f||_&&t.data===f||(t.data=f);else{if(o=o&&X.call(t.childNodes),d=(S=n.props||D).dangerouslySetInnerHTML,s=f.dangerouslySetInnerHTML,!_){if(o!=null)for(S={},h=0;h<t.attributes.length;h++)S[t.attributes[h].name]=t.attributes[h].value;(s||d)&&(s&&(d&&s.__html==d.__html||s.__html===t.innerHTML)||(t.innerHTML=s&&s.__html||""))}if(Ze(t,f,S,r,_),s)e.__k=[];else if(He(t,ue(h=e.props.children)?h:[h],e,n,i,r&&u!=="foreignObject",o,a,o?o[0]:n.__k&&N(n,0),_,c),o!=null)for(h=o.length;h--;)o[h]!=null&&De(o[h]);_||("value"in f&&(h=f.value)!==void 0&&(h!==t.value||u==="progress"&&!h||u==="option"&&h!==S.value)&&R(t,"value",h,S.value,!1),"checked"in f&&(h=f.checked)!==void 0&&h!==t.checked&&R(t,"checked",h,S.checked,!1))}return t}function le(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(i){l.__e(i,n)}}function re(t,e,n){var i,r;if(l.unmount&&l.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||le(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(o){l.__e(o,e)}i.base=i.__P=null,t.__c=void 0}if(i=t.__k)for(r=0;r<i.length;r++)i[r]&&re(i[r],e,n||typeof t.type!="function");n||t.__e==null||De(t.__e),t.__=t.__e=t.__d=void 0}function tt(t,e,n){return this.constructor(t,n)}function nt(t,e,n){var i,r,o,a;l.__&&l.__(t,e),r=(i=typeof n=="function")?null:n&&n.__k||e.__k,o=[],a=[],ce(e,t=(!i&&n||e).__k=Xe(Y,null,[t]),r||D,D,e.ownerSVGElement!==void 0,!i&&n?[n]:r?null:e.firstChild?X.call(e.childNodes):null,o,!i&&n?n:r?r.__e:e.firstChild,i,a),qe(o,t,a)}function Ne(t,e){var n={__c:e="__cC"+Me++,__:t,Consumer:function(i,r){return i.children(r)},Provider:function(i){var r,o;return this.getChildContext||(r=[],(o={})[e]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(a){this.props.value!==a.value&&r.some(function(_){_.__e=!0,oe(_)})},this.sub=function(a){r.push(a);var _=a.componentWillUnmount;a.componentWillUnmount=function(){r.splice(r.indexOf(a),1),_&&_.call(a)}}),i.children}};return n.Provider.__=n.Consumer.contextType=n}X=Ee.slice,l={__e:function(t,e,n,i){for(var r,o,a;e=e.__;)if((r=e.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(t)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,i||{}),a=r.__d),a)return r.__E=r}catch(_){t=_}throw t}},Ie=0,Pe=function(t){return t!=null&&t.constructor===void 0},O.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=I({},this.state),typeof t=="function"&&(t=t(I({},n),this.props)),t&&I(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),oe(this))},O.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),oe(this))},O.prototype.render=Y,A=[],Ae=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ie=function(t,e){return t.__v.__b-e.__v.__b},B.__r=0,Me=0;var J,$,te,be,Ce=0,ze=[],V=[],Se=l.__b,$e=l.__r,ke=l.diffed,we=l.__c,xe=l.unmount;function Fe(t,e){l.__h&&l.__h($,t,Ce||e),Ce=0;var n=$.__H||($.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:V}),n.__[t]}function Ge(t,e){var n=Fe(J++,7);return rt(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function fe(t){var e=$.context[t.__c],n=Fe(J++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub($)),e.props.value):t.__}function it(){for(var t;t=ze.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(W),t.__H.__h.forEach(se),t.__H.__h=[]}catch(e){t.__H.__h=[],l.__e(e,t.__v)}}l.__b=function(t){$=null,Se&&Se(t)},l.__r=function(t){$e&&$e(t),J=0;var e=($=t.__c).__H;e&&(te===$?(e.__h=[],$.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=V,n.__N=n.i=void 0})):(e.__h.forEach(W),e.__h.forEach(se),e.__h=[],J=0)),te=$},l.diffed=function(t){ke&&ke(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(ze.push(e)!==1&&be===l.requestAnimationFrame||((be=l.requestAnimationFrame)||ot)(it)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==V&&(n.__=n.__V),n.i=void 0,n.__V=V})),te=$=null},l.__c=function(t,e){e.some(function(n){try{n.__h.forEach(W),n.__h=n.__h.filter(function(i){return!i.__||se(i)})}catch(i){e.some(function(r){r.__h&&(r.__h=[])}),e=[],l.__e(i,n.__v)}}),we&&we(t,e)},l.unmount=function(t){xe&&xe(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{W(i)}catch(r){e=r}}),n.__H=void 0,e&&l.__e(e,n.__v))};var je=typeof requestAnimationFrame=="function";function ot(t){var e,n=function(){clearTimeout(i),je&&cancelAnimationFrame(e),setTimeout(t)},i=setTimeout(n,100);je&&(e=requestAnimationFrame(n))}function W(t){var e=$,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),$=e}function se(t){var e=$;t.__c=t.__(),$=e}function rt(t,e){return!t||t.length!==e.length||e.some(function(n,i){return n!==t[i]})}function Z(){throw new Error("Cycle detected")}var st=Symbol.for("preact-signals");function he(){if(L>1)L--;else{for(var t,e=!1;q!==void 0;){var n=q;for(q=void 0,ae++;n!==void 0;){var i=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&We(n))try{n.c()}catch(r){e||(t=r,e=!0)}n=i}}if(ae=0,L--,e)throw t}}var m=void 0,q=void 0,L=0,ae=0,K=0;function Ve(t){if(m!==void 0){var e=t.n;if(e===void 0||e.t!==m)return e={i:0,S:t,p:m.s,n:void 0,t:m,e:void 0,x:void 0,r:e},m.s!==void 0&&(m.s.n=e),m.s=e,t.n=e,32&m.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=m.s,e.n=void 0,m.s.n=e,m.s=e),e}}function C(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}C.prototype.brand=st;C.prototype.h=function(){return!0};C.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};C.prototype.U=function(t){if(this.t!==void 0){var e=t.e,n=t.x;e!==void 0&&(e.x=n,t.e=void 0),n!==void 0&&(n.e=e,t.x=void 0),t===this.t&&(this.t=n)}};C.prototype.subscribe=function(t){var e=this;return pe(function(){var n=e.value,i=32&this.f;this.f&=-33;try{t(n)}finally{this.f|=i}})};C.prototype.valueOf=function(){return this.value};C.prototype.toString=function(){return this.value+""};C.prototype.toJSON=function(){return this.value};C.prototype.peek=function(){return this.v};Object.defineProperty(C.prototype,"value",{get:function(){var t=Ve(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(m instanceof P&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){ae>100&&Z(),this.v=t,this.i++,K++,L++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{he()}}}});function j(t){return new C(t)}function We(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function Be(t){for(var e=t.s;e!==void 0;e=e.n){var n=e.S.n;if(n!==void 0&&(e.r=n),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function Re(t){for(var e=t.s,n=void 0;e!==void 0;){var i=e.p;e.i===-1?(e.S.U(e),i!==void 0&&(i.n=e.n),e.n!==void 0&&(e.n.p=i)):n=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=i}t.s=n}function P(t){C.call(this,void 0),this.x=t,this.s=void 0,this.g=K-1,this.f=4}(P.prototype=new C).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===K))return!0;if(this.g=K,this.f|=1,this.i>0&&!We(this))return this.f&=-2,!0;var t=m;try{Be(this),m=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return m=t,Re(this),this.f&=-2,!0};P.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}C.prototype.S.call(this,t)};P.prototype.U=function(t){if(this.t!==void 0&&(C.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};P.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};P.prototype.peek=function(){if(this.h()||Z(),16&this.f)throw this.v;return this.v};Object.defineProperty(P.prototype,"value",{get:function(){1&this.f&&Z();var t=Ve(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function _e(t){return new P(t)}function Je(t){var e=t.u;if(t.u=void 0,typeof e=="function"){L++;var n=m;m=void 0;try{e()}catch(i){throw t.f&=-2,t.f|=8,de(t),i}finally{m=n,he()}}}function de(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,Je(t)}function at(t){if(m!==this)throw new Error("Out-of-order effect");Re(this),m=t,this.f&=-2,8&this.f&&de(this),he()}function z(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}z.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}};z.prototype.S=function(){1&this.f&&Z(),this.f|=1,this.f&=-9,Je(this),Be(this),L++;var t=m;return m=this,at.bind(this,t)};z.prototype.N=function(){2&this.f||(this.f|=2,this.o=q,q=this)};z.prototype.d=function(){this.f|=8,1&this.f||de(this)};function pe(t){var e=new z(t);try{e.c()}catch(n){throw e.d(),n}return e.d.bind(e)}var ne;function H(t,e){l[t]=e.bind(null,l[t]||function(){})}function Q(t){ne&&ne(),ne=t&&t.S()}function Ke(t){var e=this,n=t.data,i=ut(n);i.value=n;var r=Ge(function(){for(var o=e.__v;o=o.__;)if(o.__c){o.__c.__$f|=4;break}return e.__$u.c=function(){var a;!Pe(r.peek())&&((a=e.base)==null?void 0:a.nodeType)===3?e.base.data=r.peek():(e.__$f|=1,e.setState({}))},_e(function(){var a=i.value.value;return a===0?0:a===!0?"":a||""})},[]);return r.value}Ke.displayName="_st";Object.defineProperties(C.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Ke},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});H("__b",function(t,e){if(typeof e.type=="string"){var n,i=e.props;for(var r in i)if(r!=="children"){var o=i[r];o instanceof C&&(n||(e.__np=n={}),n[r]=o,i[r]=o.peek())}}t(e)});H("__r",function(t,e){Q();var n,i=e.__c;i&&(i.__$f&=-2,(n=i.__$u)===void 0&&(i.__$u=n=function(r){var o;return pe(function(){o=this}),o.c=function(){i.__$f|=1,i.setState({})},o}())),Q(n),t(e)});H("__e",function(t,e,n,i){Q(),t(e,n,i)});H("diffed",function(t,e){Q();var n;if(typeof e.type=="string"&&(n=e.__e)){var i=e.__np,r=e.props;if(i){var o=n.U;if(o)for(var a in o){var _=o[a];_!==void 0&&!(a in i)&&(_.d(),o[a]=void 0)}else n.U=o={};for(var c in i){var y=o[c],d=i[c];y===void 0?(y=_t(n,c,d,r),o[c]=y):y.o(d,r)}}}t(e)});function _t(t,e,n,i){var r=e in t&&t.ownerSVGElement===void 0,o=j(n);return{o:function(a,_){o.value=a,i=_},d:pe(function(){var a=o.value.value;i[e]!==a&&(i[e]=a,r?t[e]=a:a?t.setAttribute(e,a):t.removeAttribute(e))})}}H("unmount",function(t,e){if(typeof e.type=="string"){var n=e.__e;if(n){var i=n.U;if(i){n.U=void 0;for(var r in i){var o=i[r];o&&o.d()}}}}else{var a=e.__c;if(a){var _=a.__$u;_&&(a.__$u=void 0,_.d())}}t(e)});H("__h",function(t,e,n,i){(i<3||i===9)&&(e.__$f|=2),t(e,n,i)});O.prototype.shouldComponentUpdate=function(t,e){var n=this.__$u;if(!(n&&n.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var i in e)return!0;for(var r in t)if(r!=="__source"&&t[r]!==this.props[r])return!0;for(var o in this.props)if(!(o in t))return!0;return!1};function ut(t){return Ge(function(){return j(t)},[])}const ct=["bear","bee","cat","chicken","dog","frog","hedgehog","lion","monkey","mouse","panda","pig","rabbit","sheep","turtle"],lt=new Map([[1,{horizontalCardsCount:3,pairsCount:3}],[2,{horizontalCardsCount:4,pairsCount:6}],[3,{horizontalCardsCount:4,pairsCount:8}],[4,{horizontalCardsCount:4,pairsCount:10}],[5,{horizontalCardsCount:4,pairsCount:12}],[6,{horizontalCardsCount:5,pairsCount:15}]]);class ft{constructor(){this.maxDifficulty=6,this.cards=j([]),this.horizontalCardsCount=j(0),this.currentState=j("init"),this.openCardsIds=j([]),this.gameLevel=j(1),this.cardsMap=_e(()=>this.cards.value.reduce((e,n)=>(e.set(n.id,n),e),new Map)),this.timeSpent=_e(()=>{const e=_=>_.toString().padStart(2,"0"),n=this.startTimestamp.value,i=this.currentTimestamp.value;if(!n||!i||i-n<0)return null;const r=Math.floor((i-n)/1e3),o=e(Math.floor(r/60)),a=e(r%60);return`${o}:${a}`}),this.startTimestamp=j(null),this.currentTimestamp=j(null),this.start=()=>{this.setState("game_over")},this.openCard=e=>{this.currentState.value!=="run"||!e.isActive||this.openCardsIds.value.length>=2||this.isCardOpen(e)||(this.openCardsIds.value=[...this.openCardsIds.value,e.id],!(this.openCardsIds.value.length<2)&&this.closeCards())},this.isCardOpen=e=>this.openCardsIds.value.includes(e.id),this.increaseLevel=()=>{const e=this.gameLevel.value+1;e<=this.maxDifficulty&&(this.gameLevel.value=e)},this.degreesLevel=()=>{const e=this.gameLevel.value-1;e>0&&(this.gameLevel.value=e)},this.start()}closeCards(){const e=this.cardsMap.value,n=this.openCardsIds.value,i=e.get(n[0]),r=e.get(n[1]),o=i.animalType===r.animalType;setTimeout(()=>{o&&(i.isActive=!1,r.isActive=!1,this.cards.value.every(a=>!a.isActive)?this.setState("game_over"):this.cards.value=[...this.cards.value]),this.openCardsIds.value=[]},1e3)}createGameCards(e){const n=(_,c)=>({animalType:_,isActive:!0,id:`${_}-${c}`}),i=this.getRandomAnimalTypes(e),r=i.map(_=>n(_,1)),o=i.map(_=>n(_,2));return this.getShuffledArray([...r,...o])}getShuffledArray(e){for(let n=e.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[e[n],e[i]]=[e[i],e[n]]}return e}startTimer(){this.startTimestamp.value=Date.now(),this.timer=setInterval(()=>{this.currentTimestamp.value=Date.now()},1e3)}stopTimer(){clearInterval(this.timer)}getRandomAnimalTypes(e){return this.getShuffledArray([...ct]).slice(0,e)}setState(e){if(e==="run"){this.openCardsIds.value=[];const{horizontalCardsCount:n,pairsCount:i}=lt.get(this.gameLevel.value);this.cards.value=this.createGameCards(i),this.horizontalCardsCount.value=n,this.startTimer()}e==="game_over"&&this.stopTimer(),this.currentState.value=e}}const ee=Ne(null),ht="https://js-headquaters.github.io/beast-memory-game/bear-2a024f96.jpg",dt="https://js-headquaters.github.io/beast-memory-game/bee-aab93015.jpg",pt="https://js-headquaters.github.io/beast-memory-game/cat-3b5927fa.jpg",vt="https://js-headquaters.github.io/beast-memory-game/chicken-bbdea4b0.jpg",mt="https://js-headquaters.github.io/beast-memory-game/dog-05a67f24.jpg",gt="https://js-headquaters.github.io/beast-memory-game/frog-6f66e0e1.jpg",yt="https://js-headquaters.github.io/beast-memory-game/hedgehog-23945674.jpg",bt="https://js-headquaters.github.io/beast-memory-game/lion-5ad0dad5.jpg",Ct="https://js-headquaters.github.io/beast-memory-game/monkey-0ff29deb.jpg",St="https://js-headquaters.github.io/beast-memory-game/mouse-635bb8de.jpg",$t="https://js-headquaters.github.io/beast-memory-game/panda-03212336.jpg",kt="https://js-headquaters.github.io/beast-memory-game/pig-a81ff79f.jpg",wt="https://js-headquaters.github.io/beast-memory-game/rabbit-611b5470.jpg",xt="https://js-headquaters.github.io/beast-memory-game/sheep-31b0667b.jpg",jt="https://js-headquaters.github.io/beast-memory-game/turtle-61d81b79.jpg",Tt=new Map([["bear",ht],["bee",dt],["cat",pt],["chicken",vt],["dog",mt],["frog",gt],["hedgehog",yt],["lion",bt],["monkey",Ct],["mouse",St],["panda",$t],["pig",kt],["rabbit",xt],["sheep",wt],["turtle",jt]]);const It="https://js-headquaters.github.io/beast-memory-game/backing-93c23538.jpg";var Pt=0;function p(t,e,n,i,r,o){var a,_,c={};for(_ in e)_=="ref"?a=e[_]:c[_]=e[_];var y={type:t,props:c,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Pt,__source:r,__self:o};if(typeof t=="function"&&(a=t.defaultProps))for(_ in a)c[_]===void 0&&(c[_]=a[_]);return l.vnode&&l.vnode(y),y}function At(t){const{openCard:e,isCardOpen:n}=fe(ee),i=()=>{e(t)},r=a=>`game-card ${n(a)&&" game-card_open"} `,o=p("div",{class:"game-card__inner",children:[p("div",{class:"game-card__backing",children:p("img",{class:"game-card__backing-image",src:It,alt:"card backing",loading:"eager"})}),p("div",{class:"game-card__animal",children:p("img",{class:"game-card__animal-image",src:Tt.get(t.animalType),alt:t.animalType})})]});return p("div",{class:r(t),onClick:i,children:t.isActive&&o})}function Mt(){const{cards:t,horizontalCardsCount:e}=fe(ee),n=`--horizontal-cards-count: ${e.value};`;return p("div",{style:n,class:"game-field",children:t.value.map(i=>p(At,{...i}))})}function Et(){const{timeSpent:t,increaseLevel:e,degreesLevel:n,gameLevel:i,start:r}=fe(ee);return p("div",{class:"game-over",children:[p("div",{children:"Very Impressive!"}),p("div",{children:["Time spent: ",t.value]}),p("div",{children:"Set Difficulty"}),p("div",{class:"game-over__level-select",children:[p("button",{onClick:n,children:"-"}),p("span",{children:i.value}),p("button",{onClick:e,children:"+"})]}),p("button",{onClick:r,children:"Play again"})]})}class Dt{constructor(){this.isDebugModeActive=j(!1),this.toggleDebugMode=()=>{this.isDebugModeActive.value=!this.isDebugModeActive.value}}getTelegramData(){return JSON.stringify(window.Telegram,null,2)}}const Lt=Ne(null);const Te=new ft,Ht=new Dt,Ut=new Map([["run",Mt],["game_over",Et]]);function Ot(){const{currentState:t}=Te,e=Ut.get(t.value);return p(ee.Provider,{value:Te,children:p(Lt.Provider,{value:Ht,children:p("div",{class:"game",children:[p("div",{class:"game__spacer"}),p("div",{class:"game__content",children:p(e,{})}),p("div",{class:"game__spacer"})]})})})}nt(p(Ot,{}),document.getElementById("app"));
