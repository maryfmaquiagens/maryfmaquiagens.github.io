let carrinho = [];

// Função para adicionar produto com quantidade
function adicionarAoCarrinho(nomeProduto, precoProduto, quantidade = 1) {
  const produto = produtos.find(p => p.nome === nomeProduto);
  if (!produto) {
    console.error("Produto não encontrado no array de produtos.");
    return;
  }
  
  // Verifica se o produto já está no carrinho
  const index = carrinho.findIndex(item => item.nome === produto.nome);
  if (index !== -1) {
    // Se já existir, atualiza a quantidade
    carrinho[index].quantidade += quantidade;
  } else {
    // Se não existir, adiciona o produto com a quantidade
    carrinho.push({ 
      nome: produto.nome, 
      preco: produto.preco, 
      imagem: produto.imagem,
      quantidade: quantidade
    });
  }
  atualizarCarrinho();

  let aviso = document.getElementById("aviso-carrinho");
  if (!aviso) {
    console.error("Elemento 'aviso-carrinho' não encontrado.");
    return;
  }
  aviso.textContent = `"${nomeProduto}" foi adicionado ao carrinho!`;
  aviso.classList.remove("hidden");
  aviso.style.display = "block"; // Força exibição para teste

  setTimeout(() => {
    aviso.style.display = "none";
  }, 3000);
}

function atualizarCarrinho() {
  // Atualiza o total de itens com base na soma das quantidades
  const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
  document.getElementById("total-items").textContent = totalItens;
}

// Função para remover um produto (remove completamente o item do carrinho)
function removerDoCarrinho(nomeProduto) {
  const index = carrinho.findIndex(produto => produto.nome === nomeProduto);
  if (index !== -1) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
    abrirCarrinho(); // Atualiza o modal do carrinho após remoção
  } else {
    console.error("Produto não encontrado no carrinho.");
  }
}

function atualizarQuantidade(nomeProduto, novaQuantidade) {
  const index = carrinho.findIndex(produto => produto.nome === nomeProduto);
  if (index !== -1) {
    // Se a nova quantidade for menor que 1, remove o produto
    if (novaQuantidade < 1) {
      removerDoCarrinho(nomeProduto);
    } else {
      carrinho[index].quantidade = novaQuantidade;
      atualizarCarrinho();
      abrirCarrinho(); // Atualiza a visualização do modal
    }
  } else {
    console.error("Produto não encontrado no carrinho.");
  }
}

function abrirCarrinho() {
  const modal = document.getElementById("modal-carrinho");
  const listaItens = document.getElementById("itens-carrinho");
  listaItens.innerHTML = ""; // Limpa a lista de itens do carrinho

  let total = 0;

  carrinho.forEach(produto => {
    const item = document.createElement("li");
    item.classList.add("relative", "flex", "items-center", "border-b", "py-2", "pr-10");

    // Botão de remoção
    const btnRemove = document.createElement("button");
    btnRemove.textContent = "×";
    btnRemove.classList.add("absolute", "top-0", "right-0", "text-red-500", "font-bold", "p-1");
    btnRemove.style.background = "none";
    btnRemove.style.border = "none";
    btnRemove.style.cursor = "pointer";
    btnRemove.style.fontSize = "1.5rem";
    btnRemove.onclick = function() {
      removerDoCarrinho(produto.nome);
    };

    // Imagem do produto
    const imagem = document.createElement("img");
    imagem.src = produto.imagem;
    imagem.alt = produto.nome;
    imagem.classList.add("w-12", "h-12", "rounded", "mr-2");

    // Container dos detalhes
    const detalhes = document.createElement("div");
    detalhes.classList.add("flex", "flex-col", "items-center", "w-full");
    
    // Nome do produto
    const nomeEl = document.createElement("p");
    nomeEl.classList.add("text-sm", "text-center");
    nomeEl.textContent = produto.nome;
    
    // Campo de quantidade com input
    const inputQuantidade = document.createElement("input");
    inputQuantidade.type = "number";
    inputQuantidade.min = "1";
    inputQuantidade.value = produto.quantidade;
    inputQuantidade.classList.add("w-16", "text-center", "border", "rounded", "mt-1");
    inputQuantidade.onchange = function() {
      const novaQuantidade = parseInt(this.value);
      atualizarQuantidade(produto.nome, novaQuantidade);
    };

    // Preço do produto (calculado pelo preço unitário x quantidade)
    const precoEl = document.createElement("p");
    precoEl.classList.add("text-gray-600", "text-sm", "text-center", "mt-1");
    const subtotalProduto = produto.preco * produto.quantidade;
    precoEl.textContent = `R$ ${subtotalProduto.toFixed(2)}`;

    // Monta o container de detalhes
    detalhes.appendChild(nomeEl);
    detalhes.appendChild(inputQuantidade);
    detalhes.appendChild(precoEl);

    // Adiciona os elementos ao item
    item.appendChild(btnRemove);
    item.appendChild(imagem);
    item.appendChild(detalhes);
    listaItens.appendChild(item);

    total += subtotalProduto;
  });

  // Exibe o total do carrinho
  const totalElemento = document.createElement("p");
  totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
  totalElemento.classList.add("font-bold", "mt-2", "text-center");
  listaItens.appendChild(totalElemento);

  // Exibe o modal do carrinho
  modal.classList.remove("hidden");
}

function fecharCarrinho() {
  document.getElementById("modal-carrinho").classList.add("hidden");
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  
  let mensagem = "Olá, gostaria de finalizar a compra dos seguintes produtos:\n\n";
  let total = 0;
  
  carrinho.forEach(produto => {
    mensagem += `- ${produto.nome} (${produto.quantidade}x) - R$ ${(produto.preco * produto.quantidade).toFixed(2)}\n`;
    total += produto.preco * produto.quantidade;
  });
  
  mensagem += `\nTotal: R$ ${total.toFixed(2)}\n\n`;
  mensagem += "Quais são as formas de pagamento disponíveis?";
  
  const url = `https://wa.me/5584996667324?text=${encodeURIComponent(mensagem)}`;
  window.location.href = url;
}

function comprarProduto(nome, preco) {
  const mensagem = `Olá, gostaria de comprar o produto ${nome} por R$ ${preco.toFixed(2)}.`;
  const url = `https://wa.me/5584996667324?text=${encodeURIComponent(mensagem)}`;
  window.location.href = url;
}

