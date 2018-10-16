#include <stdio.h>
#include <string.h>
int main(){
	char S[100];
	upperCase(S);

void upperCase(char S[100]){
	printf("Nhap chuoi: ");
	gets(S);
	strupr(S);
	printf("Chuoi sau khi viet hoa la: %s", S);
}

}
