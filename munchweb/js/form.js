/*
Version: 1.0
Author: your name
Author URL: your site
License: (if other than below)
This is a FREE script and is dual licensed under the following:
http://www.opensource.org/licenses/mit-license.php | http://www.gnu.org/licenses/gpl.html
Aside from these comments, you may modify and distribute this file as you please. Have fun!
*/
const nameA = [];
const valA = [];
function moveIt(){
		$("#jForm").animate({"left": "+=200px"},2000,"swing");
		$("#jForm input").each(function(){
			$(this).attr("disabled", "disabled");
			if($(this).attr("type")!="submit"){
				nameA.push($(this).attr("name"));
				valA.push($(this).val());
			}			
		});
		console.log(nameA);
		console.log(valA);
	}
$(document).ready(function(){

    $("#zipcode").val();
	//$("#email").val(" ");
 
    });
    $("#submit").on("click",function(){
        if($("#zipcode").val().length>0){
            $("#zipcode").css({"position": "relative"});
            $("#zipcode").animate({left: "+=100"},1000,"swing",function(){
                $("#zipcode").css("display", "none");
                $("#submit").off("click");
            });
        }
    });   
    $("#jform").validate({
		rules: {
			zipcode: {
                required: true
            }
			
		}, 
		messages: {
			zipcode: {
                required: "This is required!!!"
            }
			
		}
	});
    $("#submit").on("click", function(){
        console.log($("#zipcode").hasClass("error"));
        if($("#zipcode").hasClass(".error")){          
            $("#zipcode").css("background-color" ,  "#FF0000");
        }
    });

/* RULES{
	FEILD:{
		REQUIRED: TRUE
		EMAIL: TRUE
	}
}
,*/








