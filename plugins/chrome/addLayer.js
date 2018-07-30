$.ajax({
    url:"http://localhost:8099/api/mylinks",
    type: "GET",
    success:function(data) {
        let newdiv = "<div class='handylink'></div>";
        $(document.body).append(newdiv)
        $('.handylink').append("<ul></ul>")

        for(let link of data) {
            $('.handylink ul').append(`<li><a href='${link.href}'>${link.name}</a></li>`);
        }
    }
});