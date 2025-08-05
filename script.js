// Produtos iniciais
let produtos = JSON.parse(localStorage.getItem('produtos')) || [
    { nome: "Produto 1", link: "https://s.shopee.com.br/9AECadeRfK" },
        { nome: "Produto 2", link: "https://s.shopee.com.br/9pTtNwnua8" },
            { nome: "Produto 3", link: "https://s.shopee.com.br/2VhIeSfo3Z" },
                { nome: "Produto 4", link: "https://s.shopee.com.br/AA6jmXrRjN" },
                    { nome: "Produto 5", link: "https://s.shopee.com.br/5Ai3pLO5Hy" },
                        { nome: "Produto 6", link: "https://s.shopee.com.br/802FCXmtpJ" }
                        ];

                        // Renderizar produtos na página principal
                        function renderProdutos() {
                            const container = document.getElementById('produtos');
                                if (!container) return;
                                    container.innerHTML = '';
                                        produtos.forEach(p => {
                                                container.innerHTML += `
                                                            <div class="produto">
                                                                            <h3>${p.nome}</h3>
                                                                                            <a href="${p.link}" target="_blank">Comprar Agora</a>
                                                                                                        </div>
                                                                                                                `;
                                                                                                                    });
                                                                                                                    }
                                                                                                                    renderProdutos();

                                                                                                                    // Login do admin
                                                                                                                    function login() {
                                                                                                                        const user = document.getElementById('username').value;
                                                                                                                            const pass = document.getElementById('password').value;
                                                                                                                                if (user === "Kaka" && pass === "Kakashi1") {
                                                                                                                                        document.getElementById('login-container').classList.add('hidden');
                                                                                                                                                document.getElementById('admin-panel').classList.remove('hidden');
                                                                                                                                                        renderListaAdmin();
                                                                                                                                                            } else {
                                                                                                                                                                    document.getElementById('login-error').textContent = "Usuário ou senha incorretos!";
                                                                                                                                                                        }
                                                                                                                                                                        }

                                                                                                                                                                        // Lista de produtos no admin
                                                                                                                                                                        function renderListaAdmin() {
                                                                                                                                                                            const lista = document.getElementById('lista-produtos');
                                                                                                                                                                                lista.innerHTML = '';
                                                                                                                                                                                    produtos.forEach((p, i) => {
                                                                                                                                                                                            lista.innerHTML += `
                                                                                                                                                                                                        <li>
                                                                                                                                                                                                                        ${p.nome} 
                                                                                                                                                                                                                                        <button onclick="removerProduto(${i})">Remover</button>
                                                                                                                                                                                                                                                    </li>
                                                                                                                                                                                                                                                            `;
                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                // Adicionar produto
                                                                                                                                                                                                                                                                document.getElementById('produto-form')?.addEventListener('submit', function(e) {
                                                                                                                                                                                                                                                                    e.preventDefault();
                                                                                                                                                                                                                                                                        const nome = document.getElementById('produto-nome').value;
                                                                                                                                                                                                                                                                            const link = document.getElementById('produto-link').value;
                                                                                                                                                                                                                                                                                produtos.push({ nome, link });
                                                                                                                                                                                                                                                                                    localStorage.setItem('produtos', JSON.stringify(produtos));
                                                                                                                                                                                                                                                                                        renderProdutos();
                                                                                                                                                                                                                                                                                            renderListaAdmin();
                                                                                                                                                                                                                                                                                                this.reset();
                                                                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                                                                // Remover produto
                                                                                                                                                                                                                                                                                                function removerProduto(index) {
                                                                                                                                                                                                                                                                                                    produtos.splice(index, 1);
                                                                                                                                                                                                                                                                                                        localStorage.setItem('produtos', JSON.stringify(produtos));
                                                                                                                                                                                                                                                                                                            renderProdutos();
                                                                                                                                                                                                                                                                                                                renderListaAdmin();
                                                                                                                                                                                                                                                                                                                }