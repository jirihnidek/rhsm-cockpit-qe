var conf = require("../nightwatch.conf.js");
const env = require("env2")(".env");

module.exports = {
    url: function() {
        return process.env.COCKPIT_URL;
    },
    sections: {
        loginForm: {
            selector: '#login',
            elements: {
                userNameInput: {
                    selector: '#login-user-input'
                },
                passwordInput: {
                    selector: '#login-password-input'
                },
                submitButton: {
                    selector: 'button#login-button'
                }
            }
        }
    },
    commands: [{
        wait: function(){
            this.section.loginForm.waitForElementVisible('@userNameInput',5000);
            this.section.loginForm.waitForElementVisible('@passwordInput',5000);
            this.section.loginForm.waitForElementVisible('@submitButton',5000);
            return this;
        },
        login: function(){
            this.section.loginForm
                .setValue('@userNameInput',process.env.COCKPIT_USER_NAME)
                .setValue('@passwordInput',process.env.COCKPIT_USER_PASSWORD)
                .click('@submitButton');
            return this;
        }
    }]
}
