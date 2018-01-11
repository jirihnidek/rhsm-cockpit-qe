var conf = require("../nightwatch.conf.js");

module.exports = {
    'Simple register': function(browser){
        browser.page.loginPage()
            .navigate()
            .wait()
            .login();
    }
}
