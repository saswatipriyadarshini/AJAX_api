
var btn = document.getElementById("btn");
var user_btn = document.getElementById("user-btn")
// userContainer = document.getElementById("user_info");
// // $(document).ready(function(){

// user_data.onload = function(){
// 	var userData = JSON.parse(user_data.responsetext);
// 	HTMLParagraph(userData);
// };

// function HTMLParagraph(user){
// 	var htmlString = "";


// 	for (i = 0; i < user.length; i++){
// 		htmlString += "<p>" + user[i].name + user[i].id ;

// 		htmlString += '.</p>';
// 	}

// 	usercontainer.insertAdjacentHTML("beforeend", htmlString);
// }
// };

	appendUsers = function(users_array){
		for(i = 0; users_array.length; i++){
			var user = users_array[i];
			$(".users").append("<div class='user'>" + (i+1) + ". " + user.name + "</div>"); 
		}
	};

	
	btn.addEventListener("click", function(){
		user_data = function(){
			$.ajax({
				type:'GET',
				url:'https://jsonplaceholder.typicode.com/users',
				dataType: 'JSON',
				success: function(response){
					console.log("User data received.");

					appendUsers(response);
				},
				error: function(){
					console.log('Something went wrong.');
				}
			});

		};

		user_data();

});

	


// });
