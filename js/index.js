
let ul = document.querySelector(".lista_vitrine");

let todos = document.querySelector(".todos");

let violao = document.querySelector(".violao");

let piano = document.querySelector(".piano");

let button_ = document.querySelectorAll(".adicionar_carrinho");

let total = document.querySelector(".total");

let carrinhoVazio = document.querySelector(".carrinho_vazio");

let removerItem = document.querySelector(".remover");

let totalItens = document.querySelector(".quantidadeNumber");

let totalItens_ = 0;

let ul_ = document.querySelector(".lista_carrinho");

let preco = document.querySelector(".totalNumber");

let precoTotal = 0;

let pesquisa = document.querySelector(".digite");

let buttonPesquisa = document.querySelector(".pesquisar");

let formatador = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"});

for (let i = 0; i < data.length; i++) {
  let li = document.createElement("li");
  li.classList = "itens";
  li.setAttribute("id", `${i + 1}`);

  let img = document.createElement("img");
  img.src = data[i].img;

  let span = document.createElement("span");
  span.classList = "class";
  span.innerHTML = data[i].tag;

  let h3 = document.createElement("h3");
  h3.innerHTML = data[i].nome;

  let p = document.createElement("p");
  //p.innerHTML = "Descrição aqui";
  p.innerHTML = data[i].descricao;

  let span_preco = document.createElement("span");
  span_preco.innerHTML = formatador.format(data[i].preco);

  let button = document.createElement("button");
  button.innerHTML = "Adicionar ao carrinho";
  button.classList = "adicionar_carrinho";

  li.append(img, span, h3, p, span_preco, button);

  ul.append(li);

  button.addEventListener("click", (e) => {
    let bool = true;

    let array = document.querySelectorAll(".itens_carrinho");

    for (let j = 0; j < array.length; j++) {
      if (array[j].id == li.id) {
        bool = false;
      }
    }
    if (bool == true) {
      addCarrinho(data[i]);
    }
  });
}

todos.addEventListener("click", (e) => {
  ul.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    li.classList = "itens";
    li.setAttribute("id", `${i + 1}`);

    let img = document.createElement("img");
    img.src = data[i].img;

    let span = document.createElement("span");
    span.classList = "class";
    span.innerHTML = data[i].tag;

    let h3 = document.createElement("h3");
    h3.innerHTML = data[i].nome;

    let p = document.createElement("p");
    //p.innerHTML = "Descrição aqui";
    p.innerHTML = data[i].descricao;

    let span_preco = document.createElement("span");
    
    span_preco.innerHTML = formatador.format(data[i].preco);

    let button = document.createElement("button");
    button.innerHTML = "Adicionar ao carrinho";
    button.classList = "adicionar_carrinho";

    li.append(img, span, h3, p, span_preco, button);

    ul.append(li);

    button.addEventListener("click", (e) => {
      let bool = true;

      let array = document.querySelectorAll(".itens_carrinho");

      for (let j = 0; j < array.length; j++) {
        if (array[j].id == li.id) {
          bool = false;
        }
      }
      if (bool == true) {
        addCarrinho(data[i]);
      }
    });
  }
});

violao.addEventListener("click", (e) => {
  ul.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].tag == "Violão") {
      let li = document.createElement("li");
      li.classList = "itens";
      li.setAttribute("id", `${i + 1}`);

      let img = document.createElement("img");
      img.src = data[i].img;

      let span = document.createElement("span");
      span.classList = "class";
      span.innerHTML = data[i].tag;

      let h3 = document.createElement("h3");
      h3.innerHTML = data[i].nome;

      let p = document.createElement("p");
      //p.innerHTML = "Descrição aqui";
      p.innerHTML = data[i].descricao;

      let span_preco = document.createElement("span");
      span_preco.innerHTML = formatador.format(data[i].preco);;

      let button = document.createElement("button");
      button.innerHTML = "Adicionar ao carrinho";
      button.classList = "adicionar_carrinho";

      li.append(img, span, h3, p, span_preco, button);

      ul.append(li);
      button.addEventListener("click", (e) => {
        let bool = true;

        let array = document.querySelectorAll(".itens_carrinho");

        for (let j = 0; j < array.length; j++) {
          if (array[j].id == li.id) {
            bool = false;
          }
        }
        if (bool == true) {
          addCarrinho(data[i]);
        }
      });
    }
  }
});

