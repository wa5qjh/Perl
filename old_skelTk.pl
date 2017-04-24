#!/usr/local/bin/perl   
# chmoded to 774 
# Perl skeleton start up file
# Gary Corell  9 Sept 08
# getopts funtionality added  10 Sept 08
# getopts parameter re-ordered to put debug option last
# getopts revised. arguments now permited on all options. but may be ignored
# reviewed and $D initialized to 0,and a fini line added 08 Sept 2015
$VER = "00.05";
use Getopt::Std ;
use Tk ;
#
  print "skelTk.pl \n" ;
  print "This program contains some POD  \n ";
#
##   -h -v Arg, -D ARG, -o ARG, sets $opt_h, $opt_v, $opt_D, $opt_o  ## line 10
%options = () ;
getopts("hvo:d:");
$D=0;
## If no colon : after the option ( h or v ) the value taken by the option is
## either 0,false or 1,true.
# process  commandline options if possible
#									line 20
 if ($opt_h) {
   print " Usage: skelTk.pl [switches] \n";
   print "\t -d\t Turn on Debuging \n";
   print "\t -h\t This help message\n";
   print "\t -o\t Output to whatever\n";
   print "\t -v\t Verbose output, where applicable, in due season, if warranted.....\n";
exit 0 ; 
}
 if ($opt_v) {
     print " Verbose option selected not currently implemented. Verbosity level $opt_v\n" ;
     print " Version number ". $VER. "\n";
 }
 if($opt_d) {
    print "Debug on where applicable. debug level= $opt_d \n";
    $D = $opt_d;   ### define D for debuging
 }									## line 36
 if($opt_o) {
  print "output set to output to file currently unsupported. Option value= $opt_o\n";
  print "No o option  or option is  -  usually means StdOut\n";
  }	  ## line 40
   
if ( $D >0) {print "I got here. Degug is $D \n" ; }     ### just to let you know you did.
 
 print "\n\t fini  \n\n";
### Main {}
## using  Tk ;
my $mw = MainWindow->new;
$mw->title("skelTk.pl");
$mw->Label(-text => " This is a skeleton program using \n Tk and Getopt::Std  \n" ) ->pack ;

#### make this exit button the last one included so the exit button remains at the bottom
$mw->Button( -text => "EXIT", -command => sub {exit} ) ->pack ;
MainLoop;
#### Subprograms for the widgets  ####

### end of program --  begin pod ####

=head1 skelTk.pl

 a skeleton program file already chmodded to execute 

=head2  SYNOPSIS

=over 2

This is a skeleton perl program with getopts and a help menu included. it is intended
to form the basis of future programs and provides a framework for that.

=back

=head2	Description

 This skeleton probram provide a starting point for future programs  and provides for
command line options and a brief help/usage menu some of the command line options
further provide for an aditional argument Command line is parsed by the Perl standard 
module Getopt::Std
 This skeleton program also provides this perldoc in hopes that it will be used to further
document the program.

=head2 Usage provided by the -h option

Usage: skel.pl [switches] \n";
  -d Turn on Debuging \n";
  -h This help message\n";
  -o Output to whatever\n";
  -v Verbose output, where applicable, in due season \n";
         void where prohibited by law.
=cut





