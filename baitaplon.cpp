#include<stdio.h>
#include<stdlib.h>
int main(){
	int m,n;
	printf("nhap gia tri m = ");
	scanf("%d",&m);
	printf("nhap gia tri n = ");
	scanf("%d",&n);
	int *p;
	p = (int *)malloc(m*n*sizeof(int));
	for(int i=0; i<m; ++i){
		for(int j=0; j<n; ++j){
			printf("nhap MT[%d][%d]\n",i,j);
			scanf("%d",p+i*n+j );
			}
		}
	for(int i=0; i<m; ++i){
		for(int j=0; j<n ; ++j){
			printf("%3d",*(p+i*n+j));
		}
		printf("\n");
		}
	for(int i=0; i<m+1; ++i){
		for(int j=0; j<n; ++j){
			printf("%3d", *(p+i*n+j));
		}
		printf("\n");
	}
}


	

			
