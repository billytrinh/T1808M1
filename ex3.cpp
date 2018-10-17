#include <stdio.h>
#include <string.h>

int main(){
	char str [25];
	printf ("nhap mot chuoi vao day :\n");
	scanf ("%s",&str);
	strupr (str);
	printf ("chuoi chuye doi sang in hoa la:%s\n ",str);
	return 0;
	

}
