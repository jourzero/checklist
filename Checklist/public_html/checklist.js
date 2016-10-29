
function getstatus()
{
	var tot = lst.length;
	var checked = 0;
	for (var i=0;i<=document.getElementsByTagName("input").length-1;i++)
	{		
		if (document.getElementsByTagName("input")[i].type==='checkbox' && document.getElementsByTagName("input")[i].checked)
		{
			checked+=1;
		}
	}
	$('status').innerHTML = '&nbsp;'+Math.round((checked/tot)*100) + ' % completed&nbsp;(' + checked + ' of ' + tot + ')';
}
function escapeHTML(value)
{
    function replaceChars(ch)
    {
        switch (ch)
        {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case "'":
                return "&#39;";
            case '"':
                return "&quot;";
        }
        return "?";
    };
    return String(value).replace(/[<>&"']/g, replaceChars);
}

var w = null;
function toggle_exec_sum(flag)
{
	if(flag)
		$('exec_sum_place').innerHTML = '';
	else 
		$('exec_sum_place').innerHTML = '<textarea cols="85" rows="10" id="exec_sum" style="display:none"></textarea>';
}
function report()
{
    var site =$('site').value;
	if (site==='http://'){alert('Please fill up target!');$('site').focus();return;}	
	var pentester =$('pentester').value;
	if (pentester===''){alert('Please fill up pentester!');$('pentester').focus();return;}
	site = escapeHTML(site);
	pentester = escapeHTML(pentester);
	var exec_sum = escapeHTML($('exec_sum').value);
	toggle_exec_sum(true);
		
	var d = new Date();
	var date = (d.getMonth()+1)+ '-' + d.getDate()  +'-'  +d.getFullYear();
	var tot = lst.length;
	var testno = 0;
	var flawno = 0;
	var flawindex = new Array();
	var flaw_identified = false;
	var details = '';
	var html = '';
        var m = '';
	
	for (var i=0;i<=document.getElementsByTagName("input").length-1;i++)
	{		
		if (document.getElementsByTagName("input")[i].type==='checkbox' && document.getElementsByTagName("input")[i].checked===1)
		{
			testno+=1;
		}	
	}
	var counterj = 1;
	for(var j=0;j<=document.getElementsByTagName("textarea").length-1;j++)
	{
		
		if (!document.getElementsByTagName("textarea")[j].disabled)
		{
			/*
			if ($('vt-' + j ).innerHTML==='YES')
			{				
				var prob = lst[j];				
				prob = prob.replace(/Test /,"");prob = prob.replace(/Testing /g,"");
				prob = prob.replace(/Check /,"");
				prob = prob.replace(/Do /,"");
				prob = prob.replace(/Identify /,"");
				prob = prob.replace(/Discover /,"");
				prob = prob.replace(/Understand /,"");
				prob = prob.replace(/for /gi,"");
				prob = prob.replace(/Testing for/g,"");
				prob = prob.replace(/the/g,"");
				prob = prob.replace(/any /g,"");
				prob = prob.replace(/Map /,"");
				prob = prob.replace(/Fuzz all /,"");				
				prob = prob.replace(/Follow up /,"");
				if(prob[0]===" ")
				{
					prob = prob.replace(/ /,"");
				}
				prob = prob[0].toUpperCase()+prob.substr(1,prob.length);
				details += 'Flaw ' + counterj + '. <span style="font-weight:bold;">' + prob + '</span>&nbsp;&nbsp;' + '&#8212; Refer to <span style="text-decoration:underline;"><a href="#test-' + (j+1) + '">Test ' + (j+1) + '</a></span><br \/>';
				details +='<br \/>';	
				flaw_identified = true;
				counterj++;			
			}
                        */

			
		}		
	}

	if(flaw_identified===false)
	{
		details += '-None-';
	}	
		
	details += '<h3><span style="-moz-border-radius:2% 2% 2% 2%;padding:0% 1% 0% 1%;background-color:black;color:white;">&nbsp;Results Detailed&nbsp;&nbsp;</span></h3>';
	
	var a = false;var b=false;var c=false; var d = false;var e=false;var f=false;var g=false;var h = false;var i = false;var j=false;var k=false;var l=false;
	
	for(var j=0;j<=document.getElementsByTagName("textarea").length-1;j++)
	{

		if (!document.getElementsByTagName("textarea")[j].disabled)
		{
			var isvul = '';
                        /*
			if (($('vt-' + j )) && ($('vt-' + j ).innerHTML==='YES') )
			{
				isvul = '<br/>Vulnerable? <span style="font-weight:bold;color:red">YES</span><br/>';		
				flawno+=1;
			}
			else if (($('vt-' + j )) && ($('vt-' + j ).innerHTML==='NO') )
			{
				isvul = '<br/>Vulnerable? <span style="font-weight:bold;">NO</span><br/>';
			}
			else
			{
				isvul = '<span></span>';
			}
                        */
		
		switch(key[lst[j]])
		{
			case 1:
			if(a===false){details += '<h3>&#8224; Phase 1. ' + phase[0] + ' &#8224;</h3>';a=true;}
			break;
			case 2:
			if(b===false){details += '<h3>&#8224; Phase 2. ' + phase[1] + ' &#8224;</h3>';b=true;}
			break;
			case 3:
			if(c===false){details += '<h3>&#8224; Phase 3. ' + phase[2] + ' &#8224;</h3>';c=true;}
			break;				
			case 4:
			if(d===false){details += '<h3>&#8224  Phase 4. ' + phase[3] + ' &#8224</h3>';d=true;}
			break;			
			case 5:
			if(e===false){details += '<h3>&#8224  Phase 5. ' + phase[4] + ' &#8224</h3>';e=true;}
			break;				
			case 6:
			if(f===false){details += '<h3>&#8224  Phase 6. ' + phase[5] + ' &#8224</h3>';f=true;}
			break;				
			case 7:
			if(g===false){details += '<h3>&#8224  Phase 7. ' + phase[6] + ' &#8224</h3>';g=true;}	
			break;
			case 8:
			if(h===false){details += '<h3>&#8224  Phase 8. ' + phase[7] + ' &#8224</h3>';h=true;}
			break;
			case 9:
			if(j===false){details += '<h3>&#8224  Phase 9. ' + phase[8] + ' &#8224</h3>';j=true;}
			break;			
			case 10:
			if(k===false){details += '<h3>&#8224  Phase 10. ' + phase[9] + ' &#8224</h3>';k=true;}			
			break;
                        case 11:
			if(l===false){details += '<h3>&#8224  Phase 11. ' + phase[10] + ' &#8224</h3>';l=true;}			
			break;
                        case 12:
			if(m===false){details += '<h3>&#8224  ' + phase[11] + ' &#8224</h3>';m=true;}			
			break;
		}		

					
			//details += '<a name="test-' + (j+1) + '"></a>Test ' + (j+1) + '. <span style="font-weight:bold;">' + lst[j] + '</span><br />Vulnerable? ' + isvul +'<br \/>';
			details += '<a name="test-' + (j+1) + '"></a>Test ' + (j+1) + '. <span style="font-weight:bold;">' + lst[j] + '</span>' + isvul;
			if (document.getElementsByTagName("textarea")[j].value.length!==0)
			{
				var res = document.getElementsByTagName("textarea")[j].value;
				res = res.replace(/'/g,'&apos;');res = res.replace(/"/g,'&quot;');
				res = res.replace(/</g,'&lt;');res = res.replace(/>/g,'&gt;');
                                res = res.replace(/\\/g,'\\');res = res.replace(/%0a/g,'<br/>');
                                res = res.replace(/\n/g,'<br/>');
				//res = '<textarea style="width:100%;border:0px;font-family:arial" cols="100" rows="6">' + res + '</textarea>';
				details += 'Result/Note:<br \/><div style="padding:2% 2% 2% 2%;border:1px dashed;">' + res + '<\/div>';
			}
			details +='<br \/>';
			
		}		
	}
//	alert(details);return;

	html = '<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><title>';
	html += site + ' | Web Application Security Assessment Report</title><style type="text/css">body{line-height:1.8em;padding:2% 3% 3% 3%;font-family:Georgia;}a{text-decoration:none;color:black;}.style1{-moz-border-radius:2% 2% 2% 2%;background-color:#000000;color:#FFFFFF;font-weight:bold;text-align:center;font-size:1.2em;}.style2{text-decoration:none;font-weight:bold}</style></head><body><h1>';
	html +=  'Security Assessment for ' + site + '</h1><br/><table cellpadding="4" cellspacing="4"style="border:1px solid;"><tr><td colspan="2" class="style1">Summary</td></tr><tr><td width="42%">Target:&nbsp;</td><td width="58%">';
	html += '<a href="'+site+'" target="_blank" class="style2">'+site+'</a>';
	html += '</td></tr><tr><td>Methodology used:</td><td><strong>OWASP TestingGuide v3</strong></td></tr><tr><td>Number Of Tests:</td><td><strong>';
	html += testno;
	html += '</strong></td></tr><tr><td>Number Of Flaws:</td><td><strong>';
	html += flawno;
	html += '</strong></td></tr><tr><td>Date:<br/>(mm/dd/yyyy)</td><td><strong>';
	html += date;
	html += '</strong></td></tr><tr><td>Penetration Tester:</td><td><strong>';
	html += pentester;
	if(exec_sum.length>1)
	{
		html += '</strong></td></tr></table><br/><h3><span style="-moz-border-radius:2% 2% 2% 2%;padding:0% 1% 0% 1%;background-color:black;color:white;">&nbsp;Executive Summary&nbsp;&nbsp;</span></h3>';
   		html += '<span style="padding:1% 1% 1% 1%">' + exec_sum+'<br/></span>';
   }
   else
   {
		html += '</strong></td></tr></table>';
   }						
	html += '<br/><h3><span style="-moz-border-radius:2% 2% 2% 2%;padding:0% 1% 0% 1%;background-color:black;color:white;">&nbsp;Problems Identified&nbsp;&nbsp;</span></h3>';					
	html += details;					
	html += '<br/></body></html>';								
	
	w = window.open('');	
	if(w===null){alert("Please allow popup!");return;}
	w.document.write(html);
	setTimeout("w.stop();",5000);
	toggle_exec_sum(false);
	$('exec_sum').value = exec_sum;	
}

function reset()
{
	lst = new Array();
	lst = lst.concat(lst_bak);
	populate();
}
function checkall()
{
	for (var i=0;i<=document.getElementsByTagName("input").length-1;i++)
	{
		if (document.getElementsByTagName("input")[i].type=='checkbox')
		{
		 	document.getElementsByTagName("input")[i].checked=1;
		}
				
	}	
	for(var j=0;j<=document.getElementsByTagName("textarea").length-1;j++)
	{	
		document.getElementsByTagName("textarea")[j].disabled="";
	}	
	
}

function addnew()
{
	var newtest = prompt("Enter your custom test.\nYour test will be added to Miscellenous tests\n\n[Note. 1-line description]","","New Custom Test");
	
	if(newtest!==null && newtest!=="")
	{
		lst.push(newtest);		
		firstTime=false;
		populate();
	}
}
function exist_in_array(item,array)
{
var found=false;
  for(var i=0;i<=array.length;i++)
  {
     if (item === array[i])
     {
         found=true;
        break;
     }
     else {found=false;}
  }
 return found;
}
function delete_from_array(index)
{
	var newarray = new Array();
	index--;
	for(var j=0;j<=lst.length-1;j++)
	{
		if(j!==index)
		{
			newarray.push(lst[j]+"");				
		}		
	}		
	
	return newarray;
}

function delete_from_array1(index,storedarray)
{
	var newarray = new Array();
	index--;
	for(var j=0;j<=storedarray.length-1;j++)
	{
		if(j!==index)
		{
			newarray.push(storedarray[j]+"");				
		}		
	}		
	
	return newarray;
}

function deletetest()
{
	var testno = prompt("Enter your test number(s) to delete.\nSupported format:\n3\n1-10\n2,12,25 [ascending]","","New Custom Test");
	if(testno===null || testno===""){return;}
	
	
	if(testno.indexOf("-")>0)
	{
		var tofrom = testno.split("-");
		if(tofrom[1]<=tofrom[0]){alert("Invalid Numbers Pair!");return;}
		
		var howmany = tofrom[1]-tofrom[0];
		var start = tofrom[0]-1;
		lst.splice(start, howmany+1);		
			
	}	
	else if(testno.indexOf(",")>0)
	{
		var newlst = new Array();
		var delnos = testno.split(",");
		var deltimes = 0;
		var uselst = 0;
		var max = delnos.length;		
		for(var x=0;x<=delnos.length-1;x++)
		{		
			if(uselst===0)
			{
				newlst = delete_from_array(delnos[x]);				
				uselst=1;
				deltimes++;		
			}
			else 
			{
				newlst = delete_from_array1(delnos[x]-deltimes,newlst);
				deltimes++;	
			}		
									
		}
		
		lst = new Array();
		lst =lst.concat(newlst);		
	}
	else
	{
		var newlst = new Array();
		newlst = delete_from_array(testno);		
		lst = new Array();
		lst =lst.concat(newlst);
	}

	populate();	
}

function togglecollapse(showall)
{
	if(showall===true)
	{
		for(var p=0;p<phase.length;p++)
		{
			var i = p+1;
                        //console.log("Setting style for phase " + i);
			document.getElementById('phase-'+i).style.display='';
		}
		for(var a=0;a<=document.getElementsByTagName("a").length-1;a++)
		{
			if(document.getElementsByTagName("a")[a].innerHTML.indexOf("[+]")!==-1)
			{
				document.getElementsByTagName("a")[a].innerHTML = '[&#8212;]';
			}
		}		
	}
	else
	{
		for(var p=0;p<=phase.length-1;p++)
		{
			var i = p+1;
			$('phase-'+i).style.display='none';
		}
		for(var a=0;a<=document.getElementsByTagName("a").length-1;a++)
		{
			if(document.getElementsByTagName("a")[a].innerHTML.indexOf("[�]")!==-1)
			{
				document.getElementsByTagName("a")[a].innerHTML = '[+]';
			}
		}		
	}
}
onload = function(){ setTimeout("populate();",500);setTimeout("disabletab();getstatus();togglecollapse(true);",1000);};

function disabletab()
{
	for (var i=0;i<=document.getElementsByTagName("textarea").length-1;i++)
	{	
	 	document.getElementsByTagName("textarea")[i].onkeypress = function(e){if(e.keyCode===9){this.value+="\t\t";return false;}};
	}	
}

function uncheckAll()
{
    for (var i=0;i<=lst.length-1;i++){
        localStorage.setItem("ck-" + i, false);
    }
    location.reload();
}