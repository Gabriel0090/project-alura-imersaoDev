
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);
    
    for (let dado of dados) {
        section.innerHTML += `
            <div class="container">
        <h2>
         <a href="#" target="_blank">${dado.nome}</a>
        </h2>
        <img src="./image/dLGT8b4Ut10z44uYLaip4QiwKta.jpg" alt="Poster de O Império Contra-Ataca">
        <p><strong>Diretor:</strong> ${dado.diretor}</p>
        <p><strong>Lançamento:</strong>${dado.Lançamento}</p>
        <p><strong>Sinopse:</strong>${dado.Sinopse}</p>
    </div>
        `;
    }
