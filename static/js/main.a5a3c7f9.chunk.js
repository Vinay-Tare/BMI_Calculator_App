(this.webpackJsonpbmi_calculator_app=this.webpackJsonpbmi_calculator_app||[]).push([[0],{19:function(e,s,a){},23:function(e,s,a){},24:function(e,s,a){"use strict";a.r(s);var t=a(2),c=a.n(t),n=a(12),r=a.n(n),j=(a(17),a(18),a(19),a(7)),i=a(31),l=a(32),h=a(33),b=a(28),m=a(26),d=a(27),u=a(29),o=a(34),x=a(35),O=a(36),g=a(25),f=a(30),p=a(1);var N=function(e){var s=e.setBmiAndMessage,a=Object(t.useState)(),c=Object(j.a)(a,2),n=c[0],r=c[1],i=Object(t.useState)(),l=Object(j.a)(i,2),h=l[0],o=l[1],x=Object(t.useState)(),O=Object(j.a)(x,2),N=O[0],I=O[1];return Object(p.jsxs)(g.a,{onSubmit:function(e){e.preventDefault();var a=12*h+N;s(n/(a*a)*703)},children:[Object(p.jsxs)(m.a,{row:!0,children:[Object(p.jsxs)(d.a,{htmlFor:"weightInPounds",sm:"3",children:[Object(p.jsx)("span",{className:"fas fa-weight"})," Your Weight (In Pounds) :"]}),Object(p.jsx)(b.a,{sm:"9",children:Object(p.jsx)(u.a,{id:"weightInPounds",name:"weightInPounds",type:"number",value:n||"",onChange:function(e){return r(e.target.valueAsNumber)},min:"0",max:"2205",required:!0})})]}),Object(p.jsxs)(m.a,{row:!0,className:"",children:[Object(p.jsxs)(d.a,{sm:"3",children:[Object(p.jsx)("span",{className:"fas fa-child"}),Object(p.jsx)("span",{className:"fas fa-arrows-alt-v"})," Your Height :"]}),Object(p.jsx)(b.a,{sm:"3",children:Object(p.jsx)(u.a,{id:"heightInFeets",name:"heightInFeets",type:"number",value:h||"",onChange:function(e){return o(e.target.valueAsNumber)},min:"0",max:"9",required:!0})}),Object(p.jsx)(d.a,{htmlFor:"heightInFeets",sm:"1",children:"(Feet)"}),Object(p.jsx)(b.a,{sm:{offset:"1",size:"3"},children:Object(p.jsx)(u.a,{id:"heightInInches",name:"heightInInches",type:"number",value:N||"",onChange:function(e){return I(e.target.valueAsNumber)},min:"0",max:"12",required:!0})}),Object(p.jsx)(d.a,{htmlFor:"heightInInches",sm:"1",children:"(Inches)"})]}),Object(p.jsx)(m.a,{row:!0,children:Object(p.jsx)(b.a,{sm:{offset:"3",size:"9"},children:Object(p.jsx)(f.a,{block:!0,color:"primary",children:"Check BMI"})})})]})};var I=function(e){var s=e.setBmiAndMessage,a=Object(t.useState)(),c=Object(j.a)(a,2),n=c[0],r=c[1],i=Object(t.useState)(),l=Object(j.a)(i,2),h=l[0],o=l[1];return Object(p.jsxs)(g.a,{onSubmit:function(e){e.preventDefault();var a=h/100;s(n/(a*a))},children:[Object(p.jsxs)(m.a,{row:!0,children:[Object(p.jsxs)(d.a,{htmlFor:"weightInKg",sm:"3",children:[Object(p.jsx)("span",{className:"fas fa-weight"})," Your Weight (In Kilograms) :"]}),Object(p.jsx)(b.a,{sm:"9",children:Object(p.jsx)(u.a,{id:"weightInKg",name:"weightInKg",type:"number",value:n||"",onChange:function(e){return r(e.target.valueAsNumber)},min:"0",max:"1000",required:!0})})]}),Object(p.jsxs)(m.a,{row:!0,children:[Object(p.jsxs)(d.a,{htmlFor:"heightInCentimeters",sm:"3",children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("span",{className:"fas fa-child"}),Object(p.jsx)("span",{className:"fas fa-arrows-alt-v"})]})," ","Your Height (In Centimeters) :"]}),Object(p.jsx)(b.a,{sm:"9",children:Object(p.jsx)(u.a,{id:"heightInCentimeters",name:"heightInCentimeters",type:"number",value:h||"",onChange:function(e){return o(e.target.valueAsNumber)},min:"0",max:"305",required:!0})})]}),Object(p.jsx)(m.a,{row:!0,children:Object(p.jsx)(b.a,{sm:{offset:"3",size:"9"},children:Object(p.jsx)(f.a,{block:!0,color:"primary",children:"Check BMI"})})})]})};a(23);var v=function(){var e=Object(t.useState)("Standard"),s=Object(j.a)(e,2),a=s[0],c=s[1],n=Object(t.useState)(),r=Object(j.a)(n,2),g=r[0],f=r[1],v=Object(t.useState)(""),w=Object(j.a)(v,2),S=w[0],y=w[1],C=Object(t.useState)(""),F=Object(j.a)(C,2),M=F[0],B=F[1],A=function(e){e<18.5?(y("You are under weight !"),B("underweight")):e>=18.5&&e<=24.9?(y("You are in a healthy weight range !"),B("healthy")):e>=25&&e<=29.9?(y("You are overweight !"),B("overweight")):e>=30&&(y("You are obese !"),B("obese")),f(e.toFixed(1))};return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(i.a,{fluid:!0,className:"bg-primary p-5",children:Object(p.jsx)(l.a,{children:Object(p.jsx)(h.a,{children:Object(p.jsx)(b.a,{xs:"12",children:Object(p.jsxs)("p",{className:"text-light text-center h2 ",children:[Object(p.jsx)("span",{className:"fas fa-calculator"})," BMI Calculator"]})})})})}),Object(p.jsxs)(l.a,{fluid:!0,className:"pb-5",children:[Object(p.jsxs)(h.a,{className:"p-3 text-center",children:[Object(p.jsxs)(b.a,{xs:"12",children:[Object(p.jsxs)(m.a,{row:!0,children:[Object(p.jsxs)(d.a,{htmlFor:"measurementSystem",sm:"3",children:[Object(p.jsx)("span",{className:"fas fa-balance-scale"})," Measurement System :"]}),Object(p.jsx)(b.a,{sm:"9",children:Object(p.jsxs)(u.a,{type:"select",id:"measurementSystem",name:"measurementSystem",value:a,onChange:function(e){return c(e.target.value)},children:[Object(p.jsx)("option",{value:"Standard",children:"Standard"}),Object(p.jsx)("option",{value:"Metric",children:"Metric"})]})})]}),"Standard"===a?Object(p.jsx)(N,{setBmiAndMessage:A}):Object(p.jsx)(I,{setBmiAndMessage:A})]}),Object(p.jsxs)(b.a,{sm:{offset:"3",size:"9"},children:[g&&"underweight"===M&&Object(p.jsxs)(o.a,{color:"danger",className:"rounded-0",children:[Object(p.jsx)(x.a,{children:Object(p.jsxs)("span",{className:"text-light h5",children:["Your BMI Is: ",g," ",Object(p.jsx)("span",{className:"fas fa-balance-scale-left"})]})}),Object(p.jsx)(O.a,{className:"bg-light",children:Object(p.jsxs)("span",{className:"text-danger h5",children:[S," ",Object(p.jsx)("span",{className:"fas fa-frown"})]})})]}),g&&"healthy"===M&&Object(p.jsxs)(o.a,{color:"success",className:"rounded-0",children:[Object(p.jsx)(x.a,{children:Object(p.jsxs)("span",{className:"text-light h5",children:["Your BMI Is: ",g," ",Object(p.jsx)("span",{className:"fas fa-balance-scale"})]})}),Object(p.jsx)(O.a,{className:"bg-light",children:Object(p.jsxs)("span",{className:"text-success h5",children:[S," ",Object(p.jsx)("span",{className:"fas fa-smile"})]})})]}),(g&&"overweight"===M||"obese"===M)&&Object(p.jsxs)(o.a,{color:"danger",className:"rounded-0",children:[Object(p.jsx)(x.a,{children:Object(p.jsxs)("span",{className:"text-light h5",children:["Your BMI Is: ",g," ",Object(p.jsx)("span",{className:"fas fa-balance-scale-right "})]})}),Object(p.jsx)(O.a,{className:"bg-light",children:Object(p.jsxs)("span",{className:"text-danger h5",children:[S," ",Object(p.jsx)("span",{className:"fas fa-frown"})]})})]})]})]}),Object(p.jsx)(h.a,{className:"bg-primary fixed-bottom",children:Object(p.jsx)(b.a,{xs:"12",children:Object(p.jsxs)("p",{className:"text-white text-center",children:[Object(p.jsx)("span",{className:"far fa-smile"})," Thanks For Using The App"]})})})]})]})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(s){var a=s.getCLS,t=s.getFID,c=s.getFCP,n=s.getLCP,r=s.getTTFB;a(e),t(e),c(e),n(e),r(e)}))};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root")),w()}},[[24,1,2]]]);
//# sourceMappingURL=main.a5a3c7f9.chunk.js.map