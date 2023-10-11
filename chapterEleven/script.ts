async function fetchApi(api: string) {
    const response = await fetch (api);
    const json = await response.json();
    handleCursos(json);
}

interface Cursos {
    nome: string;
    horas: number;
    aulas: number;
    gratuito: boolean;
    tags: [];
    idAulas: [];
    nivel: "iniciante" | "avancado";
}

function isCurso(curso: unknown): curso is Cursos {
    if (
        curso && typeof curso === "object" &&
        "nome" in curso &&
        "horas" in curso &&
        "tags" in curso
        ) {
            return true;
    } else {
        return false;
    }
}

function handleCursos(data: unknown) {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach((item) => {
            document.body.innerHTML += `
                <div>
                    <h2>${item.nome}</h2>
                    <p>${item.horas}</p>
                    <p>${item.tags.join(", ")}</p>
                </div>
            `;
        })
    }
}

fetchApi("https://api.origamid.dev/json/cursos.json")