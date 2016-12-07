var $selectedSubmenu; // Declare submenu holder

function showSubmenu(selectedItem)
{
  $selectedSubmenu = $(selectedItem).children(".submenu")
  $selectedSubmenu.css("visibility", "visible");
}

function hideSubmenu(selectedItem)
{
  $selectedSubmenu = $(selectedItem).children(".submenu")
  $selectedSubmenu.css("visibility", "hidden");
}

$(document).ready(function()
{
  $("nav > ul > li").mouseenter(function()
  {
    showSubmenu(this);
  });
  
  $("nav > ul > li").mouseleave(function()
  {
    hideSubmenu(this);
  });
  
  $("nav > ul > li > a").focus(function()
  {
    showSubmenu($(this).parent());
    hideSubmenu($(this).parent().siblings()); // Hides all of the other submenus. This is currently dependent on the fact that 'Home' and 'Talent Exchange' do not have submenus.
  });
  
});
