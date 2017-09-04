/* Test 3 - pizza count should be 1 after pizza is added */
	describe('addPizza', function () {
		browser.get('http://www.filehosting.org/file/details/690967/Opgave%20Deel%201.html');

     it('should add one and two', function() {
    browser.get('http://www.filehosting.org/file/details/690967/Opgave%20Deel%201.html');

    element(by.id('add-Margerita')).click();

    expect(element(by.binding('totalPrice')).getText()).
        toEqual('10'); // Total price must equal 10 
  });
	});