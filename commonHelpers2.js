import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */let e={email:"",message:""};const a=document.querySelector(".feedback-form"),r=a.querySelector('input[name="email"]'),m=a.querySelector('textarea[name="message"]');window.addEventListener("load",()=>{const t=localStorage.getItem("feedback-form-state");t&&(e=JSON.parse(t),r.value=e.email,m.value=e.message)});a.addEventListener("input",t=>{e[t.target.name]=t.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});a.addEventListener("submit",t=>{if(t.preventDefault(),e.email.trim()===""||e.message.trim()===""){alert("Please, fill all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},a.reset()});
//# sourceMappingURL=commonHelpers2.js.map
