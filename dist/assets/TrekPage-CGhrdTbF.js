import{h as g,i as k,j as t,L as f,k as j,l as h,r as d,m as e}from"./index-0PC57cij.js";import{_ as I}from"./dynamic-import-helper-BxLOqBCD.js";const v="_container_11kno_1",E="_heading_11kno_1",x="_gridItemsContainer_11kno_39",C="_itemContainer_11kno_53",N="_imgContainer_11kno_73",D="_img_11kno_73",P="_infoContainer_11kno_97",L="_title_11kno_111",A="_description_11kno_131",R="_price_11kno_143",b="_btn_11kno_157",y="_moreInfo_11kno_243",T="_parkInfo_11kno_343",n={container:v,heading:E,gridItemsContainer:x,itemContainer:C,imgContainer:N,img:D,infoContainer:P,title:L,description:A,price:R,btn:b,moreInfo:y,parkInfo:T};function O({item:s}){const o=g(),a=k(),{title:i,img:c,description:r,price:_,book:l}=s;function m(u,p){o(j.addToCart({eventName:u,price:p})),a("/booknow")}return t.jsxs("div",{className:n.itemContainer,children:[t.jsx("figure",{className:n.imgContainer,children:t.jsx("img",{src:c,alt:i,className:n.img,loading:"lazy"})}),t.jsxs("div",{className:n.infoContainer,children:[t.jsx("h2",{className:n.title,children:i}),t.jsx("p",{className:n.description,children:r}),_&&t.jsxs("p",{className:n.price,children:["Rs: ",_,"/-"]}),l?t.jsx("button",{className:n.btn,onClick:()=>{m(i,_)},children:"Book Now"}):t.jsx(f,{to:s.eventId,className:n.moreInfo,children:"More Info"})]})]})}function V({gridItems:s}){const{heading:o,gridData:a}=s;return t.jsxs("section",{className:n.container,children:[t.jsx("p",{id:n.heading,children:o}),o=="adventure Park"?t.jsx("p",{className:n.parkInfo,children:"Griffinn Adventure Park sounds like an exciting destination! Located in Arogya Sanjeevani Vanam, near LB Nagar and in the Injapur area of Hyderabad, this park spans 150 acres of lush greenery. It seems like a perfect spot for a range of outdoor activities surrounded by trees and plants."}):null,t.jsx("div",{className:n.gridItemsContainer,children:a.map(i=>t.jsx(O,{item:i},i.title))})]})}function H(){const o=h().trekId,[a,i]=d.useState(null);return d.useEffect(()=>{(async()=>{try{const r=await I(Object.assign({"../utils/Aboutus.js":()=>e(()=>import("./Aboutus-8SwNE_Qc.js"),[]),"../utils/Gallery.js":()=>e(()=>import("./Gallery-BR_iLqbl.js"),[]),"../utils/Home.js":()=>e(()=>import("./Home-VHqRx1Yd.js"),[]),"../utils/NightCamps.js":()=>e(()=>import("./NightCamps-sRNfb4d1.js"),[]),"../utils/adventurepark.js":()=>e(()=>import("./adventurepark-Cm-HqFqr.js"),[]),"../utils/general.js":()=>e(()=>import("./general-pM88K-up.js"),[]),"../utils/mountaintreks.js":()=>e(()=>import("./mountaintreks-D08oLtTm.js"),[]),"../utils/policies.js":()=>e(()=>import("./policies-Dnifw31D.js"),[]),"../utils/volunteer.js":()=>e(()=>import("./volunteer-plcs15KG.js"),[]),"../utils/weekendgateway.js":()=>e(()=>import("./weekendgateway-C7H8u01M.js"),[])}),`../utils/${o}.js`);i(r.default[0])}catch(r){console.error("Error loading data:",r),i(null)}})()},[o]),a?t.jsx(V,{gridItems:a}):t.jsx("h1",{children:"no data found"})}export{H as default};