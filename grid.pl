#!/usr/local/bin/perl -w
#use Getopt::Std ;
use Tk ;

######
sub bookit;
$statline= " STATUS ";
######
  my $mw = MainWindow->new ;
    $mw->title("  GRID ") ;
    	$TopRow= $mw->Label( -text =>  "This is The Label Widget " , -bg =>"cyan") ->grid( -row=>1,-columnspan =>3) ;
    	$mw->Checkbutton( -text => "CheckbuttonLeft" , -bg=>"green",-command=>  sub {print "Left  Checked\n"} )  ->grid (-row=>2, -column=>0 );
	$mw->Checkbutton( -text =>"CheckbuttonRight", -bg=>"green",-command => sub { print "Right Checked\n"} ) ->grid (-row=>2, -column=>1 );
	$mw->Button( -text => "Xt" , -bg =>"red", -command => sub {exit } ) ->grid (  -row =>3, -column =>2, -sticky =>'w') ;
	$status=$mw->Label( -textvariable => \$statline, -bg =>"cyan" )  ->grid (-row =>4, -columnspan =>4 );						
MainLoop ;

 sub bookit {
	 $statline = "quiting now";
         $status -> configure( -textvariable => \$statline ) ->pack  ;
        sleep 1;
         exit;
	 }

