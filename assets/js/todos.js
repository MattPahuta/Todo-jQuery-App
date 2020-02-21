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
$("li").click(function() {
  $(this).toggleClass("completed");
})

// Click on X to delete todo
$("span").click(function(event) {
  // this.partent to target the enclosing li of the clicked span
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});