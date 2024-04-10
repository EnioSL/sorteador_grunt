document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let mumeroMaximo = document.getElementById('numero-maximo').value;
        mumeroMaximo = parseInt(mumeroMaximo);

        let numeroAleatorio = Math.random() * mumeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})