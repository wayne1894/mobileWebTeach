$(function(){
    $(".img_list>div").on("click",function(event){
      $(this).siblings().removeClass("active");
      $(".img_list>div").eq($(this).index()).addClass("active")
      $(".img_show").css("background-image",$(event.target).css("background-image"));
      
    })
  })
  
  $(function(){
    $(".product_menu>div").on("click",function(event){
     $(this).addClass("active").siblings().removeClass("active");
 $(".product_menu_content>div").eq($(this).index()).addClass("active").siblings().removeClass("active")
      
    })
  })
  