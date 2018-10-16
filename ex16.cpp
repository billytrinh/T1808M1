#include <stdio.h>

int main(){

	int arr[10];
	
	for (int i = 0; i < 10; ++i)
	{
		printf("Nhap arr[%d]\n",i);
		scanf("%d",arr+i);
		//scanf("%d",&arr[i]); --> arr+i == &arr[i]
	}

	for (int i = 0; i < 10; ++i)
	{
		if(*(arr+i) % 2 != 0){
			printf("%3d", *(arr+i));
		}
		//printf("%3d", arr[i]); --> *(arr+i) == arr[i]
	}


}