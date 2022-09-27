# Exercício Realizado durante o curso da Trybe
### Exercício da Seção 7, dia 3, do Módulo de Front-End do curso.

## Tecnologias Utilizadas
1. HTML
3. JavaScript
4. React
5. Redux

# Exercícios Realizados
### 🚀 Você deve criar um sistema de cadastro de clientes. Esse sistema deve ser composto por 4 páginas.
* A primeira página deve ser a Home: ela deverá ter um link que possibilite ao usuário navegar para a página de login.
* A segunda página será a de Login: nela, devem existir 2 campos para pegar os dados do usuário (email e senha). Após o login ser efetuado, o usuário deve ser redirecionado para a página de Clientes cadastrados.
Caso o login não seja feito, ou seja, o usuário tenha mudado manualmente o link do sistema e ido para a página de cadastro ou de clientes, a única mensagem exibida deve ser: “Login não efetuado”.
* A página de Clientes cadastrados deverá listar todos os clientes. Caso não haja cliente, a mensagem “Nenhum cliente cadastrado” deve aparecer na tela, juntamente com um botão para ir à pagina de cadastro. Esse botão deve permanecer na tela mesmo caso existam clientes.
* A página de cadastro deve conter 3 inputs para pegar 3 dados do cliente: nome, idade e email. Um botão deve gerar o cadastro. Na página também deve existir um botão que leve o usuário para a página de Clientes cadastrados.
Estados que não necessitem navegar para outros componentes, podem ser guardados internamente. Todos os outros devem ser trafegados via Redux.

### 🚀 A partir do que foi desenvolvido no exercício anterior, você deve implementar novas funcionalidades ao código do cadastro de clientes.
* Na página de Clientes cadastrados, crie um botão que ordene os clientes em ordem alfabética a partir do campo nome. Caso o botão seja clicado novamente, a ordenação original deve ser mostrada.
* Cada cadastro deve ser acompanhado de um botão com o texto X. Caso o botão seja clicado, o cadastro deve ser excluído.

