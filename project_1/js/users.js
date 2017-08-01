$(document).ready(function(){
  
  //Step 2.
  //Append Users.
  function appendUsers(users_array){
    var container_users = $(".users");
    for(var i = 0; i < users_array.length; i++){
      var user = users_array[i]; 
      $(container_users).append("<div class='user'>" + (i+1) + ". " + "<a href='#' data-item-id='" + user.id + "'>" + user.name + "</a></div>");
    }
    console.log("Finished adding users to the page.");
    console.log("Now I found " + $("a").length + " links on the page.");

    attachUsersEvents();
  };

  //Step 3
  //attach click events on those link

  function attachUsersEvents(){
    $(".user a").on('click', function(event){ 
      event.preventDefault(); 
      alert("you clicked me!");
      var link = event.currentTarget;

      //Step i - get id of the user
      user_id = $(link).attr('data-item-id'); 

      //Step ii - make ajax call
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users/' + user_id,
        success: function(response){
          populateUserData(response);
        },
        error: function(error){
          console.log("Something went wrong", error);
        }
      })
      //Step iii - show infomation in page
    });
    console.log("Finished attaching events on links");
  }

  


  //Step 1.
  //Get all users
  get_users = function(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      dataType: 'JSON', 
      type: 'GET', 
      success: function(response){
        console.log("Got users data");
        
        appendUsers(response);
      },
      error: function(error_response){
        
      }
    });
  };

  get_users();

});
