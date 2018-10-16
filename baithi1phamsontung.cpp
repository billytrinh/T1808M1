#include<iostream>
#include<math.h>


int main()
{
	int a,b,c,s;
	int p,dientich;
	printf("nhap canh a:\n");
	scanf("%d",&a);
	printf("nhap canh b:\n");
	scanf("%d",&b);
	printf("nhap canh c:\n");
	scanf("%d",&c);
	p=(a+b+c)/2;
	if((a+b>c)&&(a+c>b)&&(b+c>a)&&(a>0)&&(b>0)&&(c>0))
	{
		s=sqrt(p*(p-a)*(p-b)*(p-c));
          printf("dien tich tan giac s =%d ",s);
	  
	}
	
}
