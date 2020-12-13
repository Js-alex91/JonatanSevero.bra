const typed = new Typed('.typed',{

    strings: [
        '<i class="LetrasEdit">Capacidade de aprendizagem,<br>Auto-motivação,Organização,<br>Sentido de responsabilidade.</i>',
        '<i class="LetrasEdit">Iniciativa,Criatividade,<br>Gerenciamento de estresse e pressão,<br>Capacidade de análise</i>',
		'<i class="LetrasEdit">Segurança e confiança,<br>Capacidade de trabalhar em equipe,<br>Inteligência emocional,<br>Concentração.</i>','<i class="LetrasEdit">Habilidades de comunicação,<br>Pensamento crítico,<br>Investigação e negociação,<br>Influenciar e mostrar liderança.</i>','<i class="LetrasEdit">Idiomas <br> Português nativo<br> Ingles <br> Español Nativo</i>'

  
    ],
    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 55, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 10, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato

});


// sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});




