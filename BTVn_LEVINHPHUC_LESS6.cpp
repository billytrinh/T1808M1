#include<stdio.h>
#include<stdlib.h>
int main (){
	int A[4][5];
	 for (int i=0 ; i <4 ; ++i){
	 	for (int j =0 ; j <5 ; ++j)
	 {printf ("input matrix [%d][%d]\n",i , j);
		scanf("%3d", A[i]+j);
	 }
	 }
	for (int i=0; i<4; i++){
   		for (int j=0; j<5; j++){
			if (i==0||i==2){
				*(A[i]+j)*=2;
			} else if(i==1||i==3){
				*(A[i]+j)/=2;
			}
	  }
	 printf ("\n");
	 }	 
for (int i=0 ; i<4 ; ++i){
 	for (int j = 0 ; j < 5; ++j){
 		printf ( "%10d", A[i][j]);
	 } printf ("\n");
 }
 
}
