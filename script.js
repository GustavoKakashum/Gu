let produtos = JSON.parse(localStorage.getItem('produtos')) || [
  {
    nome: "Smartphone XYZ",
    link: "https://shopee.com.br/produto-xyz",
    imagem: "https://cf.shopee.com.br/file/12345abcde",
    preco: "R$ 1.299,99",
    categoria: "Celulares & Acessórios"
  },
  {
    nome: "Air Fryer Turbo 3.5L",
    link: "https://shopee.com.br/airfryer-turbo",
    imagem: "https://cf.shopee.com.br/file/abcde12345",
    preco: "R$ 399,90",
    categoria: "Eletrodomésticos"
  },
  {
    nome: "Peça para Carro ABC",
    link: "https://shopee.com.br/peca-carro-abc",
    imagem: "https://cf.shopee.com.br/file/peca12345",
    preco: "R$ 150,00",
    categoria: "Peças de carro"
  },
  {
    nome: "Fone Bluetooth X10",
    link: "https://shopee.com.br/fone-bluetooth-x10",
    imagem: "https://cf.shopee.com.br/file/fone12345",
    preco: "R$ 89,90",
    categoria: "Celulares & Acessórios"
  },
  {
    nome: "Jogo Console Z",
    link: "https://shopee.com.br/jogo-console-z",
    imagem: "https://cf.shopee.com.br/file/jogo12345",
    preco: "R$ 199,00",
    categoria: "Videogames & Jogos"
  },
  {
    nome: "Mixer Portátil",
    link: "https://shopee.com.br/mixer-portatil",
    imagem: "https://cf.shopee.com.br/file/mixer12345",
    preco: "R$ 120,00",
    categoria: "Utensílios de cozinha"
  },
  {
    nome: "Lixo eletrônico reciclado",
    link: "https://shopee.com.br/lixo-eletronico",
    imagem: "https://cf.shopee.com.br/file/lixo12345",
    preco: "R$ 50,00",
    categoria: "Lixo eletrônico"
  },
  {
    nome: "Batedeira Industrial",
    link: "https://shopee.com.br/batedeira-industrial",
    imagem: "https://cf.shopee.com.br/file/batedeira123",
    preco: "R$ 450,00",
    categoria: "Eletrodomésticos"
  },
  {
    nome: "Peça para Carro XYZ",
    link: "https://shopee.com.br/peca-carro-xyz",
    imagem: "https://cf.shopee.com.br/file/peca67890",
    preco: "R$ 300,00",
    categoria: "Peças de carro"
  },
  {
    nome: "Controle para Console Y",
    link: "https://shopee.com.br/controle-console-y",
    imagem: "https://cf.shopee.com.br/file/controle123",
    preco: "R$ 180,00",
    categoria: "Videogames & Jogos"
  }
];

function renderProdutos(categoria = "Todos") {
  const container = document.getElementById("produtos");
  if (!container) return;
  container.innerHTML = "";
  produtos
    .filter((p) => categoria === "Todos" || p.categoria === categoria)
    .forEach((p) => {
      container.innerHTML += `
            <div class="produto">
                <img src="${p.imagem}" alt="${p.nome}" />
                <h3>${p.nome}</h3>
                <p><strong>${p.categoria}</strong></p>
                <p class="preco">${p.preco}</p>
                <a href="${p.link}" target="_blank">Comprar Agora</a>
            </div>
        `;
    });
}
renderProdutos();

function filtrarCategoria(cat) {
  const container = document.getElementById("produtos");
  container.classList.add("fade-out");
  setTimeout(() => {
    renderProdutos(cat);
    container.classList.remove("fade-out");
  }, 400);
}

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "Kaka" && pass === "Kakashi1") {
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("admin-panel").classList.remove("hidden");
    renderListaAdmin();
  } else {
    document.getElementById("login-error").textContent = "Usuário ou senha incorretos!";
  }
}

function renderListaAdmin() {
  const lista = document.getElementById("lista-produtos");
  lista.innerHTML = "";
  produtos.forEach((p, i) => {
    lista.innerHTML += `
            <li>${p.nome} - ${p.preco} (${p.categoria}) 
            <button onclick="removerProduto(${i})">Remover</button></li>`;
  });
}

document.getElementById("produto-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("produto-nome").value;
  const link = document.getElementById("produto-link").value;
  const imagem = document.getElementById("produto-imagem").value;
  const preco = document.getElementById("produto-preco").value;
  const categoria = document.getElementById("produto-categoria").value;
  produtos.push({ nome, link, imagem, preco, categoria });
  localStorage.setItem("produtos", JSON.stringify(produtos));
  renderProdutos();
  renderListaAdmin();
  this.reset();
});

function removerProduto(index) {
  produtos.splice(index, 1);
  localStorage.setItem("produtos", JSON.stringify(produtos));
  renderProdutos();
  renderListaAdmin();
}
