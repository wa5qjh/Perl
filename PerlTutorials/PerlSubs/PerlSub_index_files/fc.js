//  Copyright (c) 2011 QuinStreet Inc. All Rights Reserved.
//  prod:49
function N2(){
zzPage_obj.zzGeo=zzPage_obj['cookies']['qsg'];
zzPage_obj.zzCountry=parseInt(U2(zzPage_obj.zzGeo));
zzPage_obj.zzState=parseInt(N3(zzPage_obj.zzGeo));
zzPage_obj.zzMetro=parseInt(F3(zzPage_obj.zzGeo));
zzPage_obj.zzFlash=(zzPage_obj['cookies']['QUADIDX']& 0x8);
zzPage_obj.zzFlashVersion=4+((zzPage_obj['cookies']['QUADIDX']& 0x70)>>4);
zzPage_obj.zzUserAgent=navigator.userAgent.toLowerCase();
zzPage_obj.zzIsMac=(zzPage_obj.zzUserAgent.indexOf('mac')!=-1);
zzPage_obj.zzIsOpera=(zzPage_obj.zzUserAgent.indexOf('opera')!=-1);
zzPage_obj.zd_inject_params=U8();
}
function N9(){
if(zzPage_obj['cookies']['QIDA'].indexOf('OPT_OUT')==-1){
if((zzPage_obj['cookies']['qsg']==254)||(!('qsgr' in zzPage_obj['cookies']))){
N0('qsgr','1',2592000000);
if(typeof zz_in_ihtml!='undefined'){
var v8=F0('g',false);
N0('qsg',v8,2592000000);
zzPage_obj['cookies']['qsg']=v8;
}
else{
document.write("<SC"+"RIPT LANGUAGE='JavaScript' SRC='http://o1.qnsr.com/init/"+Math.random()+"/g.js'><\/SCR"+"IPT>");
}}
if(zzPage_obj['cookies']['QUADIDX']==0||(!('qidxr' in zzPage_obj['cookies']))){
N0('qidxr','1',2592000000);
if(typeof zz_in_ihtml!='undefined'){
var d6=F0('x',false);
N0('QUADIDX',d6,2592000000);
zzPage_obj['cookies']['QUADIDX']=d6;
zzPage_obj.d0=d6;
}
else{
if(document.all&&!zzPage_obj.zzIsMac&&!zzPage_obj.zzIsOpera){
zzPage_obj.d0=U3();
}
else{
zzPage_obj.d0=U4();
}
N0('QUADIDX',zzPage_obj.d0,2592000000);
zzPage_obj['cookies']['QUADIDX']=zzPage_obj.d0;
}}}}
function U1(){
var k0=document.cookie;var r1=new Array();var k2=new Array();
zzPage_obj['cookies']=new Array();
if(!('qsg' in zzPage_obj['cookies'])){zzPage_obj['cookies']['qsg']=254;}
if(!('QUADIDX' in zzPage_obj['cookies'])){zzPage_obj['cookies']['QUADIDX']=0;}
if(!('QIDA' in zzPage_obj['cookies'])){zzPage_obj['cookies']['QIDA']="";}
r1=k0.split(';');
var i9=(r1!=null)?r1.length:0;
for(var i=0;i<i9;i++){
r1[i]=r1[i].replace(/^\s/,'');
k2=r1[i].split('=');
if(k2&&k2.length==2){
zzPage_obj['cookies'][k2[0]]=k2[1];
}}}
function N6(i2,k6){
if(k6){
U1();
}
if(i2 in zzPage_obj['cookies']){return zzPage_obj['cookies'][i2];}
else{return '';}
}
function N0(b1,y4,g3){
if(document.cookie.indexOf('OPT_OUT')==-1){
var i3=new Date();var m0;
if(typeof g3=='undefined'||g3==-1){
m0="Thu,01-Jan-1970 00:00:01 GMT";
}
else{
i3.setTime(i3.getTime()+g3);
m0=i3.toGMTString();
}
document.cookie=b1+'='+y4+';expires='+m0+';path=/;';
zzPage_obj['cookies'][b1]=y4;
}}
function zzChkFCapCookie(r5,k3,b1){
var g0;var k0=N6(b1,true);var i;var v0;var y1=0;var f1=new Date();
if(k0!=""){
g0=k0.split(":");
for(i=0;i<g0.length;i++){
v0=g0[i].split(",");
if(v0[0]==r5){
y1=1;
if((f1.valueOf()>v0[2])||(k3>v0[1])){
return 1;
}
else{
return-1;
}}}}
else{
document.cookie='cookies=1;path=/;';
return(document.cookie=='')?-1:0;
}
if(!y1){
return 0 
}}
function zzSetFCapCookie(i5,m5,g5,k3,b1){
var f1=new Date();var k0;var g0;var y1=0;var k1=0;var d3=1000 * 60 * 60 * 24 * g5;var m0=new Date(f1.valueOf()+d3);var i;var m2="";var v0;var t0;
v0=i5+""+m5;
var g2=0;
k0=N6(b1,true);
var m8=F6(k0);
if(k0!=m8){
k0=m8;
g2=1;
}
if(k0!=""){
g0=k0.split(":");
for(i=0;i<g0.length;i++){
if(g0[i]!=""){
t0=g0[i].split(",");
if(t0[0]==v0){
y1=1;
m2+=v0+","+(parseInt(t0[1])+1)+","+m0.valueOf()+":";
g2=1;
}
else{
m2+=g0[i]+":";
}}}
k1=N7(k0);
}
if(!y1){
m2+=v0+",1,"+m0.valueOf()+":";
g2=1;
}
if(k1<m0.valueOf()){
d3=m0.valueOf()-f1.valueOf();
}
if(g2){
N0(b1,m2,d3);
}}
function F6(v2){
var g0;var i;var t0;var f1=new Date();var k0="";
if(v2!=""){
g0=v2.split(":");
for(i=0;i<g0.length;i++){
t0=g0[i].split(",");
if(t0[2]>=f1.valueOf()){
k0+=g0[i]+":";
}}}
return k0;
}
function N7(v2){
var g0;var i;var t0;var k1=0;
g0=v2.split(":");
for(i=0;i<g0.length;i++){
t0=g0[i].split(";");
if(t0[3]>k1){
k1=t0[2];
}}
return k1;
}
function N4(i6){
var y2=i6.toString().match(/function\s+(\w*)/)[1];
if((y2==null)||(y2.length==0)){
return "anonymous();";
}
else{
return y2+"();";
}}
function F5(){
var f5="";
for(var a=arguments.caller;a!=null;a=a.caller){
f5+=N4(a.callee);
if(a.caller==a)break;
}
return f5;
}
function F2(){
var d1="";var y2="anonymous();";var r4=0;
window.onerror=null;
for(var i=0;i<arguments.length;i++){
d1+='a'+i+'='+arguments[i]+';';
if(i==2){
r4=escape(arguments[i]);
}}
d1=F5()+d1;
if(navigator.cookieEnabled){
d1=d1+'c='+navigator.cookieEnabled+';';
}
d1=d1+"C="+document.cookie+";";
if(document.cookie.indexOf('QUADERROR')==-1){
var zzQTobj=new Object();
N0('QUADERROR',r4,259200000,zzQTobj);
var m6=new Image();
m6.src='http://l1.cdn.qnsr.com/log/ERR.gif?v=./ar/lite/e1/v49/;'+d1+'b='+navigator.userAgent+';'+Math.random();
}
return true;
}
function U2(d2){
return d2 & 255;
}
function F3(d2){
return(d2>>14)& 1023;
}
function N3(d2){
return(d2>>8)& 63;
}
function zzIndexOfList(ll,obj){
for(var i=0;i<ll.length;i++){
if(ll[i]==obj){
return i;
}}
return-1;
}
function U3(){
var d0=1;
zzPage_obj.v3=0;
document.writeln('<SCR'+'IPT LANGUAGE="VBS'+'cript">');
document.writeln('on error resume next\n');
document.writeln('For i=4 to 11');
document.writeln('If Not(IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & i)))Then');
document.writeln('Else');
document.writeln('zzPage_obj.v3=i');
document.writeln('End If');
document.writeln('Next');
document.writeln('</scr'+'ipt>');
if(navigator.javaEnabled()){d0 |=2;}
if(zzPage_obj.v3>=4){
d0 |=((zzPage_obj.v3-4)<<4);
d0 |=8;
}
return d0;
}
function U4(){
var v3=0;var d0=1;
if(navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]&&
navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
if(navigator.plugins&&navigator.plugins["Shockwave Flash"]){
var b7=navigator.plugins["Shockwave Flash"].description;
try{
v3=b7.match(/(\d+)\./)[1];
}
catch(e1){
}}}
if(navigator.javaEnabled()){d0 |=2;}
if(v3>=4){
d0 |=((v3-4)<<4);
d0 |=8;
}
return d0;
}
var y0='';
function zzrnd(ii){
return(Math.floor((Math.random()* 10000000000006)% ii));
}
function F1(y0){
var m3='';var t9='';var f3='';var t2=y0.split(':');
zzChosenCamps='';
zzChosenComp='';
zzChosenAds='';
zzRndCamp=0;
if(t2.length==3){
f3=t2[0];
if(f3!=''){
zzChosenCamps=f3.split('~');
zzRndCamp=parseInt(Math.random()* zzChosenCamps.length);
}
zzChosenComp=t2[1];
m3=t2[2];
if(m3!=''){
zzChosenAds=m3.split('~');
}}}
var t6=new Array();var t5=0;var r6=0;
function F0(i2,m9){
if(t5<1||m9){
var y3=''+window.location.search;var t3=new Array();var b10='';var i10='';
y3=y3.replace(/^\?/,'');
if(i2=='l'){
var b8="";
r6=y3.indexOf(";l=http");
if(r6!=-1){
b8=y3.substring(r6+3,y3.length);
t5=0;
}
return b8;
}
else{
t3=y3.split(';');
t5=t3.length;
for(var i=0;i<t5;i++){
if(t3[i].length>2){
b10=t3[i].split('=');
t6[t3[i].substring(0,1)]=t3[i].substring(2,t3[i].length);
}}}}
if(t6[i2]){return t6[i2];}
else{return '';}
}
function U8(){
var d4;var k8='';
if(document.all){
d4=document.all.tags('meta');
}
else if(document.documentElement){
d4=document.getElementsByTagName('meta');
}
if(typeof(d4)!='undefined'){
var y8=d4.length;
for(var i=0;i<y8;i++){
var d8=d4.item(i).name;
if((d8.length>0)&&(d8.match(/^inject_params/))){
k8=d4.item(i).content.replace(/&/g,';');
break;
}}}
return k8;
}
var zzBrowserDetect={
init:function(){
if(!this.alreadyLookedup){
this.zzbrowser=this.searchString(this.dataBrowser)||"An unknown browser";
this.zzversion=this.searchVersion(navigator.userAgent)
||this.searchVersion(navigator.appVersion)
||"an unknown version";
var str=''+this.zzversion;
this.zzbrowser=this.zzbrowser+" "+str.replace(/(\d*).*/,'$1.x');
this.zzOS=this.searchString(this.dataOS)||"an unknown OS";
this.alreadyLookedup=1;
}
},
searchString:function(data){
for(var i=0;i<data.length;i++){
var k4=data[i].string;var k9=data[i].prop;
this.versionSearchString=data[i].versionSearch||data[i].identity;
if(k4){
if(k4.indexOf(data[i].subString)!=-1)
return data[i].identity;
}
else if(k9)
return data[i].identity;
}
},
searchVersion:function(k4){
var y7=k4.indexOf(this.versionSearchString);
if(y7==-1)return;
return parseFloat(k4.substring(y7+this.versionSearchString.length+1));
},
dataBrowser:[
{
string:navigator.userAgent,
subString:"Chrome",
identity:"Chrome"
},
{string:navigator.userAgent,
subString:"OmniWeb",
versionSearch:"OmniWeb/",
identity:"OmniWeb"
},
{
string:navigator.vendor,
subString:"Apple",
identity:"Safari",
versionSearch:"Version"
},
{
prop:window.opera,
identity:"Opera"
},
{
string:navigator.vendor,
subString:"iCab",
identity:"iCab"
},
{
string:navigator.vendor,
subString:"KDE",
identity:"Konqueror"
},
{
string:navigator.userAgent,
subString:"KONQUEROR",
identity:"Konqueror"
},
{
string:navigator.userAgent,
subString:"AOLBROWSER",
identity:"AOL"
},
{
string:navigator.userAgent,
subString:"WEBTV",
identity:"WebTV"
},
{
string:navigator.userAgent,
subString:"Firefox",
identity:"Firefox"
},
{
string:navigator.vendor,
subString:"Camino",
identity:"Camino"
},
{
string:navigator.userAgent,
subString:"Netscape",
identity:"Netscape"
},
{
string:navigator.userAgent,
subString:"MSIE",
identity:"MS Explorer",
versionSearch:"MSIE"
},
{
string:navigator.userAgent,
subString:"MICROSOFT INTERNET EXPLORER",
identity:"MS Explorer"
},
{
string:navigator.userAgent,
subString:"Gecko",
identity:"Mozilla",
versionSearch:"rv"
},
{
string:navigator.userAgent,
subString:"Mozilla",
identity:"Netscape",
versionSearch:"Mozilla"
},
{
string:navigator.userAgent,
subString:"Lynx",
identity:"Text-only"
},
{
string:navigator.userAgent,
subString:"ELinks",
identity:"Text-only"
},
{
string:navigator.userAgent,
subString:"galeon",
identity:"Galeon"
}
],
dataOS:[
{
string:navigator.userAgent,
subString:"Windows NT 6.0",
identity:"Windows Vista"
},
{
string:navigator.userAgent,
subString:"Windows_XP",
identity:"Windows XP"
},
{
string:navigator.userAgent,
subString:"Windows NT 5.1",
identity:"Windows XP"
},
{
string:navigator.platform,
subString:"Mac",
identity:"Macintosh"
},
{
string:navigator.userAgent,
subString:"iPhone",
identity:"iPhone/iPod"
},
{
string:navigator.userAgent,
subString:"AMIGA-AWEB",
identity:"Amiga"
},
{
string:navigator.userAgent,
subString:"HP-UX",
identity:"Unix"
},
{
string:navigator.userAgent,
subString:"LINUX",
identity:"Unix"
},
{
string:navigator.userAgent,
subString:"Windows NT 5.0",
identity:"Windows 2000"
},
{
string:navigator.userAgent,
subString:"Windows_NT 5.0",
identity:"Windows 2000"
},
{
string:navigator.userAgent,
subString:"Windows_2000",
identity:"Windows 2000"
},
{
string:navigator.userAgent,
subString:"Windows ME",
identity:"Windows ME"
},
{
string:navigator.userAgent,
subString:"WIN 9X",
identity:"Windows ME"
},
{
string:navigator.userAgent,
subString:"WIN95",
identity:"Windows 95"
},
{
string:navigator.userAgent,
subString:"Windows 95",
identity:"Windows 95"
},
{
string:navigator.userAgent,
subString:"Windows_95",
identity:"Windows 95"
},
{
string:navigator.userAgent,
subString:"WIN98",
identity:"Windows 98"
},
{
string:navigator.userAgent,
subString:"Windows 98",
identity:"Windows 98"
},
{
string:navigator.userAgent,
subString:"Windows_98",
identity:"Windows 98"
},
{
string:navigator.userAgent,
subString:"WINNT",
identity:"Windows NT"
},
{
string:navigator.userAgent,
subString:"Windows NT",
identity:"Windows NT"
},
{
string:navigator.userAgent,
subString:"Windows_NT",
identity:"Windows NT"
}
]
};
function F10(zzQTobj){
if((!zzQTobj.v1)&&(zzQTobj.zzTrd!='')){
zzQTobj.zzTrd=';l='+zzQTobj.zzTrd;
}
zzQTobj.f0=zzPage_obj.zd_inject_params+zzQTobj.f0;
if(zzQTobj.f0!=''){
zzQTobj.zzParam=zzQTobj.f0.replace(/&/g,';');
if(!zzQTobj.v1){
zzQTobj.f0=';p='+escape(zzQTobj.zzParam);
}
else{
zzQTobj.f0='&p='+escape(zzQTobj.zzParam);
}}
if(typeof t7!='undefined'&&document.referrer){
zzQTobj.zzRef=document.referrer;
}
else{
zzQTobj.zzRef=document.URL;
}
zzQTobj.zzRef=zzQTobj.zzRef.replace(/;/g,'QQQQ');
zzQTobj.zzRef=zzQTobj.zzRef.replace(/[&#].*/,'');
zzQTobj.zzStr=zzQTobj.zzStr+'e=i;s='+zzQTobj.zzSection+';g='+zzPage_obj.zzCountry+';w='+zzPage_obj.zzState 
+';m='+zzPage_obj.zzMetro+';'+zzPage_obj.zd_inject_params+';z='+zzrnd(1000000000);
zzQTobj.b2=zzQTobj.zz_size * 256;
y0=';d=::';
if(typeof zzcompete!='undefined'){
F1(zzcompete.chosencampstr+':'+zzcompete.chosencomp+':'+zzcompete.chosenadstr);
y0=';d='+zzcompete.chosencampstr+':'+zzcompete.chosencomp+':'+zzcompete.chosenadstr;
}}
function U10(zzQTobj){
F10(zzQTobj);
if(document.layers){
zzQTobj.b0='n='+zzQTobj.m1+';c='+zzQTobj.zz_cat+';s='+zzQTobj.g1+';x='+zzQTobj.b2+';u=j;z='+zzrnd(1000000000)+';'
document.write("<a href='http://o1.qnsr.com/cgi/r?"+zzQTobj.b0+zzQTobj.f0+";y="+
zzRef+zzTrd+"'><img border='0' width='"+zzQTobj.zz_width+"' height='"+zzQTobj.zz_height+
"' src='http://o1.qnsr.com/cgi/x?"+zzQTobj.b0+"'></a>");
}
else{
zzQTobj.b2+=1;
if(zzQTobj.v1==1){
zzQTobj.b0='http://e1.cdn.qnsr.com/cgi/d/'+zzQTobj.b2+'/0/'+zzQTobj.m1+
'/'+zzQTobj.zz_cat+'/i0.js?'+';z='+zzrnd(1000000000);
document.write('<scr'+'ipt language="JavaScript" src="'+zzQTobj.b0+'"><\/sc'+'ript>');
}
else{
zzQTobj.b0='http://e1.cdn.qnsr.com/cgi/d/'+zzQTobj.b2+'/0/'+zzQTobj.m1+
'/'+zzQTobj.zz_cat+'/i0.html?'+zzQTobj.f0+
';s='+zzQTobj.g1+';g='+zzPage_obj.zzGeo+';x='+zzPage_obj['cookies']['QUADIDX']+
';y='+zzQTobj.zzRef+y0+';z='+zzrnd(1000000000)+';'+zzQTobj.zzTrd;
document.write("<iframe src='"+zzQTobj.b0+"' frameborder=0 marginheight=0 marginwidth=0 scrolling='no' allowTransparency='true' width="
+zzQTobj.zz_width+" height="+zzQTobj.zz_height+"></iframe>");
}}}
function U6(zzQTobj){
zzQTobj.zz_cat=0;
zzQTobj.zz_height=0;
zzQTobj.b2=0;
zzQTobj.m1=0;
zzQTobj.f0='';
zzQTobj.g1=0;
zzQTobj.zz_size=0;
zzQTobj.zz_width=0;
zzQTobj.zzChosenAds='';
zzQTobj.zzChosenCamps='';
zzQTobj.zzChosenComp='';
zzQTobj.zzD=window.document;
zzQTobj.zzParam='';
zzQTobj.zzRef='';
zzQTobj.zzRndCamp=0;
zzQTobj.zzSection=zzQTobj.g1;
zzQTobj.zzStr='';
zzQTobj.zzTrd='';
}
function zzfocrender(b5,t4,m4,k5,zz_width,zz_height,f0,f4,g8){
zzflcrender(b5,t4,m4,k5,zz_width,zz_height,f0,f4,g8,1);
}
function zzflcrender(b5,t4,m4,k5,zz_width,zz_height,f0,f4,g8,v1){
var zzQTobj=new Object();
U6(zzQTobj);
if(!zzPage_obj.zzIsMac){
zzPage_obj['zz_old_error_handler']=window.onerror;
window.onerror=F2;
}
if(typeof b5!='undefined')zzQTobj.m1=b5;
if(typeof t4!='undefined'){zzQTobj.g1=t4;zzQTobj.zzSection=t4;}
if(typeof m4!='undefined')zzQTobj.zz_cat=m4;
if(typeof k5!='undefined')zzQTobj.zz_size=k5;
if(typeof zz_height!='undefined')zzQTobj.zz_height=zz_height;
if(typeof zz_width!='undefined')zzQTobj.zz_width=zz_width;
if(typeof f0!='undefined')zzQTobj.f0=f0;
if(typeof f4!='undefined'){zzQTobj.zflag_trd=f4;zzQTobj.zzTrd=f4;}
if(typeof v1!='undefined')zzQTobj.v1=v1;
U1();
N2();
zzQTobj.zzGeo=zzPage_obj.zzGeo;
zzQTobj.zzCountry=zzPage_obj.zzCountry
zzQTobj.zzState=zzPage_obj.zzState;
zzQTobj.zzMetro=zzPage_obj.zzMetro 
zzQTobj.zzFlash=zzPage_obj.zzFlash
zzQTobj.zzFlashVersion=zzPage_obj.zzFlashVersion
var f7=parseInt(m4.replace(/\/.*/,''));
f7=((parseInt(b5)* 1000000)+f7);
zzPage_obj[f7]=zzQTobj;
U10(zzQTobj);
if(!zzPage_obj.zzIsMac){
window.onerror=zzPage_obj['zz_old_error_handler'];
}}
if(typeof zzPage_obj=='undefined'){
var zzPage_obj=new Object();
zzPage_obj.zz_old_error_handler=window.onerror;
U1();
N2();
N9();
}