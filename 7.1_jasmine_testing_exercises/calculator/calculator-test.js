
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({loanAmount: 300000, term: 30, rate: 0.03})).toEqual("1264.81");
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({loanAmount: 500000, term: 30, rate: 0.04})).toEqual("2387.08");
});

