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
	var win= document.getElementById("end");
 win.addEventListener("mouseover",function()
	{
		if (lose== true)
		{
			alert("You lose");
		}
		else
		{
			alert("you win");
		}
 });
