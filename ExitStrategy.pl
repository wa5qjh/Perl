#!/usr/local/bin/perl
use Tk ;
######
my $mw = MainWindow->new ;
$mw->title("Quit or Reboot") ;
$mw->Button( -text => "Quit", -bg => red , -command => sub{exec 'shutdown -p now'} )->pack (-side=>'left', -fill =>'x', -ipadx =>'2');
$mw->Button( -text => "reBoot",  -bg => green , -command => sub{exec 'shutdown -r now' } )->pack(-side =>'right', -fill =>'x', -ipadx =>'2') ;
MainLoop ;
