let toggle = true;
let handylink_data;

function toggleHandylink(event) {
    let newdiv = $(".handylink");
    newdiv.empty();
    if (event && event.data && event.data.toggle) {
        let toggle_div = $(`<div style="text-align:right">&lt;</div>`)
        toggle_div.bind("click", {"toggle":false}, toggleHandylink);
        newdiv.append(toggle_div);
    } else {
        let toggle_div = $(`<div style="text-align:right">&gt;</div>`)
        toggle_div.bind("click", {"toggle":true}, toggleHandylink);
        newdiv.append(toggle_div);
        let ul = $("<ul></ul>");
        for(let link of handylink_data) {
            ul.append(`<li><a href='${link.href}' target="_blank">${link.name}</a></li>`);
        }
        
        newdiv.append(ul);
    }
}

$.ajax({
    url:"http://localhost:80/api/mylinks/top",
    type: "GET",
    success:function(data) {
        let newdiv = "<div class='handylink'></div>";
        $(document.body).append(newdiv);
        
        handylink_data = data;
        toggleHandylink();
    }
});