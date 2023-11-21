// No JavaScript (login_process.js)
function processLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (typeof Storage !== 'undefined') {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            alert('Login bem-sucedido!');
            window.location.href = 'inicio.html';
        } else {
            alert('Nome de usuário ou senha incorretos. Tente novamente.');
        }
    } else {
        alert('Seu navegador não suporta localStorage. Atualize para um navegador mais recente.');
    }
}

// Agora, adicionando a função ao escopo global para torná-la acessível.
window.processLogin = processLogin;
