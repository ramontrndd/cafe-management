import{Ba as P,K as p,L as S,P as M,S as O,c as v,k as x,m as C}from"./chunk-4Q2NOXX7.js";import{$ as m,Hc as b,Ub as a,Vb as l,aa as h,ab as c,bb as d,fa as g,ja as u,ka as f,yb as o,zb as r}from"./chunk-5SPX2Z63.js";var y=(()=>{let t=class t{constructor(e){this.httpClient=e,this.url=S.apiUrl}getDetails(){return this.httpClient.get(this.url+"/dashboard/details/")}};t.\u0275fac=function(i){return new(i||t)(g(v))},t.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();var E=(()=>{let t=class t{ngAfterViewInit(){}constructor(e,i,s){this.dashboardService=e,this.ngxService=i,this.snackbarService=s,this.ngxService.start(),this.dashboardData()}dashboardData(){this.dashboardService.getDetails().subscribe(e=>{this.ngxService.stop(),this.data=e},e=>{this.ngxService.stop(),console.log(e),e.error?.error?this.responseMessage=e.error?.message:this.responseMessage=p.genericError,this.snackbarService.openSnackbar(this.responseMessage,p.error)})}};t.\u0275fac=function(i){return new(i||t)(d(y),d(O),d(M))},t.\u0275cmp=u({type:t,selectors:[["app-dashboard"]],decls:32,vars:3,consts:[[1,"row"],[1,"column"],[1,"card"],[1,"container"],[1,"title"],["routerLink","/cafe/category",1,"button"],["routerLink","/cafe/product",1,"button"],["routerLink","/cafe/bill",1,"button"]],template:function(i,s){i&1&&(o(0,"body")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"h2",4),a(6,"Todas as Categorias"),r(),o(7,"h1",4),a(8),r(),o(9,"p")(10,"button",5),a(11," VER CATEGORIAS "),r()()()()(),o(12,"div",1)(13,"div",2)(14,"div",3)(15,"h2",4),a(16,"Todos os produtos"),r(),o(17,"h1",4),a(18),r(),o(19,"p")(20,"button",6),a(21," VER PRODUTOS "),r()()()()(),o(22,"div",1)(23,"div",2)(24,"div",3)(25,"h2",4),a(26,"Gerenciar Contas"),r(),o(27,"h1",4),a(28),r(),o(29,"p")(30,"button",7),a(31," VER CONTAS "),r()()()()()()()),i&2&&(c(8),l(s.data==null?null:s.data.category),c(10),l(s.data==null?null:s.data.product),c(10),l(s.data==null?null:s.data.bill))},dependencies:[x],styles:['h2[_ngcontent-%COMP%]{padding:5px}h1[_ngcontent-%COMP%]{margin-bottom:25px}.position-relative[_ngcontent-%COMP%]{position:relative}.add-contact[_ngcontent-%COMP%]{position:absolute;right:17px;top:57px}.column[_ngcontent-%COMP%]{float:left;width:40.3%;margin-bottom:16px;padding:8 8px}.card[_ngcontent-%COMP%]{padding:10px;margin:10px;height:100%;box-shadow:0 4px 8px #0003}.about-section[_ngcontent-%COMP%]{padding:50px;text-align:center;background-color:#474e5d;color:#fff}.container[_ngcontent-%COMP%]{margin:15px}.container[_ngcontent-%COMP%]:after, .row[_ngcontent-%COMP%]:after{content:"";clear:both;display:table}.title[_ngcontent-%COMP%]{color:#000;text-align:center!important}.button[_ngcontent-%COMP%]{border:none;outline:0;display:inline-block;padding:8px;color:#fff;background-color:#e53935;text-align:center;cursor:pointer;width:100%;font-weight:700}.button[_ngcontent-%COMP%]:hover{background-color:#555}@media screen and (max-width: 650px){.column[_ngcontent-%COMP%]{width:100%;display:block}}']});let n=t;return n})();var w=[{path:"",component:E}];var B=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=f({type:t}),t.\u0275inj=h({imports:[b,P,C.forChild(w)]});let n=t;return n})();export{B as DashboardModule};