piano.addEventListener("click", (e) => {
  ul.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].tag == "Piano") {
      let li = document.createElement("li");
      li.classList = "itens";
      li.setAttribute("id", `${i + 1}`);

      let img = document.createElement("img");
      img.src = data[i].img;

      let span = document.createElement("span");
      span.classList = "class";
      span.innerHTML = data[i].tag;

      let h3 = document.createElement("h3");
      h3.innerHTML = data[i].nome;

      let p = document.createElement("p");
      //p.innerHTML = "Descrição aqui";
      p.innerHTML = data[i].descricao;

      let span_preco = document.createElement("span");
      span_preco.innerHTML = formatador.format(data[i].preco);;

      let button = document.createElement("button");
      button.innerHTML = "Adicionar ao carrinho";
      button.classList = "adicionar_carrinho";

      li.append(img, span, h3, p, span_preco, button);

      ul.append(li);

      button.addEventListener("click", (e) => {
        let bool = true;

        let array = document.querySelectorAll(".itens_carrinho");

        for (let j = 0; j < array.length; j++) {
          if (array[j].id == li.id) {
            bool = false;
          }
        }
        if (bool == true) {
          addCarrinho(data[i]);
        }
      });
    }
  }
});

function removerCarrinho(target) {
  target.remove();
  totalItens_--;
  totalItens.innerText = totalItens_;
  if (totalItens_ == 0) {
    total.style.display = "none";
    carrinhoVazio.style.display = "flex";
  }
}

function addCarrinho(produto) {
  total.style.display = "flex";

  let li_carrinho = document.createElement("li");
  li_carrinho.classList = "itens_carrinho";
  li_carrinho.setAttribute("id", `${produto.id}`);

  let img_carrinho = document.createElement("img");
  img_carrinho.src = produto.img;

  let div = document.createElement("div");

  let h3_carrinho = document.createElement("h3");
  h3_carrinho.innerHTML = produto.nome;

  let span_carrinho = document.createElement("span");
  span_carrinho.innerHTML = `R$ ${produto.preco}`;

  let button_carrinho = document.createElement("button");
  button_carrinho.classList = "remover";
  button_carrinho.innerHTML = "Remover produto";

  div.append(h3_carrinho, span_carrinho, button_carrinho);

  li_carrinho.append(img_carrinho, div);

  ul_.append(li_carrinho);

  carrinhoVazio.style.display = "none";

  totalItens_++;

  totalItens.innerText = totalItens_;

  precoTotal += produto.preco;

  let precoFormatado = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(precoTotal)

  preco.innerText = precoFormatado;

  button_carrinho.addEventListener("click", (e) => {
    removerCarrinho(li_carrinho);
    precoTotal -= produto.preco;
    preco.innerText = `R$ ${precoTotal}`;
  });
}

buttonPesquisa.addEventListener("click", (e) => {
  let filtroDePesquisa = pesquisa.value.toLowerCase();
  ul.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const nome = data[i].nome.toLowerCase();
    if (nome.includes(filtroDePesquisa)) {
      let li = document.createElement("li");
      li.classList = "itens";

      let img = document.createElement("img");
      img.src = data[i].img;

      let span = document.createElement("span");
      span.classList = "class";
      span.innerHTML = data[i].tag;

      let h3 = document.createElement("h3");
      h3.innerHTML = data[i].nome;

      let p = document.createElement("p");
      p.innerHTML = "Descrição aqui";
      p.innerHTML = data[i].descricao;

      let span_preco = document.createElement("span");
      span_preco.innerHTML = formatador.format(data[i].preco);;

      let button = document.createElement("button");
      button.innerHTML = "Adicionar ao carrinho";
      button.classList = "adicionar_carrinho";

      li.append(img, span, h3, p, span_preco, button);

      ul.append(li);

      button.addEventListener("click", (e) => {
        addCarrinho(data[i]);
      });
    }
  }
});

// intl.NumberFormat()
