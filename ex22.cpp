#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct human
{
	char name[20];
	int year;
} humanX;

struct men
{
	struct human info;
	char gender[10];
};

int main(){
	// struct men *ptr;
	// struct men levanA;
	// ptr = &levanA;
	// strcpy(ptr->gender,"nam");
	// strcpy((ptr->info).name,"Le van A");
	// (ptr->info).year = 1999;

	// printf("%s -- %d --  %s\n",levanA.info.name,levanA.info.year,levanA.gender);

	humanX *p;

	p = (humanX*)malloc(5*sizeof(humanX));
	for (int i = 0; i < 5; ++i)
	{
		printf("Nhap ten:\n");
		scanf("%s",(p+i)->name);
		(p+i)->year = 1999+i;
	}

	for (int i = 0; i < 5; ++i)
	{
		printf("Ho va ten: %s -- nam sinh: %d\n",(p+i)->name,(p+i)->year);
	}


}