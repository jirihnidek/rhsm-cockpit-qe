var conf = require("../nightwatch.conf.js");
const env = require("env2")(".env");
const url = require("url");
const mainPage = require("./mainPage.js");

module.exports = {
    url: function() {
        return url.resolve(process.env.COCKPIT_URL,"/subscriptions");
    },
    sections: {
        sidebar: mainPage['sections']['sidebar'],
        main: {
            selector: "//iframe[@name='cockpit1:localhost/subscriptions']",
            elements: {
                registerButton: {
                    selector: "div.subscription-status-ct button",
                    locateStrategy: "css"
                }
            }
        }
    },
    commands: [{
        wait: function(){
            this.api
                .useXpath()
                .waitForElementVisible("//iframe[@name='cockpit1:localhost/subscriptions' and @data-loaded=1]",15000);
                // .element("xpath", "//iframe[@name='cockpit1:localhost/subscriptions']",
                //          function(el){console.log(el)});
            return this;
        },
        register: function(){
            var frame = this.api.element("xpath", "//iframe[@name='cockpit1:localhost/subscriptions']");
            console.log(frame);
            this.api.frame(frame);
            return this;
        }
    }]
}
