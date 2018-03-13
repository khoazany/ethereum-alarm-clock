const fs = require('fs')

/// Contract artifacts (located in the build/ folder)
const BaseScheduler               = artifacts.require("./BaseScheduler.sol"),
      BlockScheduler              = artifacts.require("./BlockScheduler.sol"),
      ClaimLib                    = artifacts.require("./ClaimLib.sol"),
      ExecutionLib                = artifacts.require("./ExecutionLib.sol"),
      GroveLib                    = artifacts.require("./GroveLib.sol"),
      IterTools                   = artifacts.require("./IterTools.sol"),
      MathLib                     = artifacts.require("./MathLib.sol"),
      PaymentLib                  = artifacts.require("./PaymentLib.sol"),
      RequestFactory              = artifacts.require("./RequestFactory.sol"),
      RequestFactoryInterface     = artifacts.require("./RequestFactoryInterface.sol"),
      RequestLib                  = artifacts.require("./RequestLib.sol"),
      RequestMetaLib              = artifacts.require("./RequestMetaLib.sol"),
      RequestScheduleLib          = artifacts.require("./RequestScheduleLib.sol"),
      RequestTracker              = artifacts.require("./RequestTracker.sol"),
      RequestTrackerInterface     = artifacts.require("./RequestTrackerInterface.sol"),
      SchedulerInterface          = artifacts.require("./SchedulerInterface.sol"),
      SchedulerLib                = artifacts.require("./SchedulerLib.sol"),
      TimestampScheduler          = artifacts.require("./TimestampScheduler.sol"),
      TransactionRequestCore      = artifacts.require("./TransactionRequestCore.sol"),
      TransactionRequestInterface = artifacts.require("./TransactionRequestInterface.sol");

const TransactionRecorder = artifacts.require("./TransactionRecorder.sol");

module.exports = function(deployer) {

    console.log(`${"-".repeat(30)}
NOW DEPLOYING THE ETHEREUM ALARM CLOCK CONTRACTS...\n`)

    deployer.deploy([MathLib,
        GroveLib,
        IterTools,
        ExecutionLib,
        RequestMetaLib])
    .then(() => {
        deployer.link(MathLib, ClaimLib)

        return deployer.deploy(ClaimLib)
    })
    .then(() => {
        deployer.link(ExecutionLib, PaymentLib)
        deployer.link(MathLib, PaymentLib)

        return deployer.deploy(PaymentLib)
    })
    .then(() => {
        deployer.link(MathLib, RequestScheduleLib)
        return deployer.deploy(RequestScheduleLib)
    })
    .then(() => {
        deployer.link(ClaimLib, RequestLib)
        deployer.link(ExecutionLib, RequestLib)
        deployer.link(MathLib, RequestLib)
        deployer.link(PaymentLib, RequestLib)
        deployer.link(RequestMetaLib, RequestLib)
        deployer.link(RequestScheduleLib, RequestLib)

        return deployer.deploy(RequestLib)
    })
    .then(() => {
        deployer.link(MathLib, SchedulerLib)
        deployer.link(PaymentLib, SchedulerLib)
        deployer.link(RequestLib, SchedulerLib)

        return deployer.deploy(SchedulerLib)
    })
    .then(() => {
        deployer.link(GroveLib, RequestTracker)
        deployer.link(MathLib, RequestTracker)

        return deployer.deploy(RequestTracker)
    })
    .then(() => {
        deployer.link(ClaimLib, TransactionRequestCore)
        deployer.link(ExecutionLib, TransactionRequestCore)
        deployer.link(MathLib, TransactionRequestCore)
        deployer.link(PaymentLib, TransactionRequestCore)
        deployer.link(RequestMetaLib, TransactionRequestCore)
        deployer.link(RequestLib, TransactionRequestCore)
        deployer.link(RequestScheduleLib, TransactionRequestCore)

        return deployer.deploy(TransactionRequestCore)
    })
    .then(() => {
        deployer.link(ClaimLib, RequestFactory)
        deployer.link(MathLib, RequestFactory)
        deployer.link(RequestScheduleLib, RequestFactory)
        deployer.link(IterTools, RequestFactory)
        deployer.link(PaymentLib, RequestFactory)
        deployer.link(RequestLib, RequestFactory)
        deployer.link(RequestTracker, RequestFactory)
        // deployer.link(TransactionRequest, RequestFactory)

        return deployer.deploy(RequestFactory, RequestTracker.address, TransactionRequestCore.address)
    })
    .then(() => {
        deployer.link(RequestScheduleLib, BaseScheduler)
        deployer.link(PaymentLib, BaseScheduler)
        deployer.link(SchedulerLib, BaseScheduler)
        deployer.link(RequestLib, BaseScheduler)
        deployer.link(MathLib, BaseScheduler)

        return deployer.deploy(BaseScheduler)
    })
    .then(() => {
        deployer.link(SchedulerLib, BlockScheduler)
        deployer.link(RequestScheduleLib, BlockScheduler)
        deployer.link(PaymentLib, BlockScheduler)
        deployer.link(RequestLib, BlockScheduler)
        deployer.link(MathLib, BlockScheduler)

        return deployer.deploy(BlockScheduler, RequestFactory.address, '0xecc9c5fff8937578141592e7E62C2D2E364311b8')
    })
    .then(() => {
        deployer.link(SchedulerLib, TimestampScheduler)
        deployer.link(RequestScheduleLib, TimestampScheduler)
        deployer.link(PaymentLib, TimestampScheduler)
        deployer.link(RequestLib, TimestampScheduler)
        deployer.link(MathLib, TimestampScheduler)

        return deployer.deploy(TimestampScheduler, RequestFactory.address, '0xecc9c5fff8937578141592e7E62C2D2E364311b8')
    })
    .then(() => {
        return deployer.deploy(TransactionRecorder)
    })
    .then(() => {
        const contracts = {
            baseScheduler: BaseScheduler.address,
            blockScheduler: BlockScheduler.address,
            claimLib: ClaimLib.address,
            executionLib: ExecutionLib.address,
            groveLib: GroveLib.address,
            iterTools: IterTools.address,
            mathLib: MathLib.address,
            paymentLib: PaymentLib.address,
            requestFactory: RequestFactory.address,
            requestLib: RequestLib.address,
            requestMetaLib: RequestMetaLib.address,
            requestScheduleLib: RequestScheduleLib.address,
            requestTracker: RequestTracker.address,
            schedulerLib: SchedulerLib.address,
            timestampScheduler: TimestampScheduler.address,
            transactionRequestCore: TransactionRequestCore.address,
            transactionRecorder: TransactionRecorder.address
        }
//         Object.keys(contracts).forEach((key) => {
//             fs.appendFileSync('kovan.info', `${key}, ${contracts[key]}\n`)
//         })
//         fs.appendFileSync('kovan.json', JSON.stringify(contracts))
//         console.log(`CONTRACTS SUCCESSFULLY DEPLOYED
// ${"-".repeat(30)}
// see deployed.info for addresses of all contracts
//         `)
    })
}
