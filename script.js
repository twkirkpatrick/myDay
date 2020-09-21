
$(document).ready(function(){

    //displays current day in jumbotron
    var m = moment();

    var current = m.format("dddd[,] MMMM Do[,] YYYY");
    
    $("#currentDay").text(current);

    

   //BACKGROUND COLORS FOR CURRENT HOUR//

   function checkTime(){
       
        var currentHour = 11;
        /* moment().format("HH"); */
        

        console.log(currentHour);
        

        $(".timeBlock").each(function(){

            var timeBlock = parseInt($(this).children("td").attr("id"));
          
            if(timeBlock < currentHour){
                $(this).addClass("past")
            } else if(timeBlock == currentHour){
                $(this).removeClass("past")
                $(this).addClass("present")
            } else{
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }
        })

 

   }

   

checkTime();

   


   
   
   $(".save").on("click", function(event){
       event.preventDefault();
       var value = $(this).parent().parent().siblings("td").children().val();
       var key = $(this).parent().parent().siblings("td").attr("id");
       console.log(key, value);
       localStorage.setItem(key, value);
       showToast();
       

 
   });

   function showToast(){
    var toastDiv = $("<p>").text("Item successfully saved");

    var check = $("<i>").attr("class", "fas fa-check");

    toastDiv.append(check);

    toastDiv.addClass("notify check fade fade-out");

    var container = $("#toastContainer");

    

    container.html(toastDiv);




}



   
   $("#9 .text-field").val(localStorage.getItem("9"));
   $("#10 .text-field").val(localStorage.getItem("10"));
   $("#11 .text-field").val(localStorage.getItem("11"));
   $("#12 .text-field").val(localStorage.getItem("12"));
   $("#13 .text-field").val(localStorage.getItem("13"));
   $("#14 .text-field").val(localStorage.getItem("14"));
   $("#15 .text-field").val(localStorage.getItem("15"));
   $("#16 .text-field").val(localStorage.getItem("16"));
   $("#17 .text-field").val(localStorage.getItem("17"));

   
   $(".trash").on("click", function(event){
      
      $(this).parent().parent().siblings("td").children().val("");

      localStorage.removeItem($(this).parent().parent().siblings("td").attr("id"));

      showClear();

   })

   function showClear(){
    var clearDiv = $("<p>").text("Item successfully cleared");

    var trash = $("<i>").attr("class", "far trash-can fa-trash-alt");

    clearDiv.append(trash);


    clearDiv.addClass("clear fade fade-out");

    var container = $("#toastContainer");


    container.html(clearDiv);
   }
















































});







