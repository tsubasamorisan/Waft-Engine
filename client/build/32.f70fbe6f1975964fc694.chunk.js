(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{f9acdd9a220c831bfd2d:function(e,n,t){"use strict";t.r(n);var a,o=t("8af190b70a6bc55c6f1b"),r=t.n(o),i=(t("8a2d1b95e05b6a321e74"),t("a28fc3c963a1d4d1a2e5")),c=t("ab4cb61bcb2dc161defb"),d=t("d7dd51e1bf6bfc2c9c3d"),u=t("3aced5b508e7389026da"),s=t("4a683f0a5e64e66a8eb9"),l=t.n(s),p=t("b02fe3f80d4238b52f20"),h=t.n(p),f=t("2aea235afd5c55b8b19b"),m=t.n(f),v=t("435859b6b76fb67a754a"),b=t.n(v),y=t("c7fd554010f79f6c0ef8"),g=t.n(y),R=t("adc20f99e57c573c589c"),_=t("d95b0cf107403b178365"),A=t("b4092abb20ebe507ce4c"),S=t("a3c3d69eeb745512366a"),C=t("3a16cc0322e2a723929e"),O=t("d6c5c89ff4a0f771f9c3"),k=t("e95a63b25fb92ed15721"),w=t("16c7abd7abc407b9f247"),j=t.n(w),P=t("c09d19c0d058d138126d"),T=t.n(P),x=t("ae9596d86622312bdbac"),M=t.n(x),V=t("63bac7d5ea40ecc9ba06"),E=t.n(V),N=t("e9cb1a74b44c7bf473df"),D=t.n(N),F=t("e799c547a20a503b338f"),B=t.n(F),G=t("0d939196e59ed73c94e6");function W(e,n,t,o){a||(a="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(n||0===i||(n={children:void 0}),n&&r)for(var c in r)void 0===n[c]&&(n[c]=r[c]);else n||(n=r||{});if(1===i)n.children=o;else if(i>1){for(var d=new Array(i),u=0;u<i;u++)d[u]=arguments[u+3];n.children=d}return{$$typeof:a,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}var z,q=["GET","POST","PUT","PATCH","DELETE"],I=W(D.a,{fontSize:"small"}),$=W(D.a,{fontSize:"small"}),H=l()({cardCategoryWhite:{color:"rgba(255,255,255,.62)",margin:"0",fontSize:"14px",marginTop:"0",marginBottom:"0"},cardTitleWhite:{color:"#FFFFFF",marginTop:"0px",minHeight:"auto",fontWeight:"300",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",marginBottom:"3px",textDecoration:"none"},box:{padding:20,border:"1px solid #ccc",marginBottom:20,borderRadius:6}}),J=Object(c.compose)(k.withRouter,H)(function(e){var n=e.each,t=e.classes,a=e.pathIndex,o=e.handleAccessTypeChange,r=e.handleAdminRoutesChange,i=e.handleRemoveAdminRoute,c=e.handleAddAdminRoute,d=e.handleServerRoutesMethodChange,u=e.handleServerRoutesRouteChange,s=e.handleRemoveServerRoute,l=e.handleAddServerRoute,p=e.handleRemovePath;return W("section",{className:t.box},void 0,W(G.Grid,{container:!0,spacing:24},void 0,W(G.Grid,{item:!0,xs:12,md:6},void 0,W(g.a,{fullWidth:!0,margin:"normal",className:"mt-0",label:"Access Type",id:"".concat(n._id,"-access-type-").concat(a),value:n.access_type,onChange:o(a)})),W(G.Grid,{className:"justify-end",item:!0,xs:12,md:6},void 0,W(m.a,{size:"sm",className:"","aria-label":"Delete",onClick:p(a)},void 0,"Delete Access Type"))),W(G.Grid,{container:!0,spacing:24},void 0,W(G.Grid,{item:!0,xs:12,md:5},void 0,(n.admin_routes||[]).map(function(e,t){return W("div",{},"".concat(n._id,"-").concat(a,"-each-admin-route-").concat(t),W(g.a,{fullWidth:!0,margin:"normal",label:"Client Route",id:"".concat(n._id,"-each-admin-route-access-type-").concat(t),value:e,onChange:r(a,t)}),W(B.a,{"aria-label":"Delete client route",onClick:i(a,t)},void 0,I))}),W(m.a,{size:"small","aria-label":"Add Client Route",onClick:c(a)},void 0,"Add Client Route")),W(G.Grid,{item:!0,xs:12,md:5},void 0,(n.server_routes||[]).map(function(e,t){return W("div",{},"".concat(n._id,"-").concat(a,"-").concat(e._id,"-each-server-route-").concat(t),W(j.a,{className:"selectbox methodInput"},void 0,W(T.a,{htmlFor:"".concat(n._id,"-").concat(e._id,"-each-server-route-").concat(t,"-method")},void 0,"Method"),W(M.a,{placeholder:"Method",value:e.method,onChange:d(a,t),inputProps:{name:"Method",id:"".concat(n._id,"-").concat(e._id,"-each-server-route-").concat(t,"-method")}},void 0,q.map(function(n){return W(E.a,{value:n},"".concat(n._id,"-").concat(a,"-").concat(e._id,"-each-server-route-method-").concat(n),n)}))),W(g.a,{label:"Server Route",id:"".concat(n._id,"-").concat(e._id,"-each-admin-server-route-route-access-type-").concat(t),inputProps:{value:e.route,onChange:u(a,t)}}),W(B.a,{"aria-label":"Delete Server Route",onClick:s(a,t)},void 0,$))}),W(m.a,{size:"small","aria-label":"Add Server Route",onClick:l(a)},void 0,"Add Server Route"))))}),L=t("d733903be61208652859"),U=t("5932430beb0c05240602");function K(e){return(K="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,n,t,a){z||(z="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,r=arguments.length-3;if(n||0===r||(n={children:void 0}),n&&o)for(var i in o)void 0===n[i]&&(n[i]=o[i]);else n||(n=o||{});if(1===r)n.children=a;else if(r>1){for(var c=new Array(r),d=0;d<r;d++)c[d]=arguments[d+3];n.children=c}return{$$typeof:z,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function X(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){ae(e,n,t[n])})}return e}function Y(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Z(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ne(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function te(e,n){return(te=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function ae(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var oe=function(e){function n(){var e,t,a,o;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return a=this,o=(e=ee(n)).call.apply(e,[this].concat(i)),t=!o||"object"!==K(o)&&"function"!==typeof o?ne(a):o,ae(ne(t),"handleChange",function(e){return function(n){n.persist(),t.props.setOneValue({key:e,value:n.target.value})}}),ae(ne(t),"handleChecked",function(e){return function(n){n.persist(),t.props.setOneValue({key:e,value:n.target.checked})}}),ae(ne(t),"handleAddPath",function(e){e.persist(),t.props.setOneValue({key:"path",value:[].concat(Y(t.props.one.path),[{access_type:"",admin_routes:[],server_routes:[]}])})}),ae(ne(t),"handleRemovePath",function(e){return function(n){n.persist(),t.props.setOneValue({key:"path",value:[].concat(Y(t.props.one.path.slice(0,e)),Y(t.props.one.path.slice(e+1)))})}}),ae(ne(t),"handleAccessTypeChange",function(e){return function(n){n.persist();var a=Y(t.props.one.path);a[e].access_type=n.target.value,t.props.setOneValue({key:"path",value:a})}}),ae(ne(t),"handleAdminRoutesChange",function(e,n){return function(a){a.persist();var o=Y(t.props.one.path);o[e].admin_routes[n]=a.target.value,t.props.setOneValue({key:"path",value:o})}}),ae(ne(t),"handleRemoveAdminRoute",function(e,n){return function(a){a.persist();var o=Y(t.props.one.path);o[e].admin_routes=[].concat(Y(o[e].admin_routes.slice(0,n)),Y(o[e].admin_routes.slice(n+1))),t.props.setOneValue({key:"path",value:o})}}),ae(ne(t),"handleAddAdminRoute",function(e){return function(n){n.persist();var a=Y(t.props.one.path);a[e].admin_routes=[].concat(Y(a[e].admin_routes),[""]),t.props.setOneValue({key:"path",value:a})}}),ae(ne(t),"handleServerRoutesMethodChange",function(e,n){return function(a){a.persist();var o=Y(t.props.one.path);o[e].server_routes[n].method=a.target.value,t.props.setOneValue({key:"path",value:o})}}),ae(ne(t),"handleServerRoutesRouteChange",function(e,n){return function(a){a.persist();var o=Y(t.props.one.path);o[e].server_routes[n].route=a.target.value,t.props.setOneValue({key:"path",value:o})}}),ae(ne(t),"handleAddServerRoute",function(e){return function(n){n.persist();var a=t.props.one.path,o=Y(a);o[e]=X({},a[e],{server_routes:[].concat(Y(a[e].server_routes),[{route:"",method:""}])}),t.props.setOneValue({key:"path",value:o})}}),ae(ne(t),"handleRemoveServerRoute",function(e,n){return function(a){a.persist();var o=Y(t.props.one.path);o[e].server_routes=[].concat(Y(o[e].server_routes.slice(0,n)),Y(o[e].server_routes.slice(n+1))),t.props.setOneValue({key:"path",value:o})}}),ae(ne(t),"handleSave",function(){t.props.addEditRequest()}),ae(ne(t),"handleBack",function(){t.props.push("/admin/module-manage")}),t}var t,a,o;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&te(e,n)}(n,r.a.PureComponent),t=n,(a=[{key:"componentDidMount",value:function(){this.props.match.params&&this.props.match.params.id&&this.props.loadOneRequest(this.props.match.params.id)}},{key:"render",value:function(){var e=this,n=this.props,t=n.classes,a=n.match.params.id,o=n.one;return Q(r.a.Fragment,{},void 0,Q(L.a,{},void 0," ",a?"Edit":"Add"," Module"),Q(U.a,{},void 0,Q(h.a,{className:t.paper},void 0,Q(b.a,{container:!0,spacing:24},void 0,Q(b.a,{item:!0,xs:12,sm:6},void 0,Q(g.a,{required:!0,id:"module_name",label:"Module Name",value:o.module_name,onChange:this.handleChange("module_name"),fullWidth:!0})),Q(b.a,{item:!0,xs:12},void 0,Q(g.a,{required:!0,id:"description",label:"Descrition",value:o.description,onChange:this.handleChange("description"),fullWidth:!0})),Q(b.a,{item:!0,xs:12},void 0,o.path.map(function(n,t){return Q(J,{each:n,pathIndex:t,handleAccessTypeChange:e.handleAccessTypeChange,handleAdminRoutesChange:e.handleAdminRoutesChange,handleRemoveAdminRoute:e.handleRemoveAdminRoute,handleAddAdminRoute:e.handleAddAdminRoute,handleServerRoutesMethodChange:e.handleServerRoutesMethodChange,handleServerRoutesRouteChange:e.handleServerRoutesRouteChange,handleRemoveServerRoute:e.handleRemoveServerRoute,handleAddServerRoute:e.handleAddServerRoute,handleRemovePath:e.handleRemovePath},"".concat(n._id,"-").concat(t))}))),Q(m.a,{onClick:this.handleAddPath},void 0,"Add Access Type"),Q("div",{className:t.buttons},void 0,Q(m.a,{onClick:this.handleBack,className:t.button},void 0,"Back"),Q(m.a,{variant:"contained",color:"primary",onClick:this.handleSave,className:t.button},void 0,"Save")))))}}])&&Z(t.prototype,a),o&&Z(t,o),n}(),re=Object(_.a)({key:"adminModuleManage",reducer:A.a}),ie=Object(R.a)({key:"adminModuleManage",saga:S.a}),ce=Object(i.b)({one:Object(C.c)()}),de=Object(d.connect)(ce,X({},O,{push:u.push})),ue=l()(function(e){return{paper:ae({marginTop:3*e.spacing.unit,marginBottom:3*e.spacing.unit,padding:2*e.spacing.unit},e.breakpoints.up(600+3*e.spacing.unit*2),{marginTop:6*e.spacing.unit,marginBottom:6*e.spacing.unit,padding:3*e.spacing.unit}),buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:3*e.spacing.unit,marginLeft:e.spacing.unit}}});n.default=Object(c.compose)(re,ie,de,ue)(oe)}}]);