
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

A metodologia contempla as definições de ferramentas utilizadas pela equipe tanto para a manutenção dos códigos e demais artefatos quanto para a organização do time na execução das tarefas do projeto.

## Relação de Ambientes de Trabalho

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito deverá ser apresentada em uma tabela que especifica que detalha Ambiente, Plataforma e Link de Acesso. 

| Ambiente | Plataforma | 
--------- | ---------- |  
| Repositório de código fonte| [GitHub](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo1-follow.me) |  
| Ferramenta para controle de versão| [Git](https://git-scm.com/) |  
| Documentos do projeto | [GitHub]( https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo1-follow.me/tree/main/docs) |
| Gerenciamento de Projeto | [Microsoft Planner](https://tasks.office.com/sgapucminasbr.onmicrosoft.com/pt-BR/Home/Planner/#/plantaskboard?groupId=27357971-1be1-4c0c-b925-2e9a75185e81&planId=twPnm3cm106sNXkNk68ouWQAHg-Y)  |
| Projeto de interface e wireframes | [Figma](https://www.figma.com/file/Jk2GMzCgewSmypMwiepG2i/Follow-me---APP-mobile?node-id=512%3A538&t=bIUY8h5HaM7IgIE1-1) |
| Editor de código | [Visual Studio Code](https://portal.azure.com/?Microsoft_Azure_Education_correlationId=482c7b3fd428421ebc975fb5a28dcb48#view/Microsoft_Azure_Education/EducationMenuBlade/~/software) |
| Banco de Dados | [SQLite](https://www.sqlite.org/download.html) |
| Ferramenta para simulação mobile | [Expo Go](https://expo.dev/client) |

## Controle de Versão

Para gestão do código fonte da aplicação interativa desenvolvida pela equipe, o grupo utiliza o sistema de controle de versão [Git](https://git-scm.com/). Esta escolha se deu pois o Git possui uma arquitetura descentralizada que permite um bom de controle de versão, o Git registra as mudanças que ocorrem no código-fonte de um projeto. Logo, permite que os arquivos sejam alterados de forma simultânea, por inúmeras pessoas, sem a preocupação que essas alterações sejam sobrescritas umas pelas outras. 

  

Devido a essa funcionalidade, caso haja algum problema em uma alteração do código-fonte, é possível restaurar à versão anterior de forma fácil e rápida. Sendo assim, em cada repositório, incluindo o da máquina do contribuidor, vai existir uma cópia completa e funcional, permitindo a utilização das operações mesmo offline. 

  

Considerando que os projetos costumam estar em constante evolução, é comum ocorrer alterações que possam causar problemas no funcionamento deles. Nesse caso, o Git permite que tais alterações sejam revertidas de maneira simples e rápida, voltando a versão antiga do projeto. 

  

Para este versionamento e controle de código fonte, estabelecemos o seguinte fluxo: 

  

1. 	Clone do projeto (cada membro do grupo criou o clone do projeto em sua máquina).  

2.	Criação da Branch (ramificação independente que permite alterar os arquivos sem interferir no original). 

3.	Commits (descrição objetiva de cada commit conforme funcionalidade) 

4.	Pull (Utilizado para buscar e trazer mudanças do repositório remoto para o repositório local, ou seja, unir os conteúdos dos arquivos alterados. Em alguns casos, pode ser necessária uma intervenção humana para realizar essa) 

5.	Push (Após finalizada a funcionalidade enviamos a nossa branch com as alterações para o repositório remoto, permitindo que os membros do grupo possam ver e alterar se necessário). 

6.	Merge (Ato de mesclar as modificações das branches com os arquivos originais do projeto da Branch principal, deixando disponível para os demais contribuidores). 

  

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

![fluxo versionamento](https://user-images.githubusercontent.com/103156976/229322255-9a34b4e0-d007-4747-8131-a0a308173fb2.jpg)

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

Discuta como a configuração do projeto foi feita na ferramenta de versionamento escolhida. Exponha como a gerência de tags, merges, commits e branchs é realizada. Discuta como a gerência de issues foi realizada.

> **Links Úteis**:
> - [Microfundamento: Gerência de Configuração](https://pucminas.instructure.com/courses/87878/)
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
>  - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)

## Gerenciamento de Projeto

### Divisão de Papéis

Apresente a divisão de papéis entre os membros do grupo.

Exemplificação: A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento. A equipe está organizada da seguinte maneira:
- Scrum Master: Paola Marsura Verreschi De Oliveira
- Product Owner: Katryn Ribeiro De Jesus Oliveira
- Equipe de Desenvolvimento: Gabriela França Alves Miranda e Fred Vasquez Pinheiro Gomes
- Equipe de Design: Barbara Benedetti Cavalcante

> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)
> - [Os papéis do Scrum e a verdade sobre cargos nessa técnica](https://www.atlassian.com/br/agile/scrum/roles)

### Processo

Coloque  informações sobre detalhes da implementação do Scrum seguido pelo grupo. O grupo deverá fazer uso do recurso de gerenciamento de projeto oferecido pelo GitHub, que permite acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.
 
> **Links Úteis**:
> - [Planejamento e Gestáo Ágil de Projetos](https://pucminas.instructure.com/courses/87878/pages/unidade-2-tema-2-utilizacao-de-ferramentas-para-controle-de-versoes-de-software)
> - [Sobre quadros de projeto](https://docs.github.com/pt/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)
> - [Project management, made simple](https://github.com/features/project-management/)
> - [Sobre quadros de projeto](https://docs.github.com/pt/github/managing-your-work-on-github/about-project-boards)
> - [Como criar Backlogs no Github](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código.
- Ferramentas de comunicação
- Ferramentas de desenho de tela (_wireframing_)

O editor de código foi escolhido porque ele possui uma integração com o sistema de versão. As ferramentas de comunicação utilizadas possuem integração semelhante e por isso foram selecionadas. Por fim, para criar diagramas utilizamos essa ferramenta por melhor captar as necessidades da nossa solução.

Liste quais ferramentas foram empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível.
 
> **Possíveis Ferramentas que auxiliarão no gerenciamento**: 
> - [Slack](https://slack.com/)
> - [Github](https://github.com/)
