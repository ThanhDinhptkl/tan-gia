const params = new URLSearchParams(window.location.search);

const guest = params.get("name");

document.getElementById("guestName").innerHTML = guest
  ? decodeURIComponent(guest)
  : "Quý Khách";
