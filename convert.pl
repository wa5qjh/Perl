#!/usr/local/bin/perl -w
use Getopt::Std ;
use Tk ;
#use Tk::Frame ;
######
sub bookit;
$statline= "     ..STATUS..      ";
######
  my $mw = MainWindow->new ;
    $mw->title("Pack and Callback") ;


MainLoop ;
 sub bookit {
         $statline = "quiting now";
         $status -> configure( -textvariable => \$statline ) ->pack  ;
        sleep 1;
         exit;
         }

