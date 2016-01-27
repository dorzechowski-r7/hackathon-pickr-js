"use strict";

const Express = require("express");
const HTTP = require("http");
const Passport = require("passport");

const ExpressSession = require("express-session");


const app = Express();

/*
const oktaConfig = {
    issuer: "http://www.okta.com/exk5pyjyxmxyrs5TN0h7",
        cert: "MIIDnDCCAoSgAwIBAgIGAUsUkJcoMA0GCSqGSIb3DQEBBQUAMIGOMQswCQYDVQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzENMAsGA1UECgwET2t0YTEUMBIGA1UECwwLU1NPUHJvdmlkZXIxDzANBgNVBAMMBnJhcGlkNzEcMBoGCSqGSIb3DQEJARYNaW5mb0Bva3RhLmNvbTAeFw0xNTAxMjMwMjEyMTVaFw00NTAxMjMwMjEzMTVaMIGOMQswCQYDVQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzENMAsGA1UECgwET2t0YTEUMBIGA1UECwwLU1NPUHJvdmlkZXIxDzANBgNVBAMMBnJhcGlkNzEcMBoGCSqGSIb3DQEJARYNaW5mb0Bva3RhLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAIJjIKWUHet50Iuwcpn2Bx7oa7ycP9pW8aOdab5EUXxJAO9LmMlxPiEf/Noi3KD/NmueFYXfdkqXpGk/X9938q7XEoG3hbVGfUE3T4s/dP51oxxHRHyzR0hYKPuo1AUFicVcncVSy/CBElWaM+rWnJfkwuW5bLeqpvl7k3YiwAImSG4QoXQEVeKSgvEN+5NbdKAYa5gBkwncr4zPjMA/OiP//pSGuZ2weGTXTrJqMnx/zrAQRr3+UL2KrFKYd1WgzXznr/Hlb30eaQmOmRQW6vhigFMmbjJO1t7wQT5z+C4d1brPJf2Eb4x8NR0E/yxURfBgscS3qVB417847v/2EPECAwEAATANBgkqhkiG9w0BAQUFAAOCAQEAFVnug7apyGabodQd8QfJIRkXJK0EkDfC/vClQq7/XCI1RRGfKQUObyS0vfY5fWIHt5IXskRY2UMN0amEv/s80zbiB4gbAS/uEpC1ErBfLArWitQv0NVRrsu2sEs2WF68/gYUYzl1EAUFg9/nzDzO9QYcS1PofitGNqXTHHZUF5hvDbbTcjVIzBgpl3rxkPuphglmndrU+6zgISNlr4pbpDe6sw1LiqV7SEMROHaNGHXaztynE87Mg1qwzLOIWhEY25HBzqPVFPAYiJw9j6HHkxHkqAm5vbCfPr10ploioTpD9DYrydRx/nYxPaLW4E68IPMHVKcH9tqyiRIEX9TF3w=="
};


app.use(ExpressSession({
    secret: "",
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));
app.use(auth.initialize());
app.use(auth.session());

app.post("/api/1/login/callback", auth.authenticate("saml", {
    "failureRedirect": "/",
    "failureFlash": true
}), (req, res) => {
    res.redirect(302, "/#main")
        .end();
});
app.get("/api/1/login", auth.authenticate("saml", {
    "failureRedirect": "/",
    "failureFlash": true
}), (req, res) => {
    res.redirect(302, "/#main")
        .end();
});
*/
app.get("/api/1/people/:id", (req, res) => {
    if (req.query.namePrefix) {
        res.status(200)
            .json([{
                "id": "6042533b-f529-4da1-8775-a1c35ae91e7a",
                "firstName": "Sam",
                "lastName": "Adams",
                "department": "Software Development",
"thumbnailPhotoLocation": "https://s3.amazonaws.com/com.rapid7.razor.public/thumbnail/e2cef714-f5ae-4659-8138-76fd6a1d50d0/5102c9fcdbb49450e4a1b83d82800d1a.jpg"
            }, {
                "id":"ef2e0a11-7fee-4b9b-ad01-cada56a7d3e1","department":"Software Development","firstName":"Khyati","lastName":"Shrivastava","thumbnailPhotoLocation":null
            }, {
                "id": "390191ef-0d20-44ce-ac33-3637e29ef736",
                "firstName": "Dan",
                "lastName": "Orzechowski",
                "department": "Products",
"thumbnailPhotoLocation": null
            }, {
                "id": "e95939a0-f0f7-4a6e-ae14-1c0363123cc3",
                "firstName": "Brian",
                "lastName": "Gaffey",
                "department": "Products",
"thumbnailPhotoLocation": "https://s3.amazonaws.com/com.rapid7.razor.public/thumbnail/e2cef714-f5ae-4659-8138-76fd6a1d50d0/14f8ef9e73a00ccbc5310fa85bacb2ce.jpg"
            }])
            .end();
    }
    else if (req.params.id && req.params.id !== "search") {
        console.log("find by key:",req.params.id);

        res.status(200)
            .json({
                "id": "6042533b-f529-4da1-8775-a1c35ae91e7a",
                "firstName": "Sam",
                "lastName": "Adams",
                "department": "Software Development",
"thumbnailPhotoLocation": "https://s3.amazonaws.com/com.rapid7.razor.public/thumbnail/e2cef714-f5ae-4659-8138-76fd6a1d50d0/5102c9fcdbb49450e4a1b83d82800d1a.jpg"
            })
            .end();
    }
    else {
        console.log(req.query);
        console.log(req.params);
        res.status(200)
            .json([])
            .end();
    }
});

app.use(Express.static("static"));

app.listen(3000, () => {
    console.log("listening!");
});
