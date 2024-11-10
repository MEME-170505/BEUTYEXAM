<template>
  <footer class="footer">
    <!-- Sección de suscripción -->
    <div class="subscribe-section">
      <p>SIGN UP FOR UPDATES</p>
      <div class="subscribe-form">
        <input type="email" placeholder="email address" />
        <button class="submit-btn">
          <span>SUBMIT</span>
          <span>SUBMIT</span>
          <span>SUBMIT</span>
        </button>
      </div>
      <small>by signing up you agree to our terms</small>
    </div>

    <!-- Texto principal del footer -->
    <div class="footer-logo">
      <h1>BEAUTY OF JOSEON</h1>
    </div>

    <!-- Iconos de redes sociales y enlaces de navegación -->
    <div class="footer-links">
      <div class="social-icons">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-tiktok"></i>
      </div>
      <div class="nav-links">
        <a href="#">CONTACT US</a>
        <a href="#">FAQ</a>
        <a href="#">SHIPPING</a>
        <a href="#">PRIVACY POLICY</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No necesita lógica adicional en el script para este diseño.
</script>

<style scoped>
.footer {
  background-color: #333333; /* Gris oscuro */
  text-align: center;
  padding: 60px 20px;
  font-family: Arial, sans-serif;
  color: #fff; /* Cambié el color del texto a blanco para mejor contraste */
}

.subscribe-section p {
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: bold;
}

.subscribe-form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
}

.subscribe-form input[type="email"] {
  padding: 12px;
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
  font-size: 16px;
  color: #fff;
}

.submit-btn {
  width: 70px;
  height: 70px;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.submit-btn span {
  position: absolute;
  transform: rotate(0deg);
  font-weight: bold;
  color: #000000;
  animation: rotateText 5s linear infinite;
}

.submit-btn span:nth-child(2) {
  transform: rotate(120deg);
}

.submit-btn span:nth-child(3) {
  transform: rotate(240deg);
}

@keyframes rotateText {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.subscribe-section small {
  display: block;
  font-size: 12px;
  color: #000000;
  margin-top: 8px;
}

.footer-logo h1 {
  font-size: 48px; /* Tamaño de letra más grande */
  margin: 30px 0;
  font-weight: normal;
  letter-spacing: 4px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

.social-icons {
  font-size: 24px;
  margin-bottom: 15px;
}

.social-icons i {
  margin: 0 15px;
  cursor: pointer;
  color: #fff;
}

.nav-links a {
  margin: 0 15px;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>
