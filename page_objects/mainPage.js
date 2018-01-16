var conf = require("../nightwatch.conf.js");
const env = require("env2")(".env");
const url = require("url");

module.exports = {
    url: function() {
        return url.resolve(process.env.COCKPIT_URL,"/system");
    },
    sections: {
        sidebar: {
            selector: '#sidebar',
            elements: {
                subscriptions: {
                    selector: 'a[href="/subscriptions"]'
                }
            }
        }
    },
    commands: [{
        wait: function(){
            this.section.sidebar.waitForElementVisible('@subscriptions',15000);
            return this;
        },
        subscriptions: function(){
            this.api.execute('document.querySelector("a[href=\'/subscriptions\']").click()');
            //this.section.sidebar.click('@subscriptions');
            return this;
        }
    }]
}
