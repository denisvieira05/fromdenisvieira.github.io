---
title: "Hello World - Jekyll Blog"
layout: post
date: 2017-01-30 22:44
tag:
- Jekyll
blog: true
star: true
---

E vamo lá naquele velho e bom Hello World, rs

Bem, então vou começar falando um pouco de mim, desde que comecei a navegar pela web sempre gostei bastante de ler blogs, comentar, e até tentei criar um lá no blogspot para compartilhar algumas coisas sobre música, uma paixão da época e de sempre e que inclusive ainda ta lá [http://fromdenisvieira.blogspot.com.br/](http://fromdenisvieira.blogspot.com.br/), rs, mas infelizmente não tive como prolongar muito. Então, sempre apaixonado por novos conhecimentos e aventuras, na web sempre tentei muitas coisas, desde sites, rádios até servidores de jogos online, seguindo sempre aquele princípio DIY (faça você mesmo!), dai depois de uma breve passagem e choque de realidade no curso de Bacharelado em Física na Universidade Federal de Alagoas, consegui ingressar meus estudos no curso de Bacharelado em Sistemas de Informação lá no Instituto Federal de Alagoas e comecei a engrenar nessa área de tecnologia e posteriormente procurei e procurei me especializar cada vez mais na área de desenvolvimento web, a qual foi minha porta de entrada no mundo do desenvolvimento de projetos reais .

Desde que comecei, acompanhar varios blogs, adquirir novos conhecimentos com outras pessoas que gostam de compartilhar conhecimento sempre foi um grande prazer para mim, com isso evolui bastante, conheci muita gente que manja muito dos paranauê e que mantém essa iniciativa e objetivo de compartilhar conhecimento e aprender sempre mais com isso forte, por esse motivo decidi criar esse blog/portfólio tanto ajudar outras pessoas compartilhando alguns conhecimentos que venho adquirindo, tanto para "pegar o bigu" e divulgar alguns projetos que venho desenvolvendo para quem sabe possamos trabalhar juntos, ou eu possa desenvolver algum projeto para você .

Então, sem mais delongas, vamos á maravilha do <b><a href="https://jekyllrb.com/" target="_blank">Jekyll</a></b>  \õ\Õ\õ ''

Para auxiliar em todo esse processo de conceituação e iniciação, irei sempre pedir a ajuda e citar varias referências que já escreveram algo sobre o contéudo, para não me estender muito, divulgar e dar os devidos créditos à toda informação compartilhada da melhor maneira.

Então, o <a href="https://jekyllrb.com/" target="_blank">Jekyll</a> é um gerador de sites estáticos escrito em Ruby, nesse <b><a href="http://www.felipefialho.com/blog/2013/geradores-estaticos-breve-explicacao/#.VxpJdFYrLQo" target="_blank">post</a></b> do Felipe Fialho ele explica bem claramente o que é isso e toda sua facilidade em produzir sites e blogs estáticos. O <a href="http://tableless.com.br/jekyll-servindo-sites-estaticos/" target="_blank">Tableless</a> também defini bem e aponta bem claramente o problema que o Jekyll resolve, além de mostrar bem sua estrutura.

" O Jekyll é um gerador de códigos estáticos. A ideia é que você crie páginas e até mesmo um blog de forma estática, usando HTML que você já conhece, junto com alguns truques que irão ajudá-lo a converter seu site em arquivos estáticos, pronto para ser publicado. Ele é baseado em vários formatos como Markdown para formatação de textos e posts e um padrão de template chamado Liquid com um pouco de YAML para exibir e guardar os dados das variáveis.  "

Então, comumente gosto de organizar muito as coisas que vem aparecendo na vida, até porque tem muita coisa, rs, mas bem, e no desenvolvimento não poderia ser diferente e o mais legal é que cada organização impacta na sua produtividade, no desempenho e na sua satisfação em trabalhar, otimizar o seu trabalho é sempre uma tarefa incansável e altamente necessária dentre tanta coisa que vem surgindo para ajudar, então, nunca gostei de ficar repetindo código, sempre achei muito desnecessário e me dava o ódio ter que mudar em varios arquivos a mesma coisa, dai então há um bom tempo procurei e descobri o <a href="https://jekyllrb.com/" target="_blank">Jekyll</a> e o que me fez gostar, foi sua simplicidade e maneira de programar que se assemelha bastante as boas práticas no desenvolvimento de sistemas, explorei outros geradores, gostei muito do <a href="https://hexo.io/" target="_blank">https://hexo.io/</a> que é em javascript <3 e também é bastante popular, além de ter uma arquitetura bem legal, utilizando a ideia de tema, possibilitando troca de temas rápida e fácil utilizando os mesmos dados, bem semelhante ao wordpress. No site <a href="https://www.staticgen.com/" target="_blank">https://www.staticgen.com/</a> você pode encontrar uma lista com vários geradores de sites estáticos nas mais diversas linguagens .

Você pode rodar o Jekyll em qualquer servidor que dê suporte a HTML, CSS e arquivos de Imagem, ou seja, basicamente qualquer lugar! \õ ''

# #SUPER DICA - Rodando com Docker
Então você ai dizendo, " nem programo em ruby, vou ter que instalar um monte de coisa, meu pc vai ficar mais lento", bem, existe uma solução pra você rodar seu projeto mais rapidão ainda e sem nenhum problema de setup. Então, pra quem não conhece o [Docker](https://www.docker.com/){:target="_blank"} é basicamente uma plataforma que facilita a criação e administração de ambientes isolados. Então, no Docker, temos o Docker Compose o qual foi criado para a administração de um conjunto de containers a partir do uso de um simples arquivo de configuração em formato YAML . Com isto eu encontrei um repositório o qual tem os arquivos de configuração para gerar seu jekyll container e você rodar sua aplicação facinho .

1. Com o ambiente docker e docker-compose configurado ( no fim do post tem alguns links para te ajudar nisso)

2. Primeiramente faça o clone ou download do repo lá do github :
 - https://github.com/peteretelej/jekyll-container

3. Abra o arquivo docker-compose.yml

4. Em "volumes" mude o path antes dos dois pontos :app para o caminho da pasta do seu futuro projeto jekyll<br>
```
volumes:
    /path/to/your/jekyllsite:/app
```
5. Entre na pasta do reposítorio do Jekyll container pelo terminal e digite :
```
docker-compose up
```

6. Logo em seguida ele irá baixar a imagem e suas dependencias e assim que completar você já pode acessar seu projeto no browser em <http://localhost:4000>{:target="_blank"} .

Bem não me estendi muito sobre o Docker até porque meus estudos nele ainda são bem breves e não é o tema do post, mas futuramente pretendo postar mais alguma coisa, além de qualquer dúvida e sugestão sempre é bem vinda .


# Bônus
Logo abaixo vou deixar alguns links de alguns blogs de devs, Jekyll para vocês aprenderem mais sobre geradores estáticos além de um pouco de markdown que é mais que útil pra quem qualquer dev :


## Dev Blogs
- <http://andreczip.github.io/blog/>{:target="_blank"}

## Jekyll
  - <http://willianjusten.com.br/perguntas-e-respostas-jekyll/>{:target="_blank"}
  - <http://jekyllbootstrap.com/>{:target="_blank"}
  - <http://edpittol.github.io/criando-seu-site-com-jekyll-na-velocidade-da-luz/>{:target="_blank"}
  - <http://jekyll.tips/>{:target="_blank"}

##Docker
  - <http://techfree.com.br/2015/10/entendendo-o-docker-parte-1/>{:target="_blank"}

## Markdown
  - <http://daringfireball.net/projects/markdown/>{:target="_blank"}
  - <http://www.fileformat.info/info/unicode/char/2163/index.htm>{:target="_blank"}
  - <http://www.markitdown.net/>{:target="_blank"}
  - <http://daringfireball.net/projects/markdown/basics>{:target="_blank"}
  - <http://kune.fr/wp-content/uploads/2013/10/ghost-blog.jpg>{:target="_blank"}
