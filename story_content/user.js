function ExecuteScript(strId)
{
  switch (strId)
  {
      case "63tH8XEVprp":
        Script1();
        break;
      case "5gyDzYUrEKT":
        Script2();
        break;
      case "5YMOobRR22q":
        Script3();
        break;
      case "6PHOWd83WsH":
        Script4();
        break;
      case "6hUUlYZLLV7":
        Script5();
        break;
      case "5WMH4RYWl6b":
        Script6();
        break;
      case "6MHK58sfcjL":
        Script7();
        break;
      case "5mUS8npknRD":
        Script8();
        break;
      case "5z0Ztv97Jst":
        Script9();
        break;
      case "6DiTzFQaSBY":
        Script10();
        break;
      case "5kHEoX5bfma":
        Script11();
        break;
      case "6ro5C2Kz2y6":
        Script12();
        break;
      case "5sQW7ZtNudk":
        Script13();
        break;
      case "6Zi4cLluYYU":
        Script14();
        break;
      case "60TrvDRHGcp":
        Script15();
        break;
      case "5oBO5MXwk7Y":
        Script16();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  $("#tab-customlink").hide();
}

function Script10()
{
  $("#tab-customlink").hide();
}

function Script11()
{
  $("#tab-customlink").hide();
}

function Script12()
{
  $("#tab-customlink").hide();
}

function Script13()
{
  $("#tab-customlink").hide();
}

function Script14()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script15()
{
  $("#tab-customlink").show();
}

function Script16()
{
  window.print();
}

