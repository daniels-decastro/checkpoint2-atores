const grid = document.querySelector(".grid");
const contador = document.querySelector(".contador");
const campoBusca = document.querySelector("#busca");

// Converte "1979-08-27" para "27/08/1979"
function formatarData(data) {
  const partes = data.split("-");
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

// Monta os cards de uma lista de atores
function renderizarAtores(lista) {
  grid.innerHTML = "";

  if (lista.length === 0) {
    grid.innerHTML = `<p class="vazio">Nenhum ator ou atriz encontrado.</p>`;
  }

  lista.forEach((ator) => {
    grid.innerHTML += `
      <div class="card">
        <img src="${ator.foto}" alt="${ator.nome}">
        <div class="info">
          <h2>${ator.nome}</h2>
          <p>País: ${ator.pais}</p>
          <p>Nascimento: ${formatarData(ator.nascimento)}</p>
        </div>
      </div>
    `;
  });

  contador.textContent = `${lista.length} de ${atores.length} atores e atrizes`;
}

// Chamada pelo oninput do campo de busca
function filtrarAtores() {
  const texto = campoBusca.value.toLowerCase();
  const filtrados = atores.filter((ator) =>
    ator.nome.toLowerCase().includes(texto)
  );
  renderizarAtores(filtrados);
}

renderizarAtores(atores);
