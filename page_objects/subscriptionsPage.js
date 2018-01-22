var conf = require("../nightwatch.conf.js");
const env = require("env2")(".env");
const url = require("url");
const mainPage = require("./mainPage.js");
const Rx = require("rxjs/Rx");
const beautify = require('js-beautify').html;

module.exports = {
    url: function() {
        return url.resolve(process.env.COCKPIT_URL,"/subscriptions");
    },
    sections: {
        sidebar: mainPage['sections']['sidebar'],
        main: {
            selector: "#app",
            elements: {
                registerButton: {
                    selector: "div.subscription-status-ct button",
                    locateStrategy: "css selector"
                }
            }
        }
    },
    commands: [{
        wait: function(){
            var element = Rx.Observable.bindCallback(this.api.element);
            var frame = Rx.Observable.bindCallback(this.api.frame);
            var waitFor = Rx.Observable.bindCallback(this.section.main.waitForElementVisible);
            var source = Rx.Observable.bindCallback(this.api.source);

            waitFor("iframe[name='cockpit1:localhost/subscriptions'][data-loaded='1']",15000)
                .flatMap(() => element("xpath", "//iframe[@name='cockpit1:localhost/subscriptions']"))
                .map((result) => result.value)
                .flatMap(frameid => frame(frameid))
                .flatMap((result) => waitFor('@registerButton', 10000))
                .subscribe(() => {return "waiting is finished";});
            return this;
        },
        register: function(){
            this.section.main.click('@registerButton');
            return this;
        }
    }]
}
