pragma solidity;

/** 
BagFace DAO Contract:
1: Collects investors money (ether) and allocate shares
2: Keeps Track of investors contributions with shares
3: Allow Investors to transfer shares
4: Allow investment proposals to be created and voted
5: Execute successful investment proposales (i.e send money)
*/

contract DAO {
    struct Proposal{
        uint id;
        string name;
        uint amount;
        address payable recipient;
        uint votes;
        uint end;
        bool executed;
    }
    mapping(address => bool) public investors;
    mapping(address => uint) public shares;
    mapping(address => mapping(uint => bool)) public votes;
    mapping(uint => Proposal) public proposal;
    uint public totalShares;
    uint public avaialbleFunds;
    uint public contributionEnd;
    uint public nextProposalId;
    uint public voteTime;
    uint public quorum;
    address public admin;

    constructor(
        uint contributionTime,
        uint _voteTime,
        uint _quorum)
        public {
            require(_quorum >0 && _quorum < 100, 'Quorum must be between 0 and 100');
            contributionEnd = now + contributionTime;
            voteTime = _voteTime;
            quorum = _quorum;
            admin = msg.sender;
        }

        function contribute() payable external {
            require(now < contributeEnd, 'Cant contribute after contributionEnd' );
            investors[msg.sender] = true;
            shares[msg.sender] += msg.value;
            totalShares += msg.value;
            availableFunds += msg.value;
        }
        
        function redeemShare(uint amount) external {
            require(shares[msg.sender] >= amount, 'Not enough shares');
            require(availablFunds)
            shares[msg.sender] -= msg.value
            availableFunds -= amount
        }
        function transferShare(uint amount, address to) external {
            require(shares[msg.sender] >= amount, 'Not enough shares');
            shares[msg.sender] -= amount;
            shares[to] += amount;
            investors[to] = true;
        }

        function createProposal(
            strict memory name,
            uint amount, address paybale recipient)
            onlyInvestors() {
                require(availableFunds => amount, 'Amount too big')
            }
        )








}
