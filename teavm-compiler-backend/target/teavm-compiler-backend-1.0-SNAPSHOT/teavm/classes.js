"use strict";
var main;(function(){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_createArray(cls,sz){var data=new Array(sz);var arr=new $rt_array(cls,data);if(sz>0){var i=0;do {data[i]=null;i=i+1|0;}while(i<sz);}return arr;}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new Array(sz));}function $rt_createLongArray(sz){var data=new Array(sz);var arr=new $rt_array($rt_longcls(),data);for(var i=0;i<sz;i=i+1|0){data[i]=Long_ZERO;}return arr;}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new Uint16Array(sz));}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new Int8Array(sz));}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new Int16Array(sz));}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new Int32Array(sz));}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),
new Int8Array(sz));}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new Float32Array(sz));}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new Float64Array(sz));}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false};arraycls.classObject=null;arraycls.$array
=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}function $rt_exception(ex){var err=ex.$jsException;if(!err){err=new Error("Java exception thrown");if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,
ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_objcls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first
=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays
=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for
(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]
|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim
=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&isNaN(value)){throw "NaN";}return value;}var $rt_stdoutBuffer="";var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:function(ch){if(ch===0xA){if(console){console.info($rt_stdoutBuffer);}$rt_stdoutBuffer
="";}else {$rt_stdoutBuffer+=String.fromCharCode(ch);}};var $rt_stderrBuffer="";var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:function(ch){if(ch===0xA){if(console){console.error($rt_stderrBuffer);}$rt_stderrBuffer="";}else {$rt_stderrBuffer+=String.fromCharCode(ch);}};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]
=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype
=Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]
=func;}}}cls.$array=null;}}function $rt_threadStarter(f){return function(){var args=Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance
=new Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new DataView(new ArrayBuffer(8));function $rt_doubleToLongBits(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));}function $rt_longBitsToDouble(n)
{$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}function $rt_javaException(e){return e instanceof Error&&typeof e.$javaException==='object'?e.$javaException:null;}function $rt_jsException(e)
{return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err.$javaException;if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if
(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};Long.prototype.toString
=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};var Long_ZERO=new Long(0,0);var Long_MAX_NORMAL=1<<18;function Long_fromInt(val){return val>=0?new Long(val,0):new Long(val, -1);}function Long_fromNumber(val)
{if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}}function Long_toNumber(val){var lo=val.lo;var hi=val.hi;if(lo<0){lo+=0x100000000;}return 0x100000000*hi+lo;}var $rt_imul=Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){if(a<0){a+=0x100000000;}if(b<0){b+=0x100000000;}return a/b|0;};var $rt_umod=function(a,b){if(a<0){a+=0x100000000;}if
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.eJ=f;}
function $rt_cls(cls){return Ku(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return F_(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.o.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return D; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Xv());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return Xw(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var I=$rt_throw;var BZ=$rt_compare;var Xx=$rt_nullCheck;var C=$rt_cls;var E=$rt_createArray;var S_=$rt_isInstance;var Xy=$rt_nativeThread;var Xz=$rt_suspending;var XA=$rt_resuming;var XB=$rt_invalidPointer;var B=$rt_s;var Bu=$rt_eraseClinit;var D5=$rt_imul;var Cp=$rt_wrapException;
function D(){this.$id$=0;}
function C0(a){return Ku(a.constructor);}
function QK(a){var b,c,d,e,f,g,h,i,j;b=new L;N(b);F(b,Jr(C0(a)));F(b,B(0));c=JS(a);if(!c)d=B(1);else{e=(((32-CX(c)|0)+4|0)-1|0)/4|0;f=$rt_createCharArray(e);g=f.data;h=(e-1|0)*4|0;i=0;while(h>=0){j=i+1|0;g[i]=DU(c>>>h&15,16);h=h-4|0;i=j;}d=F_(f);}F(b,d);return K(b);}
function JS(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function VS(a){var b,c,d;if(!S_(a,CL)&&a.constructor.$meta.item===null){b=new Ij;S(b);I(b);}b=Os(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Lg(){D.call(this);}
function W1(b){var c;Mx();L3();Kp();JT();LB();LZ();NE();MH();NL();My();KQ();Li();MM();J7();Nv();L5();LS();Lr();c=new F$;global["Runtime"]=c;}
function Gx(){}
function IF(){var a=this;D.call(a);a.d_=null;a.b9=null;}
function Ku(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new IF;c.b9=b;d=c;b.classObject=d;}return c;}
function PZ(a){return a.b9;}
function LN(a,b){var c;b=b;c=a.b9;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&Ky(b.constructor,c)?1:0;}
function Jr(a){if(a.d_===null)a.d_=$rt_str(a.b9.$meta.name);return a.d_;}
function Es(a){return a.b9.$meta.primitive?1:0;}
function DX(a){return Ku(a.b9.$meta.item);}
function U_(a){return 1;}
function Lm(){D.call(this);}
function K4(){D.call(this);}
function Os(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Ky(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Ky(d[e],c))return 1;e=e+1|0;}return 0;}
function LK(b){return String.fromCharCode(b);}
function Z(){}
function BW(){}
function Ey(){}
function Q(){var a=this;D.call(a);a.o=null;a.c7=0;}
var XC=null;function F_(a){var b=new Q();GA(b,a);return b;}
function B$(a,b,c){var d=new Q();JD(d,a,b,c);return d;}
function TR(a,b,c){var d=new Q();JK(d,a,b,c);return d;}
function GA(a,b){var c,d;b=b.data;c=b.length;a.o=$rt_createCharArray(c);d=0;while(d<c){a.o.data[d]=b[d];d=d+1|0;}}
function JD(a,b,c,d){var e,f;a.o=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.o.data[e]=f[e+c|0];e=e+1|0;}}
function JK(a,b,c,d){var e,f,g,h,i,j;a.o=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.o.data;j=e+1|0;g[e]=i&65535;}else{g=a.o.data;c=e+1|0;g[e]=EE(i);g=a.o.data;j=c+1|0;g[c]=Eq(i);}f=f+1|0;c=h;e=j;}if(e<a.o.data.length)a.o=Kw(a.o,e);}
function G(a,b){var c;if(b>=0&&b<a.o.data.length)return a.o.data[b];c=new DP;S(c);I(c);}
function Lz(a,b){var c;a:{if(b<(J(a)-1|0)&&Bv(G(a,b))){c=b+1|0;if(BG(G(a,c))){b=B2(G(a,b),G(a,c));break a;}}b=G(a,b);}return b;}
function J(a){return a.o.data.length;}
function CQ(a){return a.o.data.length?0:1;}
function Ha(a,b,c){var d,e,f;if((c+J(b)|0)>J(a))return 0;d=0;while(d<J(b)){e=G(b,d);f=c+1|0;if(e!=G(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Ch(a,b){if(a===b)return 1;return Ha(a,b,0);}
function L1(a,b){var c,d,e,f;if(a===b)return 1;if(b.cj()>J(a))return 0;c=0;d=J(a)-b.cj()|0;while(d<J(a)){e=G(a,d);f=c+1|0;if(e!=b.cL(c))return 0;d=d+1|0;c=f;}return 1;}
function D7(a,b,c){var d,e,f,g;d=Co(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.o.data.length)return (-1);if(a.o.data[d]==e)break;d=d+1|0;}return d;}f=EE(b);g=Eq(b);while(true){if(d>=(a.o.data.length-1|0))return (-1);if(a.o.data[d]==f&&a.o.data[d+1|0]==g)break;d=d+1|0;}return d;}
function D9(a,b,c){var d,e,f,g,h;d=Bq(c,J(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.o.data[d]==e)break;d=d+(-1)|0;}return d;}f=EE(b);g=Eq(b);while(true){if(d<1)return (-1);if(a.o.data[d]==g){h=a.o.data;b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Fn(a,b,c){var d,e,f;d=Co(0,c);e=J(a)-J(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=J(b))break a;if(G(a,d+f|0)!=G(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function KK(a,b){return Fn(a,b,0);}
function Fp(a,b,c){var d,e;d=Bq(c,J(a)-J(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=J(b))break a;if(G(a,d+e|0)!=G(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function MR(a,b){return Fp(a,b,J(a));}
function BR(a,b,c){var d;if(b<=c)return B$(a.o,b,c-b|0);d=new Bn;S(d);I(d);}
function Dg(a,b){return BR(a,b,J(a));}
function SJ(a,b,c){return BR(a,b,c);}
function F1(a,b){var c,d,e;c=J(a)-J(b)|0;d=0;while(d<=c){e=0;while(true){if(e>=J(b))return 1;if(G(a,d+e|0)!=G(b,e))break;e=e+1|0;}d=d+1|0;}return 0;}
function HS(a,b,c){var d,e,f,g;d=new L;N(d);e=J(a)-J(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=J(b)){Cj(d,c);f=f+(J(b)-1|0)|0;break a;}if(G(a,f+g|0)!=G(b,g))break;g=g+1|0;}Be(d,G(a,f));}f=f+1|0;}Cj(d,Dg(a,f));return K(d);}
function Jq(a){var b,c;b=0;c=J(a)-1|0;a:{while(b<=c){if(G(a,b)>32)break a;b=b+1|0;}}while(b<=c&&G(a,c)<=32){c=c+(-1)|0;}return BR(a,b,c+1|0);}
function QJ(a){return a;}
function DQ(a){var b,c,d,e;b=$rt_createCharArray(a.o.data.length);c=b.data;d=0;e=c.length;while(d<e){c[d]=a.o.data[d];d=d+1|0;}return b;}
function H6(b){return b===null?B(2):b.r();}
function GQ(b){var c;c=new L;N(c);return K(Bf(c,b));}
function R(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Q))return 0;c=b;if(J(c)!=J(a))return 0;d=0;while(d<J(c)){if(G(a,d)!=G(c,d))return 0;d=d+1|0;}return 1;}
function MY(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(J(a)!=b.cj())return 0;c=0;while(c<J(a)){if(Cc(G(a,c))!=Cc(b.cL(c)))return 0;c=c+1|0;}return 1;}
function EW(a){var b,c,d,e;a:{if(!a.c7){b=a.o.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.c7=(31*a.c7|0)+e|0;d=d+1|0;}}}return a.c7;}
function HZ(a){var b,c,d,e,f,g,h;if(CQ(a))return a;b=$rt_createIntArray(a.o.data.length);c=b.data;d=0;e=0;while(e<a.o.data.length){a:{if(e!=(a.o.data.length-1|0)&&Bv(a.o.data[e])){f=a.o.data;g=e+1|0;if(BG(f[g])){h=d+1|0;c[d]=CS(B2(a.o.data[e],a.o.data[g]));e=g;break a;}}h=d+1|0;c[d]=Cc(a.o.data[e]);}e=e+1|0;d=h;}return TR(b,0,d);}
function Ke(a){var b,c,d,e,f,g,h;if(CQ(a))return a;b=$rt_createIntArray(a.o.data.length);c=b.data;d=0;e=0;while(e<a.o.data.length){a:{if(e!=(a.o.data.length-1|0)&&Bv(a.o.data[e])){f=a.o.data;g=e+1|0;if(BG(f[g])){h=d+1|0;c[d]=Dl(B2(a.o.data[e],a.o.data[g]));e=g;break a;}}h=d+1|0;c[d]=Ci(a.o.data[e]);}e=e+1|0;d=h;}return TR(b,0,d);}
function Nc(a,b){var c;c=a;return LW(FA(H9(b),c));}
function BH(a,b){return Kn(H9(b),a);}
function Iq(a,b,c){return M9(FA(H9(b),a),c);}
function Mx(){XC=new GV;}
function DS(){var a=this;D.call(a);a.fx=null;a.dv=null;a.d1=0;a.eI=0;a.fD=null;}
function XD(a){var b=new DS();Cg(b,a);return b;}
function Cg(a,b){a.d1=1;a.eI=1;a.fx=b;}
function SZ(a){return a;}
function R3(a){return a.fx;}
function TK(a){return a.dE();}
function MN(a){Jp(a,C9());}
function Jp(a,b){var c,d,e,f,g;DO(b,Jr(C0(a)));c=a.dE();if(c!==null){d=new L;N(d);F(d,B(3));F(d,c);DO(b,K(d));}a:{Fd(b);if(a.fD!==null){e=a.fD.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];DO(b,B(4));Nr(b,d);g=g+1|0;}}}if(a.dv!==null&&a.dv!==a){DO(b,B(5));Jp(a.dv,b);}}
function DN(){DS.call(this);}
function DV(){DN.call(this);}
function MQ(){DV.call(this);}
function DI(){var a=this;D.call(a);a.v=null;a.l=0;}
function XE(){var a=new DI();N(a);return a;}
function Xd(a){var b=new DI();CF(b,a);return b;}
function N(a){CF(a,16);}
function CF(a,b){a.v=$rt_createCharArray(b);}
function F(a,b){return a.ed(a.l,b);}
function C8(a,b,c){var d,e,f;if(b>=0&&b<=a.l){if(c===null)c=B(2);else if(CQ(c))return a;a.ct(a.l+J(c)|0);d=a.l-1|0;while(d>=b){a.v.data[d+J(c)|0]=a.v.data[d];d=d+(-1)|0;}a.l=a.l+J(c)|0;d=0;while(d<J(c)){e=a.v.data;f=b+1|0;e[b]=G(c,d);d=d+1|0;b=f;}return a;}c=new DP;S(c);I(c);}
function GL(a,b,c){return M_(a,a.l,b,c);}
function M_(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)B9(a,b,b+1|0);else{B9(a,b,b+2|0);f=a.v.data;g=b+1|0;f[b]=45;b=g;}a.v.data[b]=DU(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=D5(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;B9(a,b,b+i|0);if(e)e=b;else{f=a.v.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.v.data;b=e+1|0;f[e]=DU(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;}
function JZ(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(Long_lt(c,Long_ZERO)){e=0;c=Long_neg(c);}a:{f=Long_fromInt(d);if(Long_lt(c,f)){if(e)B9(a,b,b+1|0);else{B9(a,b,b+2|0);g=a.v.data;h=b+1|0;g[b]=45;b=h;}a.v.data[b]=DU(c.lo,d);}else{i=1;j=Long_fromInt(1);while(true){k=Long_mul(j,f);if(Long_le(k,j))break;if(Long_gt(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;B9(a,b,b+i|0);if(e)i=b;else{g=a.v.data;i=b+1|0;g[b]=45;}while(true){if(Long_le(j,Long_ZERO))break a;g=a.v.data;b=i+1|0;g[i]=DU(Long_div(c,j).lo,d);c=Long_rem(c,j);j=Long_div(j,
f);i=b;}}}return a;}
function Be(a,b){return a.eo(a.l,b);}
function CA(a,b,c){B9(a,b,b+1|0);a.v.data[b]=c;return a;}
function GZ(a,b){var c;if(a.v.data.length>=b)return;c=a.v.data.length>=1073741823?2147483647:Co(b,Co(a.v.data.length*2|0,5));a.v=Kw(a.v,c);}
function K(a){return B$(a.v,0,a.l);}
function DZ(a,b){var c;if(b>=0&&b<a.l)return a.v.data[b];c=new Bn;S(c);I(c);}
function Cz(a,b,c,d){return a.dX(a.l,b,c,d);}
function Dq(a,b,c,d,e){var f,g,h,i;B9(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.v.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function C1(a,b){return a.eu(b,0,b.data.length);}
function B9(a,b,c){var d,e;d=a.l-b|0;a.ct((a.l+c|0)-b|0);e=d-1|0;while(e>=0){a.v.data[c+e|0]=a.v.data[b+e|0];e=e+(-1)|0;}a.l=a.l+(c-b|0)|0;}
function Ew(){}
function L(){DI.call(this);}
function Ot(a){var b=new L();Vv(b,a);return b;}
function Db(){var a=new L();U6(a);return a;}
function Ny(a){var b=new L();OD(b,a);return b;}
function Vv(a,b){CF(a,b);}
function U6(a){N(a);}
function OD(a,b){var c;a.v=$rt_createCharArray(J(b));c=0;while(c<a.v.data.length){a.v.data[c]=G(b,c);c=c+1|0;}a.l=J(b);}
function BF(a,b){F(a,b);return a;}
function Bf(a,b){GL(a,b,10);return a;}
function MA(a,b){Is(a,a.l,b);return a;}
function BY(a,b){Be(a,b);return a;}
function HX(a,b,c,d){Cz(a,b,c,d);return a;}
function SG(a,b){C1(a,b);return a;}
function Cj(a,b){Jl(a,a.l,b);return a;}
function Is(a,b,c){JZ(a,b,c,10);return a;}
function Rt(a,b,c,d,e){Dq(a,b,c,d,e);return a;}
function Jl(a,b,c){NJ(a,b,c===null?B(2):c.r());return a;}
function Pr(a,b,c){CA(a,b,c);return a;}
function FG(a,b,c){var d,e,f,g,h,i,j;d=BZ(b,c);if(d<=0&&b<=a.l){if(d){e=a.l-c|0;a.l=a.l-(c-b|0)|0;d=0;while(d<e){f=a.v.data;g=b+1|0;h=a.v.data;i=c+1|0;f[b]=h[c];d=d+1|0;b=g;c=i;}}return a;}j=new DP;S(j);I(j);}
function Ne(a,b,c,d){var e,f;e=c-b|0;if(J(d)>e)B9(a,c,b+J(d)|0);else if(J(d)<e)FG(a,b+J(d)|0,c);c=0;while(c<J(d)){f=a.v.data;e=b+1|0;f[b]=G(d,c);c=c+1|0;b=e;}return a;}
function Iu(a,b){var c,d,e,f;if(b>=0&&b<a.l){a.l=a.l-1|0;while(b<a.l){c=a.v.data;d=a.v.data;e=b+1|0;c[b]=d[e];b=e;}return a;}f=new DP;S(f);I(f);}
function VG(a,b,c){C8(a,b,c);return a;}
function Mv(a){var b,c,d;b=a.l/2|0;c=0;while(c<b){d=a.v.data[c];a.v.data[c]=a.v.data[(a.l-c|0)-1|0];a.v.data[(a.l-c|0)-1|0]=d;c=c+1|0;}return a;}
function MW(a,b,c){var d;if(b<=c&&b>=0&&c<=a.l)return B$(a.v,b,c-b|0);d=new Bn;S(d);I(d);}
function SM(a,b,c){return FG(a,b,c);}
function NC(a,b){a.l=b;}
function L0(a,b,c,d,e){var f,g,h,i,j;if(b>c){f=new Bn;Cg(f,B(6));I(f);}while(b<c){g=d.data;h=e+1|0;i=a.v.data;j=b+1|0;g[e]=i[b];e=h;b=j;}}
function HR(a,b,c){return MW(a,b,c);}
function VD(a,b,c,d,e){Dq(a,b,c,d,e);return a;}
function Sh(a,b,c,d){Cz(a,b,c,d);return a;}
function TF(a,b){return DZ(a,b);}
function CI(a){return a.l;}
function BN(a){return K(a);}
function VM(a,b){GZ(a,b);}
function OF(a,b,c){return Jl(a,b,c);}
function N4(a,b,c){CA(a,b,c);return a;}
function Q_(a,b,c){return Is(a,b,c);}
function NJ(a,b,c){C8(a,b,c);return a;}
function B1(){D.call(this);}
function El(){B1.call(this);this.gc=0;}
var XF=null;function W0(a){var b=new El();Fl(b,a);return b;}
function Fl(a,b){a.gc=b;}
function E5(b){return GL(Xd(20),b,10).r();}
function Dt(b,c){var d,e,f,g,h,i,j;if(c>=2&&c<=36){if(b!==null&&!CQ(b)){a:{d=0;e=0;switch(G(b,0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==J(b)){b=new Br;S(b);I(b);}while(e<J(b)){g=e+1|0;h=Fc(G(b,e));if(h<0){i=new Br;j=new L;N(j);F(j,B(7));F(j,b);Cg(i,K(j));I(i);}if(h>=c){i=new Br;j=new L;N(j);F(j,B(8));j=Bf(j,c);F(j,B(3));F(j,b);Cg(i,K(j));I(i);}f=D5(c,f)+h|0;if(f<0){if(g==J(b)&&f==(-2147483648)&&d)return (-2147483648);i=new Br;j=new L;N(j);F(j,B(9));F(j,b);Cg(i,K(j));I(i);}e=g;}if(d)f
= -f;return f;}b=new Br;Cg(b,B(10));I(b);}i=new Br;b=new L;N(b);F(b,B(11));Cg(i,K(Bf(b,c)));I(i);}
function H$(b){return Dt(b,10);}
function FI(a){return E5(a.gc);}
function CX(b){var c,d;if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;b=d>>>8;if(!b)b=d;else c=c|8;d=b>>>4;if(!d)d=b;else c=c|4;b=d>>>2;if(!b)b=d;else c=c|2;if(b>>>1)c=c|1;return (32-c|0)-1|0;}
function D_(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function L3(){XF=C($rt_intcls());}
function DE(){DV.call(this);}
function XG(a){var b=new DE();IN(b,a);return b;}
function IN(a,b){Cg(a,b);}
function KE(){DE.call(this);}
function XH(a){var b=new KE();QV(b,a);return b;}
function QV(a,b){IN(a,b);}
function Ms(){DE.call(this);}
function XI(a){var b=new Ms();Rc(b,a);return b;}
function Rc(a,b){IN(a,b);}
function BJ(){DS.call(this);}
function XJ(){var a=new BJ();S(a);return a;}
function S(a){a.d1=1;a.eI=1;}
function Bc(){BJ.call(this);}
function Xw(a){var b=new Bc();Bd(b,a);return b;}
function Bd(a,b){Cg(a,b);}
function EG(){}
function GE(){}
function F$(){D.call(this);}
function MB(a,b){var c,$$je;a:{if(!Ch(HZ(Jq(b)),B(12)))Ct(C2(),B(13));else{try{Mf(Kt(Xq(),b));Fd(C2());break a;}catch($$e){$$je=Cp($$e);if($$je instanceof BJ){c=$$je;}else{throw $$e;}}MN(c);}}}
function Qf(a,b){MB(a,$rt_str(b));}
function LE(){D.call(this);}
function Ez(){}
function GV(){D.call(this);}
function Cs(){D.call(this);}
var XK=null;var XL=null;var XM=null;var XN=null;var XO=null;var XP=null;function IX(b){var c,d;c=new Q;d=$rt_createCharArray(1);d.data[0]=b;GA(c,d);return c;}
function FF(b){return b>=65536&&b<=1114111?1:0;}
function Bv(b){return (b&64512)!=55296?0:1;}
function BG(b){return (b&64512)!=56320?0:1;}
function I9(b){return !Bv(b)&&!BG(b)?0:1;}
function DY(b,c){return Bv(b)&&BG(c)?1:0;}
function B2(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function EE(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Eq(b){return (56320|b&1023)&65535;}
function Cc(b){return CS(b)&65535;}
function CS(b){return LK(b).toLowerCase().charCodeAt(0);}
function Ci(b){return Dl(b)&65535;}
function Dl(b){return LK(b).toUpperCase().charCodeAt(0);}
function HC(b,c){if(c>=2&&c<=36){b=Fc(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Fc(b){var c,d,e,f,g,h,i,j,k;if(XL===null){if(XO===null)XO=MT();c=(XO.value!==null?$rt_str(XO.value):null);d=new HV;d.fs=DQ(c);e=Kf(d);f=$rt_createIntArray(e);g=f.data;h=0;while(h<e){g[h]=Kf(d);h=h+1|0;}XL=f;}f=XL.data;h=0;i=(f.length/2|0)-1|0;while(i>=h){j=(h+i|0)/2|0;e=j*2|0;k=BZ(b,f[e]);if(k>0)h=j+1|0;else{if(k>=0)return f[e+1|0];i=j-1|0;}}return (-1);}
function DU(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Dh(b){var c,d;if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=EE(b);d[1]=Eq(b);return c;}
function Bw(b){var c,d,e,f,g;c=b>0&&b<=65535?1:0;if(c&&I9(b&65535))return 19;if(XM===null){if(XP===null)XP=NF();XM=V5((XP.value!==null?$rt_str(XP.value):null));}d=XM.data;e=0;c=d.length-1|0;while(e<=c){f=(e+c|0)/2|0;g=d[f];if(b>=g.eT)e=f+1|0;else{if(b>=g.el)return g.fR.data[b-g.el|0];c=f-1|0;}}return 0;}
function EX(b){a:{switch(Bw(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function DL(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Bw(b)!=16?0:1;}
function Nd(b){return Fk(b);}
function Fk(b){switch(Bw(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function I2(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Fk(b);}return 1;}
function Kp(){XK=C($rt_charcls());XN=E(Cs,128);}
function MT(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function NF(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91 Y#FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,AVF6 F)A6G01GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F# F#A#\' "
+"I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A)\')A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A$&G$I% G$ G%A(G# F$A&F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A(& F#G#A#J+ F#A.G#I# F) F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\'A#I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G\'A#J+A#F%AA&^$Y0=9^$G#^\'J+L+=\'=\'=\'6767"
+"I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F. F%G$A,F3G$Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1 J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(AcG%)FP\')G&)\'I&\'I#F(A%J+Y(^+G*^*A$G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%FEI)G)I#G#A$Y&"
+"J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFG[ G&!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[AA1G.H%\'H$G-A0^#"
+"!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^AA#b=I! BP CP !#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y&%Y+U#Y%"
+"596Y.AQ^; b=:! A-b=7$ A;^-A%-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+F<A&^EA-F1^@ L+^?L)=L0^AL+^HL0b= & &b UG!&A+^b&b   %b O(!&A1F6%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#A#!#B$AQ&E##F(\'F$\'F%\'F8I#G#)^%A%L\'^#;=A\'FUY%A)I#F"
+"SI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C)A)b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]1A2b&L& 76A1FbA#FWAIF-;=A#G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0"
+"A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^-A%=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9b 1# b&X% A*F7A+F)b 9# F\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@b !# F>L+&A)F7G,L%Y&b \'# F8A*)\')FVG0Y(A%L5J+A0G$)FNI$G%I#G#Y#1Y%A,1A#F:A(J+A\'G$FEG&)G) J+Y%&I#A*FD\'Y#&A*G#)FQI$G*I#F%Y%G%9A#J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'AcF( & F% F0 F+"
+"9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+ 9 9\'&AAFQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&A(J+AWF<A#G$I#G%)G&A%J+L#Y$=b  $ FMI$G*)G#9b E! BACAJ+L*A-&b A# F)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A>FZb (% F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#b ($ L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b ^K b&P1  Q*b (a b&(* b Z\'#b&Z) A(F"
+"@ J+A%Y#b A! F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%A=&b W@!&A)b&T, b .5#b&@% ARF$A2F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =.!b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^]A8^dG$=b ;# L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 16 G( G2A#G( G# G&b 6$ FNA$G(E(A#J+A%&=b Q& FMG%J+A&;b  5 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN="
+"L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.A$b=>! A$^_AZ^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=7, A+^.A$^,A&b=U! A-b=:! A(^-A5^-A%^YA)^+A\'^IA)^?b 3! ^- b=F!  ^%A$^JA#^\'A$^>A#b=(# A-^/A#^%A%^$A&^$A.^\'b K6 &b   %b   %b 6<#&AJ&b T !&A,&b =$ &A#&b  ;!&A/&b PU!&b @Q b&?) b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   "
+"%b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b D8 1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};}
function Bn(){Bc.call(this);}
function DP(){Bn.call(this);}
function E3(){D.call(this);}
var XQ=null;var XR=null;function C2(){if(XQ===null)XQ=O1(new Jb,0);return XQ;}
function C9(){if(XR===null)XR=O1(new H0,0);return XR;}
function CB(b,c,d,e,f){var g,h,i,j,k,l,m;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=K8(b)&&(e+f|0)<=K8(d)){a:{b:{if(b!==d){g=DX(C0(b));h=DX(C0(d));if(g!==null&&h!==null){if(g===h)break b;if(!Es(g)&&!Es(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;if(!LN(h,l[k])){Jg(b,c,d,e,j);b=new Eu;S(b);I(b);}j=j+1|0;k=m;}Jg(b,c,d,e,f);return;}if(!Es(g))break a;if(Es(h))break b;else break a;}b=new Eu;S(b);I(b);}}Jg(b,c,d,e,f);return;}b=new Eu;S(b);I(b);}b=new Bn;S(b);I(b);}d=new CC;Cg(d,B(14));I(d);}
function Jg(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function JR(){D.call(this);}
function Xq(){var a=new JR();QN(a);return a;}
function QN(a){return;}
function Kt(a,b){var c;c=((new DOMParser()).parseFromString($rt_ustr(b),"text/xml")).firstChild.nextSibling;if(R($rt_str(c.nodeName),B(15)))return It(a,c.firstChild);return Qp(E(Bp,0));}
function It(a,b){var c,d,e,f,g,h,i,j;c=Cr();while(b!==null){if(R($rt_str(b.nodeName),B(16))){d=null;e=Cr();f=b.firstChild;if(R($rt_str(f.nodeName),B(17)))d=EJ(a,f.firstChild);g=f.nextSibling;while(g!==null){if(R($rt_str(g.nodeName),B(18)))BU(e,EJ(a,g.firstChild));g=g.nextSibling;}h=E(X,e.A);i=h.data;j=0;while(j<e.A){i[j]=BB(e,j);j=j+1|0;}e=new JH;C5(e);e.cH=Bs(B(19));e.c6=h;e.cH=d;BU(c,e);}else if(R($rt_str(b.nodeName),B(20))){g=null;f=b.firstChild;if(R($rt_str(f.nodeName),B(21)))g=EJ(a,f.firstChild);f=new GN;C5(f);f.fe
=g;BU(c,f);}b=b.nextSibling;}i=E(Bp,c.A);h=i.data;j=0;while(j<c.A){h[j]=BB(c,j);j=j+1|0;}return Qp(i);}
function EJ(a,b){var c,d,e;a:{c=$rt_str(b.nodeName);d=(-1);switch(EW(c)){case -1034364087:if(!R(c,B(22)))break a;d=0;break a;case 3556653:if(!R(c,B(23)))break a;d=1;break a;case 1425444261:if(!R(c,B(24)))break a;d=2;break a;default:}}switch(d){case 0:return Mc(Rz($rt_str(b.innerHTML)));case 1:return Bs($rt_str(b.attributes[0].value));case 2:e=new IR;b=It(a,b.firstChild).dw.data[0];Cb(e);e.eR=b;return e;default:}return U();}
function Jm(){}
function GD(){}
function Hz(){}
function CN(){D.call(this);}
function J$(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.e$(f[c]);e=e+1|0;c=g;}}
function EU(){CN.call(this);this.eN=null;}
function Mp(){var a=this;EU.call(a);a.g2=0;a.eB=0;a.bt=null;a.cQ=null;a.fy=null;}
function O1(a,b){var c=new Mp();TW(c,a,b);return c;}
function TW(a,b,c){var d,e,f;a.eN=b;b=new L;N(b);a.bt=b;a.cQ=$rt_createCharArray(32);a.g2=c;b=new Jw;d=E(Q,0);e=d.data;Lu(B(25));c=e.length;f=0;while(f<c){Lu(e[f]);f=f+1|0;}b.gA=B(25);b.hG=d.eJ();a.fy=b;}
function GM(a,b,c,d){var $$je;if(a.eN===null)a.eB=1;if(!(a.eB?0:1))return;a:{try{J$(a.eN,b,c,d);break a;}catch($$e){$$je=Cp($$e);if($$je instanceof Hc){}else{throw $$e;}}a.eB=1;}}
function G5(a,b,c,d){var e,f,g,h,i,j,k;e=b.data;d=d-c|0;f=new I6;g=e.length;d=c+d|0;Ip(f,g);f.U=c;f.bN=d;f.fN=0;f.h1=0;f.gl=b;e=$rt_createByteArray(Co(16,Bq(g,1024)));h=e.data.length;i=new IU;d=0+h|0;Ip(i,h);i.h$=XS;i.f_=0;i.fj=e;i.U=0;i.bN=d;i.gC=0;i.dN=0;j=M2(JI(M$(a.fy),XT),XT);while(true){k=FB(KJ(j,f,i,1));GM(a,e,0,i.U);G4(i);if(!k)break;}while(true){k=FB(J1(j,i));GM(a,e,0,i.U);G4(i);if(!k)break;}}
function LO(a,b){a.cQ.data[0]=b;G5(a,a.cQ,0,1);}
function DO(a,b){F(a.bt,b);D6(a);}
function Gp(a,b){Cj(a.bt,b);D6(a);}
function Ct(a,b){var c;c=a.bt;F(c,b);Be(c,10);D6(a);}
function Nr(a,b){Be(Cj(a.bt,b),10);D6(a);}
function Fd(a){LO(a,10);}
function D6(a){var b;b=a.bt.l<=a.cQ.data.length?a.cQ:$rt_createCharArray(a.bt.l);L0(a.bt,0,a.bt.l,b,0);G5(a,b,0,a.bt.l);NC(a.bt,0);}
function Jb(){CN.call(this);}
function On(a,b){$rt_putStdout(b);}
function Bp(){D.call(this);this.P=null;}
function XU(){var a=new Bp();C5(a);return a;}
function Nm(a){return a.P;}
function Si(a,b){a.P=b;}
function C5(a){a.P=XV;}
function ES(){var a=this;D.call(a);a.gA=null;a.hG=null;}
function Lu(b){var c,d;if(CQ(b))I(Mj(b));if(!Lw(G(b,0)))I(Mj(b));c=1;while(c<J(b)){a:{d=G(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(Lw(d))break a;else I(Mj(b));}}c=c+1|0;}}
function Lw(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function Jw(){ES.call(this);}
function M$(a){var b,c,d,e,f;b=new Ia;c=$rt_createByteArray(1);d=c.data;d[0]=63;b.d3=XW;b.eF=XW;e=d.length;if(e&&e>=b.eQ){b.gP=a;b.es=c.eJ();b.gU=2.0;b.eQ=4.0;return b;}f=new Bx;Bd(f,B(26));I(f);}
function Bx(){Bc.call(this);}
function LD(){Bx.call(this);this.gV=null;}
function Mj(a){var b=new LD();Tf(b,a);return b;}
function Tf(a,b){S(a);a.gV=b;}
function CL(){}
function Ij(){BJ.call(this);}
function Mo(){Bp.call(this);this.dw=null;}
function Qp(a){var b=new Mo();Vs(b,a);return b;}
function Vs(a,b){C5(a);a.dw=b;}
function O4(a){return a.dw;}
function Mf(a){var b,c,d,e,f;b=XX;c=a.dw.data;d=c.length;e=0;a:{while(true){if(e>=d)break a;f=c[e];if(a.P.ev)break a;f.P=a.P;if(f instanceof G$){f.bz();break a;}if(b!=XX)break a;f.P.bY=a.P.bY;f.bz();if(a.P.ee)break a;if(a.P.ea!==null)break;e=e+1|0;}}}
function H0(){CN.call(this);}
function T9(a,b){$rt_putStderr(b);}
function DF(){var a=this;D.call(a);a.f8=0;a.U=0;a.bN=0;a.c_=0;}
function XY(a){var b=new DF();Ip(b,a);return b;}
function Ip(a,b){a.c_=(-1);a.f8=b;a.bN=b;}
function PB(a){return a.U;}
function Cn(a){return a.bN-a.U|0;}
function Et(a){return a.U>=a.bN?0:1;}
function JC(){}
function EQ(){DF.call(this);}
function Kr(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new Bn;i=new L;N(i);F(i,B(27));j=Bf(i,g);F(j,B(28));Bd(h,K(Bf(j,f)));I(h);}if(Cn(a)<d){i=new IB;S(i);I(i);}if(d<0){i=new Bn;h=new L;N(h);F(h,B(29));h=Bf(h,d);F(h,B(30));Bd(i,K(h));I(i);}g=a.U;k=0;while(k<d){l=c+1|0;m=g+1|0;e[c]=KC(a,g);k=k+1|0;c=l;g=m;}a.U=a.U+d|0;return a;}}b=b.data;h=new Bn;i=new L;N(i);F(i,B(31));i=Bf(i,c);F(i,B(32));i=Bf(i,b.length);F(i,B(33));Bd(h,K(i));I(h);}
function F3(a,b){var c,d;if(b>=0&&b<=a.bN){a.U=b;if(b<a.c_)a.c_=0;return a;}c=new Bx;d=new L;N(d);F(d,B(34));d=Bf(d,b);F(d,B(32));d=Bf(d,a.bN);F(d,B(35));Bd(c,K(d));I(c);}
function M4(){D.call(this);}
function Bq(b,c){if(b<c)c=b;return c;}
function Co(b,c){if(b>c)c=b;return c;}
function Of(b){if(b<=0)b= -b;return b;}
function Fa(){var a=this;DF.call(a);a.f_=0;a.fj=null;a.h$=null;}
function IV(a,b,c,d){var e,f,g,h,i,j,k;if(!d)return a;if(a.dN){e=new Js;S(e);I(e);}if(Cn(a)<d){e=new IS;S(e);I(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new Bn;i=new L;N(i);F(i,B(36));i=Bf(i,h);F(i,B(28));Bd(e,K(Bf(i,g)));I(e);}if(d<0){e=new Bn;i=new L;N(i);F(i,B(29));i=Bf(i,d);F(i,B(30));Bd(e,K(i));I(e);}h=a.U+a.f_|0;j=0;while(j<d){b=a.fj.data;k=h+1|0;g=c+1|0;b[h]=f[c];j=j+1|0;h=k;c=g;}a.U=a.U+d|0;return a;}}b=b.data;i=new Bn;e=new L;N(e);F(e,B(31));e=Bf(e,c);F(e,B(32));e=Bf(e,b.length);F(e,
B(33));Bd(i,K(e));I(i);}
function Ml(a,b){return IV(a,b,0,b.data.length);}
function G4(a){a.U=0;a.bN=a.f8;a.c_=(-1);return a;}
function Ej(){D.call(this);this.hF=null;}
var XZ=null;var XT=null;var XW=null;function MZ(a){var b=new Ej();Lo(b,a);return b;}
function Lo(a,b){a.hF=b;}
function JT(){XZ=MZ(B(37));XT=MZ(B(38));XW=MZ(B(39));}
function BO(){D.call(this);}
var X0=null;var X1=null;var X2=null;var X3=null;var X4=null;var X5=null;var X6=null;var XX=0;var XV=null;var X7=null;var X8=0;var X9=0;function IL(b){var c,d,e;c=b.d6();d=X3;e=new L;N(e);F(e,B(40));F(e,c);F(e,B(41));if(D$(d,K(e))){e=K$(B(42),E(X,0));e.cc=b;e.ch=1;b=F4(e);}if(b instanceof BD&&!b.d6().fa(c))b=IL(b);return Bs(b.r());}
function E7(){return XV;}
function LB(){var b;X9=0;X0=JB();X1=Cr();X2=Cr();X3=JB();X4=JB();X5=Cr();X6=Cr();XX=0;b=new Gc;b.dg=X0;b.dk=X3;b.ee=0;b.ev=0;b.ea=null;XV=b;X7=B(0);X8=0;}
function Fo(){EQ.call(this);}
function I6(){var a=this;Fo.call(a);a.h1=0;a.fN=0;a.gl=null;}
function KC(a,b){return a.gl.data[b+a.fN|0];}
function EF(){var a=this;D.call(a);a.gP=null;a.es=null;a.gU=0.0;a.eQ=0.0;a.d3=null;a.eF=null;a.cp=0;}
function JI(a,b){var c;if(b!==null){a.d3=b;return a;}c=new Bx;Bd(c,B(43));I(c);}
function Vk(a,b){return;}
function M2(a,b){var c;if(b!==null){a.eF=b;return a;}c=new Bx;Bd(c,B(43));I(c);}
function UM(a,b){return;}
function KJ(a,b,c,d){var e,f,g,h,$$je;a:{if(a.cp!=3){if(d)break a;if(a.cp!=2)break a;}b=new D2;S(b);I(b);}a.cp=!d?1:2;while(true){try{e=KI(a,b,c);}catch($$e){$$je=Cp($$e);if($$je instanceof Bc){f=$$je;b=new GY;b.d1=1;b.eI=1;b.dv=f;I(b);}else{throw $$e;}}if(Kb(e)){if(!d)return e;g=Cn(b);if(g<=0)return e;e=EZ(g);}else if(FB(e))break;h=!IT(e)?a.d3:a.eF;b:{if(h!==XT){if(h===XZ)break b;else return e;}if(Cn(c)<a.es.data.length)return X$;Ml(c,a.es);}F3(b,b.U+L_(e)|0);}return e;}
function J1(a,b){var c;if(a.cp!=2&&a.cp!=4){b=new D2;S(b);I(b);}c=X_;if(c===X_)a.cp=3;return c;}
function Oj(a,b){return X_;}
function Ft(){var a=this;D.call(a);a.cU=0;a.fn=0;}
var X_=null;var X$=null;function KT(a,b){var c=new Ft();Ls(c,a,b);return c;}
function Ls(a,b,c){a.cU=b;a.fn=c;}
function Kb(a){return a.cU?0:1;}
function FB(a){return a.cU!=1?0:1;}
function Nz(a){return !MG(a)&&!IT(a)?0:1;}
function MG(a){return a.cU!=2?0:1;}
function IT(a){return a.cU!=3?0:1;}
function L_(a){var b;if(Nz(a))return a.fn;b=new En;S(b);I(b);}
function EZ(b){return KT(2,b);}
function LZ(){X_=KT(0,0);X$=KT(1,0);}
function IU(){var a=this;Fa.call(a);a.gC=0;a.dN=0;}
function T5(a){return a.dN;}
function Gn(){}
function DA(){D.call(this);}
function No(){var a=this;DA.call(a);a.bH=0;a.V=null;a.cx=0;a.gk=0.0;a.du=0;}
function JB(){var a=new No();Sr(a);return a;}
function T3(a,b){return E(Dp,b);}
function Sr(a){var b;b=M6(16);a.bH=0;a.V=E(Dp,b);a.gk=0.75;HD(a);}
function M6(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function HD(a){a.du=a.V.data.length*a.gk|0;}
function D$(a,b){return Gz(a,b)===null?0:1;}
function Fe(a){var b;b=new HE;b.gj=a;return b;}
function FD(a,b){var c;c=Gz(a,b);if(c===null)return null;return c.cn;}
function Gz(a,b){var c,d;if(b===null)c=JA(a);else{d=EW(b);c=Ix(a,b,d&(a.V.data.length-1|0),d);}return c;}
function Ix(a,b,c,d){var e,f;e=a.V.data[c];while(e!==null){if(e.dL==d){f=e.b5;if(b!==f&&!R(b,f)?0:1)break;}e=e.b3;}return e;}
function JA(a){var b;b=a.V.data[0];while(b!==null&&b.b5!==null){b=b.b3;}return b;}
function Ns(a){return a.bH?0:1;}
function Kg(a,b,c){return Ep(a,b,c);}
function Ep(a,b,c){var d,e,f,g;if(b===null){d=JA(a);if(d===null){a.cx=a.cx+1|0;d=Hy(a,null,0,0);e=a.bH+1|0;a.bH=e;if(e>a.du)HP(a);}}else{e=EW(b);f=e&(a.V.data.length-1|0);d=Ix(a,b,f,e);if(d===null){a.cx=a.cx+1|0;d=Hy(a,b,f,e);e=a.bH+1|0;a.bH=e;if(e>a.du)HP(a);}}g=d.cn;d.cn=c;return g;}
function Hy(a,b,c,d){var e,f;e=new Dp;f=null;e.b5=b;e.cn=f;e.dL=d;e.b3=a.V.data[c];a.V.data[c]=e;return e;}
function K6(a,b){var c,d;if(!Ns(b)){c=a.bH+b.bH|0;if(c>a.du)IH(a,c);b=E1(Fe(b));while(D3(b)){d=EO(b);Ep(a,d.b5,d.cn);}}}
function IH(a,b){var c,d,e,f,g,h,i;c=M6(!b?1:b<<1);d=E(Dp,c);e=d.data;f=0;c=c-1|0;while(f<a.V.data.length){g=a.V.data[f];a.V.data[f]=null;while(g!==null){h=g.dL&c;i=g.b3;g.b3=e[h];e[h]=g;g=i;}f=f+1|0;}a.V=d;HD(a);}
function HP(a){IH(a,a.V.data.length);}
function Rn(a){return a.bH;}
function Iv(){}
function Ea(){}
function Do(){D.call(this);}
function L2(a,b){var c,d,e,f,g;c=b.data;d=a.A;e=c.length;if(e<d)b=La(DX(C0(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=Da(a);while(CT(f)){c=b.data;g=e+1|0;c[e]=CM(f);e=g;}return b;}
function KM(a,b){var c,d;c=0;d=Da(b);while(CT(d)){if(!BU(a,CM(d)))continue;c=1;}return c;}
function Qz(a){var b,c;b=new L;N(b);F(b,B(44));c=Da(a);if(CT(c))F(b,H6(CM(c)));while(CT(c)){F(b,B(45));F(b,H6(CM(c)));}F(b,B(35));return K(b);}
function Gm(){}
function CJ(){Do.call(this);this.bR=0;}
function Da(a){var b;b=new GP;b.cG=a;b.f0=b.cG.bR;b.f3=b.cG.db();b.eZ=(-1);return b;}
function Eb(){}
function GX(){var a=this;CJ.call(a);a.Q=null;a.A=0;}
function Cr(){var a=new GX();Th(a);return a;}
function Ya(a){var b=new GX();Gi(b,a);return b;}
function UA(a){var b=new GX();Lk(b,a);return b;}
function Th(a){Gi(a,10);}
function Gi(a,b){a.Q=E(D,b);}
function Lk(a,b){var c,d;Gi(a,b.db());c=Da(b);d=0;while(d<a.Q.data.length){a.Q.data[d]=CM(c);d=d+1|0;}a.A=a.Q.data.length;}
function GH(a,b){var c;if(a.Q.data.length<b){c=a.Q.data.length>=1073741823?2147483647:Co(b,Co(a.Q.data.length*2|0,5));a.Q=Nb(a.Q,c);}}
function BB(a,b){EN(a,b);return a.Q.data[b];}
function PX(a){return a.A;}
function MF(a){return UA(a);}
function Gv(a,b,c){var d;EN(a,b);d=a.Q.data[b];a.Q.data[b]=c;return d;}
function BU(a,b){var c,d;GH(a,a.A+1|0);c=a.Q.data;d=a.A;a.A=d+1|0;c[d]=b;a.bR=a.bR+1|0;return 1;}
function Nh(a,b,c){var d;if(b>=0&&b<=a.A){GH(a,a.A+1|0);d=a.A;while(d>b){a.Q.data[d]=a.Q.data[d-1|0];d=d+(-1)|0;}a.Q.data[b]=c;a.A=a.A+1|0;a.bR=a.bR+1|0;return;}c=new Bn;S(c);I(c);}
function H8(a,b){var c,d,e,f;EN(a,b);c=a.Q.data[b];a.A=a.A-1|0;while(b<a.A){d=a.Q.data;e=a.Q.data;f=b+1|0;d[b]=e[f];b=f;}a.Q.data[a.A]=null;a.bR=a.bR+1|0;return c;}
function G2(a){var b,c,d,e,f,g;b=a.Q;c=0;d=a.A;e=null;if(c>d){e=new Bx;S(e);I(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.A=0;}
function EN(a,b){var c;if(b>=0&&b<a.A)return;c=new Bn;S(c);I(c);}
function Gc(){var a=this;D.call(a);a.dg=null;a.dk=null;a.ee=0;a.ev=0;a.ea=null;a.bY=null;}
function Ka(a){return a.bY;}
function HJ(a,b){a.bY=b;return a;}
function Sv(a){return a.ea;}
function Tk(a){return a.ee;}
function CE(a){if(a.dg===null)a.dg=X0;return a.dg;}
function GJ(a){if(a.dk===null)a.dk=X3;return a.dk;}
function VN(a){return a.ev;}
function FH(){D.call(this);this.gY=null;}
var XS=null;var Yb=null;function Sw(a){var b=new FH();JL(b,a);return b;}
function JL(a,b){a.gY=b;}
function NE(){XS=Sw(B(46));Yb=Sw(B(47));}
function G$(){Bp.call(this);}
function X(){var a=this;D.call(a);a.bc=null;a.cb=null;}
function Yc(){var a=new X();Cb(a);return a;}
function Cb(a){a.cb=XV;}
function M7(a){return a.bc;}
function P$(a,b){a.bc=b;}
function FV(a){return a.cb;}
function Rd(a,b){a.cb=b;return a;}
function Lx(a){var b;b=new L;N(b);b=Cj(b,a.x());F(b,B(48));return K(b);}
function JH(){var a=this;Bp.call(a);a.c6=null;a.cH=null;}
function UE(a,b){a.cH=b;return a;}
function JY(a){var b,c,d,e,f,g;a.cH.cb=a.P;b=0;while(b<a.c6.data.length){c=a.c6.data[b];d=a.cH;d.cb=a.P;c.cb=a.P;if(c instanceof Fb)c=c.x();if(c instanceof EV)c=c.x();if(!(c instanceof BD))e=c;else{e=X3;f=new L;N(f);F(f,B(40));F(f,c.d6());F(f,B(41));if(!D$(e,K(f)))e=c;else{e=K$(B(42),E(X,0));e.cc=c;e.ch=1;}}if(d instanceof Fb)d=d.x();if(d instanceof EV)d=d.x();if(!(d instanceof BD))c=d;else{g=X3;c=new L;N(c);F(c,B(40));F(c,d.d6());F(c,B(41));if(!D$(g,K(c)))c=d;else{c=K$(B(42),E(X,0));c.cc=d;c.ch=1;}}Gp(C2(),
e);if(b<(a.c6.data.length-1|0))Gp(C2(),c);b=b+1|0;}}
function GN(){Bp.call(this);this.fe=null;}
function UH(a){a.fe.x();}
function FX(){EF.call(this);}
function KI(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(Bq(Cn(b),512));e=d.data;f=0;g=0;h=$rt_createByteArray(Bq(Cn(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&Et(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=Bq(Cn(b)+k|0,e.length);Kr(b,d,k,g-k|0);f=0;}if(!Et(c)){l=!Et(b)&&f>=g?X_:X$;break a;}k=Bq(Cn(c),i.length);m=new GS;m.eW=b;m.f5=c;l=NB(a,d,f,g,h,0,k,m);f=m.eg;if(l===null&&0==m.dt)l=X_;IV(c,h,0,m.dt);if(l!==null)break;}}F3(b,b.U-(g-f|0)|0);return l;}
function Ia(){FX.call(this);}
function NB(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Fs(h,2))break a;i=X$;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!I9(l)){if((f+3|0)>g){j=j+(-1)|0;if(Fs(h,3))break a;i=X$;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Bv(l)){i=EZ(1);break a;}if
(j>=d){if(LX(h))break a;i=X_;break a;}c=j+1|0;j=k[j];if(!BG(j)){j=c+(-2)|0;i=EZ(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Fs(h,4))break a;i=X$;break a;}k=e.data;n=B2(l,j);j=f+1|0;k[f]=(240|n>>18)<<24>>24;f=j+1|0;k[j]=(128|n>>12&63)<<24>>24;j=f+1|0;k[f]=(128|n>>6&63)<<24>>24;m=j+1|0;k[j]=(128|n&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.eg=j;h.dt=f;return i;}
function Hc(){BJ.call(this);}
function F5(){}
function FO(){var a=this;D.call(a);a.b5=null;a.cn=null;}
function I8(a){return a.b5;}
function Jh(a){return a.cn;}
function Dp(){var a=this;FO.call(a);a.dL=0;a.b3=null;}
function Bk(){X.call(this);}
function Mc(a){var b=new Bk();Qq(b,a);return b;}
function DC(a){var b=new Bk();Oe(b,a);return b;}
function Qq(a,b){Cb(a);a.bc=b;}
function Oe(a,b){Cb(a);a.bc=Xa(b);}
function BC(){var a=this;B1.call(a);a.cy=null;a.cC=null;a.bg=0;a.be=Long_ZERO;a.t=0;a.cs=0;}
var Yd=null;var Ye=null;var Yf=null;var Yg=null;var Yh=null;var Yi=null;var Yj=null;var Yk=null;var Yl=null;var Ym=null;var Yn=null;var Yo=null;function Ds(){Ds=Bu(BC);PO();}
function Tr(a,b){var c=new BC();K5(c,a,b);return c;}
function E_(a,b){var c=new BC();J5(c,a,b);return c;}
function Yp(a,b,c){var d=new BC();Iy(d,a,b,c);return d;}
function Rz(a){var b=new BC();Nu(b,a);return b;}
function Xa(a){var b=new BC();KU(b,a);return b;}
function K5(a,b,c){Ds();a.be=b;a.t=c;a.bg=C$(b);}
function J5(a,b,c){Ds();a.be=Long_fromInt(b);a.t=c;if(b<0)b=b^(-1);a.bg=32-CX(b)|0;}
function Iy(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;Ds();e=c+(d-1|0)|0;if(b===null){f=new CC;S(f);I(f);}g=b.data;if(e<g.length&&c>=0&&d>0&&e>=0){f=new L;CF(f,d);if(c>e)h=c;else if(g[c]!=43)h=c;else{c=c+1|0;h=c;}i=0;j=0;while(true){d=BZ(h,e);if(d>0)break;if(g[h]==46)break;if(g[h]==101)break;if(g[h]==69)break;if(!j){if(g[h]!=48)j=1;else i=i+1|0;}h=h+1|0;}k=h-c|0;Cz(f,b,c,k);c=0+k|0;if(d<=0&&g[h]==46){d=h+1|0;h=d;while(h<=e&&g[h]!=101&&g[h]!=69){if(!j){if(g[h]!=48)j=1;else i=i+1|0;}h=h+1|0;}a.t=h-d|0;c=c+a.t|0;Cz(f,b,
d,a.t);}else a.t=0;if(h<=e&&!(g[h]!=101&&g[h]!=69)){j=h+1|0;if(j>e)d=j;else if(g[j]!=43)d=j;else{d=j+1|0;if(d>e)d=j;else if(g[d]==45)d=j;}l=B$(b,d,(e+1|0)-d|0);m=Long_sub(Long_fromInt(a.t),Long_fromInt(H$(l)));a.t=m.lo;if(Long_ne(m,Long_fromInt(a.t))){f=new Br;Bd(f,B(49));I(f);}}if(c<19){a.be=Nf(K(f),10);a.bg=C$(a.be);}else{n=new Bz;l=K(f);n.bV=(-2);if(l===null){f=new CC;S(f);I(f);}if(!J(l)){f=new Br;Bd(f,B(50));I(f);}Kh(n,l,10);Fq(a,n);}a.cs=f.l-i|0;if(DZ(f,0)==45)a.cs=a.cs-1|0;return;}f=new Br;S(f);I(f);}
function Nu(a,b){Ds();Iy(a,DQ(b),0,J(b));}
function KU(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;Ds();if(!(!isFinite(b)?1:0)&&!(isNaN(b)?1:0)){c=$rt_doubleToLongBits(b);a.t=1075-Long_and(Long_shr(c,52),Long_fromInt(2047)).lo|0;d=a.t!=1075?Long_or(Long_and(c,new Long(4294967295, 1048575)),new Long(0, 1048576)):Long_shl(Long_and(c,new Long(4294967295, 1048575)),1);e=Long_compare(d,Long_ZERO);if(!e){a.t=0;a.cs=1;}if(a.t>0){f=a.t;if(!e)e=64;else{e=0;g=Long_shl(d,32);if(Long_ne(g,Long_ZERO))e=32;else g=d;h=Long_shl(g,16);if(Long_eq(h,Long_ZERO))h=g;else e=e|16;g=
Long_shl(h,8);if(Long_eq(g,Long_ZERO))g=h;else e=e|8;h=Long_shl(g,4);if(Long_eq(h,Long_ZERO))h=g;else e=e|4;g=Long_shl(h,2);if(Long_eq(g,Long_ZERO))g=h;else e=e|2;if(Long_ne(Long_shl(g,1),Long_ZERO))e=e|1;e=(64-e|0)-1|0;}f=Bq(f,e);d=Long_shru(d,f);a.t=a.t-f|0;}if(Long_ne(Long_shr(c,63),Long_ZERO))d=Long_neg(d);e=C$(d);if(a.t<0){a.bg=!e?0:e-a.t|0;if(a.bg<64)a.be=Long_shl(d, -a.t);else a.cC=B6(Cl(d), -a.t);a.t=0;}else if(a.t<=0){a.be=d;a.bg=e;}else if(a.t<Yj.data.length&&(e+Yk.data[a.t]|0)<64){a.be=Long_mul(d,
Yj.data[a.t]);a.bg=C$(a.be);}else{i=Cl(d);e=a.t;Cw();if(e>=Yq.data.length)i=e<Yr.data.length?B4(i,Yr.data[e]):B4(i,CG(Yr.data[1],e));else{j=Yq.data[e];f=i.u;if(!f)i=Ys;else{k=i.q;l=i.h;if(k!=1){e=k+1|0;m=$rt_createIntArray(e);m.data[k]=Eo(m,l,k,j);i=CK(f,e,m);Cq(i);}else{c=CP(l.data[0],j,0,0);j=c.lo;k=c.hi;if(!k)i=BK(f,j);else{i=new Bz;m=$rt_createIntArray(2);l=m.data;l[0]=j;l[1]=k;Em(i,f,2,m);}}}}Fq(a,i);}return;}n=new Br;Bd(n,B(51));I(n);}
function NM(a){var b,c,d,e;if(a.bg>=63&&!(a.bg==63&&Long_ne(a.be,new Long(0, 2147483648)))){b=new BC;c=Fw(CZ(a));d=a.t;if(c!==null){b.t=d;Fq(b,c);return b;}b=new CC;S(b);I(b);}e=Long_neg(a.be);d=a.t;Ds();return d?(Long_eq(e,Long_ZERO)&&d>=0&&d<Yn.data.length?Yn.data[d]:Tr(e,d)):Long_ge(e,Long_ZERO)&&Long_lt(e,Long_fromInt(11))?Ym.data[e.lo]:Tr(e,0);}
function P0(a){var b,c,d,e,f;if(a.cy!==null)return a.cy;if(a.bg<32){a.cy=MV(a.be,a.t);return a.cy;}b=NP(CZ(a));if(!a.t)return b;c=CZ(a).u>=0?1:2;d=J(b);e=Long_sub(Long_add(Long_neg(Long_fromInt(a.t)),Long_fromInt(d)),Long_fromInt(c));f=new L;N(f);F(f,b);if(a.t>0&&Long_ge(e,Long_fromInt(-6))){if(Long_ge(e,Long_ZERO))CA(f,d-a.t|0,46);else{C8(f,c-1|0,B(52));Dq(f,c+1|0,Yo,0, -e.lo-1|0);}}else{if((d-c|0)>=1){CA(f,c,46);d=d+1|0;}CA(f,d,69);if(Long_gt(e,Long_ZERO)){d=d+1|0;CA(f,d,43);}C8(f,d+1|0,GK(e));}a.cy=K(f);return a.cy;}
function LR(a){if(a.t&&!(!a.bg&&Long_ne(a.be,Long_fromInt(-1))?1:0)){if(a.t>=0)return Mt(CZ(a),I5(Long_fromInt(a.t)));return B4(CZ(a),I5(Long_neg(Long_fromInt(a.t))));}return CZ(a);}
function KL(a){return a.t>(-32)&&a.t<=(a.cs>0?a.cs:((a.bg-1|0)*0.3010299956639812|0)+1|0)?JW(LR(a)):0;}
function CZ(a){if(a.cC===null)a.cC=Cl(a.be);return a.cC;}
function Fq(a,b){a.cC=b;a.bg=ND(b);if(a.bg<64)a.be=Kv(b);}
function C$(b){var c,d;Ds();if(Long_lt(b,Long_ZERO))b=Long_xor(b,Long_fromInt(-1));if(Long_eq(b,Long_ZERO))c=64;else{c=0;d=Long_shru(b,32);if(Long_ne(d,Long_ZERO))c=32;else d=b;b=Long_shru(d,16);if(Long_eq(b,Long_ZERO))b=d;else c=c|16;d=Long_shru(b,8);if(Long_eq(d,Long_ZERO))d=b;else c=c|8;b=Long_shru(d,4);if(Long_eq(b,Long_ZERO))b=d;else c=c|4;d=Long_shru(b,2);if(Long_eq(d,Long_ZERO))d=b;else c=c|2;if(Long_ne(Long_shru(d,1),Long_ZERO))c=c|1;c=(64-c|0)-1|0;}return 64-c|0;}
function PO(){var b,c,d,e;Yd=E_(0,0);Ye=E_(1,0);Yf=E_(10,0);b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]
=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);Yi=b;b=$rt_createLongArray(28);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(5);c[2]=Long_fromInt(25);c[3]=Long_fromInt(125);c[4]=Long_fromInt(625);c[5]=Long_fromInt(3125);c[6]=Long_fromInt(15625);c[7]=Long_fromInt(78125);c[8]=Long_fromInt(390625);c[9]=Long_fromInt(1953125);c[10]=Long_fromInt(9765625);c[11]=Long_fromInt(48828125);c[12]=Long_fromInt(244140625);c[13]=Long_fromInt(1220703125);c[14]
=new Long(1808548329, 1);c[15]=new Long(452807053, 7);c[16]=new Long(2264035265, 35);c[17]=new Long(2730241733, 177);c[18]=new Long(766306777, 888);c[19]=new Long(3831533885, 4440);c[20]=new Long(1977800241, 22204);c[21]=new Long(1299066613, 111022);c[22]=new Long(2200365769, 555111);c[23]=new Long(2411894253, 2775557);c[24]=new Long(3469536673, 13877787);c[25]=new Long(167814181, 69388939);c[26]=new Long(839070905, 346944695);c[27]=new Long(4195354525, 1734723475);Yj=b;Yk=$rt_createIntArray(Yj.data.length);Yl
=$rt_createIntArray(Yi.data.length);Ym=E(BC,11);Yn=E(BC,11);Yo=$rt_createCharArray(100);d=0;while(d<Yn.data.length){Ym.data[d]=E_(d,0);Yn.data[d]=E_(0,d);Yo.data[d]=48;d=d+1|0;}while(d<Yo.data.length){Yo.data[d]=48;d=d+1|0;}e=0;while(e<Yk.data.length){Yk.data[e]=C$(Yj.data[e]);e=e+1|0;}e=0;while(e<Yl.data.length){Yl.data[e]=C$(Yi.data[e]);e=e+1|0;}Cw();Yh=Yt;Yg=Yr;}
function By(){X.call(this);}
function Bs(a){var b=new By();RM(b,a);return b;}
function RM(a,b){Cb(a);a.bc=b;}
function IR(){X.call(this);this.eR=null;}
function Mq(a){JY(a.eR);return U();}
function Tq(a){return Mq(a);}
function BP(){X.call(this);}
function U(){var a=new BP();RQ(a);return a;}
function RQ(a){Cb(a);a.bc=null;}
function CC(){Bc.call(this);}
function Br(){Bx.call(this);}
function Bz(){var a=this;B1.call(a);a.h=null;a.q=0;a.u=0;a.bV=0;}
var Ys=null;var Yu=null;var Yv=null;var Yw=null;var Yx=null;var Yy=null;function BK(a,b){var c=new Bz();K9(c,a,b);return c;}
function CK(a,b,c){var d=new Bz();Em(d,a,b,c);return d;}
function U9(a,b){var c=new Bz();J4(c,a,b);return c;}
function K9(a,b,c){var d;a.bV=(-2);a.u=b;a.q=1;d=$rt_createIntArray(1);d.data[0]=c;a.h=d;}
function Em(a,b,c,d){a.bV=(-2);a.u=b;a.q=c;a.h=d;}
function J4(a,b,c){var d,e;a.bV=(-2);a.u=b;if(Long_eq(Long_and(c,new Long(0, 4294967295)),Long_ZERO)){a.q=1;d=$rt_createIntArray(1);d.data[0]=c.lo;a.h=d;}else{a.q=2;d=$rt_createIntArray(2);e=d.data;e[0]=c.lo;e[1]=c.hi;a.h=d;}}
function Cl(b){if(Long_lt(b,Long_ZERO)){if(Long_eq(b,Long_fromInt(-1)))return Yw;return U9((-1),Long_neg(b));}if(Long_gt(b,Long_fromInt(10)))return U9(1,b);return Yx.data[b.lo];}
function Kh(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=J(c);if(G(c,0)!=45){f=1;g=0;h=e;}else{f=(-1);g=1;h=e+(-1)|0;}i=Yz.data[d];j=h/i|0;k=h%i|0;if(k)j=j+1|0;l=$rt_createIntArray(j);m=YA.data[d-2|0];n=0;if(!k)k=i;o=l.data;p=g+k|0;while(g<e){q=Dt(BR(c,g,p),d);Cw();h=Eo(l,l,n,m);r=Long_and(Long_fromInt(q),new Long(4294967295, 0));j=0;while(Long_ne(r,Long_ZERO)&&j<n){s=Long_add(r,Long_and(Long_fromInt(o[j]),new Long(4294967295, 0)));o[j]=s.lo;r=Long_shr(s,32);j=j+1|0;}g=h+r.lo|0;h=n+1|0;o[n]=g;j=p+i|0;n=h;g=p;p
=j;}b.u=f;b.q=n;b.h=l;Cq(b);}
function Fw(a){return !a.u?a:CK( -a.u,a.q,a.h);}
function Ee(a,b){return UU(a,b);}
function D1(a,b){var c,d,e,f,g,h,i,j,k;a:{c=a.u;d=b.u;if(d){if(!c)a=Fw(b);else{e=a.q;f=b.q;if((e+f|0)==2){g=Long_and(Long_fromInt(a.h.data[0]),new Long(4294967295, 0));h=Long_and(Long_fromInt(b.h.data[0]),new Long(4294967295, 0));if(c<0)g=Long_neg(g);if(d<0)h=Long_neg(h);a=Cl(Long_sub(g,h));}else{i=BZ(e,f);i=!i?Iw(a.h,b.h,e):i<=0?(-1):1;if(i==(-1)){i= -d;j=c!=d?Fv(b.h,f,a.h,e):Fr(b.h,f,a.h,e);}else if(c!=d){j=Fv(a.h,e,b.h,f);i=c;}else{if(!i){a=Ys;break a;}j=Fr(a.h,e,b.h,f);i=c;}k=j.data;a=CK(i,k.length,j);Cq(a);}}}}return a;}
function UD(a){return a.u;}
function Fu(a,b){if(b&&a.u)return b>0?KH(a,b):J_(a, -b);return a;}
function B6(a,b){if(b&&a.u)return b>0?J_(a,b):KH(a, -b);return a;}
function ND(a){var b,c;if(!a.u)b=0;else{c=a.q<<5;b=a.h.data[a.q-1|0];if(a.u<0&&GB(a)==(a.q-1|0))b=b+(-1)|0;b=c-CX(b)|0;}return b;}
function H1(a,b){var c,d,e,f;if(!b)return !(a.h.data[0]&1)?0:1;if(b<0){c=new Dm;Bd(c,B(53));I(c);}d=b>>5;if(d>=a.q)return a.u>=0?0:1;e=a.h.data[d];b=1<<(b&31);if(a.u<0){f=GB(a);if(d<f)return 0;e=f==d? -e:e^(-1);}return !(e&b)?0:1;}
function JW(a){return D5(a.u,a.h.data[0]);}
function Kv(a){var b;b=a.q<=1?Long_and(Long_fromInt(a.h.data[0]),new Long(4294967295, 0)):Long_or(Long_shl(Long_fromInt(a.h.data[1]),32),Long_and(Long_fromInt(a.h.data[0]),new Long(4294967295, 0)));return Long_mul(Long_fromInt(a.u),b);}
function HQ(a,b){var c;if(a===b)return 1;if(!(b instanceof Bz))return 0;c=b;return a.u==c.u&&a.q==c.q&&Nx(a,c.h)?1:0;}
function Nx(a,b){var c,d;c=a.q-1|0;while(c>=0){d=b.data;if(a.h.data[c]!=d[c])break;c=c+(-1)|0;}return c>=0?0:1;}
function NP(a){return Mw(a,0);}
function B4(a,b){if(!b.u)return Ys;if(!a.u)return Ys;Cw();return EA(a,b);}
function CG(a,b){var c,d,e,f,g,h,i,j,k;if(b<0){c=new Dm;Bd(c,B(54));I(c);}if(!b)return Yu;if(b!=1&&!HQ(a,Yu)&&!HQ(a,Ys)){if(!H1(a,0)){d=1;while(!H1(a,d)){d=d+1|0;}e=D5(d,b);if(e<Yy.data.length)c=Yy.data[e];else{f=e>>5;g=e&31;h=f+1|0;i=$rt_createIntArray(h);i.data[f]=1<<g;c=CK(1,h,i);}return B4(c,CG(Fu(a,d),b));}Cw();c=Yu;while(b>1){if(b&1)c=B4(c,a);if(a.q==1)a=B4(a,a);else{j=new Bz;i=IY(a.h,a.q,$rt_createIntArray(a.q<<1));k=i.data;j.bV=(-2);e=k.length;if(e){j.u=1;j.q=e;j.h=i;Cq(j);}else{j.u=0;j.q=1;i=$rt_createIntArray(1);i.data[0]
=0;j.h=i;}a=j;}b=b>>1;}return B4(c,a);}return a;}
function Mt(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;if(!b.u){b=new Dm;Bd(b,B(55));I(b);}c=b.u;if(MC(b)){if(b.u<=0)a=Fw(a);return a;}d=a.u;e=a.q;f=b.q;if((e+f|0)==2){g=Long_div(Long_and(Long_fromInt(a.h.data[0]),new Long(4294967295, 0)),Long_and(Long_fromInt(b.h.data[0]),new Long(4294967295, 0)));if(d!=c)g=Long_neg(g);return Cl(g);}h=BZ(e,f);h=!h?Iw(a.h,b.h,e):h<=0?(-1):1;if(!h)return d!=c?Yw:Yu;if(h==(-1))return Ys;i=(e-f|0)+1|0;j=$rt_createIntArray(i);k=d!=c?(-1):1;if(f!=1)V2(j,i,a.h,e,b.h,f);else{l=j.data;m
=a.h;f=b.h.data[0];n=Long_ZERO;o=Long_and(Long_fromInt(f),new Long(4294967295, 0));d=e-1|0;p=Long_fromInt(f>>>1);e=f&1;g=Long_shl(o,1);while(d>=0){q=m.data;r=Long_or(Long_shl(n,32),Long_and(Long_fromInt(q[d]),new Long(4294967295, 0)));if(Long_ge(r,Long_ZERO)){s=Long_div(r,o);n=Long_rem(r,o);}else{n=Long_shru(r,1);s=Long_div(n,p);n=Long_add(Long_shl(Long_rem(n,p),1),Long_and(r,Long_fromInt(1)));if(e){if(Long_le(s,n))n=Long_sub(n,s);else if(Long_gt(Long_sub(s,n),o)){n=Long_add(n,Long_sub(g,s));s=Long_sub(s,Long_fromInt(2));}
else{n=Long_add(n,Long_sub(o,s));s=Long_sub(s,Long_fromInt(1));}}}l[d]=Long_and(s,new Long(4294967295, 0)).lo;d=d+(-1)|0;}}t=CK(k,i,j);Cq(t);return t;}
function Cq(a){var b,c,d;while(a.q>0){b=a.h.data;c=a.q-1|0;a.q=c;if(b[c])break;}b=a.h.data;d=a.q;a.q=d+1|0;if(!b[d])a.u=0;}
function MC(a){return a.q==1&&a.h.data[0]==1?1:0;}
function GB(a){var b;if(a.bV==(-2)){if(!a.u)b=(-1);else{b=0;while(!a.h.data[b]){b=b+1|0;}}a.bV=b;}return a.bV;}
function NL(){var b,c,d;Ys=BK(0,0);Yu=BK(1,1);Yv=BK(1,10);Yw=BK((-1),1);b=E(Bz,11);c=b.data;c[0]=Ys;c[1]=Yu;c[2]=BK(1,2);c[3]=BK(1,3);c[4]=BK(1,4);c[5]=BK(1,5);c[6]=BK(1,6);c[7]=BK(1,7);c[8]=BK(1,8);c[9]=BK(1,9);c[10]=Yv;Yx=b;Yy=E(Bz,32);d=0;while(d<Yy.data.length){Yy.data[d]=Cl(Long_shl(Long_fromInt(1),d));d=d+1|0;}}
function Jx(){B1.call(this);}
var YB=null;function Nf(b,c){var d,e,f,g,h,i,j,k;if(c>=2&&c<=36){if(b!==null&&!CQ(b)){a:{d=0;e=0;switch(G(b,0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=Long_ZERO;g=Long_fromInt(c);while(e<J(b)){h=e+1|0;i=Fc(G(b,e));if(i<0){j=new Br;k=new L;N(k);F(k,B(7));F(k,b);Bd(j,K(k));I(j);}if(i>=c){j=new Br;k=new L;N(k);F(k,B(8));k=Bf(k,c);F(k,B(3));F(k,b);Bd(j,K(k));I(j);}f=Long_add(Long_mul(g,f),Long_fromInt(i));if(Long_lt(f,Long_ZERO)){if(h==J(b)&&Long_eq(f,new Long(0, 2147483648))&&d)return new Long(0, 2147483648);j
=new Br;k=new L;N(k);F(k,B(9));F(k,b);Bd(j,K(k));I(j);}e=h;}if(d)f=Long_neg(f);return f;}b=new Br;Bd(b,B(10));I(b);}j=new Br;b=new L;N(b);F(b,B(11));Bd(j,K(Bf(b,c)));I(j);}
function GK(b){var c;c=new L;N(c);return K(MA(c,b));}
function MH(){YB=C($rt_longcls());}
function Dn(){D.call(this);}
var YC=null;var Yq=null;var Yt=null;var Yr=null;function Cw(){Cw=Bu(Dn);Pp();}
function EA(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;Cw();if(c.q<=b.q){d=c;c=b;b=d;}if(b.q>=63){e=(c.q&(-2))<<4;d=Fu(c,e);f=Fu(b,e);g=D1(c,B6(d,e));h=D1(b,B6(f,e));i=EA(d,f);j=EA(g,h);b=B6(Ee(Ee(EA(D1(d,g),D1(h,f)),i),j),e);return Ee(Ee(B6(i,e<<1),b),j);}e=c.q;k=b.q;l=e+k|0;m=c.u==b.u?1:(-1);if(l==2){n=CP(c.h.data[0],b.h.data[0],0,0);e=n.lo;k=n.hi;if(!k)b=BK(m,e);else{b=new Bz;o=$rt_createIntArray(2);p=o.data;p[0]=e;p[1]=k;Em(b,m,2,o);}}else{q=c.h;r=b.h;s=$rt_createIntArray(l);if(e&&k){if(e==1){o=
q.data;s.data[k]=Eo(s,r,k,o[0]);}else if(k==1){o=r.data;s.data[e]=Eo(s,q,e,o[0]);}else if(q===r&&e==k)IY(q,e,s);else{p=s.data;t=0;while(t<e){o=q.data;n=Long_ZERO;u=o[t];v=0;while(v<k){w=r.data[v];x=t+v|0;n=CP(u,w,p[x],n.lo);p[x]=n.lo;n=Long_shru(n,32);v=v+1|0;}p[t+k|0]=n.lo;t=t+1|0;}}}b=CK(m,l,s);Cq(b);}return b;}
function Eo(b,c,d,e){var f,g,h;Cw();f=Long_ZERO;g=0;while(g<d){h=b.data;f=CP(c.data[g],e,f.lo,0);h[g]=f.lo;f=Long_shru(f,32);g=g+1|0;}return f.lo;}
function IY(b,c,d){var e,f,g,h,i,j,k,l,m,n;Cw();e=0;while(e<c){f=Long_ZERO;g=e+1|0;h=g;while(h<c){i=b.data;j=d.data;k=i[e];l=i[h];m=e+h|0;f=CP(k,l,j[m],f.lo);j[m]=f.lo;f=Long_shru(f,32);h=h+1|0;}d.data[e+c|0]=f.lo;e=g;}k=c<<1;l=0;n=0;while(n<k){i=d.data;e=i[n];i[n]=e<<1|l;l=e>>>31;n=n+1|0;}if(l)d.data[k]=l;f=Long_ZERO;k=0;l=0;while(k<c){i=b.data;j=d.data;f=CP(i[k],i[k],j[l],f.lo);j[l]=f.lo;f=Long_shru(f,32);l=l+1|0;f=Long_add(f,Long_and(Long_fromInt(j[l]),new Long(4294967295, 0)));j[l]=f.lo;f=Long_shru(f,32);k
=k+1|0;l=l+1|0;}return d;}
function I5(b){var c,d,e,f;Cw();c=b.lo;if(Long_lt(b,Long_fromInt(Yt.data.length)))return Yt.data[c];if(Long_le(b,Long_fromInt(50)))return CG(Yv,c);if(Long_le(b,Long_fromInt(1000)))return B6(CG(Yr.data[1],c),c);if(Long_gt(Long_add(Long_fromInt(1),Long_fromNumber(Long_toNumber(b)/2.4082399653118496)),Long_fromInt(1000000))){d=new Dm;Bd(d,B(56));I(d);}if(Long_le(b,Long_fromInt(2147483647)))return B6(CG(Yr.data[1],c),c);d=CG(Yr.data[1],2147483647);e=Long_sub(b,Long_fromInt(2147483647));c=Long_rem(b,Long_fromInt(2147483647)).lo;f
=d;b=e;while(Long_gt(b,Long_fromInt(2147483647))){f=B4(f,d);b=Long_sub(b,Long_fromInt(2147483647));}d=B6(B4(f,CG(Yr.data[1],c)),2147483647);while(Long_gt(e,Long_fromInt(2147483647))){d=B6(d,2147483647);e=Long_sub(e,Long_fromInt(2147483647));}return B6(d,c);}
function CP(b,c,d,e){Cw();return Long_add(Long_add(Long_mul(Long_and(Long_fromInt(b),new Long(4294967295, 0)),Long_and(Long_fromInt(c),new Long(4294967295, 0))),Long_and(Long_fromInt(d),new Long(4294967295, 0))),Long_and(Long_fromInt(e),new Long(4294967295, 0)));}
function Pp(){var b,c,d,e,f;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;YC=b;b=$rt_createIntArray(14);c=b.data;c[0]=1;c[1]=5;c[2]=25;c[3]=125;c[4]=625;c[5]=3125;c[6]=15625;c[7]=78125;c[8]=390625;c[9]=1953125;c[10]=9765625;c[11]=48828125;c[12]=244140625;c[13]=1220703125;Yq=b;Yt=E(Bz,32);Yr=E(Bz,32);d=Long_fromInt(1);e=0;while(e<=18){Yr.data[e]=Cl(d);Yt.data[e]=Cl(Long_shl(d,e));d=Long_mul(d,Long_fromInt(5));e
=e+1|0;}while(e<Yt.data.length){c=Yr.data;b=Yr.data;f=e-1|0;c[e]=B4(b[f],Yr.data[1]);Yt.data[e]=B4(Yt.data[f],Yv);e=e+1|0;}}
function E8(){D.call(this);}
var Yz=null;var YA=null;function Mw(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;d=b.u;e=b.q;f=b.h;if(!d){switch(c){case 0:break;case 1:return B(57);case 2:return B(58);case 3:return B(59);case 4:return B(60);case 5:return B(61);case 6:return B(62);default:g=Db();if(c>=0)BF(g,B(63));else BF(g,B(64));Bf(g, -c);return BN(g);}return B(1);}h=((e*10|0)+1|0)+7|0;i=$rt_createCharArray(h+1|0);if(e==1){j=f.data[0];if(j>=0){k=h;while(true){f=i.data;l=j/10|0;k=k+(-1)|0;f[k]=(48+(j-(l*10|0)|0)|0)&65535;if(!l)break;j
=l;}}else{m=Long_and(Long_fromInt(j),new Long(4294967295, 0));k=h;while(true){f=i.data;n=Long_div(m,Long_fromInt(10));k=k+(-1)|0;f[k]=(48+Long_sub(m,Long_mul(n,Long_fromInt(10))).lo|0)&65535;if(Long_eq(n,Long_ZERO))break;m=n;}}}else{o=i.data;p=$rt_createIntArray(e);q=p.data;CB(f,0,p,0,e);r=h;a:while(true){s=Long_ZERO;t=e-1|0;k=t;while(k>=0){u=KP(Long_add(Long_shl(s,32),Long_and(Long_fromInt(q[k]),new Long(4294967295, 0))));q[k]=u.lo;s=Long_fromInt(u.hi);k=k+(-1)|0;}v=s.lo;k=r;while(true){k=k+(-1)|0;o[k]=(48
+(v%10|0)|0)&65535;v=v/10|0;if(!v)break;if(!k)break;}w=(9-r|0)+k|0;x=0;while(x<w&&k>0){k=k+(-1)|0;o[k]=48;x=x+1|0;}while(!q[t]){if(!t)break a;t=t+(-1)|0;}e=t+1|0;r=k;}while(o[k]==48){k=k+1|0;}}r=d>=0?0:1;d=h-k|0;y=(d-c|0)-1|0;if(!c){if(r){f=i.data;k=k+(-1)|0;f[k]=45;}return B$(i,k,h-k|0);}if(c>0&&y>=(-6)){if(y<0){f=i.data;t=2;c= -y+1|0;while(t<c){k=k+(-1)|0;f[k]=48;t=t+1|0;}c=k+(-1)|0;f[c]=46;c=c+(-1)|0;f[c]=48;if(r){c=c+(-1)|0;f[c]=45;}return B$(i,c,h-c|0);}f=i.data;z=k+y|0;t=h-1|0;while(t>=z){f[t+1|0]=f[t];t
=t+(-1)|0;}f[z+1|0]=46;if(r){k=k+(-1)|0;f[k]=45;}return B$(i,k,(h-k|0)+1|0);}ba=k+1|0;g=Ot((16+h|0)-ba|0);if(r)BY(g,45);if((h-ba|0)<1)HX(g,i,k,d);else{BY(g,i.data[k]);BY(g,46);HX(g,i,ba,d-1|0);}BY(g,69);if(y>0)BY(g,43);BF(g,E5(y));return BN(g);}
function MV(b,c){var d,e,f,g,h,i,j,k,l,m;d=Long_ge(b,Long_ZERO)?0:1;if(d)b=Long_neg(b);if(Long_eq(b,Long_ZERO)){switch(c){case 0:break;case 1:return B(57);case 2:return B(58);case 3:return B(59);case 4:return B(60);case 5:return B(61);case 6:return B(62);default:e=new L;N(e);if(c>=0)F(e,B(63));else F(e,B(64));F(e,c==(-2147483648)?B(65):E5( -c));return K(e);}return B(1);}f=$rt_createCharArray(19);g=18;while(true){h=f.data;i=Long_div(b,Long_fromInt(10));g=g+(-1)|0;h[g]=Long_add(Long_fromInt(48),Long_sub(b,Long_mul(i,
Long_fromInt(10)))).lo&65535;if(Long_eq(i,Long_ZERO))break;b=i;}j=Long_sub(Long_sub(Long_sub(Long_fromInt(18),Long_fromInt(g)),Long_fromInt(c)),Long_fromInt(1));if(!c){if(d){g=g+(-1)|0;h[g]=45;}return B$(f,g,18-g|0);}if(c>0&&Long_ge(j,Long_fromInt(-6))){if(Long_ge(j,Long_ZERO)){k=g+j.lo|0;l=17;while(l>=k){h[l+1|0]=h[l];l=l+(-1)|0;}h[k+1|0]=46;if(d){g=g+(-1)|0;h[g]=45;}return B$(f,g,(18-g|0)+1|0);}l=2;b=Long_add(Long_neg(j),Long_fromInt(1));while(Long_lt(Long_fromInt(l),b)){g=g+(-1)|0;h[g]=48;l=l+1|0;}c=g+(-1)
|0;h[c]=46;c=c+(-1)|0;h[c]=48;if(d){c=c+(-1)|0;h[c]=45;}return B$(f,c,18-c|0);}m=g+1|0;e=new L;CF(e,34-m|0);if(d)Be(e,45);if((18-m|0)<1)Cz(e,f,g,18-g|0);else{Be(e,h[g]);Be(e,46);Cz(e,f,m,(18-g|0)-1|0);}Be(e,69);if(Long_gt(j,Long_ZERO))Be(e,43);F(e,GK(j));return K(e);}
function KP(b){var c,d,e;if(Long_ge(b,Long_ZERO)){c=Long_div(b,Long_fromInt(1000000000));d=Long_rem(b,Long_fromInt(1000000000));}else{e=Long_shru(b,1);c=Long_div(e,Long_fromInt(500000000));d=Long_add(Long_shl(Long_rem(e,Long_fromInt(500000000)),1),Long_and(b,Long_fromInt(1)));}return Long_or(Long_shl(d,32),Long_and(c,new Long(4294967295, 0)));}
function My(){var b,c;b=$rt_createIntArray(37);c=b.data;c[0]=(-1);c[1]=(-1);c[2]=31;c[3]=19;c[4]=15;c[5]=13;c[6]=11;c[7]=11;c[8]=10;c[9]=9;c[10]=9;c[11]=8;c[12]=8;c[13]=8;c[14]=8;c[15]=7;c[16]=7;c[17]=7;c[18]=7;c[19]=7;c[20]=7;c[21]=7;c[22]=6;c[23]=6;c[24]=6;c[25]=6;c[26]=6;c[27]=6;c[28]=6;c[29]=6;c[30]=6;c[31]=6;c[32]=6;c[33]=6;c[34]=6;c[35]=6;c[36]=5;Yz=b;b=$rt_createIntArray(35);c=b.data;c[0]=(-2147483648);c[1]=1162261467;c[2]=1073741824;c[3]=1220703125;c[4]=362797056;c[5]=1977326743;c[6]=1073741824;c[7]
=387420489;c[8]=1000000000;c[9]=214358881;c[10]=429981696;c[11]=815730721;c[12]=1475789056;c[13]=170859375;c[14]=268435456;c[15]=410338673;c[16]=612220032;c[17]=893871739;c[18]=1280000000;c[19]=1801088541;c[20]=113379904;c[21]=148035889;c[22]=191102976;c[23]=244140625;c[24]=308915776;c[25]=387420489;c[26]=481890304;c[27]=594823321;c[28]=729000000;c[29]=887503681;c[30]=1073741824;c[31]=1291467969;c[32]=1544804416;c[33]=1838265625;c[34]=60466176;YA=b;}
function LT(){D.call(this);}
function Iw(b,c,d){var e,f;e=d-1|0;while(e>=0){f=c.data;if(b.data[e]!=f[e])break;e=e+(-1)|0;}if(e<0)d=0;else{c=c.data;d=Long_ge(Long_and(Long_fromInt(b.data[e]),new Long(4294967295, 0)),Long_and(Long_fromInt(c[e]),new Long(4294967295, 0)))?1:(-1);}return d;}
function UU(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=b.u;e=c.u;if(!d)return c;if(!e)return b;f=b.q;g=c.q;if((f+g|0)==2){h=Long_and(Long_fromInt(b.h.data[0]),new Long(4294967295, 0));i=Long_and(Long_fromInt(c.h.data[0]),new Long(4294967295, 0));if(d!=e)return Cl(d>=0?Long_sub(h,i):Long_sub(i,h));j=Long_add(h,i);k=j.lo;l=j.hi;if(!l)b=BK(d,k);else{b=new Bz;m=$rt_createIntArray(2);n=m.data;n[0]=k;n[1]=l;Em(b,d,2,m);}return b;}if(d==e)m=f<g?Fv(c.h,g,b.h,f):Fv(b.h,f,c.h,g);else{o=BZ(f,g);o=!o?Iw(b.h,c.h,f):o<=0?(-1):
1;if(!o)return Ys;if(o!=1){m=Fr(c.h,g,b.h,f);d=e;}else m=Fr(b.h,f,c.h,g);}n=m.data;p=CK(d,n.length,m);Cq(p);return p;}
function Rb(b,c,d,e,f){var g,h,i,j;g=b.data;b=e.data;c=c.data;h=Long_add(Long_and(Long_fromInt(c[0]),new Long(4294967295, 0)),Long_and(Long_fromInt(b[0]),new Long(4294967295, 0)));g[0]=h.lo;i=Long_shr(h,32);if(d<f){j=1;while(j<d){h=Long_add(i,Long_add(Long_and(Long_fromInt(c[j]),new Long(4294967295, 0)),Long_and(Long_fromInt(b[j]),new Long(4294967295, 0))));g[j]=h.lo;i=Long_shr(h,32);j=j+1|0;}while(j<f){h=Long_add(i,Long_and(Long_fromInt(b[j]),new Long(4294967295, 0)));g[j]=h.lo;i=Long_shr(h,32);j=j+1|0;}}else
{j=1;while(j<f){h=Long_add(i,Long_add(Long_and(Long_fromInt(c[j]),new Long(4294967295, 0)),Long_and(Long_fromInt(b[j]),new Long(4294967295, 0))));g[j]=h.lo;i=Long_shr(h,32);j=j+1|0;}while(j<d){h=Long_add(i,Long_and(Long_fromInt(c[j]),new Long(4294967295, 0)));g[j]=h.lo;i=Long_shr(h,32);j=j+1|0;}}if(Long_ne(i,Long_ZERO))g[j]=i.lo;}
function Fv(b,c,d,e){var f;f=$rt_createIntArray(c+1|0);Rb(f,b,c,d,e);return f;}
function Fr(b,c,d,e){var f,g,h,i,j,k,l;f=$rt_createIntArray(c);g=f.data;h=Long_ZERO;i=0;while(i<e){j=b.data;k=d.data;l=Long_add(h,Long_sub(Long_and(Long_fromInt(j[i]),new Long(4294967295, 0)),Long_and(Long_fromInt(k[i]),new Long(4294967295, 0))));g[i]=l.lo;h=Long_shr(l,32);i=i+1|0;}while(i<c){l=Long_add(h,Long_and(Long_fromInt(b.data[i]),new Long(4294967295, 0)));g[i]=l.lo;h=Long_shr(l,32);i=i+1|0;}return f;}
function LC(){D.call(this);}
function K3(){D.call(this);}
function FQ(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function V5(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=E(GG,16384);d=c.data;e=$rt_createByteArray(16384);f=e.data;g=0;h=0;i=0;j=0;while(j<J(b)){k=FQ(G(b,j));if(k==64){j=j+1|0;k=FQ(G(b,j));l=0;m=1;n=0;while(n<3){j=j+1|0;l=l|D5(m,FQ(G(b,j)));m=m*64|0;n=n+1|0;}}else if(k<32)l=1;else{k=(k-32|0)<<24>>24;j=j+1|0;l=FQ(G(b,j));}if(!k&&l>=128){if(g>0){m=h+1|0;d[h]=S8(i,i+g|0,MK(e,g));h=m;}i=i+(g+l|0)|0;g=0;}else{o=g+l|0;if(o<f.length)n=h;else{n=h+1|0;d[h]=S8(i,i+g|0,MK(e,g));i=i+o|0;g=0;}while(true){m=l+(-1)|0;if(l<=0)break;o
=g+1|0;f[g]=k;g=o;l=m;}h=n;}j=j+1|0;}return Nb(c,h);}
function HV(){var a=this;D.call(a);a.fs=null;a.gd=0;}
function ML(){D.call(this);}
function Kf(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.fs.data;f=b.gd;b.gd=f+1|0;f=e[f];g=f<34?f-32|0:f>=92?(f-32|0)-2|0:(f-32|0)-1|0;h=(g%2|0)!=1?0:1;c=c+D5(d,g/2|0)|0;d=d*46|0;if(!h)break;}h=c/2|0;if(c%2|0)h= -h;return h;}
function Lj(){D.call(this);}
function J_(b,c){var d,e,f,g;d=c>>5;c=c&31;e=(b.q+d|0)+(c?1:0)|0;f=$rt_createIntArray(e);Gr(f,b.h,d,c);g=CK(b.u,e,f);Cq(g);return g;}
function Gr(b,c,d,e){var f,g,h,i,j,k;a:{if(!e)CB(c,0,b,d,b.data.length-d|0);else{f=b.data;g=32-e|0;h=f.length-1|0;f[h]=0;while(true){if(h<=d)break a;i=c.data;j=f[h];k=(h-d|0)-1|0;f[h]=j|i[k]>>>g;f[h-1|0]=i[k]<<e;h=h+(-1)|0;}}}j=0;while(j<d){b.data[j]=0;j=j+1|0;}}
function KH(b,c){var d,e,f,g,h,i,j,k;d=c>>5;c=c&31;if(d>=b.q)return b.u>=0?Ys:Yw;a:{e=b.q-d|0;f=e+1|0;g=$rt_createIntArray(f);M8(g,e,b.h,d,c);if(b.u>=0)f=e;else{h=0;while(true){i=BZ(h,d);if(i>=0)break;if(b.h.data[h])break;h=h+1|0;}if(i>=0){if(c<=0){f=e;break a;}if(!(b.h.data[h]<<(32-c|0))){f=e;break a;}}j=g.data;c=0;while(true){d=BZ(c,e);if(d>=0)break;if(j[c]!=(-1))break;j[c]=0;c=c+1|0;}if(d)f=e;j[c]=j[c]+1|0;}}k=CK(b.u,f,g);Cq(k);return k;}
function M8(b,c,d,e,f){var g,h,i,j,k,l;g=1;h=0;while(h<e){g=g&(d.data[h]?0:1);h=h+1|0;}if(!f)CB(d,e,b,0,c);else{i=d.data;j=32-f|0;g=g&(i[h]<<j?0:1);k=0;l=c-1|0;while(k<l){d=b.data;c=k+e|0;d[k]=i[c]>>>f|i[c+1|0]<<j;k=k+1|0;}b.data[k]=i[k+e|0]>>>f;}return g;}
function KG(){D.call(this);}
function Kw(b,c){var d,e,f,g;b=b.data;d=$rt_createCharArray(c);e=d.data;f=Bq(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function MK(b,c){var d,e,f,g;b=b.data;d=$rt_createByteArray(c);e=d.data;f=Bq(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Nb(b,c){var d,e,f,g;d=b.data;e=La(DX(C0(b)),c);f=Bq(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function E2(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new Bx;S(f);I(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function L6(){D.call(this);}
function Fb(){X.call(this);}
function EV(){var a=this;X.call(a);a.f=null;a.bF=null;a.d=null;a.d5=0;a.cc=null;a.ch=0;a.cv=0;}
function K$(a,b){var c=new EV();S7(c,a,b);return c;}
function S7(a,b,c){Cb(a);a.d5=0;a.cc=null;a.ch=0;a.cv=0;a.f=b;a.d=c;}
function LL(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;if(F1(a.f,B(66)))return;a.bF=E(Bp,a.d.data.length);b=Cr();c=E1(Fe(GJ(XV)));a:while(D3(c)){d=EO(c);if(R(BH(d.b5,B(66)).data[0],a.f)){b:{e=a.f;a.f=d.b5;if(BH(a.f,B(66)).data.length>1){if(!Ch(BH(a.f,B(66)).data[1],B(67))){f=BH(BH(a.f,B(66)).data[1],B(68)).data;g=f.length;h=0;while(true){if(h>=g)break b;i=f[h];if(!R(i,B(48)))BU(b,i);h=h+1|0;}}i=new L;N(i);F(i,B(48));if(!R(K(Bf(i,a.d.data.length)),BH(Dg(BH(a.f,B(66)).data[1],2),B(69)).data[0])){a.f=e;continue a;}a.bF
=E(Bp,a.d.data.length+3|0);h=0;while(h<a.d.data.length){a.bF.data[h]=NH(a.d.data[h]);h=h+1|0;}a.bF.data[h]=NH(Bs(BH(a.f,B(66)).data[0]));f=BH(a.f,B(69)).data;j=a.bF.data;h=h+1|0;j[h]=NH(Bs(f[f.length-1|0]));k=a.bF.data;g=h+1|0;i=new FZ;f=E(X,1);f.data[0]=DC(100.0);C5(i);i.by=f;k[g]=i;a.cv=1;}}if(!a.cv&&b.A!=a.d.data.length){a.f=e;G2(b);}}}if(!a.cv&&b.A!=a.d.data.length){f=E(Q,1);f.data[0]=a.f;V(3,f);}c:{if(!a.cv){h=0;l=1;f=a.d.data;m=f.length;n=0;while(true){if(n>=m)break c;o=f[n];if(Ch(a.f,B(40)))l=0;j=a.bF;i
=new G3;d=new L;N(d);c=!l?B(48):B(70);j=j.data;F(d,c);F(d,a.f);F(d,B(66));g=h+1|0;F(d,BB(b,h));J2(i,K(d),o);j[h]=i;n=n+1|0;h=g;}}}}
function F4(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(a.cc!==null){b=a.cc;if(!(b instanceof Bk)&&!(b instanceof By)&&!(b instanceof BE)&&!(b instanceof BP)&&!(b instanceof BI)&&!(b instanceof BD))b=b.x();if(b instanceof By){c=b.x();if(R(a.f,B(71))){if(a.d.data.length!=2){d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}return Bs(HS(c,a.d.data[0].r(),a.d.data[1].r()));}if(R(a.f,B(72))){if(a.d.data.length!=1){d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}if(!(a.d.data[0] instanceof Bk)&&!(a.d.data[0] instanceof By)&&!(a.d.data[0] instanceof BE)
&&!(a.d.data[0] instanceof BP)&&!(a.d.data[0] instanceof BI)&&!(a.d.data[0] instanceof BD))a.d.data[0]=a.d.data[0].x();if(!(a.d.data[0] instanceof Bk)){d=E(Q,1);d.data[0]=B(73);V(6,d);return U();}return Bs(BN(BY(BF(Db(),B(48)),G(c,a.d.data[0].x().bK()))));}if(R(a.f,B(74))){if(a.d.data.length!=1){d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}if(!(a.d.data[0] instanceof Bk)&&!(a.d.data[0] instanceof By)&&!(a.d.data[0] instanceof BE)&&!(a.d.data[0] instanceof BP)&&!(a.d.data[0] instanceof BI)&&!(a.d.data[0] instanceof BD))a.d.data[0]
=a.d.data[0].x();if(!(a.d.data[0] instanceof Bk)){d=E(Q,1);d.data[0]=B(73);V(6,d);return U();}return Bs(BN(BY(BF(Db(),B(48)),G(c,(J(c)-1|0)-a.d.data[0].x().bK()|0))));}if(!R(a.f,B(75))&&!R(a.f,B(76))){if(!R(a.f,B(77))&&!R(a.f,B(78))){if(!R(a.f,B(79))&&!R(a.f,B(80))){if(R(a.f,B(81))){if(a.d.data.length==1)return DM(Ch(c,a.d.data[0].r()));d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}if(R(a.f,B(82))){if(!a.d.data.length)return DC(J(c));d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}if(R(a.f,B(83))){if(!a.d.data.length)return DM(CQ(c));d
=E(Q,1);d.data[0]=a.f;V(3,d);return U();}if(R(a.f,B(84))){if(a.d.data.length==1)return DM(L1(c,a.d.data[0].r()));d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}if(!R(a.f,B(85))&&!R(a.f,B(86))){if(R(a.f,B(87))){if(a.d.data.length==1)return DM(MY(c,a.d.data[0].r()));d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}if(R(a.f,B(88))){if(a.d.data.length==1)return DM(Nc(c,a.d.data[0].r()));d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}if(R(a.f,B(89))){if(a.d.data.length!=1){d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}if(!(a.d.data[0] instanceof Bk)
&&!(a.d.data[0] instanceof By)&&!(a.d.data[0] instanceof BE)&&!(a.d.data[0] instanceof BP)&&!(a.d.data[0] instanceof BI)&&!(a.d.data[0] instanceof BD))a.d.data[0]=a.d.data[0].x();if(!(a.d.data[0] instanceof Bk)){d=E(Q,1);d.data[0]=B(73);V(6,d);return U();}return DC(Lz(c,a.d.data[0].x().bK()));}if(!R(a.f,B(90))){if(R(a.f,B(91))){if(!a.d.data.length)return Bs(Jq(c));d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}if(R(a.f,B(92))){if(!a.d.data.length)return JU(W4(b));d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}if(R(a.f,
B(93))){if(!a.d.data.length)return Bs(BN(BF(BY(Db(),G(c,0)),B(48))));d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}if(R(a.f,B(94))){if(a.d.data.length){d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}return Bs(BN(BF(BY(Db(),G(c,J(c)-1|0)),B(48))));}if(R(a.f,B(95))){if(a.d.data.length){d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}return Bs(BN(BF(BY(Db(),G(c,Of(LH(W8()))%J(c)|0)),B(48))));}if(R(a.f,B(96))){if(!a.d.data.length)return Bs(Iq(c,B(97),B(48)));d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}if(R(a.f,B(98))){if(!a.d.data.length)return Bs(Iq(c,
B(99),B(48)));d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}if(R(a.f,B(100))){if(a.d.data.length!=1&&a.d.data.length!=2){d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}if(a.d.data.length==1)return DC(KK(c,a.d.data[0].r()));if(!(a.d.data[1] instanceof Bk)&&!(a.d.data[1] instanceof By)&&!(a.d.data[1] instanceof BE)&&!(a.d.data[1] instanceof BP)&&!(a.d.data[1] instanceof BI)&&!(a.d.data[1] instanceof BD))a.d.data[1]=a.d.data[1].x();if(!(a.d.data[1] instanceof Bk)){d=E(Q,1);d.data[0]=B(101);V(6,d);return U();}return DC(Fn(c,
a.d.data[0].r(),a.d.data[1].x().bK()));}if(!R(a.f,B(102)))return U();if(a.d.data.length!=1&&a.d.data.length!=2){d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}if(a.d.data.length==1)return DC(MR(c,a.d.data[0].r()));if(!(a.d.data[1] instanceof Bk)&&!(a.d.data[1] instanceof By)&&!(a.d.data[1] instanceof BE)&&!(a.d.data[1] instanceof BP)&&!(a.d.data[1] instanceof BI)&&!(a.d.data[1] instanceof BD))a.d.data[1]=a.d.data[1].x();if(!(a.d.data[1] instanceof Bk)){d=E(Q,1);d.data[0]=B(101);V(6,d);return U();}return DC(Fp(c,
a.d.data[0].r(),a.d.data[1].x().bK()));}if(a.d.data.length!=1&&a.d.data.length!=2){d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}if(!(a.d.data[0] instanceof Bk)&&!(a.d.data[0] instanceof By)&&!(a.d.data[0] instanceof BE)&&!(a.d.data[0] instanceof BP)&&!(a.d.data[0] instanceof BI)&&!(a.d.data[0] instanceof BD))a.d.data[0]=a.d.data[0].x();if(a.d.data.length==2&&!(a.d.data[1] instanceof Bk)&&!(a.d.data[1] instanceof By)&&!(a.d.data[1] instanceof BE)&&!(a.d.data[1] instanceof BP)&&!(a.d.data[1] instanceof BI)&&!(a.d.data[1] instanceof BD))a.d.data[1]
=a.d.data[1].x();if(!(a.d.data[0] instanceof Bk)){d=E(Q,1);d.data[0]=B(73);V(6,d);return U();}if(a.d.data.length==2&&a.d.data[1] instanceof Bk)return Bs(BR(c,a.d.data[0].x().bK(),a.d.data[1].x().bK()));if(a.d.data.length!=1){d=E(Q,1);d.data[0]=B(101);V(6,d);return U();}return Bs(Dg(c,a.d.data[0].x().bK()));}if(a.d.data.length==1)return DM(F1(c,a.d.data[0].r()));d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}if(a.d.data.length){d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}e=Ot(J(c));f=1;d=DQ(c).data;g=d.length;h=0;while
(h<g){i=d[h];if(Nd(i))f=1;else if(f){i=Ci(i);f=0;}BY(e,i);h=h+1|0;}return Bs(BN(e));}if(!a.d.data.length)return Bs(HZ(c));d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}if(!a.d.data.length)return Bs(Ke(c));d=E(Q,1);d.data[0]=a.f;V(3,d);return U();}d=BH(b.r(),B(66)).data;HJ(FV(a),d[0]);if(a.ch)a.f=BN(BF(BF(BF(BF(Db(),B(40)),d[1]),B(69)),a.f));}LL(a);if(a.cv){d=a.bF.data;f=d.length;g=0;while(g<f){d[g].bz();g=g+1|0;}return M0(Wn());}j=null;if(a.d5){j=JB();k=E1(Fe(CE(E7())));while(D3(k)){l=Ni(k);if(Ch(I8(l),BN(BF(BF(Db(),
B(70)),a.f)))&&Jh(l)!==null)Kg(j,I8(l),Jh(l));}}a:{if(a.bF!==null){d=a.bF.data;f=d.length;g=0;while(true){if(g>=f)break a;k=d[g];HJ(Nm(k),Ka(FV(a)));k.bz();g=g+1|0;}}}k=FD(GJ(E7()),a.f);if(k===null){d=E(Q,1);d.data[0]=a.f;V(1,d);return U();}k.hC(FV(a));k.bz();if(k.dP().gp()===null)m=U();else{m=k.dP().gp();k.dP().mz(null);}if(!(m instanceof Bk)&&!(m instanceof By)&&!(m instanceof BE)&&!(m instanceof BP)&&!(m instanceof BD)&&!(m instanceof BI))m=M7(m);if(a.d5)K6(CE(E7()),j);return m;}
function Qy(a,b){a.ch=b;return a;}
function RV(a,b){a.cc=b;return a;}
function Ub(a){return F4(a);}
function BD(){X.call(this);}
function Kk(){D.call(this);}
function K8(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(YD());}return b.data.length;}
function La(b,c){if(b===null){b=new CC;S(b);I(b);}if(b===C($rt_voidcls())){b=new Bx;S(b);I(b);}if(c>=0)return UF(b.b9,c);b=new JE;S(b);I(b);}
function UF(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function JE(){Bc.call(this);}
function Eu(){Bc.call(this);}
function D2(){BJ.call(this);}
function GY(){DN.call(this);}
function En(){Bc.call(this);}
function GS(){var a=this;D.call(a);a.eW=null;a.f5=null;a.eg=0;a.dt=0;}
function LX(a){return Et(a.eW);}
function Fs(a,b){return Cn(a.f5)<b?0:1;}
function Tl(a,b){a.eg=b;}
function V$(a,b){a.dt=b;}
function Js(){En.call(this);}
function IS(){Bc.call(this);}
function IB(){Bc.call(this);}
function BE(){X.call(this);}
function DM(a){var b=new BE();Pt(b,a);return b;}
function Pt(a,b){Cb(a);a.bc=!b?YE:YF;}
function O2(a){return !a.bc.ds?B(103):B(104);}
function BI(){X.call(this);}
function Sd(a){var b,c,d,e;b=Ny(B(44));c=1;d=Da(a.bc);while(CT(d)){e=CM(d);if(c)c=0;else F(b,B(45));if(e instanceof BD)e=IL(e);F(b,Lx(e));}F(b,B(35));return K(b);}
function Ln(){D.call(this);}
function V(b,c){var d,e,f,g,h,i,j,k;a:{switch(b){case 0:c=c.data;d=C9();e=new L;N(e);F(e,B(105));F(e,c[0]);F(e,B(106));Ct(d,K(e));break a;case 1:c=c.data;e=C9();d=new L;N(d);F(d,B(107));F(d,BH(c[0],B(66)).data[0]);F(d,B(106));Ct(e,K(d));break a;case 2:c=c.data;e=C9();d=new L;N(d);F(d,B(107));c=BH(c[0],B(66)).data;f=c[0];g=Ny(f);F(g,B(108));b=0;if(c.length>1){h=1;c=BH(c[1],B(68)).data;i=c.length;j=0;while(j<i){k=c[j];if(h)h=0;else{b=b+1|0;F(g,k);F(g,B(68));}j=j+1|0;}Ne(g,g.l-1|0,g.l,B(48));}F(g,B(33));F(g,B(109));F(g,
f);F(g,B(110));F(Bf(g,b),B(111));F(d,K(g));F(d,B(112));Ct(e,K(d));break a;case 3:c=c.data;e=C9();d=new L;N(d);F(d,B(113));F(d,BH(c[0],B(66)).data[0]);Ct(e,K(d));break a;case 4:c=c.data;e=C9();d=new L;N(d);F(d,B(105));F(d,BH(c[0],B(66)).data[0]);F(d,B(112));Ct(e,K(d));break a;case 5:break;case 6:c=c.data;DO(C2(),B(114));if(!c.length){Fd(C2());break a;}e=C2();d=new L;N(d);F(d,B(115));F(d,c[0]);Ct(e,K(d));break a;default:break a;}c=c.data;e=C9();d=new L;N(d);F(d,B(116));F(d,c[0]);Ct(e,K(d));}}
function Nq(){X.call(this);this.fm=null;}
function W4(a){var b=new Nq();Tc(b,a);return b;}
function Tc(a,b){Cb(a);a.fm=b;}
function JU(a){var b,c,d,e,f;b=a.fm;b.cb=XV;if(!(b instanceof Bk)&&!(b instanceof By)&&!(b instanceof BE)&&!(b instanceof BP)&&!(b instanceof BI))b=b.x();if(b instanceof Bk)return Mc(NM(b.x()));if(b instanceof By)return Bs(K(Mv(Ny(b.x()))));if(!(b instanceof BI))return b;c=MF(b.x());if(S_(c,Eb))HT(c,0,c.A);else{b=UA(c);HT(b,0,b.A);G2(c);KM(c,b);}b=new BI;d=E(X,0);Cb(b);e=new GX;f=new GF;f.eD=d;Lk(e,f);b.bc=e;b.bc=c;return b;}
function Ki(){D.call(this);}
function W8(){var a=new Ki();Oq(a);return a;}
function Oq(a){return;}
function Mh(a,b){if(b==32)return Io(a)*4.294967295E9+(-2.147483648E9)|0;return Io(a)*Long_toNumber(Long_shl(Long_fromInt(1),Bq(32,b)))|0;}
function LH(a){return Mh(a,32);}
function Io(a){return Math.random();}
function K1(){X.call(this);}
function Wn(){var a=new K1();Vz(a);return a;}
function Vz(a){Cb(a);}
function M0(a){var b;b=$rt_str(Module.ccall('pop','string',null,null));if(G(b,0)==84)return Bs(Dg(b,1));if(G(b,0)==78)return Mc(Rz(Dg(b,1)));if(G(b,0)!=66)return U();return DM(G(b,1)!=49?0:1);}
function EC(){D.call(this);this.ds=0;}
var YF=null;var YE=null;var YG=null;function Qu(a){var b=new EC();K2(b,a);return b;}
function K2(a,b){a.ds=b;}
function T1(a){return a.ds;}
function Pk(a){return !a.ds?B(117):B(118);}
function KQ(){YF=Qu(1);YE=Qu(0);YG=C($rt_booleancls());}
function Fm(){B1.call(this);}
var YH=0.0;var YI=null;function Li(){YH=NaN;YI=C($rt_doublecls());}
function GG(){var a=this;D.call(a);a.el=0;a.eT=0;a.fR=null;}
function S8(a,b,c){var d=new GG();SR(d,a,b,c);return d;}
function SR(a,b,c,d){a.el=b;a.eT=c;a.fR=d;}
function NA(){Bp.call(this);this.fk=null;}
function NH(a){var b=new NA();V9(b,a);return b;}
function V9(a,b){C5(a);a.fk=b;}
function Rl(a){var b;b=a.fk;if(!(b instanceof Bk)&&!(b instanceof By)&&!(b instanceof BE)&&!(b instanceof BP))b=b.bc;if(b instanceof Bk)Hp(YJ,1,b.x());else if(b instanceof By)G_(YJ,1,b.bc);else if(!(b instanceof BE))I1(1);else Jn(YJ,1,b.x().fH());}
function FZ(){Bp.call(this);this.by=null;}
var YJ=null;function Oc(a){var b,c;b=0;while(b<a.by.data.length){if(a.by.data[b] instanceof Bk){c=KL(a.by.data[b].bc)<<24>>24;if(c!=1)I1(c);else{b=b+1|0;if(a.by.data[b] instanceof Bk)Hp(YJ,c,a.by.data[b].bc);else if(a.by.data[b] instanceof By)G_(YJ,c,a.by.data[b].x());else if(!(a.by.data[b] instanceof BE))I1(c);else Jn(YJ,c,a.by.data[b].x().fH());}}b=b+1|0;}}
function MM(){YJ=new G9;}
function G3(){var a=this;Bp.call(a);a.bk=null;a.e3=null;a.ep=0;a.fd=0;a.eh=0;a.eK=null;a.ge=0;a.gz=0;}
function YK(a,b){var c=new G3();J2(c,a,b);return c;}
function J2(a,b,c){C5(a);a.ep=0;a.fd=0;a.eh=0;a.eK=null;a.ge=0;a.gz=0;a.bk=b;a.e3=c;if(!D$(CE(a.P),b))Ep(CE(a.P),b,null);}
function KF(a){var b,c,d;if(!Ch(a.bk,B(40))&&a.ep&&FD(CE(a.P),a.bk)!==null){b=E(Q,1);b.data[0]=a.bk;V(4,b);}if(!a.ep){c=CE(a.P);d=new L;N(d);F(d,a.bk);F(d,!a.eh?B(48):a.P.bY);if(FD(c,K(d))===null){b=E(Q,1);b.data[0]=a.bk;V(5,b);}}}
function OO(a){var b,c,d,e;if(a.eK!==null){b=a.eK.r().h3(B(66)).data;a.P.bY=b[0];if(a.ge&&!Ch(a.bk,B(40))){c=new L;N(c);F(c,B(40));F(c,b[1]);F(c,B(69));F(c,a.bk);a.bk=K(c);}}if(Ch(a.bk,B(40)))a.bk=HS(a.bk,B(70),B(48));if(a.fd)KF(a);c=a.e3;if(!(c instanceof Bk)&&!(c instanceof By)&&!(c instanceof BE)&&!(c instanceof BP)&&!(c instanceof BD)&&!(c instanceof BI))c=c.x();if(c instanceof BD)c.x();d=CE(a.P);e=new L;N(e);F(e,a.bk);F(e,!a.eh?B(48):a.P.bY);Ep(d,K(e),c);}
function I0(){var a=this;D.call(a);a.b=null;a.bf=0;a.d4=null;a.fb=0;a.bA=0;a.bO=0;a.N=0;a.dD=null;}
function FA(a,b){var c,d,e,f,g,h,i,j;c=new F6;c.b7=(-1);c.cl=(-1);c.hc=a;c.ej=a.dD;c.bu=b;c.b7=0;c.cl=J(c.bu);d=new HU;e=c.b7;f=c.cl;g=a.bA;h=Mr(a);i=KN(a);d.bT=(-1);j=g+1|0;d.fE=j;d.bm=$rt_createIntArray(j*2|0);d.cX=$rt_createIntArray(i);E2(d.cX,(-1));if(h>0)d.eH=$rt_createIntArray(h);E2(d.bm,(-1));FP(d,b,e,f);c.J=d;return c;}
function Ko(a,b,c){var d,e,f,g,h,i;d=Cr();e=FA(a,b);f=0;g=0;if(!J(b)){h=E(Q,1);h.data[0]=B(48);return h;}while(II(e)){i=f+1|0;if(i>=c&&c>0)break;BU(d,BR(b,g,Ja(e)));g=Il(e);f=i;}a:{BU(d,BR(b,g,J(b)));f=f+1|0;if(!c)while(true){f=f+(-1)|0;if(f<0)break;if(J(BB(d,f)))break a;H8(d,f);}}if(f<0)f=0;return L2(d,E(Q,f));}
function Kn(a,b){return Ko(a,b,0);}
function Fi(a){return a.b.W;}
function Jo(a,b,c,d){var e,f,g,h,i;e=Cr();f=a.bf;g=0;if(c!=a.bf)a.bf=c;a:{switch(b){case -1073741784:h=new Ji;c=a.N+1|0;a.N=c;Dd(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Ik;c=a.N+1|0;a.N=c;Dd(h,c);break a;case -33554392:h=new Gl;c=a.N+1|0;a.N=c;Dd(h,c);break a;default:a.bA=a.bA+1|0;if(d!==null)h=WM(a.bA);else{h=new CW;Dd(h,0);g=1;}if(a.bA<=(-1))break a;if(a.bA>=10)break a;a.d4.data[a.bA]=h;break a;}h=new Jf;Dd(h,(-1));}while(true){if(CO(a.b)&&a.b.e==(-536870788))
{d=T6(Bo(a,2),Bo(a,64));while(!B3(a.b)&&CO(a.b)&&!(a.b.e&&a.b.e!=(-536870788)&&a.b.e!=(-536870871))){BA(d,P(a.b));if(a.b.H!=(-536870788))continue;P(a.b);}i=FU(a,d);i.D(h);}else if(a.b.H==(-536870788)){i=Dx(h);P(a.b);}else{i=HN(a,h);if(a.b.H==(-536870788))P(a.b);}if(i!==null)BU(e,i);if(B3(a.b))break;if(a.b.H==(-536870871))break;}if(a.b.dl==(-536870788))BU(e,Dx(h));if(a.bf!=f&&!g){a.bf=f;K0(a.b,a.bf);}switch(b){case -1073741784:break;case -536870872:d=new Gf;CY(d,e,h);return d;case -268435416:d=new Ir;CY(d,e,
h);return d;case -134217688:d=new I3;CY(d,e,h);return d;case -67108824:d=new GO;CY(d,e,h);return d;case -33554392:d=new Cf;CY(d,e,h);return d;default:switch(e.A){case 0:break;case 1:return WB(BB(e,0),h);default:return Xo(e,h);}return Dx(h);}d=new EB;CY(d,e,h);return d;}
function LG(a){var b,c,d,e,f,g;b=$rt_createIntArray(4);c=(-1);d=(-1);if(!B3(a.b)&&CO(a.b)){e=b.data;c=P(a.b);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=$rt_createCharArray(3);b=e.data;b[0]=c&65535;f=a.b.H;c=f-4449|0;if(c>=0&&c<21){b[1]=f&65535;P(a.b);f=a.b.H;d=f-4519|0;if(d>=0&&d<28){b[2]=f&65535;P(a.b);return TJ(e,3);}return TJ(e,2);}if(!Bo(a,2))return LF(b[0]);if(Bo(a,64))return Rh(b[0]);return QY(b[0]);}e=b.data;c=1;while(c<4&&!B3(a.b)&&CO(a.b)){f=c+1|0;e[c]=P(a.b);c=f;}if(c==1){f=e[0];if(!(YL.hx(f)==YM?0:1))return Je(a,
e[0]);}if(!Bo(a,2))return Xs(b,c);if(Bo(a,64)){g=new I_;G0(g,b,c);return g;}g=new GW;G0(g,b,c);return g;}
function HN(a,b){var c,d,e,f;if(CO(a.b)&&!E6(a.b)&&FE(a.b.e)){if(Bo(a,128)){c=LG(a);if(!B3(a.b)&&!(a.b.H==(-536870871)&&!(b instanceof CW))&&a.b.H!=(-536870788)&&!CO(a.b))c=FM(a,b,c);}else if(!G7(a.b)&&!HY(a.b)){d=new E4;N(d);while(!B3(a.b)&&CO(a.b)&&!G7(a.b)&&!HY(a.b)&&!(!(!E6(a.b)&&!a.b.e)&&!(!E6(a.b)&&FE(a.b.e))&&a.b.e!=(-536870871)&&(a.b.e&(-2147418113))!=(-2147483608)&&a.b.e!=(-536870788)&&a.b.e!=(-536870876))){e=P(a.b);if(!FF(e))Be(d,e&65535);else C1(d,Dh(e));}if(!Bo(a,2))c=Xf(d);else if(Bo(a,64))c=Xr(d);else
{c=new GC;Ca(c);c.cw=K(d);c.O=FR(d);}}else c=FM(a,b,I$(a,b));}else if(a.b.H!=(-536870871))c=FM(a,b,I$(a,b));else{if(b instanceof CW)I(Bm(B(48),a.b.W,a.b.bG));c=Dx(b);}if(!B3(a.b)&&!(a.b.H==(-536870871)&&!(b instanceof CW))&&a.b.H!=(-536870788)){f=HN(a,b);if(c instanceof BT&&!(c instanceof CV)&&!(c instanceof BM)&&!(c instanceof CD)){b=c;if(!f.S(b.s)){c=new IE;CH(c,b.s,b.c,b.cO);c.s.D(c);}}if((f.cT()&65535)!=43)c.D(f);else c.D(f.s);}else{if(c===null)return null;c.D(b);}if((c.cT()&65535)!=43)return c;return c.s;}
function FM(a,b,c){var d,e,f,g;d=a.b.H;if(c!==null&&!(c instanceof Bl)){switch(d){case -2147483606:P(a.b);e=new JF;B0(e,c,b,d);c.D(YN);return e;case -2147483605:P(a.b);e=new Ih;B0(e,c,b,(-2147483606));c.D(YN);return e;case -2147483585:P(a.b);e=new HW;B0(e,c,b,(-536870849));c.D(YN);return e;case -2147483525:e=new Gy;f=C6(a.b);d=a.bO+1|0;a.bO=d;EM(e,f,c,b,(-536870849),d);c.D(YN);return e;case -1073741782:case -1073741781:P(a.b);f=new Jc;B0(f,c,b,d);c.D(f);return f;case -1073741761:P(a.b);f=new IJ;B0(f,c,b,(-536870849));c.D(b);return f;case -1073741701:f
=new HH;e=C6(a.b);g=a.bO+1|0;a.bO=g;EM(f,e,c,b,(-536870849),g);c.D(f);return f;case -536870870:case -536870869:P(a.b);if(c.cT()!=(-2147483602)){f=new BM;B0(f,c,b,d);}else if(Bo(a,32)){f=new Jd;B0(f,c,b,d);}else{f=new Hd;e=H3(a.bf);B0(f,c,b,d);f.ei=e;}c.D(f);return f;case -536870849:P(a.b);f=new Di;B0(f,c,b,(-536870849));c.D(b);return f;case -536870789:f=new C7;e=C6(a.b);g=a.bO+1|0;a.bO=g;EM(f,e,c,b,(-536870849),g);c.D(f);return f;default:}return c;}e=null;if(c!==null)e=c;switch(d){case -2147483606:case -2147483605:P(a.b);f
=new JG;CH(f,e,b,d);e.c=f;return f;case -2147483585:P(a.b);c=new IA;CH(c,e,b,(-2147483585));return c;case -2147483525:c=new HM;Jy(c,C6(a.b),e,b,(-2147483525));return c;case -1073741782:case -1073741781:P(a.b);f=new IG;CH(f,e,b,d);e.c=f;return f;case -1073741761:P(a.b);c=new G1;CH(c,e,b,(-1073741761));return c;case -1073741701:c=new I4;Jy(c,C6(a.b),e,b,(-1073741701));return c;case -536870870:case -536870869:P(a.b);f=WG(e,b,d);e.c=f;return f;case -536870849:P(a.b);c=new CD;CH(c,e,b,(-536870849));return c;case -536870789:return WQ(C6(a.b),
e,b,(-536870789));default:}return c;}
function I$(a,b){var c,d,e,f,g,h,i;c=null;d=b instanceof CW;while(true){a:{e=ED(a.b);if((e&(-2147418113))==(-2147483608)){P(a.b);f=(e&16711680)>>16;e=e&(-16711681);if(e==(-16777176))a.bf=f;else{if(e!=(-1073741784))f=a.bf;c=Jo(a,e,f,b);if(ED(a.b)!=(-536870871))I(Bm(B(48),Cd(a.b),Dv(a.b)));P(a.b);}}else{b:{c:{switch(e){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:g=(e&2147483647)-48|0;if(a.bA<g)I(Bm(B(48),
Cd(a.b),Dv(a.b)));P(a.b);a.N=a.N+1|0;c=!Bo(a,2)?Wt(g,a.N):Bo(a,64)?W$(g,a.N):Xl(g,a.N);a.d4.data[g].d2=1;a.fb=1;break a;case -2147483583:break;case -2147483582:P(a.b);c=Tj(0);break a;case -2147483577:P(a.b);c=WR();break a;case -2147483558:P(a.b);c=new IZ;g=a.N+1|0;a.N=g;Mb(c,g);break a;case -2147483550:P(a.b);c=Tj(1);break a;case -2147483526:P(a.b);c=WY();break a;case -536870876:break c;case -536870866:P(a.b);if(Bo(a,32)){c=Xc();break a;}c=WL(H3(a.bf));break a;case -536870821:P(a.b);h=0;if(ED(a.b)==(-536870818))
{h=1;P(a.b);}c=Ks(a,h,b);if(ED(a.b)!=(-536870819))I(Bm(B(48),Cd(a.b),Dv(a.b)));HA(a.b,1);P(a.b);break a;case -536870818:P(a.b);a.N=a.N+1|0;if(!Bo(a,8)){c=TB();break a;}c=WZ(H3(a.bf));break a;case 0:i=Ib(a.b);if(i!==null)c=FU(a,i);else{if(B3(a.b)){c=Dx(b);break a;}c=LF(e&65535);}P(a.b);break a;default:break b;}P(a.b);c=TB();break a;}P(a.b);a.N=a.N+1|0;if(Bo(a,8)){if(Bo(a,1)){c=W_(a.N);break a;}c=Wo(a.N);break a;}if(Bo(a,1)){c=We(a.N);break a;}c=WN(a.N);break a;}if(e>=0&&!Dy(a.b)){c=Je(a,e);P(a.b);}else if(e==
(-536870788))c=Dx(b);else{if(e!=(-536870871))I(Bm(!Dy(a.b)?IX(e&65535):Ib(a.b).r(),Cd(a.b),Dv(a.b)));if(d)I(Bm(B(48),Cd(a.b),Dv(a.b)));c=Dx(b);}}}if(e!=(-16777176))break;}return c;}
function Ks(a,b,c){var d;d=FU(a,Du(a,b));d.D(c);return d;}
function Du(a,b){var c,d,e,f,g,h,i,j,$$je;c=T6(Bo(a,2),Bo(a,64));Cy(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(B3(a.b))break a;f=a.b.H==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.b.H){case -536870874:if(d>=0)BA(c,d);d=P(a.b);if(a.b.H!=(-536870874)){d=38;break d;}if(a.b.e==(-536870821)){P(a.b);e=1;d=(-1);break d;}P(a.b);if(g){c=Du(a,0);break d;}if(a.b.H==(-536870819))break d;IO(c,Du(a,0));break d;case -536870867:if(!g&&a.b.e!=(-536870819)&&a.b.e!=(-536870821)&&d>=0){P(a.b);h=a.b.H;if(Dy(a.b))break c;if
(h<0&&a.b.e!=(-536870819)&&a.b.e!=(-536870821)&&d>=0)break c;e:{try{if(FE(h))break e;h=h&65535;break e;}catch($$e){$$je=Cp($$e);if($$je instanceof BJ){break b;}else{throw $$e;}}}try{Bi(c,d,h);}catch($$e){$$je=Cp($$e);if($$je instanceof BJ){break b;}else{throw $$e;}}P(a.b);d=(-1);break d;}if(d>=0)BA(c,d);d=45;P(a.b);break d;case -536870821:if(d>=0){BA(c,d);d=(-1);}P(a.b);i=0;if(a.b.H==(-536870818)){P(a.b);i=1;}if(!e)JQ(c,Du(a,i));else IO(c,Du(a,i));e=0;P(a.b);break d;case -536870819:if(d>=0)BA(c,d);d=93;P(a.b);break d;case -536870818:if
(d>=0)BA(c,d);d=94;P(a.b);break d;case 0:if(d>=0)BA(c,d);j=a.b.b8;if(j===null)d=0;else{NK(c,j);d=(-1);}P(a.b);break d;default:}if(d>=0)BA(c,d);d=P(a.b);}g=0;}I(Bm(B(48),Fi(a),a.b.bG));}I(Bm(B(48),Fi(a),a.b.bG));}if(!f){if(d>=0)BA(c,d);return c;}I(Bm(B(48),Fi(a),a.b.bG-1|0));}
function Je(a,b){var c,d,e;c=FF(b);if(Bo(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return QY(b&65535);}if(Bo(a,64)&&b>128){if(c){d=new F9;Ca(d);d.O=2;d.eE=CS(Dl(b));return d;}if(HG(b))return Po(b&65535);if(!F8(b))return Rh(b&65535);return US(b&65535);}}if(!c){if(HG(b))return Po(b&65535);if(!F8(b))return LF(b&65535);return US(b&65535);}d=new Cm;Ca(d);d.O=2;d.b0=b;e=Dh(b).data;d.c3=e[0];d.cS=e[1];return d;}
function FU(a,b){var c,d,e;if(!JX(b)){if(!b.C){if(b.cN())return Uc(b);return Tm(b);}if(!b.cN())return Vw(b);c=new EP;Hb(c,b);return c;}c=KB(b);d=new Gk;Bh(d);d.em=c;d.eU=c.E;if(!b.C){if(b.cN())return KV(Uc(Ec(b)),d);return KV(Tm(Ec(b)),d);}if(!b.cN())return KV(Vw(Ec(b)),d);c=new Iz;e=new EP;Hb(e,Ec(b));Nl(c,e,d);return c;}
function H9(b){var c,d;if(b===null){b=new CC;Cg(b,B(119));I(b);}YO=1;c=new I0;c.d4=E(BL,10);c.bA=(-1);c.bO=(-1);c.N=(-1);d=new Dr;d.bv=1;d.W=b;d.p=$rt_createCharArray(J(b)+2|0);CB(DQ(b),0,d.p,0,J(b));d.p.data[d.p.data.length-1|0]=0;d.p.data[d.p.data.length-2|0]=0;d.eX=d.p.data.length;d.co=0;CU(d);CU(d);c.b=d;c.bf=0;c.dD=Jo(c,(-1),c.bf,null);if(B3(c.b)){if(c.fb)c.dD.bJ();return c;}I(Bm(B(48),c.b.W,c.b.bG));}
function OM(a){return a.bA;}
function Mr(a){return a.bO+1|0;}
function KN(a){return a.N+1|0;}
function Ef(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Bo(a,b){return (a.bf&b)!=b?0:1;}
function De(){D.call(this);}
var YP=null;var YQ=null;var YR=null;var YS=null;var YT=null;function HT(b,c,d){var e,f,g;e=(c+d|0)/2|0;f=d-1|0;while(c<e){g=BB(b,c);Gv(b,c,BB(b,f));Gv(b,f,g);c=c+1|0;f=f+(-1)|0;}}
function J7(){YP=new If;YQ=new Ie;YR=new Ig;YS=new In;YT=new Im;}
function G9(){D.call(this);}
function Hp(a,b,c){var d;d=new L;N(d);c=Cj(d,c);F(c,B(48));c=K(c);Wb(b,$rt_ustr(c));}
function G_(a,b,c){SI(b,$rt_ustr(c));}
function Jn(a,b,c){U1(b,!!c);}
function SI(b,c){Module.ccall('runWithString',null,["number","string"],[b,c]);}
function Wb(b,c){Module.ccall('runWithNumber',null,["number","string"],[b,c]);}
function U1(b,c){Module.ccall('runWithBool',null,["number","boolean"],[b,c]);}
function I1(b){Module.ccall('run',null,["number"],[b]);}
function Dm(){Bc.call(this);}
function Fy(){}
function F6(){var a=this;D.call(a);a.hc=null;a.ej=null;a.bu=null;a.J=null;a.b7=0;a.cl=0;a.dp=0;a.dd=null;a.d7=null;a.bx=null;}
function L9(a,b,c){a.d7=KS(a,c);IK(b,BR(a.bu,a.dp,Ja(a)));F(b,a.d7);a.dp=Il(a);return a;}
function KS(a,b){var c,d,e,f,g,h,i,j,k,l,$$je;if(a.dd!==null&&R(a.dd,b)){if(a.bx===null)return a.d7;c=new L;N(c);d=0;while(d<a.bx.A){Cj(c,BB(a.bx,d));d=d+1|0;}return K(c);}a.dd=b;e=DQ(b);f=new L;N(f);a.bx=null;g=0;h=0;i=0;a:{b:while(true){j=e.data;d=j.length;if(g>=d){if(a.bx!==null&&h!=f.l)BU(a.bx,HR(f,h,f.l));return K(f);}if(j[g]==92&&!i){i=1;g=g+1|0;}c:{if(i){if(g>=d)break b;Be(f,j[g]);i=0;}else if(j[g]!=36)Be(f,j[g]);else{if(a.bx===null)a.bx=Cr();d:{try{b=new Q;g=g+1|0;JD(b,e,g,1);k=H$(b);if(h==CI(f))break d;BU(a.bx,
HR(f,h,CI(f)));h=CI(f);break d;}catch($$e){$$je=Cp($$e);if($$je instanceof BJ){break a;}else{throw $$e;}}}try{BU(a.bx,Wf(a,k));l=Gu(a,k);h=h+J(l)|0;BF(f,l);break c;}catch($$e){$$je=Cp($$e);if($$je instanceof BJ){break a;}else{throw $$e;}}}}g=g+1|0;}b=new Bn;S(b);I(b);}b=new Bx;Bd(b,B(48));I(b);}
function LU(a){a.b7=0;a.cl=J(a.bu);FP(a.J,a.bu,a.b7,a.cl);a.dp=0;a.dd=null;a.J.bT=(-1);return a;}
function Mg(a,b){return IK(b,BR(a.bu,a.dp,J(a.bu)));}
function M9(a,b){var c;c=new E4;N(c);LU(a);while(II(a)){L9(a,c,b);}return K(Mg(a,c));}
function Gu(a,b){return Kx(a.J,b);}
function Gg(a,b){var c,d;c=J(a.bu);if(b>=0&&b<=c){H2(a.J);a.J.b6=1;H_(a.J,b);b=a.ej.ba(b,a.bu,a.J);if(b==(-1))a.J.bo=1;if(b>=0&&a.J.c5){Ga(a.J);return 1;}a.J.bq=(-1);return 0;}d=new Bn;Bd(d,GQ(b));I(d);}
function II(a){var b,c;b=J(a.bu);if(!Kq(a))b=a.cl;if(a.J.bq>=0&&a.J.b6==1){a.J.bq=EI(a.J);if(EI(a.J)==Lb(a.J)){c=a.J;c.bq=c.bq+1|0;}return a.J.bq<=b&&Gg(a,a.J.bq)?1:0;}return Gg(a,a.b7);}
function NG(a,b){return Eh(a.J,b);}
function Kc(a,b){return FS(a.J,b);}
function LW(a){var b,c,d,e;b=a.b7;H2(a.J);a.J.b6=2;H_(a.J,b);c=a.ej;d=a.J;if(c.a(b,a.bu,d)<0)e=0;else{Ga(d);e=1;}return e;}
function Ja(a){return NG(a,0);}
function Il(a){return Kc(a,0);}
function Kq(a){return a.J.cA;}
function W(){var a=this;D.call(a);a.c=null;a.Y=0;a.d8=null;a.cO=0;}
var YO=0;function YU(){var a=new W();Bh(a);return a;}
function YV(a){var b=new W();FT(b,a);return b;}
function Bh(a){var b,c;b=new El;c=YO;YO=c+1|0;Fl(b,c);a.d8=FI(b);}
function FT(a,b){var c,d;c=new El;d=YO;YO=d+1|0;Fl(c,d);a.d8=FI(c);a.c=b;}
function Ei(a,b,c,d){var e;e=d.n;while(true){if(b>e)return (-1);if(a.a(b,c,d)>=0)break;b=b+1|0;}return b;}
function Er(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.a(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function Ru(a,b){a.cO=b;}
function QB(a){return a.cO;}
function J6(a){var b;b=new L;N(b);F(b,B(120));F(b,a.d8);F(b,B(66));F(b,a.j());F(b,B(121));return K(b);}
function RL(a){return J6(a);}
function SC(a){return a.c;}
function TP(a,b){a.c=b;}
function TO(a,b){return 1;}
function U5(a){return null;}
function EK(a){var b;a.Y=1;if(a.c!==null){if(!a.c.Y){b=a.c.b2();if(b!==null){a.c.Y=1;a.c=b;}a.c.bJ();}else if(a.c instanceof DR&&a.c.bl.d2)a.c=a.c.c;}}
function Nv(){YO=1;}
function In(){D.call(this);}
function Im(){D.call(this);}
function BL(){var a=this;W.call(a);a.d2=0;a.bw=0;}
var YN=null;function WM(a){var b=new BL();Dd(b,a);return b;}
function Dd(a,b){Bh(a);a.bw=b;}
function PE(a,b,c,d){var e,f;e=Eg(d,a.bw);E0(d,a.bw,b);f=a.c.a(b,c,d);if(f<0)E0(d,a.bw,e);return f;}
function Op(a){return a.bw;}
function Up(a){return B(122);}
function Qi(a,b){return 0;}
function L5(){var b;b=new G8;Bh(b);YN=b;}
function Dr(){var a=this;D.call(a);a.p=null;a.co=0;a.bv=0;a.fQ=0;a.dl=0;a.H=0;a.e=0;a.eX=0;a.b8=null;a.bW=null;a.i=0;a.c0=0;a.bG=0;a.cZ=0;a.W=null;}
var YW=null;var YL=null;var YM=0;function ED(a){return a.H;}
function HA(a,b){if(b>0&&b<3)a.bv=b;if(b==1){a.e=a.H;a.bW=a.b8;a.i=a.cZ;a.cZ=a.bG;CU(a);}}
function K0(a,b){a.co=b;a.e=a.H;a.bW=a.b8;a.i=a.bG+1|0;a.cZ=a.bG;CU(a);}
function Ib(a){return a.b8;}
function Dy(a){return a.b8===null?0:1;}
function E6(a){return a.bW===null?0:1;}
function P(a){CU(a);return a.dl;}
function C6(a){var b;b=a.b8;CU(a);return b;}
function Pw(a){return a.e;}
function SU(a){return a.dl;}
function CU(a){var b,c,d,e,f,$$je;a.dl=a.H;a.H=a.e;a.b8=a.bW;a.bG=a.cZ;a.cZ=a.i;while(true){b=0;a.e=a.i>=a.p.data.length?0:Fh(a);a.bW=null;if(a.bv==4){if(a.e!=92)return;a.e=a.i>=a.p.data.length?0:a.p.data[Bj(a)];switch(a.e){case 69:break;default:a.e=92;a.i=a.c0;return;}a.bv=a.fQ;a.e=a.i>(a.p.data.length-2|0)?0:Fh(a);}a:{if(a.e!=92){if(a.bv==1)switch(a.e){case 36:a.e=(-536870876);break a;case 40:if(a.p.data[a.i]!=63){a.e=(-2147483608);break a;}Bj(a);c=a.p.data[a.i];d=0;while(true){b:{if(d){d=0;switch(c){case 33:break;case 61:a.e
=(-134217688);Bj(a);break b;default:I(Bm(B(48),Cd(a),a.i));}a.e=(-67108824);Bj(a);}else{switch(c){case 33:break;case 60:Bj(a);c=a.p.data[a.i];d=1;break b;case 61:a.e=(-536870872);Bj(a);break b;case 62:a.e=(-33554392);Bj(a);break b;default:a.e=Nw(a);if(a.e<256){a.co=a.e;a.e=a.e<<16;a.e=(-1073741784)|a.e;break b;}a.e=a.e&255;a.co=a.e;a.e=a.e<<16;a.e=(-16777176)|a.e;break b;}a.e=(-268435416);Bj(a);}}if(!d)break;}break a;case 41:a.e=(-536870871);break a;case 42:case 43:case 63:switch(a.i>=a.p.data.length?42:a.p.data[a.i])
{case 43:a.e=a.e|(-2147483648);Bj(a);break a;case 63:a.e=a.e|(-1073741824);Bj(a);break a;default:}a.e=a.e|(-536870912);break a;case 46:a.e=(-536870866);break a;case 91:a.e=(-536870821);HA(a,2);break a;case 93:if(a.bv!=2)break a;a.e=(-536870819);break a;case 94:a.e=(-536870818);break a;case 123:a.bW=MI(a,a.e);break a;case 124:a.e=(-536870788);break a;default:}else if(a.bv==2)switch(a.e){case 38:a.e=(-536870874);break a;case 45:a.e=(-536870867);break a;case 91:a.e=(-536870821);break a;case 93:a.e=(-536870819);break a;case 94:a.e
=(-536870818);break a;default:}}else{c=a.i>=(a.p.data.length-2|0)?(-1):Fh(a);c:{a.e=c;switch(a.e){case -1:I(Bm(B(48),Cd(a),a.i));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.e
=Kz(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.bv!=1)break a;a.e=(-2147483648)|a.e;break a;case 65:a.e=(-2147483583);break a;case 66:a.e=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:I(Bm(B(48),Cd(a),a.i));case 68:case 83:case 87:case 100:case 115:case 119:a.bW=Jv(B$(a.p,
a.c0,1),0);a.e=0;break a;case 71:a.e=(-2147483577);break a;case 80:case 112:break c;case 81:a.fQ=a.bv;a.bv=4;b=1;break a;case 90:a.e=(-2147483558);break a;case 97:a.e=7;break a;case 98:a.e=(-2147483550);break a;case 99:if(a.i>=(a.p.data.length-2|0))I(Bm(B(48),Cd(a),a.i));a.e=a.p.data[Bj(a)]&31;break a;case 101:a.e=27;break a;case 102:a.e=12;break a;case 110:a.e=10;break a;case 114:a.e=13;break a;case 116:a.e=9;break a;case 117:a.e=Ii(a,4);break a;case 120:a.e=Ii(a,2);break a;case 122:a.e=(-2147483526);break a;default:}break a;}e
=Kj(a);f=0;if(a.e==80)f=1;try{a.bW=Jv(e,f);}catch($$e){$$je=Cp($$e);if($$je instanceof ER){I(Bm(B(48),Cd(a),a.i));}else{throw $$e;}}a.e=0;}}if(b)continue;else break;}}
function Kj(a){var b,c,d;b=new L;CF(b,10);if(a.i<(a.p.data.length-2|0)){if(a.p.data[a.i]!=123){b=new L;N(b);F(b,B(123));F(b,B$(a.p,Bj(a),1));return K(b);}Bj(a);c=0;a:{while(a.i<(a.p.data.length-2|0)){c=a.p.data[Bj(a)];if(c==125)break a;Be(b,c);}}if(c!=125)I(Bm(B(48),a.W,a.i));}if(!CI(b))I(Bm(B(48),a.W,a.i));d=K(b);if(J(d)==1){b=new L;N(b);F(b,B(123));F(b,d);return K(b);}b:{c:{if(J(d)>3){if(Ch(d,B(123)))break c;if(Ch(d,B(124)))break c;}break b;}d=Dg(d,2);}return d;}
function MI(a,b){var c,d,e,f,$$je;c=new L;CF(c,4);d=(-1);e=2147483647;a:{while(true){if(a.i>=a.p.data.length)break a;b=a.p.data[Bj(a)];if(b==125)break a;if(b==44&&d<0)try{d=Dt(BN(c),10);FG(c,0,CI(c));continue;}catch($$e){$$je=Cp($$e);if($$je instanceof Br){break;}else{throw $$e;}}Be(c,b&65535);}I(Bm(B(48),a.W,a.i));}if(b!=125)I(Bm(B(48),a.W,a.i));if(CI(c)>0)b:{try{e=Dt(BN(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Cp($$e);if($$je instanceof Br){}else{throw $$e;}}I(Bm(B(48),a.W,a.i));}else if(d<0)I(Bm(B(48),
a.W,a.i));if((d|e|(e-d|0))<0)I(Bm(B(48),a.W,a.i));f=a.i>=a.p.data.length?42:a.p.data[a.i];c:{switch(f){case 43:a.e=(-2147483525);Bj(a);break c;case 63:a.e=(-1073741701);Bj(a);break c;default:}a.e=(-536870789);}c=new Gt;c.bL=d;c.bE=e;return c;}
function Cd(a){return a.W;}
function B3(a){return !a.H&&!a.e&&a.i==a.eX&&!Dy(a)?1:0;}
function FE(b){return b<0?0:1;}
function CO(a){return !B3(a)&&!Dy(a)&&FE(a.H)?1:0;}
function G7(a){return a.H<=56319&&a.H>=55296?1:0;}
function HY(a){return a.H<=57343&&a.H>=56320?1:0;}
function F8(b){return b<=56319&&b>=55296?1:0;}
function HG(b){return b<=57343&&b>=56320?1:0;}
function Ii(a,b){var c,d,e,f,$$je;c=new L;CF(c,b);d=a.p.data.length-2|0;e=0;while(true){f=BZ(e,b);if(f>=0)break;if(a.i>=d)break;Be(c,a.p.data[Bj(a)]);e=e+1|0;}if(!f)a:{try{b=Dt(BN(c),16);}catch($$e){$$je=Cp($$e);if($$je instanceof Br){break a;}else{throw $$e;}}return b;}I(Bm(B(48),a.W,a.i));}
function Kz(a){var b,c,d,e,f;b=3;c=1;d=a.p.data.length-2|0;e=HC(a.p.data[a.i],8);switch(e){case -1:break;default:if(e>3)b=2;Bj(a);a:{while(true){if(c>=b)break a;if(a.i>=d)break a;f=HC(a.p.data[a.i],8);if(f<0)break;e=(e*8|0)+f|0;Bj(a);c=c+1|0;}}return e;}I(Bm(B(48),a.W,a.i));}
function Nw(a){var b,c;b=1;c=a.co;a:while(true){if(a.i>=a.p.data.length)I(Bm(B(48),a.W,a.i));b:{c:{switch(a.p.data[a.i]){case 41:Bj(a);return c|256;case 45:if(!b)I(Bm(B(48),a.W,a.i));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}Bj(a);}Bj(a);return c;}
function Bj(a){var b,c;a.c0=a.i;if(!(a.co&4))a.i=a.i+1|0;else{b=a.p.data.length-2|0;a.i=a.i+1|0;a:while(true){if(a.i<b&&I2(a.p.data[a.i])){a.i=a.i+1|0;continue;}if(a.i>=b)break;if(a.p.data[a.i]!=35)break;a.i=a.i+1|0;while(true){if(a.i>=b)continue a;c=a.p.data[a.i];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.i=a.i+1|0;}}}return a.c0;}
function Mm(b){return YW.mr(b);}
function Fh(a){var b,c,d;b=a.p.data[Bj(a)];if(Bv(b)){c=a.c0+1|0;if(c<a.p.data.length){d=a.p.data[c];if(BG(d)){Bj(a);return B2(b,d);}}}return b;}
function Dv(a){return a.bG;}
function MJ(){var a=this;Bx.call(a);a.fr=null;a.c8=null;a.cY=0;}
function Bm(a,b,c){var d=new MJ();O9(d,a,b,c);return d;}
function O9(a,b,c,d){S(a);a.cY=(-1);a.fr=b;a.c8=c;a.cY=d;}
function UY(a){var b,c,d,e,f,g,h,i;b=B(48);if(a.cY>=1){c=$rt_createCharArray(a.cY);d=c.data;e=0;f=d.length;if(e>f){b=new Bx;S(b);I(b);}while(e<f){g=e+1|0;d[e]=32;e=g;}b=F_(c);}h=new L;N(h);F(h,a.fr);if(a.c8!==null&&J(a.c8)){i=new L;N(i);i=Bf(i,a.cY);F(i,B(45));F(i,a.c8);F(i,B(45));F(i,b);b=K(i);}else b=B(48);F(h,b);return K(h);}
function HK(){}
function DD(){Do.call(this);}
function If(){DD.call(this);}
function Ie(){DA.call(this);}
function Ig(){CJ.call(this);}
function GF(){CJ.call(this);this.eD=null;}
function NV(a,b){return a.eD.data[b];}
function PD(a){return a.eD.data.length;}
function Ji(){BL.call(this);}
function OS(a,b,c,d){var e;e=a.bw;Ba(d,e,b-B5(d,e)|0);return a.c.a(b,c,d);}
function RH(a){return B(125);}
function R$(a,b){return 0;}
function Jf(){BL.call(this);}
function Rq(a,b,c,d){return b;}
function Vg(a){return B(126);}
function Ik(){BL.call(this);}
function Qw(a,b,c,d){if(B5(d,a.bw)!=b)b=(-1);return b;}
function TG(a){return B(127);}
function Gl(){BL.call(this);this.dQ=0;}
function O5(a,b,c,d){var e;e=a.bw;Ba(d,e,b-B5(d,e)|0);a.dQ=b;return b;}
function QF(a){return a.dQ;}
function SD(a){return B(128);}
function P8(a,b){return 0;}
function CW(){BL.call(this);}
function Ug(a,b,c,d){if(d.b6!=1&&b!=d.n)return (-1);MU(d);E0(d,0,b);return b;}
function QR(a){return B(129);}
function Bl(){W.call(this);this.O=0;}
function YX(){var a=new Bl();Ca(a);return a;}
function Ca(a){Bh(a);a.O=1;}
function VI(a,b,c,d){var e;if((b+a.T()|0)>d.n){d.bo=1;return (-1);}e=a.M(b,c);if(e<0)return (-1);return a.c.a(b+e|0,c,d);}
function S1(a){return a.O;}
function Vb(a,b){return 1;}
function L$(){Bl.call(this);}
function Dx(a){var b=new L$();OC(b,a);return b;}
function OC(a,b){FT(a,b);a.O=1;a.cO=1;a.O=0;}
function Su(a,b,c){return 0;}
function SW(a,b,c,d){var e,f,g;e=d.n;f=d.bb;while(true){g=BZ(b,e);if(g>0)return (-1);if(g<0&&BG(G(c,b))&&b>f&&Bv(G(c,b-1|0))){b=b+1|0;continue;}if(a.c.a(b,c,d)>=0)break;b=b+1|0;}return b;}
function Rf(a,b,c,d,e){var f,g;f=e.n;g=e.bb;while(true){if(c<b)return (-1);if(c<f&&BG(G(d,c))&&c>g&&Bv(G(d,c-1|0))){c=c+(-1)|0;continue;}if(a.c.a(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function Uq(a){return B(130);}
function OZ(a,b){return 0;}
function Bg(){var a=this;W.call(a);a.L=null;a.bl=null;a.G=0;}
function Xo(a,b){var c=new Bg();CY(c,a,b);return c;}
function CY(a,b,c){Bh(a);a.L=b;a.bl=c;a.G=c.bw;}
function TT(a,b,c,d){var e,f,g,h;if(a.L===null)return (-1);e=C4(d,a.G);B_(d,a.G,b);f=a.L.A;g=0;while(true){if(g>=f){B_(d,a.G,e);return (-1);}h=BB(a.L,g).a(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function P2(a,b){a.bl.c=b;}
function Vn(a){return B(131);}
function V7(a,b){var c;a:{if(a.L!==null){c=Da(a.L);while(true){if(!CT(c))break a;if(!CM(c).S(b))continue;else return 1;}}}return 0;}
function Q5(a,b){return Eg(b,a.G)>=0&&C4(b,a.G)==Eg(b,a.G)?0:1;}
function Q$(a){var b,c,d,e;a.Y=1;if(a.bl!==null&&!a.bl.Y)EK(a.bl);a:{if(a.L!==null){b=a.L.A;c=0;while(true){if(c>=b)break a;d=BB(a.L,c);e=d.b2();if(e===null)e=d;else{d.Y=1;H8(a.L,c);Nh(a.L,c,e);}if(!e.Y)e.bJ();c=c+1|0;}}}if(a.c!==null)EK(a);}
function EB(){Bg.call(this);}
function PL(a,b,c,d){var e,f,g,h;e=B5(d,a.G);Ba(d,a.G,b);f=a.L.A;g=0;while(true){if(g>=f){Ba(d,a.G,e);return (-1);}h=BB(a.L,g).a(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function NZ(a){return B(132);}
function RF(a,b){return !B5(b,a.G)?0:1;}
function Cf(){EB.call(this);}
function R5(a,b,c,d){var e,f,g;e=B5(d,a.G);Ba(d,a.G,b);f=a.L.A;g=0;while(g<f){if(BB(a.L,g).a(b,c,d)>=0)return a.c.a(a.bl.dQ,c,d);g=g+1|0;}Ba(d,a.G,e);return (-1);}
function Ra(a,b){a.c=b;}
function OW(a){return B(132);}
function Gf(){Cf.call(this);}
function PV(a,b,c,d){var e,f;e=a.L.A;f=0;while(f<e){if(BB(a.L,f).a(b,c,d)>=0)return a.c.a(b,c,d);f=f+1|0;}return (-1);}
function TX(a,b){return 0;}
function U3(a){return B(133);}
function Ir(){Cf.call(this);}
function Qa(a,b,c,d){var e,f;e=a.L.A;f=0;while(true){if(f>=e)return a.c.a(b,c,d);if(BB(a.L,f).a(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function Ta(a,b){return 0;}
function TI(a){return B(134);}
function I3(){Cf.call(this);}
function Q4(a,b,c,d){var e,f,g,h;e=a.L.A;f=d.cA?0:d.bb;a:{g=a.c.a(b,c,d);if(g>=0){Ba(d,a.G,b);h=0;while(true){if(h>=e)break a;if(BB(a.L,h).Z(f,b,c,d)>=0){Ba(d,a.G,(-1));return g;}h=h+1|0;}}}return (-1);}
function V4(a,b){return 0;}
function Pu(a){return B(135);}
function GO(){Cf.call(this);}
function Ok(a,b,c,d){var e,f;e=a.L.A;Ba(d,a.G,b);f=0;while(true){if(f>=e)return a.c.a(b,c,d);if(BB(a.L,f).Z(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function RU(a,b){return 0;}
function Qx(a){return B(136);}
function DR(){Bg.call(this);this.bd=null;}
function WB(a,b){var c=new DR();Lq(c,a,b);return c;}
function Lq(a,b,c){Bh(a);a.bd=b;a.bl=c;a.G=c.bw;}
function OI(a,b,c,d){var e,f;e=C4(d,a.G);B_(d,a.G,b);f=a.bd.a(b,c,d);if(f>=0)return f;B_(d,a.G,e);return (-1);}
function N6(a,b,c,d){var e;e=a.bd.ba(b,c,d);if(e>=0)B_(d,a.G,e);return e;}
function Sc(a,b,c,d,e){var f;f=a.bd.Z(b,c,d,e);if(f>=0)B_(e,a.G,f);return f;}
function V0(a,b){return a.bd.S(b);}
function P6(a){var b;b=new Gw;Lq(b,a.bd,a.bl);a.c=b;return b;}
function U8(a){var b;a.Y=1;if(a.bl!==null&&!a.bl.Y)EK(a.bl);if(a.bd!==null&&!a.bd.Y){b=a.bd.b2();if(b!==null){a.bd.Y=1;a.bd=b;}a.bd.bJ();}}
function Dw(){D.call(this);}
function M(){var a=this;Dw.call(a);a.E=0;a.R=0;a.B=null;a.cV=null;a.da=null;a.C=0;}
var YY=null;function YZ(){var a=new M();T(a);return a;}
function T(a){var b;b=new IW;b.m=$rt_createIntArray(64);a.B=b;}
function Qe(a){return null;}
function Pd(a){return a.B;}
function JX(a){return !a.R?(DT(a.B,0)>=2048?0:1):KZ(a.B,0)>=2048?0:1;}
function Ua(a){return a.C;}
function ST(a){return a;}
function KB(a){var b,c;if(a.da===null){b=a.bS();c=new ID;c.hD=a;c.fi=b;T(c);a.da=c;Cy(a.da,a.R);}return a.da;}
function Ec(a){var b,c;if(a.cV===null){b=a.bS();c=new IC;c.g8=a;c.fG=b;c.fV=a;T(c);a.cV=c;Cy(a.cV,a.E);a.cV.C=a.C;}return a.cV;}
function U0(a){return 0;}
function Cy(a,b){if(a.E^b){a.E=a.E?0:1;a.R=a.R?0:1;}if(!a.C)a.C=1;return a;}
function S2(a){return a.E;}
function D8(b,c){if(b.br()!==null&&c.br()!==null)return KO(b.br(),c.br());return 1;}
function Jv(b,c){return Lv(MP(YY,b),c);}
function Lr(){YY=new DG;}
function Lf(){var a=this;M.call(a);a.dH=0;a.e6=0;a.cg=0;a.eC=0;a.bC=0;a.cd=0;a.y=null;a.K=null;}
function BX(){var a=new Lf();VQ(a);return a;}
function T6(a,b){var c=new Lf();Rr(c,a,b);return c;}
function VQ(a){T(a);a.y=V6();}
function Rr(a,b,c){T(a);a.y=V6();a.dH=b;a.e6=c;}
function BA(a,b){a:{if(a.dH){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.bC){FW(a.y,Ef(b&65535));break a;}E$(a.y,Ef(b&65535));break a;}if(a.e6&&b>128){a.cg=1;b=CS(Dl(b));}}}if(!(!F8(b)&&!HG(b))){if(a.eC)FW(a.B,b-55296|0);else E$(a.B,b-55296|0);}if(a.bC)FW(a.y,b);else E$(a.y,b);if(!a.C&&FF(b))a.C=1;return a;}
function NK(a,b){var c,d,e;if(!a.C&&b.C)a.C=1;if(a.eC){if(!b.R)Dj(a.B,b.bS());else BV(a.B,b.bS());}else if(!b.R)Df(a.B,b.bS());else{Dk(a.B,b.bS());BV(a.B,b.bS());a.R=a.R?0:1;a.eC=1;}if(!a.cd&&b.br()!==null){if(a.bC){if(!b.E)Dj(a.y,b.br());else BV(a.y,b.br());}else if(!b.E)Df(a.y,b.br());else{Dk(a.y,b.br());BV(a.y,b.br());a.E=a.E?0:1;a.bC=1;}}else{c=a.E;if(a.K!==null){d=a.K;if(!c){e=new Hs;e.g$=a;e.f9=c;e.fO=d;e.fJ=b;T(e);a.K=e;}else{e=new Ht;e.hZ=a;e.gq=c;e.gf=d;e.f4=b;T(e);a.K=e;}}else{if(c&&!a.bC&&FK(a.y))
{d=new Ho;d.gD=a;d.gi=b;T(d);a.K=d;}else if(!c){d=new Hm;d.eq=a;d.dB=c;d.fC=b;T(d);a.K=d;}else{d=new Hn;d.dW=a;d.dK=c;d.fL=b;T(d);a.K=d;}a.cd=1;}}return a;}
function Bi(a,b,c){var d;if(b>c){d=new Bx;S(d);I(d);}a:{b:{if(!a.dH){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;BA(a,b);b=b+1|0;}}if(a.bC)Kd(a.y,b,c+1|0);else Ex(a.y,b,c+1|0);}return a;}
function JQ(a,b){var c,d,e;if(!a.C&&b.C)a.C=1;if(b.cg)a.cg=1;if(!(a.R^b.R)){if(!a.R)Df(a.B,b.B);else BV(a.B,b.B);}else if(a.R)Dj(a.B,b.B);else{Dk(a.B,b.B);BV(a.B,b.B);a.R=1;}if(!a.cd&&BQ(b)!==null){if(!(a.E^b.E)){if(!a.E)Df(a.y,BQ(b));else BV(a.y,BQ(b));}else if(a.E)Dj(a.y,BQ(b));else{Dk(a.y,BQ(b));BV(a.y,BQ(b));a.E=1;}}else{c=a.E;if(a.K!==null){d=a.K;if(!c){e=new Hh;e.gK=a;e.fw=c;e.fK=d;e.f2=b;T(e);a.K=e;}else{e=new HO;e.hh=a;e.f1=c;e.eY=d;e.e8=b;T(e);a.K=e;}}else{if(!a.bC&&FK(a.y)){if(!c){d=new Hq;d.h5=a;d.fT
=b;T(d);a.K=d;}else{d=new Hr;d.hm=a;d.fS=b;T(d);a.K=d;}}else if(!c){d=new Hu;d.fz=a;d.eS=b;d.gh=c;T(d);a.K=d;}else{d=new Hv;d.e0=a;d.e9=b;d.fg=c;T(d);a.K=d;}a.cd=1;}}}
function IO(a,b){var c,d,e;if(!a.C&&b.C)a.C=1;if(b.cg)a.cg=1;if(!(a.R^b.R)){if(!a.R)BV(a.B,b.B);else Df(a.B,b.B);}else if(!a.R)Dj(a.B,b.B);else{Dk(a.B,b.B);BV(a.B,b.B);a.R=0;}if(!a.cd&&BQ(b)!==null){if(!(a.E^b.E)){if(!a.E)BV(a.y,BQ(b));else Df(a.y,BQ(b));}else if(!a.E)Dj(a.y,BQ(b));else{Dk(a.y,BQ(b));BV(a.y,BQ(b));a.E=0;}}else{c=a.E;if(a.K!==null){d=a.K;if(!c){e=new Hj;e.g7=a;e.fB=c;e.fh=d;e.go=b;T(e);a.K=e;}else{e=new Hk;e.ht=a;e.fl=c;e.eV=d;e.fv=b;T(e);a.K=e;}}else{if(!a.bC&&FK(a.y)){if(!c){d=new Hf;d.hq=
a;d.fI=b;T(d);a.K=d;}else{d=new Hg;d.hW=a;d.fM=b;T(d);a.K=d;}}else if(!c){d=new Hl;d.gt=a;d.f6=b;d.e4=c;T(d);a.K=d;}else{d=new He;d.e2=a;d.fq=b;d.gs=c;T(d);a.K=d;}a.cd=1;}}}
function BS(a,b){if(a.K!==null)return a.E^a.K.g(b);return a.E^B8(a.y,b);}
function BQ(a){if(!a.cd)return a.y;return null;}
function SL(a){return a.B;}
function Ty(a){var b,c;if(a.K!==null)return a;b=BQ(a);c=new Hi;c.gI=a;c.di=b;T(c);return Cy(c,a.E);}
function O6(a){var b,c;b=new L;N(b);c=DT(a.y,0);while(c>=0){C1(b,Dh(c));Be(b,124);c=DT(a.y,c+1|0);}if(b.l>0)Iu(b,b.l-1|0);return K(b);}
function S3(a){return a.cg;}
function ER(){var a=this;Bc.call(a);a.hT=null;a.hH=null;}
function Ck(){W.call(this);this.s=null;}
function Y0(a,b,c){var d=new Ck();B0(d,a,b,c);return d;}
function B0(a,b,c,d){FT(a,c);a.s=b;a.cO=d;}
function VP(a){return a.s;}
function Se(a,b){return !a.s.S(b)&&!a.c.S(b)?0:1;}
function T8(a,b){return 1;}
function Oy(a){var b;a.Y=1;if(a.c!==null&&!a.c.Y){b=a.c.b2();if(b!==null){a.c.Y=1;a.c=b;}a.c.bJ();}if(a.s!==null){if(!a.s.Y){b=a.s.b2();if(b!==null){a.s.Y=1;a.s=b;}a.s.bJ();}else if(a.s instanceof DR&&a.s.bl.d2)a.s=a.s.c;}}
function BT(){Ck.call(this);this.I=null;}
function WG(a,b,c){var d=new BT();CH(d,a,b,c);return d;}
function CH(a,b,c,d){B0(a,b,c,d);a.I=b;}
function Om(a,b,c,d){var e,f;e=0;a:{while((b+a.I.T()|0)<=d.n){f=a.I.M(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.c.a(b,c,d);if(f>=0)break;b=b-a.I.T()|0;e=e+(-1)|0;}return f;}
function Q6(a){return B(137);}
function CV(){BT.call(this);this.bQ=null;}
function WQ(a,b,c,d){var e=new CV();Jy(e,a,b,c,d);return e;}
function Jy(a,b,c,d,e){CH(a,c,d,e);a.bQ=b;}
function PH(a,b,c,d){var e,f,g,h;e=a.bQ.bL;f=a.bQ.bE;g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.I.T()|0)>d.n)break a;h=a.I.M(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.c.a(b,c,d);if(h>=0)break;b=b-a.I.T()|0;g=g+(-1)|0;}return h;}if((b+a.I.T()|0)>d.n){d.bo=1;return (-1);}h=a.I.M(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Qh(a){return GI(a.bQ);}
function BM(){Ck.call(this);}
function OH(a,b,c,d){var e;if(!a.s.z(d))return a.c.a(b,c,d);e=a.s.a(b,c,d);if(e>=0)return e;return a.c.a(b,c,d);}
function UJ(a){return B(138);}
function CD(){BT.call(this);}
function Oa(a,b,c,d){var e;e=a.s.a(b,c,d);if(e<0)e=a.c.a(b,c,d);return e;}
function V8(a,b){a.c=b;a.s.D(b);}
function IE(){BT.call(this);}
function VA(a,b,c,d){while((b+a.I.T()|0)<=d.n&&a.I.M(b,c)>0){b=b+a.I.T()|0;}return a.c.a(b,c,d);}
function O3(a,b,c,d){var e,f,g;e=a.c.ba(b,c,d);if(e<0)return (-1);f=e-a.I.T()|0;while(f>=b&&a.I.M(f,c)>0){g=f-a.I.T()|0;e=f;f=g;}return e;}
function Gt(){var a=this;Dw.call(a);a.bL=0;a.bE=0;}
function TM(a){return a.bL;}
function TY(a){return a.bE;}
function GI(a){var b;b=new L;N(b);F(b,B(139));b=Bf(b,a.bL);F(b,B(68));F(b,a.bE==2147483647?B(48):FI(W0(a.bE)));F(b,B(140));return K(b);}
function G8(){W.call(this);}
function Vy(a,b,c,d){return b;}
function PT(a){return B(141);}
function P1(a,b){return 0;}
function IW(){var a=this;D.call(a);a.m=null;a.F=0;}
function V6(){var a=new IW();QU(a);return a;}
function QU(a){a.m=$rt_createIntArray(0);}
function E$(a,b){var c,d;c=b/32|0;if(b>=a.F){Ed(a,c+1|0);a.F=b+1|0;}d=a.m.data;d[c]=d[c]|1<<(b%32|0);}
function Ex(a,b,c){var d,e,f,g,h;if(b>c){d=new Bn;S(d);I(d);}e=b/32|0;f=c/32|0;if(c>a.F){Ed(a,f+1|0);a.F=c;}if(e==f){g=a.m.data;g[e]=g[e]|Ek(a,b)&D0(a,c);}else{g=a.m.data;g[e]=g[e]|Ek(a,b);h=e+1|0;while(h<f){a.m.data[h]=(-1);h=h+1|0;}g=a.m.data;g[f]=g[f]|D0(a,c);}}
function Ek(a,b){return (-1)<<(b%32|0);}
function D0(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0);}
function FW(a,b){var c,d,e,f;c=b/32|0;if(c<a.m.data.length){d=a.m.data;e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|(-2)>>>(32-f|0));if(b==(a.F-1|0))DK(a);}}
function Kd(a,b,c){var d,e,f,g,h;if(b>c){d=new Bn;S(d);I(d);}if(b>=a.F)return;c=Bq(a.F,c);e=b/32|0;f=c/32|0;if(e==f){g=a.m.data;g[e]=g[e]&(D0(a,b)|Ek(a,c));}else{g=a.m.data;g[e]=g[e]&D0(a,b);h=e+1|0;while(h<f){a.m.data[h]=0;h=h+1|0;}g=a.m.data;g[f]=g[f]&Ek(a,c);}DK(a);}
function B8(a,b){var c;c=b/32|0;return c<a.m.data.length&&a.m.data[c]&1<<(b%32|0)?1:0;}
function DT(a,b){var c,d,e;if(b>=a.F)return (-1);c=b/32|0;d=a.m.data[c]>>>(b%32|0);if(d)return D_(d)+b|0;d=(a.F+31|0)/32|0;e=c+1|0;while(e<d){if(a.m.data[e])return (e*32|0)+D_(a.m.data[e])|0;e=e+1|0;}return (-1);}
function KZ(a,b){var c,d,e;if(b>=a.F)return b;c=b/32|0;d=(a.m.data[c]^(-1))>>>(b%32|0);if(d)return D_(d)+b|0;d=(a.F+31|0)/32|0;e=c+1|0;while(e<d){if(a.m.data[e]!=(-1))return (e*32|0)+D_(a.m.data[e]^(-1))|0;e=e+1|0;}return a.F;}
function Ed(a,b){var c,d,e,f;if(a.m.data.length>=b)return;c=Co((b*3|0)/2|0,(a.m.data.length*2|0)+1|0);d=a.m.data;e=$rt_createIntArray(c);f=e.data;b=Bq(c,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.m=e;}
function DK(a){var b,c,d;b=(a.F+31|0)/32|0;a.F=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=CX(a.m.data[c]);if(d<32)break;c=c+(-1)|0;a.F=a.F-32|0;}a.F=a.F-d|0;}}
function KO(a,b){var c,d;c=Bq(a.m.data.length,b.m.data.length);d=0;while(d<c){if(a.m.data[d]&b.m.data[d])return 1;d=d+1|0;}return 0;}
function BV(a,b){var c,d,e;c=Bq(a.m.data.length,b.m.data.length);d=0;while(d<c){e=a.m.data;e[d]=e[d]&b.m.data[d];d=d+1|0;}while(c<a.m.data.length){a.m.data[c]=0;c=c+1|0;}a.F=Bq(a.F,b.F);DK(a);}
function Dj(a,b){var c,d,e;c=Bq(a.m.data.length,b.m.data.length);d=0;while(d<c){e=a.m.data;e[d]=e[d]&(b.m.data[d]^(-1));d=d+1|0;}DK(a);}
function Df(a,b){var c,d,e;a.F=Co(a.F,b.F);Ed(a,(a.F+31|0)/32|0);c=Bq(a.m.data.length,b.F);d=0;while(d<c){e=a.m.data;e[d]=e[d]|b.m.data[d];d=d+1|0;}}
function Dk(a,b){var c,d,e;a.F=Co(a.F,b.F);Ed(a,(a.F+31|0)/32|0);c=Bq(a.m.data.length,b.F);d=0;while(d<c){e=a.m.data;e[d]=e[d]^b.m.data[d];d=d+1|0;}DK(a);}
function FK(a){return a.F?0:1;}
function Gk(){var a=this;Bg.call(a);a.em=null;a.eU=0;}
function SX(a,b){a.c=b;}
function MX(a,b,c,d){var e,f,g,h,i;e=d.bb;f=d.n;g=b+1|0;h=BZ(g,f);if(h>0){d.bo=1;return (-1);}i=G(c,b);if(!a.em.g(i))return (-1);if(Bv(i)){if(h<0&&BG(G(c,g)))return (-1);}else if(BG(i)&&b>e&&Bv(G(c,b-1|0)))return (-1);return a.c.a(g,c,d);}
function Qc(a){var b;b=new L;N(b);F(b,B(142));F(b,!a.eU?B(19):B(143));F(b,a.em.r());return K(b);}
function Iz(){var a=this;Bg.call(a);a.dj=null;a.dc=null;}
function KV(a,b){var c=new Iz();Nl(c,a,b);return c;}
function Nl(a,b,c){Bh(a);a.dj=b;a.dc=c;}
function Pz(a,b,c,d){var e;e=a.dj.a(b,c,d);if(e<0)e=MX(a.dc,b,c,d);if(e>=0)return e;return (-1);}
function PJ(a,b){a.c=b;a.dc.c=b;a.dj.D(b);}
function QD(a){var b;b=new L;N(b);F(b,B(144));b=Cj(b,a.dj);F(b,B(145));return K(Cj(b,a.dc));}
function QG(a,b){return 1;}
function Qd(a,b){return 1;}
function Ce(){var a=this;Bg.call(a);a.bn=null;a.eO=0;}
function Vw(a){var b=new Ce();Hb(b,a);return b;}
function Hb(a,b){Bh(a);a.bn=b.c9();a.eO=b.E;}
function SE(a,b,c,d){var e,f,g;e=d.n;if(b<e){f=b+1|0;g=G(c,b);if(a.g(g)){b=a.c.a(f,c,d);if(b>0)return b;}if(f<e){b=f+1|0;f=G(c,f);if(DY(g,f)&&a.g(B2(g,f)))return a.c.a(b,c,d);}}return (-1);}
function UR(a){var b;b=new L;N(b);F(b,B(142));F(b,!a.eO?B(19):B(143));F(b,a.bn.r());return K(b);}
function Ti(a,b){return a.bn.g(b);}
function Pq(a,b){if(b instanceof Cm)return a.bn.g(b.b0);if(b instanceof Cv)return a.bn.g(b.bi);if(b instanceof Ce)return D8(a.bn,b.bn);if(!(b instanceof Cx))return 1;return D8(a.bn,b.bI);}
function Vr(a){return a.bn;}
function SN(a,b){a.c=b;}
function SP(a,b){return 1;}
function EP(){Ce.call(this);}
function Vc(a,b){return a.bn.g(CS(Dl(b)));}
function Vj(a){var b;b=new L;N(b);F(b,B(146));F(b,!a.eO?B(19):B(143));F(b,a.bn.r());return K(b);}
function K7(){var a=this;Bl.call(a);a.eA=null;a.fZ=0;}
function Uc(a){var b=new K7();Pf(b,a);return b;}
function Pf(a,b){Ca(a);a.eA=b.c9();a.fZ=b.E;}
function VB(a,b,c){return !a.eA.g(Cc(Ci(G(c,b))))?(-1):1;}
function Qk(a){var b;b=new L;N(b);F(b,B(146));F(b,!a.fZ?B(19):B(143));F(b,a.eA.r());return K(b);}
function Cx(){var a=this;Bl.call(a);a.bI=null;a.e_=0;}
function Tm(a){var b=new Cx();QI(b,a);return b;}
function QI(a,b){Ca(a);a.bI=b.c9();a.e_=b.E;}
function F2(a,b,c){return !a.bI.g(G(c,b))?(-1):1;}
function VJ(a){var b;b=new L;N(b);F(b,B(142));F(b,!a.e_?B(19):B(143));F(b,a.bI.r());return K(b);}
function P3(a,b){if(b instanceof Cv)return a.bI.g(b.bi);if(b instanceof Cx)return D8(a.bI,b.bI);if(!(b instanceof Ce)){if(!(b instanceof Cm))return 1;return 0;}return D8(a.bI,b.bn);}
function PM(a){return a.bI;}
function Hx(){var a=this;Bg.call(a);a.bM=null;a.d9=null;a.cP=0;}
function TJ(a,b){var c=new Hx();OJ(c,a,b);return c;}
function OJ(a,b,c){Bh(a);a.bM=b;a.cP=c;}
function N$(a,b){a.c=b;}
function Fz(a){if(a.d9===null)a.d9=F_(a.bM);return a.d9;}
function RX(a){var b;b=new L;N(b);F(b,B(147));F(b,Fz(a));return K(b);}
function N_(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d.n;f=$rt_createIntArray(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=G(c,b);k=j-44032|0;if(k>=0&&k<11172){b=4352+(k/588|0)|0;l=4449+((k%588|0)/28|0)|0;k=k%28|0;if(!k){m=$rt_createIntArray(2);n=m.data;n[0]=b;n[1]=l;}else{o=4519+k|0;m=$rt_createIntArray(3);n=m.data;n[0]=b;n[1]=l;n[2]=o;}}else m=null;if(m!==null){m=m.data;l=0;if(m.length!=a.cP)return (-1);while(true){if(l>=a.cP)return a.c.a(i,c,d);if(m[l]!=a.bM.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]
=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=G(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=G(c,k);h=j-4519|0;}if(h>=0&&h<28){b=k+1|0;f[2]=j;return a.cP==3&&f[0]==a.bM.data[0]&&f[1]==a.bM.data[1]&&f[2]==a.bM.data[2]?a.c.a(b,c,d):(-1);}return a.cP==2&&f[0]==a.bM.data[0]&&f[1]==a.bM.data[1]?a.c.a(k,c,d):(-1);}return (-1);}return (-1);}
function Qr(a,b){return b instanceof Hx&&!R(Fz(b),Fz(a))?0:1;}
function TH(a,b){return 1;}
function Cv(){Bl.call(this);this.bi=0;}
function LF(a){var b=new Cv();QS(b,a);return b;}
function QS(a,b){Ca(a);a.bi=b;}
function Vo(a){return 1;}
function T_(a,b,c){return a.bi!=G(c,b)?(-1):1;}
function SB(a,b,c,d){var e,f,g,h;if(!(c instanceof Q))return Ei(a,b,c,d);e=c;f=d.n;while(true){if(b>=f)return (-1);g=D7(e,a.bi,b);if(g<0)return (-1);h=a.c;b=g+1|0;if(h.a(b,c,d)>=0)break;}return g;}
function Vu(a,b,c,d,e){var f,g;if(!(d instanceof Q))return Er(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=D9(f,a.bi,c);if(g<0)break a;if(g<b)break a;if(a.c.a(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function T2(a){var b;b=new L;N(b);F(b,B(48));Be(b,a.bi);return K(b);}
function Qb(a){return a.bi;}
function Tt(a,b){if(b instanceof Cv)return b.bi!=a.bi?0:1;if(!(b instanceof Cx)){if(b instanceof Ce)return b.g(a.bi);if(!(b instanceof Cm))return 1;return 0;}return F2(b,0,IX(a.bi))<=0?0:1;}
function M1(){Bl.call(this);this.dA=0;}
function Rh(a){var b=new M1();O0(b,a);return b;}
function O0(a,b){Ca(a);a.dA=Cc(Ci(b));}
function NX(a,b,c){return a.dA!=Cc(Ci(G(c,b)))?(-1):1;}
function PI(a){var b;b=new L;N(b);F(b,B(148));Be(b,a.dA);return K(b);}
function JV(){var a=this;Bl.call(a);a.et=0;a.fc=0;}
function QY(a){var b=new JV();RO(b,a);return b;}
function RO(a,b){Ca(a);a.et=b;a.fc=Ef(b);}
function Oz(a,b,c){return a.et!=G(c,b)&&a.fc!=G(c,b)?(-1):1;}
function Uw(a){var b;b=new L;N(b);F(b,B(149));Be(b,a.et);return K(b);}
function C_(){var a=this;Bg.call(a);a.cE=0;a.d$=null;a.dG=null;a.dz=0;}
function Xs(a,b){var c=new C_();G0(c,a,b);return c;}
function G0(a,b,c){Bh(a);a.cE=1;a.dG=b;a.dz=c;}
function U7(a,b){a.c=b;}
function PK(a,b,c,d){var e,f,g,h,i,j,k,l;e=$rt_createIntArray(4);f=d.n;if(b>=f)return (-1);g=FL(a,b,c,f);h=b+a.cE|0;i=Mm(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;CB(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=FL(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=Mm(g).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.cE|0;if(h>=f){b=k;break a;}g=FL(a,h,c,f);b=k;}}}if(b!=a.dz)return (-1);i=e.data;g=0;while
(true){if(g>=b)return a.c.a(h,c,d);if(i[g]!=a.dG.data[g])break;g=g+1|0;}return (-1);}
function FC(a){var b,c;if(a.d$===null){b=new L;N(b);c=0;while(c<a.dz){C1(b,Dh(a.dG.data[c]));c=c+1|0;}a.d$=K(b);}return a.d$;}
function Px(a){var b;b=new L;N(b);F(b,B(150));F(b,FC(a));return K(b);}
function FL(a,b,c,d){var e,f,g;a.cE=1;if(b>=(d-1|0))e=G(c,b);else{d=b+1|0;e=G(c,b);f=G(c,d);if(DY(e,f)){g=$rt_createCharArray(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Bv(g[0])&&BG(g[1])?B2(g[0],g[1]):g[0];a.cE=2;}}return e;}
function VC(a,b){return b instanceof C_&&!R(FC(b),FC(a))?0:1;}
function Re(a,b){return 1;}
function I_(){C_.call(this);}
function GW(){C_.call(this);}
function JF(){BM.call(this);}
function Ry(a,b,c,d){var e;while(true){e=a.s.a(b,c,d);if(e<=0)break;b=e;}return a.c.a(b,c,d);}
function Ih(){BM.call(this);}
function ON(a,b,c,d){var e;e=a.s.a(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.s.a(e,c,d);if(b<=e)break;e=b;}b=e;}return a.c.a(b,c,d);}
function Di(){BM.call(this);}
function SH(a,b,c,d){var e;if(!a.s.z(d))return a.c.a(b,c,d);e=a.s.a(b,c,d);if(e>=0)return e;return a.c.a(b,c,d);}
function Un(a,b){a.c=b;a.s.D(b);}
function HW(){Di.call(this);}
function Vq(a,b,c,d){var e;e=a.s.a(b,c,d);if(e<=0)e=b;return a.c.a(e,c,d);}
function Pb(a,b){a.c=b;}
function C7(){var a=this;BM.call(a);a.bU=null;a.bp=0;}
function Y1(a,b,c,d,e){var f=new C7();EM(f,a,b,c,d,e);return f;}
function EM(a,b,c,d,e,f){B0(a,c,d,e);a.bU=b;a.bp=f;}
function VZ(a,b,c,d){var e,f;e=Go(d,a.bp);if(!a.s.z(d))return a.c.a(b,c,d);if(e>=a.bU.bE)return a.c.a(b,c,d);f=a.bp;e=e+1|0;Cu(d,f,e);f=a.s.a(b,c,d);if(f>=0){Cu(d,a.bp,0);return f;}f=a.bp;e=e+(-1)|0;Cu(d,f,e);if(e>=a.bU.bL)return a.c.a(b,c,d);Cu(d,a.bp,0);return (-1);}
function Uu(a){return GI(a.bU);}
function Gy(){C7.call(this);}
function UK(a,b,c,d){var e,f,g;e=0;f=a.bU.bE;a:{while(true){g=a.s.a(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.bU.bL)return (-1);return a.c.a(b,c,d);}
function Jc(){BM.call(this);}
function Vm(a,b,c,d){var e;if(!a.s.z(d))return a.c.a(b,c,d);e=a.c.a(b,c,d);if(e>=0)return e;return a.s.a(b,c,d);}
function IJ(){Di.call(this);}
function QH(a,b,c,d){var e;if(!a.s.z(d))return a.c.a(b,c,d);e=a.c.a(b,c,d);if(e<0)e=a.s.a(b,c,d);return e;}
function HH(){C7.call(this);}
function O7(a,b,c,d){var e,f;e=Go(d,a.bp);if(!a.s.z(d))return a.c.a(b,c,d);if(e>=a.bU.bE){Cu(d,a.bp,0);return a.c.a(b,c,d);}if(e<a.bU.bL){Cu(d,a.bp,e+1|0);f=a.s.a(b,c,d);}else{f=a.c.a(b,c,d);if(f>=0){Cu(d,a.bp,0);return f;}Cu(d,a.bp,e+1|0);f=a.s.a(b,c,d);}return f;}
function Jd(){Ck.call(this);}
function VL(a,b,c,d){var e;e=d.n;if(e>b)return a.c.Z(b,e,c,d);return a.c.a(b,c,d);}
function SV(a,b,c,d){var e;e=d.n;if(a.c.Z(b,e,c,d)>=0)return b;return (-1);}
function QM(a){return B(151);}
function Hd(){Ck.call(this);this.ei=null;}
function P7(a,b,c,d){var e,f;e=d.n;f=HL(a,b,e,c);if(f>=0)e=f;if(e>b)return a.c.Z(b,e,c,d);return a.c.a(b,c,d);}
function Og(a,b,c,d){var e,f,g,h;e=d.n;f=a.c.ba(b,c,d);if(f<0)return (-1);g=HL(a,f,e,c);if(g>=0)e=g;g=a.c.Z(f,e,c,d);if(f<g)f=g;if(f<=0)h=f?(-1):0;else{h=f-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.ei.cM(G(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=f?h:h+1|0;return b;}
function HL(a,b,c,d){while(true){if(b>=c)return (-1);if(a.ei.cM(G(d,b)))break;b=b+1|0;}return b;}
function R6(a){return B(152);}
function CR(){D.call(this);}
var Y2=null;var Y3=null;function H3(b){if(!(b&1)){if(Y3!==null)return Y3;Y3=new H5;return Y3;}if(Y2!==null)return Y2;Y2=new H4;return Y2;}
function JG(){BT.call(this);}
function O_(a,b,c,d){var e;a:{while(true){if((b+a.I.T()|0)>d.n)break a;e=a.I.M(b,c);if(e<1)break;b=b+e|0;}}return a.c.a(b,c,d);}
function IA(){CD.call(this);}
function OK(a,b,c,d){var e;if((b+a.I.T()|0)<=d.n){e=a.I.M(b,c);if(e>=1)b=b+e|0;}return a.c.a(b,c,d);}
function HM(){CV.call(this);}
function Sf(a,b,c,d){var e,f,g,h,i;e=a.bQ.bL;f=a.bQ.bE;g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.I.T()|0)>d.n)break a;h=a.I.M(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.c.a(b,c,d);}if((b+a.I.T()|0)>d.n){d.bo=1;return (-1);}i=a.I.M(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function IG(){BT.call(this);}
function PY(a,b,c,d){var e;while(true){e=a.c.a(b,c,d);if(e>=0)break;if((b+a.I.T()|0)<=d.n){e=a.I.M(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function G1(){CD.call(this);}
function Pj(a,b,c,d){var e;e=a.c.a(b,c,d);if(e>=0)return e;return a.s.a(b,c,d);}
function I4(){CV.call(this);}
function Sx(a,b,c,d){var e,f,g,h,i;e=a.bQ.bL;f=a.bQ.bE;g=0;while(true){if(g>=e){a:{while(true){h=a.c.a(b,c,d);if(h>=0)break;if((b+a.I.T()|0)<=d.n){h=a.I.M(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.I.T()|0)>d.n){d.bo=1;return (-1);}i=a.I.M(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function M5(){W.call(this);}
function TB(){var a=new M5();R8(a);return a;}
function R8(a){Bh(a);}
function V3(a,b,c,d){if(b&&!(d.bX&&b==d.bb))return (-1);return a.c.a(b,c,d);}
function UX(a,b){return 0;}
function OL(a){return B(153);}
function LQ(){W.call(this);this.fP=0;}
function Tj(a){var b=new LQ();Vf(b,a);return b;}
function Vf(a,b){Bh(a);a.fP=b;}
function P_(a,b,c,d){var e,f,g;e=b<d.n?G(c,b):32;f=!b?32:G(c,b-1|0);g=d.cA?0:d.bb;return (e!=32&&!IM(a,e,b,g,c)?0:1)^(f!=32&&!IM(a,f,b-1|0,g,c)?0:1)^a.fP?(-1):a.c.a(b,c,d);}
function Qn(a,b){return 0;}
function VV(a){return B(154);}
function IM(a,b,c,d,e){var f;if(!EX(b)&&b!=95){a:{if(Bw(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=G(e,c);if(EX(f))return 0;if(Bw(f)!=6)return 1;}}return 1;}return 0;}
function KW(){W.call(this);}
function WR(){var a=new KW();SQ(a);return a;}
function SQ(a){Bh(a);}
function Ve(a,b,c,d){if(b!=d.bT)return (-1);return a.c.a(b,c,d);}
function VT(a,b){return 0;}
function PN(a){return B(155);}
function IZ(){W.call(this);this.cq=0;}
function WN(a){var b=new IZ();Mb(b,a);return b;}
function Mb(a,b){Bh(a);a.cq=b;}
function QZ(a,b,c,d){var e,f,g;e=!d.bX?J(c):d.n;if(b>=e){Ba(d,a.cq,0);return a.c.a(b,c,d);}f=e-b|0;if(f==2&&G(c,b)==13&&G(c,b+1|0)==10){Ba(d,a.cq,0);return a.c.a(b,c,d);}a:{if(f==1){g=G(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}Ba(d,a.cq,0);return a.c.a(b,c,d);}
function Rj(a,b){var c;c=!B5(b,a.cq)?0:1;Ba(b,a.cq,(-1));return c;}
function Oh(a){return B(156);}
function Mz(){W.call(this);}
function WY(){var a=new Mz();U2(a);return a;}
function U2(a){Bh(a);}
function PF(a,b,c,d){if(b<(d.cA?J(c):d.n))return (-1);d.bo=1;d.hr=1;return a.c.a(b,c,d);}
function NW(a,b){return 0;}
function TS(a){return B(157);}
function Km(){W.call(this);this.eP=null;}
function WZ(a){var b=new Km();Q1(b,a);return b;}
function Q1(a,b){Bh(a);a.eP=b;}
function Q7(a,b,c,d){a:{if(b!=d.n){if(!b)break a;if(d.bX&&b==d.bb)break a;if(a.eP.fo(G(c,b-1|0),G(c,b)))break a;}return (-1);}return a.c.a(b,c,d);}
function TC(a,b){return 0;}
function Pv(a){return B(158);}
function Mu(){Bg.call(this);}
function Xc(){var a=new Mu();Ps(a);return a;}
function Ps(a){Bh(a);}
function Vt(a,b,c,d){var e,f,g,h;e=d.n;f=b+1|0;if(f>e){d.bo=1;return (-1);}g=G(c,b);if(Bv(g)){h=b+2|0;if(h<=e&&DY(g,G(c,f)))return a.c.a(h,c,d);}return a.c.a(f,c,d);}
function Sb(a){return B(159);}
function Qv(a,b){a.c=b;}
function Pi(a){return (-2147483602);}
function Qs(a,b){return 1;}
function Lc(){Bg.call(this);this.eL=null;}
function WL(a){var b=new Lc();Rg(b,a);return b;}
function Rg(a,b){Bh(a);a.eL=b;}
function Py(a,b,c,d){var e,f,g,h;e=d.n;f=b+1|0;if(f>e){d.bo=1;return (-1);}g=G(c,b);if(Bv(g)){b=b+2|0;if(b<=e){h=G(c,f);if(DY(g,h))return a.eL.cM(B2(g,h))?(-1):a.c.a(b,c,d);}}return a.eL.cM(g)?(-1):a.c.a(f,c,d);}
function Rw(a){return B(160);}
function R4(a,b){a.c=b;}
function NS(a){return (-2147483602);}
function VH(a,b){return 1;}
function Mk(){W.call(this);this.c4=0;}
function We(a){var b=new Mk();Tw(b,a);return b;}
function Tw(a,b){Bh(a);a.c4=b;}
function VF(a,b,c,d){var e;e=!d.bX?J(c):d.n;if(b>=e){Ba(d,a.c4,0);return a.c.a(b,c,d);}if((e-b|0)==1&&G(c,b)==10){Ba(d,a.c4,1);return a.c.a(b+1|0,c,d);}return (-1);}
function Ts(a,b){var c;c=!B5(b,a.c4)?0:1;Ba(b,a.c4,(-1));return c;}
function NU(a){return B(156);}
function J3(){W.call(this);this.cD=0;}
function W_(a){var b=new J3();Uf(b,a);return b;}
function Uf(a,b){Bh(a);a.cD=b;}
function PC(a,b,c,d){if((!d.bX?J(c)-b|0:d.n-b|0)<=0){Ba(d,a.cD,0);return a.c.a(b,c,d);}if(G(c,b)!=10)return (-1);Ba(d,a.cD,1);return a.c.a(b+1|0,c,d);}
function Td(a,b){var c;c=!B5(b,a.cD)?0:1;Ba(b,a.cD,(-1));return c;}
function OU(a){return B(161);}
function JP(){W.call(this);this.b_=0;}
function Wo(a){var b=new JP();V1(b,a);return b;}
function V1(a,b){Bh(a);a.b_=b;}
function UO(a,b,c,d){var e,f,g;e=!d.bX?J(c)-b|0:d.bb-b|0;if(!e){Ba(d,a.b_,0);return a.c.a(b,c,d);}if(e<2){f=G(c,b);g=97;}else{f=G(c,b);g=G(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:Ba(d,a.b_,0);return a.c.a(b,c,d);case 13:if(g!=10){Ba(d,a.b_,0);return a.c.a(b,c,d);}Ba(d,a.b_,0);return a.c.a(b,c,d);default:}return (-1);}
function Ro(a,b){var c;c=!B5(b,a.b_)?0:1;Ba(b,a.b_,(-1));return c;}
function TD(a){return B(162);}
function DH(){var a=this;Bg.call(a);a.e5=0;a.cu=0;}
function Xl(a,b){var c=new DH();HF(c,a,b);return c;}
function HF(a,b,c){Bh(a);a.e5=b;a.cu=c;}
function Pc(a,b,c,d){var e,f,g,h;e=DB(a,d);if(e!==null&&(b+J(e)|0)<=d.n){f=0;while(true){if(f>=J(e)){Ba(d,a.cu,J(e));return a.c.a(b+J(e)|0,c,d);}g=G(e,f);h=b+f|0;if(g!=G(c,h)&&Ef(G(e,f))!=G(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function Q9(a,b){a.c=b;}
function DB(a,b){return Nt(b,a.e5);}
function OX(a){var b;b=new L;N(b);F(b,B(163));return K(Bf(b,a.G));}
function RG(a,b){var c;c=!B5(b,a.cu)?0:1;Ba(b,a.cu,(-1));return c;}
function Mn(){DH.call(this);}
function Wt(a,b){var c=new Mn();T$(c,a,b);return c;}
function T$(a,b,c){HF(a,b,c);}
function Rx(a,b,c,d){var e,f;e=DB(a,d);if(e!==null&&(b+J(e)|0)<=d.n){f=!Ha(c,e,b)?(-1):J(e);if(f<0)return (-1);Ba(d,a.cu,f);return a.c.a(b+f|0,c,d);}return (-1);}
function TQ(a,b,c,d){var e,f,g;e=DB(a,d);f=d.bb;if(e!==null&&(b+J(e)|0)<=f){g=c;while(true){if(b>f)return (-1);b=Fn(g,e,b);if(b<0)return (-1);if(a.c.a(b+J(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function OV(a,b,c,d,e){var f,g,h;f=DB(a,e);if(f===null)return (-1);g=d;a:{while(true){if(c<b)return (-1);h=Fp(g,f,c);if(h<0)break a;if(h<b)break a;if(a.c.a(h+J(f)|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function OE(a,b){return 1;}
function Uk(a){var b;b=new L;N(b);F(b,B(164));return K(Bf(b,a.G));}
function MS(){DH.call(this);this.gQ=0;}
function W$(a,b){var c=new MS();Tp(c,a,b);return c;}
function Tp(a,b,c){HF(a,b,c);}
function N3(a,b,c,d){var e,f;e=DB(a,d);if(e!==null&&(b+J(e)|0)<=d.n){f=0;while(true){if(f>=J(e)){Ba(d,a.cu,J(e));return a.c.a(b+J(e)|0,c,d);}if(Cc(Ci(G(e,f)))!=Cc(Ci(G(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function Qo(a){var b;b=new L;N(b);F(b,B(165));return K(Bf(b,a.gQ));}
function E4(){DI.call(this);}
function R1(a,b){F(a,b);return a;}
function SY(a,b){Be(a,b);return a;}
function Vl(a,b,c,d){Cz(a,b,c,d);return a;}
function Sz(a,b){C1(a,b);return a;}
function GR(a,b,c,d){Ge(a,a.l,b,c,d);return a;}
function IK(a,b){GR(a,b,0,J(b));return a;}
function Ge(a,b,c,d,e){var f,g;if(d<=e&&e<=J(c)&&d>=0){B9(a,b,(b+e|0)-d|0);while(d<e){f=a.v.data;g=b+1|0;f[b]=G(c,d);d=d+1|0;b=g;}return a;}c=new Bn;S(c);I(c);}
function Ow(a,b,c,d,e){Dq(a,b,c,d,e);return a;}
function Ut(a,b,c){CA(a,b,c);return a;}
function R2(a,b,c){C8(a,b,c);return a;}
function S6(a,b,c,d,e){Dq(a,b,c,d,e);return a;}
function Qg(a,b,c,d){Cz(a,b,c,d);return a;}
function TA(a,b,c,d,e){return Ge(a,b,c,d,e);}
function RE(a,b,c,d){return GR(a,b,c,d);}
function Oi(a,b){return DZ(a,b);}
function FR(a){return a.l;}
function Qt(a){return K(a);}
function QQ(a,b){GZ(a,b);}
function S0(a,b,c){CA(a,b,c);return a;}
function Ov(a,b,c){C8(a,b,c);return a;}
function Nn(){var a=this;Bl.call(a);a.X=null;a.ef=null;a.dF=null;}
function Xf(a){var b=new Nn();RW(b,a);return b;}
function RW(a,b){var c;Ca(a);a.X=K(b);a.O=FR(b);a.ef=Pg(a.O);a.dF=Pg(a.O);c=0;while(c<(a.O-1|0)){I7(a.ef,G(a.X,c),(a.O-c|0)-1|0);I7(a.dF,G(a.X,(a.O-c|0)-1|0),(a.O-c|0)-1|0);c=c+1|0;}}
function RZ(a,b,c){return !FJ(a,c,b)?(-1):a.O;}
function P4(a,b,c,d){var e,f;e=d.n;while(true){if(b>e)return (-1);f=ME(a,c,b,e);if(f<0)return (-1);if(a.c.a(f+a.O|0,c,d)>=0)break;b=f+1|0;}return f;}
function Tz(a,b,c,d,e){while(true){if(c<b)return (-1);c=Ma(a,d,b,c);if(c<0)return (-1);if(a.c.a(c+a.O|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function PQ(a){var b;b=new L;N(b);F(b,B(166));F(b,a.X);return K(b);}
function Um(a,b){var c;if(b instanceof Cv)return b.bi!=G(a.X,0)?0:1;if(b instanceof Cx)return F2(b,0,BR(a.X,0,1))<=0?0:1;if(!(b instanceof Ce)){if(!(b instanceof Cm))return 1;return J(a.X)>1&&b.b0==B2(G(a.X,0),G(a.X,1))?1:0;}a:{b:{b=b;if(!b.g(G(a.X,0))){if(J(a.X)<=1)break b;if(!b.g(B2(G(a.X,0),G(a.X,1))))break b;}c=1;break a;}c=0;}return c;}
function ME(a,b,c,d){var e,f;e=G(a.X,a.O-1|0);while(true){if(c>(d-a.O|0))return (-1);f=G(b,(c+a.O|0)-1|0);if(f==e&&FJ(a,b,c))break;c=c+Gb(a.ef,f)|0;}return c;}
function Ma(a,b,c,d){var e,f,g;e=G(a.X,0);f=(J(b)-d|0)-a.O|0;if(f<=0)d=d+f|0;while(true){if(d<c)return (-1);g=G(b,d);if(g==e&&FJ(a,b,d))break;d=d-Gb(a.dF,g)|0;}return d;}
function FJ(a,b,c){var d;d=0;while(d<a.O){if(G(b,d+c|0)!=G(a.X,d))return 0;d=d+1|0;}return 1;}
function JO(){Bl.call(this);this.cB=null;}
function Xr(a){var b=new JO();Tv(b,a);return b;}
function Tv(a,b){var c,d;Ca(a);c=new L;N(c);d=0;while(d<FR(b)){Be(c,Cc(Ci(DZ(b,d))));d=d+1|0;}a.cB=K(c);a.O=CI(c);}
function N8(a,b,c){var d;d=0;while(true){if(d>=J(a.cB))return J(a.cB);if(G(a.cB,d)!=Cc(Ci(G(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Uy(a){var b;b=new L;N(b);F(b,B(167));F(b,a.cB);return K(b);}
function GC(){Bl.call(this);this.cw=null;}
function Sj(a,b,c){var d,e,f;d=0;while(true){if(d>=J(a.cw))return J(a.cw);e=G(a.cw,d);f=b+d|0;if(e!=G(c,f)&&Ef(G(a.cw,d))!=G(c,f))break;d=d+1|0;}return (-1);}
function Tx(a){var b;b=new L;N(b);F(b,B(168));F(b,a.cw);return K(b);}
function DG(){D.call(this);}
var Y4=null;var Y5=null;var Y6=null;function MP(a,b){var c,d,e;c=0;while(true){if(c>=Y6.data.length){d=new ER;Bd(d,B(48));d.hT=B(48);d.hH=b;I(d);}e=Y6.data[c].data;if(R(b,e[0]))break;c=c+1|0;}return e[1];}
function LS(){var b,c,d,e;Y4=WX();Y5=Xn();b=E($rt_arraycls(D),194);c=b.data;d=E(D,2);e=d.data;e[0]=B(169);e[1]=Xm();c[0]=d;d=E(D,2);e=d.data;e[0]=B(170);e[1]=Wm();c[1]=d;d=E(D,2);e=d.data;e[0]=B(171);e[1]=WV();c[2]=d;d=E(D,2);e=d.data;e[0]=B(172);e[1]=W6();c[3]=d;d=E(D,2);e=d.data;e[0]=B(173);e[1]=Y5;c[4]=d;d=E(D,2);e=d.data;e[0]=B(174);e[1]=Wi();c[5]=d;d=E(D,2);e=d.data;e[0]=B(175);e[1]=Xh();c[6]=d;d=E(D,2);e=d.data;e[0]=B(176);e[1]=Ww();c[7]=d;d=E(D,2);e=d.data;e[0]=B(177);e[1]=Ws();c[8]=d;d=E(D,2);e=d.data;e[0]
=B(178);e[1]=WC();c[9]=d;d=E(D,2);e=d.data;e[0]=B(179);e[1]=WW();c[10]=d;d=E(D,2);e=d.data;e[0]=B(180);e[1]=Wy();c[11]=d;d=E(D,2);e=d.data;e[0]=B(181);e[1]=WF();c[12]=d;d=E(D,2);e=d.data;e[0]=B(182);e[1]=Wk();c[13]=d;d=E(D,2);e=d.data;e[0]=B(183);e[1]=W2();c[14]=d;d=E(D,2);e=d.data;e[0]=B(184);e[1]=WT();c[15]=d;d=E(D,2);e=d.data;e[0]=B(185);e[1]=Wg();c[16]=d;d=E(D,2);e=d.data;e[0]=B(186);e[1]=WP();c[17]=d;d=E(D,2);e=d.data;e[0]=B(187);e[1]=Wh();c[18]=d;d=E(D,2);e=d.data;e[0]=B(188);e[1]=WE();c[19]=d;d=E(D,2);e
=d.data;e[0]=B(189);e[1]=Xb();c[20]=d;d=E(D,2);e=d.data;e[0]=B(190);e[1]=WJ();c[21]=d;d=E(D,2);e=d.data;e[0]=B(191);e[1]=Wp();c[22]=d;d=E(D,2);e=d.data;e[0]=B(192);e[1]=WU();c[23]=d;d=E(D,2);e=d.data;e[0]=B(193);e[1]=WO();c[24]=d;d=E(D,2);e=d.data;e[0]=B(194);e[1]=W9();c[25]=d;d=E(D,2);e=d.data;e[0]=B(195);e[1]=WD();c[26]=d;d=E(D,2);e=d.data;e[0]=B(196);e[1]=WI();c[27]=d;d=E(D,2);e=d.data;e[0]=B(197);e[1]=Y4;c[28]=d;d=E(D,2);e=d.data;e[0]=B(198);e[1]=Wu();c[29]=d;d=E(D,2);e=d.data;e[0]=B(199);e[1]=Wx();c[30]
=d;d=E(D,2);e=d.data;e[0]=B(200);e[1]=Y4;c[31]=d;d=E(D,2);e=d.data;e[0]=B(201);e[1]=Wd();c[32]=d;d=E(D,2);e=d.data;e[0]=B(202);e[1]=Y5;c[33]=d;d=E(D,2);e=d.data;e[0]=B(203);e[1]=W3();c[34]=d;d=E(D,2);e=d.data;e[0]=B(204);e[1]=H(0,127);c[35]=d;d=E(D,2);e=d.data;e[0]=B(205);e[1]=H(128,255);c[36]=d;d=E(D,2);e=d.data;e[0]=B(206);e[1]=H(256,383);c[37]=d;d=E(D,2);e=d.data;e[0]=B(207);e[1]=H(384,591);c[38]=d;d=E(D,2);e=d.data;e[0]=B(208);e[1]=H(592,687);c[39]=d;d=E(D,2);e=d.data;e[0]=B(209);e[1]=H(688,767);c[40]=d;d
=E(D,2);e=d.data;e[0]=B(210);e[1]=H(768,879);c[41]=d;d=E(D,2);e=d.data;e[0]=B(211);e[1]=H(880,1023);c[42]=d;d=E(D,2);e=d.data;e[0]=B(212);e[1]=H(1024,1279);c[43]=d;d=E(D,2);e=d.data;e[0]=B(213);e[1]=H(1280,1327);c[44]=d;d=E(D,2);e=d.data;e[0]=B(214);e[1]=H(1328,1423);c[45]=d;d=E(D,2);e=d.data;e[0]=B(215);e[1]=H(1424,1535);c[46]=d;d=E(D,2);e=d.data;e[0]=B(216);e[1]=H(1536,1791);c[47]=d;d=E(D,2);e=d.data;e[0]=B(217);e[1]=H(1792,1871);c[48]=d;d=E(D,2);e=d.data;e[0]=B(218);e[1]=H(1872,1919);c[49]=d;d=E(D,2);e=d.data;e[0]
=B(219);e[1]=H(1920,1983);c[50]=d;d=E(D,2);e=d.data;e[0]=B(220);e[1]=H(2304,2431);c[51]=d;d=E(D,2);e=d.data;e[0]=B(221);e[1]=H(2432,2559);c[52]=d;d=E(D,2);e=d.data;e[0]=B(222);e[1]=H(2560,2687);c[53]=d;d=E(D,2);e=d.data;e[0]=B(223);e[1]=H(2688,2815);c[54]=d;d=E(D,2);e=d.data;e[0]=B(224);e[1]=H(2816,2943);c[55]=d;d=E(D,2);e=d.data;e[0]=B(225);e[1]=H(2944,3071);c[56]=d;d=E(D,2);e=d.data;e[0]=B(226);e[1]=H(3072,3199);c[57]=d;d=E(D,2);e=d.data;e[0]=B(227);e[1]=H(3200,3327);c[58]=d;d=E(D,2);e=d.data;e[0]=B(228);e[1]
=H(3328,3455);c[59]=d;d=E(D,2);e=d.data;e[0]=B(229);e[1]=H(3456,3583);c[60]=d;d=E(D,2);e=d.data;e[0]=B(230);e[1]=H(3584,3711);c[61]=d;d=E(D,2);e=d.data;e[0]=B(231);e[1]=H(3712,3839);c[62]=d;d=E(D,2);e=d.data;e[0]=B(232);e[1]=H(3840,4095);c[63]=d;d=E(D,2);e=d.data;e[0]=B(233);e[1]=H(4096,4255);c[64]=d;d=E(D,2);e=d.data;e[0]=B(234);e[1]=H(4256,4351);c[65]=d;d=E(D,2);e=d.data;e[0]=B(235);e[1]=H(4352,4607);c[66]=d;d=E(D,2);e=d.data;e[0]=B(236);e[1]=H(4608,4991);c[67]=d;d=E(D,2);e=d.data;e[0]=B(237);e[1]=H(4992,
5023);c[68]=d;d=E(D,2);e=d.data;e[0]=B(238);e[1]=H(5024,5119);c[69]=d;d=E(D,2);e=d.data;e[0]=B(239);e[1]=H(5120,5759);c[70]=d;d=E(D,2);e=d.data;e[0]=B(240);e[1]=H(5760,5791);c[71]=d;d=E(D,2);e=d.data;e[0]=B(241);e[1]=H(5792,5887);c[72]=d;d=E(D,2);e=d.data;e[0]=B(242);e[1]=H(5888,5919);c[73]=d;d=E(D,2);e=d.data;e[0]=B(243);e[1]=H(5920,5951);c[74]=d;d=E(D,2);e=d.data;e[0]=B(244);e[1]=H(5952,5983);c[75]=d;d=E(D,2);e=d.data;e[0]=B(245);e[1]=H(5984,6015);c[76]=d;d=E(D,2);e=d.data;e[0]=B(246);e[1]=H(6016,6143);c[77]
=d;d=E(D,2);e=d.data;e[0]=B(247);e[1]=H(6144,6319);c[78]=d;d=E(D,2);e=d.data;e[0]=B(248);e[1]=H(6400,6479);c[79]=d;d=E(D,2);e=d.data;e[0]=B(249);e[1]=H(6480,6527);c[80]=d;d=E(D,2);e=d.data;e[0]=B(250);e[1]=H(6528,6623);c[81]=d;d=E(D,2);e=d.data;e[0]=B(251);e[1]=H(6624,6655);c[82]=d;d=E(D,2);e=d.data;e[0]=B(252);e[1]=H(6656,6687);c[83]=d;d=E(D,2);e=d.data;e[0]=B(253);e[1]=H(7424,7551);c[84]=d;d=E(D,2);e=d.data;e[0]=B(254);e[1]=H(7552,7615);c[85]=d;d=E(D,2);e=d.data;e[0]=B(255);e[1]=H(7616,7679);c[86]=d;d=E(D,
2);e=d.data;e[0]=B(256);e[1]=H(7680,7935);c[87]=d;d=E(D,2);e=d.data;e[0]=B(257);e[1]=H(7936,8191);c[88]=d;d=E(D,2);e=d.data;e[0]=B(258);e[1]=H(8192,8303);c[89]=d;d=E(D,2);e=d.data;e[0]=B(259);e[1]=H(8304,8351);c[90]=d;d=E(D,2);e=d.data;e[0]=B(260);e[1]=H(8352,8399);c[91]=d;d=E(D,2);e=d.data;e[0]=B(261);e[1]=H(8400,8447);c[92]=d;d=E(D,2);e=d.data;e[0]=B(262);e[1]=H(8448,8527);c[93]=d;d=E(D,2);e=d.data;e[0]=B(263);e[1]=H(8528,8591);c[94]=d;d=E(D,2);e=d.data;e[0]=B(264);e[1]=H(8592,8703);c[95]=d;d=E(D,2);e=d.data;e[0]
=B(265);e[1]=H(8704,8959);c[96]=d;d=E(D,2);e=d.data;e[0]=B(266);e[1]=H(8960,9215);c[97]=d;d=E(D,2);e=d.data;e[0]=B(267);e[1]=H(9216,9279);c[98]=d;d=E(D,2);e=d.data;e[0]=B(268);e[1]=H(9280,9311);c[99]=d;d=E(D,2);e=d.data;e[0]=B(269);e[1]=H(9312,9471);c[100]=d;d=E(D,2);e=d.data;e[0]=B(270);e[1]=H(9472,9599);c[101]=d;d=E(D,2);e=d.data;e[0]=B(271);e[1]=H(9600,9631);c[102]=d;d=E(D,2);e=d.data;e[0]=B(272);e[1]=H(9632,9727);c[103]=d;d=E(D,2);e=d.data;e[0]=B(273);e[1]=H(9728,9983);c[104]=d;d=E(D,2);e=d.data;e[0]=B(274);e[1]
=H(9984,10175);c[105]=d;d=E(D,2);e=d.data;e[0]=B(275);e[1]=H(10176,10223);c[106]=d;d=E(D,2);e=d.data;e[0]=B(276);e[1]=H(10224,10239);c[107]=d;d=E(D,2);e=d.data;e[0]=B(277);e[1]=H(10240,10495);c[108]=d;d=E(D,2);e=d.data;e[0]=B(278);e[1]=H(10496,10623);c[109]=d;d=E(D,2);e=d.data;e[0]=B(279);e[1]=H(10624,10751);c[110]=d;d=E(D,2);e=d.data;e[0]=B(280);e[1]=H(10752,11007);c[111]=d;d=E(D,2);e=d.data;e[0]=B(281);e[1]=H(11008,11263);c[112]=d;d=E(D,2);e=d.data;e[0]=B(282);e[1]=H(11264,11359);c[113]=d;d=E(D,2);e=d.data;e[0]
=B(283);e[1]=H(11392,11519);c[114]=d;d=E(D,2);e=d.data;e[0]=B(284);e[1]=H(11520,11567);c[115]=d;d=E(D,2);e=d.data;e[0]=B(285);e[1]=H(11568,11647);c[116]=d;d=E(D,2);e=d.data;e[0]=B(286);e[1]=H(11648,11743);c[117]=d;d=E(D,2);e=d.data;e[0]=B(287);e[1]=H(11776,11903);c[118]=d;d=E(D,2);e=d.data;e[0]=B(288);e[1]=H(11904,12031);c[119]=d;d=E(D,2);e=d.data;e[0]=B(289);e[1]=H(12032,12255);c[120]=d;d=E(D,2);e=d.data;e[0]=B(290);e[1]=H(12272,12287);c[121]=d;d=E(D,2);e=d.data;e[0]=B(291);e[1]=H(12288,12351);c[122]=d;d=E(D,
2);e=d.data;e[0]=B(292);e[1]=H(12352,12447);c[123]=d;d=E(D,2);e=d.data;e[0]=B(293);e[1]=H(12448,12543);c[124]=d;d=E(D,2);e=d.data;e[0]=B(294);e[1]=H(12544,12591);c[125]=d;d=E(D,2);e=d.data;e[0]=B(295);e[1]=H(12592,12687);c[126]=d;d=E(D,2);e=d.data;e[0]=B(296);e[1]=H(12688,12703);c[127]=d;d=E(D,2);e=d.data;e[0]=B(297);e[1]=H(12704,12735);c[128]=d;d=E(D,2);e=d.data;e[0]=B(298);e[1]=H(12736,12783);c[129]=d;d=E(D,2);e=d.data;e[0]=B(299);e[1]=H(12784,12799);c[130]=d;d=E(D,2);e=d.data;e[0]=B(300);e[1]=H(12800,13055);c[131]
=d;d=E(D,2);e=d.data;e[0]=B(301);e[1]=H(13056,13311);c[132]=d;d=E(D,2);e=d.data;e[0]=B(302);e[1]=H(13312,19893);c[133]=d;d=E(D,2);e=d.data;e[0]=B(303);e[1]=H(19904,19967);c[134]=d;d=E(D,2);e=d.data;e[0]=B(304);e[1]=H(19968,40959);c[135]=d;d=E(D,2);e=d.data;e[0]=B(305);e[1]=H(40960,42127);c[136]=d;d=E(D,2);e=d.data;e[0]=B(306);e[1]=H(42128,42191);c[137]=d;d=E(D,2);e=d.data;e[0]=B(307);e[1]=H(42752,42783);c[138]=d;d=E(D,2);e=d.data;e[0]=B(308);e[1]=H(43008,43055);c[139]=d;d=E(D,2);e=d.data;e[0]=B(309);e[1]=H(44032,
55203);c[140]=d;d=E(D,2);e=d.data;e[0]=B(310);e[1]=H(55296,56191);c[141]=d;d=E(D,2);e=d.data;e[0]=B(311);e[1]=H(56192,56319);c[142]=d;d=E(D,2);e=d.data;e[0]=B(312);e[1]=H(56320,57343);c[143]=d;d=E(D,2);e=d.data;e[0]=B(313);e[1]=H(57344,63743);c[144]=d;d=E(D,2);e=d.data;e[0]=B(314);e[1]=H(63744,64255);c[145]=d;d=E(D,2);e=d.data;e[0]=B(315);e[1]=H(64256,64335);c[146]=d;d=E(D,2);e=d.data;e[0]=B(316);e[1]=H(64336,65023);c[147]=d;d=E(D,2);e=d.data;e[0]=B(317);e[1]=H(65024,65039);c[148]=d;d=E(D,2);e=d.data;e[0]=B(318);e[1]
=H(65040,65055);c[149]=d;d=E(D,2);e=d.data;e[0]=B(319);e[1]=H(65056,65071);c[150]=d;d=E(D,2);e=d.data;e[0]=B(320);e[1]=H(65072,65103);c[151]=d;d=E(D,2);e=d.data;e[0]=B(321);e[1]=H(65104,65135);c[152]=d;d=E(D,2);e=d.data;e[0]=B(322);e[1]=H(65136,65279);c[153]=d;d=E(D,2);e=d.data;e[0]=B(323);e[1]=H(65280,65519);c[154]=d;d=E(D,2);e=d.data;e[0]=B(324);e[1]=H(0,1114111);c[155]=d;d=E(D,2);e=d.data;e[0]=B(325);e[1]=Wz();c[156]=d;d=E(D,2);e=d.data;e[0]=B(326);e[1]=Bb(0,1);c[157]=d;d=E(D,2);e=d.data;e[0]=B(327);e[1]
=Ev(62,1);c[158]=d;d=E(D,2);e=d.data;e[0]=B(328);e[1]=Bb(1,1);c[159]=d;d=E(D,2);e=d.data;e[0]=B(329);e[1]=Bb(2,1);c[160]=d;d=E(D,2);e=d.data;e[0]=B(330);e[1]=Bb(3,0);c[161]=d;d=E(D,2);e=d.data;e[0]=B(331);e[1]=Bb(4,0);c[162]=d;d=E(D,2);e=d.data;e[0]=B(332);e[1]=Bb(5,1);c[163]=d;d=E(D,2);e=d.data;e[0]=B(333);e[1]=Ev(448,1);c[164]=d;d=E(D,2);e=d.data;e[0]=B(334);e[1]=Bb(6,1);c[165]=d;d=E(D,2);e=d.data;e[0]=B(335);e[1]=Bb(7,0);c[166]=d;d=E(D,2);e=d.data;e[0]=B(336);e[1]=Bb(8,1);c[167]=d;d=E(D,2);e=d.data;e[0]=
B(337);e[1]=Ev(3584,1);c[168]=d;d=E(D,2);e=d.data;e[0]=B(338);e[1]=Bb(9,1);c[169]=d;d=E(D,2);e=d.data;e[0]=B(339);e[1]=Bb(10,1);c[170]=d;d=E(D,2);e=d.data;e[0]=B(340);e[1]=Bb(11,1);c[171]=d;d=E(D,2);e=d.data;e[0]=B(341);e[1]=Ev(28672,0);c[172]=d;d=E(D,2);e=d.data;e[0]=B(342);e[1]=Bb(12,0);c[173]=d;d=E(D,2);e=d.data;e[0]=B(343);e[1]=Bb(13,0);c[174]=d;d=E(D,2);e=d.data;e[0]=B(344);e[1]=Bb(14,0);c[175]=d;d=E(D,2);e=d.data;e[0]=B(345);e[1]=Xe(983040,1,1);c[176]=d;d=E(D,2);e=d.data;e[0]=B(346);e[1]=Bb(15,0);c[177]
=d;d=E(D,2);e=d.data;e[0]=B(347);e[1]=Bb(16,1);c[178]=d;d=E(D,2);e=d.data;e[0]=B(348);e[1]=Bb(18,1);c[179]=d;d=E(D,2);e=d.data;e[0]=B(349);e[1]=Xu(19,0,1);c[180]=d;d=E(D,2);e=d.data;e[0]=B(350);e[1]=Ev(1643118592,1);c[181]=d;d=E(D,2);e=d.data;e[0]=B(351);e[1]=Bb(20,0);c[182]=d;d=E(D,2);e=d.data;e[0]=B(352);e[1]=Bb(21,0);c[183]=d;d=E(D,2);e=d.data;e[0]=B(353);e[1]=Bb(22,0);c[184]=d;d=E(D,2);e=d.data;e[0]=B(354);e[1]=Bb(23,0);c[185]=d;d=E(D,2);e=d.data;e[0]=B(355);e[1]=Bb(24,1);c[186]=d;d=E(D,2);e=d.data;e[0]
=B(356);e[1]=Ev(2113929216,1);c[187]=d;d=E(D,2);e=d.data;e[0]=B(357);e[1]=Bb(25,1);c[188]=d;d=E(D,2);e=d.data;e[0]=B(358);e[1]=Bb(26,0);c[189]=d;d=E(D,2);e=d.data;e[0]=B(359);e[1]=Bb(27,0);c[190]=d;d=E(D,2);e=d.data;e[0]=B(360);e[1]=Bb(28,1);c[191]=d;d=E(D,2);e=d.data;e[0]=B(361);e[1]=Bb(29,0);c[192]=d;d=E(D,2);e=d.data;e[0]=B(362);e[1]=Bb(30,0);c[193]=d;Y6=b;}
function O(){var a=this;D.call(a);a.d0=null;a.en=null;}
function Lv(a,b){if(!b&&a.d0===null)a.d0=a.w();else if(b&&a.en===null)a.en=Cy(a.w(),1);if(b)return a.en;return a.d0;}
function F9(){Bl.call(this);this.eE=0;}
function So(a,b,c){var d,e;d=b+1|0;e=G(c,b);d=G(c,d);return a.eE!=CS(Dl(B2(e,d)))?(-1):2;}
function VU(a){var b;b=new L;N(b);F(b,B(148));F(b,F_(Dh(a.eE)));return K(b);}
function EL(){Bg.call(this);this.bZ=0;}
function Po(a){var b=new EL();QL(b,a);return b;}
function QL(a,b){Bh(a);a.bZ=b;}
function PU(a,b){a.c=b;}
function Rk(a,b,c,d){var e,f;e=b+1|0;if(e>d.n){d.bo=1;return (-1);}f=G(c,b);if(b>d.bb&&Bv(G(c,b-1|0)))return (-1);if(a.bZ!=f)return (-1);return a.c.a(e,c,d);}
function Uj(a,b,c,d){var e,f,g,h,i;if(!(c instanceof Q))return Ei(a,b,c,d);e=c;f=d.bb;g=d.n;while(true){if(b>=g)return (-1);h=D7(e,a.bZ,b);if(h<0)return (-1);if(h>f&&Bv(G(e,h-1|0))){b=h+1|0;continue;}i=a.c;b=h+1|0;if(i.a(b,c,d)>=0)break;}return h;}
function R_(a,b,c,d,e){var f,g;if(!(d instanceof Q))return Er(a,b,c,d,e);f=e.bb;g=d;a:{while(true){if(c<b)return (-1);c=D9(g,a.bZ,c);if(c<0)break a;if(c<b)break a;if(c>f&&Bv(G(g,c-1|0))){c=c+(-2)|0;continue;}if(a.c.a(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function S4(a){var b;b=new L;N(b);F(b,B(48));Be(b,a.bZ);return K(b);}
function OR(a,b){if(b instanceof Cv)return 0;if(b instanceof Cx)return 0;if(b instanceof Ce)return 0;if(b instanceof Cm)return 0;if(b instanceof EY)return 0;if(!(b instanceof EL))return 1;return b.bZ!=a.bZ?0:1;}
function Te(a,b){return 1;}
function EY(){Bg.call(this);this.b4=0;}
function US(a){var b=new EY();PA(b,a);return b;}
function PA(a,b){Bh(a);a.b4=b;}
function QP(a,b){a.c=b;}
function Ol(a,b,c,d){var e,f,g,h;e=d.n;f=b+1|0;g=BZ(f,e);if(g>0){d.bo=1;return (-1);}h=G(c,b);if(g<0&&BG(G(c,f)))return (-1);if(a.b4!=h)return (-1);return a.c.a(f,c,d);}
function Ql(a,b,c,d){var e,f,g;if(!(c instanceof Q))return Ei(a,b,c,d);e=c;f=d.n;while(true){if(b>=f)return (-1);g=D7(e,a.b4,b);if(g<0)return (-1);b=g+1|0;if(b<f&&BG(G(e,b))){b=g+2|0;continue;}if(a.c.a(b,c,d)>=0)break;}return g;}
function Sg(a,b,c,d,e){var f,g,h;if(!(d instanceof Q))return Er(a,b,c,d,e);f=d;g=e.n;a:{while(true){if(c<b)return (-1);c=D9(f,a.b4,c);if(c<0)break a;if(c<b)break a;h=c+1|0;if(h<g&&BG(G(f,h))){c=c+(-1)|0;continue;}if(a.c.a(h,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function Vp(a){var b;b=new L;N(b);F(b,B(48));Be(b,a.b4);return K(b);}
function R0(a,b){if(b instanceof Cv)return 0;if(b instanceof Cx)return 0;if(b instanceof Ce)return 0;if(b instanceof Cm)return 0;if(b instanceof EL)return 0;if(!(b instanceof EY))return 1;return b.b4!=a.b4?0:1;}
function QE(a,b){return 1;}
function Cm(){var a=this;Bl.call(a);a.c3=0;a.cS=0;a.b0=0;}
function RI(a,b,c){var d,e;d=b+1|0;e=G(c,b);d=G(c,d);return a.c3==e&&a.cS==d?2:(-1);}
function O8(a,b,c,d){var e,f,g;if(!(c instanceof Q))return Ei(a,b,c,d);e=c;f=d.n;while(b<f){b=D7(e,a.c3,b);if(b<0)return (-1);b=b+1|0;if(b>=f)continue;g=G(e,b);if(a.cS==g&&a.c.a(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function QO(a,b,c,d,e){var f;if(!(d instanceof Q))return Er(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);c=D9(f,a.cS,c)+(-1)|0;if(c<0)break a;if(c<b)break a;if(a.c3==G(f,c)&&a.c.a(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function Uo(a){var b;b=new L;N(b);F(b,B(48));Be(b,a.c3);Be(b,a.cS);return K(b);}
function Oo(a){return a.b0;}
function Rp(a,b){if(b instanceof Cm)return b.b0!=a.b0?0:1;if(b instanceof Ce)return b.g(a.b0);if(b instanceof Cv)return 0;if(!(b instanceof Cx))return 1;return 0;}
function H4(){CR.call(this);}
function Q0(a,b){return b!=10?0:1;}
function RA(a,b,c){return b!=10?0:1;}
function H5(){CR.call(this);}
function SA(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function UW(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function Ld(){var a=this;D.call(a);a.c2=null;a.dJ=null;a.bh=0;a.gg=0;}
function Pg(a){var b=new Ld();Vd(b,a);return b;}
function Vd(a,b){while(b>=a.bh){a.bh=a.bh<<1|1;}a.bh=a.bh<<1|1;a.c2=$rt_createIntArray(a.bh+1|0);a.dJ=$rt_createIntArray(a.bh+1|0);a.gg=b;}
function I7(a,b,c){var d,e;d=0;e=b&a.bh;while(a.c2.data[e]&&a.c2.data[e]!=b){d=(d+1|0)&a.bh;e=(e+d|0)&a.bh;}a.c2.data[e]=b;a.dJ.data[e]=c;}
function Gb(a,b){var c,d,e;c=b&a.bh;d=0;while(true){e=a.c2.data[c];if(!e)break;if(e==b)return a.dJ.data[c];d=(d+1|0)&a.bh;c=(c+d|0)&a.bh;}return a.gg;}
function Kl(){D.call(this);}
function EH(){O.call(this);}
function WX(){var a=new EH();UL(a);return a;}
function UL(a){return;}
function M3(a){return BA(Bi(BX(),9,13),32);}
function Fj(){O.call(this);}
function Xn(){var a=new Fj();S5(a);return a;}
function S5(a){return;}
function JN(a){return Bi(BX(),48,57);}
function K_(){O.call(this);}
function Xm(){var a=new K_();TU(a);return a;}
function TU(a){return;}
function R9(a){return Bi(BX(),97,122);}
function LM(){O.call(this);}
function Wm(){var a=new LM();Vi(a);return a;}
function Vi(a){return;}
function Tg(a){return Bi(BX(),65,90);}
function LP(){O.call(this);}
function WV(){var a=new LP();P5(a);return a;}
function P5(a){return;}
function SF(a){return Bi(BX(),0,127);}
function FY(){O.call(this);}
function W6(){var a=new FY();RB(a);return a;}
function RB(a){return;}
function Lh(a){return Bi(Bi(BX(),97,122),65,90);}
function E9(){FY.call(this);}
function Wi(){var a=new E9();UV(a);return a;}
function UV(a){return;}
function Mi(a){return Bi(Lh(a),48,57);}
function NI(){O.call(this);}
function Xh(){var a=new NI();OP(a);return a;}
function OP(a){return;}
function Ui(a){return Bi(Bi(Bi(BX(),33,64),91,96),123,126);}
function F0(){E9.call(this);}
function Ww(){var a=new F0();Q3(a);return a;}
function Q3(a){return;}
function JM(a){return Bi(Bi(Bi(Mi(a),33,64),91,96),123,126);}
function Nj(){F0.call(this);}
function Ws(){var a=new Nj();SS(a);return a;}
function SS(a){return;}
function OA(a){return BA(JM(a),32);}
function NN(){O.call(this);}
function WC(){var a=new NN();Sk(a);return a;}
function Sk(a){return;}
function RS(a){return BA(BA(BX(),32),9);}
function LJ(){O.call(this);}
function WW(){var a=new LJ();UG(a);return a;}
function UG(a){return;}
function Ou(a){return BA(Bi(BX(),0,31),127);}
function Lp(){O.call(this);}
function Wy(){var a=new Lp();Qm(a);return a;}
function Qm(a){return;}
function UZ(a){return Bi(Bi(Bi(BX(),48,57),97,102),65,70);}
function LV(){O.call(this);}
function WF(){var a=new LV();PG(a);return a;}
function PG(a){return;}
function Pe(a){var b;b=new Gs;b.h8=a;T(b);b.C=1;return b;}
function NR(){O.call(this);}
function Wk(){var a=new NR();Rs(a);return a;}
function Rs(a){return;}
function Od(a){var b;b=new Gj;b.gF=a;T(b);b.C=1;return b;}
function Le(){O.call(this);}
function W2(){var a=new Le();P9(a);return a;}
function P9(a){return;}
function UT(a){var b;b=new Ju;b.hK=a;T(b);return b;}
function KY(){O.call(this);}
function WT(){var a=new KY();Ox(a);return a;}
function Ox(a){return;}
function RK(a){var b;b=new Jt;b.hs=a;T(b);return b;}
function Md(){O.call(this);}
function Wg(){var a=new Md();Rv(a);return a;}
function Rv(a){return;}
function RP(a){var b;b=new IP;b.hy=a;T(b);Ex(b.B,0,2048);b.C=1;return b;}
function KD(){O.call(this);}
function WP(){var a=new KD();QW(a);return a;}
function QW(a){return;}
function Sm(a){var b;b=new HI;b.gR=a;T(b);b.C=1;return b;}
function J9(){O.call(this);}
function Wh(){var a=new J9();N5(a);return a;}
function N5(a){return;}
function UQ(a){var b;b=new G6;b.hV=a;T(b);b.C=1;return b;}
function Ll(){O.call(this);}
function WE(){var a=new Ll();OQ(a);return a;}
function OQ(a){return;}
function NY(a){var b;b=new IQ;b.h9=a;T(b);return b;}
function LA(){O.call(this);}
function Xb(){var a=new LA();Ux(a);return a;}
function Ux(a){return;}
function VK(a){var b;b=new Gd;b.gx=a;T(b);b.C=1;return b;}
function L8(){O.call(this);}
function WJ(){var a=new L8();OY(a);return a;}
function OY(a){return;}
function Ss(a){var b;b=new Gh;b.gW=a;T(b);b.C=1;return b;}
function JJ(){O.call(this);}
function Wp(){var a=new JJ();Q2(a);return a;}
function Q2(a){return;}
function TE(a){var b;b=new GU;b.hw=a;T(b);b.C=1;return b;}
function Ng(){O.call(this);}
function WU(){var a=new Ng();VW(a);return a;}
function VW(a){return;}
function VO(a){var b;b=new H7;b.hM=a;T(b);b.C=1;return b;}
function Ly(){O.call(this);}
function WO(){var a=new Ly();Pa(a);return a;}
function Pa(a){return;}
function TL(a){var b;b=new Ic;b.hN=a;T(b);return b;}
function MO(){O.call(this);}
function W9(){var a=new MO();QX(a);return a;}
function QX(a){return;}
function QT(a){var b;b=new GT;b.g4=a;T(b);return b;}
function L7(){O.call(this);}
function WD(){var a=new L7();RN(a);return a;}
function RN(a){return;}
function O$(a){var b;b=new F7;b.gE=a;T(b);b.C=1;return b;}
function NQ(){O.call(this);}
function WI(){var a=new NQ();Us(a);return a;}
function Us(a){return;}
function RY(a){var b;b=new Gq;b.h6=a;T(b);b.C=1;return b;}
function ET(){O.call(this);}
function Wu(){var a=new ET();Sy(a);return a;}
function Sy(a){return;}
function NO(a){return BA(Bi(Bi(Bi(BX(),97,122),65,90),48,57),95);}
function Me(){ET.call(this);}
function Wx(){var a=new Me();UB(a);return a;}
function UB(a){return;}
function OT(a){var b;b=Cy(NO(a),1);b.C=1;return b;}
function Np(){EH.call(this);}
function Wd(){var a=new Np();Ur(a);return a;}
function Ur(a){return;}
function PW(a){var b;b=Cy(M3(a),1);b.C=1;return b;}
function L4(){Fj.call(this);}
function W3(){var a=new L4();Vx(a);return a;}
function Vx(a){return;}
function T7(a){var b;b=Cy(JN(a),1);b.C=1;return b;}
function Lt(){var a=this;O.call(a);a.gb=0;a.gu=0;}
function H(a,b){var c=new Lt();UN(c,a,b);return c;}
function UN(a,b,c){a.gb=b;a.gu=c;}
function V_(a){return Bi(BX(),a.gb,a.gu);}
function LY(){O.call(this);}
function Wz(){var a=new LY();U$(a);return a;}
function U$(a){return;}
function UC(a){return Bi(Bi(BX(),65279,65279),65520,65533);}
function Na(){var a=this;O.call(a);a.ec=0;a.dy=0;a.fF=0;}
function Bb(a,b){var c=new Na();Rm(c,a,b);return c;}
function Xu(a,b,c){var d=new Na();UP(d,a,b,c);return d;}
function Rm(a,b,c){a.dy=c;a.ec=b;}
function UP(a,b,c,d){a.fF=d;a.dy=c;a.ec=b;}
function S$(a){var b;b=Xg(a.ec);if(a.fF)Ex(b.B,0,2048);b.C=a.dy;return b;}
function Nk(){var a=this;O.call(a);a.eb=0;a.dO=0;a.e7=0;}
function Ev(a,b){var c=new Nk();St(c,a,b);return c;}
function Xe(a,b,c){var d=new Nk();N1(d,a,b,c);return d;}
function St(a,b,c){a.dO=c;a.eb=b;}
function N1(a,b,c,d){a.e7=d;a.dO=c;a.eb=b;}
function N0(a){var b;b=new Jk;KA(b,a.eb);if(a.e7)Ex(b.B,0,2048);b.C=a.dO;return b;}
function HE(){DD.call(this);this.gj=null;}
function E1(a){var b,c;b=new Hw;c=a.gj;b.cF=c;b.ff=c.cx;b.b$=null;return b;}
function Ff(){}
function GP(){var a=this;D.call(a);a.dn=0;a.f0=0;a.f3=0;a.eZ=0;a.cG=null;}
function CT(a){return a.dn>=a.f3?0:1;}
function CM(a){var b,c;if(a.f0<a.cG.bR){b=new Fx;S(b);I(b);}a.eZ=a.dn;b=a.cG;c=a.dn;a.dn=c+1|0;return b.e1(c);}
function ID(){var a=this;M.call(a);a.fi=null;a.hD=null;}
function SK(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.R^B8(a.fi,c):0;}
function IC(){var a=this;M.call(a);a.fG=null;a.fV=null;a.g8=null;}
function OG(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.R^B8(a.fG,c):0;return a.fV.g(b)&&!d?1:0;}
function Hi(){var a=this;M.call(a);a.di=null;a.gI=null;}
function VY(a,b){return a.E^B8(a.di,b);}
function TN(a){var b,c;b=new L;N(b);c=DT(a.di,0);while(c>=0){C1(b,Dh(c));Be(b,124);c=DT(a.di,c+1|0);}if(b.l>0)Iu(b,b.l-1|0);return K(b);}
function Ho(){var a=this;M.call(a);a.gi=null;a.gD=null;}
function RJ(a,b){return a.gi.g(b);}
function Hm(){var a=this;M.call(a);a.dB=0;a.fC=null;a.eq=null;}
function Sn(a,b){return !(a.dB^B8(a.eq.y,b))&&!(a.dB^a.eq.bC^a.fC.g(b))?0:1;}
function Hn(){var a=this;M.call(a);a.dK=0;a.fL=null;a.dW=null;}
function N7(a,b){return !(a.dK^B8(a.dW.y,b))&&!(a.dK^a.dW.bC^a.fL.g(b))?1:0;}
function Hs(){var a=this;M.call(a);a.f9=0;a.fO=null;a.fJ=null;a.g$=null;}
function Sp(a,b){return a.f9^(!a.fO.g(b)&&!a.fJ.g(b)?0:1);}
function Ht(){var a=this;M.call(a);a.gq=0;a.gf=null;a.f4=null;a.hZ=null;}
function NT(a,b){return a.gq^(!a.gf.g(b)&&!a.f4.g(b)?0:1)?0:1;}
function Hq(){var a=this;M.call(a);a.fT=null;a.h5=null;}
function TV(a,b){return BS(a.fT,b);}
function Hr(){var a=this;M.call(a);a.fS=null;a.hm=null;}
function N9(a,b){return BS(a.fS,b)?0:1;}
function Hu(){var a=this;M.call(a);a.eS=null;a.gh=0;a.fz=null;}
function TZ(a,b){return !BS(a.eS,b)&&!(a.gh^B8(a.fz.y,b))?0:1;}
function Hv(){var a=this;M.call(a);a.e9=null;a.fg=0;a.e0=null;}
function RD(a,b){return !BS(a.e9,b)&&!(a.fg^B8(a.e0.y,b))?1:0;}
function Hh(){var a=this;M.call(a);a.fw=0;a.fK=null;a.f2=null;a.gK=null;}
function Wc(a,b){return !(a.fw^a.fK.g(b))&&!BS(a.f2,b)?0:1;}
function HO(){var a=this;M.call(a);a.f1=0;a.eY=null;a.e8=null;a.hh=null;}
function T4(a,b){return !(a.f1^a.eY.g(b))&&!BS(a.e8,b)?1:0;}
function Hf(){var a=this;M.call(a);a.fI=null;a.hq=null;}
function RC(a,b){return BS(a.fI,b);}
function Hg(){var a=this;M.call(a);a.fM=null;a.hW=null;}
function To(a,b){return BS(a.fM,b)?0:1;}
function Hl(){var a=this;M.call(a);a.f6=null;a.e4=0;a.gt=null;}
function Vh(a,b){return BS(a.f6,b)&&a.e4^B8(a.gt.y,b)?1:0;}
function He(){var a=this;M.call(a);a.fq=null;a.gs=0;a.e2=null;}
function Tn(a,b){return BS(a.fq,b)&&a.gs^B8(a.e2.y,b)?0:1;}
function Hj(){var a=this;M.call(a);a.fB=0;a.fh=null;a.go=null;a.g7=null;}
function Qj(a,b){return a.fB^a.fh.g(b)&&BS(a.go,b)?1:0;}
function Hk(){var a=this;M.call(a);a.fl=0;a.eV=null;a.fv=null;a.ht=null;}
function QC(a,b){return a.fl^a.eV.g(b)&&BS(a.fv,b)?0:1;}
function HU(){var a=this;D.call(a);a.bm=null;a.cX=null;a.eH=null;a.dx=null;a.fE=0;a.c5=0;a.bb=0;a.n=0;a.bq=0;a.cA=0;a.bX=0;a.bo=0;a.hr=0;a.bT=0;a.b6=0;}
function Ba(a,b,c){a.cX.data[b]=c;}
function B5(a,b){return a.cX.data[b];}
function EI(a){return FS(a,0);}
function FS(a,b){Jj(a,b);return a.bm.data[(b*2|0)+1|0];}
function B_(a,b,c){a.bm.data[b*2|0]=c;}
function E0(a,b,c){a.bm.data[(b*2|0)+1|0]=c;}
function C4(a,b){return a.bm.data[b*2|0];}
function Eg(a,b){return a.bm.data[(b*2|0)+1|0];}
function Kx(a,b){if(Eh(a,b)<0)return null;return BR(a.dx,Eh(a,b),FS(a,b));}
function Nt(a,b){var c,d;c=C4(a,b);d=Eg(a,b);if((d|c|(d-c|0))>=0&&d<=J(a.dx))return BR(a.dx,c,d);return null;}
function Lb(a){return Eh(a,0);}
function Eh(a,b){Jj(a,b);return a.bm.data[b*2|0];}
function Ga(a){if(a.bm.data[0]==(-1)){a.bm.data[0]=a.bq;a.bm.data[1]=a.bq;}a.bT=EI(a);}
function Go(a,b){return a.eH.data[b];}
function Cu(a,b,c){a.eH.data[b]=c;}
function Jj(a,b){var c;if(!a.c5){c=new D2;S(c);I(c);}if(b>=0&&b<a.fE)return;c=new Bn;Bd(c,GQ(b));I(c);}
function MU(a){a.c5=1;}
function Uv(a){return a.c5;}
function FP(a,b,c,d){a.c5=0;a.b6=2;E2(a.bm,(-1));E2(a.cX,(-1));if(b!==null)a.dx=b;if(c>=0){a.bb=c;a.n=d;}a.bq=a.bb;}
function H2(a){FP(a,null,(-1),(-1));}
function H_(a,b){a.bq=b;if(a.bT>=0)b=a.bT;a.bT=b;}
function QA(a){return a.bb;}
function Ob(a){return a.n;}
function Sq(a,b){a.b6=b;}
function Tu(a){return a.b6;}
function Ul(a){return a.bX;}
function OB(a){return a.cA;}
function Pl(a){return a.bT;}
function Fg(){var a=this;D.call(a);a.ck=0;a.ff=0;a.b$=null;a.cr=null;a.fU=null;a.cF=null;}
function D3(a){if(a.b$!==null)return 1;while(a.ck<a.cF.V.data.length){if(a.cF.V.data[a.ck]!==null)return 1;a.ck=a.ck+1|0;}return 0;}
function LI(a){var b;if(a.ff==a.cF.cx)return;b=new Fx;S(b);I(b);}
function KX(a){var b,c,d;LI(a);if(!D3(a)){b=new Jz;S(b);I(b);}if(a.b$===null){c=a.cF.V.data;d=a.ck;a.ck=d+1|0;a.cr=c[d];a.b$=a.cr.b3;a.fU=null;}else{if(a.cr!==null)a.fU=a.cr;a.cr=a.b$;a.b$=a.b$.b3;}}
function Hw(){Fg.call(this);}
function EO(a){KX(a);return a.cr;}
function Ni(a){return EO(a);}
function Gw(){DR.call(this);}
function Tb(a,b,c,d){var e,f,g;e=0;f=d.n;a:{while(true){if(b>f){b=e;break a;}g=C4(d,a.G);B_(d,a.G,b);e=a.bd.a(b,c,d);if(e>=0)break;B_(d,a.G,g);b=b+1|0;}}return b;}
function VX(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=C4(e,a.G);B_(e,a.G,c);f=a.bd.a(c,d,e);if(f>=0)break;B_(e,a.G,g);c=c+(-1)|0;}}return c;}
function Ri(a){return null;}
function Fx(){Bc.call(this);}
function Gs(){M.call(this);this.h8=null;}
function Ud(a,b){return Bw(b)!=2?0:1;}
function Gj(){M.call(this);this.gF=null;}
function PR(a,b){return Bw(b)!=1?0:1;}
function Ju(){M.call(this);this.hK=null;}
function Ph(a,b){return I2(b);}
function Jt(){M.call(this);this.hs=null;}
function S9(a,b){return 0;}
function IP(){M.call(this);this.hy=null;}
function U4(a,b){return !Bw(b)?0:1;}
function HI(){M.call(this);this.gR=null;}
function Uh(a,b){return Bw(b)!=9?0:1;}
function G6(){M.call(this);this.hV=null;}
function PP(a,b){return DL(b);}
function IQ(){M.call(this);this.h9=null;}
function RT(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Gd(){M.call(this);this.gx=null;}
function VE(a,b){a:{b:{switch(Bw(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=DL(b);}return b;}
function Gh(){M.call(this);this.gW=null;}
function R7(a,b){a:{b:{switch(Bw(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=DL(b);}return b;}
function GU(){M.call(this);this.hw=null;}
function Uz(a,b){a:{switch(Bw(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function H7(){M.call(this);this.hM=null;}
function Or(a,b){return EX(b);}
function Ic(){M.call(this);this.hN=null;}
function Q8(a,b){return Fk(b);}
function GT(){M.call(this);this.g4=null;}
function T0(a,b){return Bw(b)!=3?0:1;}
function F7(){M.call(this);this.gE=null;}
function Va(a,b){a:{b:{switch(Bw(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=DL(b);}return b;}
function Gq(){M.call(this);this.h6=null;}
function RR(a,b){a:{b:{switch(Bw(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=DL(b);}return b;}
function FN(){M.call(this);this.dM=0;}
function Xg(a){var b=new FN();KA(b,a);return b;}
function KA(a,b){T(a);a.dM=b;}
function PS(a,b){return a.E^(a.dM!=Bw(b&65535)?0:1);}
function Jk(){FN.call(this);}
function SO(a,b){return a.E^(!(a.dM>>Bw(b&65535)&1)?0:1);}
function J8(){var a=this;D.call(a);a.ft=0;a.fW=0;a.fA=null;}
function Wf(a,b){var c=new J8();Sa(c,a,b);return c;}
function Sa(a,b,c){a.fA=b;a.fW=c;a.ft=a.fW;}
function Wa(a){return Gu(a.fA,a.ft);}
function J0(){D.call(this);}
function V2(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;h=f.data;i=$rt_createIntArray(e+1|0);j=$rt_createIntArray(g+1|0);k=g-1|0;l=CX(h[k]);if(l){Gr(j,f,0,l);Gr(i,d,0,l);}else{CB(d,0,i,0,e);CB(f,0,j,0,g);}h=i.data;d=j.data;m=d[k];n=c-1|0;o=Long_and(Long_fromInt(m),new Long(4294967295, 0));p=g-2|0;q=Long_fromInt(m>>>1);k=m&1;r=Long_shl(o,1);while(n>=0){a:{if(h[e]==m)s=(-1);else{t=Long_add(Long_shl(Long_and(Long_fromInt(h[e]),new Long(4294967295, 0)),32),Long_and(Long_fromInt(h[e-1|0]),new Long(4294967295, 0)));if
(Long_ge(t,Long_ZERO)){u=Long_div(t,o);v=Long_rem(t,o);}else{v=Long_shru(t,1);u=Long_div(v,q);v=Long_add(Long_shl(Long_rem(v,q),1),Long_and(t,Long_fromInt(1)));if(k){if(Long_le(u,v))v=Long_sub(v,u);else if(Long_gt(Long_sub(u,v),o)){v=Long_add(v,Long_sub(r,u));u=Long_sub(u,Long_fromInt(2));}else{v=Long_add(v,Long_sub(o,u));u=Long_sub(u,Long_fromInt(1));}}}v=Long_or(Long_shl(v,32),Long_and(u,new Long(4294967295, 0)));s=v.lo;w=v.hi;if(s){x=0;s=s+1|0;while(true){s=s+(-1)|0;if(x)break;v=Long_mul(Long_and(Long_fromInt(s),
new Long(4294967295, 0)),Long_and(Long_fromInt(d[p]),new Long(4294967295, 0)));u=Long_fromInt(w);y=Long_add(Long_shl(u,32),Long_and(Long_fromInt(h[e-2|0]),new Long(4294967295, 0)));u=Long_add(Long_and(u,new Long(4294967295, 0)),o);if(CX(u.hi)>=32)w=u.lo;else x=1;if(Long_le(Long_xor(v,new Long(0, 2147483648)),Long_xor(y,new Long(0, 2147483648))))break a;}}}}if(s){w=e-g|0;v=Long_ZERO;y=Long_ZERO;z=0;while(z<g){t=CP(d[z],s,v.lo,0);x=w+z|0;v=Long_add(Long_sub(Long_and(Long_fromInt(h[x]),new Long(4294967295, 0)),
Long_and(t,new Long(4294967295, 0))),y);h[x]=v.lo;y=Long_shr(v,32);v=Long_shru(t,32);z=z+1|0;}c=w+g|0;v=Long_add(Long_sub(Long_and(Long_fromInt(h[c]),new Long(4294967295, 0)),v),y);h[c]=v.lo;if(v.hi){s=s+(-1)|0;y=Long_ZERO;ba=0;while(ba<g){z=w+ba|0;v=Long_add(y,Long_add(Long_and(Long_fromInt(h[z]),new Long(4294967295, 0)),Long_and(Long_fromInt(d[ba]),new Long(4294967295, 0))));h[z]=v.lo;y=Long_shru(v,32);ba=ba+1|0;}}}if(b!==null)b.data[n]=s;e=e+(-1)|0;n=n+(-1)|0;}if(l){M8(j,g,i,0,l);return j;}CB(i,0,j,0,g);return i;}
function KR(){D.call(this);}
function Jz(){Bc.call(this);}
$rt_packages([-1,"java",0,"util",1,"regex",0,"nio",3,"charset",0,"math",0,"lang",-1,"org",7,"teavm",8,"classlib",9,"impl",10,"unicode"]);
$rt_metadata([D,"Object",6,0,[],0,3,0,["r",function(){return QK(this);}],Lg,0,D,[],0,3,0,0,Gx,0,D,[],3,3,0,0,IF,0,D,[Gx],0,3,0,0,Lm,0,D,[],4,0,0,0,K4,0,D,[],4,3,0,0,Z,0,D,[],3,3,0,0,BW,0,D,[],3,3,0,0,Ey,0,D,[],3,3,0,0,Q,"String",6,D,[Z,BW,Ey],0,3,0,["r",function(){return QJ(this);}],DS,0,D,[],0,3,0,["dE",function(){return R3(this);}],DN,0,DS,[],0,3,0,0,DV,0,DN,[],0,3,0,0,MQ,0,DV,[],0,3,0,0,DI,0,D,[Z,Ey],0,0,0,["ct",function(b){GZ(this,b);},"r",function(){return K(this);}],Ew,0,D,[],3,3,0,0,L,0,DI,[Ew],0,3,0,
["dX",function(b,c,d,e){return VD(this,b,c,d,e);},"eu",function(b,c,d){return Sh(this,b,c,d);},"r",function(){return BN(this);},"ct",function(b){VM(this,b);},"eo",function(b,c){return N4(this,b,c);},"ed",function(b,c){return NJ(this,b,c);}],B1,0,D,[Z],1,3,0,0,El,0,B1,[BW],0,3,0,0,DE,0,DV,[],0,3,0,0,KE,0,DE,[],0,3,0,0,Ms,0,DE,[],0,3,0,0,BJ,0,DS,[],0,3,0,0,Bc,0,BJ,[],0,3,0,0,EG,0,D,[],3,3,0,0,GE,0,D,[EG],3,3,0,0,F$,0,D,[GE],0,3,0,["iB",function(b){return Qf(this,b);}],LE,0,D,[],4,3,0,0,Ez,0,D,[],3,3,0,0,GV,0,
D,[Ez],0,3,0,0,Cs,0,D,[BW],0,3,0,0,Bn,"IndexOutOfBoundsException",6,Bc,[],0,3,0,0,DP,"StringIndexOutOfBoundsException",6,Bn,[],0,3,0,0,E3,0,D,[],4,3,0,0,JR,0,D,[],0,3,0,0,Jm,0,D,[],3,3,0,0,GD,0,D,[Jm],3,3,0,0,Hz,0,D,[],3,3,0,0,CN,0,D,[GD,Hz],1,3,0,0,EU,0,CN,[],0,3,0,0,Mp,0,EU,[],0,3,0,0,Jb,0,CN,[],0,0,0,["e$",function(b){On(this,b);}],Bp,0,D,[Z],0,3,0,0,ES,0,D,[BW],1,3,0,0,Jw,0,ES,[],0,3,0,0,Bx,"IllegalArgumentException",6,Bc,[],0,3,0,0,LD,"IllegalCharsetNameException",4,Bx,[],0,3,0,0,CL,0,D,[],3,3,0,0,Ij,"CloneNotSupportedException",
6,BJ,[],0,3,0,0,Mo,0,Bp,[Z],0,3,0,0]);
$rt_metadata([H0,0,CN,[],0,0,0,["e$",function(b){T9(this,b);}],DF,0,D,[],1,3,0,0,JC,0,D,[],3,3,0,0,EQ,0,DF,[BW,Ew,Ey,JC],1,3,0,0,M4,0,D,[],4,3,0,0,Fa,0,DF,[BW],1,3,0,0,Ej,0,D,[],0,3,0,0,BO,0,D,[],0,3,0,0,Fo,0,EQ,[],1,0,0,0,I6,0,Fo,[],0,0,0,0,EF,0,D,[],1,3,0,0,Ft,0,D,[],0,3,0,0,IU,0,Fa,[],0,0,0,0,Gn,0,D,[],3,3,0,0,DA,0,D,[Gn],1,3,0,0,No,0,DA,[CL,Z],0,3,0,0,Iv,0,D,[],3,3,0,0,Ea,0,D,[Iv],3,3,0,0,Do,0,D,[Ea],1,3,0,["r",function(){return Qz(this);}],Gm,0,D,[Ea],3,3,0,0,CJ,0,Do,[Gm],1,3,0,0,Eb,0,D,[],3,3,0,0,GX,"ArrayList",
1,CJ,[CL,Z,Eb],0,3,0,["e1",function(b){return BB(this,b);},"db",function(){return PX(this);}],Gc,0,D,[Z],0,3,0,0,FH,0,D,[],4,3,0,0,G$,0,Bp,[Z],0,3,0,0,X,0,D,[Z],0,3,0,["x",function(){return M7(this);},"r",function(){return Lx(this);}],JH,"SyntaxTree$Print",-1,Bp,[Z],0,3,0,["bz",function(){JY(this);}],GN,"SyntaxTree$ExecuteValue",-1,Bp,[Z],0,3,0,["bz",function(){UH(this);}],FX,0,EF,[],1,3,0,0,Ia,0,FX,[],0,3,0,0,Hc,0,BJ,[],0,3,0,0,F5,0,D,[],3,3,0,0,FO,0,D,[F5,CL],0,0,0,0,Dp,0,FO,[],0,0,0,0,Bk,"SyntaxTree$Number",
-1,X,[],0,3,0,0,BC,"BigDecimal",5,B1,[BW,Z],0,3,Ds,["r",function(){return P0(this);}],By,"SyntaxTree$Text",-1,X,[],0,3,0,0,IR,"SyntaxTree$PrintFunction",-1,X,[Z],0,3,0,["x",function(){return Tq(this);}],BP,"SyntaxTree$Null",-1,X,[],0,3,0,0,CC,"NullPointerException",6,Bc,[],0,3,0,0,Br,"NumberFormatException",6,Bx,[],0,3,0,0,Bz,0,B1,[BW,Z],0,3,0,0,Jx,0,B1,[BW],0,3,0,0,Dn,0,D,[],0,0,Cw,0,E8,0,D,[],0,0,0,0,LT,0,D,[],0,0,0,0,LC,0,D,[],4,0,0,0,K3,0,D,[],4,3,0,0,HV,0,D,[],0,3,0,0]);
$rt_metadata([ML,0,D,[],4,3,0,0,Lj,0,D,[],0,0,0,0,KG,0,D,[],0,3,0,0,L6,0,D,[EG],1,3,0,0,Fb,0,X,[Z],0,3,0,0,EV,"SyntaxTree$CallFunction",-1,X,[Z],0,3,0,["x",function(){return Ub(this);}],BD,0,X,[Z],0,3,0,0,Kk,0,D,[],4,3,0,0,JE,"NegativeArraySizeException",6,Bc,[],0,3,0,0,Eu,"ArrayStoreException",6,Bc,[],0,3,0,0,D2,"IllegalStateException",6,BJ,[],0,3,0,0,GY,0,DN,[],0,3,0,0,En,"UnsupportedOperationException",6,Bc,[],0,3,0,0,GS,0,D,[],0,3,0,0,Js,"ReadOnlyBufferException",3,En,[],0,3,0,0,IS,"BufferOverflowException",
3,Bc,[],0,3,0,0,IB,"BufferUnderflowException",3,Bc,[],0,3,0,0,BE,"SyntaxTree$Boolean",-1,X,[],0,3,0,["r",function(){return O2(this);}],BI,"SyntaxTree$List",-1,X,[],0,3,0,["r",function(){return Sd(this);}],Ln,0,D,[],0,3,0,0,Nq,0,X,[Z],0,3,0,0,Ki,0,D,[Z],0,3,0,0,K1,0,X,[Z],0,3,0,0,EC,"Boolean",6,D,[Z,BW],0,3,0,["r",function(){return Pk(this);}],Fm,0,B1,[BW],0,3,0,0,GG,"UnicodeHelper$Range",11,D,[],0,3,0,0,NA,0,Bp,[Z],0,3,0,["bz",function(){Rl(this);}],FZ,0,Bp,[Z],0,3,0,["bz",function(){Oc(this);}],G3,0,Bp,[Z],
0,3,0,["bz",function(){OO(this);}],I0,0,D,[Z],4,3,0,0,De,0,D,[],0,3,0,0,G9,0,D,[],0,3,0,0,Dm,"ArithmeticException",6,Bc,[],0,3,0,0,Fy,0,D,[],3,3,0,0,F6,0,D,[Fy],4,3,0,0,W,0,D,[],1,0,0,["ba",function(b,c,d){return Ei(this,b,c,d);},"Z",function(b,c,d,e){return Er(this,b,c,d,e);},"cT",function(){return QB(this);},"r",function(){return RL(this);},"D",function(b){TP(this,b);},"S",function(b){return TO(this,b);},"b2",function(){return U5(this);},"bJ",function(){EK(this);}],In,0,D,[Ez],0,3,0,0,Im,0,D,[Ez],0,3,0,0,BL,
"FSet",2,W,[],0,0,0,["a",function(b,c,d){return PE(this,b,c,d);},"j",function(){return Up(this);},"z",function(b){return Qi(this,b);}],Dr,0,D,[],0,0,0,0,MJ,"PatternSyntaxException",2,Bx,[],0,3,0,["dE",function(){return UY(this);}],HK,0,D,[Ea],3,3,0,0,DD,0,Do,[HK],1,3,0,0,If,0,DD,[],4,0,0,0,Ie,0,DA,[],4,0,0,0,Ig,0,CJ,[],4,0,0,0,GF,0,CJ,[Eb],0,0,0,["e1",function(b){return NV(this,b);},"db",function(){return PD(this);}],Ji,"NonCapFSet",2,BL,[],0,0,0,["a",function(b,c,d){return OS(this,b,c,d);},"j",function(){return RH(this);
},"z",function(b){return R$(this,b);}],Jf,"AheadFSet",2,BL,[],0,0,0,["a",function(b,c,d){return Rq(this,b,c,d);},"j",function(){return Vg(this);}],Ik,"BehindFSet",2,BL,[],0,0,0,["a",function(b,c,d){return Qw(this,b,c,d);},"j",function(){return TG(this);}]]);
$rt_metadata([Gl,"AtomicFSet",2,BL,[],0,0,0,["a",function(b,c,d){return O5(this,b,c,d);},"j",function(){return SD(this);},"z",function(b){return P8(this,b);}],CW,"FinalSet",2,BL,[],0,0,0,["a",function(b,c,d){return Ug(this,b,c,d);},"j",function(){return QR(this);}],Bl,0,W,[],1,0,0,["a",function(b,c,d){return VI(this,b,c,d);},"T",function(){return S1(this);},"z",function(b){return Vb(this,b);}],L$,"EmptySet",2,Bl,[],0,0,0,["M",function(b,c){return Su(this,b,c);},"ba",function(b,c,d){return SW(this,b,c,d);},"Z",
function(b,c,d,e){return Rf(this,b,c,d,e);},"j",function(){return Uq(this);},"z",function(b){return OZ(this,b);}],Bg,"JointSet",2,W,[],0,0,0,["a",function(b,c,d){return TT(this,b,c,d);},"D",function(b){P2(this,b);},"j",function(){return Vn(this);},"S",function(b){return V7(this,b);},"z",function(b){return Q5(this,b);},"bJ",function(){Q$(this);}],EB,"NonCapJointSet",2,Bg,[],0,0,0,["a",function(b,c,d){return PL(this,b,c,d);},"j",function(){return NZ(this);},"z",function(b){return RF(this,b);}],Cf,"AtomicJointSet",
2,EB,[],0,0,0,["a",function(b,c,d){return R5(this,b,c,d);},"D",function(b){Ra(this,b);},"j",function(){return OW(this);}],Gf,"PositiveLookAhead",2,Cf,[],0,0,0,["a",function(b,c,d){return PV(this,b,c,d);},"z",function(b){return TX(this,b);},"j",function(){return U3(this);}],Ir,"NegativeLookAhead",2,Cf,[],0,0,0,["a",function(b,c,d){return Qa(this,b,c,d);},"z",function(b){return Ta(this,b);},"j",function(){return TI(this);}],I3,"PositiveLookBehind",2,Cf,[],0,0,0,["a",function(b,c,d){return Q4(this,b,c,d);},"z",
function(b){return V4(this,b);},"j",function(){return Pu(this);}],GO,"NegativeLookBehind",2,Cf,[],0,0,0,["a",function(b,c,d){return Ok(this,b,c,d);},"z",function(b){return RU(this,b);},"j",function(){return Qx(this);}],DR,"SingleSet",2,Bg,[],0,0,0,["a",function(b,c,d){return OI(this,b,c,d);},"ba",function(b,c,d){return N6(this,b,c,d);},"Z",function(b,c,d,e){return Sc(this,b,c,d,e);},"S",function(b){return V0(this,b);},"b2",function(){return P6(this);},"bJ",function(){U8(this);}],Dw,0,D,[],1,0,0,0,M,0,Dw,[],
1,0,0,["br",function(){return Qe(this);},"bS",function(){return Pd(this);},"c9",function(){return ST(this);},"cN",function(){return U0(this);}],Lf,"CharClass",2,M,[],0,0,0,["g",function(b){return BS(this,b);},"br",function(){return BQ(this);},"bS",function(){return SL(this);},"c9",function(){return Ty(this);},"r",function(){return O6(this);},"cN",function(){return S3(this);}],ER,"MissingResourceException",1,Bc,[],0,3,0,0,Ck,0,W,[],1,0,0,["S",function(b){return Se(this,b);},"z",function(b){return T8(this,b);
},"bJ",function(){Oy(this);}],BT,"LeafQuantifierSet",2,Ck,[],0,0,0,["a",function(b,c,d){return Om(this,b,c,d);},"j",function(){return Q6(this);}],CV,"CompositeQuantifierSet",2,BT,[],0,0,0,["a",function(b,c,d){return PH(this,b,c,d);},"j",function(){return Qh(this);}],BM,"GroupQuantifierSet",2,Ck,[],0,0,0,["a",function(b,c,d){return OH(this,b,c,d);},"j",function(){return UJ(this);}],CD,"AltQuantifierSet",2,BT,[],0,0,0,["a",function(b,c,d){return Oa(this,b,c,d);},"D",function(b){V8(this,b);}],IE,"UnifiedQuantifierSet",
2,BT,[],0,0,0,["a",function(b,c,d){return VA(this,b,c,d);},"ba",function(b,c,d){return O3(this,b,c,d);}],Gt,"Quantifier",2,Dw,[CL],0,0,0,["r",function(){return GI(this);}],G8,"FSet$PossessiveFSet",2,W,[],0,0,0,["a",function(b,c,d){return Vy(this,b,c,d);},"j",function(){return PT(this);},"z",function(b){return P1(this,b);}],IW,0,D,[CL,Z],0,3,0,0,Gk,"LowHighSurrogateRangeSet",2,Bg,[],0,0,0,["j",function(){return Qc(this);}],Iz,"CompositeRangeSet",2,Bg,[],0,0,0,["a",function(b,c,d){return Pz(this,b,c,d);},"D",
function(b){PJ(this,b);},"j",function(){return QD(this);},"z",function(b){return QG(this,b);},"S",function(b){return Qd(this,b);}],Ce,"SupplRangeSet",2,Bg,[],0,0,0,["a",function(b,c,d){return SE(this,b,c,d);},"j",function(){return UR(this);},"g",function(b){return Ti(this,b);},"S",function(b){return Pq(this,b);},"D",function(b){SN(this,b);},"z",function(b){return SP(this,b);}],EP,"UCISupplRangeSet",2,Ce,[],0,0,0,["g",function(b){return Vc(this,b);},"j",function(){return Vj(this);}],K7,"UCIRangeSet",2,Bl,[],
0,0,0,["M",function(b,c){return VB(this,b,c);},"j",function(){return Qk(this);}],Cx,"RangeSet",2,Bl,[],0,0,0,["M",function(b,c){return F2(this,b,c);},"j",function(){return VJ(this);},"S",function(b){return P3(this,b);}],Hx,"HangulDecomposedCharSet",2,Bg,[],0,0,0,["D",function(b){N$(this,b);},"j",function(){return RX(this);},"a",function(b,c,d){return N_(this,b,c,d);},"S",function(b){return Qr(this,b);},"z",function(b){return TH(this,b);}],Cv,"CharSet",2,Bl,[],0,0,0,["T",function(){return Vo(this);},"M",function(b,
c){return T_(this,b,c);},"ba",function(b,c,d){return SB(this,b,c,d);},"Z",function(b,c,d,e){return Vu(this,b,c,d,e);},"j",function(){return T2(this);},"S",function(b){return Tt(this,b);}],M1,"UCICharSet",2,Bl,[],0,0,0,["M",function(b,c){return NX(this,b,c);},"j",function(){return PI(this);}],JV,"CICharSet",2,Bl,[],0,0,0,["M",function(b,c){return Oz(this,b,c);},"j",function(){return Uw(this);}],C_,"DecomposedCharSet",2,Bg,[],0,0,0,["D",function(b){U7(this,b);},"a",function(b,c,d){return PK(this,b,c,d);},"j",
function(){return Px(this);},"S",function(b){return VC(this,b);},"z",function(b){return Re(this,b);}],I_,"UCIDecomposedCharSet",2,C_,[],0,0,0,0,GW,"CIDecomposedCharSet",2,C_,[],0,0,0,0,JF,"PossessiveGroupQuantifierSet",2,BM,[],0,0,0,["a",function(b,c,d){return Ry(this,b,c,d);}],Ih,"PosPlusGroupQuantifierSet",2,BM,[],0,0,0,["a",function(b,c,d){return ON(this,b,c,d);}],Di,"AltGroupQuantifierSet",2,BM,[],0,0,0,["a",function(b,c,d){return SH(this,b,c,d);},"D",function(b){Un(this,b);}],HW,"PosAltGroupQuantifierSet",
2,Di,[],0,0,0,["a",function(b,c,d){return Vq(this,b,c,d);},"D",function(b){Pb(this,b);}],C7,"CompositeGroupQuantifierSet",2,BM,[],0,0,0,["a",function(b,c,d){return VZ(this,b,c,d);},"j",function(){return Uu(this);}],Gy,"PosCompositeGroupQuantifierSet",2,C7,[],0,0,0,["a",function(b,c,d){return UK(this,b,c,d);}],Jc,"ReluctantGroupQuantifierSet",2,BM,[],0,0,0,["a",function(b,c,d){return Vm(this,b,c,d);}],IJ,"RelAltGroupQuantifierSet",2,Di,[],0,0,0,["a",function(b,c,d){return QH(this,b,c,d);}],HH,"RelCompositeGroupQuantifierSet",
2,C7,[],0,0,0,["a",function(b,c,d){return O7(this,b,c,d);}],Jd,"DotAllQuantifierSet",2,Ck,[],0,0,0,["a",function(b,c,d){return VL(this,b,c,d);},"ba",function(b,c,d){return SV(this,b,c,d);},"j",function(){return QM(this);}],Hd,"DotQuantifierSet",2,Ck,[],0,0,0,["a",function(b,c,d){return P7(this,b,c,d);},"ba",function(b,c,d){return Og(this,b,c,d);},"j",function(){return R6(this);}],CR,0,D,[],1,0,0,0]);
$rt_metadata([JG,"PossessiveQuantifierSet",2,BT,[],0,0,0,["a",function(b,c,d){return O_(this,b,c,d);}],IA,"PossessiveAltQuantifierSet",2,CD,[],0,0,0,["a",function(b,c,d){return OK(this,b,c,d);}],HM,"PossessiveCompositeQuantifierSet",2,CV,[],0,0,0,["a",function(b,c,d){return Sf(this,b,c,d);}],IG,"ReluctantQuantifierSet",2,BT,[],0,0,0,["a",function(b,c,d){return PY(this,b,c,d);}],G1,"ReluctantAltQuantifierSet",2,CD,[],0,0,0,["a",function(b,c,d){return Pj(this,b,c,d);}],I4,"ReluctantCompositeQuantifierSet",2,CV,
[],0,0,0,["a",function(b,c,d){return Sx(this,b,c,d);}],M5,"SOLSet",2,W,[],4,0,0,["a",function(b,c,d){return V3(this,b,c,d);},"z",function(b){return UX(this,b);},"j",function(){return OL(this);}],LQ,"WordBoundary",2,W,[],0,0,0,["a",function(b,c,d){return P_(this,b,c,d);},"z",function(b){return Qn(this,b);},"j",function(){return VV(this);}],KW,"PreviousMatch",2,W,[],0,0,0,["a",function(b,c,d){return Ve(this,b,c,d);},"z",function(b){return VT(this,b);},"j",function(){return PN(this);}],IZ,"EOLSet",2,W,[],4,0,0,
["a",function(b,c,d){return QZ(this,b,c,d);},"z",function(b){return Rj(this,b);},"j",function(){return Oh(this);}],Mz,"EOISet",2,W,[],0,0,0,["a",function(b,c,d){return PF(this,b,c,d);},"z",function(b){return NW(this,b);},"j",function(){return TS(this);}],Km,"MultiLineSOLSet",2,W,[],0,0,0,["a",function(b,c,d){return Q7(this,b,c,d);},"z",function(b){return TC(this,b);},"j",function(){return Pv(this);}],Mu,"DotAllSet",2,Bg,[],0,0,0,["a",function(b,c,d){return Vt(this,b,c,d);},"j",function(){return Sb(this);},"D",
function(b){Qv(this,b);},"cT",function(){return Pi(this);},"z",function(b){return Qs(this,b);}],Lc,"DotSet",2,Bg,[],4,0,0,["a",function(b,c,d){return Py(this,b,c,d);},"j",function(){return Rw(this);},"D",function(b){R4(this,b);},"cT",function(){return NS(this);},"z",function(b){return VH(this,b);}],Mk,"UEOLSet",2,W,[],4,0,0,["a",function(b,c,d){return VF(this,b,c,d);},"z",function(b){return Ts(this,b);},"j",function(){return NU(this);}],J3,"UMultiLineEOLSet",2,W,[],0,0,0,["a",function(b,c,d){return PC(this,
b,c,d);},"z",function(b){return Td(this,b);},"j",function(){return OU(this);}],JP,"MultiLineEOLSet",2,W,[],0,0,0,["a",function(b,c,d){return UO(this,b,c,d);},"z",function(b){return Ro(this,b);},"j",function(){return TD(this);}],DH,"CIBackReferenceSet",2,Bg,[],0,0,0,["a",function(b,c,d){return Pc(this,b,c,d);},"D",function(b){Q9(this,b);},"j",function(){return OX(this);},"z",function(b){return RG(this,b);}],Mn,"BackReferenceSet",2,DH,[],0,0,0,["a",function(b,c,d){return Rx(this,b,c,d);},"ba",function(b,c,d){
return TQ(this,b,c,d);},"Z",function(b,c,d,e){return OV(this,b,c,d,e);},"S",function(b){return OE(this,b);},"j",function(){return Uk(this);}],MS,"UCIBackReferenceSet",2,DH,[],0,0,0,["a",function(b,c,d){return N3(this,b,c,d);},"j",function(){return Qo(this);}],E4,0,DI,[Ew],0,3,0,["dX",function(b,c,d,e){return S6(this,b,c,d,e);},"eu",function(b,c,d){return Qg(this,b,c,d);},"ct",function(b){QQ(this,b);},"eo",function(b,c){return S0(this,b,c);},"ed",function(b,c){return Ov(this,b,c);}],Nn,"SequenceSet",2,Bl,[],
0,0,0,["M",function(b,c){return RZ(this,b,c);},"ba",function(b,c,d){return P4(this,b,c,d);},"Z",function(b,c,d,e){return Tz(this,b,c,d,e);},"j",function(){return PQ(this);},"S",function(b){return Um(this,b);}],JO,"UCISequenceSet",2,Bl,[],0,0,0,["M",function(b,c){return N8(this,b,c);},"j",function(){return Uy(this);}],GC,"CISequenceSet",2,Bl,[],0,0,0,["M",function(b,c){return Sj(this,b,c);},"j",function(){return Tx(this);}],DG,0,D,[],4,0,0,0,O,0,D,[],1,0,0,0,F9,"UCISupplCharSet",2,Bl,[],0,0,0,["M",function(b,
c){return So(this,b,c);},"j",function(){return VU(this);}],EL,"LowSurrogateCharSet",2,Bg,[],0,0,0,["D",function(b){PU(this,b);},"a",function(b,c,d){return Rk(this,b,c,d);},"ba",function(b,c,d){return Uj(this,b,c,d);},"Z",function(b,c,d,e){return R_(this,b,c,d,e);},"j",function(){return S4(this);},"S",function(b){return OR(this,b);},"z",function(b){return Te(this,b);}],EY,"HighSurrogateCharSet",2,Bg,[],0,0,0,["D",function(b){QP(this,b);},"a",function(b,c,d){return Ol(this,b,c,d);},"ba",function(b,c,d){return Ql(this,
b,c,d);},"Z",function(b,c,d,e){return Sg(this,b,c,d,e);},"j",function(){return Vp(this);},"S",function(b){return R0(this,b);},"z",function(b){return QE(this,b);}],Cm,"SupplCharSet",2,Bl,[],0,0,0,["M",function(b,c){return RI(this,b,c);},"ba",function(b,c,d){return O8(this,b,c,d);},"Z",function(b,c,d,e){return QO(this,b,c,d,e);},"j",function(){return Uo(this);},"S",function(b){return Rp(this,b);}],H4,0,CR,[],4,0,0,["cM",function(b){return Q0(this,b);},"fo",function(b,c){return RA(this,b,c);}],H5,0,CR,[],4,0,0,
["cM",function(b){return SA(this,b);},"fo",function(b,c){return UW(this,b,c);}],Ld,0,D,[],0,0,0,0,Kl,0,D,[],0,0,0,0,EH,0,O,[],0,0,0,["w",function(){return M3(this);}],Fj,0,O,[],0,0,0,["w",function(){return JN(this);}],K_,0,O,[],0,0,0,["w",function(){return R9(this);}],LM,0,O,[],0,0,0,["w",function(){return Tg(this);}],LP,0,O,[],0,0,0,["w",function(){return SF(this);}],FY,0,O,[],0,0,0,["w",function(){return Lh(this);}],E9,0,FY,[],0,0,0,["w",function(){return Mi(this);}],NI,0,O,[],0,0,0,["w",function(){return Ui(this);
}],F0,0,E9,[],0,0,0,["w",function(){return JM(this);}],Nj,0,F0,[],0,0,0,["w",function(){return OA(this);}],NN,0,O,[],0,0,0,["w",function(){return RS(this);}],LJ,0,O,[],0,0,0,["w",function(){return Ou(this);}],Lp,0,O,[],0,0,0,["w",function(){return UZ(this);}],LV,0,O,[],0,0,0,["w",function(){return Pe(this);}],NR,0,O,[],0,0,0,["w",function(){return Od(this);}],Le,0,O,[],0,0,0,["w",function(){return UT(this);}]]);
$rt_metadata([KY,0,O,[],0,0,0,["w",function(){return RK(this);}],Md,0,O,[],0,0,0,["w",function(){return RP(this);}],KD,0,O,[],0,0,0,["w",function(){return Sm(this);}],J9,0,O,[],0,0,0,["w",function(){return UQ(this);}],Ll,0,O,[],0,0,0,["w",function(){return NY(this);}],LA,0,O,[],0,0,0,["w",function(){return VK(this);}],L8,0,O,[],0,0,0,["w",function(){return Ss(this);}],JJ,0,O,[],0,0,0,["w",function(){return TE(this);}],Ng,0,O,[],0,0,0,["w",function(){return VO(this);}],Ly,0,O,[],0,0,0,["w",function(){return TL(this);
}],MO,0,O,[],0,0,0,["w",function(){return QT(this);}],L7,0,O,[],0,0,0,["w",function(){return O$(this);}],NQ,0,O,[],0,0,0,["w",function(){return RY(this);}],ET,0,O,[],0,0,0,["w",function(){return NO(this);}],Me,0,ET,[],0,0,0,["w",function(){return OT(this);}],Np,0,EH,[],0,0,0,["w",function(){return PW(this);}],L4,0,Fj,[],0,0,0,["w",function(){return T7(this);}],Lt,0,O,[],0,0,0,["w",function(){return V_(this);}],LY,0,O,[],0,0,0,["w",function(){return UC(this);}],Na,0,O,[],0,0,0,["w",function(){return S$(this);
}],Nk,0,O,[],0,0,0,["w",function(){return N0(this);}],HE,0,DD,[],0,0,0,0,Ff,0,D,[],3,3,0,0,GP,0,D,[Ff],0,0,0,0,ID,"AbstractCharClass$1",2,M,[],0,0,0,["g",function(b){return SK(this,b);}],IC,"AbstractCharClass$2",2,M,[],0,0,0,["g",function(b){return OG(this,b);}],Hi,"CharClass$18",2,M,[],0,0,0,["g",function(b){return VY(this,b);},"r",function(){return TN(this);}],Ho,0,M,[],0,0,0,["g",function(b){return RJ(this,b);}],Hm,0,M,[],0,0,0,["g",function(b){return Sn(this,b);}],Hn,0,M,[],0,0,0,["g",function(b){return N7(this,
b);}],Hs,0,M,[],0,0,0,["g",function(b){return Sp(this,b);}],Ht,0,M,[],0,0,0,["g",function(b){return NT(this,b);}],Hq,0,M,[],0,0,0,["g",function(b){return TV(this,b);}],Hr,0,M,[],0,0,0,["g",function(b){return N9(this,b);}],Hu,0,M,[],0,0,0,["g",function(b){return TZ(this,b);}],Hv,0,M,[],0,0,0,["g",function(b){return RD(this,b);}],Hh,0,M,[],0,0,0,["g",function(b){return Wc(this,b);}],HO,0,M,[],0,0,0,["g",function(b){return T4(this,b);}],Hf,0,M,[],0,0,0,["g",function(b){return RC(this,b);}],Hg,0,M,[],0,0,0,["g",
function(b){return To(this,b);}],Hl,0,M,[],0,0,0,["g",function(b){return Vh(this,b);}],He,0,M,[],0,0,0,["g",function(b){return Tn(this,b);}],Hj,0,M,[],0,0,0,["g",function(b){return Qj(this,b);}],Hk,0,M,[],0,0,0,["g",function(b){return QC(this,b);}],HU,0,D,[Fy],0,0,0,0,Fg,0,D,[],0,0,0,0,Hw,0,Fg,[Ff],0,0,0,0,Gw,"BackReferencedSingleSet",2,DR,[],0,0,0,["ba",function(b,c,d){return Tb(this,b,c,d);},"Z",function(b,c,d,e){return VX(this,b,c,d,e);},"b2",function(){return Ri(this);}],Fx,"ConcurrentModificationException",
1,Bc,[],0,3,0,0,Gs,"AbstractCharClass$LazyJavaLowerCase$1",2,M,[],0,0,0,["g",function(b){return Ud(this,b);}]]);
$rt_metadata([Gj,"AbstractCharClass$LazyJavaUpperCase$1",2,M,[],0,0,0,["g",function(b){return PR(this,b);}],Ju,"AbstractCharClass$LazyJavaWhitespace$1",2,M,[],0,0,0,["g",function(b){return Ph(this,b);}],Jt,"AbstractCharClass$LazyJavaMirrored$1",2,M,[],0,0,0,["g",function(b){return S9(this,b);}],IP,"AbstractCharClass$LazyJavaDefined$1",2,M,[],0,0,0,["g",function(b){return U4(this,b);}],HI,"AbstractCharClass$LazyJavaDigit$1",2,M,[],0,0,0,["g",function(b){return Uh(this,b);}],G6,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",
2,M,[],0,0,0,["g",function(b){return PP(this,b);}],IQ,"AbstractCharClass$LazyJavaISOControl$1",2,M,[],0,0,0,["g",function(b){return RT(this,b);}],Gd,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",2,M,[],0,0,0,["g",function(b){return VE(this,b);}],Gh,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",2,M,[],0,0,0,["g",function(b){return R7(this,b);}],GU,"AbstractCharClass$LazyJavaLetter$1",2,M,[],0,0,0,["g",function(b){return Uz(this,b);}],H7,"AbstractCharClass$LazyJavaLetterOrDigit$1",2,M,[],0,0,0,["g",function(b)
{return Or(this,b);}],Ic,"AbstractCharClass$LazyJavaSpaceChar$1",2,M,[],0,0,0,["g",function(b){return Q8(this,b);}],GT,"AbstractCharClass$LazyJavaTitleCase$1",2,M,[],0,0,0,["g",function(b){return T0(this,b);}],F7,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",2,M,[],0,0,0,["g",function(b){return Va(this,b);}],Gq,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",2,M,[],0,0,0,["g",function(b){return RR(this,b);}],FN,"UnicodeCategory",2,M,[],0,0,0,["g",function(b){return PS(this,b);}],Jk,"UnicodeCategoryScope",
2,FN,[],0,0,0,["g",function(b){return SO(this,b);}],J8,"Matcher$1",2,D,[],0,0,0,["r",function(){return Wa(this);}],J0,0,D,[],0,0,0,0,KR,0,D,[],0,0,0,0,Jz,"NoSuchElementException",1,Bc,[],0,3,0,0]);
function $rt_array(cls,data){this.oJ=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["@","0","null",": ","    at ","Caused by: ","Index out of bounds","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ","<?xml","Ooops","Either src or dest is null","program","print","separator","data"," ","executeValue","value","number","text","printFunction","UTF-8","Replacement preconditions do not hold",
"The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset "," is outside of range [0;",")","New position ","]","The last byte in src ","IGNORE","REPLACE","REPORT","#C","#toString:","toString","Action must be non-null","[",", ","BIG_ENDIAN","LITTLE_ENDIAN","","Scale out of range.","Zero length BigInteger","Infinite or NaN","0.","Negative bit address","Negative exponent","BigInteger divide by zero","power of ten too big","0.0","0.00","0.000","0.0000","0.00000","0.000000",
"0E","0E+","2147483648",":","N#",",","#","#F","replace","charAt","ARG0 MUST BE NUMBER","charAtFromEnd","toUpper","toUpperCase","toLower","toLowerCase","toTitle","toTitleCase","startsWith","length","isEmpty","endsWith","contains","includes","equalsIgnoreCase","matches","codePointAt","substring","trim","reverse","getFirstCharacter","getLastCharacter","getRandomCharacter","trimLeft","^\\s+","trimRight","\\s+$","indexOf","ARG1 MUST BE NUMBER","lastIndexOf","False","True","Variable "," does not exists","Function ",
"("," ("," with "," parameters)"," already exists","arguments not match for ","Type Error",":\t","use of undeclared variable ","false","true","Patter is null","<",">","fSet","Is","In","NonCapFSet","AheadFSet","BehindFSet","AtomicFSet","FinalSet","<Empty set>","JointSet","NonCapJointSet","PosLookaheadJointSet","NegLookaheadJointSet","PosBehindJointSet","NegBehindJointSet","<Quant>","<GroupQuant>","{","}","posFSet","range:","^ ","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","UCI range:","decomposed Hangul syllable:",
"UCI ","CI ","decomposed char:","<DotAllQuant>","<DotQuant>","<SOL>","WordBoundary","PreviousMatch","<EOL>","EOI","^","DotAll",".","<Unix MultiLine $>","<MultiLine $>","CI back reference: ","back reference: ","UCI back reference: ","sequence: ","UCI sequence: ","CI sequence: ","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart",
"javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam",
"Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols",
"NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation",
"CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea",
"CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf"]);
Q.prototype.toString=function(){return $rt_ustr(this);};
Q.prototype.valueOf=Q.prototype.toString;D.prototype.toString=function(){return $rt_ustr(QK(this));};
D.prototype.__teavm_class__=function(){return $dbg_class(this);};
function Long_eq(a,b){return a.hi===b.hi&&a.lo===b.lo;}function Long_ne(a,b){return a.hi!==b.hi||a.lo!==b.lo;}function Long_gt(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);}function Long_ge(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);}function Long_lt(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>
1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);}function Long_le(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);}function Long_add(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_inc(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);}function Long_dec(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);}function Long_neg(a)
{return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));}function Long_sub(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<
16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_compare(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}function Long_mul(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo
+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);}function Long_div(a,b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];}function Long_udiv(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];}function Long_rem(a,
b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];}function Long_urem(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];}function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if
(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a)
{return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}function Long_and(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);}function Long_or(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);}function Long_xor(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);}function Long_shl(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}}function Long_shr(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi
<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}}function Long_shru(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}}function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup
=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -
b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF
|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a)
{var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup
=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q
=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;}function $rt_startThread(runner,callback){var result;try {result
=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(W1);
(function(){var c;c=F$.prototype;c.run=c.iB;})();
})();

//# sourceMappingURL=classes.js.map