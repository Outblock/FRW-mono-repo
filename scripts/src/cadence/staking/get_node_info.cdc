import FlowIDTableStaking from 0xFlowIDTableStaking

access(all) fun main(nodeID: String): FlowIDTableStaking.NodeInfo {
  return FlowIDTableStaking.NodeInfo(nodeID: nodeID)
}