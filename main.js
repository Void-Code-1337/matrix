function draw(){

	var canvas = document.getElementById('tutorial');
	var ctx = canvas.getContext('2d');
	
	canvas.height=300;
	
	var f="ASDFGHJKLQWERTYUIOPZXCVBNM1234567890asdfghjklqwertyuiopzxcvbnm";
	fl=f.length;
	canvas.width=fl*10;
	var pos={};
	for(var i=0;i<fl;i+=1){
		pos[i]=0;
	}

	setInterval(function(){
	ctx.font = "10px Arial";
	ctx.fillStyle='green';	
	var ltr=Math.floor(Math.random()*fl);
	var x=ltr*10;
	var y=pos[ltr];
	pos[ltr]+=10;
	if(pos[ltr]>310){
		pos[ltr]=0;
		ctx.beginPath();
		ctx.rect(x,0,10,330);
		ctx.fillStyle='rgba(0,1,0,0.8)';
		ctx.fill();
	}
	var ltr=Math.floor(Math.random()*fl);

	ctx.fillText(f[ltr],x,y); 

	},1);

	setInterval(function(){
	ctx.font = "10px Arial";
	ctx.fillStyle='green';	
	var ltr=Math.floor(Math.random()*fl);
	var x=ltr*10;
	var y=pos[ltr];
	pos[ltr]+=10;
	if(pos[ltr]>310){
		pos[ltr]=0;
		ctx.beginPath();
		ctx.rect(x,0,10,330);
		ctx.fillStyle='rgba(0,1,0,0.8)';
		ctx.fill();
	}
	var ltr=Math.floor(Math.random()*fl);

	ctx.fillText(f[ltr],x,y); 

	},1);
	
}