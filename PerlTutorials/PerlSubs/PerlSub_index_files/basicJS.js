// Popup Box for search box
/* This script and many more are available free online at
The JavaScript Source!! http://javascript.internet.com */

// Copyright (C) 2005 Ilya S. Lyubinskiy. All rights reserved.
// Technical support: http://www.php-development.ru/
// http://www.php-development.ru/javascripts/dropdown.php
//
// YOU MAY NOT
// (1) Remove or modify this copyright notice.
// (2) Distribute this code, any part or any modified version of it.
//     Instead, you can link to the homepage of this code:
//     http://www.php-development.ru/javascripts/dropdown.php.
//
// YOU MAY
// (1) Use this code on your website.
// (2) Use this code as a part of another product provided that
//     its main use is not creating javascript menus.
//
// NO WARRANTY
// This code is provided "as is" without warranty of any kind, either
// expressed or implied, including, but not limited to, the implied warranties
// of merchantability and fitness for a particular purpose. You expressly
// acknowledge and agree that use of this code is at your own risk.


// ***** Popup Control *********************************************************

function at_display(x) {
  var win = window.open();
  for (var i in x) win.document.write(i+' = '+x[i]+'<br>');
}

// ***** Show Aux *****

function at_show_aux(parent, child) {
  var p = document.getElementById(parent);
  var c = document.getElementById(child );
  var top  = (c["at_position"] == "y") ? p.offsetHeight+2 : 0;
  var left = (c["at_position"] == "x") ? p.offsetWidth -250 : 0;

  for (; p; p = p.offsetParent) {
    top  += p.offsetTop;
    left += p.offsetLeft;
  }

  c.style.position   = "absolute";
  c.style.top        = top +'px';
  c.style.left       = left+'px';
  c.style.visibility = "visible";
}

// ***** Show *****

function at_show() {
  var p = document.getElementById(this["at_parent"]);
  var c = document.getElementById(this["at_child" ]);
  at_show_aux(p.id, c.id);
  clearTimeout(c["at_timeout"]);
}

// ***** Hide *****

function at_hide() {
  var c = document.getElementById(this["at_child"]);
  c["at_timeout"] = setTimeout("document.getElementById('"+c.id+"').style.visibility = 'hidden'", 333);
}

// ***** Click *****

function at_click() {
  var p = document.getElementById(this["at_parent"]);
  var c = document.getElementById(this["at_child" ]);

  if (c.style.visibility != "visible")
    at_show_aux(p.id, c.id);
  else c.style.visibility = "hidden";
  return false;
}

// ***** Attach *****

// PARAMETERS:
// parent   - id of visible html element
// child    - id of invisible html element that will be dropdowned
// showtype - "click" = you should click the parent to show/hide the child
//            "hover" = you should place the mouse over the parent to show
//                      the child
// position - "x" = the child is displayed to the right of the parent
//            "y" = the child is displayed below the parent
// cursor   - Omit to use default cursor or check any CSS manual for possible
//            values of this field

function at_attach(parent, child, showtype, position, cursor) {
  var p = document.getElementById(parent);
  var c = document.getElementById(child);
	if(!p){
			return;
	}
  
	p["at_parent"]     = p.id;
	p["at_child"]      = c.id;
	p["at_position"]   = position;
	c["at_parent"]     = p.id;
  c["at_child"]      = c.id;
  c["at_position"]   = position;

  c.style.position   = "absolute";
  c.style.visibility = "hidden";

  if (cursor != undefined) p.style.cursor = cursor;

  switch (showtype) {
    case "click":
      p.onclick     = at_click;
      p.onmouseout  = at_hide;
      c.onmouseover = at_show;
      c.onmouseout  = at_hide;
      break;
    case "hover":
      p.onmouseover = at_show;
      p.onmouseout  = at_hide;
      c.onmouseover = at_show;
      c.onmouseout  = at_hide;
      break;
  }
}

// Multiple onload function created by: Simon Willison
// http://simonwillison.net/2004/May/26/addLoadEvent/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

addLoadEvent(function() {
  at_attach("src_parent", "src_child", "hover", "x", "pointer");
  setH();
});

// ===========================================


// ==============================================

function openDescription(ID) {
  var url = "http://www.ppcforhosts.com/public/util/description.cfm?id=" + ID;
  link = window.open(url,"newWin","directories=0,height=250,location=0,menubar=0,resizable=1,scrollbars=1,status=0,toolbar=0,width=450");
}

// ===============================================

// Breadcrumb script
/* This script and many more are available free online at
The JavaScript Source!! http://javascript.internet.com
Created by: Justin Whitford | http://www.whitford.id.au/ */
function breadcrumbs() {
  sURL = new String;
  bits = new Object;
  var x = 0;
  var stop = 0;
  var output = "<div class=topnav><a href=/>home</a>&nbsp;&nbsp;|&nbsp;&nbsp;";

  sURL = location.href;
  sURL = sURL.slice(8,sURL.length);
  chunkStart = sURL.indexOf("/");
  sURL = sURL.slice(chunkStart+1,sURL.length)

  while(!stop){
    chunkStart = sURL.indexOf("/");
    if (chunkStart != -1){
      bits[x] = sURL.slice(0,chunkStart)
      sURL = sURL.slice(chunkStart+1,sURL.length);
    } else {
      stop = 1;
    }
    x++;
  }

  for(var i in bits){
    output += "<a href=\"";
    for(y=1;y<x-i;y++){
      output += "../";
    }
    output += bits[i] + "/\">" + bits[i] + "</a>&nbsp;&nbsp;|&nbsp;&nbsp;";
  }
  document.write(output + document.title);
  document.write("</div>");
  }

// =======================================================

/*
addLoadEvent(function() {
var myColumns = new NonFauxColumns();
myColumns.addBox(document.getElementById("content"));
myColumns.addBox(document.getElementById("leftnav"));
		myColumns.equalizeHeights();
});
*/

function setH() {
  var maxH = Math.max(document.getElementById('leftnav').offsetHeight,document.getElementById('content').offsetHeight);
  document.getElementById('leftnav').style.height=maxH+'px';
  document.getElementById('content').style.height=maxH+'px';
}

// =======================================================

// To hide e-mail address
// Usage: <script>safemail("NAME","DOMAIN","TEXT TO BE DISPLAYED")</script>

function safemail(name, domain, display) {
  displayed=(typeof(display)=="undefined") ? name+"@"+domain : display
  document.write('<a href=mailto:' + name + '@' + domain + '>' + displayed + '</a>');
}

// =======================================================

function popUp(URL) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=400,height=500');");
}

// =======================================================
