import{r as M,j as i,l as J,a as X,i as Q,L as Y}from"./index-C8h1KHN1.js";import{e as K,c as Z,m as h,a as ee,b as R,d as ae,S as V,A as G,f as W}from"./autoplay-CprMhqno.js";const te=({toNumber:o,children:e,styles:j})=>{const[d,g]=M.useState(0),[c,k]=M.useState(!1),f=M.useRef(null);return M.useEffect(()=>{const b=new IntersectionObserver(([w])=>{k(w.isIntersecting)},{root:null,rootMargin:"0px",threshold:.1});return f.current&&b.observe(f.current),()=>{f.current&&b.unobserve(f.current)}},[]),M.useEffect(()=>{let b;return c&&(b=setInterval(()=>{g(w=>w<o?w+1:(clearInterval(b),w))},10)),()=>clearInterval(b)},[c,o]),i.jsxs("div",{ref:f,className:j,children:[d,e]})},H=te,ne="_countsContainer_1yt6s_1",ie="_countContainer_1yt6s_29",se="_increment_1yt6s_41",re="_countText_1yt6s_63",_={countsContainer:ne,countContainer:ie,increment:se,countText:re};function le(){return i.jsxs("div",{id:_.countsContainer,children:[i.jsxs("div",{className:_.countContainer,children:[i.jsx(H,{toNumber:150,styles:_.increment,children:"+"}),i.jsx("p",{className:_.countText,children:"Adventure Workshops"})]}),i.jsxs("div",{className:_.countContainer,children:[i.jsx(H,{toNumber:190,styles:_.increment,children:"+"}),i.jsx("p",{className:_.countText,children:"Treks"})]}),i.jsxs("div",{className:_.countContainer,children:[i.jsx(H,{toNumber:1e3,styles:_.increment,children:"+"}),i.jsx("p",{className:_.countText,children:"Happy Customers"})]}),i.jsxs("div",{className:_.countContainer,children:[i.jsx(H,{toNumber:70,styles:_.increment,children:"+"}),i.jsx("p",{className:_.countText,children:"Night Camps"})]})]})}const oe="_homeCoverContainer_1n5fw_1",ce="_mySwiper_1n5fw_25",pe="_carouselImage_1n5fw_39",de="_companyInfoContainer_1n5fw_51",me="_companyLogo_1n5fw_81",P={homeCoverContainer:oe,mySwiper:ce,carouselImage:pe,companyInfoContainer:de,companyLogo:me};function U(o,e,j,d){return o.params.createElements&&Object.keys(d).forEach(g=>{if(!j[g]&&j.auto===!0){let c=K(o.el,`.${d[g]}`)[0];c||(c=Z("div",d[g]),c.className=d[g],o.el.append(c)),j[g]=c,e[g]=c}}),j}function ue(o){let{swiper:e,extendParams:j,on:d,emit:g}=o;j({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function c(s){let r;return s&&typeof s=="string"&&e.isElement&&(r=e.el.querySelector(s),r)?r:(s&&(typeof s=="string"&&(r=[...document.querySelectorAll(s)]),e.params.uniqueNavElements&&typeof s=="string"&&r&&r.length>1&&e.el.querySelectorAll(s).length===1?r=e.el.querySelector(s):r&&r.length===1&&(r=r[0])),s&&!r?s:r)}function k(s,r){const p=e.params.navigation;s=h(s),s.forEach(a=>{a&&(a.classList[r?"add":"remove"](...p.disabledClass.split(" ")),a.tagName==="BUTTON"&&(a.disabled=r),e.params.watchOverflow&&e.enabled&&a.classList[e.isLocked?"add":"remove"](p.lockClass))})}function f(){const{nextEl:s,prevEl:r}=e.navigation;if(e.params.loop){k(r,!1),k(s,!1);return}k(r,e.isBeginning&&!e.params.rewind),k(s,e.isEnd&&!e.params.rewind)}function b(s){s.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),g("navigationPrev"))}function w(s){s.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),g("navigationNext"))}function S(){const s=e.params.navigation;if(e.params.navigation=U(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(s.nextEl||s.prevEl))return;let r=c(s.nextEl),p=c(s.prevEl);Object.assign(e.navigation,{nextEl:r,prevEl:p}),r=h(r),p=h(p);const a=(t,n)=>{t&&t.addEventListener("click",n==="next"?w:b),!e.enabled&&t&&t.classList.add(...s.lockClass.split(" "))};r.forEach(t=>a(t,"next")),p.forEach(t=>a(t,"prev"))}function L(){let{nextEl:s,prevEl:r}=e.navigation;s=h(s),r=h(r);const p=(a,t)=>{a.removeEventListener("click",t==="next"?w:b),a.classList.remove(...e.params.navigation.disabledClass.split(" "))};s.forEach(a=>p(a,"next")),r.forEach(a=>p(a,"prev"))}d("init",()=>{e.params.navigation.enabled===!1?B():(S(),f())}),d("toEdge fromEdge lock unlock",()=>{f()}),d("destroy",()=>{L()}),d("enable disable",()=>{let{nextEl:s,prevEl:r}=e.navigation;if(s=h(s),r=h(r),e.enabled){f();return}[...s,...r].filter(p=>!!p).forEach(p=>p.classList.add(e.params.navigation.lockClass))}),d("click",(s,r)=>{let{nextEl:p,prevEl:a}=e.navigation;p=h(p),a=h(a);const t=r.target;let n=a.includes(t)||p.includes(t);if(e.isElement&&!n){const l=r.path||r.composedPath&&r.composedPath();l&&(n=l.find(m=>p.includes(m)||a.includes(m)))}if(e.params.navigation.hideOnClick&&!n){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===t||e.pagination.el.contains(t)))return;let l;p.length?l=p[0].classList.contains(e.params.navigation.hiddenClass):a.length&&(l=a[0].classList.contains(e.params.navigation.hiddenClass)),g(l===!0?"navigationShow":"navigationHide"),[...p,...a].filter(m=>!!m).forEach(m=>m.classList.toggle(e.params.navigation.hiddenClass))}});const $=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),S(),f()},B=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),L()};Object.assign(e.navigation,{enable:$,disable:B,update:f,init:S,destroy:L})}function z(o){return o===void 0&&(o=""),`.${o.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function ge(o){let{swiper:e,extendParams:j,on:d,emit:g}=o;const c="swiper-pagination";j({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${c}-bullet`,bulletActiveClass:`${c}-bullet-active`,modifierClass:`${c}-`,currentClass:`${c}-current`,totalClass:`${c}-total`,hiddenClass:`${c}-hidden`,progressbarFillClass:`${c}-progressbar-fill`,progressbarOppositeClass:`${c}-progressbar-opposite`,clickableClass:`${c}-clickable`,lockClass:`${c}-lock`,horizontalClass:`${c}-horizontal`,verticalClass:`${c}-vertical`,paginationDisabledClass:`${c}-disabled`}}),e.pagination={el:null,bullets:[]};let k,f=0;function b(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function w(a,t){const{bulletActiveClass:n}=e.params.pagination;a&&(a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&(a.classList.add(`${n}-${t}`),a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&a.classList.add(`${n}-${t}-${t}`)))}function S(a){const t=a.target.closest(z(e.params.pagination.bulletClass));if(!t)return;a.preventDefault();const n=R(t)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===n)return;e.slideToLoop(n)}else e.slideTo(n)}function L(){const a=e.rtl,t=e.params.pagination;if(b())return;let n=e.pagination.el;n=h(n);let l,m;const I=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,q=e.params.loop?Math.ceil(I/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(m=e.previousRealIndex||0,l=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(l=e.snapIndex,m=e.previousSnapIndex):(m=e.previousIndex||0,l=e.activeIndex||0),t.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const u=e.pagination.bullets;let E,x,O;if(t.dynamicBullets&&(k=ee(u[0],e.isHorizontal()?"width":"height",!0),n.forEach(v=>{v.style[e.isHorizontal()?"width":"height"]=`${k*(t.dynamicMainBullets+4)}px`}),t.dynamicMainBullets>1&&m!==void 0&&(f+=l-(m||0),f>t.dynamicMainBullets-1?f=t.dynamicMainBullets-1:f<0&&(f=0)),E=Math.max(l-f,0),x=E+(Math.min(u.length,t.dynamicMainBullets)-1),O=(x+E)/2),u.forEach(v=>{const C=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(y=>`${t.bulletActiveClass}${y}`)].map(y=>typeof y=="string"&&y.includes(" ")?y.split(" "):y).flat();v.classList.remove(...C)}),n.length>1)u.forEach(v=>{const C=R(v);C===l?v.classList.add(...t.bulletActiveClass.split(" ")):e.isElement&&v.setAttribute("part","bullet"),t.dynamicBullets&&(C>=E&&C<=x&&v.classList.add(...`${t.bulletActiveClass}-main`.split(" ")),C===E&&w(v,"prev"),C===x&&w(v,"next"))});else{const v=u[l];if(v&&v.classList.add(...t.bulletActiveClass.split(" ")),e.isElement&&u.forEach((C,y)=>{C.setAttribute("part",y===l?"bullet-active":"bullet")}),t.dynamicBullets){const C=u[E],y=u[x];for(let A=E;A<=x;A+=1)u[A]&&u[A].classList.add(...`${t.bulletActiveClass}-main`.split(" "));w(C,"prev"),w(y,"next")}}if(t.dynamicBullets){const v=Math.min(u.length,t.dynamicMainBullets+4),C=(k*v-k)/2-O*k,y=a?"right":"left";u.forEach(A=>{A.style[e.isHorizontal()?y:"top"]=`${C}px`})}}n.forEach((u,E)=>{if(t.type==="fraction"&&(u.querySelectorAll(z(t.currentClass)).forEach(x=>{x.textContent=t.formatFractionCurrent(l+1)}),u.querySelectorAll(z(t.totalClass)).forEach(x=>{x.textContent=t.formatFractionTotal(q)})),t.type==="progressbar"){let x;t.progressbarOpposite?x=e.isHorizontal()?"vertical":"horizontal":x=e.isHorizontal()?"horizontal":"vertical";const O=(l+1)/q;let v=1,C=1;x==="horizontal"?v=O:C=O,u.querySelectorAll(z(t.progressbarFillClass)).forEach(y=>{y.style.transform=`translate3d(0,0,0) scaleX(${v}) scaleY(${C})`,y.style.transitionDuration=`${e.params.speed}ms`})}t.type==="custom"&&t.renderCustom?(u.innerHTML=t.renderCustom(e,l+1,q),E===0&&g("paginationRender",u)):(E===0&&g("paginationRender",u),g("paginationUpdate",u)),e.params.watchOverflow&&e.enabled&&u.classList[e.isLocked?"add":"remove"](t.lockClass)})}function $(){const a=e.params.pagination;if(b())return;const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let n=e.pagination.el;n=h(n);let l="";if(a.type==="bullets"){let m=e.params.loop?Math.ceil(t/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&m>t&&(m=t);for(let I=0;I<m;I+=1)a.renderBullet?l+=a.renderBullet.call(e,I,a.bulletClass):l+=`<${a.bulletElement} ${e.isElement?'part="bullet"':""} class="${a.bulletClass}"></${a.bulletElement}>`}a.type==="fraction"&&(a.renderFraction?l=a.renderFraction.call(e,a.currentClass,a.totalClass):l=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),a.type==="progressbar"&&(a.renderProgressbar?l=a.renderProgressbar.call(e,a.progressbarFillClass):l=`<span class="${a.progressbarFillClass}"></span>`),e.pagination.bullets=[],n.forEach(m=>{a.type!=="custom"&&(m.innerHTML=l||""),a.type==="bullets"&&e.pagination.bullets.push(...m.querySelectorAll(z(a.bulletClass)))}),a.type!=="custom"&&g("paginationRender",n[0])}function B(){e.params.pagination=U(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let t;typeof a.el=="string"&&e.isElement&&(t=e.el.querySelector(a.el)),!t&&typeof a.el=="string"&&(t=[...document.querySelectorAll(a.el)]),t||(t=a.el),!(!t||t.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(t)&&t.length>1&&(t=[...e.el.querySelectorAll(a.el)],t.length>1&&(t=t.filter(n=>ae(n,".swiper")[0]===e.el)[0])),Array.isArray(t)&&t.length===1&&(t=t[0]),Object.assign(e.pagination,{el:t}),t=h(t),t.forEach(n=>{a.type==="bullets"&&a.clickable&&n.classList.add(...(a.clickableClass||"").split(" ")),n.classList.add(a.modifierClass+a.type),n.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(n.classList.add(`${a.modifierClass}${a.type}-dynamic`),f=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&n.classList.add(a.progressbarOppositeClass),a.clickable&&n.addEventListener("click",S),e.enabled||n.classList.add(a.lockClass)}))}function s(){const a=e.params.pagination;if(b())return;let t=e.pagination.el;t&&(t=h(t),t.forEach(n=>{n.classList.remove(a.hiddenClass),n.classList.remove(a.modifierClass+a.type),n.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&(n.classList.remove(...(a.clickableClass||"").split(" ")),n.removeEventListener("click",S))})),e.pagination.bullets&&e.pagination.bullets.forEach(n=>n.classList.remove(...a.bulletActiveClass.split(" ")))}d("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const a=e.params.pagination;let{el:t}=e.pagination;t=h(t),t.forEach(n=>{n.classList.remove(a.horizontalClass,a.verticalClass),n.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass)})}),d("init",()=>{e.params.pagination.enabled===!1?p():(B(),$(),L())}),d("activeIndexChange",()=>{typeof e.snapIndex>"u"&&L()}),d("snapIndexChange",()=>{L()}),d("snapGridLengthChange",()=>{$(),L()}),d("destroy",()=>{s()}),d("enable disable",()=>{let{el:a}=e.pagination;a&&(a=h(a),a.forEach(t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),d("lock unlock",()=>{L()}),d("click",(a,t)=>{const n=t.target,l=h(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&l&&l.length>0&&!n.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&n===e.navigation.nextEl||e.navigation.prevEl&&n===e.navigation.prevEl))return;const m=l[0].classList.contains(e.params.pagination.hiddenClass);g(m===!0?"paginationShow":"paginationHide"),l.forEach(I=>I.classList.toggle(e.params.pagination.hiddenClass))}});const r=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=h(a),a.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),B(),$(),L()},p=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=h(a),a.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),s()};Object.assign(e.pagination,{enable:r,disable:p,render:$,update:L,init:B,destroy:s})}const fe="/assets/homeCarouselOne-CwZ9HMOq.jpg",ve="/assets/homeCarouselTwo-BPWSIahb.jpg",he="/assets/homeCarouselThree-DDzUQD7j.jpg",Ce="/assets/homeCarouselFour-xqldAQ46.jpg",ye="/assets/homeCarouselFive-IUR-qwcX.jpg",xe="/assets/homeCarouselSix-Cjh-4c9M.jpg",be="/assets/homeCarouselSeven-WD8N8Wrl.jpg",we=[{alt:"kaying in mountains",src:fe},{alt:"camping tent in forest",src:ve},{alt:"holding compass in forest",src:he},{alt:"mountains over clouds scenery",src:Ce},{alt:"accessories on map",src:ye},{alt:"trekking ice mountains",src:xe},{alt:"scuba diving in ocean",src:be}];function _e(){return i.jsxs("div",{id:P.homeCoverContainer,children:[i.jsx(V,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},loop:!0,slidesPerView:1,modules:[G],className:`mySwiper ${P.mySwiper}`,children:we.map(({alt:o,src:e})=>i.jsx(W,{children:i.jsx("img",{src:e,alt:o,className:P.carouselImage})},o))}),i.jsx("div",{className:P.companyInfoContainer,children:i.jsx("img",{src:J,alt:"",className:P.companyLogo})})]})}const je="_reviewsMainContainer_178ko_3",ke="_swiper_178ko_13",Le="_slide_178ko_23",Ee="_reviewName_178ko_53",Ie="_rating_178ko_69",Ne="_reviewDescription_178ko_79",Se="_reviewsContainer_178ko_97",$e="_youtubeContainer_178ko_107",Be="_reviewContainer_178ko_127",D={reviewsMainContainer:je,swiper:ke,slide:Le,reviewName:Ee,rating:Ie,reviewDescription:Ne,reviewsContainer:Se,youtubeContainer:$e,reviewContainer:Be},Ae="/assets/adventure-DgnVngHJ.jpg",Me="/assets/night-Ce8iVqIo.jpg",Te="/assets/treks-DSRpJpa2.jpg",De=[{name:"voocha madhu babu",rating:"5",review:"Waste of time. Nothing is there and no maintenance of activities.I thing it’s only a paid promotion videos and photos"},{name:"Rajender kumar",rating:"4",review:"Nice place for nature walk and adventure activities"},{name:"SAI TEJA",rating:"5",review:"Best sky cycling experience in worth price"},{name:"Mounika Akhil",rating:"4",review:"Nice Place to visit"},{name:"Naveen N",rating:"5",review:"its very adventures"},{name:"hamed ali",rating:"4",review:"its superb"},{name:"Anil Reddy",rating:"5",review:"its very adventures"},{name:"john babu",rating:"4",review:"its superb"},{name:"suman",rating:"5",review:"its very adventures"}],Oe=[{img:Ae,title:"Adventure Activities",link:"/adventureactivities"},{img:Me,title:"Night Camps",link:"/nightcamps"},{img:Te,title:"Mountain Treks",link:"/mountaintreks"}];var F={},Pe=Q;Object.defineProperty(F,"__esModule",{value:!0});var T=F.default=void 0,ze=Pe(X()),He=i;T=F.default=(0,ze.default)((0,He.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");function qe({name:o,review:e}){return i.jsxs(i.Fragment,{children:[i.jsx("h2",{className:D.reviewName,children:o}),i.jsxs("p",{className:D.rating,children:[i.jsx(T,{}),i.jsx(T,{}),i.jsx(T,{}),i.jsx(T,{}),i.jsx(T,{})]}),i.jsx("p",{className:D.reviewDescription,children:e})]})}function Fe(){return i.jsx(V,{autoHeight:!0,spaceBetween:30,slidesPerView:1,loop:!0,navigation:!0,centeredSlides:!0,autoplay:{delay:2e3,disableOnInteraction:!0},pagination:{clickable:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:40},1024:{slidesPerView:4,spaceBetween:50}},modules:[ue,ge,G],className:`mySwiper ${D.swiper}`,children:De.map(o=>i.jsx(W,{className:D.slide,children:i.jsx(qe,{...o})},o.name))})}const Re="_container_1ri9e_3",Ve="_itemContainer_1ri9e_27",Ge="_overlay_1ri9e_53",We="_itemImg_1ri9e_65",Ue="_itemContent_1ri9e_87",Je="_itemTitle_1ri9e_107",Xe="_itemLink_1ri9e_115",N={container:Re,itemContainer:Ve,overlay:Ge,itemImg:We,itemContent:Ue,itemTitle:Je,itemLink:Xe};function Qe({title:o,img:e,link:j}){return i.jsxs("div",{className:N.itemContainer,children:[i.jsx("img",{src:e,alt:o,className:N.itemImg}),i.jsx("div",{className:N.overlay}),i.jsxs("div",{className:N.itemContent,children:[i.jsx("p",{className:N.itemTitle,children:"Click Below To Know"}),i.jsx(Y,{to:j,className:N.itemLink,children:o})]})]})}function Ye(){return i.jsx("section",{className:N.container,children:Oe.map(o=>M.createElement(Qe,{...o,key:o.title}))})}function ea(){return i.jsxs(i.Fragment,{children:[i.jsx(_e,{}),i.jsx(Ye,{}),i.jsx(le,{}),i.jsx("section",{className:D.reviewsMainContainer,children:i.jsx(Fe,{})})]})}export{ea as default};
