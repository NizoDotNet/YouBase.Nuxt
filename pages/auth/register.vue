<script setup lang="ts">

</script>

<template>
  <div class="register-container">
    <div class="form-container">
      <h1>
        Register
      </h1>
      <form id="registerForm">
        <div class="input-group">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" required>
        </div>
        <div class="input-group">
          <label for="surname">Surname</label>
          <input type="text" id="surname" placeholder="Enter your surname" required>
        </div>
        <div class="input-group">
          <label for="birthdate">Birth Date (Optional)</label>
          <input type="date" id="birthdate">
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required>
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <div class="password-container">
            <input type="password" id="password" placeholder="Enter your password" required>
            <i class="fa-solid fa-eye-slash toggle-password" onclick="togglePasswordVisibility()"></i>
          </div>
        </div>
        <div class="input-group">
          <label for="repeatPassword">Repeat Password</label>
          <div class="password-container">
            <input type="password" id="repeatPassword" placeholder="Repeat your password" required>
            <i class="fa-solid fa-eye-slash toggle-password" onclick="togglePasswordVisibility('repeatPassword')"></i>
          </div>
        </div>
        <button type="submit" class="btn">Register</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.register-container {
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
  margin-right: 10px; /* Register yazısı ile logo arasındaki mesafe */
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

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

</style>