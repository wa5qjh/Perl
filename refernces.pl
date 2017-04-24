#!/usr/local/bin/perl -w
$VER = "01.00";
use Getopt::Std ;
# use strict;

print "reference.pl ".$VER."\n";
 print "testing particular statements \n ";
 print "referrals and referents \n\n" ;
 

$trl=" \n";
$name = "Gary";
$surname = "Corell" ;

### notes on referrals and referants ---------------------------
      ## references and named ref
  ##step 1 define age:   			my $age = 42;
  ## step 2 create a reference to age:	my $ref_to_age = \$age;
     ##  Or like: my $r_2_colors = \@colors; 
     ## this reference points to  the same location in Memory as the original
  ## step 3 derefence the referent:	${$ref_to_age}++ ; ## act on  the reference   
   ##  modifying the original		$$ref_to_age ++; # another birthday method 2
   ## operate on  the contents of the memory location  pointed to my the original
   ## and by the reference.. called 'dereferencing.
     ##  then: print "age is '$age'\n";
### end of notes -----------------------------------------

## step 1
my $age = 71;			## Step 1
 print "My age now is $age.";
my $ref2age = \$age  ;      ## Step 2
$$ref2age++ ;			## Step 3
 print "\t My age next year $age  \n";
###  try again    Without using 'my' 
## worked just fine ##
    ## step 1
 $age = 71;
 print "My age now is $age.";
     ## step 2
 $ref2age = \$age  ;
     ## step 3
$$ref2age++ ;
 print "\t My age next year $age  \n";


## now operating on  $name. already defined above
## attempt to add $trl to it
 print $name ;
 print "   ".$trl;
## step 2  create a refence to $name
$ref2name = \$name ;
## step 3 now derefence and use it.
$$ref2name= $$ref2name." B. ".$surname.$trl ;
 print $name, $$ref2name ;
 
 print "\t \n fini \n\n";
