(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5424)}])},5424:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return re}});var c=n(5893),a=(n(7294),"-ms-"),s="-moz-",t="-webkit-",u="comm",i="rule",o="decl",f="@keyframes",l=Math.abs,p=String.fromCharCode,b=Object.assign;function h(e){return e.trim()}function w(e,r){return(e=r.exec(e))?e[0]:e}function d(e,r,n){return e.replace(r,n)}function $(e,r){return e.indexOf(r)}function k(e,r){return 0|e.charCodeAt(r)}function g(e,r,n){return e.slice(r,n)}function v(e){return e.length}function m(e){return e.length}function x(e,r){return r.push(e),e}function _(e,r){for(var n="",c=m(e),a=0;a<c;a++)n+=r(e[a],a,e,r)||"";return n}function y(e,r,n,c){switch(e.type){case"@import":case o:return e.return=e.return||e.value;case u:return"";case f:return e.return=e.value+"{"+_(e.children,c)+"}";case i:e.value=e.props.join(",")}return v(n=_(e.children,c))?e.return=e.value+"{"+n+"}":""}var C,j=1,z=1,E=0,N=0,O=0,A="";function P(e,r,n,c,a,s,t){return{value:e,root:r,parent:n,type:c,props:a,children:s,line:j,column:z,length:t,return:""}}function T(e,r){return b(P("",null,null,"",null,null,0),e,{length:-e.length},r)}function X(){return O=N>0?k(A,--N):0,z--,10===O&&(z=1,j--),O}function H(){return O=N<E?k(A,N++):0,z++,10===O&&(z=1,j++),O}function M(){return k(A,N)}function S(){return N}function q(e,r){return g(A,e,r)}function B(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function D(e){return j=z=1,E=v(A=e),N=0,[]}function F(e){return A="",e}function G(e){return h(q(N-1,K(91===e?e+2:40===e?e+1:e)))}function I(e){for(;(O=M())&&O<33;)H();return B(e)>2||B(O)>3?"":" "}function J(e,r){for(;--r&&H()&&!(O<48||O>102||O>57&&O<65||O>70&&O<97););return q(e,S()+(r<6&&32==M()&&32==H()))}function K(e){for(;H();)switch(O){case e:return N;case 34:case 39:34!==e&&39!==e&&K(O);break;case 40:41===e&&K(e);break;case 92:H()}return N}function L(e,r){for(;H()&&e+O!==57&&(e+O!==84||47!==M()););return"/*"+q(r,N-1)+"*"+p(47===e?e:H())}function Q(e){for(;!B(M());)H();return q(e,N)}function R(e){return F(U("",null,null,null,[""],e=D(e),0,[0],e))}function U(e,r,n,c,a,s,t,u,i){for(var o=0,f=0,l=t,b=0,h=0,w=0,k=1,g=1,m=1,_=0,y="",C=a,j=s,z=c,E=y;g;)switch(w=_,_=H()){case 40:if(108!=w&&58==E.charCodeAt(l-1)){-1!=$(E+=d(G(_),"&","&\f"),"&\f")&&(m=-1);break}case 34:case 39:case 91:E+=G(_);break;case 9:case 10:case 13:case 32:E+=I(w);break;case 92:E+=J(S()-1,7);continue;case 47:switch(M()){case 42:case 47:x(W(L(H(),S()),r,n),i);break;default:E+="/"}break;case 123*k:u[o++]=v(E)*m;case 125*k:case 59:case 0:switch(_){case 0:case 125:g=0;case 59+f:h>0&&v(E)-l&&x(h>32?Y(E+";",c,n,l-1):Y(d(E," ","")+";",c,n,l-2),i);break;case 59:E+=";";default:if(x(z=V(E,r,n,o,f,a,u,y,C=[],j=[],l),s),123===_)if(0===f)U(E,r,z,z,C,s,l,u,j);else switch(b){case 100:case 109:case 115:U(e,z,z,c&&x(V(e,z,z,0,0,a,u,y,a,C=[],l),j),a,j,l,u,c?C:j);break;default:U(E,z,z,z,[""],j,0,u,j)}}o=f=h=0,k=m=1,y=E="",l=t;break;case 58:l=1+v(E),h=w;default:if(k<1)if(123==_)--k;else if(125==_&&0==k++&&125==X())continue;switch(E+=p(_),_*k){case 38:m=f>0?1:(E+="\f",-1);break;case 44:u[o++]=(v(E)-1)*m,m=1;break;case 64:45===M()&&(E+=G(H())),b=M(),f=l=v(y=E+=Q(S())),_++;break;case 45:45===w&&2==v(E)&&(k=0)}}return s}function V(e,r,n,c,a,s,t,u,o,f,p){for(var b=a-1,w=0===a?s:[""],$=m(w),k=0,v=0,x=0;k<c;++k)for(var _=0,y=g(e,b+1,b=l(v=t[k])),C=e;_<$;++_)(C=h(v>0?w[_]+" "+y:d(y,/&\f/g,w[_])))&&(o[x++]=C);return P(e,r,n,0===a?i:u,o,f,p)}function W(e,r,n){return P(e,r,n,u,p(O),g(e,2,-2),0)}function Y(e,r,n,c){return P(e,r,n,o,g(e,0,c),g(e,c+1,-1),c)}function Z(e,r,n){switch(function(e,r){return(((r<<2^k(e,0))<<2^k(e,1))<<2^k(e,2))<<2^k(e,3)}(e,r)){case 5103:return t+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return t+e+e;case 4789:return s+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return t+e+s+e+a+e+e;case 6828:case 4268:return t+e+a+e+e;case 6165:return t+e+a+"flex-"+e+e;case 5187:return t+e+d(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return t+e+a+"flex-item-"+d(e,/flex-|-self/g,"")+(w(e,/flex-|baseline/)?"":a+"grid-row-"+d(e,/flex-|-self/g,""))+e;case 4675:return t+e+a+"flex-line-pack"+d(e,/align-content|flex-|-self/g,"")+e;case 5548:return t+e+a+d(e,"shrink","negative")+e;case 5292:return t+e+a+d(e,"basis","preferred-size")+e;case 6060:return t+"box-"+d(e,"-grow","")+t+e+a+d(e,"grow","positive")+e;case 4554:return t+d(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return d(d(d(e,/(zoom-|grab)/,t+"$1"),/(image-set)/,t+"$1"),e,"")+e;case 5495:case 3959:return d(e,/(image-set\([^]*)/,t+"$1$`$1");case 4968:return d(d(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+t+e+e;case 4200:if(!w(e,/flex-|baseline/))return a+"grid-column-align"+g(e,r)+e;break;case 2592:case 3360:return a+d(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return r=n,w(e.props,/grid-\w+-end/)}))?~$(e+(n=n[r].value),"span")?e:a+d(e,"-start","")+e+a+"grid-row-span:"+(~$(n,"span")?w(n,/\d+/):+w(n,/\d+/)-+w(e,/\d+/))+";":a+d(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return w(e.props,/grid-\w+-start/)}))?e:a+d(d(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return d(e,/(.+)-inline(.+)/,t+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(v(e)-1-r>6)switch(k(e,r+1)){case 109:if(45!==k(e,r+4))break;case 102:return d(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+s+(108==k(e,r+3)?"$3":"$2-$3"))+e;case 115:return~$(e,"stretch")?Z(d(e,"stretch","fill-available"),r,n)+e:e}break;case 5152:case 5920:return d(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(r,n,c,s,t,u,i){return a+n+":"+c+i+(s?a+n+"-span:"+(t?u:+u-+c)+i:"")+e}));case 4949:if(121===k(e,r+6))return d(e,":",":"+t)+e;break;case 6444:switch(k(e,45===k(e,14)?18:11)){case 120:return d(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+t+(45===k(e,14)?"inline-":"")+"box$3$1"+t+"$2$3$1"+a+"$2box$3")+e;case 100:return d(e,":",":"+a)+e}break;case 5936:switch(k(e,r+11)){case 114:return t+e+a+d(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return t+e+a+d(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return t+e+a+d(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 2903:return t+e+a+e+e;case 5719:case 2647:case 2135:case 3927:case 2391:return d(e,"scroll-","scroll-snap-")+e}return e}function ee(e,r,n,c){if(e.length>-1&&!e.return)switch(e.type){case o:return void(e.return=Z(e.value,e.length,n));case f:return _([T(e,{value:d(e.value,"@","@"+t)})],c);case i:if(e.length)return function(e,r){return e.map(r).join("")}(e.props,(function(r){switch(w(r,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return _([T(e,{props:[d(r,/:(read-\w+)/,":-moz-$1")]})],c);case"::placeholder":return _([T(e,{props:[d(r,/:(plac\w+)/,":-webkit-input-$1")]}),T(e,{props:[d(r,/:(plac\w+)/,":-moz-$1")]}),T(e,{props:[d(r,/:(plac\w+)/,a+"input-$1")]})],c)}return""}))}}console.log((C="\ndisplay: flex;\n\n&:hover {\n  color: red;\n}\n\na {\n  color: blue;\n}\n",_(R(".".concat("my-app"," { ").concat(C," }")),function(e){var r=m(e);return function(n,c,a,s){for(var t="",u=0;u<r;u++)t+=e[u](n,c,a,s)||"";return t}}([ee,y]))));var re=function(){return(0,c.jsx)("div",{children:"Hello!"})}}},function(e){e.O(0,[774,888,179],(function(){return r=8312,e(e.s=r);var r}));var r=e.O();_N_E=r}]);