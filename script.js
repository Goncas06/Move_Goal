// script.js - Validação do formulário (simulação)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Mensagem enviada com sucesso!\n(Obrigado pelo seu contacto. Responderemos em breve.)');
      this.reset();
    });
  }
});