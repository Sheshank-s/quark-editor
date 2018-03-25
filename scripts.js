var editor = ace.edit("editor");
var fileExtension = ".html";
editor.getSession().setUseWorker(false);
editor.setTheme("ace/theme/tomorrow_night");
editor.getSession().setMode("ace/mode/html");
document.getElementById('editor').style.fontSize='15px';
ace.require("ace/ext/language_tools");
editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });
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
            background: #363650;
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
`, cursorPos=-1);
start();

// $('#mode').on('change', function (ev) {
//     var mode = $('option:selected').attr('value');
//     //console.log(mode)
//     editor.getSession().setMode(mode);
// });
function togglepreview() {
  if (document.getElementById("editor").style.width == "100%" && document.getElementById("editor").style.height == "95%"){
    removepreview();
  }
  else {
    addpreview();
  }
}
function addpreview() {
  document.getElementById("output").style.display = "none";
  document.getElementById("editor").style.width = "100%";
  document.getElementById("editor").style.height = "95%";
  document.getElementById("enable").innerText = "Enable";
}
function removepreview() {
  document.getElementById("output").style.display = "block";
  document.getElementById("enable").innerText = "Disable";
  vertical();
}
function horizontal() {
  document.getElementById("horizontal").style.backgroundColor = "#aaaaaa";
  document.getElementById("vertical").style.backgroundColor = "#d3d3d3";

  document.getElementById("editor").style.right = 0;
  document.getElementById("editor").style.bottom = "50%";
  document.getElementById("editor").style.height = "47%";
  document.getElementById("editor").style.width = "100%";

  document.getElementById("output").style.left = 0;
  document.getElementById("output").style.bottom = 0;
  document.getElementById("output").style.top = "unset";
  document.getElementById("output").style.height = "46%";
  document.getElementById("output").style.width = "100%";
}
function vertical() {
  document.getElementById("vertical").style.backgroundColor = "#aaaaaa";
  document.getElementById("horizontal").style.backgroundColor = "#d3d3d3";

  document.getElementById("editor").style.right = "50%";
  document.getElementById("editor").style.bottom = 0;
  document.getElementById("editor").style.height = "95%";
  document.getElementById("editor").style.width = "50%";
  document.getElementById("editor").style.left = 0;
  document.getElementById("editor").style.top = "52.4px";

  document.getElementById("output").style.left = "50%";
  document.getElementById("output").style.bottom = 0;
  document.getElementById("output").style.height = "100%";
  document.getElementById("output").style.width = "50%";
  document.getElementById("output").style.top = "52.4px";
}
function zoomin() {
  if (document.getElementById('editor').style.fontSize != "30px") {
    var a = document.getElementById('editor').style.fontSize.substring(0,2);
    console.log(a);
    a++;
    document.getElementById('editor').style.fontSize= a + "px";
  }
  update();
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
  update();
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
  document.getElementById("output").style.display = "none";
  document.getElementById("editor").style.width = "100%";
  document.getElementById("editor").style.height = "95%";
  fileExtension = ".json";
  document.getElementsByClassName('dropbtn')[0].innerHTML = 'JSON <i class="fa fa-caret-down"></i>';
  editor.getSession().setMode("ace/mode/json");
  document.getElementById("menu1").innerHTML = `JSON <span class="caret"></span>`;
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
  document.getElementById("output").style.display = "none";
  document.getElementById("editor").style.width = "100%";
  document.getElementById("editor").style.height = "95%";
  fileExtension = ".txt";
  document.getElementsByClassName('dropbtn')[0].innerHTML = 'TXT <i class="fa fa-caret-down"></i>';
  document.getElementById("menu1").innerHTML = `Text <span class="caret"></span>`;
  editor.getSession().setMode("ace/mode/text");
  editor.setValue(`This is some text
    Here is some more text`);
}
function html() {
  removepreview();
  fileExtension = ".html";
  document.getElementsByClassName('dropbtn')[0].innerHTML = 'HTML <i class="fa fa-caret-down"></i>';
  editor.getSession().setMode("ace/mode/html");
  document.getElementById("menu1").innerHTML = `HTML <span class="caret"></span>`;
  editor.setValue(`<!DOCTYPE html>
  <html>
      <head>

      <style type="text/css">
          @import url("https://fonts.googleapis.com/css?family=Ubuntu Mono");
          @import url("https://fonts.googleapis.com/css?family=Roboto");
          @import url("https://fonts.googleapis.com/css?family=Source Code Pro");
          @import url("https://fonts.googleapis.com/css?family=Montserrat");
          .heading {
              font-family: Roboto;
              font-weight: 500;
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
              background: #363650;
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
  document.getElementById("output").style.display = "none";
  document.getElementById("editor").style.width = "100%";
  document.getElementById("editor").style.height = "95%";
  fileExtension = ".py";

  document.getElementsByClassName('dropbtn')[0].innerHTML = 'PYTHON <i class="fa fa-caret-down"></i>';
  editor.getSession().setMode("ace/mode/python");
  document.getElementById("menu1").innerHTML = `Python <span class="caret"></span>`;
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
  document.getElementById("output").style.display = "none";
  document.getElementById("editor").style.width = "100%";
  document.getElementById("editor").style.height = "95%";
  fileExtension = ".java";
  document.getElementById("menu1").innerHTML = `Java <span class="caret"></span>`;
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

$("#btn-save").click( function() {
  var text = editor.getValue();
  var filename = $("#input-fileName").val();
  if (filename == "") {
    filename = "Untitled";
  }
  var extension = fileExtension;
  var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
  saveAs(blob, filename+extension);
});


function dark() {
  document.getElementById("menu2").innerHTML = `Quark Dark <span class="caret"></span>`;
  editor.setTheme("ace/theme/monokai");
}
function tommorowlight() {
  document.getElementById("menu2").innerHTML = `Quark Tomorrow Light <span class="caret"></span>`;
  editor.setTheme("ace/theme/tomorrow");
}
function tommorowdark() {
  document.getElementById("menu2").innerHTML = `Quark Tomorrow Dark <span class="caret"></span>`;
  editor.setTheme("ace/theme/tomorrow_night");
}
function tommorowblue() {
  document.getElementById("menu2").innerHTML = `Quark Tomorrow Blue <span class="caret"></span>`;
  editor.setTheme("ace/theme/tomorrow_night_blue");
}
function idle() {
  document.getElementById("menu2").innerHTML = `Quark Gray <span class="caret"></span>`;
  editor.setTheme("ace/theme/idle_fingers");
}
function light() {
  document.getElementById("menu2").innerHTML = `Quark Light <span class="caret"></span>`;
  editor.setTheme("ace/theme/textmate");
}
function blue() {
  document.getElementById("menu2").innerHTML = `Quark Blue <span class="caret"></span>`;
  editor.setTheme("ace/theme/cobalt");
}
var open = false;
function modal1close() {
  document.getElementsByClassName("modal1overlay")[0].style.visibility = "hidden";
  document.getElementsByClassName("modal1")[0].style.visibility = "hidden";
  document.getElementsByClassName("modal1overlay")[0].style.opacity = 0;
  document.getElementsByClassName("modal1")[0].style.opacity = 0;
  document.getElementsById("editor").style.position = "absolute";
  document.getElementsById("output").style.position = "absolute";
  open = false;
}
function modal1open() {
  document.getElementsByClassName("modal1overlay")[0].style.visibility = "visible";
  document.getElementsByClassName("modal1")[0].style.visibility = "visible";
  document.getElementsByClassName("modal1overlay")[0].style.opacity = 1;
  document.getElementsByClassName("modal1")[0].style.opacity = 1;
  document.getElementById("zoom").value = document.getElementById("editor").style.fontSize;
  open = true;
}

function modalcontrol() {
  if (open) {
    document.getElementsByClassName("close")[0].click();
  }
  else {
    modal1open();
  }
}

function update() {
  document.getElementById("zoom").value = document.getElementById("editor").style.fontSize;
}

/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.4
 * 2018-01-12 13:14:0
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this
));

if (typeof module !== "undefined" && module.exports) {
	module.exports.saveAs = saveAs;
} else if ((typeof define !== "undefined" && define !== null) && (define.amd !== null)) {
	define("FileSaver.js", function() {
		return saveAs;
	});
}

/* Beautify Code */

function process(str) {

    var div = document.createElement('div');
    div.innerHTML = str.trim();

    return format(div, 0).innerHTML;
}

function format(node, level) {

    var indentBefore = new Array(level++ + 1).join('  '),
        indentAfter  = new Array(level - 1).join('  '),
        textNode;

    for (var i = 0; i < node.children.length; i++) {

        textNode = document.createTextNode('\n' + indentBefore);
        node.insertBefore(textNode, node.children[i]);

        format(node.children[i], level);

        if (node.lastElementChild == node.children[i]) {
            textNode = document.createTextNode('\n' + indentAfter);
            node.appendChild(textNode);
        }
    }

    return node;
}

function beautify() {
  if (editor.session.getMode().$id == "ace/mode/html") {
    editor.setValue(process(editor.getValue()));
  }
}
