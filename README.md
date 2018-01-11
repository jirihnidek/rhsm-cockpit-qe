# Tests for `Subscriptions` part  in `Cockpit`
## Quick Start
### 1. Clone
### 2. install packages
```sh
npm install

```
### 3. Install selenium server
```sh
npm install selenium-sever --save-dev
```

### 4. Configuration
```sh
cp env-example .env
vim .env
```
> Note: if you're _curious_ what that last part is, see https://github.com/dwyl/env2

### 4. Run tests
1. one shot
```sh
npm test
```
2. with live code reloading
```sh
npm run watch
```

> Note: There is a detailed beginners tutorial at https://github.com/dwyl/learn-nightwatch

## Development Guide

### Test Requirements
#### Functional Tests
- they are small
- there is nothing that plays with system
- they communicate with a system using DBus cockpit API
- DBus API is mocked to simulate system context

#### System Tests
- they use code of Functional Tests to set Cockpit app into desired state
- they do not mock anything
- they run tests in a real system context
- they add additional verifications - mainly related to system state
