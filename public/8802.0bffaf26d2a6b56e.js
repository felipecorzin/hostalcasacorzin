"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8802],{8802:(C,p,s)=>{s.r(p),s.d(p,{LoginPageModule:()=>I});var c=s(6895),r=s(433),t=s(7173),g=s(8468),m=s(5861),o=s(1571),f=s(9846),h=s(7556);function P(n,a){1&n&&(o.TgZ(0,"ion-note",19),o._uU(1,"Email is invalid"),o.qZA())}function y(n,a){1&n&&o._UZ(0,"ion-input",20)}function v(n,a){1&n&&o._UZ(0,"ion-input",21)}function w(n,a){1&n&&(o.TgZ(0,"ion-note",19),o._uU(1,"Password needs to be 6 characters"),o.qZA())}function Z(n,a){1&n&&o._UZ(0,"ion-icon",22)}function L(n,a){1&n&&o._UZ(0,"ion-icon",23)}const b=[{path:"",component:(()=>{class n{constructor(i,e,l,d,u,_){this.fb=i,this.router=e,this.navCtrl=l,this.loadingCtrl=d,this.uiService=u,this.authService=_,this.showPwd=!1}ngOnInit(){this.credentials=this.fb.group({email:["jfelipestc@gmail.com",[r.kI.required,r.kI.email]],password:["19041968",[r.kI.required,r.kI.minLength(6)]]})}get name(){return this.credentials.get("name")}get email(){return this.credentials.get("email")}get password(){return this.credentials.get("password")}regresar(){this.navCtrl.navigateBack("intro")}login(){var i=this;return(0,m.Z)(function*(){const e=yield i.loadingCtrl.create({cssClass:"miLoging",message:"Please wait...",duration:2e3,spinner:"bubbles"});yield e.present();const{email:l,password:d}=i.credentials.value;i.authService.login(l,d).then(u=>{!0===u?i.router.navigateByUrl("/home",{replaceUrl:!0}):i.uiService.alertaInformativaLogin("Error",u,"error")}),yield e.dismiss()})()}}return n.\u0275fac=function(i){return new(i||n)(o.Y36(r.qu),o.Y36(g.F0),o.Y36(t.SH),o.Y36(t.HT),o.Y36(f.F),o.Y36(h.e))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-login"]],decls:33,vars:8,consts:[[1,"ion-no-border"],["slot","start"],[3,"tap"],["slot","icon-only","md","arrow-back-sharp","color","dark"],[3,"formGroup","ngSubmit"],[1,"input-group"],["lines","none"],["position","floating"],["type","email","formControlName","email"],["slot","error",4,"ngIf"],["type","text","formControlName","password",4,"ngIf"],["type","password","formControlName","password",4,"ngIf"],["fill","clear","slot","end","color","primary",3,"tap"],["slot","icon-only","name","eye","color","dark",4,"ngIf"],["slot","icon-only","name","eye-off","color","dark",4,"ngIf"],["type","submit","expand","block","shape","round",1,"miBoton",3,"disabled"],[1,"text"],[1,"ion-text-center"],["type","button","expand","block","shape","round","routerLink","/register",1,"miBoton"],["slot","error"],["type","text","formControlName","password"],["type","password","formControlName","password"],["slot","icon-only","name","eye","color","dark"],["slot","icon-only","name","eye-off","color","dark"]],template:function(i,e){1&i&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),o.NdJ("tap",function(){return e.regresar()}),o._UZ(4,"ion-icon",3),o.qZA()(),o.TgZ(5,"ion-title"),o._uU(6," Iniciar Sesi\xf3n "),o.qZA()()(),o.TgZ(7,"ion-content")(8,"form",4),o.NdJ("ngSubmit",function(){return e.login()}),o.TgZ(9,"div",5)(10,"ion-item",6)(11,"ion-label",7),o._uU(12,"Email"),o.qZA(),o._UZ(13,"ion-input",8),o.YNc(14,P,2,0,"ion-note",9),o.qZA(),o.TgZ(15,"ion-item",6)(16,"ion-label",7),o._uU(17,"Password"),o.qZA(),o.YNc(18,y,1,0,"ion-input",10),o.YNc(19,v,1,0,"ion-input",11),o.YNc(20,w,2,0,"ion-note",9),o.TgZ(21,"ion-button",12),o.NdJ("tap",function(){return e.showPwd=!e.showPwd}),o.YNc(22,Z,1,0,"ion-icon",13),o.YNc(23,L,1,0,"ion-icon",14),o.qZA()()(),o.TgZ(24,"ion-button",15),o._uU(25," IniciarSesi\xf3n "),o.qZA()(),o.TgZ(26,"div",16)(27,"ion-text")(28,"h3",17)(29,"strong"),o._uU(30," Reg\xedstrate gratis y podr\xe1s acceder a todos los servicios de la app ChevroletCamaro "),o.qZA()()()(),o.TgZ(31,"ion-button",18),o._uU(32," Registrate "),o.qZA()()),2&i&&(o.xp6(8),o.Q6J("formGroup",e.credentials),o.xp6(6),o.Q6J("ngIf",(e.email.dirty||e.email.touched)&&e.email.errors),o.xp6(4),o.Q6J("ngIf",e.showPwd),o.xp6(1),o.Q6J("ngIf",!e.showPwd),o.xp6(1),o.Q6J("ngIf",(e.password.dirty||e.password.touched)&&e.password.errors),o.xp6(2),o.Q6J("ngIf",e.showPwd),o.xp6(1),o.Q6J("ngIf",!e.showPwd),o.xp6(1),o.Q6J("disabled",!e.credentials.valid))},dependencies:[c.O5,r._Y,r.JJ,r.JL,t.YG,t.Sm,t.W2,t.Gu,t.gu,t.pK,t.Ie,t.Q$,t.uN,t.yW,t.wd,t.sr,t.j9,t.YI,g.rH,r.sg,r.u],styles:[".input-group[_ngcontent-%COMP%]{background:#fff;border-radius:10px;overflow:hidden;margin-bottom:15px}.errors[_ngcontent-%COMP%]{font-size:small;color:#fff;background:var(--ion-color-danger);padding-left:15px;padding-top:5px;padding-bottom:5px}"]}),n})()}];let T=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[g.Bz.forChild(b),g.Bz]}),n})(),I=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[c.ez,r.u5,t.Pc,T,r.UX]}),n})()}}]);