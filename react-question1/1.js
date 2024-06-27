// const user = {
//   firstName: '',
//   lastName: '', // can be empty
//   customerID: '000', // digital only
//   note: '', // can be empty
//   profession: '', // 'student', 'freelancer', 'rpoductOwner', 'engineer', 'systemAnalytics'
// };

// test data
const users = [
  {
    firstName: 'Ben',
    lastName: '',
    customerID: '003',
    profession: 'productOwner',
  },
  {
    firstName: 'Bob',
    lastName: 'Yellow',
    customerID: '001',
    profession: 'freelancer',
  },
  {
    firstName: 'Charlie',
    lastName: 'Xavier',
    customerID: '002',
    profession: 'student',
  },
  {
    firstName: 'Ben',
    lastName: 'Yellow',
    customerID: '005',
    profession: 'engineer',
  },
];

/**
 * Sort by: 'firstName' + 'lastName' + 'customerID'
 */
function sortUserName(users) {
  const sortingData = users.sort((a, b) => {
    const aName = a.firstName + a.lastName + a.customerID;
    const bName = b.firstName + b.lastName + b.customerID;
    return aName.localeCompare(bName);
  });

  console.log({ sortingData });

  return sortingData;
}

sortUserName(users);

/**
 * Sort by: 'systemAnalytics' > 'engineer' > 'productOwner' > 'freelancer' > 'student'
 */
function sortByType(users) {
  const typeOrder = [
    'student',
    'freelancer',
    'productOwner',
    'engineer',
    'systemAnalytics',
  ];

  const sortingData = users.sort(
    (a, b) => typeOrder.indexOf(a.profession) - typeOrder.indexOf(b.profession)
  );

  console.log({ sortingData });

  return sortingData;
}

sortByType(users);
