#!/usr/local/bin/perl -w
use Getopt::Std ;
use Tk ;
#use Tk::Frame ;
######
sub bookit;
$statline= "  ..STATUS..   ";
######
  my $mw = MainWindow->new ;
    $mw->title("Pack and Callback") ;
    $mw->Frame->pack;
    $mw->Label( -text =>  " This window looks more organized \n", -bg =>'green' ) ->pack( -fill =>'x');
    
    $mw->Checkbutton( -text => " Did I do this right?" , -bg => 'yellow',
    -activebackground =>'lightyellow', -command=> sub {print "Checkbutton  maybe \n "} )->pack ( -fill => 'both');
    
    $status=$mw->Label( -textvariable => \$statline, -bg =>'cyan' ) -> pack ( -side => 'bottom', -fill => 'both',);
    
    $mw->Button( -text => "EXIT" , -bg=>'orange', -activebackground =>'red', 
			-command => sub {
					 $statline = "quiting now" ;
					 $status -> configure( -textvariable => \$statline ) ;
					 print "exiting now\n\n" ;
					 sleep 1;
					 exit;
					 }
						  ) -> pack ( -side => 'right', -fill => 'both' );
	      
MainLoop ;

 sub bookit {
	 $statline = "quiting now";
         $status -> configure( -textvariable => \$statline ) ->pack  ;
        sleep 1;
         exit;
	 }

