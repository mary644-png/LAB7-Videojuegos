const contactForm = document.getElementById("contactForm");

if (contactForm) {
	const statusEl = document.getElementById("formStatus");

	contactForm.addEventListener("submit", (event) => {
		event.preventDefault();

		const formData = new FormData(contactForm);
		const nombre = String(formData.get("nombre") || "").trim();
		const correo = String(formData.get("correo") || "").trim();
		const tema = String(formData.get("tema") || "").trim();
		const mensaje = String(formData.get("mensaje") || "").trim();

		if (!nombre || !correo || !tema || !mensaje) {
			statusEl.textContent = "Completa todos los campos antes de enviar.";
			statusEl.className = "status error";
			return;
		}

		const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

		if (!emailValid) {
			statusEl.textContent = "Ingresa un correo electronico valido.";
			statusEl.className = "status error";
			return;
		}

		statusEl.textContent = "Mensaje enviado. Te contactaremos pronto, gamer.";
		statusEl.className = "status success";
		contactForm.reset();
	});
}
