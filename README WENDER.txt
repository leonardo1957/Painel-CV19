INTRODUÇAO:
	Ola professor wender, desculpe o atraso para entregar a dockerizaçao do meu tcc,
porem tive vaaaarios erros a enfrentar, felizmente derrotei todos e aqui esta meu frontend do tcc dockerizado,
consegui abrir aqui no navegador do meu pc, o conceito dev-ops e sensacional.

INSTRUÇOES:
Abra um terminal no caminho da pasta frontend, com o docker instalado em sua maquina digite no shell
para buildar a imagem: "sudo docker build -t frontend:dev ." ,
e então rode a imagem com o docker, podendo acessar atravez do local host porta 3006
"sudo docker run -v ${PWD}:/app -v /app/node_modules -p 3006:3000 --rm frontend:dev"
obs: Sudo caso seja linux