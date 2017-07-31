$(document).ready(function(){
  
  //Step 2.
  //Append Users.
  function appendUsers(users_array){
    var container_users = $(".users");
    //console.log("Posts array received", posts_array);
    for(var i = 0; i < users_array.length; i++){
      var user = users_array[i]; //we are storing the posts in a temp variable for easy access, we don't have to write posts_array[i] everytime
      $(container_users).append("<div class='user'>" + (i+1) + ". " + "<a href='#' data-item-id='" + user.id + "'>" + user.name + "</a></div>"); //There is not point of doing that, we can do it with one string.ok
      //here in the link we'll add the id as a data attribute so we can access it later.
    }
    console.log("Finished adding users to the page.");
    console.log("Now I found " + $("a").length + " links on the page.");

    //Now the links are available on the page, we'll call the method which will attach the events.
    attachUsersEvents();
  };

  //Step 3
  //When clicked on a user we need to fetch the user details and show in the page
  //For that we'll attach click events on those link
  //console.log("Attaching events on the links");
  //console.log("I found " + $("a").length + " links on the page. Attaching events only on those.") //Now this will find one link available on the page and the count wil show 1

  function attachUsersEvents(){
    console.log("Attaching events on the links");
    console.log("I found " + $("a").length + " links on the page. Attaching events only on those.") //Now this will find one link available on the page and the count wil show 1
    $(".user a").on('click', function(event){ // any link inside a class .user
      event.preventDefault(); //Prevent the default action of a link, which is to navigate,
      alert("you clicked me!");
      var link = event.currentTarget;

      //Step i - get id of the user
      user_id = $(link).attr('data-item-id'); //this will give the value stored against that data attribute


      //Step ii - make ajax call
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users/' + user_id,
        success: function(response){
          //Now we have the data with us for post with id user_id
          //we need to populate the details of it in another div, for that we'll call another function and pass the data to the function
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

  //Step 4.
  
  //The above code will not work for obvious reasons. Attaching event to the links is done when the javacript loads, but the links are not available at that time.


  //Step 1.
  //Get all users
  get_users = function(){
    //this method/function will make ajax call and get all the users
    //We'll have one more function to append all the users to our body
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      dataType: 'JSON', //you can alose write 'json'
      type: 'GET', //by default its get,  so this line can be ignored
      success: function(response){
        console.log("Got users data");
        //When a successful ajax call is made, this method will fire up
        //console.log("Reponse received", response);
        //we are receiving an array from the api, lets write a function to make us eof that data and dislay it on the page
        appendUsers(response);
      },
      error: function(error_response){
        //Wehn something goes wrong in the ajax call, this function is executed
      }
    });
  };

  
  //We didn't call the method, we only defined it
  get_users();

});

//You'll see first it will print attaching events then the other message











