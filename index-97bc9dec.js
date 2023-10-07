import{G as T,q as h,o as a,_ as D,k as F,p as c,a as n,O as d,s as z,D as W}from"./vendor-0e751db0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const Y="https://js-headquaters.github.io/beast-memory-game/back-dark-a5bcd3c7.jpg",H="https://js-headquaters.github.io/beast-memory-game/back-light-c1edf369.jpg",y=6,S=1e3,w=800,U="https://js-headquaters.github.io/beast-memory-game/bear-c55e6894.jpg",V="https://js-headquaters.github.io/beast-memory-game/duck-d06ea39e.jpg",J="https://js-headquaters.github.io/beast-memory-game/cat-3b5927fa.jpg",K="https://js-headquaters.github.io/beast-memory-game/chicken-bbdea4b0.jpg",Z="https://js-headquaters.github.io/beast-memory-game/dog-05a67f24.jpg",Q="https://js-headquaters.github.io/beast-memory-game/fox-6585f4c7.jpg",X="https://js-headquaters.github.io/beast-memory-game/hedgehog-e27abbd5.jpg",ee="https://js-headquaters.github.io/beast-memory-game/lion-5ad0dad5.jpg",te="https://js-headquaters.github.io/beast-memory-game/monkey-0ff29deb.jpg",ae="https://js-headquaters.github.io/beast-memory-game/owl-48b001a3.jpg",se="https://js-headquaters.github.io/beast-memory-game/panda-e0d3e3fc.jpg",ie="https://js-headquaters.github.io/beast-memory-game/pig-9b1d2126.jpg",oe="https://js-headquaters.github.io/beast-memory-game/rabbit-e9a4de30.jpg",re="https://js-headquaters.github.io/beast-memory-game/sheep-25b90f5a.jpg",ne="https://js-headquaters.github.io/beast-memory-game/turtle-9854d7c8.jpg",le="https://js-headquaters.github.io/beast-memory-game/bear-6e3ac853.jpg",ce="https://js-headquaters.github.io/beast-memory-game/duck-d7573fe3.jpg",ue="https://js-headquaters.github.io/beast-memory-game/cat-9bf3d578.jpg",he="https://js-headquaters.github.io/beast-memory-game/chicken-e75c54fc.jpg",me="https://js-headquaters.github.io/beast-memory-game/dog-68c81a2e.jpg",ge="https://js-headquaters.github.io/beast-memory-game/fox-49aac663.jpg",de="https://js-headquaters.github.io/beast-memory-game/hedgehog-c6550386.jpg",pe="https://js-headquaters.github.io/beast-memory-game/lion-94462bc5.jpg",ve="https://js-headquaters.github.io/beast-memory-game/monkey-55fbe155.jpg",be="https://js-headquaters.github.io/beast-memory-game/owl-70a615d9.jpg",fe="https://js-headquaters.github.io/beast-memory-game/panda-4d7669de.jpg",Ce="https://js-headquaters.github.io/beast-memory-game/pig-587c2953.jpg",ye="https://js-headquaters.github.io/beast-memory-game/rabbit-4e7ce0f3.jpg",Se="https://js-headquaters.github.io/beast-memory-game/sheep-4bbcc443.jpg",we="https://js-headquaters.github.io/beast-memory-game/turtle-eb0ff798.jpg",Te=new Map([["bear",U],["duck",V],["cat",J],["chicken",K],["dog",Z],["fox",Q],["hedgehog",X],["lion",ee],["monkey",te],["owl",ae],["panda",se],["pig",ie],["rabbit",oe],["sheep",re],["turtle",ne]]),Ie=new Map([["bear",le],["duck",ce],["cat",ue],["chicken",he],["dog",me],["fox",ge],["hedgehog",de],["lion",pe],["monkey",ve],["owl",be],["panda",fe],["pig",Ce],["rabbit",ye],["sheep",Se],["turtle",we]]),p=T(null),O=T(null),I=T(null);const _e=`${w/S}s`;function ke({card:i}){const{openCard:e,isCardOpen:t,showDebugInfo:s}=h(p),{theme:o}=h(I),r=()=>e(i),u=v=>`game-card ${t(v)&&"game-card_open"} ${v.isActive&&"game-card_active"}`,l=`--card-flip-animation-time: ${_e}`,m=o.value==="dark"?Y:H;return a("div",{style:l,class:u(i),onClick:r,children:[s.value&&a("div",{class:"game-card__animal-type",children:i.animalType}),a("div",{class:"game-card__inner",children:[a("div",{class:"game-card__backing",children:a("img",{class:"game-card__backing-image",src:m,alt:"card backing",loading:"eager"})}),a("div",{class:"game-card__animal",children:a("img",{class:"game-card__animal-image",src:Te.get(i.animalType),alt:i.animalType})})]})]})}function Le(){const{cards:i,horizontalCardsCount:e,verticalCardsCount:t}=h(p);let s=`--horizontal-cards-count: ${e.value};`;return s+=`--vertical-cards-count: ${t.value};`,a("div",{style:s,class:"game-field",children:a("div",{class:"game-field__cards",children:i.value.map(o=>a(ke,{card:o},o.id))})})}function N({title:i,children:e,className:t,onTitleClick:s}){const o=t?`modal ${t}`:"modal";return a("div",{class:o,children:[a("div",{class:"modal__title",onClick:s,children:i}),a("div",{class:"modal__content",children:e})]})}const j=["Absolutely Brilliant!","Spectacular Achievement!","Exceptional Job!","Mind-Blowing Performance!","Stunning Effort!","Breathtaking Success!","Astonishing Results!","You're Unstoppable!","Phenomenal Work!","Simply Marvelous!"],je={bear:"Rawr, rawr! You helped me find my honey stash! You're unbearably awesome!",owl:"Hoo-hoo! You're so wise to match my feathers. Now I can finally find my night snacks!",cat:"Meow, purrfect! You've got claws for thought, helping me locate my yarn ball!",chicken:"Cluck cluck! Thanks for matching me up! Now I can find my nest of psychedelic eggs!",dog:"Woof woof! You're allowing me to memorize where my bone is!",fox:"Wa-pa-pa-pa-pa-pa-pow! You're as cunning as a fox, helping me rediscover my hidden lair!",hedgehog:"Snuffle-snuffle! You've got a sharp mind, like my quills! Now I can find my favorite bugs!",lion:"Roar! You've got the heart of a lion, helping me keep track of my pride!",monkey:"Ee-ee! You're a barrel of fun! Now I won't forget where I hid my bananas!",duck:"Quack-quack! You're just ducky! Thanks to you, I won't forget where my pond is!",panda:"Munch-munch! Bamboo-zling work you did there, helping me find my bamboo forest!",pig:"Oink-oink! You're hog-wild smart! Now I can find my mud bath!",rabbit:"Hop-hop, hooray! Your memory's as fast as a rabbit! Now I won't forget where my carrots are!",sheep:"Baa-baa! Ewe're aaa-absolutely ama-aaazing! Thanks to you-uu, I found my cozy pa-aaaasture!",turtle:"Slow and steady wins the race, just like your memory! Now I can find my sunning rock!"},Ae=i=>je[i],Me=()=>{const i=Math.floor(Math.random()*j.length);return j[i]},Re=i=>i.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase();function Be(){const{lastOpenedCardType:i}=h(p),e=D(Me()),t=Ie.get(i.value),s=Ae(i.value);return a(N,{title:e.current,className:"game-over",children:[a("div",{class:"game-over__last-card",children:a("img",{class:"game-over__last-card-image",src:t,alt:"animal card",loading:"eager"})}),a("div",{className:"game-over__animal-phrase",children:s})]})}function g({title:i,children:e}){return a("div",{class:"panel",children:[a("div",{class:"panel__title",children:i}),a("div",{class:"panel__content",children:e})]})}function A({name:i,value:e}){return a(F,{children:[a("div",{class:"name",children:i}),a("div",{class:"value",children:e||"N/A"})]})}function M({children:i}){return a("div",{class:"key-value-list",children:i})}function b({className:i,value:e,increase:t,decrease:s}){const o=i?`value-selector ${i}`:"value-selector";return a("div",{class:o,children:[a("button",{className:"value-selector__button",onClick:s,children:"-"}),a("span",{children:e}),a("button",{className:"value-selector__button",onClick:t,children:"+"})]})}function x(){return window.Telegram.WebApp.MainButton}function qe(){return JSON.stringify(window.Telegram.WebApp,null,2)}function Fe(){return window.Telegram.WebApp.platform!=="unknown"}function Oe(){return window.Telegram.WebApp}function R(){return window.Telegram.WebApp.colorScheme}function Ne(){return!!window.Telegram?.WebApp?.CloudStorage&&window.Telegram.WebApp.isVersionAtLeast("6.9")}function xe(...i){return window.Telegram.WebApp.CloudStorage.setItem(...i)}function $e(...i){return window.Telegram.WebApp.CloudStorage.getItem(...i)}function Ee(){return window.Telegram.WebApp.HapticFeedback}function Ge({gameStatistic:i,level:e}){const t=i.length;return t===0?a("div",{children:["No data for ",Pe(e)," level, play more games to see game history "]}):a("div",{class:"history",children:[a("div",{class:"history__cell",children:"№"}),a("div",{class:"history__cell",children:"Time"}),a("div",{class:"history__cell",children:"Flips"}),i?.map(({timeSpentInSeconds:s,cardFlipsCount:o},r)=>a(F,{children:[a("div",{class:"history__cell",children:t-r}),a("div",{class:"history__cell",children:s}),a("div",{class:"history__cell",children:o})]}))]})}function Pe(i){const e=i%10,t=i%100;return e===1&&t!==11?i+"st":e===2&&t!==12?i+"nd":e===3&&t!==13?i+"rd":i+"th"}const $=n(0),De=c(()=>$.value>10);function ze(){const{averageCardFlipsCount:i,averageTimeSpentInSeconds:e,gameLevelForStatistic:t,increaseStatisticLevel:s,decreaseStatisticLevel:o,resetStatistics:r,currentLevelStatistic:u}=h(O),{toggleTheme:l,theme:m}=h(I),{increaseLevel:v,decreaseLevel:G,gameLevel:P,showDebugInfo:k,toggleShowDebugInfo:L}=h(p);return a(N,{title:"Statistic",className:"statistic",onTitleClick:()=>{$.value+=1},children:[De.value&&a(g,{title:"Settings",children:a(M,{children:[a("div",{children:"Current Level:"}),a(b,{value:P.value,increase:v,decrease:G}),a("div",{children:"Theme:"}),a(b,{value:m.value,increase:l,decrease:l}),a("div",{children:"Show debug info:"}),a(b,{value:k.value?"Yes":"No",increase:L,decrease:L}),a("button",{class:"statistic__reset-button",onClick:r,children:"Reset Statistic"})]})}),a(g,{title:"Show data for level",children:a(b,{className:"statistic__level-selector",value:t.value,increase:s,decrease:o})}),a(g,{title:"Game statistic",children:a(M,{children:[a(A,{name:"Average time:",value:e.value}),a(A,{name:"Average flips:",value:i.value})]})}),a(g,{title:"Game history",children:a(Ge,{level:t.value,gameStatistic:u.value})}),k.value&&a(g,{title:"Debug Info",children:a("div",{className:"statistic__debug",children:qe()})})]})}class _{constructor(e){this.name=e}log(e,t){const s=`[${this.name}] > ${e}`;t?console.log(s,t):console.log(s)}error(e,t){console.error(`[${this.name}] > ${e}`,...[t||null].filter(s=>s))}}const We=["bear","owl","cat","chicken","dog","fox","hedgehog","lion","monkey","duck","panda","pig","rabbit","sheep","turtle"],Ye=new Map([[1,{horizontalCardsCount:3,pairsCount:3}],[2,{horizontalCardsCount:4,pairsCount:6}],[3,{horizontalCardsCount:4,pairsCount:8}],[4,{horizontalCardsCount:4,pairsCount:10}],[5,{horizontalCardsCount:4,pairsCount:12}],[6,{horizontalCardsCount:5,pairsCount:15}]]);class He{constructor(){this.gameLevel=n(1),this.cards=n([]),this.horizontalCardsCount=n(0),this.verticalCardsCount=n(0),this.currentState=n("init"),this.openCardsIds=n([]),this.cardsFlipCount=n(0),this.showDebugInfo=n(!1),this.lastOpenedCardType=n(null),this.cardsMap=c(()=>this.cards.value.reduce((e,t)=>(e.set(t.id,t),e),new Map)),this.timeSpentInSeconds=c(()=>{const e=this.startTimestamp.value,s=this.currentTimestamp.value-e;return s>0?Math.floor(s/S):0}),this.canIncreaseLevel=c(()=>this.gameLevel.value<y),this.canDecreaseLevel=c(()=>this.gameLevel.value>1),this.menuButtonText=c(()=>this.currentState.value==="game_over"?this.canIncreaseLevel.value?"Next level":"Play again":this.currentState.value==="menu"?"Close":"Statistic"),this.startTimestamp=n(null),this.currentTimestamp=n(null),this.mainButton=x(),this.logger=new _("GameStateService"),this.feedback=Ee(),this.restart=()=>{this.currentState.value="init"},this.openCard=e=>{this.currentState.value!=="run"||!e.isActive||this.openCardsIds.value.length>=2||this.isCardOpen(e)||(this.openCardsIds.value=[...this.openCardsIds.value,e.id],this.cardsFlipCount.value+=1,this.lastOpenedCardType.value=e.animalType,this.logger.log(`opened "${e.animalType}" card`),!(this.openCardsIds.value.length<2)&&this.closeCards())},this.isCardOpen=e=>this.openCardsIds.value.includes(e.id),this.startTimer=()=>{this.timer=setInterval(()=>{this.currentTimestamp.value=Date.now()},S)},this.stopTimer=()=>{clearInterval(this.timer)},this.resetTimer=()=>{this.startTimestamp.value=Date.now()},this.increaseLevel=()=>{const e=this.gameLevel.value+1;e<=y&&(this.gameLevel.value=e,this.initGame())},this.decreaseLevel=()=>{const e=this.gameLevel.value-1;e>0&&(this.gameLevel.value=e,this.initGame())},this.mainButtonClickHandler=()=>{if(this.currentState.value==="game_over"){this.gameLevel.value===6?this.gameLevel.value=1:this.increaseLevel(),this.restart();return}this.currentState.value!=="menu"?this.currentState.value="menu":this.currentState.value="run"},this.toggleShowDebugInfo=()=>{this.showDebugInfo.value=!this.showDebugInfo.value},this.mainButton.show(),this.mainButton.onClick(this.mainButtonClickHandler),d(()=>{this.mainButton.setText(this.menuButtonText.value)}),d(()=>{const e=this.currentState.value;if(this.logger.log(`game state changed to "${e}"`),e==="init"){this.initGame(),this.currentState.value="run";return}if(e==="run"){this.startTimer();return}if(e==="menu"||e==="game_over"){this.stopTimer();return}})}closeCards(){const e=this.cardsMap.value,t=this.openCardsIds.value,s=e.get(t[0]),o=e.get(t[1]),r=s.animalType===o.animalType;setTimeout(()=>{if(this.openCardsIds.value=[],!r){this.logger.log(`card "${s.animalType}" do not match card "${o.animalType}"`);return}this.logger.log(`card "${s.animalType}" match card "${o.animalType}"`),this.feedback.impactOccurred("heavy"),s.isActive=!1,o.isActive=!1,this.cards.value=[...this.cards.value],!this.cards.value.some(l=>l.isActive)&&setTimeout(()=>{this.feedback.notificationOccurred("success"),this.currentState.value="game_over"},w)},w)}createGameCards(e){const t=(l,m)=>({animalType:l,isActive:!0,id:`${l}-${m}`}),s=this.getRandomAnimalTypes(e),o=s.map(l=>t(l,1)),r=s.map(l=>t(l,2));return this.getShuffledArray([...o,...r])}getShuffledArray(e){const t=[...e];for(let s=t.length-1;s>0;s--){const o=Math.floor(Math.random()*(s+1));[t[s],t[o]]=[t[o],t[s]]}return t}getRandomAnimalTypes(e){return this.getShuffledArray(We).slice(0,e)}initGame(){this.resetTimer(),this.openCardsIds.value=[],this.cardsFlipCount.value=0;const{horizontalCardsCount:e,pairsCount:t}=Ye.get(this.gameLevel.value);this.cards.value=this.createGameCards(t),this.horizontalCardsCount.value=e,this.verticalCardsCount.value=this.cards.value.length/e}}const Ue=100,B=5,f="results",q={1:[],2:[],3:[],4:[],5:[],6:[]};class Ve{constructor(){this.canUseCloud=Ne(),this.gameLevelForStatistic=n(1),this.statistic=n({...q}),this.currentLevelStatistic=c(()=>this.statistic.value[this.gameLevelForStatistic.value]??[]),this.averageTimeSpentInSeconds=c(()=>this.getAverageTimeSpentInSeconds()),this.averageCardFlipsCount=c(()=>this.getAverageCardFlipsCount()),this.logger=new _("StatisticService"),this.increaseStatisticLevel=()=>{const e=this.gameLevelForStatistic.value+1;e<=y&&(this.gameLevelForStatistic.value=e)},this.decreaseStatisticLevel=()=>{const e=this.gameLevelForStatistic.value-1;e>0&&(this.gameLevelForStatistic.value=e)},this.resetStatistics=async()=>{this.logger.log("reset game statistic"),this.statistic.value={...q},this.saveStatisticToStorage()},this.addGameStatistic=(e,t)=>{const s=this.statistic.value?.[e]||[];this.statistic.value={...this.statistic.value,[e]:[t,...s].slice(0,Ue)},this.logger.log("added new game statistic",this.statistic.value),this.saveStatisticToStorage()},this.loadStatisticFromStorage()}saveStatisticToStorage(){const e=JSON.stringify(this.statistic.value);if(!this.canUseCloud){localStorage.setItem(f,e),this.logger.log("saved game statistic to local storage");return}xe(f,e,(t,s)=>{if(t){this.logger.error("cannot save to cloud storage",t);return}this.logger.log("saved game statistic to cloud storage",s)})}loadStatisticFromStorage(){if(!this.canUseCloud){const e=localStorage.getItem(f),t=e?JSON.parse(e):[];this.statistic.value=t,this.logger.log("loaded game statistic from local storage",t);return}$e(f,(e,t)=>{e&&this.logger.error("cannot load statistic from cloud storage",e);const s=t?JSON.parse(t):[];this.statistic.value=s,this.logger.log("loaded statistic from cloud storage",s)})}getAverageTimeSpentInSeconds(){if(!this.gameLevelForStatistic.value)return null;const e=this.statistic.value[this.gameLevelForStatistic.value]||[];if(e.length===0)return null;const t=e.slice(0,B).reduce((s,o)=>s+=o.timeSpentInSeconds,0);return Math.floor(t/e.length)}getAverageCardFlipsCount(){if(!this.gameLevelForStatistic.value)return null;const e=this.statistic.value[this.gameLevelForStatistic.value]||[];if(e.length===0)return null;const t=e.slice(0,B).reduce((s,o)=>s+=o.cardFlipsCount,0);return Math.floor(t/e.length)}}const Je={themeBackground:"rgba(228, 223, 249, 1)",themeModalBackground:"rgba(255, 255, 255, 0.8)",themeButtonTextColor:"rgba(255, 255, 255, 1)",themeButtonBackground:"rgba(135, 0, 190, 0.5)",themeTextMainColor:"rgba(25, 17, 45, 1)",themeTextHighlightColor:"rgba(60, 0, 120, 1)",themeShadowColor:"rgba(100, 65, 165, 0.6)",themeBorderColor:"rgba(100, 65, 165, 0.6)"},Ke={themeBackground:"rgba(45, 20, 70, 1)",themeModalBackground:"rgba(35, 25, 55, 1)",themeButtonTextColor:"rgba(245, 230, 255, 1)",themeButtonBackground:"rgba(190, 0, 255, 0.85)",themeTextMainColor:"rgba(245, 230, 255, 1)",themeTextHighlightColor:"rgba(255, 205, 255, 1)",themeShadowColor:"rgba(190, 150, 255, 0.6)",themeBorderColor:"rgba(193, 113, 229, 0.5)"};class Ze{constructor(){this.theme=n(R()),this.themeProperties=c(()=>this.theme.value==="light"?Je:Ke),this.mainButton=x(),this.webApp=Oe(),this.logger=new _("ThemeService"),this.setTheme=e=>{this.theme.value=e},this.toggleTheme=()=>{this.theme.value=this.theme.value==="light"?"dark":"light"},d(()=>{const{themeButtonTextColor:e,themeButtonBackground:t}=this.themeProperties.value;this.mainButton.setParams({text_color:e,color:t}),this.applyTheme(this.themeProperties.value)}),d(()=>{this.logger.log(`theme changed to "${this.theme.value}"`)}),this.webApp.onEvent("themeChanged",()=>{this.logger.log('received "themeChanged" event from Telegram'),this.setTheme(R())})}applyTheme(e){const t=document.documentElement;for(const[s,o]of Object.entries(e)){const r=`--${Re(s)}`;t.style.setProperty(r,o)}}}const Qe=new Ze,E=new Ve,C=new He;d(()=>{C.currentState.value==="game_over"&&z(()=>{const{gameLevel:i,timeSpentInSeconds:e,cardsFlipCount:t}=C;E.addGameStatistic(i.value,{timeSpentInSeconds:e.value,cardFlipsCount:t.value})})});function Xe(){const{currentState:i,menuButtonText:e,mainButtonClickHandler:t}=C,s=i.value;return a(p.Provider,{value:C,children:a(O.Provider,{value:E,children:a(I.Provider,{value:Qe,children:a("div",{class:"game",children:[a("div",{class:"game__spacer"}),a("div",{class:"game__content",children:[s==="menu"&&a(ze,{}),s==="game_over"&&a(Be,{}),(s==="init"||s==="run")&&a(Le,{}),!Fe()&&a("button",{class:"game__fallback-menu",onClick:t,children:e.value})]}),a("div",{class:"game__spacer"})]})})})})}W(a(Xe,{}),document.getElementById("app"));