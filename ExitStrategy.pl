#!/usr/local/bin/perl
use Tk ;
######
my $mw = MainWindow->new ;
$mw->title("Quit or Reboot") ;
$mw->Button( -text => "Quit", -bg => red , -command => sub{exec 'shutdown -p now'} )->pack (-side=>'left', -fill =>'x', -ipadx =>'2');
$mw->Button( -text => "reBoot",  -bg => green , -command => sub{exec 'shutdown -r now' } )->pack(-side =>'right', -fill =>'x', -ipadx =>'2') ;
MainLoop ;

/* notes
This little program existsbecause my computer was freezing up and even after unfreezing would not let me get to  the shutdown button"
So I wrote this up and now every time I boot up,  it appears so  I move it to the opposite corner of my screen the set it to 
all workplaces.( I generally keep 4 screens on my desktop: 1 email, 1 browser, andf 2 programming or other mixed activities.)
  You may notice I have shrunk it considerably from what it was before. I had 3 lines that I had commented out plus I've made
  the fields or blocks the buttons use  much smallerboth in size and in  their labels.
  I also keep this little thing in my  bin directory.  You may also notice it is much smaller that the exit.pl I have in  this directory.
  please also note the very simple way perl lets me create a function on-the-fly to be executed by the command= I dont know of 
  any other language tht lets you create what Perl calls 'anonymous subroutines like that. those can be used anywhere a function  definition
  aka sub(routine) call is needed. I may not be real understandable by non-perl programmers  but it sure is KOOL!
  */
  