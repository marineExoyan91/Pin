let i = 1;
function func(f){
	let x = document.getElementsByTagName('div')
	let y = document.querySelector('q')
	for(i = 0; i < x.length; i++){
	if(i%2==0){
		f.style.backgroundColor = "grey";	
	}else{
		y.style.backgroundColor = "#FFB47A";
	}	
}
}