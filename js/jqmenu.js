var $selectedSubmenu; // Declare submenu holder

$(document).ready(function()
{
  $("nav > ul > li").mouseenter(function()
  {
    $selectedSubmenu = $(this).children(".submenu")
    $selectedSubmenu.css("visibility", "visible");
  });
  
  $("nav > ul > li").mouseleave(function()
  {
    $selectedSubmenu = $(this).children(".submenu")
    $selectedSubmenu.css("visibility", "hidden");
  });
});
