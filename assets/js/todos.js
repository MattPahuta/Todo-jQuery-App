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
