#!/usr/local/bin/perl -w
use Getopt::Std ;
use Tk ;
use Tk::Frame ;
######
sub bookit;
$statline= "     ..STATUS..      ";
######
  my $mw = MainWindow->new ;
    $mw->title("Pack and Callback") ;
    
    $mw->Label( -text =>  " This window looks more organized \n" ) ->pack;
    
    $mw->Checkbutton( -text => " Did I do this right? " , -bg => 'yellow',
    -activebackground =>'lightyellow', -command=> sub {print 'Checkbutton  maybe  '} )->pack ;
    
    $status=$mw->Label( -textvariable => \$statline, -bg =>'cyan' ) -> pack ( -side => 'bottom');
    
    $mw->Button( -text => "EXIT" , -bg=>'orange', -activebackground =>'red',
                -highlightcolor=>'cyan',
			-command => sub { $statline = "quiting now";
			$status -> configure( -textvariable => \$statline ) ;
			sleep 1;
			exit; }
			) -> pack ( -side => 'right', -fill => 'both');
	      
MainLoop ;
 sub bookit {
	 $statline = "quiting now";
         $status -> configure( -textvariable => \$statline ) ->pack  ;
        sleep 1;
         exit;
	 }

