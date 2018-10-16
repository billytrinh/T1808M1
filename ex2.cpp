#include <stdio.h>
#include <math.h>

int main(){
    float a,b,c,s,p;
    printf ("nhap canh thu nhat vao day:\n");
    scanf ("%f",&a);
    printf ("nhap canh thu hai vao day:\n");
    scanf ("%f",&b);
    printf ("nhap canh thu ba vao day:\n");
    scanf ("%f",&c);
    if ( a==b && a==c){
	printf ("tam giac deu");
	}
    p = (a+b+c)/2;
    if ((a+b>c) || (b+c>a) || (a+c>b))
    
    {
	   s =sqrt (p*(p-a)*(p-b)*(p-c));
	   printf ("dien tich tam giac la :%f",s);
	}
	else
	{
	  printf ("khong phai la tam giac");
	}
    
   return 0;





}
