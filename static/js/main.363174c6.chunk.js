(this.webpackJsonpsrichka=this.webpackJsonpsrichka||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.2fa68b3e.svg"},function(e,t,n){e.exports=n.p+"static/media/background_looping.b3ad5e3b.mp3"},function(e,t,n){e.exports=n.p+"static/media/right_answer.cd582cf5.mp3"},function(e,t,n){e.exports=n.p+"static/media/wrong_answer.2f7d4301.mp3"},function(e,t,n){e.exports=n.p+"static/media/next_level.c3a5ce0d.mp3"},function(e,t,n){e.exports=n.p+"static/media/menu.f39fae57.mp3"},,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(3),c=n.n(s),r=(n(20),n(21),n(4)),l=n(5),i=n(13),u=n(6),m=n(1),d=n(14),h=n(7),v=n.n(h),f=function(e){return console.info("Header props",e),o.a.createElement("div",{className:"game_Header"},o.a.createElement("div",{className:"game_Control",onClick:e.handleReset},o.a.createElement("i",{className:"fa fa-refresh"})),o.a.createElement("div",{className:"game_Level"},o.a.createElement("img",{src:v.a,className:"game_Logo",alt:"logo"}),o.a.createElement("h2",null,"\u041d\u0438\u0432\u043e: ",e.level)),o.a.createElement("div",{className:"game_Score"},e.score))},g=n(8),p=n.n(g),w=n(9),E=n.n(w),_=n(10),k=n.n(_),b=n(11),S=n.n(b),L=n(12),y=n.n(L),N=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}},C={consonants:["\u0431","\u0432","\u0433","\u0434","\u0436","\u0439","\u043a","\u043b","\u043c","\u043d","\u043f","\u0440","\u0441","\u0442","\u0444","\u0445","\u0446","\u0447","\u0448","\u0449","\u044e","\u044f"],vowels:["\u0430","\u0435","\u0438","\u043e","\u0443","\u044a"]},x=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){n.calculateSrichka(),n.background_music=document.getElementsByClassName("audio-element")[0]},n.clickOnIntro=function(e){n.setState({hideIntro:!0}),n.background_music.play()},n.reset=function(){console.log("reset"),n.setState({currentLevel:1,score:0,hideIntro:!1}),n.menu_sound.play()},n.calculateSrichka=function(){console.info("calculateSrichka this.state.currentLevel",n.state.currentLevel);var e=n.state.levels[n.state.currentLevel].model;console.info("calculateSrichka model",e),n.setAnimationForTime("game_Srichka","game_anim_Flyin",1e3),e.vowels=e.vowels<=C.vowels.length?e.vowels:C.vowels.length,e.consonants=e.consonants<=C.consonants.length?e.consonants:C.consonants.length;for(var t=[];t.length<e.vowels;){var a=C.vowels[Math.floor(Math.random()*C.vowels.length)];if(e.uniqueVowels){do{a=C.vowels[Math.floor(Math.random()*C.vowels.length)]}while(-1!==t.indexOf(a));t.push(a)}else t.push(a)}console.info("calculateSrichka vowels",t);for(var o=[];o.length<e.consonants;){var s=C.consonants[Math.floor(Math.random()*C.consonants.length)];if(e.uniqueConsonants){do{s=C.consonants[Math.floor(Math.random()*C.consonants.length)]}while(-1!==o.indexOf(s));o.push(s)}else o.push(s)}console.info("calculateSrichka consonants",o);var c=[].concat(t,o);console.info("calculateSrichka allLetters",c),N(c),console.info("calculateSrichka allLetters (affter Shuffle)",c),n.setState({srichka:c.join("")})},n.answerCorrect=function(){console.log("answerCorrect"),n.setAnimationForTime("game_Right","game_anim_Press",1e3);var e=n.state.levels[n.state.currentLevel].increase,t=n.state.score+e;if(t>=n.state.levels[n.state.currentLevel].maxscore)return n.nextLevel(),n.setState({score:t}),!0;n.setState({score:t}),n.calculateSrichka(),n.button_right_sound.play()},n.answerWrong=function(){console.log("answerWrong"),n.setAnimationForTime("game_Wrong","game_anim_Press",1e3);var e=n.state.levels[n.state.currentLevel].decrease,t=n.state.score-e;t=t<0?0:t,n.setState({score:t}),n.calculateSrichka(),n.button_wrong_sound.play()},n.setAnimationForTime=function(e,t,n){document.getElementsByClassName(e)[0].classList.add(t),setTimeout((function(){document.getElementsByClassName(e)[0].classList.remove(t)}),n)},n.nextLevel=function(){console.log("nextLevel"),n.setState({currentLevel:n.state.currentLevel+1}),setTimeout((function(e){e.calculateSrichka()}),50,Object(m.a)(n)),n.nextlevel_sound.play()},n.state={score:0,srichka:"\u0413\u0416\u041c\u042a\u0426",currentLevel:1,levels:{1:{increase:10,decrease:5,model:{vowels:1,consonants:1,uniqueVowels:!0,uniqueConsonants:!1},maxscore:100},2:{increase:20,decrease:10,model:{vowels:1,consonants:2,uniqueVowels:!1,uniqueConsonants:!0},maxscore:500},3:{increase:50,decrease:10,model:{vowels:2,consonants:3,uniqueVowels:!0,uniqueConsonants:!0}}},hideIntro:!1,anim_Srichka:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;console.info("Game state",this.state);var t="game_Holder game_Level".concat(this.state.currentLevel);return o.a.createElement("div",{className:t},o.a.createElement("div",{className:"game_Wallpaper"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)),o.a.createElement("div",{className:"game_Container"},o.a.createElement(f,{score:this.state.score,handleReset:this.reset,level:this.state.currentLevel}),o.a.createElement("div",{className:this.anim_Srichka?"game_Srichka game_anim_Bounce":"game_Srichka"},o.a.createElement("span",null,this.state.srichka)),o.a.createElement("div",{className:"game_ButtonsHolder"},o.a.createElement("button",{className:"game_Right",onClick:this.answerCorrect},"\u0412\u042f\u0420\u041d\u041e"),o.a.createElement("button",{className:"game_Wrong",onClick:this.answerWrong},"\u0413\u0420\u0415\u0428\u041d\u041e"))),this.state.hideIntro?null:o.a.createElement("div",{className:"game_Intro"},o.a.createElement("h1",null,"\u0421\u0440\u0438\u0447\u043a\u0430"),o.a.createElement("p",null,'"\u0421\u0440\u0438\u0447\u043a\u0430" \u0435 \u0438\u0433\u0440\u0430/\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u043d\u0430 \u0441\u0440\u0438\u0447\u043a\u0438 \u0437\u0430 \u0443\u043b\u0435\u0441\u043d\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u044a\u0440\u0432\u043e\u043b\u0430\u0446\u0438\u0442\u0435 \u0432 \u0438\u0437\u0433\u043e\u0432\u0430\u0440\u044f\u043d\u0435\u0442\u043e \u0438\u043c. ',o.a.createElement("br",null),"\u041f\u0440\u0430\u0432\u0438\u043b\u0430\u0442\u0430 \u0441\u0430 \u043c\u043d\u043e\u0433\u043e \u043b\u0435\u0441\u043d\u0438:",o.a.createElement("ul",null,o.a.createElement("li",null,"\u0418\u043c\u0430\u043c\u0435 (\u0437\u0430 \u0441\u0435\u0433\u0430) 3 \u043d\u0438\u0432\u0430 \u043d\u0430 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442 - \u0437\u0430\u043f\u043e\u0447\u0432\u0430 \u0441\u0435 \u0441 \u0434\u0432\u0443\u0431\u0443\u043a\u0432\u0435\u043d\u0438 \u0441\u0440\u0438\u0447\u043a\u0438 \u043a\u0430\u0442\u043e \u0432\u0441\u044f\u043a\u043e \u0441\u043b\u0435\u0434\u0432\u0430\u0449\u043e \u043d\u0438\u0432\u043e \u0435 \u043f\u043e-\u0441\u043b\u043e\u0436\u043d\u043e"),o.a.createElement("li",null,'\u0421\u043b\u0435\u0434 \u0438\u0437\u0433\u043e\u0432\u0430\u0440\u044f\u043d\u0435\u0442\u043e \u043d\u0430 \u0441\u0440\u0438\u0447\u043a\u0430\u0442\u0430 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u043d\u0430\u0442\u0438\u0441\u043a\u0430 \u0431\u0443\u0442\u043e\u043d\u0430 "\u0412\u042f\u0420\u041d\u041e" \u0438\u043b\u0438 "\u0413\u0420\u0415\u0428\u041d\u041e", \u0441 \u043a\u043e\u0435\u0442\u043e \u0441\u0435 \u0443\u0432\u0435\u043b\u0438\u0447\u0430\u0432\u0430\u0442 \u0442\u043e\u0447\u043a\u0438\u0442\u0435 \u0438\u043b\u0438 \u0441\u044a\u043e\u0442\u0432\u0435\u0442\u043d\u043e \u043d\u0430\u043c\u0430\u043b\u044f\u0432\u0430\u0442.'),o.a.createElement("li",null,"\u041f\u0440\u0438 \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u0442\u043e\u0447\u043a\u0438\u0442\u0435 \u0437\u0430 \u0441\u043b\u0435\u0434\u0432\u0430\u0449\u043e \u043d\u0438\u0432\u043e, \u0442\u043e \u0438\u0433\u0440\u0430\u0447\u0430 \u043f\u0440\u0435\u043c\u0438\u043d\u0430\u0432\u0430 \u0432 \u043d\u0435\u0433\u043e.")),'\u0416\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0438\u044f\u0442\u043d\u0438 \u043c\u043e\u043c\u0435\u043d\u0442\u0438 \u0441\u044a\u0441 "\u0421\u0440\u0438\u0447\u043a\u0430" \ud83d\ude1c'),o.a.createElement("button",{onClick:this.clickOnIntro},"\u0421\u0422\u0410\u0420\u0422")),o.a.createElement("audio",{className:"audio-element",loop:!0},o.a.createElement("source",{src:p.a,type:"audio/mpeg"})),o.a.createElement("audio",{ref:function(t){e.button_right_sound=t}},o.a.createElement("source",{src:E.a,type:"audio/mpeg"})),o.a.createElement("audio",{ref:function(t){e.button_wrong_sound=t}},o.a.createElement("source",{src:k.a,type:"audio/mpeg"})),o.a.createElement("audio",{ref:function(t){e.nextlevel_sound=t}},o.a.createElement("source",{src:S.a,type:"audio/mpeg"})),o.a.createElement("audio",{ref:function(t){e.menu_sound=t}},o.a.createElement("source",{src:y.a,type:"audio/mpeg"})))}}]),t}(a.Component);var W=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(x,null))},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(W,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/srichka",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/srichka","/service-worker.js");M?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(t,e)}))}}()}],[[15,1,2]]]);
//# sourceMappingURL=main.363174c6.chunk.js.map