$(document).keypress((event)=>{
    $("h1").text(event.key)
});
// $("h1").on("mouseover",function(){
//     $("h1").css("color","red");
//     // setTimeout(()=>{
//     //     $("h1").css("color","black");
//     // },500)
//     $(document).on("mouseover",()=>{
//         $("h1").css("color","black");
//     })
// });
$("h1").hover(()=>{
    $("h1").css("color","red");
},()=>{
    $("h1").css("color","black");
});