"use strict";

const Express = require("express");
const Qr = require("qr-image");
var app = Express();

app.get("/qr/:text", function(req, res) {
    let img = Qr.imageSync(req.params.text, {
        type: "png",
        //ec_level: "H",
        //size: 9,
        parse_url: false
    });
    res.type("png");
    res.send(img);
});

app.listen(8646);

