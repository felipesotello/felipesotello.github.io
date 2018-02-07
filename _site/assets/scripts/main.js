$('.card-1').on('mouseover', function(){
    $(this).children('.text-5').addClass('text-5-hover');
})

$('.card-1').on('mouseout', function(){
    $(this).children('.text-5').removeClass('text-5-hover');
})
