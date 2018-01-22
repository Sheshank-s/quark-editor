var editor = ace.edit("editor");
editor.getSession().setUseWorker(false);
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/html");
document.getElementById('editor').style.fontSize='15px';
editor.setValue(`<!DOCTYPE html>
<html>
    <head>

    <style type="text/css">
        @import url("https://fonts.googleapis.com/css?family=Ubuntu Mono");
        @import url("https://fonts.googleapis.com/css?family=Roboto");
        @import url("https://fonts.googleapis.com/css?family=Source Code Pro");
        @import url("https://fonts.googleapis.com/css?family=Montserrat");
        .heading {
            font-family: Montserrat;
        }
        #h1 {
            border-bottom: 2px #ccc solid;
            width: 100%;
            text-align: center;
            padding-bottom: 5px;
            margin-top: 150px;
        }
        body {
            text-align: center;
            color: white;
            background-size: 100% 100%;
            background-image: url("https://images.pexels.com/photos/388830/pexels-photo-388830.jpeg?w=940&h=650&auto=compress&cs=tinysrgb");
        }
        .paragraph {
            font-family: Source Code Pro;
            text-align: center;
        }
    </style>

    </head>
    <body>
        <h1 class="heading" id="h1" style="color:white">Welcome to Quark Editor</h1>
        <p class="paragraph">
            A Real Time Code Editor Made with Ace
        </p>
    </body>
</html>
`);
start();

// $('#mode').on('change', function (ev) {
//     var mode = $('option:selected').attr('value');
//     //console.log(mode)
//     editor.getSession().setMode(mode);
// });

function zoomin() {
  if (document.getElementById('editor').style.fontSize != "100px") {
    var a = document.getElementById('editor').style.fontSize.substring(0,2);
    console.log(a);
    a++;
    document.getElementById('editor').style.fontSize= a + "px";
  }
}
function zoomout() {
  if (document.getElementById('editor').style.fontSize != "10px") {
    var a = document.getElementById('editor').style.fontSize.substring(0,2);
    console.log(a);
    a--;
    document.getElementById('editor').style.fontSize= a + "px";
  }
  if (document.getElementById('editor').style.fontSize == "10px") {
    document.getElementById('editor').style.fontSize = "11px";
  }
}
editor.getSession().on('change', function(e) {
  start();
});
function start () {
  var target = $("#output")[0].contentWindow.document;
  target.open();
  target.close();
  var html = editor.getValue();
  $("body", target).append(html);
}
function json() {
  document.getElementsByClassName('dropbtn')[0].innerHTML = 'JSON <i class="fa fa-caret-down"></i>';
  editor.getSession().setMode("ace/mode/json");
  editor.setValue(`{
    "title": "Person",
    "type": "object",
    "properties": {
        "firstName": {
            "type": "string"
        },
        "lastName": {
            "type": "string"
        },
        "age": {
            "description": "Age in years",
            "type": "integer",
            "minimum": 0
        }
    },
    "required": ["firstName", "lastName"]
}`);
}
function txt() {
  document.getElementsByClassName('dropbtn')[0].innerHTML = 'TXT <i class="fa fa-caret-down"></i>';
  editor.getSession().setMode("ace/mode/text");
  editor.setValue(`This is some text
    Here is some more text`);
}
function html() {
  document.getElementsByClassName('dropbtn')[0].innerHTML = 'HTML <i class="fa fa-caret-down"></i>';
  editor.getSession().setMode("ace/mode/html");
  editor.setValue(`<!DOCTYPE html>
  <html>
      <head>

      <style type="text/css">
          @import url("https://fonts.googleapis.com/css?family=Ubuntu Mono");
          @import url("https://fonts.googleapis.com/css?family=Roboto");
          @import url("https://fonts.googleapis.com/css?family=Source Code Pro");
          @import url("https://fonts.googleapis.com/css?family=Montserrat");
          .heading {
              font-family: Montserrat;
          }
          #h1 {
              border-bottom: 2px #ccc solid;
              width: 100%;
              text-align: center;
              padding-bottom: 5px;
              margin-top: 150px;
          }
          body {
              text-align: center;
              color: white;
              background-size: 100% 100%;
              background-image: url("https://images.pexels.com/photos/388830/pexels-photo-388830.jpeg?w=940&h=650&auto=compress&cs=tinysrgb");
          }
          .paragraph {
              font-family: Source Code Pro;
              text-align: center;
          }
      </style>

      </head>
      <body>
          <h1 class="heading" id="h1" style="color:white">Welcome to Quark Editor</h1>
          <p class="paragraph">
              A Real Time Code Editor Made with Ace
          </p>
      </body>
  </html>
  `);
}
function python() {
  document.getElementsByClassName('dropbtn')[0].innerHTML = 'PYTHON <i class="fa fa-caret-down"></i>';
  editor.getSession().setMode("ace/mode/python");
  editor.setValue(`# Python program to find the factorial of a number provided by the user.

num = int(input("Enter a number: "))

factorial = 1

if num < 0:
   print("Sorry, factorial does not exist for negative numbers")
elif num == 0:
   print("The factorial of 0 is 1")
else:
   for i in range(1,num + 1):
       factorial = factorial*i
   print("The factorial of",num,"is",factorial)`);
}
function java() {
  document.getElementsByClassName('dropbtn')[0].innerHTML = 'JAVA <i class="fa fa-caret-down"></i>';
  editor.getSession().setMode("ace/mode/java");
  editor.setValue(`// Java Program
    
public class Factorial
{
	public static void main(String[] args)
	{	final int NUM_FACTS = 100;
		for(int i = 0; i < NUM_FACTS; i++)
			System.out.println( i + "! is " + factorial(i));
	}

	public static int factorial(int n)
	{	int result = 1;
		for(int i = 2; i <= n; i++)
			result *= i;
		return result;
	}
}`);
}


function dark() {
  editor.setTheme("ace/theme/monokai");
}
function idle() {
  editor.setTheme("ace/theme/idle_fingers");
}
function light() {
  editor.setTheme("ace/theme/textmate");
}
function blue() {
  editor.setTheme("ace/theme/cobalt");
}
