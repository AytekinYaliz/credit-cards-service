exports.StatusCodes = {
   OK: 200,
   Created: 201,
   BadRequest: 400,
   Unauthorized: 401,
   NotFound: 404,
};

exports.currencyFormatter = new Intl.NumberFormat('en-GB', {
   style: 'currency',
   currency: 'GBP',
   minimumFractionDigits: 0,
   maximumFractionDigits: 2
 });
