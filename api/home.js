let links_file = "./links.json";

function getLinks(req, res) {
    let links = require(links_file);
    let res_data;
    if (req.params.type == "news") {
        res_data = links.news;
    } else if (req.params.type == "tech") {
        res_data = links.tech;
    } else if (req.params.type == "top") {
        res_data = links.top;
    } else if (req.params.type == undefined) {
        res_data = links;
    }
    res.json(res_data);
}

module.exports = {
    getLinks: getLinks
}