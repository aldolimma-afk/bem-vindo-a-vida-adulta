const phases=[
{name:"PRIMEIROS PASSOS",age:18,next:20,mission:"Aprender a sobreviver aos primeiros boletos.",events:[
["PRIMEIRO SALÁRIO","Seu primeiro salário caiu: R$ 2.200. Você acaba de ganhar liberdade... e responsabilidades.",[
["Guardar parte do salário","Você pensa no futuro. O bonequinho ganha força! 💪",1,15,{m:1000,c:5,h:4,s:-5}],
["Comprar tudo parcelado","O presente chegou. As parcelas também.",0,-20,{m:-900,h:8,s:10,d:8}],
["Gastar tudo","O salário entrou e saiu. Velocidade impressionante.",0,-35,{m:-2200,h:12,s:25,d:15}]
]],
["LIMITE DO CARTÃO","O banco aumentou seu limite para R$ 8.000. Parece dinheiro grátis. Não é.",[
["Manter os gastos sob controle","Você entendeu o truque do banco. +FORÇA",1,12,{c:6,s:-4}],
["Usar só um pouco","Você se controla... mais ou menos.",1,5,{m:-400,h:4,s:3}],
["Usar quase tudo","Você acaba de transformar limite em uma coleira financeira.",0,-30,{m:-2500,s:25,d:15}]
]],
["ENTREVISTA","A entrevista é amanhã às 8h. São 2h da manhã.",[
["Dormir e chegar cedo","Você chega descansado. O bonequinho está ficando esperto.",1,15,{c:14,s:-10,h:3}],
["Estudar mais uma hora","Boa intenção. Ainda dá para funcionar.",1,5,{c:7,s:5}],
["Virar a noite","Você sabe responder. Só não consegue manter os olhos abertos.",0,-25,{c:-8,s:20,h:-5}]
]],
["PIX MISTERIOSO","Caiu R$ 1.500 na sua conta e você não reconhece.",[
["Não tocar no dinheiro","Você não caiu na armadilha. +FORÇA",1,12,{c:5,s:-2}],
["Descobrir de quem é","Detetive do PIX ativado.",1,8,{c:7,h:2}],
["Gastar e pensar depois","O PIX misterioso virou problema conhecido.",0,-35,{m:1500,s:30,c:-10,d:20}]
]]
]},
{name:"INDEPENDÊNCIA",age:20,next:23,mission:"Morar sozinho sem virar inimigo do próprio saldo.",events:[
["PRIMEIRO ALUGUEL","Aluguel, contas e mercado. A liberdade chegou acompanhada de três boletos.",[
["Montar orçamento","Você se prepara antes de assinar.",1,15,{m:-500,c:8,s:-5}],
["Assinar e ver depois","'Depois eu vejo' atacou novamente.",0,-25,{m:-1000,s:15,h:8}],
["Escolher o mais caro","Seu apartamento é lindo. Seu saldo está chorando.",0,-35,{m:-1700,s:28,h:15,d:10}]
]],
["A GELADEIRA","A geladeira morreu. Conserto: R$ 600.",[
["Usar a reserva","É exatamente para isso que a reserva existe.",1,15,{m:-600,c:3,s:2}],
["Parcelar","Resolve agora. A fatura lembra depois.",1,5,{m:-120,s:8,d:4}],
["Comprar uma caríssima","Você fez um funeral de R$ 2.800.",0,-30,{m:-2800,s:16,h:14,d:8}]
]],
["SUPERMERCADO","Você entrou para comprar leite e saiu com snacks, queijo e uma planta.",[
["Seguir a lista","Você venceu o supermercado.",1,12,{m:-280,c:3,s:-2}],
["Levar tudo","Você merece. O cartão também merece férias.",0,-20,{m:-700,h:12,s:6}],
["Pagar tudo no crédito","O supermercado agora é seu sócio.",0,-30,{m:-900,h:16,s:14,d:12}]
]],
["A VIAGEM","Seu amigo achou uma promoção. Você acabou de pagar o aluguel.",[
["Não ir e guardar","Seu saldo ganhou força.",1,10,{c:4,s:-3,h:-2}],
["Planejar uma versão barata","Você mantém a diversão sem destruir o mês.",1,8,{m:-350,h:12,s:-2}],
["Parcelar sem pensar","Você viajou por três dias e continua viajando na fatura.",0,-30,{m:-1200,h:25,s:18,d:15}]
]]
]},
{name:"CARREIRA",age:23,next:26,mission:"Construir uma carreira sem destruir sua energia.",events:[
["A PROMOÇÃO","Seu chefe oferece R$ 700 a mais por mês e muito mais responsabilidade.",[
["Negociar condições","Você pensa no salário e também na sua vida.",1,15,{m:700,c:16,s:5}],
["Aceitar tudo","Mais dinheiro. Mais trabalho. O bonequinho começa a suar.",1,5,{m:700,c:10,s:14}],
["Trabalhar 70 horas","Parabéns. Você foi promovido a funcionário e meio.",0,-35,{m:900,c:18,s:28,h:-8}]
]],
["CURSO OU VIAGEM?","Você tem R$ 1.200. Uma escolha pode fortalecer seu futuro.",[
["Fazer o curso","Você investe em uma habilidade.",1,15,{m:-1200,c:18,h:3,s:4}],
["Viajar","Experiências também importam.",1,8,{m:-1000,h:22,s:-10}],
["Comprar coisas aleatórias","R$ 1.200 viraram três objetos que você já esqueceu.",0,-25,{m:-1200,h:8,c:-2,s:8}]
]],
["O CHEFE","Seu chefe pediu trabalho no sábado. Você já tinha planos.",[
["Negociar e colocar limite","Você protege sua energia.",1,12,{c:8,s:-3,h:4}],
["Aceitar","Você ajuda a equipe, mas perde energia.",1,3,{c:5,s:10,h:-6}],
["Ignorar","Você ganhou um sábado e uma segunda-feira interessante.",0,-25,{c:-10,s:18}]
]],
["MUDAR DE CARREIRA","Você percebeu que não gosta da área atual.",[
["Estudar enquanto trabalha","Você constrói uma ponte.",1,15,{c:15,s:8,h:8}],
["Largar tudo amanhã","Coragem sem plano virou um salto.",0,-30,{m:-1000,c:8,s:22,h:10}],
["Ignorar por cinco anos","Você renovou o contrato com a própria insatisfação.",0,-30,{m:300,c:-8,s:18,h:-15}]
]]
]},
{name:"RELACIONAMENTOS",age:26,next:28,mission:"Cuidar de você e das pessoas que importam.",events:[
["RELACIONAMENTO À DISTÂNCIA","Você conheceu alguém incrível em outra cidade.",[
["Conversar sobre expectativas","Você resolve antes de virar novela.",1,12,{h:12,r:12,s:-2}],
["Viajar sempre","Romântico. E caro.",1,5,{m:-600,h:22,r:15,s:4}],
["Fingir que distância não existe","A conversa difícil chega mesmo assim.",0,-25,{h:-12,r:-15,s:18}]
]],
["AMIGO PRECISA DE DINHEIRO","Seu amigo pede R$ 1.000 emprestado.",[
["Emprestar só o que posso perder","Você ajuda sem se destruir.",1,12,{m:-300,r:8,h:5}],
["Emprestar tudo","Agora seu calendário tem uma nova missão: cobrar.",1,3,{m:-1000,r:10,s:7}],
["Cobrar todo dia","Você virou gerente de cobrança da amizade.",0,-20,{m:-1000,r:-8,s:15}]
]],
["CARRO","A parcela cabe. Seguro, combustível e manutenção também querem participar.",[
["Calcular o custo total","Você olha o quadro inteiro.",1,12,{c:8,s:-3}],
["Comprar porque a parcela cabe","A parcela cabe. O resto ocupou o orçamento.",0,-30,{m:-1200,s:18,h:10,d:12}],
["Comprar um carro muito acima","Você queria mobilidade. Comprou um compromisso.",0,-35,{m:-2500,s:28,h:20,d:20}]
]],
["FAMÍLIA","Uma pessoa próxima precisa de ajuda.",[
["Ajudar com uma parte","Você ajuda sem colocar tudo em risco.",1,10,{m:-400,r:12,h:6,s:3}],
["Ajudar com tudo","Você resolveu o problema dela e criou um no seu saldo.",1,2,{m:-1500,r:18,h:10,s:15}],
["Prometer e sumir","Você desbloqueou o título: 'vou responder depois'.",0,-25,{r:-18,s:18,h:-8}]
]]
]},
{name:"MISSÃO FINAL",age:28,next:30,mission:"Chegar aos 30 forte o bastante para vencer a missão.",events:[
["O BÔNUS","Você recebeu R$ 3.000 de bônus.",[
["Guardar a maior parte","A força financeira aumenta.",1,15,{m:2800,s:-10,c:4}],
["Investir em habilidade","Você compra uma possibilidade de futuro.",1,10,{m:1000,c:16,h:5}],
["Gastar tudo na festa","A festa foi inesquecível. O saldo também.",0,-30,{h:25,s:-3,c:-2}]
]],
["MUDAR DE CIDADE","Uma proposta aumenta sua renda, mas muda sua vida.",[
["Avaliar dinheiro e qualidade de vida","Você pensa no pacote completo.",1,12,{c:12,s:-2,h:5,r:4}],
["Aceitar só pelo salário","Dinheiro é ótimo. Não é tudo.",1,5,{m:1600,c:16,s:12,h:2,r:-8}],
["Recusar por medo","Você protege o conhecido e perde uma chance.",0,-15,{h:2,s:5,c:-4}]
]],
["A ÚLTIMA PROVA","Você está perto dos 30. Uma última decisão separa você da missão final.",[
["Definir prioridades","Você escolhe direção.",1,15,{c:8,s:-10,h:10,r:5}],
["Tentar fazer tudo","14 abas abertas na cabeça.",0,-25,{c:8,h:4,s:20}],
["Desistir de planejar","Seu estresse chamou isso de outra coisa.",0,-30,{h:-8,s:22,c:-4}]
]],
["A MISSÃO DOS 30","Você chegou ao portal final. Precisa estar forte para concluir a missão.",[
["Equilíbrio","Você leva dinheiro, saúde, relações e propósito para a próxima fase.",1,20,{h:15,s:-15,r:10,c:7}],
["Só carreira","Você corre atrás do objetivo e esquece parte do caminho.",1,5,{c:22,m:1000,s:12,h:-5}],
["Só diversão","Você viveu. O futuro também mandou a conta.",0,-35,{h:25,s:-8,m:-1000,c:-3}]
]]
]}
];


