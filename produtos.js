const produtos = [
    { 
      nome: "Lenço Umedecido", 
      preco: 8, 
      imagem: "lenço.jpeg", 
      descricao: "Lenço umedecido para limpeza facial, com ingredientes suaves e ideais para pele sensível." 
    },
    { 
      nome: "Esponja para Base", 
      preco: 4, 
      imagem: "produto1.jpeg", 
      descricao: "Esponja macia para aplicação de base líquida, garantindo um acabamento natural." 
    },
    { 
      nome: "Rímel", 
      preco: 10, 
      imagem: "produto2.jpeg", 
      descricao: "Máscara de cílios extra volume que realça seus olhos com volume e definição." 
    },
    { 
      nome: "Água Micelar", 
      preco: 12, 
      imagem: "aguamicelar.jpeg", 
      descricao: "Água micelar suave que remove impurezas e maquiagem sem agredir a pele." 
    },
    { 
      nome: "Batom", 
      preco: 15, 
      imagem: "batom.jpeg", 
      descricao: "Batom de longa duração com cores vibrantes." 
    },
    { 
      nome: "Sabonete Facil", 
      preco: 15, 
      imagem: "sabonete.jpeg", 
      descricao: "Sabonete para limpeza facial, enriquecido com vitamina C." 
    },
    { 
      nome: "Sérum", 
      preco: 15, 
      imagem: "serumesfoliante.jpeg", 
      descricao: "Sérum antioxidante que ajuda a iluminar e proteger a pele dos radicais livres." 
    },
    { 
      nome: "Gloss", 
      preco: 14,  
      imagem: "gloss_vermelho.jpeg",
      descricao: "Gloss brilhante que proporciona um toque sedoso e um efeito iluminado aos lábios." ,
      variantes: [
        { cor: "Vermelho", imagem: "gloss_vermelho.jpeg" },
        { cor: "Rosa", imagem: "gloss_rosa.jpeg" },
        { cor: "Nude", imagem: "gloss_nude.jpeg" }
      ]
    },
    { 
      nome: "Máscara Facial", 
      preco: 2, 
      imagem: "mascarafacil.jpeg", 
      descricao: "Máscara facial para suavizar e revitalizar a pele, ideal para uma rotina de beleza." 
    },
    { 
      nome: "Iluminador", 
      preco: 16, 
      imagem: "iluminador.jpeg", 
      descricao: "Destaca pontos do rosto com brilho e efeito glow." 
    },
    { 
      nome: "Lápis de Olho", 
      preco: 7, 
      imagem: "lapis.jpeg", 
      descricao: "Lápis de olho de alta definição para realçar e contornar os olhos com precisão." 
    },
    { 
      nome: "Delineador", 
      preco: 10, 
      imagem: "delineador.jpeg", 
      descricao: "Delineador prático e preciso para um look marcante e bem definido." 
    },
    { 
      nome: "Escova de Silicone", 
      preco: 12, 
      imagem: "escovasilicone.jpeg", 
      descricao: "Massageia o couro cabeludo, ajudando na limpeza e estimulação capilar." 
    },
    { 
      nome: "Esponja para Pó", 
      preco: 4, 
      imagem: "esponjapo.jpeg", 
      descricao: "Aplica pó compacto ou solto para um acabamento uniforme." 
    },
    { 
      nome: "Apontador", 
      preco: 10, 
      imagem: "apontador.jpeg", 
      descricao: "Mantém lápis de olho e boca afiados para maior precisão." 
    },
    { 
      nome: "Blindagem", 
      preco: 14, 
      imagem: "blindagem.jpeg", 
      descricao: "Protege e fixa a maquiagem, aumentando sua durabilidade." 
    },
    { 
      nome: "Paleta de Sombra", 
      preco: 20, 
      imagem: "paletasombra.png", 
      descricao: "Define e colore as pálpebras, realçando o olhar." 
    },
    { 
      nome: "Primer Facil", 
      preco: 16, 
      imagem: "primerfacial.jpeg", 
      descricao: "Prepara a pele, suavizando poros e melhorando a fixação da maquiagem." 
    },
    { 
      nome: "Sérum Clareador", 
      preco: 14, 
      imagem: "serumclareador.jpeg", 
      descricao: "Uniformiza o tom da pele e ajuda a reduzir manchas." 
    },
    { 
      nome: "Lip Gloss", 
      preco: 15, 
      imagem: "lipgloss.jpeg", 
      descricao: "Dá brilho e efeito molhado aos lábios." 
    },
    { 
      nome: "Cílios", 
      preco: 10, 
      imagem: "cilios.jpeg", 
      descricao: "Alongam e dão volume aos olhos, destacando o olhar." 
    },
    { 
      nome: "Sérum Rosa Mosqueta", 
      preco: 15, 
      imagem: "serumrosa.jpeg", 
      descricao: "Hidrata e auxilia na regeneração da pele." 
    },
    { 
      nome: "Torre de Pigmento Neon", 
      preco: 12, 
      imagem: "torre.jpeg", 
      descricao: "Conjunto de sombras vibrantes e bem pigmentadas, ideal para maquiagens artísticas e looks de Carnaval, trazendo cores intensas e chamativas." 
    }
  ];
  
  // Variável para controlar quantos produtos são exibidos inicialmente
  let produtosExibidos = 8;
  
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
        
        const produtoHTML = `
    <div class="bg-[#ccac8e] p-4 rounded-lg shadow hover:scale-105 transition-transform">
      <!-- Imagem principal com tamanho padronizado -->
      <img id="img-${produto.nome.replace(/\s+/g, '')}" src="${produto.imagem}" alt="${produto.nome}" class="w-full h-64 object-contain rounded">
      <h2 class="text-lg font-bold mt-2">${produto.nome}</h2>
      <p class="text-gray-600">R$ ${produto.preco.toFixed(2)}</p>
      
      <!-- Botão de Descrição: sempre exibido -->
      <div class="w-full flex justify-center mb-2">
        <button onclick="abrirDescricao(this)" data-descricao="${produto.descricao}"
          class="bg-gray-500 px-3 py-2 rounded text-white flex items-center gap-2">
          Descrição ->
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
  
  // Função para exibir todos os produtos
  function mostrarMaisProdutos() {
      carregarProdutos("", true);
  }
  
  // Chama os produtos ao carregar a página
  window.onload = function () {
      carregarProdutos();
  };

  function abrirDescricao(botao) {
    const descricao = botao.getAttribute("data-descricao");
    document.getElementById("conteudo-descricao").innerText = descricao;
    document.getElementById("modal-descricao").classList.remove("hidden");
  }
  
  function fecharDescricao() {
    document.getElementById("modal-descricao").classList.add("hidden");
  }  

function atualizarVariante(elemento, nomeProduto, novaImagem) {
  // Cria um ID único para a imagem principal com base no nome do produto
  const idImagem = "img-" + nomeProduto.replace(/\s+/g, '');
  const imgElemento = document.getElementById(idImagem);
  if (imgElemento) {
    imgElemento.src = novaImagem;
  }
}

function scrollVariants(botao, direcao) {
  // Localiza o container de variantes: ele é o <div class="flex overflow-x-auto ...">, irmão dos botões.
  const container = botao.parentElement.querySelector("div.flex.overflow-x-auto");
  if (container) {
    const scrollAmount = 100; // Valor em pixels para rolar; ajuste conforme necessário.
    if (direcao === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}
  
  document.getElementById("search-input").addEventListener("input", function () {
      carregarProdutos(this.value);
  });
