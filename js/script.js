$(document).ready(function(){
  //Do not disturb me
  //console.log("hell")


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
        console.log("Reponse received", response);
      },
      error: function(error_response){
        //Wehn something goes wrong in the ajax call, this function is executed
      }
    });
  };

  
  //We didn't call the method, we only defined it
  get_posts();

})