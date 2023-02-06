


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {

	document.getElementById("myDropdown").classList.toggle("show");

  }

function myFunction1() {

  document.getElementById("myDropdown1").classList.toggle("show1");
  
  }

function myFunction2() {
  
  document.getElementById("myDropdown2").classList.toggle("show2");
  
  }

function myFunction3() {
  
  document.getElementById("myDropdown3").classList.toggle("show3");
	
 }



  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {

	if (!event.target.matches('.dropbtn')) {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];


		if (!openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}
  

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

  
  // Close the dropdown menu if the user clicks outside of it
  /*window.onclick = function(event) {*/

	if (!event.target.matches('.dropbtn1')) {
	  var dropdowns1 = document.getElementsByClassName("dropdown-content1");
	  var i;
	  for (i = 0; i < dropdowns1.length; i++) {
		var openDropdown1 = dropdowns1[i];


		if (!openDropdown1.classList.contains('show1')) {
		  openDropdown1.classList.remove('show1');
		}
	  }
	}


  if (!event.target.matches('.dropbtn2')) {
	  var dropdowns2 = document.getElementsByClassName("dropdown-content2");
	  var i;
	  for (i = 0; i < dropdowns2.length; i++) {
		var openDropdown2 = dropdowns2[i];


		if (!openDropdown2.classList.contains('show2')) {
		  openDropdown2.classList.remove('show2');
		}
	  }
	}

 if (!event.target.matches('.dropbtn3')) {
		var dropdowns3 = document.getElementsByClassName("dropdown-content3");
		var i;
		for (i = 0; i < dropdowns3.length; i++) {
		  var openDropdown3 = dropdowns3[i];
  
  
		if (!openDropdown3.classList.contains('show3')) {
			openDropdown3.classList.remove('show3');
		  }
		}
	  }
  




  }







function createBodyBackground() {

    let outBackground = document.getElementById("outBackground").value;  

    let out = document.getElementById("out");

    out.style.background = outBackground;

}

function createText() {

    let text = document.getElementById("text").value;

    let inText = document.getElementById("inText");
    inText.innerHTML = text;

    let textsize = document.getElementById("font size").value;
    inText.style.fontSize = textsize + "px";

   /* let poziciyaText = document.getElementById("poziciyaText").value;
    inText.style.paddingLeft = poziciyaText + 'px';*/

    let colorText = document.getElementById("colorText").value;
    inText.style.color = colorText;


}
