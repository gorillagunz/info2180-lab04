
document.addEventListener("DOMContentLoaded", function()
{
	var playing = false;
	var lose=false;
var boundaries = document.getElementsByClassName("boundary");
	for(var x =0; x < (boundaries.length-1); x++)
	{
		boundaries[x].addEventListener("mouseover",function()
			{
				for (var j =0; j <(boundaries.length-1); j++)
				{

					lose= true;
					boundaries[j].setAttribute ("class", "boundary youlose");
				}

			});

	}
	var restart= document.getElementById("start");
		restart.addEventListener("click",function()
			{
		for(var x =0; x < (boundaries.length-1); x++)
			{
				for (var j =0; j <(boundaries.length-1); j++)
				{
					lose=false;
					boundaries[j].setAttribute ("class","boundary");
				}
		}
		playing= true;
		document.getElementById("status").innerHTML = "Move your mouse over the 'S' to begin.";
});
			
		

	var win= document.getElementById("end");
 win.addEventListener("mouseover",function()
	{
		if (lose== true)
		{
			document.getElementById("status").innerHTML = "You lose";;
		}
		else
		{
			document.getElementById("status").innerHTML = "You win";;
		}
		
	
	
 });

 	var sa = document.getElementById("start");
 	var s = document.getElementById("start").offsetWidth;
 	var b = document.getElementById("boundary1").offsetHeight;
 	var se=document.getElementById("start").offsetLeft;
 	var x = event.clientX;
 	var y = event.clientY;
 	restart.addEventListener("mouseover", function()
 	{
 		if(playing== true)
 		{
 			s=document.getElementById("maze").offsetLeft;
 			x= event.clientX;
 			if(x<s)
 			{
 				document.getElementById("status").innerHTML ="Cheater!!!";

 				for(var p =0; x < (boundaries.length-1); p++)
						{
							if (playing)
					for (var j =0; j <(boundaries.length-1); j++)
							{
					
					boundaries[j].setAttribute ("class","boundary youlose");
							}
						}	
 			}
 			
 		}

 	});
});
