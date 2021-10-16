$(function() {
  
  // Handle Form submit 
  $("#movie-input").on("submit", function(e) {
    // Prevent the page from reloading 
    e.preventDefault();
    
    // Capture the values for each input 
    let movieTitle = e.target.title.value;
    let movieRating = e.target.rating.value;
    
    // Create new div from values 
    let newMovie = $("<div>").text(movieTitle + " " + movieRating).addClass("movie-text");
    
    // Add new delete button to new div 
    let deleteButton = $("<button>").text("Delete").addClass("delete-button");
    newMovie.append(deleteButton);
    
    // Add Event listener to delete button 
    deleteButton.on("click", function() {
      deleteButton.parent().remove();
    });
    
    // Append div to movies-list 
    $("#movies-list").append(newMovie);
    
  });
  
  
});