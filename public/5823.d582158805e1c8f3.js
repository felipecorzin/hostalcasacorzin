"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5823],{5823:(m,i,o)=>{o.r(i),o.d(i,{ServiciosPage:()=>P});var l=o(5861),_=o(6895),u=o(433),t=o(7173),e=o(1571),d=o(8468),g=o(9846),v=o(7556);let P=(()=>{class n{constructor(r,a,s,h,p){this.router=r,this.alertCtrl=a,this.navCtrl=s,this.uiService=h,this.authService=p}ngOnInit(){}reservas(){this.navCtrl.navigateForward("/reservas")}logout(){var r=this;return(0,l.Z)(function*(){yield(yield r.alertCtrl.create({header:"Warning!!!",message:"Do you want to log out of the APP?",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:s=>{console.log("Confirmado Cancelar: blah")}},{text:"OK",handler:()=>{console.log("Confirmado Aceptar"),r.authService.logout(),r.router.navigateByUrl("/",{replaceUrl:!0}),r.uiService.presentToast("Session Closed on the APP")}}]})).present()})()}}return n.\u0275fac=function(r){return new(r||n)(e.Y36(d.F0),e.Y36(t.Br),e.Y36(t.SH),e.Y36(g.F),e.Y36(v.e))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-servicios"]],standalone:!0,features:[e.jDz],decls:33,vars:0,consts:[[1,"ion-no-border"],["color","primary"],["slot","start"],["slot","end"],[3,"tap"],["md","log-out-sharp","slot","icon-only","color","light"],["src","../../../assets/servicios/restaurante.jpg"],["expand","block","shape","round",3,"tap"],["src","../../../assets/servicios/terraza.jpg"],["src","../../../assets/servicios/piscina-exterior.jpg"],["src","../../../assets/servicios/sala-de-ocio.jpg"]],template:function(r,a){1&r&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5," Servicios "),e.qZA(),e.TgZ(6,"ion-buttons",3)(7,"ion-button",4),e.NdJ("tap",function(){return a.logout()}),e._UZ(8,"ion-icon",5),e.qZA()()()(),e.TgZ(9,"ion-content")(10,"ion-card")(11,"ion-card-header")(12,"ion-card-title"),e._uU(13,"Restaurante"),e.qZA()(),e._UZ(14,"img",6),e.TgZ(15,"ion-card-content")(16,"ion-button",7),e.NdJ("tap",function(){return a.reservas()}),e._uU(17," Reservas "),e.qZA()()(),e.TgZ(18,"ion-card")(19,"ion-card-header")(20,"ion-card-title"),e._uU(21," Terraza de Verano "),e.qZA()(),e._UZ(22,"img",8),e.qZA(),e.TgZ(23,"ion-card")(24,"ion-card-header")(25,"ion-card-title"),e._uU(26," Piscina Exterior "),e.qZA()(),e._UZ(27,"img",9),e.qZA(),e.TgZ(28,"ion-card")(29,"ion-card-header")(30,"ion-card-title"),e._uU(31," Sala de ocio "),e.qZA()(),e._UZ(32,"img",10),e.qZA()())},dependencies:[t.Pc,t.YG,t.Sm,t.PM,t.FN,t.Zi,t.Dq,t.W2,t.Gu,t.gu,t.fG,t.wd,t.sr,_.ez,u.u5],styles:["ion-card-title[_ngcontent-%COMP%]{font-size:2rem;text-align:center;color:var(--ion-color-light)}ion-button[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;font-family:Poppins,sans-serif;text-transform:capitalize}"]}),n})()}}]);