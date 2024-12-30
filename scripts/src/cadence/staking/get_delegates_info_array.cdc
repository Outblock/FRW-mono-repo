
import FlowStakingCollection from 0x8d0e87b65159ae63
import FlowIDTableStaking from 0x8624b52f9ddcd04a
import LockedTokens from 0x8d0e87b65159ae63
        
access(all) fun main(address: Address): [FlowIDTableStaking.DelegatorInfo] {
    return FlowStakingCollection.getAllDelegatorInfo(address: address)
}