const alternateBank=[
[
["PRIMEIRO CONTRATO","Você recebeu um contrato de trabalho. O salário parece ótimo, mas há benefícios, horário e período de experiência para entender.",[
["Assinar sem ler porque o salário é bom","O salário é bom. A ideia de descobrir as regras depois é menos boa.",0,-25,{s:15}],
["Ler as cláusulas e tirar dúvidas","Você descobriu que adulto também lê as letras pequenas.",1,12,{c:6,s:-3}],
["Perguntar só quanto vai cair na conta","Você conferiu o dinheiro e esqueceu metade do contrato.",0,-10,{c:2,s:8}]
]],
["PRIMEIRO APERTO","Faltam 10 dias para o salário e você tem R$ 180 na conta. Um amigo chama para sair.",[
["Recusar e controlar os gastos","Você não virou a pessoa mais divertida da noite, mas continua com dinheiro.",1,10,{s:-4}],
["Ir e gastar só R$ 50","Você saiu, se divertiu e não destruiu o orçamento.",1,8,{m:-50,h:8}],
["Usar o cartão e esquecer","O futuro você recebeu a conta da festa.",0,-25,{s:18,d:8,h:5}]
]],
["PRIMEIRA MULTA","Você esqueceu uma conta e apareceu uma multa pequena.",[
["Pagar e criar lembrete","Você transformou um erro em aprendizado.",1,10,{m:-40,c:3,s:-3}],
["Ignorar porque é pequena","Pequena hoje. Maior depois.",0,-18,{m:-80,s:12,d:5}],
["Pedir dinheiro emprestado para pagar","Você resolveu um problema criando outro.",0,-15,{m:-20,s:15,d:8}]
]],
["AMIGO NOVO NEGÓCIO","Um amigo diz que tem uma oportunidade 'sem risco' e quer seu dinheiro.",[
["Pedir informações e analisar","Sem risco? Você pediu para ver os detalhes.",1,12,{c:5,s:-2}],
["Colocar uma pequena quantia que pode perder","Você limitou o risco.",1,6,{m:-150,h:2,s:4}],
["Colocar quase toda a reserva","O amigo disse 'confia'. Seu saldo não deveria.",0,-35,{m:-1000,s:25,d:10}]
]]
],
[
["PRIMEIRO MÓVEL","Seu apartamento está vazio. Você pode comprar tudo de uma vez ou montar aos poucos.",[
["Priorizar o essencial","Você descobriu que não precisa decorar a casa em um dia.",1,12,{m:-450,c:4,s:-2}],
["Parcelar tudo","A casa ficou bonita. A fatura também.",0,-18,{m:-900,s:15,d:10}],
["Comprar o que estiver na promoção","Promoção não transforma algo desnecessário em necessário.",0,-12,{m:-600,s:10}]
]],
["CONTA DE LUZ","A conta veio muito maior do que você esperava.",[
["Investigar o consumo","Você procurou a causa antes de só reclamar.",1,10,{c:4,s:-2}],
["Pagar e ignorar","Mês que vem você descobre de novo.",0,-8,{m:-250,s:8}],
["Cancelar outras contas sem pensar","Você resolveu uma conta criando três problemas.",0,-15,{m:-200,s:18,h:-5}]
]],
["FIM DO MÊS","Você tem R$ 300 sobrando e faltam cinco dias para o pagamento.",[
["Guardar e usar só o necessário","Você chegou ao fim do mês sem desespero.",1,12,{c:4,s:-4}],
["Pedir delivery todos os dias","Cinco dias podem ser muito caros.",0,-20,{m:-250,h:10,s:12}],
["Comprar algo porque o dinheiro está sobrando","Sobrar hoje não significa sobrar sempre.",0,-12,{m:-200,h:8,s:8}]
]],
["VIZINHO BARULHENTO","O vizinho está fazendo barulho tarde da noite há vários dias.",[
["Conversar com respeito","Você tentou resolver antes de transformar o prédio em guerra.",1,10,{r:5,s:-3}],
["Bater na porta gritando","Parabéns pela diplomacia nível tanque de guerra.",0,-18,{r:-8,s:15}],
["Ignorar por meses","Você ganhou um novo despertador involuntário.",0,-10,{h:-4,s:12}]
]]
],
[
["SALÁRIO MAIOR","Outra empresa oferece 30% a mais, mas o deslocamento será muito maior.",[
["Comparar o pacote completo","Você calculou dinheiro, tempo e qualidade de vida.",1,14,{m:900,c:12,s:2}],
["Aceitar só pelo salário","Seu salário subiu. Seu tempo livre desceu.",1,4,{m:1200,c:12,s:15}],
["Recusar sem pesquisar","Talvez fosse uma boa oportunidade. Você nem conferiu.",0,-10,{c:-3,s:5}]
]],
["CHEFE NOVO","Seu novo chefe parece competente, mas trabalha de um jeito completamente diferente.",[
["Observar e alinhar expectativas","Você evita guerra antes dela começar.",1,10,{c:8,s:-3}],
["Fazer tudo do seu jeito","Independência sem alinhamento vira retrabalho.",0,-18,{c:-5,s:18}],
["Concordar com tudo","Paz imediata, problemas futuros.",1,2,{c:3,s:8}]
]],
["ERRO NO TRABALHO","Você cometeu um erro que ainda pode ser corrigido.",[
["Avisar cedo e corrigir","Você protege a confiança e resolve o problema.",1,14,{c:8,s:-4}],
["Esconder até alguém descobrir","O erro ganhou uma temporada inteira.",0,-28,{c:-8,s:20}],
["Culpar outra pessoa","Você trocou um erro por dois problemas.",0,-25,{c:-10,s:18,r:-5}]
]],
["FÉRIAS","Você está esgotado, mas tem uma semana de férias acumulada.",[
["Planejar descanso de verdade","Descansar também é manutenção.",1,12,{h:12,s:-15}],
["Continuar trabalhando nas férias","Você levou o escritório para a praia.",0,-25,{c:5,s:25,h:-8}],
["Gastar tudo numa viagem que não cabe","Descansou por sete dias e pagou por meses.",0,-22,{m:-1500,h:18,s:18,d:10}]
]]
],
[
["CONVIVÊNCIA","Você e seu parceiro discordam sobre uma grande compra.",[
["Conversar sobre prioridades","Você descobriu que orçamento também é conversa.",1,12,{r:12,s:-3}],
["Comprar escondido","A compra veio com um brinde: desconfiança.",0,-30,{m:-800,r:-20,s:18}],
["Deixar para lá e nunca conversar","O problema não desapareceu. Só envelheceu.",0,-15,{r:-10,s:12}]
]],
["TEMPO","Você percebe que está sempre disponível para todo mundo e quase nunca para você.",[
["Definir limites de horário","Você não precisa ser atendimento 24 horas.",1,12,{h:8,s:-12,r:4}],
["Continuar aceitando tudo","Seu calendário virou inimigo.",0,-20,{h:-8,s:22}],
["Sumir de todo mundo","Limite é diferente de isolamento.",0,-15,{r:-12,h:-5,s:8}]
]],
["DECISÃO DO CASAMENTO","Você e seu parceiro discutem se é hora de dar um passo maior na relação.",[
["Conversar sobre dinheiro, planos e expectativas","Romance com planilha ainda é romance.",1,15,{r:15,c:5,s:-2}],
["Fazer a festa primeiro e pensar depois","O casamento acabou. A fatura não.",0,-25,{m:-2500,r:8,s:22,d:20}],
["Decidir só porque todo mundo espera","Sua vida não é enquete de família.",0,-18,{r:-8,s:15}]
]],
["FIM DE SEMANA","Você tinha prometido tempo para uma pessoa importante, mas surgiu uma oportunidade de trabalho.",[
["Conversar e decidir conscientemente","Você considera a carreira sem tratar pessoas como compromisso opcional.",1,12,{r:8,c:6,s:3}],
["Cancelar sem explicar","Você ganhou horas e perdeu confiança.",0,-18,{r:-15,s:10}],
["Aceitar o trabalho e compensar depois","Pode funcionar, se 'depois' realmente acontecer.",1,4,{c:5,r:3,s:8}]
]]
],
[
["INVESTIR EM VOCÊ","Você tem tempo e algum dinheiro para melhorar uma área importante da sua vida.",[
["Escolher uma meta concreta","Você transforma vontade em plano.",1,14,{c:8,h:5,s:-4}],
["Comprar um curso caro sem pesquisar","O certificado pode ser bonito. O conteúdo talvez nem tanto.",0,-15,{m:-1000,s:12}],
["Deixar para depois indefinidamente","O futuro agradece a procrastinação.",0,-18,{c:-4,s:15}]
]],
["RESERVA","Você percebeu que sua reserva ainda é pequena.",[
["Criar uma meta mensal","Pequeno e constante vence o plano perfeito.",1,12,{c:6,s:-4}],
["Esperar sobrar dinheiro","Às vezes ele não sobra sozinho.",0,-12,{s:10}],
["Usar a reserva para um luxo","Reserva de emergência não é fundo de desejos.",0,-28,{m:-900,s:18,d:8}]
]],
["PROPOSTA ARRISCADA","Uma oportunidade pode acelerar sua vida, mas você precisaria aceitar algum risco.",[
["Definir quanto pode arriscar","Você não precisa apostar a vida inteira.",1,12,{c:10,s:3}],
["Arriscar tudo","Coragem sem limite pode virar desastre.",0,-35,{m:-1800,s:28,d:15}],
["Recusar qualquer risco","Segurança total também pode custar oportunidades.",1,2,{c:3,s:-2}]
]],
["AOS 30","Você olha para trás e percebe que algumas escolhas deram certo e outras ensinaram na marra.",[
["Continuar aprendendo","Você não terminou a vida. Só terminou um capítulo.",1,15,{c:8,h:10,s:-8,r:5}],
["Achar que já sabe tudo","Essa frase costuma ser seguida por um boleto inesperado.",0,-18,{c:-5,s:15}],
["Comparar sua vida com a dos outros","Você acabou de trocar sua paz por um placar que nem existe.",0,-20,{h:-10,s:20,r:-5}]
]]
]
];

