# Tests for `Subscriptions` part  in `Cockpit`

## Quick Start

### 1. Clone

### 2. install packages

```sh
$ npm install

```

### 3. Install selenium server

```sh
$ npm install selenium-server --save-dev
```

```sh
$ npm run e2e-setup
```

### 4. Configuration

```sh
$ cp env-example .env
$ vim .env
```

> Note: if you're _curious_ what that last part is, see https://github.com/dwyl/env2

### 5. Run tests

1. one shot

```sh
$ npm test
```

2. with live code reloading

```sh
$ npm run watch
```

> Note: There is a detailed beginners tutorial at https://github.com/dwyl/learn-nightwatch

## Development Guide

### Test Requirements

#### Functional Tests

- Tests are small
- There is nothing that plays with system
- Tests communicate with a system using DBus cockpit API
- DBus API is mocked to simulate system context

#### System Tests

- Use code of Functional Tests to set Cockpit app into desired state
- Do not mock anything
- Run tests in a real system context
- Add additional verifications - mainly related to system state
