# Tests for `Subscriptions` part  in `Cockpit`

## Requirements

### Functional Tests
- they are small
- there is nothing that plays with system
- they communicate with a system using DBus cockpit API
- DBus API is mocked to simulate system context

### System Tests
- they use code of Functional Tests to set Cockpit app into desired state
- they do not mock anything
- they run tests in a real system context
- they add additional verifications - mainly related to system state
