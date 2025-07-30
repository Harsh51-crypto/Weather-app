function getweather() {
  const city = document.getElementById("city-name").value;
  const apiKey = "86932b8c2c3249c7ae0111636253007"; // <-- Fixed variable name
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found or invalid API key");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("weather").innerHTML = `
        <p><strong>City:</strong> ${data.location.name}</p>
        <p><strong>Country:</strong> ${data.location.country}</p>
        <p><strong>Temperature:</strong> ${data.current.temp_c} °C</p>
        <p><strong>Condition:</strong> ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" />
      `;
    })
    .catch(error => {
      document.getElementById("weather").innerHTML = `<p style="color:red">${error.message}</p>`;
    });
}
