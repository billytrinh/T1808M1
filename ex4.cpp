#include <stdio.h>
 
int main(){
	int n;
	printf ("nhap so tu nhien vao day:");
	scanf ("%d",&n);
	printf ("cac so chan nho hon n la:",n);
	  for ( int i=0 ; i < n ;i++)
	    if (i%2==0)
	       printf ("%d",i);
	printf ("\ncac so le nho hon n la:",n);
	  for ( int i=0 ; i < n ;i++)
	    if (i%2!=0)
	       printf ("%d",i);
	       return 0;
	     








}
