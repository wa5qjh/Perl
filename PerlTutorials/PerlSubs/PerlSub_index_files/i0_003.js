
	var zzADS_CHAN = '203657020';
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
	var zxpx2 = ";x=15105;g=0,0;c=203657020,203657020;i=0;n=203;" + zzStr + zzPage_obj.zd_inject_params;

var zxa, zxv, zxp, zxae, zxc, zxce, zxte, zxpr, zxalist, zxawlist;
var zzDate = new Date();
if (typeof zzFlashVersion == 'undefined') { zzFlashVersion = 0;}

zxa = 0; zxalist = []; zxpr = 100000; zxx = 1; zxv = 1; zxp = ""; zxae = 0; zxaf = 0; zxc = 0; zxce = 0; zxcf = 0; zxte = 0; zxtf = 0;



	if ((!zxalist.length || zxpr > 1 || (zxpr == 1)) && (zzIndexOfList(zzChosenAds, 'ch203657020ad20164249') >= 0) && ((zzCountry == 172) && (zzState == 47))) {
		if (zxpr > 1) {zxalist = []; zxawlist = [];}		zxalist.push('zxa=20164249;zxx=15105;zxv=1000006;;');zxawlist.push(10001.0);zxpr=1;}
	if ((!zxalist.length || zxpr > 1 || (zxpr == 1)) && (zzIndexOfList(zzChosenAds, 'ch203657020ad20164254') >= 0) && ((zzCountry == 172) && (zzState == 47))) {
		if (zxpr > 1) {zxalist = []; zxawlist = [];}		zxalist.push('zxa=20164254;zxx=15105;zxv=1000006;;');zxawlist.push(20002.0);zxpr=1;}
	if ((!zxalist.length || zxpr > 39 || (zxpr == 39)) && (zzIndexOfList(zzChosenAds, 'ch203657020ad20183506') >= 0) && ((zzCountry == 172))) {
		if (zxpr > 39) {zxalist = []; zxawlist = [];}		zxalist.push('zxa=20183506;zxx=15105;zxv=1000003;;');zxawlist.push(1.0);zxpr=39;}
	if ((!zxalist.length || zxpr > 40 || (zxpr == 40)) && (zzIndexOfList(zzChosenAds, 'ch203657020ad20182026') >= 0) && ((zzCountry == 172))) {
		if (zxpr > 40) {zxalist = []; zxawlist = [];}		zxalist.push('zxa=20182026;zxx=15105;zxv=1000002;;');zxawlist.push(1.0);zxpr=40;}
	if ((!zxalist.length || zxpr > 40 || (zxpr == 40)) && (zzIndexOfList(zzChosenAds, 'ch203657020ad20182060') >= 0) && ((zzCountry == 172))) {
		if (zxpr > 40) {zxalist = []; zxawlist = [];}		zxalist.push('zxa=20182060;zxx=15105;zxv=1;;');zxawlist.push(2.0);zxpr=40;}
	if ((!zxalist.length || zxpr > 40 || (zxpr == 40)) && (zzIndexOfList(zzChosenAds, 'ch203657020ad20182077') >= 0) && ((zzCountry == 172))) {
		if (zxpr > 40) {zxalist = []; zxawlist = [];}		zxalist.push('zxa=20182077;zxx=15105;zxv=1;;');zxawlist.push(3.0);zxpr=40;}
	if ((!zxalist.length || zxpr > 40 || (zxpr == 40)) && (zzIndexOfList(zzChosenAds, 'ch203657020ad20185089') >= 0) && ((zzCountry == 172))) {
		if (zxpr > 40) {zxalist = []; zxawlist = [];}		zxalist.push('zxa=20185089;zxx=15105;zxv=1;;');zxawlist.push(4004.0);zxpr=40;}
	if ((!zxalist.length || zxpr > 99 || (zxpr == 99))) {
		if (zxpr > 99) {zxalist = []; zxawlist = [];}		zxalist.push('zxa=20121761;zxx=15105;zxv=1000010;;');zxawlist.push(1.0);zxpr=99;}



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

zxpixie.src = "http://l1.cdn.qnsr.com/log/p.gif?a=" + zxa + ";" + zxp + ";x=15105;g=0,0;c=203657020,203657020;i=0;n=203;" + zzStr + ";" + zzPage_obj.zd_inject_params + Math.random();

document.write("<SCRIPT LANGUAGE='JavaScript' SRC='http://e2.cdn.qnsr.com//cgi/k/" + zxa+ "/" + zxx  + "/0/0/203657020/203657020//0/203/"  + zzSection + "/"  + "/" + zxv + "/i.js'><\/SC"+"RIPT>");
}

if (zxte > 0 && zxtf > 0) {
zzSetFCapCookie(203657020, zxa, zxte, zxtf, 'FCapTag', zzQTobj);
}
if (zxce > 0 && zxcf > 0) {
zzSetFCapCookie(zxc, zxa, zxce, zxcf, 'FCapCamp', zzQTobj);
}
if (zxae > 0 && zxaf > 0) {
zzSetFCapCookie(zxa, '', zxae, zxaf, 'FCapCrt', zzQTobj);
}

