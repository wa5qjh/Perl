#!/usr/local/bin/perl -w
use Getopt::Std ;
use Tk ;
#use Tk::Frame ;
######
sub bookit;
$statline= "Change this color";
######
  my $mw = MainWindow->new ;
    $mw->title("config and callback") ;
	$greyButton=$mw->Button(-text=>"GreyButton", -command=>\&chngit) ->pack(-ipadx =>30);
	$confg = $mw->Button(-text =>$statline, -bg=>"yellow",-fg=>"blue",-command => \&chngit )->pack;
	$mw->Button(-text=>"EXIT", -bg =>"red",-command =>sub{exit})->pack(-ipadx =>10);
	
MainLoop ;
 sub chngit {
	# changes two different buttons
	# but not using referenced variables.
	$confg -> configure( -bg => "blue", -fg=>"yellow", -text=>"   CHANGED   " )  ;
	$greyButton->configure(-text =>"green button", -bg=>"green"  );
         }

