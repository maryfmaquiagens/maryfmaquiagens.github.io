const produtos = [
  { 
    nome: "Lenço Umedecido", 
    precoAntigo: 10, 
    preco: 8, 
    imagem: "lenço.jpeg", 
    descricao: "Lenço umedecido para limpeza facial,\n com ingredientes suaves e ideais\n para pele sensível." 
  },
  { 
    nome: "Esponja para Base", 
    precoAntigo: 5, 
    preco: 4,  
    imagem: "produto1.jpeg", 
    descricao: "Esponja macia para aplicação de base\n líquida, garantindo um acabamento natural." 
  },
  { 
    nome: "Rímel", 
    precoAntigo: 12, 
    preco: 10, 
    imagem: "produto2.jpeg", 
    descricao: "Máscara de cílios extra volume que realça\n seus olhos com volume e definição." 
  },
  { 
    nome: "Água Micelar", 
    precoAntigo: 15, 
    preco: 12,
    imagem: "aguamicelar.jpeg", 
    descricao: "Água micelar suave que remove impurezas\n e maquiagem sem agredir a pele.",
    disponibilidade: "esgotado"  // Produto esgotado
  },
  { 
    nome: "Batom", 
    precoAntigo: 18, 
    preco: 15, 
    imagem: "batom.jpeg", 
    descricao: "Batom de longa duração com cores vibrantes.",
    variantes: [
      { cor: "Vermelho", imagem: "batomvermelho.jpeg" },
      { cor: "Rosa", imagem: "batomrosa.jpeg" }
    ]
  },
  { 
    nome: "Sabonete Facil", 
    precoAntigo: 18, 
    preco: 15, 
    imagem: "sabonete.jpeg", 
    descricao: "Sabonete para limpeza facial, enriquecido\n com vitamina C." 
  },
  { 
    nome: "Sérum Esfoliante", 
    precoAntigo: 19, 
    preco: 15, 
    imagem: "serumesfoliante.jpeg", 
    descricao: "Sérum antioxidante que ajuda a iluminar e\n proteger a pele dos radicais livres." 
  },
  { 
    nome: "Gloss", 
    precoAntigo: 18, 
    preco: 14,  
    imagem: "gloss_vermelho.jpeg",
    descricao: "Gloss brilhante que proporciona um toque\n sedoso e um efeito iluminado aos lábios.",
    variantes: [
      { cor: "Vermelho", imagem: "gloss_vermelho.jpeg" },
      { cor: "Rosa", imagem: "gloss_rosa.jpeg" },
      { cor: "Nude", imagem: "gloss_nude.jpeg" }
    ]
  },
  { 
    nome: "Máscara Facial", 
    precoAntigo: 3.5, 
    preco: 2, 
    imagem: "mascarafacil.jpeg", 
    descricao: "Máscara facial para suavizar e revitalizar a\n pele, ideal para uma rotina de beleza." 
  },
  { 
    nome: "Iluminador", 
    precoAntigo: 20, 
    preco: 16, 
    imagem: "iluminador.jpeg", 
    descricao: "Destaca pontos do rosto com brilho e efeito glow." 
  },
  { 
    nome: "Lápis de Olho", 
    precoAntigo: 10, 
    preco: 7, 
    imagem: "lapis.jpeg", 
    descricao: "Lápis de olho de alta definição para realçar e\n contornar os olhos com precisão." 
  },
  { 
    nome: "Delineador", 
    precoAntigo: 14, 
    preco: 10, 
    imagem: "delineador.jpeg", 
    descricao: "Delineador prático e preciso para um look\n marcante e bem definido." 
  },
  { 
    nome: "Escova de Silicone", 
    precoAntigo: 16, 
    preco: 12, 
    imagem: "escovasilicone.jpeg", 
    descricao: "Massageia o couro cabeludo, ajudando na\n limpeza e estimulação capilar." 
  },
  { 
    nome: "Esponja para Pó", 
    precoAntigo: 5, 
    preco: 4, 
    imagem: "esponjapo.jpeg", 
    descricao: "Aplica pó compacto ou solto para um\n acabamento uniforme." 
  },
  { 
    nome: "Apontador", 
    precoAntigo: 13, 
    preco: 10,
    imagem: "apontador.jpeg", 
    descricao: "Mantém lápis de olho e boca afiados\n para maior precisão.",
    disponibilidade: "esgotado" 
  },
  { 
    nome: "Blindagem", 
    precoAntigo: 18, 
    preco: 14,
    imagem: "blindagem.jpeg", 
    descricao: "Protege e fixa a maquiagem, aumentando\n sua durabilidade." 
  },
  { 
    nome: "Paleta de Sombra", 
    precoAntigo: 24, 
    preco: 20, 
    imagem: "paletasombra.jpeg", 
    descricao: "Define e colore as pálpebras,\n realçando o olhar." 
  },
  { 
    nome: "Primer Facil", 
    precoAntigo: 20, 
    preco: 16, 
    imagem: "primerfacial.jpeg", 
    descricao: "Prepara a pele, suavizando poros e melhorando\n a fixação da maquiagem.",
    disponibilidade: "esgotado" 
  },
  { 
    nome: "Sérum Clareador", 
    precoAntigo: 19, 
    preco: 14, 
    imagem: "serumclareador.jpeg", 
    descricao: "Uniformiza o tom da pele e ajuda\n a reduzir manchas." 
  },
  { 
    nome: "Lip Gloss", 
    precoAntigo: 18, 
    preco: 15, 
    imagem: "lipgloss.jpeg", 
    descricao: "Dá brilho e efeito molhado aos lábios.",
    disponibilidade: "esgotado"
  },
  { 
    nome: "Cílios", 
    precoAntigo: 12, 
    preco: 10, 
    imagem: "cilios.jpeg", 
    descricao: "Alongam e dão volume aos olhos,\n destacando o olhar." 
  },
  { 
    nome: "Sérum Rosa Mosqueta", 
    precoAntigo: 20, 
    preco: 15,
    imagem: "serumrosa.jpg", 
    descricao: "Hidrata e auxilia na regeneração\n da pele." 
  },
  { 
    nome: "Spray Fixador de Maquiagens", 
    precoAntigo: 18, 
    preco: 15, 
    imagem: "spray.jpg", 
    descricao: "O Fix Make UP foi criado para aumentar a\n durabilidade da maquiagem de forma leve e bem prática,\n ele possui secagem rápida fazendo com que\n a pele não fique úmida." 
  },
  { 
    nome: "Mousse Micelar", 
    precoAntigo: 24, 
    preco: 16,  
    imagem: "mousse.jpeg", 
    descricao: "Vegano não ressega a pele,\n HIDRATAÇÃO EQUILIBRADA,\n CONTROLA A OLEOSIDADE,\n ESTIMULA A RENOVAÇÃO CELULAR,\n DERMATOLOGICAMENTE TESTADO.",
    disponibilidade: "esgotado" 
  },
  { 
    nome: "Black Mask com Colageno", 
    precoAntigo: 20, 
    preco: 14, 
    imagem: "blackmask.jpeg", 
    descricao: "Remove cravos e espinhas\n controle de oleosidade\n melhora a aparência da pele.", 
    disponibilidade: "esgotado"
  },
  { 
    nome: "Esfoliante Corporal", 
    precoAntigo: 20, 
    preco: 15,      
    imagem: "esfoliantecorporal.jpeg", 
    descricao: "Esfoliação eficiente e muito agradável\n sem agredir a pele, removendo células mortas,\n eliminando acúmulo de sujeiras e produtos depositados nos poros,\n revelando a uniformidade do tom da pele,\n toque ultra macio, textura lisa e sedosa.", 
    disponibilidade: "esgotado"
  },  
  { 
    nome: "Torre de Pigmento Neon", 
    precoAntigo: 14, 
    preco: 10, 
    imagem: "torre.jpeg", 
    descricao: "Conjunto de sombras vibrantes e bem pigmentadas,\n ideal para maquiagens artísticas e looks de\n Carnaval, trazendo cores intensas e chamativas." 
  },
  { 
    nome: "Batom Magic", 
    precoAntigo: 5, 
    preco: 4, 
    imagem: "vermelhomagic.jpeg", 
    descricao: "Batom de longa duração com cores vibrantes.",
    variantes: [
      { cor: "Vermelho", imagem: "vermelhomagic.jpeg" },
      { cor: "Roxo", imagem: "roxomagic.jpeg" }
    ]
  },
  { 
    nome: "Pó Facial Translúcido", 
    precoAntigo: 14, 
    preco: 10, 
    imagem: "potranslucido.jpeg", 
    descricao: "O pó facial translúcido serve para fixar\n a maquiagem, matificar a pele e controlar a\n oleosidade. Ele é incolor e tem uma textura leve e ultrafina.",
    disponibilidade: "esgotado"
  },
];

