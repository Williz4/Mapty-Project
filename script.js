'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

if(navigator.geolocation) {
navigator.geolocation.getCurrentPosition(
	 function(position) {
	 	const {latitude} = position.coords;
	 	const {longitude} = position.coords;

	 	const coords = [latitude, longitude];

	 	map = L.map('map').setView(coords, 14);

		L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
		    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		/*L.marker(coords).addTo(map)
		    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		    .openPopup();*/

		//Handling clicks on map
		map.on('click', function(mapE) {
			mapEvent = mapE;

			form.classList.remove('hidden');
			inputDistance.focus();

			/*const{lat, lng} = mapEvent.latlng;



			L.marker([lat, lng]).addTo(map)
		    .bindPopup(L.popup({maxWidth: 250, minWidth: 100, autoClose: false, closeOnClick: false, className: 'running-popup',}))
		    .setPopupContent('Workout')
		    .openPopup();*/
		});
	 }, 

 	function() {
	alert('Could not get your position. Please enable your location to enable this app to function well!')
	}
);}

form.addEventListener('submit', function(e) {
	//Stop the default behavior of the form from submitting
	e.preventDefault();
	


	//Display the marker
	const{lat, lng} = mapEvent.latlng;

	L.marker([lat, lng]).addTo(map)
    .bindPopup(L.popup({maxWidth: 250, minWidth: 100, autoClose: false, closeOnClick: false, className: 'running-popup',}))
    .setPopupContent('Workout')
    .openPopup();
});