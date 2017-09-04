/* Test E2E-01 - pizza totalPrice should be 10.00 after Margerita pizza is added */
	describe('addPizza', function () {
		browser.get('https://rawgit.com/bdeboer95/Workshop-1-Deel-1/master/Opgave%20Deel%202.html');

     it('should be 10 euros', function() {
    browser.get('https://rawgit.com/bdeboer95/Workshop-1-Deel-1/master/Opgave%20Deel%202.html');

    element(by.id('add-Margerita')).click();

    expect(element(by.binding('totalPrice')).getText()).
        toEqual('10.00'); // Total price must equal 10 
  });
	});
	
	/* Test E2E-02 - pizza count should be 1 after Pepperoni pizza is added */
	describe('updatePizzaCount', function () {
		browser.get('https://rawgit.com/bdeboer95/Workshop-1-Deel-1/master/Opgave%20Deel%202.html');

     it('should add 1 pepperoni pizza', function() {
    browser.get('https://rawgit.com/bdeboer95/Workshop-1-Deel-1/master/Opgave%20Deel%202.html');

    element(by.id('add-Pepperoni')).click();

    expect(element(by.id('count-Pepperoni')).getText()).
        toEqual('1'); // Total count for pepperoni must equal 1
  });
	});