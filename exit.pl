#!/usr/local/bin/perl -w
use Tk ;
######
my $mw = MainWindow->new ;
  $mw->  title("Quit or Reboot" )  ;
#  $mw->Button( -text => " Close App ", -command => \&do_toplevel) ->pack ;  
  
  $mw->Button( -text => " Quit ", -image =>'off.png' , -command => sub{exec 'shutdown -p now'} )->pack (-side=>'left', -fill =>'x', -ipadx =>'10');
  $mw->Button( -text => "Reboot", -bg=>'green'  ,-command => sub{exec 'shutdown -r now' } )->pack(-side =>'right', -fill =>'x', -ipadx =>'10') ;
 # $mw->Button( -text => " Close This ",  -background =>'orange' ,-command => \&do_toplevel) ->pack(-side =>'bottom' ) ; 

#$mw->Label( -text =>  "Shutdown  or Reboot \n" ) ->pack( -expand =>'1');
#$mw->Label( -text =>  " .. " ) ->pack(-side=>'right', -expand =>'1');
#$mw->Button( -text => "Xt" ,-command => sub { exit } ) -> pack (-side =>'bottom', -padx =>'30');

MainLoop ;


  sub do_toplevel  {
	if (! Exists ( $tl ) )
		{
		 $tl = $mw->Toplevel();
		 $tl ->title(" Close App  ");
		 $tl ->Button( -text => " EXIT " , -image =>"system-shutdown.png",  -background =>'red' , -command =>sub { exit } )->pack ;
		} else {
		 $tl->deiconify();
		 $tl->raise();
			}
	}
	

	