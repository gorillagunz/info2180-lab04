document.addEventListener("DOMContentLoaded", function()
{
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
});
