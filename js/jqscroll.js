var currentImageNumber = 0;
var images = ["Entrance-to-The-Sir-Ian-Wood-Building.jpg", "garthdee-1.jpg", "garthdee-4.jpg", "Inside-atrium2.jpg"];
var displayImage = "#image-scroller > img";

function initialiseImageScroller()
{
  $("#image-scroller").append("<a id=\"jqprevimage\" href=\"javascript:void(0);\">\n" +
                              "<img alt=\"scroll-left\" src=\"images/image-scroller/left.png\" />\n" + 
                              "</a>\n" +
                              "<a id=\"jqnextimage\" href=\"javascript:void(0);\">\n" + 
                              "<img alt=\"scroll-right\" src=\"images/image-scroller/right.png\" />" + 
                              "</a>\n" +
                              "<img src=\"images/inside-rgu/" + images[0] + "\" />\n");
}

function setDisplayedImage(imageId)
{
  if (imageId < 0)
  {
    currentImageNumber = images.length - 1;
  }
  else if (imageId >= images.length)
  {
    currentImageNumber = 0;
  }
  else
  {
    currentImageNumber = imageId
  }
  
  $(displayImage).attr("src", "images/inside-rgu/" + images[currentImageNumber]);
}

function advanceImage()
{
  $(displayImage).fadeOut("slow", function()
  {
    setDisplayedImage(currentImageNumber + 1);
  });
  
  $(displayImage).fadeIn("slow");
}

function backOneImage()
{
  $(displayImage).fadeOut("slow", function()
  {
      setDisplayedImage(currentImageNumber - 1);
  });
    
  $(displayImage).fadeIn("slow");
}

$(document).ready(function()
{ 
  initialiseImageScroller();
  
  $("#jqnextimage").click(function()
  {
    advanceImage();
  });
  
  $("#jqprevimage").click(function()
  {
    backOneImage();
  });
  
  setInterval(advanceImage, 5000);
});