let st={name:"",phase:0,event:0,age:18,strength:75,maxStrength:100,money:1500,career:0,happy:50,stress:20,relations:50,debt:0,good:0,total:0,streak:0};

const app=document.querySelector("#app");
const money=v=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(v);
const clamp=v=>Math.max(0,Math.min(100,v));
const success=()=>st.total?Math.round(st.good/st.total*100):0;

function apply(fx){st.money+=fx.m||0;st.career=clamp(st.career+(fx.c||0));st.happy=clamp(st.happy+(fx.h||0));st.stress=clamp(st.stress+(fx.s||0));st.relations=clamp(st.relations+(fx.r||0));st.debt=Math.max(0,st.debt+(fx.d||0))}
function avatar(){
 let mood=st.strength<=20?"dead":st.strength<=40?"weak":st.strength>=80?"strong":"normal";
 let body=mood==="dead"?`<g class="char dead"><circle cx="60" cy="35" r="18"/><path d="M50 28l20 14M70 28L50 42"/><path d="M60 53v45M60 64L35 78M60 64l25 14M60 98L42 125M60 98l18 27"/></g>`:
 mood==="weak"?`<g class="char weak"><circle cx="60" cy="30" r="16"/><path d="M60 46v48M60 58L38 73M60 58l22 15M60 94l-14 30M60 94l14 30"/><path d="M48 27q12 8 24 0"/></g>`:
 mood==="strong"?`<g class="char strong"><circle cx="60" cy="28" r="17"/><path d="M60 45v50M60 56L30 72M60 56l30 16M60 95L40 126M60 95l20 31"/><path d="M42 55Q25 45 18 60M78 55Q95 45 102 60"/></g>`:
 `<g class="char"><circle cx="60" cy="30" r="16"/><path d="M60 46v48M60 57L37 73M60 57l23 16M60 94L45 124M60 94l15 30"/><path d="M50 28q10 7 20 0"/></g>`;
 return `<svg viewBox="0 0 120 145" aria-label="Seu personagem">${avatarGround()}${body}</svg>`
}
function avatarGround(){return `<ellipse cx="60" cy="130" rx="38" ry="6" class="ground"/>`}

