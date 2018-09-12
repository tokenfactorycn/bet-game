const address = '0x7F0d93c42b6535EB7fc155dd19542970e1be5153'
const ABI = [
  {
    constant: true,
    inputs: [{ name: 'rid', type: 'uint256' }],
    name: 'getLastAwardInfo',
    outputs: [
      { name: 'firstprize', type: 'uint256' },
      { name: 'secondprize', type: 'uint256[]' }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }, { name: '', type: 'uint256' }],
    name: 'winners',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: 'rid', type: 'uint256' }],
    name: 'getUserTicket',
    outputs: [{ name: 'ret', type: 'uint256[]' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: 'rid', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'Id',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'getCurRoundInfo',
    outputs: [
      { name: 'curRoundId', type: 'uint256' },
      { name: 'curEth', type: 'uint256' }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }, { name: '', type: 'uint256' }],
    name: 'third',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: 'index', type: 'uint256' }],
    name: 'del',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      { name: 'rid', type: 'uint256' },
      { name: 'roomid', type: 'uint256' }
    ],
    name: 'getRoomBalance',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      { name: '_shares', type: 'uint256' },
      { name: 'room', type: 'uint256' }
    ],
    name: 'buyTickets',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'InitialArray',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }],
    name: 'roundinfos',
    outputs: [
      { name: 'ticketcount', type: 'uint256' },
      { name: 'firstprize', type: 'uint256' },
      { name: 'eth', type: 'uint256' }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }, { name: '', type: 'uint256' }],
    name: 'tickets',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: 'index', type: 'uint256' }],
    name: 'query',
    outputs: [{ name: 'value', type: 'uint256' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }, { name: '', type: 'uint256' }],
    name: 'second',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      { name: '', type: 'uint256' },
      { name: '', type: 'address' },
      { name: '', type: 'uint256' }
    ],
    name: '_pticket',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }, { name: '', type: 'address' }],
    name: 'addrticket',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      { name: 'index', type: 'uint256' },
      { name: 'value', type: 'uint256' }
    ],
    name: 'updata',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: 'start', type: 'uint256' },
      { indexed: false, name: 'count', type: 'uint256' },
      { indexed: false, name: 'rid', type: 'uint256' }
    ],
    name: 'onNewTicket',
    type: 'event'
  }
]

export { address, ABI }
