#!/usr/local/bin/perl -w
## base.pl
##  http://gtk2-perl.sourceforge.net/doc/gtk2-perl-tut/ch-GettingStarted.html
## creates just a blank widget.
## doesnt even close it right

use Gtk2;

Gtk2->init;

$window = Gtk2::Window->new('toplevel');
$window->show;

Gtk2->main;

0;
