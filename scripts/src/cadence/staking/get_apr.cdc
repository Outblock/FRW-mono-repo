import FlowIDTableStaking from 0x8624b52f9ddcd04a

access(all) fun main(): UFix64 {
    let apr = FlowIDTableStaking.getEpochTokenPayout() / FlowIDTableStaking.getTotalStaked() / 7.0 * 365.0 * (1.0 - FlowIDTableStaking.getRewardCutPercentage())
    return apr
}