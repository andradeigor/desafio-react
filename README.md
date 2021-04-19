# O desafio do Mozão
*TL/DR:* Desafio em ReactJS para que as pessoas iniciantes de front-end possam desenvolver uma aplicação que vai testar seus conhecimentos e te proporcionar um feedback construtivo para crescer na stack.

*Autor: Diogo Fonseca, aka “Mozão”  
Público: iniciantes, aprendizes e juniores em front-end com ReactJS  
Criado em: Janeiro/2021  
Última revisão: Abril/2021* 


## Objetivo do desafio
Construir uma aplicação web em ReactJS que busque o perfil de desenvolvedores na API pública do GitHub e exibir os seus dados em uma página de perfil.

## Como começar o desafio
Clonar o repositório em sua máquina local e criar um branch novo para o seu código.


## Histórias
•	Ao entrar na home page, devo pesquisar o usuário pelo seu username do GitHub e ter os dados do usuário exibidos corretamente na página de perfil.  
•	Na página de perfil, os repositórios devem ser ordenados com o seguinte critério: dos que tem mais estrelas, para os que tem menos estrelas.  
•	Os nomes dos repositórios devem ser links que levam ao repositório original do GitHub, em uma página nova.  
•	Caso o usuário pesquisado possua um site nas informações de seu perfil, o mesmo deve ser aberto em uma nova página. O mesmo deve acontecer caso o usuário pesquisado tenha uma conta no twitter em seu perfil.  
•	O botão de voltar deve levar de volta para a home page, para que outro usuário do GitHub seja pesquisado.  


## Referências
•	API de busca de usuários do GitHub: https://api.github.com/users/username

•	API de busca de repositórios do usuário pesquisado: https://api.github.com/users/username/repos

•	Documentação oficial do GitHub: https://docs.github.com/en/rest

•	Design de tela que deve ser utilizado para a tela Home: https://marvelapp.com/prototype/9b662g7/screen/76185933/handoff

•	Design de tela que deve ser utilizado para a tela Perfil: https://marvelapp.com/prototype/9b662g7/screen/76186368/handoff

## Observações
1. Não é necessário se preocupar com CORS ou implementar um backend para fazer as requisições. A API do Github permite chamadas diretas do navegador.

2. Caso queira visualizar o payload com a resposta das requisições, recomendamos utilizar o Insomnia para a tarefa. (ou postman, ou postwoman, ou curl, o que preferir).

## Requisitos Técnicos para a entrega do teste
•	O teste deve ser feito utilizando a library de ReactJS com function components

•	Pode utilizar qualquer boilerplate de sua prefência (CRA, CSA, ou montar o boilerplate na mão)

•	Pode utilizar qualquer library de CSS e CSS-in-JS. (recomendamos Material UI, Bootstrap ou Styled Components. Pode fazer com CSS clássico também)

•	Deve-se utilizar rotas com a library react-router-dom, e recomendamos o uso da funcionalidade de history do react-router-dom também

•	O teste deve conter duas rotas: a rota “home” da página de busca, e a rota “perfil” que exibe o perfil do usuário pesquisado

•	O responsivo – caso queira faze-lo – deve ser levado em 3 considerações: Notebook/Desktop (como um só, resoluções maiores que 1300px width), tablet iPad e celular iPhone 5 (o Chrome Dev Tools possui referência para todos estes dispositivos por padrão)

•	O projeto deve ter uma documentação em readme ensinando a: 
1. instalar o projeto na máquina (engines, versão de node, qual gerenciador de pacote usar)
2. instalar as dependências do projeto
3. rodar o ambiente de desenvolvimento
4. rodar a build de deploy da aplicação.

•	Ainda na documentação, explicar a sua motivação de escolha das libs e frameworks (ou o motivo de ter feito na mão). Uma explicação sobre a estrutura do projeto também será bem vinda.

•	Pode utilizar tanto o Axios quanto ou Fetch para requisições.

•	Deve ser seguido o layout disponibilizado. Caso queira, pode utilizar uma lib de ícones com ícones semelhantes e relevantes pro contexto da aplicação.

•	É imprescindível que o teste desenvolvido funcione corretamente na minha máquina (em qualquer máquina, na real). Inclusive, recomendo que comece codando pela regra de negócio e, depois de finalizado a regra, trabalhe corretamente os components, qualidade de código e layout.


## Entrega do desafio
Subir o código no seu github pessoal no branch novo que foi criado. A partir deste branch, abrir um Merge Request deste para o branch main/master com o código que foi desenvolvido. Nisso, me adicione no projeto (@devMozao) e coloque como revisor do Merge Request. Não faça o merge até ter o meu feedback.

## Observações importantes
A ideia deste desafio é entender como você domina os conceitos básicos de React, com um desafio no mundo real, da forma mais “sincera” possível. E, a partir dele, entender como você traz este conhecimento pra debate com outros profissionais e como você o apresenta como solução técnica que traz valor para um cliente/usuário final num ambiente de trabalho. 

Não é pra ser um teste exaustivo - este não é esse o objetivo. Tanto que no teste eu não peço soluções de formulário com CRUD completo e gerenciamento de estados complexos. A regra principal *- e o que mais importa -* é que o teste que você desenvolveu e apresentou, funcione e atenda ao que foi solicitado na história acima. 

Além do que foi pedido nos requisitos técnicos acima, não existe “certo e errado”, da mesma forma que não vou levar tudo ao pé da letra nos mínimos detalhes.

**Além disso, um outro ponto importante deste teste é o de entender como que estão seus conhecimentos e, a partir daí, poder te auxiliar da melhor forma possível com dicas e experiências que possam ser relevantes pra alavancar a sua carreira como desenvolvedor front-end.**

## Considerações finais 
O que sempre se espera de um profissional front-end, é que ele entenda uma tarefa, a regra de negócio solicitada, seus requisitos técnicos e a apresentação de tela que é esperado para a tarefa. Este são os requisitos mínimos para um profissionai de nível Júnior. Os demais pontos, você deve ser mentorado dentro da empresa e crescer junto dos demais profissionais. *(no cenário ideal de trabalho)*. Acredito que este teste atenda bem estes requisitos.

Para profissionais de nível Pleno e Senior *- caso queira fazer o teste -* espero que você vá além do mínimo proposto e demostre o conhecimento que tem. O teste tem gaps propositais para você sugerir soluções, desenvolver ideias e provar na prática o porque a sua decisão pode ter um impacto positivo nessa tarefa.

No demais, o diálogo é sempre bem-vindo e incentivado, principalmente sugestões e discussões.  Caso surjam dúvidas no processo, sintam-se à vontade para me perguntar ali no twitter.

Boa sorte no teste! 
E estudem! That’s the way!

Abraços! o/
