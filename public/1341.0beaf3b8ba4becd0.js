"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1341],{1341:(h,s,o)=>{o.r(s),o.d(s,{PlanDetallePageModule:()=>m});var g=o(6895),u=o(433),l=o(7173),i=o(8468),e=o(1571),p=o(374);const d=[{path:"",component:(()=>{class t{constructor(a,n,c){this.router=a,this.route=n,this.planService=c,this.plan={id:"",title:"",desc:"",date:"",time:"",img:""}}ngOnInit(){this.loadPlan(this.route.snapshot.params.id)}regresar(){this.router.navigate(["/mis-planes"])}loadPlan(a){this.planService.getPlan(a).subscribe({next:n=>{this.plan=n,console.log(n)},error:n=>console.error(n)})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(i.F0),e.Y36(i.gz),e.Y36(p.D))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-plan-detalle"]],decls:23,vars:5,consts:[[1,"ion-no-border"],["color","primary"],["slot","start"],["fill","clear",3,"tap"],["md","arrow-back-sharp","slot","icon-only","color","light"],[3,"src"],[1,"ion-text-center"]],template:function(a,n){1&a&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2)(3,"ion-button",3),e.NdJ("tap",function(){return n.regresar()}),e._UZ(4,"ion-icon",4),e.qZA()(),e.TgZ(5,"ion-title"),e._uU(6," PlanDetail "),e.qZA()()(),e.TgZ(7,"ion-content")(8,"ion-card")(9,"ion-card-header")(10,"ion-card-title"),e._uU(11),e.qZA()(),e.TgZ(12,"ion-card-content"),e._UZ(13,"img",5),e.TgZ(14,"h3")(15,"strong"),e._uU(16),e.qZA()(),e.TgZ(17,"h3")(18,"strong"),e._uU(19),e.qZA()(),e.TgZ(20,"p",6)(21,"strong"),e._uU(22),e.qZA()()()()()),2&a&&(e.xp6(11),e.hij(" ",n.plan.title," "),e.xp6(2),e.s9C("src",n.plan.img,e.LSH),e.xp6(3),e.Oqu(n.plan.date),e.xp6(3),e.Oqu(n.plan.time),e.xp6(3),e.Oqu(n.plan.desc))},dependencies:[l.YG,l.Sm,l.PM,l.FN,l.Zi,l.Dq,l.W2,l.Gu,l.gu,l.wd,l.sr],styles:["ion-card-title[_ngcontent-%COMP%]{font-size:1.5em;font-weight:700;--color: #ffffff;text-align:center}img[_ngcontent-%COMP%]{width:100%;height:300px}"]}),t})()}];let P=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.Bz.forChild(d),i.Bz]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.ez,u.u5,l.Pc,P]}),t})()}}]);