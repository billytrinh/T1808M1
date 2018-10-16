#include<conio.h>
#include <stdio.h>
#include <ctype.h>
#include <string.h>
void viethoa(char *ten){
  int i;
  int len=strlen(ten);
  ten[0]=toupper(ten[0]);
  for(i=1;i<len;i++)
    if(ten[i]==' ')   
      ten[i+1]=toupper(ten[i+1]);
     else
       ten[i]=toupper(ten[i]);

  }
}
int main(){
  char ten[30];
  printf("nhap ten ");
  gets(ten);
  viethoa(ten);
  puts(ten);
}
