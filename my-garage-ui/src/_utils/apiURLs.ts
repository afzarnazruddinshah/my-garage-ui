export const serverDomain = `https://my-garage-jjwn.onrender.com`;
export const getTechnicians = `${serverDomain}/garage/technicians`;
export const getGarageInfo = `${serverDomain}/garage/garage/101`;
export const getAllVehicles = `${serverDomain}/garage/vehicles`;
export const postVehicle = `${serverDomain}/garage/vehicle`;
export const getAllCustomers = `${serverDomain}/garage/customers`;
export const postCustomer = `${serverDomain}/garage/customer/`;
export const getAllAssignments = `${serverDomain}/garage/assignments`;
export const postAssignment = `${serverDomain}/garage/assignment`;
export const getAllTransactions = `${serverDomain}/garage/transactions`;

export const getPaginatedTransactions = `${serverDomain}/garage/getTransactions`;
export const getTotalTransactions = `${serverDomain}/garage/getTotalTransactions`;

//analytics
export const analytics = "/analytics";
export const vehicles = "/vehicles";
export const getMostServicedVehicles = `${serverDomain}${analytics}${vehicles}/most-serviced`;
