function odliczanie()
		{
		var dzisiaj = new Date();

		var dzien =  ("0" + dzisiaj.getDate()).slice(-2);
		var miesiac = ("0" + (dzisiaj.getMonth()+1)).slice(-2);
		var rok = dzisiaj.getFullYear();

		var godzina = ("0" + dzisiaj.getHours()).slice(-2)
		var minuta = ("0" + dzisiaj.getMinutes()).slice(-2);
		var sekunda = ("0" + dzisiaj.getSeconds()).slice(-2);

		document.getElementById("zegar").innerHTML = dzien+"/"+miesiac+"/"+rok+"|"+godzina+":"+minuta+":"+sekunda;

		setTimeout("odliczanie()",1000);
		}
