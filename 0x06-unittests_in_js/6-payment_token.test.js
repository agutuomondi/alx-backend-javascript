// 6-payment_token.test.js
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should return a resolved promise with successful response when success is true', function (done) {
    // Call the function with success = true
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Verify that the response is as expected
        expect(response).to.deep.equal({
          data: 'Successful response from the API',
        });
        // Invoke done to signal the end of the asynchronous test
        done();
      })
      .catch((error) => {
        // If there's an error, fail the test
        done(error);
      });
  });
});


describe('getPaymentTokenFromAPI2', function () {
  it('Async testing with done callback', function (done) {
    // Call the function with success = true
    getPaymentTokenFromAPI(true)
      .then((data) => {
        // Verify that the response has the 'data' property
        expect(data).to.have.property('data');
        // Invoke done to signal the end of the asynchronous test
        done();
      });
  });
});
