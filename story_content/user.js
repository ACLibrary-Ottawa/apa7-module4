function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6aWqjLolHNR":
        Script1();
        break;
      case "6TYvNLUI7bE":
        Script2();
        break;
      case "6E48OTUTSFS":
        Script3();
        break;
      case "65aHGarxT3D":
        Script4();
        break;
      case "6rpOR5LhxMV":
        Script5();
        break;
  }
}

function Script1()
{
  $('.btn.cs-button.volume').show()
}

function Script2()
{
  var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear();
var player = GetPlayer();
var newName = month + "/" + day + "/" +year
player.SetVar("DateValue", newName);
}

function Script3()
{
  var player = GetPlayer();

var theName =(
player.GetVar("NameField")
)

var theDate =(
player.GetVar("DateValue")
)

var theScore =(
player.GetVar("correctcounter")
)

var theQ1 =(
player.GetVar("Q1")
)

var theQ3 =(
player.GetVar("Q3")
)

var theQ4 =(
player.GetVar("Q4")
)

var theQ5 =(
player.GetVar("Q5")
)

var theQ6 =(
player.GetVar("Q6")
)

var theQ7 =(
player.GetVar("Q7")
)

var theQ8 =(
player.GetVar("Q8")
)

var theQ9 =(
player.GetVar("Q9")
)

var theQ10 =(
player.GetVar("Q10")
)

var theQ11 =(
player.GetVar("Q11")
)

var theQ12 =(
player.GetVar("Q12")
)

var theQ13 =(
player.GetVar("Q13")
)

var theQ14 =(
player.GetVar("Q14")
)

var urlstring = ("printCertificate.html?print=" + theName + "&" + theDate + "&" + theScore + "&" + theQ1 + "&" + theQ3 + "&" + theQ4 + "&" + theQ5 + "&" + theQ6 + "&" + theQ7 + "&" + theQ8 + "&" + theQ9 + "&" + theQ10 + "&" + theQ11+ "&" + theQ12+ "&" + theQ13+ "&" + theQ14 );

window.open(urlstring,"_blank","width=800,height=600,menubar=no");

}

function Script4()
{
  var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear();
var player = GetPlayer();
var newName = month + "/" + day + "/" +year
player.SetVar("DateValue", newName);
}

function Script5()
{
  var player = GetPlayer();

var theName =(
player.GetVar("NameField")
)

var theDate =(
player.GetVar("DateValue")
)

var urlstring = ("printCertificate.html?print=" + theName + "&" + theDate);

window.open(urlstring,"_blank","width=800,height=600,menubar=no");

}

