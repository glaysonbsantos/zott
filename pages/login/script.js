let credenciaisPadrao = {
    usuario: 'usuario1',
    senha: 'senha1'
  };
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let invalidMessage = document.getElementById('invalidMessage');
    
  
    if (username === credenciaisPadrao.usuario && password === credenciaisPadrao.senha) {
      window.location.href = '../../pages/patrocinador/patrocinador.html'; 
    } else {
        invalidMessage.style.display = 'block'; 
      }
  });
  