$(document).ready(function(){
  //Do not disturb me
  //console.log("hell")

  function appendPosts(posts_array){
    var container_posts = $(".posts");
    //console.log("Posts array received", posts_array);
    for(var i = 0; i < posts_array.length; i++){
      var post = posts_array[i]; //we are storing the posts in a temp variable for easy access, we don't have to write posts_array[i] everytime
      $(container_posts).append("<div class='post'>" + (i+1) + ". " + "<a href='#'>" + post.title + "</a></div>"); //There is not point of doing that, we can do it with one string.ok
    }
  };


  //Get all posts
  get_posts = function(){
    //this method/function will make ajax call and get all the posts
    //We'll have one more function to append all the posts to our body
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      dataType: 'JSON', //you can alose write 'json'
      type: 'GET', //by default its get,  so this line can be ignored
      success: function(response){
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

})