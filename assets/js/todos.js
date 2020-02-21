console.log("Scripts connected!")

// Check off specific todos by clicking
// $("li").click(function() {
//   if ($(this).css("color") === "rgb(128, 128, 128)"){
//     $(this).css({
//       color: "black",
//       textDecoration: "none"
//     });
//   } else {
//     $(this).css({
//       color: "gray",
//       textDecoration: "line-through"
//     });
//   }
// });

// Single line, streamlined version of above logic
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
})

// Click on X to delete todo
$("ul").on("click", "span", function(event) {
  // this.partent to target the enclosing li of the clicked span
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13){
    // Get new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul
    $("ul").append("<li><span>X</span> " + todoText + "</li>")
  }
});