# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Descrição dos cenários de testes, relacionados aos requisitos propostos pelo grupo: 

| CENÁRIO  | CASO DE TESTE  | BDD  | RESULTADO ESPERADO | 
| ------------ | ------------ | ------------ | -------- |
| 001 - LOGIN  |  CT01 - Login com e-mail inválido  |    Dado que eu esteja na tela de login; Quando preencher usuário com e-mail sem @;  Então o sistema deve exibir mensagem de erro “Login ou senha incorretos”  | Acesso negado |
| 001 - LOGIN  | CT02 - Login válido com email e senha  |  Dado que eu esteja na tela de login; Quando o usuário preecnher corretamente os seus dados de email e senha; Então o sistema o direcionará para a tela principal (Tabela das atividades mensais);  | Acesso autorizado |
|  002 - Atividades | CT03 - Criar novas atividades    |  Dado que eu esteja na tela principal (Tabela das atividades mensais); Quando o usuário clicar no símbolo de '☰' no canto superior direito da tela, o sistema irá direcioná-lo pra tela de menu; O usuário irá escolher a opção 'Criar novo hábito';  Ele preencherá os dados da sua nova atividade e clicará em 'concluir'; Então o sistema o direcionará para a tela principal (Tabela das atividades mensais); | Criação de nova atividade no sistema |
| 002 - Atividades  | CT04 - Gerar relatório das atividades mensais   | Dado que eu esteja na tela principal (Tabela das atividades mensais); Quando o usuário clicar no símbolo de '☰' no canto superior direito da tela, o sistema irá direcioná-lo pra tela de menu; O usuário irá escolher a opção 'Gerar relatório'; Então o sistema o direcionará para uma tela personalizada, compilando as suas atividades mensais;  | Emissão visual de um relatório mensal das atividades |
|  002 - Atividades | CT05 - Programar uma lista diária de atividades  | Dado que eu esteja na tela principal (Tabela das atividades mensais);  Quando o usuário clicar no símbolo de '☰' no canto superior direito da tela, o sistema irá direcioná-lo pra tela de menu; O usuário irá escolher a opção 'Criar novo hábito'; Ele preencherá os dados da sua nova atividade, marcar a opção 'recorrente'; O usuário indicará a data de termino dessa atividade e clicará em 'concluir'; | Programação correta da atividade no quadro |
| 002 - Atividades  | CT06 - Marcar tarefas cumpridas e não cumpridas   | Dado que eu esteja na tela principal (Tabela das atividades mensais); O usuário irá clicar atividade concluida da tabela; Essa quadrado que representa a atividade irá trocar de cor, exibindo um quadrado verde indicando que foi realizada.   | Mudança de cor da atividade ao clicar, indicando que foi cumprida |
| 003 - Notificação  | CT07 - Notificações diárias das atividades   |  Em um horário específico, o aplicativo irá disparar uma notificação da suas atividades diárias programadas  | Emissão de lembretes diários, levando o usuário ao aplicativo para checar suas atividades |
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
