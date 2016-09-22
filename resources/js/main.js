$(function(){
    var cur_time=new Date();

    var showCurrentTime = function(){
        $('.showToday').html(function(){
            return new Date().toLocaleString();
        });
    }
    $(".currentTime").html(function(){
        return new Date().toLocaleDateString();
    })

    console.log(typeof showCurrentTime);
    setInterval(showCurrentTime,1000);
})
