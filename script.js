document.getElementById('videojuego').addEventListener('click', function() {
    document.getElementById('titulo').style.color = red;
});

function cargarFooter() {
  var footer = document.getElementById("footer");
  footer.innerHTML = `
    <p><strong>Authors:</strong> Todo el team Luddies </p>
    <p><strong>Email:</strong> contact@luddies.fake</p>
    <p><strong>Project:</strong> Videojuegos — AD-07 Group CH65</p>
  `;
}