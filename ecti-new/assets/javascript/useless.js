var content=1;
var data=1;
$('.hidden-content').css({display:"none"});
$('.key-hide').css({display:"none"});
$('.display-hide-content').html("<span>Show More</span>"); 
$('.display-hide-content').click(function(){
    if(content==1){
        content++;
        $(this).prev('.hidden-content').show(100);        
        $(this).html("<span>Show Less</span>"); 
        $(this).css({"box-shadow":"none"});
    }else{
        content--;
        $(this).prev('.hidden-content').hide(100);
        $(this).html("<span>Show More</span>"); 
        $(this).css({"box-shadow":"0px -40px 5px 15px rgba(255,255,255,0.7)"});
    }
});



$('.display-hide-key-content').html("<span>Show More</span>"); 
$('.display-hide-key-content').click(function(){
    if(data==1){
        data++;
        $('.key-hide').show(100);        
        $(this).html("<span>Show Less</span>"); 
        $(this).css({"box-shadow":"none"});
    }else{
        data--;
        $('.key-hide').hide(100);
        $(this).html("<span>Show More</span>"); 
        $(this).css({"box-shadow":"0px -40px 5px 15px rgba(255,255,255,0.7)"});
    }
});