function obstacleFor(title){
 const t=title.toUpperCase();
 if(t.includes("SALÁRIO")||t.includes("SALARIO")||t.includes("DINHEIRO")||t.includes("PIX")||t.includes("BÔNUS")||t.includes("BONUS")) return ["💸","DINHEIRO"];
 if(t.includes("CARTÃO")||t.includes("CARTAO")||t.includes("CONTA")||t.includes("MULTA")||t.includes("BOLETO")||t.includes("ALUGUEL")) return ["💳","BOLETO"];
 if(t.includes("CARREIRA")||t.includes("TRABALHO")||t.includes("CHEFE")||t.includes("ENTREVISTA")||t.includes("CONTRATO")) return ["💼","CARREIRA"];
 if(t.includes("CARRO")) return ["🚗","CARRO"];
 if(t.includes("RELACIONAMENTO")||t.includes("FAMÍLIA")||t.includes("FAMILIA")||t.includes("AMIGO")||t.includes("CASAMENTO")) return ["❤️","RELAÇÕES"];
 if(t.includes("CASA")||t.includes("GELADEIRA")||t.includes("MÓVEL")||t.includes("MOVEL")||t.includes("VIZINHO")||t.includes("LUZ")) return ["🏠","CASA"];
 if(t.includes("FÉRIAS")||t.includes("FERIAS")||t.includes("VIAGEM")||t.includes("TEMPO")) return ["✈️","VIDA"];
 return ["⚠️","DESAFIO"];
}
function obstacle(title,mode="normal"){
 const [icon,label]=obstacleFor(title);
 return `<div class="obstacle ${mode}" id="obstacle"><div class="obstacle-icon">${icon}</div><div><b>OBSTÁCULO</b><strong>${label}</strong></div></div>`;
}

