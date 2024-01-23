//your JS code here. If required.
let id = document.getElementById("fname");
id.addEventListener("blur", function()  {
			
			id.value = id.value.toUpperCase();
		});