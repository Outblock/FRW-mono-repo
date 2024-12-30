import FlowEVMBridgeUtils from 0xFlowEVMBridge

access(all)
fun main(bytes used: UInt64): UFix64 {
    return FlowEVMBridgeUtils.calculateBridgeFee(bytes: used)
}
