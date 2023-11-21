document.addEventListener('DOMContentLoaded', function () {
    const cadastroForm = document.getElementById('cadastroForm');
    const cadastrarButton = document.getElementById('cadastrarButton');

    cadastrarButton.addEventListener('click', function () {
        cadastrar();
    });

    function cadastrar() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (typeof Storage !== 'undefined') {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));

            alert('Cadastro realizado com sucesso!');
            window.location.href = 'login.html';
        } else {
            alert('Seu navegador não suporta localStorage. Atualize para um navegador mais recente.');
        }
    }

    cadastroForm.addEventListener('submit', function (event) {
        event.preventDefault();
        cadastrar();
    });
});
