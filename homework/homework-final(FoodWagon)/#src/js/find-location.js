const findUserLocation = () => {
  const location = document.querySelector('#userLocation');

  const success = (position) => {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

    fetch(geoApiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        location.textContent = data.city;
      });
  };
  // geoip php

  const error = () => {
    location.textContent = 'Unable to retrieve your location.';
  };

  navigator.geolocation.getCurrentPosition(success, error);
};

document
  .querySelector('#findLocation')
  .addEventListener('click', findUserLocation);
