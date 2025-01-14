import EVMUtils from 0xFlowEVMBridge
import FlowEVMBridge from 0xFlowEVMBridge

access(all) fun main(evmAddressHex: String): Bool? {
    if let address = EVMUtils.getEVMAddressFromHexString(address: evmAddressHex) {
        return FlowEVMBridge.evmAddressRequiresOnboarding(address)
    }
    return nil
}
