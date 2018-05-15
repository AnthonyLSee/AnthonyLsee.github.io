

/* jquery for smooth animation*/
$(function(){$(".coding-button").click(function(){
    $("html,body").animate({
        scrollTop:$(".coding-dest").offset().top},"1000");return false})})

$(function(){$(".design-button").click(function(){
    $("html,body").animate({
        scrollTop:$(".design-dest").offset().top},"1000");return false})})

$(function(){$(".contact-button").click(function(){
    $("html,body").animate({
        scrollTop:$(".contact-dest").offset().top},"1000");return false})})

$(function(){$(".top-button").click(function(){
    $("html,body").animate({
        scrollTop:$(".top-dest").offset().top},"1000");return false})})



function copyToClipboard() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val("as2242@scarletmail.rutgers.edu").select();
  document.execCommand("copy");
  $temp.remove();
}


/* js for sticky back to top button */
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
