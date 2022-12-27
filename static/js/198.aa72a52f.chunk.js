"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[198],{8813:function(e,n,t){t.d(n,{B:function(){return m}});var r=t(9439),s=t(8699),i=t(4190),a=t(410),l=t(5863),o=t(824),c=t(5777),d=t(2791),u=t(1087),x=t(184),m=function(e){var n=e.handleSignUp,t=(0,d.useState)(!1),m=(0,r.Z)(t,2),h=m[0],f=m[1],j=(0,a.ff)("gray.200","gray.700");return(0,x.jsx)(i.kC,{align:"center",justify:"center",bg:j,children:(0,x.jsxs)(i.Kq,{spacing:1,mx:"auto",maxW:"lg",py:3,px:3,children:[(0,x.jsxs)(i.Kq,{align:"center",children:[(0,x.jsx)(i.X6,{fontSize:"2xl",textAlign:"center",children:"Sign up to your account"}),(0,x.jsx)(i.xv,{fontSize:"lg",color:"gray.600",children:"to enjoy our cool APP \u270c\ufe0f"})]}),(0,x.jsx)(i.xu,{rounded:"lg",bg:(0,a.ff)("white","gray.700"),boxShadow:"lg",p:8,children:(0,x.jsxs)(i.Kq,{spacing:1,as:"form",onSubmit:n,children:[(0,x.jsxs)(l.NI,{id:"firstName",isRequired:!0,children:[(0,x.jsx)(l.lX,{children:"Nickname"}),(0,x.jsx)(o.II,{size:"md",type:"text",name:"username",placeholder:"Sara Repetovna"})]}),(0,x.jsxs)(l.NI,{id:"email",isRequired:!0,children:[(0,x.jsx)(l.lX,{children:"Email address"}),(0,x.jsx)(o.II,{size:"md",type:"email",name:"email",placeholder:"email@mail.com"})]}),(0,x.jsxs)(l.NI,{id:"password",isRequired:!0,children:[(0,x.jsx)(l.lX,{children:"Password"}),(0,x.jsxs)(o.BZ,{children:[(0,x.jsx)(o.II,{size:"md",type:h?"text":"password",name:"password",pattern:"(?=.*\\d).{7,}",placeholder:"7 characters or more, please"}),(0,x.jsx)(o.xH,{h:"full",children:(0,x.jsx)(c.zx,{variant:"ghost",onClick:function(){return f((function(e){return!e}))},children:h?(0,x.jsx)(s.ON,{}):(0,x.jsx)(s.tp,{})})})]})]}),(0,x.jsx)(i.Kq,{pt:2,children:(0,x.jsx)(c.zx,{type:"submit",loadingText:"Submitting",size:"md",fontSize:"md",bg:"blue.400",color:"white",_hover:{bg:"blue.500"},children:"Sign up"})}),(0,x.jsx)(i.Kq,{pt:1,children:(0,x.jsxs)(i.xv,{align:"center",fontSize:"md",children:["Already a user?",(0,x.jsx)(i.rU,{as:u.OL,to:"/login",color:"blue.400",fontSize:"lg",ml:"1",children:"Login"})]})})]})})]})})}},2198:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r=t(4190),s=t(410),i=t(5048),a=t(4903),l=function(e){return e.filter.filterValue},o=t(9439),c=t(9126),d=t(6150),u=t(5777),x=t(184),m=function(e){var n=e.contact,t=n.name,s=n.number,i=n.id,l=(0,a.useDeleteContactMutation)(),m=(0,o.Z)(l,2),h=m[0],f=m[1],j=f.isLoading,g=f.isSuccess,p=(0,d.pm)(),b=j||g;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.xv,{ml:"5%",mr:"auto",fontSize:{md:"lg",lg:"lg"},fontWeight:"500",children:t}),(0,x.jsx)(r.xv,{ml:"auto",mr:"5%",fontWeight:"500",fontSize:{md:"lg",lg:"lg"},children:s}),(0,x.jsx)(u.zx,{onClick:function(){h(i).unwrap(),p({position:"top",title:"OK, we've removed -  ".concat(t," "),status:"success",isClosable:!0})},disabled:b,color:"#f44336",children:(0,x.jsx)(c.yvY,{size:20})})]})},h=function(){var e=(0,i.v9)(l),n=(0,a.useGetContactsQuery)(),t=n.data,s=void 0===t?[]:t,o=n.isLoading,d=e.toLowerCase().trim(),u=s.filter((function(e){return e.name.toLowerCase().includes(d)}));return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.aV,{spacing:2,w:{base:"384px",lg:"450px"},children:u.map((function(e){return(0,x.jsxs)(r.HC,{w:"100%",display:"flex",alignItems:"center",children:[(0,x.jsx)(r.DE,{as:c.me1,boxSize:{base:5,md:6,lg:7},color:"blue.500"}),(0,x.jsx)(m,{contact:e})]},e.id)}))}),!o&&(0,x.jsx)(v,{visibleContacts:u.length,savedContactsNumber:s.length})]})},f=t(7135),j=t(824),g=function(){var e=(0,i.I0)();return(0,x.jsx)(r.kC,{children:(0,x.jsxs)(j.BZ,{children:[(0,x.jsx)(j.Ui,{children:"Find contacts :",fontSize:"1em"}),(0,x.jsx)(j.II,{type:"text",name:"filter",placeholder:"Enter name",onChange:function(n){var t=n.target.value;e((0,f.gQ)(t))},fontSize:"1em",mb:2})]})})},p=t(3702),b=function(){var e=(0,a.useGetContactsQuery)().data,n=(0,a.useAddContactMutation)(),t=(0,o.Z)(n,2),s=t[0],i=t[1].isLoading,l=(0,p.R)(),c=l.contactAddedToast,d=l.existingContactToast;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(r.Kq,{as:"form",spacing:2,onSubmit:function(n){n.preventDefault();var t=n.target,r=t.elements.name.value,i=t.elements.number.value;if(e.some((function(e){return e.name.toLowerCase()===r.toLowerCase()})))return t.reset(),d();s({name:r,number:i}).then(c()),t.reset()},mb:4,children:[(0,x.jsxs)(j.BZ,{children:[(0,x.jsx)(j.Ui,{children:"Name:",w:"5.2rem",fontSize:"1em"}),(0,x.jsx)(j.II,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Only letters, apostrophe, dash and spaces.",required:!0,placeholder:"Enter name",w:"17rem",fontSize:"1em"})]}),(0,x.jsxs)(j.BZ,{children:[(0,x.jsx)(j.Ui,{children:"Number:",w:"5.2rem",fontSize:"1em"}),(0,x.jsx)(j.II,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter phone number",w:"17rem",fontSize:"1em"})]}),(0,x.jsx)(u.zx,{type:"submit",disabled:i,fontSize:"l",children:"Add contact"})]})})},v=function(e){var n=e.visibleContacts,t=e.savedContactsNumber;return(0,x.jsx)(r.xu,{textAlign:"center",children:t!==n?(0,x.jsxs)(r.xv,{children:["Found contacts: ",(0,x.jsx)("b",{children:n})]}):(0,x.jsxs)(r.xv,{children:["Total number of contacts: ",(0,x.jsx)("b",{children:t})]})})},z=(t(8813),t(4903).useGetContactsQuery),y=function(){var e=z(),n=e.error;return e.isLoading&&!n&&(0,x.jsx)("b",{children:"Request in progress..."})},S=t(3728);function C(){var e=(0,s.ff)("gray.50","gray.700");return(0,x.jsxs)(r.kC,{name:"flex",direction:"column",align:"center",pt:10,px:10,bg:e,h:"100%",children:[(0,x.jsxs)(r.X6,{as:"h1",fontSize:"2xl",display:"flex",alignItems:"flex-end",mb:2,children:["Phonebook ",(0,x.jsx)(S.efA,{})]}),(0,x.jsx)(b,{}),(0,x.jsxs)(r.X6,{as:"h2",fontSize:"xl",display:"flex",alignItems:"flex-end",mb:2,children:["Contacts ",(0,x.jsx)(S.fOH,{})]}),(0,x.jsx)(g,{}),(0,x.jsx)(y,{}),(0,x.jsx)(h,{})]})}}}]);
//# sourceMappingURL=198.aa72a52f.chunk.js.map