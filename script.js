// Navbar com sombra ao rolar
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Fecha o menu mobile ao clicar em um link
  document.querySelectorAll('#navMenu .nav-link, #navMenu .btn-terra').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('navMenu');
      if (menu.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // Validação simples do formulário de contato
  const form = document.getElementById('contatoForm');
  const successMsg = document.getElementById('formSuccess');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      successMsg.classList.add('d-none');
      return;
    }
    form.classList.add('was-validated');
    successMsg.classList.remove('d-none');
    form.reset();
    form.classList.remove('was-validated');
  });
