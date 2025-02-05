<script setup lang="ts">

</script>

<template>
  <div class="login-container">
    <div class="form-container">
      <form>
        <div class="input-group">
          <label for="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" required>
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <div class="password-container">
            <input type="password" id="password" placeholder="Enter your password" required>
            <i class="fa-solid fa-eye-slash toggle-password" onclick="togglePasswordVisibility()"></i>
          </div>
        </div>
        <button type="submit" class="btn">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Genel stil */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #102C57, #1E3A5C, #345774); /* Koyu tonlarda gradient */
  background-size: 400% 400%;
  animation: gradientAnimation 8s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #ffffff;
}

@keyframes gradientAnimation {
  0% { background-position: 0% 50%; }
  25% { background-position: 50% 50%; }
  50% { background-position: 100% 50%; }
  75% { background-position: 50% 50%; }
  100% { background-position: 0% 50%; }
}

/* Login container */
.login-container {
  width: 400px;
  background-color: #ffffff; /* Beyaz arka plan */
  padding: 40px 50px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1s ease-out;
  text-align: center;
}

/* Form container */
.form-container {
  margin-top: 20px;
  position: relative;
}

/* Logo Box */
.logo-box {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 10px; /* Login yazısı ile logo arasındaki mesafe */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Gölge efekti */
}

.logo {
  width: 100%;
  height: auto;
}

/* Başlık stil */
.form-container h1 {
  display: inline-block;
  margin: 0;
  color: #102C57;
  font-size: 2.2rem;
  padding-left: 10px;
}

/* Input group */
.input-group {
  margin-bottom: 20px;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  color: #102C57;
  font-size: 1.2rem;
}

.input-group input {
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1.1rem;
  box-sizing: border-box;
  background-color: #ffffff;
  color: #000000;
  transition: all 0.3s ease;
}

/* Şifre alanı için özel stil */
.password-container {
  position: relative;
  display: flex;
  align-items: center;
}

.password-container input {
  padding-right: 40px; /* Göz ikonuna yer bırak */
  transition: all 0.3s ease;
}

.toggle-password {
  position: absolute;
  right: 10px;
  cursor: pointer;
  font-size: 1.6rem;
  color: #102C57;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.toggle-password:hover {
  opacity: 1;
}

/* Giriş butonu */
.btn {
  width: 100%;
  padding: 15px;
  background-color: #345774;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 1.3rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #1E3A5C;
}

/* Animasyonlar */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

</style>