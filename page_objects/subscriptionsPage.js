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
            selector: "a",
            elements: {
                registerButton: {
                    selector: "register"
                }
            }
        }
    },
    commands: [{
        wait: function(){
            this.section.main.waitForElementVisible('@registerButton',5000);
            return this;
        },
        register: function(){
            this.section.main.click('@registerButton');
            return this;
        }
    }]
}
