/* 
    Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.
    Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.
*/


interface Curso {
    nome: string;
    horas: number;
    aulas: number;
    gratuito: boolean;
    tags: string[];
    idAulas: number[];
    nivel: 'iniciante' | 'avancado';
}

async function fetchApi() {
    const response = await fetch(' https://api.origamid.dev/json/cursos.json');
    const json = await response.json();

    return showMoreCourse(json);
}



function showMoreCourse(cursos: Curso[]) {

    cursos.forEach((curso) => {
        let color;
        if(curso.nivel === 'iniciante') {
            color = 'blue';
        } else if(curso.nivel === 'avancado') {
            color = 'red';
        }

        document.body.innerHTML += `
        <div>
            <h1 style="color: ${color}">Curso: ${curso.nome}</h1>
            <p>Horas: ${curso.horas}</p>
            <p>Aulas: ${curso.aulas}</p>
            <p>Gratuidade: ${curso.gratuito}</p>
            <p>Nivel: ${curso.nivel}</p>
        </div>
        `
    })
}

fetchApi();