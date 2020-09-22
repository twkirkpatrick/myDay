
$(document).ready(function(){

    //displays current day in jumbotron
    var m = moment();

    var current = m.format("dddd[,] MMMM Do[,] YYYY");
    
    $("#currentDay").text(current);

    

   //Color coded time blocks//

   function checkTime(){
       
        var currentHour = moment().format("HH");
      
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

   //setting each timeblock to local storage on save button click

   $(".save").on("click", function(event){
       event.preventDefault();
       var value = $(this).parent().parent().siblings("td").children().val();
       var key = $(this).parent().parent().siblings("td").attr("id");
       console.log(key, value);
       localStorage.setItem(key, value);
       
       showToast();
   
   });

   //toast notification to inform user that item has been saved
   function showToast(){
    var toastDiv = $("<p>").text("Item successfully saved");
    var check = $("<i>").attr("class", "fas fa-check");
    toastDiv.append(check);
    toastDiv.addClass("notify check fade fade-out");
    var container = $("#toastContainer");
    container.html(toastDiv);

}
    //Displaying saved items so content persists on reload
   $("#9 .text-field").val(localStorage.getItem("9"));
   $("#10 .text-field").val(localStorage.getItem("10"));
   $("#11 .text-field").val(localStorage.getItem("11"));
   $("#12 .text-field").val(localStorage.getItem("12"));
   $("#13 .text-field").val(localStorage.getItem("13"));
   $("#14 .text-field").val(localStorage.getItem("14"));
   $("#15 .text-field").val(localStorage.getItem("15"));
   $("#16 .text-field").val(localStorage.getItem("16"));
   $("#17 .text-field").val(localStorage.getItem("17"));

   //On trash button click, item will be cleared from input field and removed from local storage
   $(".trash").on("click", function(event){
      
      $(this).parent().parent().siblings("td").children().val("");
      localStorage.removeItem($(this).parent().parent().siblings("td").attr("id"));
      
      showClear();

   })

   //toast notification to inform user that item has been cleared
   function showClear(){
    var clearDiv = $("<p>").text("Item successfully cleared");
    var trash = $("<i>").attr("class", "far trash-can fa-trash-alt");
    clearDiv.append(trash);
    clearDiv.addClass("clear fade fade-out");
    var container = $("#toastContainer");
    container.html(clearDiv);
   }


});







