//i will have five questions and have five answers ... 
//so i will have to store the question in an object with right answer and question with options.
//so the beginning page has to render a h1 and a startgame button.
// on  clicking start game the game should start which means the question in the first object should be displayed along with the object.
// looks wise the question should be a h1 and the options are clickable buttons and append it to the parent div.
//the timer is specifically set to a single question each time.(30 seconds)
//match the answers... if its right ... display facts... else display whats right
//after all questions are asked display game over and a score.

$(document).ready(function(){


      var count=30;
      var counter;
      var qNo = 0;
      var rightAnswer = 0, wrongAnswer = 0; 
      var questionsBank = [
            ["who acted as wonder woman in the movie that released in 2017",["1.gal gadot","2.jennifer lawrence","3.Halle Berry","4.Lynda Carter"],"1.gal gadot"],
            ["who acted as batman in batman vs superman",["1.christian Bale","2.george clooney","3.val kilmer","4.Ben Affleck"],"4.Ben Affleck"]
          ];

      function resetEverything()
      {
          clearInterval(counter);  
      }


      function timer(){
            
        count=count-1;
          $("#timecontent").html( "<h2>time remaining "+count+" secs</h2>");
        if (count <= 0){
              render("Times up");
          clearInterval(counter);

               
           
              }
       
        }

//timer();

      var div1 = '<div id = "time" class = "row"><div id = "timecontent" class = "col-lg-12"></div></div>';
      var div2 = '<div id = "question" class = "row"><div id = "questioncontent" class = "col-lg-12"></div></div>';
      var div3 = '<div id = "button" class = "row"><div id ="appendButton" class = "col-lg-12 customButton"></div></div>'
      

      $("#startgame").on("click", test);

        function test(){

              $("#startbutton").remove();

              $("#titlerow").append(div1);

          
              resetEverything();
                
                var timerValue = timer();
              counter = setInterval(timer, 1000);        
               
               
               

               $("#time").append(div2);
               
               $("#questioncontent").html("<h2> "+questionsBank[qNo][0]+"</h2>")
               $("#time").append(div3);
               let temp = [];
             for(let i = 0; i < questionsBank[qNo][1].length; i++){
              
                  let tempAns = "<div class = 'row'><button class = 'btn btn-primary btn-lg' value='"+questionsBank[qNo][1][i]+"'>"+questionsBank[qNo][1][i]+"</button></div>"
                  temp.push(tempAns);
                  $("#appendButton").append(tempAns);
      
              }
      }   

      function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
      }

    function render(message){
      $("#time").empty();
      let p = "<p>"+message+"</p>";
      if(message != "Game has ended"){
        console.log("kajdvkjnaksdjnv");
        $("#time").append(p);
        nextQuestion();
    }
    else{
      $("#timecontent").remove();
      p += "<p>Right:"+rightAnswer+", Wrong:"+wrongAnswer+"</p>";
      $("#time").append(p);
    }
    }      

    function nextQuestion(){
      if( qNo <= (questionsBank.length-2) ){
        qNo += 1;
        sleep(1000);
        test();
      }
      else{
        render("Game has ended");
      }
    }
                  
    $(document).on("click",".btn-primary",function(event){  
          //var i = 1;
          let ans = $(this).val();
        // if($(".btn").attr)

          //clearInterval(timer);
           if (questionsBank[qNo][2] == ans){
            console.log("RIGHT");
            rightAnswer += 1;
            render("Right Answer: "+rightAnswer);
           }
           else{
            console.log("False");
            wrongAnswer += 1;
            render("Wrong Answer: "+wrongAnswer);
           }



          // (div1).empty();

          // (div2).empty();

          // (div3).empty();




       // }
        


        });    
    });