// Número inicial de produtos a serem exibidos
let produtosExibidos = 11;

function carregarProdutos(termoBusca = "", mostrarTodos = false) {
  const listaProdutos = document.getElementById("lista-produtos");
  const botaoVerMais = document.getElementById("btn-ver-mais");

  if (!listaProdutos) {
    console.error("Elemento lista-produtos não encontrado.");
    return;
  }

  listaProdutos.innerHTML = "";

  const produtosFiltrados = termoBusca
    ? produtos.filter(produto => produto.nome.toLowerCase().includes(termoBusca.toLowerCase()))
    : produtos;

  // Define quantos produtos exibir
  const limite = mostrarTodos ? produtosFiltrados.length : produtosExibidos;

  produtosFiltrados.slice(0, limite).forEach(produto => {
    let variantesHTML = "";
    if (produto.variantes && produto.variantes.length > 0) {
      variantesHTML = `
        <div class="w-full flex items-center justify-center mb-2 space-x-4">
          <p class="text-gray-700">Opções:</p>
          <div class="flex overflow-x-auto space-x-2" style="scroll-behavior: smooth; max-width: 150px;">
            ${produto.variantes.map(variante => `
              <div onclick="atualizarVariante(this, '${produto.nome}', '${variante.imagem}')" class="flex-shrink-0 w-16 h-16 border rounded cursor-pointer">
                <img src="${variante.imagem}" alt="${variante.cor}" class="w-full h-full object-contain">
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Se o produto estiver esgotado, cria um overlay com "Esgotado"
    let esgotadoHTML = "";
    if (produto.disponibilidade && produto.disponibilidade.toLowerCase() === "esgotado") {
      esgotadoHTML = `
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <span class="text-white text-2xl font-bold">Esgotado</span>
        </div>
      `;
    }

    // Se o produto possui precoAntigo, exibe-o com linha cortada e o preço atual em destaque;
    // caso contrário, exibe apenas o preço atual.
    let precoHTML = "";
    if (produto.precoAntigo) {
      precoHTML = `
        <div class="flex flex-col items-center mt-1">
          <span class="text-gray-500 text-sm line-through">R$ ${produto.precoAntigo.toFixed(2)}</span>
          <span class="text-lg font-bold text-black-600">R$ ${produto.preco.toFixed(2)}</span>
        </div>
      `;
    } else {
      precoHTML = `<p class="text-lg font-bold mt-1 text-center">R$ ${produto.preco.toFixed(2)}</p>`;
    }

    const produtoHTML = `
      <div class="relative bg-[#ccac8e] p-4 rounded-lg shadow hover:scale-105 transition-transform">
        <!-- Container da imagem com overlay se esgotado -->
        <div class="relative">
          <img id="img-${produto.nome.replace(/\s+/g, '')}" src="${produto.imagem}" alt="${produto.nome}" class="w-full h-64 object-contain rounded">
          ${esgotadoHTML}
        </div>
        <h2 class="text-lg font-bold mt-1 text-center">${produto.nome}</h2>
        ${precoHTML}
        
        <!-- Botão de Descrição: sempre exibido -->
        <div class="w-full flex justify-center mb-2">
          <button onclick="abrirDescricao(this)" data-descricao="${produto.descricao}"
            class="bg-[#5d4427] px-3 py-2 rounded text-white flex items-center gap-2">
            DESCRIÇÃO:
          </button>
        </div>
        
        <!-- Se o produto possuir variantes, exibe o slider -->
        ${variantesHTML}
        
        <!-- Botões de Comprar e Adicionar ao Carrinho -->
        <div class="flex justify-center mt-3 space-x-2">
          <button class="bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-800"
            onclick="comprarProduto('${produto.nome}', ${produto.preco})">
            COMPRAR
          </button>
          <button class="bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-800 flex items-center gap-2"
            onclick="adicionarAoCarrinho('${produto.nome}', ${produto.preco})">
            <img src="carrinho.png" alt="Carrinho" class="w-6 h-6">+
          </button>
        </div>
      </div>
    `;
    listaProdutos.innerHTML += produtoHTML;
  });

  // Se já mostrou todos os produtos, oculta o botão "Ver mais"
  if (botaoVerMais) {
    if (limite >= produtosFiltrados.length) {
      botaoVerMais.classList.add("hidden");
    } else {
      botaoVerMais.classList.remove("hidden");
    }
  }
}

function mostrarMaisProdutos() {
  // Incrementa o número de produtos exibidos em 11 a cada clique
  produtosExibidos += 11;
  carregarProdutos();
}

window.onload = function () {
  carregarProdutos();
};

document.getElementById("search-input").addEventListener("input", function () {
  carregarProdutos(this.value);
});

function abrirDescricao(botao) {
  const descricao = botao.getAttribute("data-descricao");
  document.getElementById("conteudo-descricao").innerText = descricao;
  document.getElementById("modal-descricao").classList.remove("hidden");
}

function fecharDescricao() {
  document.getElementById("modal-descricao").classList.add("hidden");
}

function atualizarVariante(elemento, nomeProduto, novaImagem) {
  const idImagem = "img-" + nomeProduto.replace(/\s+/g, '');
  const imgElemento = document.getElementById(idImagem);
  if (imgElemento) {
    imgElemento.src = novaImagem;
  }
}

function scrollVariants(botao, direcao) {
  const container = botao.parentElement.querySelector("div.flex.overflow-x-auto");
  if (container) {
    const scrollAmount = 100;
    if (direcao === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}