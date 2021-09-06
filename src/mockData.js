export const mockContacts = [
  { id: 0, name: 'Lord Stephen Nelson', avatar: '🧔' },
  { id: 1, name: 'Sanako Mukami', avatar: '🥷' },
  { id: 2, name: 'Cerys Tiernan', avatar: '🧟‍♂️' },
  { id: 3, name: 'Maya Alexas', avatar: '🤷‍♀️' },
  { id: 4, name: 'Sahar Till', avatar: '🤵🏻‍♂️' },
  { id: 5, name: 'Charles Lawson', avatar: '🕵️‍♂️' },
];

const getContact = (id) => mockContacts.find((item) => item.id === id);

export const createMockMessage = (text, mine = false) => ({ text, time: new Date(), mine });

export const mockHistory = (id) => [
  createMockMessage('Hi there!'),
  createMockMessage(`It's ${getContact(id).name}`),
  createMockMessage('How are you doing?'),
];
