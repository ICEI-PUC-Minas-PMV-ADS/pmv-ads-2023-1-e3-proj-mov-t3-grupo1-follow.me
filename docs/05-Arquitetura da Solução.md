# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

## Diagrama de Componentes

Ilustração de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![diagrama de componentes](https://user-images.githubusercontent.com/103156976/229321584-428d0218-38b4-4c80-a5c5-a754230769dc.jpg)

## Diagrama de Classes

Diagrama de classes é uma representação estática utilizada na área da programação para descrever a estrutura de um sistema, apresentando suas classes, atributos, operações e as relações entre os objetos.

Este tipo de representação é bastante útil no desenvolvimento de sistemas e de softwares de computação, pois define todas as classes que o sistema precisa ter e serve de base para a construção de outros diagramas que definem o tipo de comunicação, sequência e estados dos sistemas.

O diagrama de classes é a parte central da Linguagem de Modelagem Unificada (UML – Unfied Modelling Language). Ele representa as principais finalidades da UML, tendo a função de separar os elementos de design da codificação do sistema.

![MicrosoftTeams-image](https://user-images.githubusercontent.com/103466408/229362723-bbb7153d-f9bd-4f08-9490-dea92719518c.png)

## Modelo ER

O Diagrama Entidade-Relacionamento (ER) é uma ferramenta de modelagem de dados que descreve as entidades - coisas, objetos - em um sistema e como elas se relacionam entre si. É amplamente utilizado em projetos de banco de dados, pois permite visualizar de forma clara e concisa a estrutura do sistema.

O diagrama ER é composto por entidades, atributos e relacionamentos. As entidades representam os objetos do mundo real que são relevantes para o sistema, como usuários, produtos ou atividades. Os atributos são as características dessas entidades, como nome, id ou data de criação. Os relacionamentos indicam como as entidades se conectam entre si, por exemplo, um usuário pode fazer rastrear varias atividades e uma atividade pode ser rastreada por apenas um usuário. 

Em um modelo ER as entidades são representadas por retângulos, os atributos por elipses e os relacionamentos por losangos. As conexões entre as entidades são indicadas por linhas, que podem ser simples ou duplas, dependendo da natureza do relacionamento.

![Arquitetura da Solução](img/DIAGRAMA_ER.png)

## Esquema Relacional

O esquema Entidade-Relacionamento (ER) é uma representação gráfica que descreve a estrutura de um banco de dados e seus relacionamentos, sendo utilizado para ilustrar a forma como as entidades (como tabelas) se relacionam entre si, incluindo os atributos e chaves primárias de cada entidade. 

O esquema apresentado possui quatro tabelas, sendo que três delas (Atividade, Dia e DiaAtividade) estão relacionadas entre si. A tabela Atividade armazena informações sobre atividades, como o título e a data de criação. A tabela Dia é usada para representar dias específicos, contendo a data e uma lista de DiaAtividades relacionadas a esse dia. Já a tabela DiaAtividade é usada para relacionar atividades específicas com dias específicos, ou seja, ela é responsável por armazenar as informações sobre em quais dias específicos da semana aquela atividade deve ser rastreada.

Além disso, há a tabela DiaSemanaAtividade, que armazena informações sobre atividades que ocorrem em dias da semana específicos. Essa tabela tem um relacionamento com a tabela Atividade, indicando a atividade que ocorre em um determinado dia da semana.

Todos esses relacionamentos são definidos por meio de chaves estrangeiras, que são usadas para conectar as tabelas. No geral, o esquema ER apresenta uma estrutura bem definida, permitindo que sejam facilmente identificadas as relações entre as diferentes tabelas e como os dados estão organizados no banco de dados.

![Arquitetura da Solução](img/ERD.svg)


## Modelo Físico

A seguir apresenta-se um link para o arquivo banco.sql, contendo os scripts de criação das tabelas do banco de dados. Este arquivo está localizado na pasta src\bd e pode ser usado para criar a estrutura inicial do banco de dados. 

[BANCO.sql](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo1-follow.me/blob/295d4b06e0aa4e9a564b285d20b792ae8a69849c/prisma/banco.sql)

### Scripts SQL de DML

O Scripts SQL foram desenvolovidos pela ferramenta PRISMA Studio,  o script pode ser visualizado neste repositório pelo caminho: pmv-ads-2023-1-e3-proj-mov-t3-grupo1-follow.me/prisma/schema.prisma

## Padrões de Projeto de Codificação

Design Patterns ou padrões de projetos são soluções generalistas para problemas recorrentes durante o desenvolvimento de um software. Não se trata de um framework ou um código pronto, mas de uma definição de alto nível de como um problema comum pode ser solucionado.

O benefício de usar Design Patterns é pelo fato de serem são modelos que já foram utilizados e testados anteriormente, portanto podem representar um bom ganho de produtividade para os desenvolvedores.

Seu uso também contribui para a organização e manutenção de projetos, já que esses padrões se baseiam em baixo acoplamento entre as classes e padronização do código.

Para o desenvolvimento do nosso projeto, seguimos o padrão Behavioral Patterns (Comportamental) mas especificamente o Command e de padrão arquitetural seguimos o padrão Model View Controler (MVC).

## Tecnologias Utilizadas

- Ferramentas de desenho de tela: Figma.

- Desenvolvimento de diagrama: LucidAPP.

- Scripts SQL: Prisma Studio

- Cliente HTTP para navegador e node JS: axios

- Runtime JavaScript desenvolvido com o Chrome's V8 JavaScript engine: Node.js®

- Uma biblioteca de componentes de interface do usuário de código aberto para criar sistemas de design acessíveis e de alta qualidade e aplicativos da Web: RADIX

- Uma estrutura React Native para criar aplicativos de plataforma cruzada: rneui

- Vite é uma ferramenta de construção front-end de útima geração com código fonte em ESM nativo: vitejs

- Expo é uma plataforma de código aberto para criar aplicativos nativos universais para Android, iOS e Web com JavaScript e React: expo

- O Fastify é um framework web altamente focado em fornecer a melhor experiência de desenvolvedor com o mínimo de sobrecarga e uma poderosa arquitetura de plug-in: fastify

- TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala.

- O Tailwind CSS é uma estrutura CSS de primeiro uso para a criação rápida de sites modernos sem sair do HTML.


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)


