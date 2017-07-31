$(document).ready(function(){
  
  //console.log("hell")

  //Step 2.
  //Append Posts.
  function appendPosts(posts_array){
    var container_posts = $(".posts");
    //console.log("Posts array received", posts_array);
    for(var i = 0; i < posts_array.length; i++){
      var post = posts_array[i]; //we are storing the posts in a temp variable for easy access, we don't have to write posts_array[i] everytime
      $(container_posts).append("<div class='post'>" + (i+1) + ". " + "<a href='#' data-item-id='" + post.id + "'>" + post.title + "</a></div>"); //There is not point of doing that, we can do it with one string.ok
      //here in the link we'll add the id as a data attribute so we can access it later.
    }
    console.log("Finished adding posts to the page.");
    console.log("Now I found " + $("a").length + " links on the page.");

    //Now the links are available on the page, we'll call the method which will attach the events.
    attachPostsEvents();
  };

  //Step 3
  //When clicked on a post we need to fetch the post details and show in the page
  //For that we'll attach click events on those link
  //console.log("Attaching events on the links");
  //console.log("I found " + $("a").length + " links on the page. Attaching events only on those.") //Now this will find one link available on the page and the count wil show 1

  function attachPostsEvents(){
    console.log("Attaching events on the links");
    console.log("I found " + $("a").length + " links on the page. Attaching events only on those.") //Now this will find one link available on the page and the count wil show 1
    $(".post a").on('click', function(event){ // any link inside a class .post
      event.preventDefault(); //Prevent the default action of a link, which is to navigate,
      alert("you clicked me!");
      var link = event.currentTarget;

      //Step i - get id of the post
      post_id = $(link).attr('data-item-id'); //this will give the value stored against that data attribute


      //Step ii - make ajax call
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/' + post_id,
        success: function(response){
          //Now we have the data with us for post with id post_id
          //we need to populate the details of it in another div, for that we'll call another function and pass the data to the function
          populatePostData(response);
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
  //Get all posts
  get_posts = function(){
    //this method/function will make ajax call and get all the posts
    //We'll have one more function to append all the posts to our body
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      dataType: 'JSON', //you can alose write 'json'
      type: 'GET', //by default its get,  so this line can be ignored
      success: function(response){
        console.log("Got posts data");
        //When a successful ajax call is made, this method will fire up
        //console.log("Reponse received", response);
        //we are receiving an array from the api, lets write a function to make us eof that data and dislay it on the page
        appendPosts(response);
      },
      error: function(error_response){
        //Wehn something goes wrong in the ajax call, this function is executed
      }
    });
  };

  
  //We didn't call the method, we only defined it
  get_posts();

});

//You'll see first it will print attaching events then the other message












