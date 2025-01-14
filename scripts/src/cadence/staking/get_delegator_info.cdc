import FlowIDTableStaking from 0xFlowIDTableStaking

access(all) fun main(nodeID: String, delegatorID: UInt32): FlowIDTableStaking.DelegatorInfo {
  return FlowIDTableStaking.DelegatorInfo(nodeID: nodeID, delegatorID: delegatorID)
}