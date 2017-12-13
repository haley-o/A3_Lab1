(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
  var carImage = document.querySelectorAll('.data-ref'),
  		carTitle = document.querySelector('.modelName'),
  		carPrice = document.querySelector('.priceInfo'),
  		carDesc = document.querySelector('.modelDetails');
  		const httpRequest = new XMLHttpRequest();

  		function getCarData() {
  			// make and ajax call to the database, handle errors first
  			if (!httpRequest){
  				alert('giving up, your browser sucks');
  				return false;
  			}

  			httpRequest.onreadystatechange = processRequest; //fire this function when things???? change
  			httpRequest.open('GET', './includes/functions.php?carModel=' +this.id);
  			httpRequest.send();
  		}

  		function processRequest(data) {
  			// handle the stages of our ajax call
  			let reqIndicator = document.querySelector('.request-state');
  			reqIndicator.textContent = httpRequest.readyState;

  			// debugger;	


  			if (httpRequest.readyState === XMLHttpRequest.DONE) {
  				if (httpRequest.status === 200) { // request worked? all is good?
  					// debugger;
  					let data = JSON.parse(httpRequest.responseText);
  					changeCar(data);
  				} else {
  					alert('This was a problem with the request');
  				}
  			}
  		}

	function changeCar(data) {
		// debugger;
		const {modelName, pricing, modelDetails} = data;
	 	// objectIndex = carData[this.id];
    
    carTitle.textContent = modelName;
		carPrice.innerHTML = pricing;
		carDesc.textContent = modelDetails;


		// if the classList of the element you clicked does not contain the class 'active'
		// ( ! the exclamation mark reverses the if statment logic, instead of checking if it is true, it checks if it is false)
		// remove the class active from all items within the carImage array
		// and add a class of active to the selected item
		
    // if (!this.classList.contains('active')) {
		// 	for (var i = 0; i < carImage.length; i++) {
		// 		carImage[i].classList.remove('active');
		// 	}
		// 	this.classList.add('active');
		// }
  	}


	// setting the initial value of i to 0. 
	// if i is less than the amount of items in the slides array than the function runs once
	// after the function runs once i incriments by 1
	// in summary: the loop continues until i is no longer less than the amount of items in the slides array, then it stops.
	for (var i = 0; i < carImage.length; i++) { 
	    carImage[i].addEventListener('click', getCarData, false);
	}

	document.addEventListener("DOMContentLoaded", function(event) { 
	  carImage[0].click();
	})
   
})();
