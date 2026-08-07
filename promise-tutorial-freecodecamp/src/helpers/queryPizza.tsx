function queryPizza(url, dataOrCallback, callback) {
  // If only two arguments are passed, shift them
  if (typeof dataOrCallback === 'function') {
    callback = dataOrCallback;
    dataOrCallback = null;
  }

  // Simulating network delay
  setTimeout(function() {
    let result = null;
    let error = null;

    //Simulate different mock repsonses based on the URL
    if (url === '/api/pizzahub/') {
      result = {shopId: 123};
    } else if (url.startsWith('/api/pizzahub/pizza')) {
      // Mock pizza data
      result = {
        pizzas: [
          { id: 1, type: 'veg', name: 'margherita' },
          { id: 2, type: 'non-veg', name: 'pepperoni' }
        ]
      };
    } else if (url.startsWith('/api/pizzhub/beverages/')) {
      // Mock beverage data based on pizza id
      const pizzaId = url.split('/').pop(); // get pizza id from the URL
      result = { id: `beerage-for-pizza-${pizzaId}`};
    } else if (url === '/api/order') {
      // Mock successful order placement
      result = { success: true} ;
    } else {
      error = 'Unknown API endpoint';
    }

    // Call the callback with mock result and error
    callback(result, error);
  }, 500); //simulates the 500ms delay
}

