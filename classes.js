/*
	we need a class which should create a board 
	we need a class for bomb 
	we need a class for not bomb

*/
	var bombcount = 0;
	var totalbombs = 20;
	var validcount = 0;
	var totalvalid = 80;
	var flagcount = 0;
	for(var i=1;i<101;i++){
		creatingBox(i);
	}
	function creatingBox(i){
		var arr = ["bomb","valid"];
		var div = document.createElement("DIV");
		addingAttribute(div,"id",i);
		var cls = arr[Math.floor(Math.random()*arr.length)];
		if(cls=="bomb"){
			if(bombcount>totalbombs-1){
				var valid = new Valid(div);
				valid.addingAttribute(div,"class","valid");
				div.onclick = function(){
      		var obj = new Valid();
      		obj.click(div)
      	}
      	//cntrl and left click
      	div.oncontextmenu = function(e){
      		e.preventDefault()
        	addingMark(div)
      	}
				validcount++;
			}
			else{
				var bomb = new Bomb(div);
				bomb.addingAttribute(div,"class","bomb");
				div.onclick = function(){
      		var obj = new Valid();
      		obj.click(div)
      	}
				//cntrl and left click
      div.oncontextmenu = function(e){
      	e.preventDefault()
        addingMark(div)
      }
				bombcount++;
			}
		}
		else{
			if(validcount>totalvalid-1){
				var bomb = new Bomb(div);
				bomb.addingAttribute(div,"class","bomb");
				div.onclick = function(){
      		var obj = new Valid();
      		obj.click(div)
      	}
				///cntrl and left click
      div.oncontextmenu = function(e){
      	e.preventDefault()
        addingMark(div)
      }
				bombcount++;
			}
			else{
				var valid = new Valid(div);
				valid.addingAttribute(div,"class","valid");
				div.onclick = function(){
      		var obj = new Valid();
      		obj.click(div)
      	}
				//cntrl and left click
      div.oncontextmenu = function(e){
      	e.preventDefault()
        addingMark(div)
      }
				validcount++;
			}
		}
		document.getElementById("mainbox").appendChild(div);
	}
	function addingAttribute(element,property,value){
		element.setAttribute(property,value)
		console.log(element);
	}

	function addingMark(element){
  	verifybomb = true;
  	if(element.classList.contains("mark")){
  			element.classList.remove("mark");
  			flagcount--;
  			document.getElementById("flagcount").innerHTML = totalbombs-flagcount;
  	}
  	else if(!element.classList.contains("checked")){
  			flagcount++;
  			element.classList.add("mark");
  			document.getElementById("flagcount").innerHTML = totalbombs-flagcount;
  			setTimeout(function(){ 
		  			if (flagcount==totalbombs){
  				var par = document.getElementById("mainbox");
					for(var i=0;i<par.children.length;i++){
							var chil = par.children[i]
							if(chil.classList.contains("bomb")){
									if(!chil.classList.contains("mark")){
										verifybomb = false
									}
							}
						}
						if(!verifybomb){
  			alert("Game over better luck next time");
  			window.location.reload();
  		}
  		else{
  			var par = document.getElementById("mainbox");
  			for(var i=0;i<par.children.length;i++){
							var chil = par.children[i]
							if(chil.classList.contains("valid")){
								var obj = new Valid();
									obj.click(chil);
						}
				}
				setTimeout(function(){ 
					document.getElementById("result").innerHTML = "You have won"
				 }, 100);
				setTimeout(function(){ 
					window.location.reload();
				 }, 1000);
  		}
				}
		},100)
  			
  	}
  }
	


