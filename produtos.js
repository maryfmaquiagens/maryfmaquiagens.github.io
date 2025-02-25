const produtos = [
    { 
      nome: "Lenço Umedecido", 
      preco: 8, 
      imagem: "lenço.jpeg", 
      descricao: "Lenço umedecido para limpeza facial, com ingredientes suaves e ideais para pele sensível." 
    },
    { 
      nome: "Esponja Para Base", 
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
      nome: "Sabonete", 
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
      preco: 12, 
      imagem: "gloss.jpeg", 
      descricao: "Gloss brilhante que proporciona um toque sedoso e um efeito iluminado aos lábios." 
    },
    { 
      nome: "Mascara Facial", 
      preco: 2, 
      imagem: "mascarafacil.jpeg", 
      descricao: "Máscara facial para suavizar e revitalizar a pele, ideal para uma rotina de beleza." 
    },
    { 
      nome: "Iluminador", 
      preco: 15, 
      imagem: "iluminador.jpeg", 
      descricao: "Pó compacto de alta cobertura para finalizar a maquiagem com um acabamento impecável." 
    },
    { 
      nome: "Lápis de Olho", 
      preco: 12, 
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
      preco: 4, 
      imagem: "escovasilicone.jpeg", 
      descricao: "Delineador prático e preciso para um look marcante e bem definido." 
    },
    { 
      nome: "Esponja para Pó", 
      preco: 12, 
      imagem: "esponjapo.jpeg", 
      descricao: "Delineador prático e preciso para um look marcante e bem definido." 
    },
    { 
      nome: "Apontador", 
      preco: 10, 
      imagem: "apontador.jpeg", 
      descricao: "Delineador prático e preciso para um look marcante e bem definido." 
    },
    { 
      nome: "Blindagem", 
      preco: 14, 
      imagem: "blindagem.jpeg", 
      descricao: "Delineador prático e preciso para um look marcante e bem definido." 
    },
    { 
      nome: "Paleta de Sombra", 
      preco: 20, 
      imagem: "paletasombra.png", 
      descricao: "Delineador prático e preciso para um look marcante e bem definido." 
    },
    { 
      nome: "Primer Facil", 
      preco: 16, 
      imagem: "primerfacial.jpeg", 
      descricao: "Delineador prático e preciso para um look marcante e bem definido." 
    },
    { 
      nome: "Serum Clareador", 
      preco: 14, 
      imagem: "serumclareador.jpeg", 
      descricao: "Delineador prático e preciso para um look marcante e bem definido." 
    },
    { 
      nome: "Lip Gloss", 
      preco: 15, 
      imagem: "lipgloss.jpeg", 
      descricao: "Delineador prático e preciso para um look marcante e bem definido." 
    },
    { 
      nome: "Cilios", 
      preco: 10, 
      imagem: "cilios.jpeg", 
      descricao: "Delineador prático e preciso para um look marcante e bem definido." 
    },
    { 
      nome: "Serum Rosa Mosqueta", 
      preco: 15, 
      imagem: "serumrosa.jpeg", 
      descricao: "Delineador prático e preciso para um look marcante e bem definido." 
    },
    { 
      nome: "torre de pigmento neon", 
      preco: 12, 
      imagem: "torre.jpeg", 
      descricao: "Delineador prático e preciso para um look marcante e bem definido." 
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
          const produtoHTML = `
              <div class="bg-[#ccac8e] p-4 rounded-lg shadow hover:scale-105 transition-transform">
                  <img src="${produto.imagem}" alt="${produto.nome}" class="w-full h-64 object-contain rounded">
                  <h2 class="text-lg font-bold mt-2">${produto.nome}</h2>
                  <p class="text-gray-600">R$ ${produto.preco.toFixed(2)}</p>
                  
                  <!-- Botão de Descrição -->
                  <div class="w-full flex justify-center mb-2">
                      <button onclick="abrirDescricao(this)" data-descricao="${produto.descricao}"
                          class="bg-green-600 px-3 py-2 rounded text-white flex items-center gap-2">
                          Descrição ->
                      </button>
                  </div>
                  
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
  
  document.getElementById("search-input").addEventListener("input", function () {
      carregarProdutos(this.value);
  });
  