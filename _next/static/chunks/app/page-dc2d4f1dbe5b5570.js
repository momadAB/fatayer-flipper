(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6322:function(e,s,a){Promise.resolve().then(a.bind(a,5287))},5287:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return b}});var i=a(7437);a(3145);var r=a(2265),n=a(9123),t=a.n(n);function c(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=RegExp("\\.0+$|(?<=\\.[0-9]*[1-9])0+$"),i=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"B"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}].findLast(s=>e>=s.value);return i?(e/i.value).toFixed(s).replace(a,"").concat(i.symbol):"0"}var l=function(e){let{buyablesObjects:s,setBuyablesObjects:a,buyable:r,cashCount:n,setCashCount:t,fatayerPerClick:l,setFatayerPerClick:o,fatayerPerSecond:d,setFatayerPerSecond:p,fatayerPrice:u,setFatayerPrice:m,fatayerMultiplier:f,setFatayerMultiplier:x}=e,{price:g,id:h,description:I,name:y}=r;function j(){let e=!1;return s.forEach(s=>{s.id===h&&s.disabled&&(e=!0)}),e}return(0,i.jsxs)("div",{className:"mt-2",children:[(0,i.jsx)("p",{className:"font-bold text-green-500",children:y}),(0,i.jsx)("p",{children:I}),(0,i.jsx)("p",{children:r.count}),(0,i.jsx)("button",{className:"text-black p-2 rounded-lg ".concat(r.goldenThresholds.includes(r.count)?"bg-yellow-500":j()?"bg-gray-500":"bg-green-500"),onClick:()=>{!j()&&(n>=r.price&&!r.disabled?(t(n-r.price),x(f+r.fatayerMultiplier),o(l+r.perClickIncrease),m(u,r.priceIncrease),p(d+r.passiveIncomeIncrease),s.forEach(e=>{e.id===h&&(e.singleUpgrade&&(e.disabled=!0),e.price=(1.07*e.price).toFixed(2),e.count++,a(s))}),r.goldenThresholds.includes(r.count)&&s.forEach(e=>{e.id===h&&(e.price=(5*e.price).toFixed(2),e.perClickIncrease+=e.initialPerClickIncrease,e.passiveIncomeIncrease+=e.initialPassiveIncomeIncrease,a(s))})):console.log("You can't afford ".concat(r.name,"!")))},children:j()?"SOLD OUT":"".concat(c(r.price)," KWD")})]})},o=function(e){let{cashCount:s,setCashCount:a,setFatayerPrice:r,fatayerPerClick:n,setFatayerPerClick:t,fatayerPerSecond:c,setFatayerPerSecond:o,fatayerPrice:d,buyablesObjects:p,setBuyablesObjects:u,fatayerMultiplier:m,setFatayerMultiplier:f}=e;return(0,i.jsxs)("div",{className:"flex flex-col justify-center items-center p-3 text-center",children:[(0,i.jsx)("h1",{className:"bg-black w-full",children:"UPGRADES"}),p.map(e=>(0,i.jsx)(l,{cashCount:s,setCashCount:a,buyable:e,buyablesObjects:p,setBuyablesObjects:u,fatayerPerClick:n,setFatayerPerClick:t,fatayerPerSecond:c,setFatayerPerSecond:o,fatayerPrice:d,setFatayerPrice:r,fatayerMultiplier:m,setFatayerMultiplier:f},e.id))]})},d=function(e){let{achievementsObjects:s,setAchievementsObjects:a,achievement:r,cashCount:n,setCashCount:t,fatayerPerClick:c,setFatayerPerClick:l,fatayerPerSecond:o,setFatayerPerSecond:d,fatayerPrice:p,setFatayerPrice:u,fatayerMultiplier:m,setFatayerMultiplier:f,clicksDone:x,setClicksDone:g}=e,{name:h,description:I,id:y,priceAddition:j,clickCount:b}=r;function v(){return!C()&&x>=b}function C(){return r.wasClaimed}return(0,i.jsxs)("div",{className:"mt-2",children:[(0,i.jsx)("p",{className:"font-bold text-green-500",children:h}),(0,i.jsx)("p",{children:I}),(0,i.jsx)("button",{className:"text-black p-2 rounded-lg ".concat(v()?"bg-yellow-500":"bg-gray-500"),onClick:()=>{v()&&(u(p+j),s.forEach(e=>{e.id===y&&(e.wasClaimed=!0,a(s))}))},children:C()?"CLAIMED":"Claim"})]})},p=function(e){let{cashCount:s,setCashCount:a,setFatayerPrice:r,fatayerPerClick:n,setFatayerPerClick:t,fatayerPerSecond:c,setFatayerPerSecond:l,fatayerPrice:o,buyablesObjects:p,setBuyablesObjects:u,fatayerMultiplier:m,setFatayerMultiplier:f,achievementsObjects:x,setAchievementsObjects:g,clicksDone:h,setClicksDone:I}=e;return(0,i.jsxs)("div",{className:"flex flex-col justify-center items-center p-3 text-center",children:[(0,i.jsx)("h1",{className:"bg-black w-full",children:"ACHIEVEMENTS"}),x.map(e=>(0,i.jsx)(d,{cashCount:s,setCashCount:a,achievement:e,buyablesObjects:p,setBuyablesObjects:u,fatayerPerClick:n,setFatayerPerClick:t,fatayerPerSecond:c,setFatayerPerSecond:l,fatayerPrice:o,setFatayerPrice:r,fatayerMultiplier:m,setFatayerMultiplier:f,achievementsObjects:x,setAchievementsObjects:g,clicksDone:h,setClicksDone:I},e.id))]})},u=a(1434),m=a(2280),f=a.n(m),x=function(e){let{fatayerCount:s,fatayerPerClick:a,cashCount:n,bakeFatayer:t}=e,[c,l]=(0,r.useState)(!1),{transform:o,opacity:d}=(0,u.q_)({opacity:1,transform:"perspective(600px) rotateX(".concat(c?360:0,"deg)"),config:{mass:15,tension:800,friction:80}});return(0,i.jsx)("div",{className:"scale-150 hover:scale-[2.0] transition-all",children:(0,i.jsx)("span",{className:"grid grid-rows-2 grid-cols-2 animate-gelatine",onClick:()=>{l(e=>!e),t()},children:(0,i.jsxs)("div",{className:f().container,children:[(0,i.jsx)(u.a.div,{className:"".concat(f().c," ").concat(f().back),style:{opacity:d.to(e=>1-e),transform:o}}),(0,i.jsx)(u.a.div,{className:"".concat(f().c," ").concat(f().front),style:{opacity:d,transform:o,rotateX:"180deg"}})]})})})},g=[{price:5,id:1,name:"Kneading Station",passiveIncomeIncrease:0,initialPassiveIncomeIncrease:0,perClickIncrease:1,initialPerClickIncrease:1,priceIncrease:0,count:0,multiplier:1,fatayerMultiplier:0,singleUpgrade:!1,disabled:!1,upgradePrice:500,upgradedMultiplier:5,goldenThresholds:[10,25,100,1e3],get description(){return"Increases fatayer per click by ".concat(this.perClickIncrease)}},{price:15,id:350,name:"Cookeez Toy Oven",passiveIncomeIncrease:1,initialPassiveIncomeIncrease:1,perClickIncrease:0,initialPerClickIncrease:0,priceIncrease:0,count:0,multiplier:1,fatayerMultiplier:0,singleUpgrade:!1,disabled:!1,upgradePrice:5e3,upgradedMultiplier:20,goldenThresholds:[10,25,100,1e3],get description(){return"Bakes ".concat(this.passiveIncomeIncrease," fatayer per second")}},{price:100,id:2,name:"Spice Rack Expansion",passiveIncomeIncrease:0,initialPassiveIncomeIncrease:0,perClickIncrease:5,initialPerClickIncrease:5,priceIncrease:0,count:0,multiplier:1,fatayerMultiplier:0,singleUpgrade:!1,disabled:!1,upgradePrice:5e3,upgradedMultiplier:20,goldenThresholds:[10,25,100,1e3],get description(){return"Increases fatayer per click by ".concat(this.perClickIncrease)}},{price:1e3,id:3,name:"Brick Oven",passiveIncomeIncrease:5,initialPassiveIncomeIncrease:5,perClickIncrease:0,initialPerClickIncrease:0,count:0,multiplier:1,fatayerMultiplier:0,singleUpgrade:!1,disabled:!1,upgradePrice:5e3,upgradedMultiplier:20,goldenThresholds:[10,25,100,1e3],get description(){return"Bakes ".concat(this.passiveIncomeIncrease," fatayer per second")}},{price:2e3,id:5329,name:"Dough Mixer 3000",passiveIncomeIncrease:0,initialPassiveIncomeIncrease:0,perClickIncrease:0,initialPerClickIncrease:0,count:0,multiplier:1,fatayerMultiplier:1,singleUpgrade:!0,disabled:!1,goldenThresholds:[],get description(){return"Multiplies fatayer per click by ".concat(this.fatayerMultiplier+1)}},{price:3e3,id:4,name:"Golden Rolling Pin",passiveIncomeIncrease:10,initialPassiveIncomeIncrease:10,perClickIncrease:0,initialPerClickIncrease:0,count:0,multiplier:1,fatayerMultiplier:0,singleUpgrade:!1,disabled:!1,upgradePrice:7500,upgradedMultiplier:25,goldenThresholds:[10,25,100,1e3],get description(){return"Rolls ".concat(this.passiveIncomeIncrease," fatayer dough per second")}},{price:1e4,id:5,name:"Master Baker's Apron",passiveIncomeIncrease:40,initialPassiveIncomeIncrease:40,perClickIncrease:0,initialPerClickIncrease:0,count:0,multiplier:1,fatayerMultiplier:0,singleUpgrade:!1,disabled:!1,upgradePrice:1e4,upgradedMultiplier:30,goldenThresholds:[10,25,100,1e3],get description(){return"Adds ".concat(this.passiveIncomeIncrease," fatayer per second")}},{price:4e4,id:6,name:"Fatayer Assembly Line",passiveIncomeIncrease:100,initialPassiveIncomeIncrease:100,perClickIncrease:0,initialPerClickIncrease:0,count:0,multiplier:1,fatayerMultiplier:0,singleUpgrade:!1,disabled:!1,upgradePrice:15e3,upgradedMultiplier:40,goldenThresholds:[10,25,100,1e3],get description(){return"Produces ".concat(this.passiveIncomeIncrease," fatayer per second on an automated line")}},{price:2e5,id:7,name:"The Sultan's Oven",passiveIncomeIncrease:400,initialPassiveIncomeIncrease:400,perClickIncrease:0,initialPerClickIncrease:0,count:0,multiplier:1,fatayerMultiplier:0,singleUpgrade:!1,disabled:!1,upgradePrice:25e3,upgradedMultiplier:50,goldenThresholds:[10,25,100,1e3],get description(){return"Bakes ".concat(this.passiveIncomeIncrease," royal fatayer per second")}},{price:1337420,id:8,name:"Magic Dough",passiveIncomeIncrease:6543,initialPassiveIncomeIncrease:6543,perClickIncrease:0,initialPerClickIncrease:0,count:0,multiplier:1,fatayerMultiplier:0,singleUpgrade:!1,disabled:!1,upgradePrice:5e4,upgradedMultiplier:100,goldenThresholds:[10,25,100,1e3],get description(){return"Magically creates ".concat(c(this.passiveIncomeIncrease)," fatayer per second")}},{price:38e6,id:8,name:"Fatayermancer",passiveIncomeIncrease:44e3,initialPassiveIncomeIncrease:44e3,perClickIncrease:0,initialPerClickIncrease:0,count:0,multiplier:1,fatayerMultiplier:0,singleUpgrade:!1,disabled:!1,upgradePrice:5e4,upgradedMultiplier:100,goldenThresholds:[10,25,100,1e3],get description(){return"Resurrects ".concat(c(this.passiveIncomeIncrease)," fatayer per second")}},{price:5e8,id:8,name:"Abdullah",passiveIncomeIncrease:22e4,initialPassiveIncomeIncrease:22e4,perClickIncrease:0,initialPerClickIncrease:0,count:0,multiplier:1,fatayerMultiplier:0,singleUpgrade:!1,disabled:!1,upgradePrice:5e4,upgradedMultiplier:100,goldenThresholds:[10,25,100,1e3],get description(){return"(Ex) Owner of the greatest fatayer place in town. Makes ".concat(c(this.passiveIncomeIncrease)," fatayer per second")}},{price:5e9,id:8,name:"Automated Factory",passiveIncomeIncrease:1e6,initialPassiveIncomeIncrease:1e6,perClickIncrease:0,initialPerClickIncrease:0,count:0,multiplier:1,fatayerMultiplier:0,singleUpgrade:!1,disabled:!1,upgradePrice:5e4,upgradedMultiplier:100,goldenThresholds:[10,25,100,1e3],get description(){return"Makes ".concat(c(this.passiveIncomeIncrease)," fatayer per second")}},{price:1e11,id:8,name:"Moon Colony",passiveIncomeIncrease:5e6,initialPassiveIncomeIncrease:5e6,perClickIncrease:0,initialPerClickIncrease:0,count:0,multiplier:1,fatayerMultiplier:0,singleUpgrade:!1,disabled:!1,upgradePrice:5e4,upgradedMultiplier:100,goldenThresholds:[10,25,100,1e3],get description(){return"Makes ".concat(c(this.passiveIncomeIncrease)," fatayer per second")}}],h=[{id:1,name:"Baby Steps",priceAddition:1,clickCount:50,wasClaimed:!1,get description(){return"Click ".concat(this.clickCount," times. Increases fatayer price.")}},{id:2,name:"Get Sponsored on Talabat",priceAddition:1,clickCount:100,wasClaimed:!1,get description(){return"Click ".concat(this.clickCount," times. Increases fatayer price.")}},{id:3,name:"Put Up A Billboard Ad",priceAddition:1,clickCount:1e3,wasClaimed:!1,get description(){return"Click ".concat(this.clickCount," times. Increases fatayer price.")}},{id:4,name:"Get Government Subsidies",priceAddition:1,clickCount:5e3,wasClaimed:!1,get description(){return"Click ".concat(this.clickCount," times. Increases fatayer price.")}}],I=function(){return(0,i.jsxs)("div",{className:"background -z-10  ",children:[(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{})]})};let y=(0,a(166).default)(()=>a.e(401).then(a.t.bind(a,6401,23)),{loadableGenerated:{webpack:()=>[6401]},ssr:!1});var j=function(){let[e,s]=(0,r.useState)(0),[a,n]=(0,r.useState)(0),[l,d]=(0,r.useState)(1),[u,m]=(0,r.useState)(1),[f,j]=(0,r.useState)(0),[b,v]=(0,r.useState)(g),[C,k]=(0,r.useState)(h),[P,M]=(0,r.useState)(1),[N,T]=(0,r.useState)(0);function F(){s(e+f),n(a+l*f)}function S(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return console.log(e),parseFloat(c(e,s)).toFixed(3)}function w(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=c(e,s);return a.replace(parseFloat(a),"")}return(0,r.useEffect)(()=>{let e=setInterval(()=>{F()},1e3);return()=>{clearInterval(e)}},[F]),(0,i.jsxs)("div",{className:"".concat(t().className," text-xl"),children:[(0,i.jsx)(I,{}),(0,i.jsxs)("div",{className:"m-auto h-svh grid grid-rows-2 grid-cols-4",children:[(0,i.jsxs)("div",{className:"h-full w-full row-span-2 col-span-3 flex flex-wrap-reverse justify-center items-center relative",children:[(0,i.jsx)(x,{fatayerCount:e,fatayerPerClick:u,cashCount:a,bakeFatayer:function(){s(e+u*P),n(a+l*u*P),T(N+1)}}),(0,i.jsxs)("div",{className:"text-left absolute top-0 left-0 select-none flex",children:[(0,i.jsx)("h1",{className:"mr-1",children:"FATAYERS BAKED: "}),(0,i.jsx)(y,{includeComma:!0,animateToNumber:e,configs:[{mass:1,tension:220,friction:100}]})]}),(0,i.jsxs)("div",{className:"text-left absolute top-4 left-0 select-none flex",children:[(0,i.jsx)("h1",{className:"mr-1",children:"FATAYER PER CLICK: "}),(0,i.jsx)(y,{includeComma:!0,animateToNumber:u*P,configs:[{mass:1,tension:220,friction:100}]})]}),(0,i.jsxs)("div",{className:"text-left absolute top-8 left-0 select-none flex",children:[(0,i.jsx)("h1",{className:"mr-1",children:"FATAYER PRICE: "}),(0,i.jsx)(y,{includeComma:!0,animateToNumber:S(l),configs:[{mass:1,tension:220,friction:100}]}),(0,i.jsxs)("h1",{className:"ml-1",children:[w(l)," KWD"]})]}),(0,i.jsxs)("div",{className:"absolute top-8 select-none ".concat(function(e){switch(e){case"k":return"text-green-300";case"M":return"text-blue-300";case"B":return"text-purple-300";case"T":return"text-orange-300";case"P":return"text-yellow-300";case"E":return"text-red-400";default:return"text-white"}}(w(a))),children:[(0,i.jsxs)("div",{className:"flex m-auto justify-center text-7xl",children:[(0,i.jsx)(y,{includeComma:!0,animateToNumber:S(a),configs:[{mass:1,tension:220,friction:100}]}),(0,i.jsx)("h1",{children:w(a)}),(0,i.jsx)("h2",{className:"ml-3",children:"KWD"})]}),(0,i.jsxs)("div",{className:"text-center select-none flex text-xl m-auto basis-full justify-center",children:[(0,i.jsx)("h1",{className:"mr-1",children:"FATAYER PER SECOND: "}),(0,i.jsx)(y,{includeComma:!0,animateToNumber:f,configs:[{mass:1,tension:220,friction:100}]})]})]}),(0,i.jsx)("h1",{className:"absolute select-none bottom-0",children:"Created by Mohammad Baqer. KWD stands for Kuwaiti Dinar."})]}),(0,i.jsx)("div",{className:"bg-gradient-to-r from-gray-950 to-gray-900 h-full w-full flex flex-col overflow-scroll border-4 border-fuchsia-700 opacity-80",children:(0,i.jsx)(o,{cashCount:a,setCashCount:n,fatayerPerClick:u,setFatayerPerClick:m,fatayerPerSecond:f,setFatayerPerSecond:j,fatayerPrice:l,setFatayerPrice:d,buyablesObjects:b,setBuyablesObjects:v,fatayerMultiplier:P,setFatayerMultiplier:M})}),(0,i.jsx)("div",{className:"bg-gradient-to-r from-gray-950 to-gray-900 h-full w-full flex flex-col overflow-scroll border-4 border-fuchsia-700 opacity-80",children:(0,i.jsx)(p,{cashCount:a,setCashCount:n,fatayerPerClick:u,setFatayerPerClick:m,fatayerPerSecond:f,setFatayerPerSecond:j,fatayerPrice:l,setFatayerPrice:d,buyablesObjects:b,setBuyablesObjects:v,fatayerMultiplier:P,setFatayerMultiplier:M,achievementsObjects:C,setAchievementsObjects:k,clicksDone:N,setClicksDone:T})})]})]})};function b(){return(0,i.jsx)(j,{})}},2280:function(e){e.exports={c:"styles_c__AxVKV",front:"styles_front__RLW7a",back:"styles_back__VJf9g",upgrades:"styles_upgrades__leJGt",achievements:"styles_achievements__WaLeG",container:"styles_container__tDqZ2"}}},function(e){e.O(0,[186,522,971,117,744],function(){return e(e.s=6322)}),_N_E=e.O()}]);