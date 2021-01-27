var firebaseConfig = 
  {
    apiKey: "AIzaSyBCNtXCCklUo-BgrD3sGtsKRbLZUyu1AII",
    authDomain: "covidregister-28fac.firebaseapp.com",
    projectId: "covidregister-28fac",
    storageBucket: "covidregister-28fac.appspot.com",
    messagingSenderId: "912829129363",
    appId: "1:912829129363:web:cb5eef5fc15bbb6da1e366",
    measurementId: "G-NFLK2S56LN"
  };
  
  firebase.initializeApp(firebaseConfig);
  



var button = document.getElementById("sgn");

button.addEventListener("click",function(){

	var name = getInputVal('inputname3');

	var email = document.getElementById("inputEmail3").value;
	var password = document.getElementById("inputPassword3").value;
	var age = document.getElementById("inputage3").value;

	var covid = $("input:radio[name=gridRadiosco]:checked").val()

	var respiratory = $("input:radio[name=gridRadiosre]:checked").val()

	var health = $("input:radio[name=gridRadioshe]:checked").val()

	var diabetes = $("input:radio[name=gridRadiosdi]:checked").val()

	var e = document.getElementById("professions");
    var profUser = e.options[e.selectedIndex].text;

    console.log(name);

    if (name == "" || email == "" || password == "" || age =="" || covid == "" || respiratory == "" || health == "" || diabetes == "" || profUser == "")
    {
    	alert("Please Enter the Fields");
    }		

    else
    {
    	var data =
    	{
    		name:  name,
    		age: age,
    		email: email,
    		password:password,
    		covidcase:covid,
    		insurance: health,
    		diabetic : diabetes,
    		rspiratory : respiratory,
    		profession : profUser,
    	};

    	var database = firebase.database();

    	var ref = database.ref("records");

    	ref.push(data);
    }





})