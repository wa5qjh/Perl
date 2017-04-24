
	var zzADS_CHAN = '203657019';
	if (typeof zzPage_obj != 'undefined' && typeof zzPage_obj[zzADS_CHAN] != 'undefined') {
		var zzQTobj          = zzPage_obj[zzADS_CHAN];
		var zzStr            = zzQTobj.zzStr;
		var zzTrd            = zzQTobj.zzTrd;
		var zzParam          = zzQTobj.zzParam + ";";
		var zzRef            = zzQTobj.zzRef + ";";
		var zzSection        = zzQTobj.zzSection;
		var zzD              = zzQTobj.zzD;
		var zzFlash          = zzQTobj.zzFlash;
		var zzFlashVersion   = zzQTobj.zzFlashVersion;
		var zzKeyword        = zzQTobj.zzKeyword;
		var zzPat            = zzQTobj.zzPat;
		var zzCountry        = zzQTobj.zzCountry;
		var zzState          = zzQTobj.zzState;
		var zzMetro          = zzQTobj.zzMetro;
	}
	else {
		var zz_trd = "";
		var zz_param = "";
		var zz_ref = "";
	}
	var zxpixie = new Image();
	var zxpx2 = ";x=3585;g=0,0;c=203657019,203657019;i=0;n=203;" + zzStr + zzPage_obj.zd_inject_params;

var zxa, zxv, zxp, zxae, zxc, zxce, zxte, zxpr, zxalist, zxawlist;
var zzDate = new Date();
if (typeof zzFlashVersion == 'undefined') { zzFlashVersion = 0;}

zxa = 0; zxalist = []; zxpr = 100000; zxx = 1; zxv = 1; zxp = ""; zxae = 0; zxaf = 0; zxc = 0; zxce = 0; zxcf = 0; zxte = 0; zxtf = 0;



	if ((!zxalist.length || zxpr > 1 || (zxpr == 1)) && ((zzCountry == 172) && (zzState == 47))) {
		if (zxpr > 1) {zxalist = []; zxawlist = [];}		zxalist.push('zxa=20168127;zxx=3585;zxv=1000003;;');zxawlist.push(10001.0);zxpr=1;}
	if ((!zxalist.length || zxpr > 1 || (zxpr == 1)) && ((zzCountry == 172) && (zzState == 47))) {
		if (zxpr > 1) {zxalist = []; zxawlist = [];}		zxalist.push('zxa=20168133;zxx=3585;zxv=1000003;;');zxawlist.push(20002.0);zxpr=1;}
	if ((!zxalist.length || zxpr > 40 || (zxpr == 40)) && ((zzCountry == 172))) {
		if (zxpr > 40) {zxalist = []; zxawlist = [];}		zxalist.push('zxa=20182051;zxx=3585;zxv=1;;');zxawlist.push(1.0);zxpr=40;}
	if ((!zxalist.length || zxpr > 40 || (zxpr == 40)) && ((zzCountry == 172))) {
		if (zxpr > 40) {zxalist = []; zxawlist = [];}		zxalist.push('zxa=20183966;zxx=3585;zxv=1;;');zxawlist.push(4002.0);zxpr=40;}
	if ((!zxalist.length || zxpr > 99 || (zxpr == 99))) {
		if (zxpr > 99) {zxalist = []; zxawlist = [];}		zxalist.push('zxa=20118384;zxx=3584;zxv=1000004;;');zxawlist.push(1.0);zxpr=99;}



if (zxalist.length) {
	var wrnd = parseFloat(Math.random() * zxawlist[zxawlist.length - 1]);
	for (var wi = 0; wi < zxawlist.length; wi++) {
		if (zxawlist[wi] > wrnd)  {
			eval(zxalist[wi]);
			break;
		}
	}
}
if (zxa) {

zxpixie.src = "http://l1.cdn.qnsr.com/log/p.gif?a=" + zxa + ";" + zxp + ";x=3585;g=0,0;c=203657019,203657019;i=0;n=203;" + zzStr + ";" + zzPage_obj.zd_inject_params + Math.random();

document.write("<SCRIPT LANGUAGE='JavaScript' SRC='http://e2.cdn.qnsr.com//cgi/k/" + zxa+ "/" + zxx  + "/0/0/203657019/203657019//0/203/"  + zzSection + "/"  + "/" + zxv + "/i.js'><\/SC"+"RIPT>");
}

if (zxte > 0 && zxtf > 0) {
zzSetFCapCookie(203657019, zxa, zxte, zxtf, 'FCapTag', zzQTobj);
}
if (zxce > 0 && zxcf > 0) {
zzSetFCapCookie(zxc, zxa, zxce, zxcf, 'FCapCamp', zzQTobj);
}
if (zxae > 0 && zxaf > 0) {
zzSetFCapCookie(zxa, '', zxae, zxaf, 'FCapCrt', zzQTobj);
}

