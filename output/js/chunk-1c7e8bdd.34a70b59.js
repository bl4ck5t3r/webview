(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c7e8bdd"],{"610d":function(e,t,c){"use strict";c("7384")},7384:function(e,t,c){},e909:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a=function(e){return Object(n["pushScopeId"])("data-v-48cc53ca"),e=e(),Object(n["popScopeId"])(),e},r={class:"adminprison"},o={class:"card w-25 m-5"},i={class:"card-body"},s=a((function(){return Object(n["createElementVNode"])("h5",{class:"card-title"},"Admin Prison",-1)})),u=a((function(){return Object(n["createElementVNode"])("h6",{class:"card-subtitle mb-2 text-muted"},"Du hast offenbar Mist gebaut",-1)})),d=a((function(){return Object(n["createElementVNode"])("p",{class:"card-text"},"Laufe die roten Checkpoints ab. Wenn du mit deiner Strafe durch bist, kommst du in die Charakterauswahl zurück.",-1)})),l={key:0},b=a((function(){return Object(n["createElementVNode"])("p",{class:"text-muted"},"Du musst noch einen Checkpoint ablaufen.",-1)})),p=[b],f={key:1},m={class:"text-muted"};function h(e,t,c,a,b,h){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,[Object(n["createElementVNode"])("div",o,[Object(n["createElementVNode"])("div",i,[s,u,d,1===e.leftCheckpoints?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",l,p)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",f,[Object(n["createElementVNode"])("p",m,"Du musst noch "+Object(n["toDisplayString"])(e.leftCheckpoints)+" Checkpoints ablaufen.",1)]))])])])}var k=c("d4ec"),j=c("bee2"),O=c("257e"),v=c("262e"),y=c("2caf"),E=c("ade3"),w=(c("99af"),c("ce1f")),C=c("17bd"),N=function(e){Object(v["a"])(c,e);var t=Object(y["a"])(c);function c(){var e;Object(k["a"])(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a)),Object(E["a"])(Object(O["a"])(e),"leftCheckpoints",0),e}return Object(j["a"])(c,[{key:"mounted",value:function(){var e=this;C["a"].emit("adminprison:ready"),C["a"].on("adminprison:start",(function(t){return e.start(t)})),C["a"].on("adminprison:update",(function(t){return e.update(t)}))}},{key:"start",value:function(e){this.leftCheckpoints=e}},{key:"update",value:function(e){this.leftCheckpoints=e}}]),c}(w["b"]),V=(c("610d"),c("6b0d")),B=c.n(V);const x=B()(N,[["render",h],["__scopeId","data-v-48cc53ca"]]);t["default"]=x}}]);
//# sourceMappingURL=chunk-1c7e8bdd.34a70b59.js.map