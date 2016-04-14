const EXPRESS = require("express");
const QR = require("qr-image");
var app = EXPRESS();

app.get("/qr/:text", function(req, res) {
    var img = QR.imageSync(req.params.text, {
        type: "png",
        ec_level: "H",
        size: 9,
        parse_url: false
    });
    res.type("png");
    res.send(img);
});

app.listen(8646);

