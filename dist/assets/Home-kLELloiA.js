import{r as _,j as n,L as B}from"./index-DDrWfsxJ.js";import{e as A,c as P,m as g,S as T,A as q,a as D}from"./autoplay-BEfmSVlh.js";import{i as M}from"./styled-B_VJfsZJ.js";import{r as R}from"./createSvgIcon-CCqlwKsM.js";const V=({toNumber:a,children:e,styles:v})=>{const[m,l]=_.useState(0),[u,w]=_.useState(!1),d=_.useRef(null);return _.useEffect(()=>{const p=new IntersectionObserver(([f])=>{w(f.isIntersecting)},{root:null,rootMargin:"0px",threshold:.1});return d.current&&p.observe(d.current),()=>{d.current&&p.unobserve(d.current)}},[]),_.useEffect(()=>{let p;return u&&(p=setInterval(()=>{l(f=>f<a?f+1:(clearInterval(p),f))},10)),()=>clearInterval(p)},[u,a]),n.jsxs("div",{ref:d,className:v,children:[m,e]})},k=V,H="_countsContainer_1yt6s_1",F="_countContainer_1yt6s_29",W="_increment_1yt6s_41",$="_countText_1yt6s_63",c={countsContainer:H,countContainer:F,increment:W,countText:$};function z(){return n.jsxs("div",{id:c.countsContainer,children:[n.jsxs("div",{className:c.countContainer,children:[n.jsx(k,{toNumber:150,styles:c.increment,children:"+"}),n.jsx("p",{className:c.countText,children:"Adventure Workshops"})]}),n.jsxs("div",{className:c.countContainer,children:[n.jsx(k,{toNumber:190,styles:c.increment,children:"+"}),n.jsx("p",{className:c.countText,children:"Treks"})]}),n.jsxs("div",{className:c.countContainer,children:[n.jsx(k,{toNumber:1e3,styles:c.increment,children:"+"}),n.jsx("p",{className:c.countText,children:"Happy Customers"})]}),n.jsxs("div",{className:c.countContainer,children:[n.jsx(k,{toNumber:70,styles:c.increment,children:"+"}),n.jsx("p",{className:c.countText,children:"Night Camps"})]})]})}const J="_homeCoverContainer_ylbhh_1",U="_mySwiper_ylbhh_21",G="_carouselImage_ylbhh_35",I={homeCoverContainer:J,mySwiper:U,carouselImage:G};function Q(a,e,v,m){return a.params.createElements&&Object.keys(m).forEach(l=>{if(!v[l]&&v.auto===!0){let u=A(a.el,`.${m[l]}`)[0];u||(u=P("div",m[l]),u.className=m[l],a.el.append(u)),v[l]=u,e[l]=u}}),v}function X(a){let{swiper:e,extendParams:v,on:m,emit:l}=a;v({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function u(t){let i;return t&&typeof t=="string"&&e.isElement&&(i=e.el.querySelector(t),i)?i:(t&&(typeof t=="string"&&(i=[...document.querySelectorAll(t)]),e.params.uniqueNavElements&&typeof t=="string"&&i&&i.length>1&&e.el.querySelectorAll(t).length===1?i=e.el.querySelector(t):i&&i.length===1&&(i=i[0])),t&&!i?t:i)}function w(t,i){const r=e.params.navigation;t=g(t),t.forEach(s=>{s&&(s.classList[i?"add":"remove"](...r.disabledClass.split(" ")),s.tagName==="BUTTON"&&(s.disabled=i),e.params.watchOverflow&&e.enabled&&s.classList[e.isLocked?"add":"remove"](r.lockClass))})}function d(){const{nextEl:t,prevEl:i}=e.navigation;if(e.params.loop){w(i,!1),w(t,!1);return}w(i,e.isBeginning&&!e.params.rewind),w(t,e.isEnd&&!e.params.rewind)}function p(t){t.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),l("navigationPrev"))}function f(t){t.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),l("navigationNext"))}function N(){const t=e.params.navigation;if(e.params.navigation=Q(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(t.nextEl||t.prevEl))return;let i=u(t.nextEl),r=u(t.prevEl);Object.assign(e.navigation,{nextEl:i,prevEl:r}),i=g(i),r=g(r);const s=(o,b)=>{o&&o.addEventListener("click",b==="next"?f:p),!e.enabled&&o&&o.classList.add(...t.lockClass.split(" "))};i.forEach(o=>s(o,"next")),r.forEach(o=>s(o,"prev"))}function E(){let{nextEl:t,prevEl:i}=e.navigation;t=g(t),i=g(i);const r=(s,o)=>{s.removeEventListener("click",o==="next"?f:p),s.classList.remove(...e.params.navigation.disabledClass.split(" "))};t.forEach(s=>r(s,"next")),i.forEach(s=>r(s,"prev"))}m("init",()=>{e.params.navigation.enabled===!1?L():(N(),d())}),m("toEdge fromEdge lock unlock",()=>{d()}),m("destroy",()=>{E()}),m("enable disable",()=>{let{nextEl:t,prevEl:i}=e.navigation;if(t=g(t),i=g(i),e.enabled){d();return}[...t,...i].filter(r=>!!r).forEach(r=>r.classList.add(e.params.navigation.lockClass))}),m("click",(t,i)=>{let{nextEl:r,prevEl:s}=e.navigation;r=g(r),s=g(s);const o=i.target;let b=s.includes(o)||r.includes(o);if(e.isElement&&!b){const C=i.path||i.composedPath&&i.composedPath();C&&(b=C.find(x=>r.includes(x)||s.includes(x)))}if(e.params.navigation.hideOnClick&&!b){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===o||e.pagination.el.contains(o)))return;let C;r.length?C=r[0].classList.contains(e.params.navigation.hiddenClass):s.length&&(C=s[0].classList.contains(e.params.navigation.hiddenClass)),l(C===!0?"navigationShow":"navigationHide"),[...r,...s].filter(x=>!!x).forEach(x=>x.classList.toggle(e.params.navigation.hiddenClass))}});const O=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),N(),d()},L=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),E()};Object.assign(e.navigation,{enable:O,disable:L,update:d,init:N,destroy:E})}const Z="/assets/homeCarouselOne-CwZ9HMOq.jpg",K="/assets/homeCarouselTwo-BPWSIahb.jpg",Y="/assets/homeCarouselThree-DDzUQD7j.jpg",ee="/assets/homeCarouselFour-xqldAQ46.jpg",ne="/assets/homeCarouselFive-IUR-qwcX.jpg",te="/assets/homeCarouselSix-Cjh-4c9M.jpg",ie="/assets/homeCarouselSeven-WD8N8Wrl.jpg",se=[{alt:"kaying in mountains",src:Z},{alt:"camping tent in forest",src:K},{alt:"holding compass in forest",src:Y},{alt:"mountains over clouds scenery",src:ee},{alt:"accessories on map",src:ne},{alt:"trekking ice mountains",src:te},{alt:"scuba diving in ocean",src:ie}];function ae(){return n.jsx("div",{id:I.homeCoverContainer,children:n.jsx(T,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},loop:!0,slidesPerView:1,modules:[q],className:`mySwiper ${I.mySwiper}`,children:se.map(({alt:a,src:e})=>n.jsx(D,{children:n.jsx("img",{src:e,alt:a,className:I.carouselImage})},a))})})}const re="_reviewsMainContainer_sofwy_3",oe="_swiper_sofwy_11",le="_slide_sofwy_21",ce="_reviewName_sofwy_51",me="_rating_sofwy_67",ue="_reviewDescription_sofwy_77",de="_reviewsContainer_sofwy_95",ve="_youtubeContainer_sofwy_105",pe="_reviewContainer_sofwy_125",y={reviewsMainContainer:re,swiper:oe,slide:le,reviewName:ce,rating:me,reviewDescription:ue,reviewsContainer:de,youtubeContainer:ve,reviewContainer:pe},ge="/assets/adventure-DgnVngHJ.jpg",fe="/assets/night-Ce8iVqIo.jpg",he="/assets/treks-DSRpJpa2.jpg",we="/assets/weekend-Bnwb38wz.jpg",Ce=[{name:"voocha madhu babu",rating:"5",review:"Waste of time. Nothing is there and no maintenance of activities.I thing it’s only a paid promotion videos and photos"},{name:"Rajender kumar",rating:"4",review:"Nice place for nature walk and adventure activities"},{name:"SAI TEJA",rating:"5",review:"Best sky cycling experience in worth price"},{name:"Mounika Akhil",rating:"4",review:"Nice Place to visit"},{name:"Naveen N",rating:"5",review:"its very adventures"},{name:"hamed ali",rating:"4",review:"its superb"},{name:"Anil Reddy",rating:"5",review:"its very adventures"},{name:"john babu",rating:"4",review:"its superb"},{name:"suman",rating:"5",review:"its very adventures"}],xe=[{img:ge,title:"Adventure Park",link:"/adventurepark"},{img:fe,title:"Night Camps",link:"/nightcamps"},{img:he,title:"Mountain Treks",link:"/mountaintreks"},{img:we,title:"Weekend Gateway",link:"/weekendgateway"}];var S={},_e=M;Object.defineProperty(S,"__esModule",{value:!0});var j=S.default=void 0,je=_e(R()),ye=n;j=S.default=(0,je.default)((0,ye.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");function be({name:a,review:e}){return n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:y.reviewName,children:a}),n.jsxs("p",{className:y.rating,children:[n.jsx(j,{}),n.jsx(j,{}),n.jsx(j,{}),n.jsx(j,{}),n.jsx(j,{})]}),n.jsx("p",{className:y.reviewDescription,children:e})]})}function ke(){return n.jsx(T,{autoHeight:!0,spaceBetween:30,slidesPerView:1,loop:!0,navigation:!0,autoplay:{delay:2e3,disableOnInteraction:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:40},1024:{slidesPerView:3,spaceBetween:50}},modules:[X,q],className:`mySwiper ${y.swiper}`,children:Ce.map(a=>n.jsx(D,{className:y.slide,children:n.jsx(be,{...a})},a.name))})}const Ne="_container_1kb0q_3",Ee="_itemContainer_1kb0q_19",Ie="_imgContainer_1kb0q_55",Se="_itemImg_1kb0q_67",Le="_itemContent_1kb0q_77",Te="_itemTitle_1kb0q_93",qe="_itemLink_1kb0q_111",h={container:Ne,itemContainer:Ee,imgContainer:Ie,itemImg:Se,itemContent:Le,itemTitle:Te,itemLink:qe};function De({title:a,img:e,link:v}){return n.jsxs("div",{className:h.itemContainer,children:[n.jsx("figure",{className:h.imgContainer,children:n.jsx("img",{src:e,alt:a,className:h.itemImg})}),n.jsxs("div",{className:h.itemContent,children:[n.jsx("p",{className:h.itemTitle,children:a}),n.jsx(B,{to:v,className:h.itemLink,children:"Get Details"})]})]})}function Oe(){return n.jsx("section",{className:h.container,children:xe.map(a=>_.createElement(De,{...a,key:a.title}))})}function Re(){return n.jsxs(n.Fragment,{children:[n.jsx(ae,{}),n.jsx(Oe,{}),n.jsx("section",{className:y.reviewsMainContainer,children:n.jsx(ke,{})}),n.jsx(z,{})]})}export{Re as default};