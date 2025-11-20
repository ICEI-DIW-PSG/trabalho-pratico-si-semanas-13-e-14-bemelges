const albuns = [
  {
    id: 1,
    titulo: "S.C.A.",
    descricao: "S.C.A. é o álbum de estreia do rapper, lançado em 2018, que significa Sexo, Cocaína e Assassinatos. O disco se destaca pela produção que mescla elementos de hip-hop 'old school' com uma lírica afiada, abordando temas como a realidade das periferias, a luta por ascensão social e a crítica ao sistema. A capa do álbum é uma releitura de 'INRI', um clássico da banda de metal Sarcófago, e o trabalho foi visto como uma demarcação de território do artista na cena musica ",
    imagem: "images/sca.jpg",
    ano: 2018,
    estilo: "Rap underground",
    destaque: "Clássico mineiro",
    faixas: ["Frank & Tikão",
      "Não Duvide",
      "Rap Acústico",
      "17 Anos",
      "Superstar",
      "Ela é Green",
      "Itinerário de I.O",
      "Contradições",
      "Sexo, Cocaína e Assassinatos",
      "Poder, Pt. 2"]
  },
  {
    id: 2,
    titulo: "Padrim",
    descricao: "Reflexões pessoais e sociais em um trabalho maduro. 'Padrim' é um álbum conceitual lançado em 2019, conhecido por suas letras que exploram a realidade urbana, sentimentos, e a identidade cultural brasileira, muitas vezes usando histórias para abordar racismo, o cotidiano da periferia e os impactos sociais do consumo e da desigualdade, com uma produção musical que mistura trap com outros gêneros. ",
    imagem: "images/padrim.jpg",
    ano: 2019,
    estilo: "Trap",
    destaque: "Trabalho maduro",
    faixas: ["Deus Abençoa",
      "Money Manin",
      "Assim Que Se Sente",
      "Capa 3 (feat. Lallo)",
      "IPhone (feat. Matheus Queiroz)",
      "Confio (feat. Ebony)",
      "THC (feat. Attlanta e Luccas Carlos)",
      "$Enhor (feat. L7NNON e BK)",
      "Se Eu Não Te Cantar",
      "Ode À Tristeza (feat. Gee Rocha)"]
  },
  {
    id: 3,
    titulo: "BEST DUO",
    descricao: "'Best Duo' é um álbum colaborativo de rap lançado em 2020 pelo rapper mineiro FBC e pela artista Iza Sabino, com produção do SMU. O projeto une FBC e Iza Sabino em uma 'festa a dois', com 10 faixas que incluem participações de peso como Djonga, X Sem Peita e Paige. O álbum aborda temas como o amor entre mulheres negras, orgulho, e também reflete sobre o dinheiro, o consumo e as contradições nas periferias. ",
    imagem: "images/bestduo.jpg",
    ano: 2020,
    estilo: "Experimental",
    destaque: "Colaborações e inovação",
    faixas: ["Intro Duo",
      "FBC & Coyote",
      "Pra Você",
      "Batida Suave"]
  },
  {
    id: 4,
    titulo: "Outro rolê",
    descricao: "'Outro Rolê' é um EP de 2021 do rapper FBC, com 6 faixas produzidas por VHOOR, que mantém o conceito de narrar histórias da comunidade mineira e apresenta uma sonoridade com referências ao Drill, além de ter clipes gravados na Europa, especialmente na Suíça. O EP explora o conceito do projeto 'União da Força e da Fé' (UFFÉ) e marca a transição do artista para uma fase mais autêntica e focada em sua arte, sem o objetivo inicial de vender ou ser famoso. Ademais, resgata os tempos de DV Tribo.",
    imagem: "images/outrorole.jpg",
    ano: 2021,
    estilo: "Drill e percussão",
    destaque: "Resgate das raízes",
    faixas: ["Rolê 1",
      "DV Tribo",
      "Atabaque Urbano",
      "Noite de BH"]
  },
  {
    id: 5,
    titulo: "Baile",
    descricao: "O álbum 'Baile', de FBC e VHOOR, é uma 'ópera funk' que reconta a história de um triângulo amoroso envolvendo os personagens Pagode, Jéssica e Paulinho. Inspirado no Miami Bass e no 'passinho' de Belo Horizonte, o álbum busca modernizar o estilo dos anos 90, contando uma narrativa densa de conflitos, danças e tragédias em uma comunidade. A obra mistura a cultura de festas e o estilo periférico com uma história que reflete sobre a vida urbana e as lutas por dignidade. ",
    imagem: "images/baile.jpg",
    ano: 2021,
    estilo: "Miami Bass / Funk 90",
    destaque: "Sucesso nacional",
    faixas: ["Vem Pro Baile",
      "Quando o DJ Toca (feat. UANA)",
      "Rap da UFFÉ",
      "Melô do Vacilão (feat. Djair Voz Cristalina e FERB)",
      "Se Tá Solteira (feat. VHOOR e MAC Júlia)",
      "Eu Sou o Crime",
      "Delírios (feat. VHOOR)",
      "Não Dá Pra Explicar",
      "Polícia Covarde",
      "De Kenner (feat. VHOOR)"]
  },
  {
    id: 6,
    titulo: "O Amor, o Perdão e a Tecnologia",
    descricao: "'O Amor, o Perdão e a Tecnologia Irão nos Levar para Outro Planeta' é o quinto álbum de estúdio do rapper FBC, lançado em 2023, que combina temas de relações humanas e futurismo com inspirações na dance music. O disco, produzido por Pedro Senna e Ugo Ludovico, explora a relação entre amor, perdão e as tecnologias, usando-as como ferramentas para a humanidade buscar novas experiências e um 'outro planeta', seja ele físico ou metafórico. ",
    imagem: "images/amor-tec.jpg",
    ano: 2023,
    estilo: "House / Funk sintético",
    destaque: "Viagem sonora retrô",
    faixas: ["Madrugada Maldita",
      "Estante de Livros (feat. Don L)",
      "Químico Amor",
      "O Que Te Faz Ir Pra Outro Planeta?",
      "Limite Comum (feat. Pepito)",
      "Dilema das Redes (feat. niLL)",
      "Antissocial (feat. Abbot)",
      "Não Me Ligue Nunca Mais (feat. Abbot)",
      "Cherry (feat. Abbot)",
      "A Noite no Meu Quarto (feat. Abbot)",
      "Atmosfera",
      "Aham",
      "Qual a Chance?",
      "O Nosso Grande Papel",
      "Desculpa"]
  },
  {
    id: 7,
    titulo: "Feito à Mão",
    descricao: "'Feito à Mão' é um projeto do rapper FBC que marca o seu retorno ao rap clássico, explorando temas como a desigualdade social e o consumo desenfreado, utilizando batidas feitas à mão através de equipamentos analógicos, como MPCs. O álbum, que conta com a produção de Coyote Beatz, foi lançado em 2024 e apresenta uma sonoridade orgânica e artesanal, com a intenção de ser um manifesto ideológico e um convite à reflexão sobre o sistema.",
    imagem: "images/feitoamao.jpg",
    ano: 2024,
    estilo: "Rap instrumental",
    destaque: "Produção refinada",
    faixas: ["O Retorno É a Única Lei (feat. Dougnow)",
      "Não Deixa Secar (feat. Pepito)",
      "Rap Bom",
      "Vontade",
      "Feito À Mão"]
  },
  {
    id: 8,
    titulo: "Assaltos e Batidas",
    descricao: "'Assaltos e Batidas' é um álbum de rap do artista FBC que se destaca pelo som clássico do boombap, celebrando as urgências do presente nas periferias de Belo Horizonte, onde o artista vive. O projeto, que inclui um curta-metragem, aborda as contradições sociais e o capitalismo, com referências que vão de Marighella ao hino da Internacional Comunista, e é visto como um manifesto político e um grito de denúncia e reflexão sobre a realidade brasileira.",
    imagem: "images/assaltos.jpg",
    ano: 2025,
    estilo: "Boombap clássico",
    destaque: "Crítica e nostalgia",
    faixas: ["Cabana Terminal",
      "Quem Sabe Onde Está Jimmy Hoffa?",
      "Qual o Som da Sua Arma?",
      "A Voz da Revolução",
      "Você Pra Mim É Lucro",
      "Roubo a Banco",
      "Juventude Atitude",
      "Assaltos e Batidas",
      "Estamos Te Vendo",
      "Me Diga Quem Ganha",
      "A Cosmologia Corporativista do Senhor Arthur Jansen"]
  }
];
document.querySelector('#modalCadastro form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('emailCadastro').value.trim();
  const senha = document.getElementById('senhaCadastro').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;

  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem!');
    return;
  }

  const novoUsuario = {
    id: crypto.randomUUID(),
    login: email.split('@')[0],
    senha,
    nome,
    email
  };

  try {
    const resposta = await fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novoUsuario)
    });

    if (resposta.ok) {
      alert('Usuário cadastrado com sucesso!');
      document.querySelector('#modalCadastro form').reset();
      const modal = bootstrap.Modal.getInstance(document.getElementById('modalCadastro'));
      modal.hide();
    } else {
      alert('Erro ao cadastrar usuário.');
    }
  } catch (erro) {
    console.error('Erro na requisição:', erro);
    alert('Erro na conexão com o servidor.');
  }
});
document.querySelector('.login-box form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.querySelector('.login-box input[type="email"]').value.trim();
  const senha = document.querySelector('.login-box input[type="password"]').value;

  try {
    const resposta = await fetch(`http://localhost:3000/usuarios?email=${email}&senha=${senha}`);
    const usuarios = await resposta.json();

    if (usuarios.length > 0) {
      const usuario = usuarios[0];
      localStorage.setItem('usuarioLogado', JSON.stringify(usuario));

      document.querySelector('.login-box').style.display = 'none';
      document.querySelector('.usuario-logado').style.display = 'flex';
      document.getElementById('nomeUsuario').textContent = `Olá, ${usuario.nome}`;
    } else {
      alert('Email ou senha inválidos.');
    }
  } catch (erro) {
    console.error('Erro na requisição:', erro);
    alert('Erro na conexão com o servidor.');
  }
});
document.getElementById('btnLogout').addEventListener('click', () => {
  localStorage.removeItem('usuarioLogado');
  document.querySelector('.usuario-logado').style.display = 'none';
  document.querySelector('.login-box').style.display = 'flex';
});
window.addEventListener('DOMContentLoaded', () => {
  const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
  if (usuario) {
    document.querySelector('.login-box').style.display = 'none';
    document.querySelector('.usuario-logado').style.display = 'flex';
    document.getElementById('nomeUsuario').textContent = `Olá, ${usuario.nome}`;
  }
});




