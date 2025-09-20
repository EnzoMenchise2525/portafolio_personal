let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        for (let i = 0; i < habilidades.length; i++) {
            let porcentaje = habilidades[i].getAttribute("data-percent");
            habilidades[i].style.width = porcentaje + "%";
            habilidades[i].querySelector("span").textContent = porcentaje + "%";
        }
    }
}

window.onscroll = function() {
    efectoHabilidades();
};

// Filtrado de proyectos en portafolio
const menuOpciones = document.querySelectorAll('.filtros-izquierda ul li');
const proyectos = document.querySelectorAll('.galeria .proyecto');

// AL CARGAR LA PÁGINA, MOSTRAR SOLO "PORTAFOLIO"
window.addEventListener('DOMContentLoaded', () => {
    proyectos.forEach(proy => {
        if(proy.getAttribute('data-categoria') === 'portafolio'){
            proy.style.display = 'block';
            proy.style.opacity = 1;
        } else {
            proy.style.display = 'none';
            proy.style.opacity = 0;
        }
    });
    // Marcar "Portafolio" como activo al inicio
    menuOpciones.forEach(o => o.classList.remove('active'));
    document.querySelector('.filtros-izquierda li[data-filtro="portafolio"]').classList.add('active');
});

menuOpciones.forEach(op => {
    op.addEventListener('click', () => {
        // Si ya está activo, no hace nada
        if(op.classList.contains('active')) return;

        // Remover active de todas las opciones y agregar a la seleccionada
        menuOpciones.forEach(o => o.classList.remove('active'));
        op.classList.add('active');

        const filtro = op.getAttribute('data-filtro');

        proyectos.forEach(proy => {
            if(proy.getAttribute('data-categoria') === filtro){
                proy.style.display = 'block';
                proy.style.opacity = 0;
                setTimeout(() => proy.style.opacity = 1, 50);
            } else {
                proy.style.opacity = 0;
                setTimeout(() => proy.style.display = 'none', 300);
            }
        });
    });
});

