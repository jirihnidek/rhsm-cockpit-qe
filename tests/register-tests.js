var conf = require("../nightwatch.conf.js");

module.exports = {
    'Simple register': function(browser){
        browser.page.loginPage()
            .navigate()
            .wait()
            .login();
        //browser.pause();
        browser.page.mainPage()
            .wait()
            .subscriptions();
        browser.page.subscriptionsPage()
            .wait()
            .register();
    }
}
