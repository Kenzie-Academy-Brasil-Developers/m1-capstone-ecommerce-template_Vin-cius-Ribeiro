// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "./img/Violão_Acústico_Anatômico.webp",
    nome: "Violão Acústico Anatômico J. White Folk Phx Black Satin",
    descricao:
      "A linha de violões anatômicos J. White é uma série que possui um corpo que se adapta perfeitamente ao braço do músico. A borda superior direita do tampo é levemente inclinada facilitando o apoio do braço direito no instrumento, dando maior conforto durante o uso.",
    preco: 1290,
    tag: ["Cordas", " Madeira", " Elétrico"],
  },
  {
    id: 2,
    img: "./img/lavame2.webp",
    nome: "Violão de Fibra de Carbono LAVA ME 2",
    descricao:
      "A LAVA acredita que o futuro do violão pode ser melhor do que o passado. Que ele pode ser mais leve e mais simples. Um futuro onde você não precisa se preocupar com as condições do clima, apenas em aproveitar a sonoridade incrivelmente superior do seu instrumento.Esse futuro já chegou ao Brasil.",
    preco: 4031,
    tag: ["Cordas", " Elétrico"],
  },
  {
    id: 3,
    img: "./img/Violão_TransAcoustic_Yamaha_CG-TA.webp",
    nome: "Violão TransAcoustic Yamaha CG-TA Nylon Natural",
    descricao:
      "Com mais de um século na fabricação de instrumentos musicais, a Yamaha é uma marca que fala por si mesma. Sendo uma referência mundial na indústria musical, o seu selo de qualidade nos violões é um diferencial garantido para suas canções. Som amplificado Sendo eletroacústico, é possível obter um melhor som e aumentado ao conectá-lo a um sistema de alto-falantes. Um modelo para cada guitarrista A tampa de abeto gera um tom brilhante e claro, mesmo nos registros mais agudos. Qualidade se destaca As cordas de nylon são caracterizadas por serem flexíveis e resistentes. Garantem a durabilidade e além disso têm um grande poder de absorção da carga de choque.",
    preco: 5010,
    tag: ["Cordas", " Madeira", " Elétrico"],
  },
  {
    id: 4,
    img: "./img/piano_de_cauda_gx-6.webp",
    nome: "piano de cauda kawai gx-6",
    descricao:
      "O KAWAI GX-6 é um piano de cauda de 88 teclas, 3 pedais, 214 cm de profundidade, tábua harmônica de Spruce maciço com área de 1,60 m2, tampa do teclado com amortecedor hidráulico, tampa superior com três posições de abertura, mecanismo Millennium III em ABS-Carbono, teclado em Spruce maciço com coberturas em NEOTEX™('marfim' e 'ébano' sintéticos), martelos com cabeças de mogno e feltro duplo de pura lã resistente à umidade, Dual Duplex Scale, acabamento Alto Brilho em Preto. Acompanha banqueta banqueta regulável. Garantia de 5 anos. ",
    preco: 316316,
    tag: ["Cordas", " Madeira"],
  },
  {
    id: 5,
    img: "./img/Piano_De_Cauda_Branco_Cenográfico.webp",
    nome: "Piano De Cauda Branco Cenográfico 1/2 P/ Pianos Digitais",
    descricao:
      "Os pianos cenográficos CAZIUK esta em alta entre os artistas, por ser leve, fácil de transportar, não desafina, produto durável, surpreende com a sua presença, dando um glamour onde se encontra, um item de decoração de luxo, seu brilho atraia a atenção de todos, é bem requisitado em festas de casamento, e outros eventos.",
    preco: 19100,
    tag: ["Cordas", " Madeira"],
  },
  {
    id: 6,
    img: "./img/casio_px-870_privia.webp",
    nome: "casio px-870 privia piano digital branco",
    descricao:
      "As teclas que imitam ébano e marfim propiciam a elegante sensação e textura do suave toque do teclado de um piano de cauda. O acabamento talhado e minuciosamente detalhado da superfície impede que o dedo escorregue em decorrência de suor, proporcionando a sensação de uma perfeita adequação para as pontas dos dedos, mesmo ao tocar por períodos prolongados.",
    preco: 6190,
    tag: ["Cordas", " Madeira", " Elétrico"],
  },
  {
    id: 7,
    img: "./img/Flauta_Transversal_Eagle.webp",
    nome: "Flauta Transversal Eagle Fl03s Fl03 Em Dó Com Case Prateada",
    descricao:
      "O FL 03S é uma flauta em Dó com mecanismo de Mi, com acabamento prateado que lhe confere um visual elegante e maior resistência às condições de uso do músico. Ela se destaca pela qualidade de sua construção e pelos materiais que a compõe. Ajustadas manualmente, as chaves ergonômicas oferecem maior conforto, respostas rápidas e afinação precisa.",
    preco: 1297,
    tag: ["Sopro", " Metais"],
  },
  {
    id: 8,
    img: "./img/Flauta_Transversal_Baixo.webp",
    nome: "Flauta Transversal Baixo em C - (DÓ) Prateada Ascent ASBF900S",
    descricao: "Flauta Transversal Baixo em C - ( DÓ ) Prateada Ascent ASBF900S, Banhada em prata. Estojo",
    preco: 9200,
    tag: ["Sopro", " Metais"],
  },
  {
    id: 9,
    img: "./img/Sax_Barítono.webp",
    nome: "Sax Barítono Yamaha YBS62E",
    descricao: "Os saxes Yamaha série 62 tornaram-se um clássico moderno e são usados pelos principais músicos profissionais do mundo inteiro. Seu som forte e claro e tocabilidade excelente estabeleceram novos padrões nos saxofones de modelo profissional.",
    preco: 77274,
    tag: ["Sopro", " Metais"],
  },
  {
    id: 10,
    img: "./img/Saxofone_super_action.jpeg",
    nome: "Saxofone super action 80 series ii",
    descricao: "Saxofone super action 80 series ii, saxofone preto dourado de alta performance, modelo 802, e, sax plano, com capa, bocal profissional",
    preco: 1432,
    tag: ["Sopro", " Metais"],
  },
  {
    id: 11,
    img: "./img/Clarinete_Yamaha.webp",
    nome: "Clarinete Yamaha Profissional Nova, Ycl 650",
    descricao: "Clarinete Yamaha YCL- 650 - Baquelite preto fosco que imita o amadeirado (madeira sintetica) - Clarineta Yamaha 17 Chaves Modelo YCL-650 Afinação em Bb (Si bemol). Instrumento muito bom, excelente afinação e sonoridade.",
    preco: 2300,
    tag: ["Sopro", " Madeira"],
  },
  {
    id: 12,
    img: "./img/Clarinete_Baixo.webp",
    nome: "Clarone / Clarinete Baixo da Série Profissional Bb Yamaha YCL622II",
    descricao: "Clarinete baixo da série Profissional B com chave Si bemol, extensão até o Dó grave, corpo de madeira de Grenadilha, 24 chaves, 7 orifícios cobertos, chaves e campana folheadas a prata, presilha da sapatilha folheada a prata e proteção para boquilha.",
    preco: 71636,
    tag: ["Sopro", " Madeira"],
  },
  {
    id: 13,
    img: "./img/Fagote_Moosmann.webp",
    nome: "Fagote 'Moosmann', mod. 150 Orchestra, un.",
    descricao: "- Fagote bem equipado. Feito de Madeira de bordo encaracolada temperada da Bósnia, - Confeccionado em mogno, madeira que confere ao som um timbre encorpado e perfeitamente equilibrado - 26 chaves alemã, com acabamento prateado - Todos os orifícios possuem tubos de borracha dura - O instrumento também inclui dois modelos de bocais A1W e A2W e um estojo resistente, feito internamente em veludo, ideal para protegê-lo de impactos.",
    preco: 65000,
    tag: ["Sopro", " Madeira"],
  },
  {
    id: 14,
    img: "./img/Oboé_Lorée.webp",
    nome: "Oboé 'Lorée', mod. Royal 125, un.",
    descricao: "-Parafuso de ajuste para regular a altura da tecla C média - D alta facilitador - Madeira de granadilha seca de 10 anos - Anéis banhados a ouro",
    preco: 99500,
    tag: ["Sopro", " Madeira"],
  },
  {
    id: 15,
    img: "./img/Instrumentos_Percussão.webp",
    nome: "Kit Pandeiro Profissional Phx+ 4 Instrumentos Percussão",
    descricao: "* 1 Triângulo PHX. Utilizado na percussão popular e erudita. Produzido em aço cromado, acompanha batedor com cabo revestido mais corda pra usá-lo suspenso. Mede 25 cm de comprimento. *1 Meia Lua (Pandeirola) Cor: precoTotal. Feito em policarbonato - um plástico de alto impacto - e equipado com 16 pares de platinelas em inox. Caracteriza-se por um som bastante agudo e estridente. Este modelo possui manopla de plastico rígido. * 1 Ovinho Ganzá Cores Diversas sem Opção de Escolha! * 1 Tamborim + Baqueta (escolher a cor)",
    preco: 223,
    tag: ["Percussão"],
  },
  {
    id: 16,
    img: "./img/malimba_xilofone.jpg",
    nome: "32 tom malimba xilofone",
    descricao: "32 tom malimba xilofone percussão instrumento orff música auxiliares de ensino mogno",
    preco: 3918,
    tag: ["Percussão"],
  },
  {
    id: 17,
    img: "./img/Bateria_Acustica.webp",
    nome: "Bateria Acustica Sonora Kit P/ Conjunto Musical Completa",
    descricao: "A linha de Baterias Acústicas Tonante Sonora, foi pensada para ser uma solução completa para você começar sua jornada e se tornar um grande baterista! Domine os fundamentos, ensaie suas músicas favoritas e explore ideias criativas em uma bateria projetada para trazer a você o pacote certo de qualidade a um preço acessível. Uma base sólida desde o início com ótimo custo benefício.",
    preco: 2627,
    tag: ["Percussão"],
  },
  {
    id: 18,
    img: "./img/Bateria_Eletrônica.webp",
    nome: "Bateria Eletrônica Roland Td-1dmk, Com Fonte Bivolt Td1dmk",
    descricao: "A Roland V-Drums é a bateria eletrônica mais popular do mundo, graças ao seu som poderoso, a excelente sensibilidade e durabilidade lendária. E se você acha que há um grande baterista dentro de você, a nova V-Drums TD-1DMK irá ajudar a despertar isso. A TD-1DMK oferece uma experiência incrível em um kit compacto que é fácil para transportar. O módulo simples, mas potente, inclui uma variedade de kits expressivos de bateria, conectado aos pads de malha dupla na caixa e tons. Essas pads usam duas camadas de malha para um rebote realista (onde a baqueta retorna depois de bater no tambor), assim como em um kit acústico. Apesar de duráveis, eles também são silenciosos e ótimos para praticar a noite. Você pode tocar com fones de ouvido, para não incomodar a família ou os vizinhos e com as funções internas de treino e a capacidade de conexão com o software Melodics, que serve para você estudar bateria - ficará surpreso com a rapidez com que você vai melhorar. Pegue as baquetas, respire fundo e aproveite todo o potencial do TD-1DMK.",
    preco: 9199,
    tag: ["Percussão", " Elétrico"],
  },
  {
    id: 19,
    img: "./img/Pacote_com_12_palhetas.jpg",
    nome: "Pacote com 12 palhetas Jim Dunlop para guitarra elétricas (PVP113)",
    descricao: "Uma seleção de palhetas que complementam perfeitamente o tom e a jogabilidade dos instrumentos elétricos - Apresenta uma variedade de materiais, formas e medidores para se ajustar ao seu som e estilo de reprodução - Pacote com 12 - Feito nos EUA",
    preco: 34,
    tag: ["Acessorios"]
  },
  {
    id: 20,
    img: "./img/CAPOTRASTE_PARA_VIOLÃO.jpg",
    nome: "CAPOTRASTE PARA VIOLÃO EM ALUMÍNIO TONANTE PRATA - CPT10",
    descricao: "O Capotraste Tonante é o melhor Custo x Benefício do Mercado. Resistente, leve e com belo design em alumínio é fácil de manusear. O Capotraste cumpre a mesma função da pestana, apertando todas as cordas do violão ou algumas cordas em uma determinada casa. Utilizando um Capotraste você poderá alterar o tom da música, ou seja, sem modificar os modelos de acordes utilizados.",
    preco: 30,
    tag: ["Acessorios"]
  },
  {
    id: 21,
    img: "./img/Acessórios_violao.jpg",
    nome: "Acessórios violão Capotraste Palhetas e Porta Palheta Kit",
    descricao: "Capotraste Smart JX28. Palhetas Spring. Porta Palheta adesivado",
    preco: 49,
    tag: ["Acessorios"]
  },
  {
    id: 22,
    img: "./img/PORTA_PALHETA.jpg",
    nome: "PORTA PALHETA 5005 SI DUNLOP",
    descricao: "Porta palheta Preta - Marca: DUNLOP - Produto de origem: BR - Garantia: 90 dias - contra defeito de fabricação",
    preco: 31,
    tag: ["Acessorios"]
  },
  {
    id: 23,
    img: "./img/Caixa_10_Palheta_Sax.webp",
    nome: "Caixa 10 Palheta Sax Alto 1 1/2 1,5 Estilo Plasticolver",
    descricao: "Caixa com 10 palhetas 1,5 - Ótimo custo x benefíco - Ideal para estudantes - Mesmo corte da palheta Vandorem Java",
    preco: 97,
    tag: ["Acessorios"]
  },
  {
    id: 24,
    img: "./img/VANDOREN_PALHETA_CLARINETA.jpg",
    nome: "VANDOREN PALHETA CLARINETA Nº 3 - 2203 (UN)",
    descricao: "- Modelo: Palheta Vandoren Tradicional 3 para Clarinete Requinta - Material: Cana-da-Índia - Série: Tradicional - Aplicação: Clarinete Requinta Mib ( Eb ) - Conteúdo da embalagem: 1 palheta Vandoren - Fabricado na França",
    preco: 35,
    tag: ["Acessorios"]
  },
];
