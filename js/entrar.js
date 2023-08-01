document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");

  document.querySelector(".botao-login").addEventListener("click", function (event) {
    event.preventDefault(); 

    const email = emailInput.value;
    const senha = senhaInput.value;


    if (verificarCredenciais(email, senha)) {
      alert("Login bem-sucedido!");
      window.location.href = "index.html";
    } else {
      alert("Email ou senha incorretos. Tente novamente.");
    }
  });

  function verificarCredenciais(email, senha) {
    const emailCorreto = "user@gmail.com";
    const senhaCorreta = "12345";

    return email === emailCorreto && senha === senhaCorreta;
  }
});
