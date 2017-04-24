#!/usr/local/bin/perl -w
use Getopt::Std ;
use Tk ;
#use Tk::Frame ;
######
sub bookit;
$var= "Test Line";
######
  my $mw = MainWindow->new ;
    $mw->title("config and callback") ;

## testline
 my $TestLine=$mw->Button(-textvariable=>\$var, -command=>\&chngit) ->pack;

# line to do  the changing
$confg = $mw->Button(-text =>"change Test Line", -bg=>"yellow",-fg=>"blue",-command => \&chngit )->pack;

$mw ->Label() ->pack;  # just make some room
$mw->Button(-text=>"EXIT", -bg =>"red",-command =>sub{exit})->pack(-ipadx =>10);
MainLoop ;
 sub chngit {
	#
	
         }