function stats(){
return `<div class="stats">
<div class="strength ${st.strength<=25?"danger":""}">⚡<b>${st.strength}/100</b><small>força</small></div>
<div>📈<b>${success()}%</b><small>taxa de sucesso</small></div>
<div>💰<b>${money(st.money)}</b><small>dinheiro</small></div>
<div>💼<b>${st.career}</b><small>carreira</small></div>
<div>😊<b>${st.happy}</b><small>felicidade</small></div>
<div>🧠<b>${st.stress}</b><small>estresse</small></div>
</div>`}
function characterPanel(){
let status=st.strength<=20?"O bonequinho está por um fio!":st.strength<=40?"Ele está perdendo as forças.":"Ele está ficando forte!";
let pos=Math.min(94,8+(st.event*22));
return `<aside class="character"><div class="age">IDADE <b>${st.age}</b> ANOS</div>
<div class="journey"><div class="sky"><span class="sun">☀️</span><span class="cloud">☁️</span></div>
<div class="mountain"></div><div class="path"><div class="flag">🏁</div><div class="runner" style="left:${pos}%">${avatar()}</div></div>
<div class="markers"><span>INÍCIO</span><span>MISSÃO</span></div></div>
<h3>${status}</h3><div class="power"><span style="width:${st.strength}%"></span></div><small>FORÇA PARA CONCLUIR A MISSÃO</small></aside>`
}
function home(){
app.innerHTML=`<div class="shell"><header><small>🎮 JOGO DE SOBREVIVÊNCIA À VIDA ADULTA</small><h1>Bem-Vindo à<br>Vida Adulta</h1><p>Escolha certo. Fique forte. Passe de fase. Chegue aos 30.</p></header>
<div class="startgrid"><section><h2>Você começa aos 18.</h2><p>Seu bonequinho tem uma missão: <b>chegar aos 30 bem-sucedido.</b></p><p>Respostas boas aumentam sua <b>força</b>. Respostas ruins fazem você perder força. Se chegar a zero...</p><div class="warning">💀 GAME OVER</div><input id="name" maxlength="24" placeholder="Nome do personagem"><button id="start">COMEÇAR MISSÃO</button></section>${characterPanel()}</div>
<div class="road">${phases.map((p,i)=>`<div><strong>${i+1}</strong><span>${p.name}<small>${p.age} → ${p.next} anos</small></span></div>`).join("")}</div></div>`;
document.querySelector("#start").onclick=()=>{st.name=document.querySelector("#name").value.trim()||"Jogador";prepareRun();intro()}
}
function intro(){
const p=phases[st.phase];st.age=p.age;
app.innerHTML=`<div class="shell"><div class="top">FASE ${st.phase+1}/5 <span>IDADE ${p.age}</span></div>
<header class="phase"><strong>${st.phase+1}</strong><div><small>MISSÃO</small><h1>${p.name}</h1><p>${p.mission}</p></div></header>
<div class="gamegrid">${characterPanel()}<div>${stats()}<section><h2>Você tem ${p.age} anos.</h2><p>Você precisa chegar ao final desta fase com força suficiente para continuar.</p><div class="mission-rule">🛡️ <b>Regra da missão:</b> decisões certas quebram obstáculos e dão força. Decisões erradas fazem o obstáculo atingir você.</div><button id="go">COMEÇAR FASE</button></section></div></div></div>`;
document.querySelector("#go").onclick=eventScreen;
}
function eventScreen(){
const p=phases[st.phase],e=p.events[st.event];
app.innerHTML=`<div class="shell"><div class="top"><span>FASE ${st.phase+1} · ${p.name}</span><span>${st.event+1}/4</span></div><div class="bar"><i style="width:${((st.phase*4+st.event)/20)*100}%"></i></div>
<div class="gamegrid"><div>${characterPanel()}</div><div>${stats()}<article><small>⚡ A VIDA ACONTECEU</small>${obstacle(e[0])}<h1>${e[0]}</h1><p>${e[1]}</p><h3>Qual é a sua escolha?</h3>
${e[2].map((c,i)=>`<button class="choice" data-i="${i}"><b>${String.fromCharCode(65+i)}</b><span><strong>${c[0]}</strong><small>${c[1]}</small></span></button>`).join("")}</article></div></div></div>`;
document.querySelectorAll(".choice").forEach(b=>b.onclick=()=>choose(+b.dataset.i));
}
function choose(i){
const e=phases[st.phase].events[st.event],c=e[2][i];
st.total++;
if(c[2]===1){st.good++;st.streak++;}else st.streak=0;
st.strength=clamp(st.strength+c[3]);apply(c[4]);
feedback(c);
}
function feedback(c){
const good=c[2]===1;
let title=good?"💪 O BONEQUINHO FICOU MAIS FORTE!":"💀 O BONEQUINHO PERDEU FORÇAS!";
let msg=good?c[1]:c[1];
if(st.strength<=0){gameOver(c);return}
let danger=st.strength<=35;
app.innerHTML=`<div class="shell"><div class="result ${good?"good":"bad"}">${avatar()}<div><small>${title}</small><h1>${good?"OBSTÁCULO SUPERADO!":"O OBSTÁCULO TE ACERTOU!"}</h1><p>${msg}</p></div></div><div class="impact ${good?"clear":"hit"}">${obstacle(phases[st.phase].events[st.event][0],good?"clear":"hit")}</div>
<div class="gamegrid"><div>${characterPanel()}</div><div>${stats()}<section><h2>${st.strength<=20?"🚨 CUIDADO!":danger?"⚠️ ELE ESTÁ FRACO!":"A missão continua."}</h2><p>${good?`Força <b>+${c[3]}</b>.`: `Força <b>${c[3]}</b>.`} Sua taxa de sucesso agora é <b>${success()}%</b>.</p><button id="continue">${st.event+1>=4?"CONCLUIR FASE":"CONTINUAR MISSÃO"}</button></section></div></div></div>`;
document.querySelector("#continue").onclick=()=>{
st.event++;
if(st.event>=4){st.event=0;st.phase++;if(st.phase>=phases.length){finish();return}phaseDone()}else eventScreen();
}
}
function gameOver(c){
app.innerHTML=`<div class="shell"><div class="gameover"><div class="skull">💀</div><small>GAME OVER</small><h1>${st.name}, o bonequinho ficou sem forças.</h1><div class="deadavatar">${avatar()}</div><p>Você chegou aos <b>${st.age} anos</b> e não conseguiu força suficiente para continuar a missão.</p>${stats()}<section><h2>📉 Taxa de sucesso: ${success()}%</h2><p>Você acertou ${st.good} de ${st.total} decisões.</p><button id="again">TENTAR NOVAMENTE</button></section></div></div>`;
document.querySelector("#again").onclick=()=>reset();
}
function phaseDone(){
const next=phases[st.phase],r=success();
let canContinue=st.strength>=35;
app.innerHTML=`<div class="shell"><div class="phasewin">🏆</div><div class="finish-line"><span>🏁</span><div class="crossing">${avatar()}</div><b>CHEGOU!</b></div><small>FASE CONCLUÍDA</small><h1>Você chegou aos ${next.age} anos!</h1><p>${r>=75?"🔥 O bonequinho está forte e preparado.":r>=50?"💪 Ele está sobrevivendo.":"⚠️ Ele passou, mas está precisando recuperar forças."}</p>
<div class="phase-result"><div class="miniavatar">${avatar()}</div><div><b>${st.strength}/100</b><span>força atual</span><strong>${r}%</strong><span>taxa de sucesso</span></div></div>${stats()}<section><h2>${next.name}</h2><p>${canContinue?"Você está forte o suficiente para avançar.":"Você avançou no limite. A próxima fase será perigosa."}</p><button id="next">AVANÇAR PARA ${next.age} ANOS</button></section></div>`;
document.querySelector("#next").onclick=intro;
}
function finish(){
const r=success(),score=Math.round(st.money/100)+st.career+st.happy+(100-st.stress)+st.relations-st.debt;
let title=r>=85?"🏆 MISSÃO CONCLUÍDA COM EXCELÊNCIA":r>=70?"🥇 MISSÃO CONCLUÍDA":"🎉 VOCÊ CHEGOU AOS 30!";
let text=st.strength>=80?"O bonequinho chegou forte, preparado e bem-sucedido.":st.strength>=50?"Você chegou aos 30 com força suficiente para seguir em frente.":"Você chegou aos 30 no limite. Mas chegou.";
app.innerHTML=`<div class="shell"><div class="success"><div class="final-scene"><span>🌅</span><div class="winner">${avatar()}</div><span>🏆</span></div><div class="stars">★ ★ ★</div><small>MISSÃO FINALIZADA</small><h1>${st.name}, você chegou aos 30!</h1><div class="winner">${avatar()}</div><h2>${title}</h2><p>${text}</p></div>
<div class="final-rate"><b>${r}%</b><span>TAXA DE SUCESSO</span><small>${st.good} acertos em ${st.total} decisões</small></div>${stats()}<section><h2>🏆 RESULTADO FINAL</h2><p>Força final: <b>${st.strength}/100</b></p><p>Pontuação da jornada: <b>${score}</b></p><hr><p>Você não precisava acertar tudo. Precisava aprender a ficar forte o suficiente para continuar.</p><button id="again">JOGAR NOVAMENTE</button></section></div>`;
document.querySelector("#again").onclick=()=>reset();
}
function shuffle(a){return [...a].sort(()=>Math.random()-0.5)}
function prepareRun(){
  // A cada nova partida entram 4 situações diferentes de um banco maior.
  phases.forEach((p,pi)=>{
    const pool=[...p.events,...alternateBank[pi]];
    p.events=shuffle(pool).slice(0,4).map(e=>[e[0],e[1],shuffle(e[2])]);
  });
}
function reset(){
  st={name:"",phase:0,event:0,age:18,strength:75,maxStrength:100,money:1500,career:0,happy:50,stress:20,relations:50,debt:0,good:0,total:0,streak:0};
  prepareRun();
  home();
}
home();