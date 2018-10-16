#include<stdio.h>
#include<math.h>
int main(){
	int a,b,c,p,s ;
    printf("Nhap canh a=\n");
    scanf ("%d",&a);
    printf("Nhap canh b=\n");
    scanf("%d",&b);
    printf("Nhap canh c=\n");
    scanf("%d",&c);
    p=(a+b+c)/2;
    if ((a+b>c)||(a+c>b)||(b+c>a))
    { 
        printf("dien tich tam giac la s= %d\n",sqrt(p*(p-a)*(p-b)*(p-c))); 
    } 
    else 
    { 
        printf("K thoa man dieu kien "); 
        }
        }
