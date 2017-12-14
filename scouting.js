var submitForm = function(){
	
	var info = [document.getElementById("1").value,document.getElementById("2").value,document.getElementById("3").value,document.getElementById("4").value,document.getElementById("5").value,document.getElementById("6").value];
	
	var nm = document.getElementById("0").value;
	
	console.log(nm);
	
	var td = info[0]/info[1]*100;
	var fg = info[2]/info[3]*100;
	var ep = info[4]/info[5]*100;
	var overall = (td*6 + fg + ep*2)/9;
	
  document.getElementById("name").innerHTML = ("Profile: "+(String)(nm));
  document.getElementById("tdaccuracy").innerHTML = ("Touchdown Accuracy: "+(String)(td).substring(0,5)+"%");
  document.getElementById("fgaccuracy").innerHTML = ("Field Goal Accuracy: "+(String)(fg).substring(0,5)+"%");
  document.getElementById("epaccuracy").innerHTML = ("Extra Point Accuracy: "+(String)(ep).substring(0,5)+"%");
  document.getElementById("overall").innerHTML = ("Overall Performance: "+(String)(overall).substring(0,5)+"%");
}
