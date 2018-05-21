# Ethereum Alarm Clock

[![Join the chat at https://gitter.im/ethereum-alarm-clock/ethereum-alarm-clock](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ethereum-alarm-clock/ethereum-alarm-clock?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/ethereum-alarm-clock/ethereum-alarm-clock.svg?branch=master)](https://travis-ci.org/chronologic/ethereum-alarm-clock)
[![Documentation Status](https://readthedocs.org/projects/ethereum-alarm-clock/badge/?version=latest)](http://ethereum-alarm-clock.readthedocs.io/en/latest/?badge=latest)


Source code for the [Ethereum Alarm Clock service](http://www.ethereum-alarm-clock.com/)

## What is the EAC (Ethereum Alarm Clock)

The Ethereum Alarm Clock is a smart contract protocol for scheduling Ethereum transactions 
to be executed in the future. It allows any address to set the parameters of a transaction and 
allow clients to call these transactions during the desired window. The EAC is agnostic to callers
so can be used by both human users and other smart contracts. Since all of the scheduling logic is 
contained in smart contracts, transactions can be scheduled from solidity.

Additionally the EAC faciliates the execution of this pool of scheduled transactions through a client. 
The EAC client continuously runs and searches for transactions which are scheduled to be executed soon 
then claims and executes them. For the EAC to be successful it depends on users who run execution clients. 
There are a few ways incentives for running these execution clients are baked in to the protocol itself, 
notably the claiming mechanism and the reward payment. 

## Running the tests

_Tests have been ported to Javascript and can now be run using the Truffle Suite_

Originally the test suite was written in Python using the Populus framework, these still exist for reference 
under the populus-tests/ directory. However, we have ported over the suite to use the Truffle framework since 
this may be more familiar to developers who know the Ethereum tooling in Javascript. These tests can be found in 
the [test/](test) directory.

If you would like to run the test please set up your environment to use node v8 (lts/carbon), truffle v4.1.5 and the latest ganache-cli.

```
nvm use lts/carbon
npm i
npm i -g truffle@4.1.5 
npm i -g ganache-cli
```

Start ganache-cli in a terminal screen by running `ganache-cli`.

In another terminal screen run `npm test` at the root of the directory. This will run the npm test script that 
splits up the tests into different runtimes. The tests are split because the EAC is a moderately sized project and 
running all the tests with one command has a tendency to break down the ganache tester chain.

Each time you run the tests it is advised to rebuild your build/ folder, as this may lead to bugs if not done. You 
can do this by running the command `rm -rf build/`.

## Documentation

Documentation can be found on [Read the Docs](https://ethereum-alarm-clock.readthedocs.io/en/latest/).

We are in progress of migrating the documentation to the [Wiki](https://github.com/ethereum-alarm-clock/ethereum-alarm-clock/wiki).

## Using the CLI

Please see the [`eac.js-cli`](https://github.com/ethereum-alarm-clock/eac.js-cli) repository for the commandline client.

## Deployment

The EAC contracts are deployed on both the Kovan and Ropsten testnets at the addresses below.

```
Kovan

baseScheduler, 0xa5b77caa4f414a9f1a350d1ae2c2c9f66c9b1e44
blockScheduler, 0x394ce9fe06c72f18e5a845842974f0c1224b1ff5
claimLib, 0x7a764bb00fe101c53450a97519ad191e3c4830c5
executionLib, 0x4069bd5286f1287173f683295683e97783913fc4
iterTools, 0x97a614f0dfd6e034e081b79fbaa1c6531e3956ee
mathLib, 0xea5c9406c8ee832fed3d82348a9992c20640eaee
paymentLib, 0x4c767bb10b5b0f4aafd68d6a26513082152444c4
requestFactory, 0x98c128b3d8a0ac240f7b7dd4969ea0ad54f9d330
requestLib, 0x3381d072c9672747c69342c78f1fc97b1db3db84
requestMetaLib, 0x3fef9e4c267b6d1d508ee547fca9e474787ef68e
requestScheduleLib, 0x4206938c8c3853898fc7bc227aaf420bfca32aa2
safeMath, 0x656aa18a8cd4e2e60470f1a01080ad0a8bed4781
timestampScheduler, 0x31bbbf5180f2bd9c213e2e1d91a439677243268a
transactionRequestCore, 0x54d4a85e85a54d21168ebf37fa22e32eb79b8d3f
transactionRecorder, 0xcf5aa253bb5bd2d38ebc659ded8a4c3846b5471e
```

```
Ropsten

baseScheduler, 0x7c50e921a554cbf8a6b7d58c0904345c98b6f24a
blockScheduler, 0x0c931237e2320ee4eef679bc4a9c317581fdd454
claimLib, 0x58d563e377389f37d867361babc954b58a96b1ef
executionLib, 0xfc7c1a36179705992e0be3def88de31b70a124b5
iterTools, 0x2e7cfd7f523395136c7b11adcb93078995694f6b
mathLib, 0x1621da5a49023510e22753e2d883fb7315881ffd
paymentLib, 0x37a83007c1c6e8a878ef1587269e24b4e523a77d
requestFactory, 0x0fc3f33cd782fae19ffd092f2ca897b4506df299
requestLib, 0x457ac892478037a8fe3848319cb3111c1af6b5df
requestMetaLib, 0x450c6e7eea377521981e53601e1f5be8d481984d
requestScheduleLib, 0x3ff7c0b801bf2a7dd1391bcef622b1f52e2e70e2
safeMath, 0x24aca831c15e7ff4ee4e8025ea478ca8b3581db1
timestampScheduler, 0xccf3a60fd8a7a31d872d447a4cec4e8f33604285
transactionRequestCore, 0x282f82377aa46edd4296bc1ddd87cb4b80b5162b
transactionRecorder, 0x091d0cca9f6b6fb38bcb6420fd928f1feec5c86a
```

## Thanks and support
[<img src="https://s3.amazonaws.com/chronologic.network/ChronoLogic_logo.svg" width="128px">](https://github.com/chronologic)
