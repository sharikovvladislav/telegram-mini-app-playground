import{G as _,q as h,o as t,k as b,_ as W,p as u,a as o,O as p,s as z,D as R}from"./vendor-0e751db0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();const V="https://js-headquaters.github.io/beast-memory-game/back-dark-a5bcd3c7.jpg",H="https://js-headquaters.github.io/beast-memory-game/back-light-c1edf369.jpg",U="https://js-headquaters.github.io/beast-memory-game/bear-c55e6894.jpg",J="https://js-headquaters.github.io/beast-memory-game/duck-d06ea39e.jpg",K="https://js-headquaters.github.io/beast-memory-game/cat-3b5927fa.jpg",Y="https://js-headquaters.github.io/beast-memory-game/chicken-bbdea4b0.jpg",Z="https://js-headquaters.github.io/beast-memory-game/dog-05a67f24.jpg",X="https://js-headquaters.github.io/beast-memory-game/fox-6585f4c7.jpg",Q="https://js-headquaters.github.io/beast-memory-game/hedgehog-e27abbd5.jpg",ee="https://js-headquaters.github.io/beast-memory-game/lion-5ad0dad5.jpg",te="https://js-headquaters.github.io/beast-memory-game/monkey-0ff29deb.jpg",ae="https://js-headquaters.github.io/beast-memory-game/owl-48b001a3.jpg",se="https://js-headquaters.github.io/beast-memory-game/panda-e0d3e3fc.jpg",ie="https://js-headquaters.github.io/beast-memory-game/pig-9b1d2126.jpg",re="https://js-headquaters.github.io/beast-memory-game/rabbit-e9a4de30.jpg",ne="https://js-headquaters.github.io/beast-memory-game/sheep-25b90f5a.jpg",oe="https://js-headquaters.github.io/beast-memory-game/turtle-9854d7c8.jpg",le=new Map([["bear",U],["duck",J],["cat",K],["chicken",Y],["dog",Z],["fox",X],["hedgehog",Q],["lion",ee],["monkey",te],["owl",ae],["panda",se],["pig",ie],["rabbit",re],["sheep",ne],["turtle",oe]]),C=_(null),A=_(null),w=_(null);const T=6,y=1e3,I=800,ce=`${I/y}s`;function ue({card:r}){const{openCard:e,isCardOpen:a,showDebugInfo:s}=h(C),{theme:i}=h(w),n=()=>{e(r)},l=g=>`game-card ${a(g)&&"game-card_open"} ${g.isActive&&"game-card_active"}`,c=`--card-flip-animation-time: ${ce}`;return t("div",{style:c,class:l(r),onClick:n,children:[s.value&&t("div",{class:"game-card__animal-type",children:r.animalType}),t("div",{class:"game-card__inner",children:[t("div",{class:"game-card__backing",children:t("img",{class:"game-card__backing-image",src:i.value==="dark"?V:H,alt:"card backing",loading:"eager"})}),t("div",{class:"game-card__animal",children:t("img",{class:"game-card__animal-image",src:le.get(r.animalType),alt:r.animalType})})]})]})}function he(){const{cards:r,horizontalCardsCount:e,verticalCardsCount:a}=h(C);let s=`--horizontal-cards-count: ${e.value};`;return s+=`--vertical-cards-count: ${a.value};`,t("div",{style:s,class:"game-field",children:t("div",{class:"game-field__cards",children:r.value.map(i=>t(ue,{card:i},i.id))})})}function d({title:r,children:e}){return t("div",{class:"card",children:[t("div",{class:"card__title",children:r}),t("div",{class:"card__content",children:e})]})}function v({name:r,value:e}){return t(b,{children:[t("div",{class:"name",children:r}),t("div",{class:"value",children:e||"N/A"})]})}function m({children:r}){return t("div",{class:"key-value-list",children:r})}const B=["Absolutely Brilliant!","Spectacular Achievement!","Exceptional Job!","Mind-Blowing Performance!","Stunning Effort!","Breathtaking Success!","Astonishing Results!","You're Unstoppable!","Phenomenal Work!","Simply Marvelous!"],de=()=>{const r=Math.floor(Math.random()*B.length);return B[r]},me=r=>r.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase();function G({title:r,children:e,className:a,onTitleClick:s}){const i=a?`modal ${a}`:"modal";return t("div",{class:i,children:[t("div",{class:"modal__title",onClick:s,children:r}),t("div",{class:"modal__content",children:e})]})}function ge(){const{timeSpentInSeconds:r,cardsFlipCount:e}=h(C),{averageCardFlipsCount:a,averageTimeSpentInSeconds:s}=h(A),i=W(de());return t(G,{title:i.current,className:"game-over",children:[t(d,{title:"Time spent in second",children:[t(m,{children:t(v,{name:"This Game:",value:r.value})}),t(m,{children:t(v,{name:"You Average:",value:s.value})})]}),t(d,{title:"Card Flips Count",children:[t(m,{children:t(v,{name:"This Game:",value:e.value})}),t(m,{children:t(v,{name:"You Average:",value:a.value})})]})]})}function f({className:r,value:e,increase:a,decrease:s}){const i=r?`value-selector ${r}`:"value-selector";return t("div",{class:i,children:[t("button",{className:"value-selector__button",onClick:s,children:"-"}),t("span",{children:e}),t("button",{className:"value-selector__button",onClick:a,children:"+"})]})}function $(){return window.Telegram.WebApp.MainButton}function ve(){return JSON.stringify(window.Telegram.WebApp,null,2)}function pe(){return window.Telegram.WebApp.platform!=="unknown"}function Ce(){return window.Telegram.WebApp}function j(){return window.Telegram.WebApp.colorScheme}function M(){return!!window.Telegram?.WebApp?.CloudStorage&&window.Telegram.WebApp.isVersionAtLeast("6.9")}function fe(...r){return window.Telegram.WebApp.CloudStorage.setItem(...r)}function Se(...r){return window.Telegram.WebApp.CloudStorage.getItem(...r)}function be(){return window.Telegram.WebApp.HapticFeedback}function Te({gameStatistic:r}){return r.length===0?t("div",{children:"No data for this level"}):t(b,{children:t(m,{children:[t("div",{children:"Time"}),t("div",{children:"Flips"}),r?.map(({timeSpentInSeconds:e,cardFlipsCount:a})=>t(b,{children:[t("div",{children:e}),t("div",{children:a})]}))]})})}const x=o(0),O=u(()=>x.value>3);function ye(){const{averageCardFlipsCount:r,averageTimeSpentInSeconds:e,gameLevelForStatistic:a,increaseStatisticLevel:s,decreaseStatisticLevel:i,resetStatistics:n,currentLevelStatistic:l}=h(A),{toggleTheme:c,theme:g}=h(w),{increaseLevel:D,decreaseLevel:P,gameLevel:E,showDebugInfo:k,toggleShowDebugInfo:F}=h(C);return t(G,{title:"Statistic",className:"statistic",onTitleClick:()=>{x.value+=1},children:[O.value&&t(d,{title:"Settings",children:t(m,{children:[t("div",{children:"Current Level:"}),t(f,{value:E.value,increase:D,decrease:P}),t("div",{children:"Theme:"}),t(f,{value:g.value,increase:c,decrease:c}),t("div",{children:"Show debug info:"}),t(f,{value:k.value?"Yes":"No",increase:F,decrease:F}),t("a",{className:"statistic__reset-link",href:"#",onClick:()=>n(),children:"Reset statistics"})]})}),t(d,{title:"Choose level for statistic",children:t(f,{className:"statistic__level-selector",value:a.value,increase:s,decrease:i})}),t(d,{title:"Game Statistic",children:t(m,{children:[t(v,{name:"Average Time:",value:e.value}),t(v,{name:"Average Flips:",value:r.value})]})}),t(d,{title:"Game history",children:t(Te,{gameStatistic:l.value})}),O.value&&k.value&&t(d,{title:"Debug Info",children:t("div",{className:"statistic__debug",children:ve()})})]})}class L{constructor(e){this.name=e}log(e,a){const s=`[${this.name}] > ${e}`;a?console.log(s,a):console.log(s)}error(e,a){console.error(`[${this.name}] > ${e}`,...[a||null].filter(s=>s))}}const Ie=["bear","owl","cat","chicken","dog","fox","hedgehog","lion","monkey","duck","panda","pig","rabbit","sheep","turtle"],_e=new Map([[1,{horizontalCardsCount:3,pairsCount:3}],[2,{horizontalCardsCount:4,pairsCount:6}],[3,{horizontalCardsCount:4,pairsCount:8}],[4,{horizontalCardsCount:4,pairsCount:10}],[5,{horizontalCardsCount:4,pairsCount:12}],[6,{horizontalCardsCount:5,pairsCount:15}]]);class Ae{constructor(){this.gameLevel=o(1),this.cards=o([]),this.horizontalCardsCount=o(0),this.verticalCardsCount=o(0),this.currentState=o("init"),this.openCardsIds=o([]),this.cardsFlipCount=o(0),this.showDebugInfo=o(!1),this.cardsMap=u(()=>this.cards.value.reduce((e,a)=>(e.set(a.id,a),e),new Map)),this.timeSpentInSeconds=u(()=>{const e=this.startTimestamp.value,s=this.currentTimestamp.value-e;return s>0?Math.floor(s/y):0}),this.canIncreaseLevel=u(()=>this.gameLevel.value<T),this.canDecreaseLevel=u(()=>this.gameLevel.value>1),this.menuButtonText=u(()=>this.currentState.value==="game_over"?this.canIncreaseLevel.value?"Next level":"Play again":this.currentState.value==="menu"?"Close":"Statistic"),this.startTimestamp=o(null),this.currentTimestamp=o(null),this.mainButton=$(),this.logger=new L("GameStateService"),this.feedback=be(),this.restart=()=>{this.currentState.value="init"},this.openCard=e=>{this.currentState.value!=="run"||!e.isActive||this.openCardsIds.value.length>=2||this.isCardOpen(e)||(this.openCardsIds.value=[...this.openCardsIds.value,e.id],this.cardsFlipCount.value+=1,this.logger.log(`opened "${e.animalType}" card`),!(this.openCardsIds.value.length<2)&&this.closeCards())},this.isCardOpen=e=>this.openCardsIds.value.includes(e.id),this.startTimer=()=>{this.timer=setInterval(()=>{this.currentTimestamp.value=Date.now()},y)},this.stopTimer=()=>{clearInterval(this.timer)},this.resetTimer=()=>{this.startTimestamp.value=Date.now()},this.increaseLevel=()=>{const e=this.gameLevel.value+1;e<=T&&(this.gameLevel.value=e,this.initGame())},this.decreaseLevel=()=>{const e=this.gameLevel.value-1;e>0&&(this.gameLevel.value=e,this.initGame())},this.mainButtonClickHandler=()=>{if(this.currentState.value==="game_over"){this.increaseLevel(),this.restart();return}this.currentState.value!=="menu"?this.currentState.value="menu":this.currentState.value="run"},this.toggleShowDebugInfo=()=>{this.showDebugInfo.value=!this.showDebugInfo.value},this.mainButton.show(),this.mainButton.onClick(this.mainButtonClickHandler),p(()=>{this.mainButton.setText(this.menuButtonText.value)}),p(()=>{const e=this.currentState.value;if(this.logger.log(`game state changed to "${e}"`),e==="init"){this.initGame(),this.currentState.value="run";return}if(e==="run"){this.startTimer();return}if(e==="menu"||e==="game_over"){this.stopTimer();return}})}closeCards(){const e=this.cardsMap.value,a=this.openCardsIds.value,s=e.get(a[0]),i=e.get(a[1]),n=s.animalType===i.animalType;setTimeout(()=>{if(this.openCardsIds.value=[],!n){this.logger.log(`card "${s.animalType}" do not match card "${i.animalType}"`);return}this.logger.log(`card "${s.animalType}" match card "${i.animalType}"`),this.feedback.impactOccurred("heavy"),s.isActive=!1,i.isActive=!1,this.cards.value=[...this.cards.value],!this.cards.value.some(c=>c.isActive)&&setTimeout(()=>{this.feedback.notificationOccurred("success"),this.currentState.value="game_over"},I)},I)}createGameCards(e){const a=(c,g)=>({animalType:c,isActive:!0,id:`${c}-${g}`}),s=this.getRandomAnimalTypes(e),i=s.map(c=>a(c,1)),n=s.map(c=>a(c,2));return this.getShuffledArray([...i,...n])}getShuffledArray(e){const a=[...e];for(let s=a.length-1;s>0;s--){const i=Math.floor(Math.random()*(s+1));[a[s],a[i]]=[a[i],a[s]]}return a}getRandomAnimalTypes(e){return this.getShuffledArray(Ie).slice(0,e)}initGame(){this.resetTimer(),this.openCardsIds.value=[],this.cardsFlipCount.value=0;const{horizontalCardsCount:e,pairsCount:a}=_e.get(this.gameLevel.value);this.cards.value=this.createGameCards(a),this.horizontalCardsCount.value=e,this.verticalCardsCount.value=this.cards.value.length/e}}const we=100,N=5;class Le{constructor(){this.gameLevelForStatistic=o(1),this.statistic=o({}),this.currentLevelStatistic=u(()=>this.statistic.value[this.gameLevelForStatistic.value]??[]),this.averageTimeSpentInSeconds=u(()=>this.getAverageTimeSpentInSeconds()),this.averageCardFlipsCount=u(()=>this.getAverageCardFlipsCount()),this.logger=new L("StatisticService"),this.increaseStatisticLevel=()=>{const e=this.gameLevelForStatistic.value+1;e<=T&&(this.gameLevelForStatistic.value=e)},this.decreaseStatisticLevel=()=>{const e=this.gameLevelForStatistic.value-1;e>0&&(this.gameLevelForStatistic.value=e)},this.resetStatistics=async()=>{this.statistic.value={};try{await this.setItemToCloudStorage("results",JSON.stringify(this.statistic.value)),this.logger.log("statistics was reset")}catch{this.logger.error("error during statistics reset")}},this.addGameStatistic=async(e,a)=>{this.statistic.value={...this.statistic.value,[e]:[a,...this.statistic.value?.[e]||[]].slice(0,we)};try{await this.setItemToCloudStorage("results",JSON.stringify(this.statistic.value)),this.logger.log("added new game statistic",this.statistic.value)}catch{this.logger.error("error happened during adding new game statistic")}},this.loadGameStatistic=async()=>{try{const e=JSON.parse(await this.getItemFromCloudStorage("results")||"{}");this.statistic.value=e,this.logger.log("loaded game statistic from cloud storage",e)}catch{this.logger.error("error happened during loading game statistic from cloud storage")}},this.loadGameStatistic()}getAverageTimeSpentInSeconds(){if(!this.gameLevelForStatistic.value)return null;const e=this.statistic.value[this.gameLevelForStatistic.value]||[];if(e.length===0)return null;const a=e.slice(0,N).reduce((s,i)=>s+=i.timeSpentInSeconds,0);return Math.floor(a/e.length)}getAverageCardFlipsCount(){if(!this.gameLevelForStatistic.value)return null;const e=this.statistic.value[this.gameLevelForStatistic.value]||[];if(e.length===0)return null;const a=e.slice(0,N).reduce((s,i)=>s+=i.cardFlipsCount,0);return Math.floor(a/e.length)}async setItemToCloudStorage(e,a){if(!M()){localStorage.setItem(e,a);return}return new Promise((s,i)=>{fe(e,a,(n,l)=>{if(n){this.logger.error(">> error happened during SET",n),i(n);return}s(l)})})}async getItemFromCloudStorage(e){return M()?new Promise((a,s)=>{const i=setTimeout(()=>{a(localStorage.getItem(e))},3e3);Se(e,(n,l)=>{if(clearTimeout(i),n){console.error(">> omg error happened during CloudStorage GET",n),s(n);return}a(l)})}):localStorage.getItem(e)}}const ke={themeBackground:"rgba(228, 223, 249, 1)",themeModalBackground:"rgba(255, 255, 255, 0.8)",themeButtonTextColor:"rgba(255, 255, 255, 1)",themeButtonBackground:"rgba(135, 0, 190, 0.5)",themeTextMainColor:"rgba(25, 17, 45, 1)",themeTextHighlightColor:"rgba(60, 0, 120, 1)",themeShadowColor:"rgba(100, 65, 165, 0.6)",themeBorderColor:"rgba(100, 65, 165, 0.6)"},Fe={themeBackground:"rgba(45, 20, 70, 1)",themeModalBackground:"rgba(35, 25, 55, 1)",themeButtonTextColor:"rgba(245, 230, 255, 1)",themeButtonBackground:"rgba(190, 0, 255, 0.85)",themeTextMainColor:"rgba(245, 230, 255, 1)",themeTextHighlightColor:"rgba(255, 205, 255, 1)",themeShadowColor:"rgba(190, 150, 255, 0.6)",themeBorderColor:"rgba(193, 113, 229, 0.5)"};class Be{constructor(){this.theme=o(j()),this.themeProperties=u(()=>this.theme.value==="light"?ke:Fe),this.mainButton=$(),this.webApp=Ce(),this.logger=new L("ThemeService"),this.setTheme=e=>{this.theme.value=e},this.toggleTheme=()=>{this.theme.value=this.theme.value==="light"?"dark":"light"},p(()=>{const{themeButtonTextColor:e,themeButtonBackground:a}=this.themeProperties.value;this.mainButton.setParams({text_color:e,color:a}),this.applyTheme(this.themeProperties.value)}),p(()=>{this.logger.log(`theme changed to "${this.theme.value}"`)}),this.webApp.onEvent("themeChanged",()=>{this.logger.log('received "themeChanged" event from Telegram'),this.setTheme(j())})}applyTheme(e){const a=document.documentElement;for(const[s,i]of Object.entries(e)){const n=`--${me(s)}`;a.style.setProperty(n,i)}}}const je=new Be,q=new Le,S=new Ae;p(()=>{S.currentState.value==="game_over"&&z(()=>{const{gameLevel:r,timeSpentInSeconds:e,cardsFlipCount:a}=S;q.addGameStatistic(r.value,{timeSpentInSeconds:e.value,cardFlipsCount:a.value})})});function Me(){const{currentState:r,menuButtonText:e,mainButtonClickHandler:a}=S,s=r.value;return t(C.Provider,{value:S,children:t(A.Provider,{value:q,children:t(w.Provider,{value:je,children:t("div",{class:"game",children:[t("div",{class:"game__spacer"}),t("div",{class:"game__content",children:[s==="menu"&&t(ye,{}),s==="game_over"&&t(ge,{}),(s==="init"||s==="run")&&t(he,{}),!pe()&&t("button",{class:"game__fallback-menu",onClick:a,children:e.value})]}),t("div",{class:"game__spacer"})]})})})})}R(t(Me,{}),document.getElementById("app"));
