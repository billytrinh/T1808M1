#include <stdio.h>

int main(){
	int T, M, i , ls, L;
	printf("Nhap so tien ban dau:\n");
	scanf("%d",&T);
	printf("Nhap so tien mong muon:\n");
	scanf("%d",&M);
	printf("Nhap lai suat nam:\n");
	scanf("%d",&ls);
	for(i=1;T < M;i++){
		L = T*ls/100;
		T = T+L;
	}
	printf("can gui %d nam\n",i-1);
}