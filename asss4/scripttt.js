var names=new Array();
names[0]="Ravi";
names[1]="Raaj";
names[2]="Jhon";
names[3]="Divakar";
names[4]="Jhonny";
names[5]="Kajal";
names[6]="Tommy";
names[7]="Peggi";
names[8]="Maggie";
names[9]="Tinn";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='R'|| names[i].charAt(0)==='r'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
