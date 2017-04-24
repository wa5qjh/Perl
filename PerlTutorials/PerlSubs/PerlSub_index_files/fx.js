//  Copyright (c) 2011 QuinStreet Inc. All Rights Reserved.
//  prod:49
function zzshuffle(xa){
for(var g10,tmp,i=xa.length;i;rnd=parseInt(Math.random()*i),tmp=xa[--i],xa[i]=xa[rnd],xa[rnd]=tmp);
return xa;
}
function zzIndexOfList(ll,obj){
for(var i=0;i<ll.length;i++){
if(ll[i]==obj){
return i;
}}
return-1;
}
function zzrnd(ii){
return(Math.floor((Math.random()* 10000000000006)% ii));
}
function N8(i0){
if(zzIndexOfList(zzcompete.bannedcamps,i0)<0){
zzcompete.chosencamps.push(i0);
}
else{
}}
function F4(i0){
if(zzIndexOfList(zzcompete.chosencamps,i0)<0){
zzcompete.bannedcamps.push(i0);
}
else{
}}
function F7(v7,t1){
for(var ii=0;ii<v7.length;ii++){
i0=v7[ii];
if(i0!=t1){
if(zzIndexOfList(zzcompete.bannedcamps,i0)<0){
F4(i0);
if(typeof zzcompete.parent2camps[i0]!='undefined'){
for(var jj=0;jj<zzcompete.parent2camps[i0].length;jj++){
F4(zzcompete.parent2camps[i0][jj]);
}}}}}}
var v5;
function N5(t1){
if(v5<5){
v5++;
N8(t1);
if(cat!=null){
F7(zzcompete.cat2camps[cat],t1);
}
if(typeof zzcompete.camp2cats[t1]!='undefined'){
for(var jj=0;jj<zzcompete.camp2cats[t1].length;jj++){
cat2=zzcompete.camp2cats[t1][jj];
if(typeof cat2!='undefined'){
F7(zzcompete.cat2camps[cat2],t1);
}}}
for(var f8 in zzcompete.parent2camps){
if(zzIndexOfList(zzcompete.parent2camps[f8],t1)>=0){
N5(f8);
}}}
else{
}}
function zzcompute_compete(){
if(typeof zzcompete!='undefined'){
var zzshufflecats=zzshuffle(zzcompete.allcats);var ii;
if(!zzcompete.chosencamps)zzcompete.chosencamps=[];
if(!zzcompete.chosenads)zzcompete.chosenads=[];
if(!zzcompete.chosencomp)zzcompete.chosencomp='';
zzcompete.bannedcamps=[];
zzcompete.chosencampstr='';
zzcompete.chosenadsstr='';
zzcompete.processedcats=[];
for(ii=0;ii<zzshufflecats.length;ii++){
cat=zzshufflecats[ii];
if(zzIndexOfList(zzcompete.processedcats,cat)>=0){
continue;
}
zzcompete.processedcats.push(cat);
var v9=zzcompete.cat2camps[cat].length;var rnd=zzrnd(zzcompete.cat2camps[cat].length);var t1=0;
while(v9-->0){
var d7=zzcompete.cat2camps[cat][rnd];
if(zzIndexOfList(zzcompete.bannedcamps,d7)<0 
&&zzIndexOfList(zzcompete.chosencamps,d7)<0){
t1=d7;
break;
}
else{
rnd=(rnd+1)% zzcompete.cat2camps[cat].length
}}
if(t1){
v5=0;
N5(t1);
}
else{
}}
if(zzcompete.chosencamps.length>0){
zzcompete.chosencampstr=zzcompete.chosencamps.join("~");
}
if(zzcompete.compcamps.length>0){
var i4=0;
while(!i4){
var rnd=zzrnd(zzcompete.campcount);
if(rnd<zzcompete.compcamps.length){
if(zzIndexOfList(zzcompete.bannedcamps,zzcompete.compcamps[rnd])<0){
zzcompete.chosencomp=zzcompete.compcamps[rnd];
i4=1;
}}
else{
break;
}}
for(var i0 in zzcompete.compcamps){
if(i0!=zzcompete.chosencomp){
F4(i0);
}}}
var i1={};
i1[0]=99999999;
for(var i0 in zzcompete.exads){
var rnd,tag,last_used_tag;
if(zzIndexOfList(zzcompete.bannedcamps,i0)>=0){
continue;
}
var rnd=zzrnd(zzcompete.exads[i0].length);var f6=zzcompete.exads[i0].length;var r3=-1;
tag=last_used_tag=0;
while(f6-->0){
var v6=zzcompete.exads[i0][rnd];
tag=v6.replace(/ad[0-9]+/i,'');
if((typeof i1[tag])=='undefined'){
last_used_tag=tag;
r3=rnd;
}
else if(i1[last_used_tag]>i1[tag]){
last_used_tag=tag;
r3=rnd;
}
else{
}
rnd=(rnd+1)% zzcompete.exads[i0].length;
}
if(typeof i1[last_used_tag]=='undefined'){
i1[last_used_tag]=1;
}
else{
i1[last_used_tag]++;
}
zzcompete.chosenads.push(zzcompete.exads[i0][r3]);
}
if(zzcompete.chosenads.length>0){
zzcompete.chosenadstr=zzcompete.chosenads.join("~");
}}}
function zzcompute_compete_new(){
if(typeof zzcompete!='undefined'&&typeof zzcompete.camppriority!='undefined'){
if(!zzcompete.chosencamps)zzcompete.chosencamps=[];
if(!zzcompete.chosenads)zzcompete.chosenads=[];
if(!zzcompete.chosencomp)zzcompete.chosencomp='';
zzcompete.bannedcamps=[];
zzcompete.chosencampstr='';
zzcompete.chosenadsstr='';
zzcompete.processedcats=[];
for(var ii=0;ii<zzcompete.camppriority.length;ii++){
var zzshufflecamps=zzshuffle(zzcompete.camppriority[ii]);
for(var jj=0;jj<zzshufflecamps.length;jj++){
var zzcamp=zzshufflecamps[jj];
if(zzIndexOfList(zzcompete.bannedcamps,zzcamp)<0 
&&zzIndexOfList(zzcompete.chosencamps,zzcamp)<0){
v5=0;
cat=null;
N5(zzcamp);
}else{
}}}
if(zzcompete.chosencamps.length>0){
zzcompete.chosencampstr=zzcompete.chosencamps.join("~");
}
if(zzcompete.compcamps.length>0){
var i4=0;
while(!i4){
var rnd=zzrnd(zzcompete.campcount);
if(rnd<zzcompete.compcamps.length){
if(zzIndexOfList(zzcompete.bannedcamps,zzcompete.compcamps[rnd])<0){
zzcompete.chosencomp=zzcompete.compcamps[rnd];
i4=1;
}}
else{
break;
}}
for(var i0 in zzcompete.compcamps){
if(i0!=zzcompete.chosencomp){
F4(i0);
}}}
var i1={};
i1[0]=99999999;
for(var i0 in zzcompete.exads){
var rnd,tag,last_used_tag;
if(zzIndexOfList(zzcompete.bannedcamps,i0)>=0){
continue;
}
var rnd=zzrnd(zzcompete.exads[i0].length);var f6=zzcompete.exads[i0].length;var r3=-1;
tag=last_used_tag=0;
while(f6-->0){
var v6=zzcompete.exads[i0][rnd];
tag=v6.replace(/ad[0-9]+/i,'');
if((typeof i1[tag])=='undefined'){
last_used_tag=tag;
r3=rnd;
}
else if(i1[last_used_tag]>i1[tag]){
last_used_tag=tag;
r3=rnd;
}
else{
}
rnd=(rnd+1)% zzcompete.exads[i0].length;
}
if(typeof i1[last_used_tag]=='undefined'){
i1[last_used_tag]=1;
}
else{
i1[last_used_tag]++;
}
zzcompete.chosenads.push(zzcompete.exads[i0][r3]);
}
if(zzcompete.chosenads.length>0){
zzcompete.chosenadstr=zzcompete.chosenads.join("~");
}}}
zzcompute_compete_new()
