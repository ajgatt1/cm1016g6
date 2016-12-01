// For the image scroller on the website

var currentImageNumber = 0;
var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
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
