class Bomb{
	constructor(div){
		this.flagcount = 0;
		this.totalbombs = 20;
	}
	addingAttribute(element,property,value){
		element.setAttribute(property,value)
	}
	bomb(){
		var par = document.getElementById("mainbox");
		for(var i=0;i<par.children.length;i++){
				var chil = par.children[i]
				if(chil.classList.contains("bomb")){
					chil.style.backgroundImage = "url('https://img.favpng.com/11/14/6/minesweeper-pro-classic-mine-sweeper-minesweeper-plus-likeminesweeper-png-favpng-eFhRd7mQu8efHthfcxcRUz4ub.jpg')";
					chil.style.backgroundSize = "cover"
				}
		}
  		setTimeout(function(){ 
  			alert("Game over, Better Luck next time");
  			window.location.reload();
  	 	}, 100)
  	}

}
