import{j as e,m as i,r as c}from"./index-Bd_afk0A.js";const m="_container_15fcv_3",p="_heading_15fcv_25",d="_form_15fcv_45",_="_inputContainer_15fcv_81",b="_input_15fcv_81",N="_label_15fcv_125",x="_dateInput_15fcv_195",h="_tripName_15fcv_237",f="_amountContainer_15fcv_269",v="_amountLabel_15fcv_277",j="_amountInput_15fcv_285",C="_buttonContainer_15fcv_307",y="_button_15fcv_307",t={container:m,heading:p,form:d,inputContainer:_,input:b,label:N,dateInput:x,tripName:h,amountContainer:f,amountLabel:v,amountInput:j,buttonContainer:C,button:y};function l({type:o,id:n,placeholder:s,labelText:r}){return e.jsxs("div",{className:t.inputContainer,children:[e.jsx("input",{type:o,id:n,name:n,placeholder:s,className:t.input,required:!0}),e.jsx("label",{htmlFor:n,className:t.label,children:r})]})}function g(){const o=i(a=>a.eventName),n=i(a=>a.price),[s,r]=c.useState(n);function u(a){console.log(a.target.value),r(a.target.value*n)}return e.jsxs("section",{className:t.container,children:[e.jsx("p",{className:t.heading,children:"Book Now"}),e.jsxs("form",{action:"",className:t.form,children:[e.jsx(l,{type:"text",id:"customerName",placeholder:"Enter your full name",labelText:"Enter your full name:"}),e.jsx(l,{type:"number",id:"mobileNumber",placeholder:"Enter your mobile number",labelText:"Mobile Number:"}),e.jsx(l,{type:"email",id:"email",placeholder:"Enter your email id",labelText:"Enter your Email Id:"}),e.jsxs("div",{className:t.inputContainer,children:[e.jsx("input",{type:"number",id:"persons",name:"persons",inputMode:"numeric",className:t.input,placeholder:"Total No. of persons",defaultValue:1,onChange:()=>{u(event)}}),e.jsx("label",{htmlFor:"persons",className:t.label,children:"Total No. of persons:"})]}),e.jsxs("div",{className:t.inputContainer,children:[e.jsx("label",{htmlFor:"date",children:"Date of travel:"}),e.jsx("input",{type:"date",name:"date",id:"date",required:!0,className:t.dateInput})]}),e.jsxs("div",{className:t.inputContainer,children:[e.jsx("label",{htmlFor:"tripName",children:"Selected Trip/ Trek Name:"}),e.jsx("input",{type:"text",name:"tripName",id:"tripName",disabled:!0,value:o,className:t.tripName,readOnly:!0})]}),e.jsxs("div",{className:t.amountContainer,children:[e.jsx("label",{htmlFor:"amount",className:t.amountLabel,children:"Amount: Rs:"}),e.jsx("input",{type:"text",name:"amount",id:"amount",value:s,readOnly:!0,className:t.amountInput})]}),e.jsx("div",{className:t.buttonContainer,children:e.jsx("input",{type:"submit",className:t.button})})]})]})}export{g as default};
