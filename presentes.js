const sala = [
    { id: 101, titulo: "sala", item: "Cortina de varal (cores neutras)", img:"image/cortinas-blackout.webp" },
    { id: 102, titulo: "sala", item: "Almofadas (cores neutras)", img:"images/almofadas.jpg" },
    { id: 103, titulo: "sala", item: "Tapete de sala de estar (cores neutras)", img:"images/tapete para a sala.jpeg" },
];

const quarto = [
    { id: 201 ,titulo: "quarto" , item: "Edredom", img:"images/edredom.webp" },
    { id: 202 ,titulo: "quarto" , item: "Cobreleito (para cama king)", img:"images/cobre-leito.webp" },
    { id: 203 ,titulo: "quarto" , item: "jogo de cama (para cama king)", img:"images/jogo_de_cama.webp" },
    { id: 204 ,titulo: "quarto" , item: "Jogo de travesseiros", img:"images/jogo-de-travesseiro.webp" },
    { id: 205 ,titulo: "quarto" , item: "jogo de virol (para cama king)", img:"images/jogo-de virou.webp" },
    { id: 206 ,titulo: "quarto" , item: "cortina blackout (cores neutras)", img:"images/cortinas-blackout.webp" },
    { id: 207 ,titulo: "quarto" , item: "Manta/cobertor", img:"images/cobertor-manta.webp" },
];

const banheiro = [
    { id: 301,titulo: "banheiro" , item: "Jogo de tapete para banheiro (cores neutras)", img:"images/jogo-de-tapete.jpeg" },
    { id: 302,titulo: "banheiro" , item: "jogo de toalha de banho", img:"images/toalha de banho.webp" },
    { id: 303,titulo: "banheiro" , item: "kit lavabo (cores neutras)", img:"images/kit-lavabo.webp" },
    { id: 304,titulo: "banheiro" , item: "jogo de toalha de rosto", img:"images/toalha-de-rosto.jpeg" },
];

const lavanderia = [
    { id: 401,  titulo: "lavanderia" , item: "Cesto de roupa e prendedores", img:"images/cesto-de-roupa.webp"  },
    { id: 402,  titulo: "lavanderia" , item: "Varal de roupa", img:"images/varal-de-roupas.webp"  },
    { id: 403,  titulo: "lavanderia" , item: "Tábua de passar", img:"images/tabua-de-passar.jpg"  },
    { id: 404,  titulo: "lavanderia" , item: "Ferro de passar", img:"images/ferro-de-passar.jpg"  },
    { id: 405,  titulo: "lavanderia" , item: "Rodo mop", img:"images/rodo-mop.webp"  },
    { id: 406,  titulo: "lavanderia" , item: "Porta sabão em pó/amaciante", img:"images/porta-sabao.jpeg"  },
    { id: 407,  titulo: "lavanderia" , item: "Balde/bacia", img:"images/bacia.jpeg"  },
    { id: 408, titulo: "lavanderia" ,  item: "Tapetes", img:"images/tapete-lavanderia.webp"  },
];

const eletrodomesticos = [
    { id: 501, titulo: "Eletrodomésticos", item: "Liquidificador", img:"images/liquidificador.webp"  },
    { id: 502, titulo: "Eletrodomésticos", item: "processador", img:"images/processador.jpg"  },
    { id: 503, titulo: "Eletrodomésticos", item: "batedeira", img:"images/batedeira.jpg"  },
    { id: 504, titulo: "Eletrodomésticos", item: "sanduícheira", img:"images/sanduicheira.webp"  },
    { id: 505, titulo: "Eletrodomésticos", item: "panela eletrica de arroz", img:"images/panela-de-arroz.jpeg"  },
    { id: 506, titulo: "Eletrodomésticos", item: "chaleira elétrica", img:"images/chaleira.jpg"  },
];

const utensilios = [
    { id: 601,  titulo: "utensílios", item: "Panela de pressão com fechamento externo (4,5l)", img:"images/panela-de-pressão.jpeg" },
    { id: 602,  titulo: "utensílios", item: "jogos de copos de vidro", img:"images/copos-de-vidro.webp" },
    { id: 603,  titulo: "utensílios", item: "jogo de taça", img:"images/taças.webp" },
    { id: 604,  titulo: "utensílios", item: "jogo de sobremesa", img:"images/jogo-de-sobremesa.jpeg" },
    { id: 605,  titulo: "utensílios", item: "jogo de xícaras", img:"images/jogo-de-xicaras.webp" },
    { id: 606,  titulo: "utensílios", item: "marinex (média e grande)", img:"images/marinex.webp" },
    { id: 607,  titulo: "utensílios", item: "jogo de travessas", img:"images/jogo-de-travessa.webp" },
    { id: 608,  titulo: "utensílios", item: "formas de bolo (pequena e média)", img:"images/forma-de-bolo.jpeg" },
    { id: 609,  titulo: "utensílios", item: "jogo de talher", img:"images/jogo-de-talher.webp" },
    { id: 610, titulo: "utensílios",  item: "jogo de faca", img:"images/jogo-de-faca.webp" },
    { id: 611, titulo: "utensílios",  item: "jogo americano", img:"images/jogo-americano.webp" },
    { id: 612, titulo: "utensílios",  item: "jogo de aparelho de jantar", img:"images/jogo-de-aparelho-de-jantar.jpg" },
    { id: 613, titulo: "utensílios",  item: "jogo de panelas (antaiderente)", img:"images/panelas-antiaderente.jpg" },
    { id: 614, titulo: "utensílios",  item: "jogo de colher de cilicone",img:"images/colher-de-silicone.webp" },
    { id: 615, titulo: "utensílios",  item: "1kit de concha", img:"images/kit-concha.jpg" },
    { id: 616, titulo: "utensílios",  item: "jogo de potes de mantimentos", img:"images/pote-mantimentos.jpeg" },
    { id: 617, titulo: "utensílios",  item: "toalhas de mesa", img:"images/toalha de mesa.webp" },
    { id: 618, titulo: "utensílios",  item: "jogo de pano de prato", img:"images/pano-de-prato.jpg" },
    { id: 619, titulo: "utensílios",  item: "jogo de porta tempeiros", img:"images/616-porta-temepros.jpg" },
    { id: 620, titulo: "utensílios",  item: "escorredor de louça", img:"images/escorredor-de-louça.jpg" },
    { id: 621, titulo: "utensílios",  item: "jogo de potes de vidro", img:"images/pote-de-vidro.avif" },
    { id: 622, titulo: "utensílios",  item: "frutreira", img:"images/fruteira.webp" },
    { id: 623, titulo: "utensílios",  item: "escorredor de macarrão", img:"images/escorredor-de-macarrão.jpg" },
    { id: 624, titulo: "utensílios",  item: "jogo de jarra de suco" , img:"images/jogo-garra-agua.jpeg" },
    { id: 625, titulo: "utensílios",  item: "saladeira", img:"images/saladeira.webp" },
    { id: 626, titulo: "utensílios",  item: "jogo de garrafa de água", img:"images/jogo-garra-agua.jpeg" },
    { id: 627, titulo: "utensílios",  item: "kit de medidor", img:"images/medidor.jpg" },
    { id: 628, titulo: "utensílios",  item: "kit de frigideiras antiaderente", img:"images/frigideira.jpeg" },
    { id: 629, titulo: "utensílios",  item: "cuzcuzeira", img:"images/cuscuzeira.jpeg" },
    { id: 631, titulo: "utensílios",  item: "mini processador", img:"images/mini-processador.jpg" },
    { id: 632, titulo: "utensílios",  item: "descascador e ralador", img:"images/descascador.webp" },
    { id: 633, titulo: "utensílios",  item: "rolo de massa", img:"images/rolo.jpg" },
];

const presentes = [sala, quarto, banheiro, lavanderia, eletrodomesticos, utensilios];
// const Topico1 = [
//     { id: 101, titulo: "sala", item: "item", img:"image/cortinas-blackout.webp" },
//     { id: 102, titulo: "sala", item: "item", img:"images/almofadas.jpg" },
//     { id: 103, titulo: "sala", item: "item", img:"images/tapete para a sala.jpeg" },
// ];

// const Topico2 = [
//     { id: 201 ,titulo: "quarto" , item: "item", img:"images/edredom.webp" },
//     { id: 202 ,titulo: "quarto" , item: "item", img:"images/cobre-leito.webp" },
//     { id: 203 ,titulo: "quarto" , item: "item", img:"images/jogo_de_cama.webp" },
//     { id: 204 ,titulo: "quarto" , item: "item", img:"images/jogo-de-travesseiro.webp" },
//     { id: 205 ,titulo: "quarto" , item: "item", img:"images/jogo-de virou.webp" },
//     { id: 206 ,titulo: "quarto" , item: "item", img:"images/cortinas-blackout.webp" },
//     { id: 207 ,titulo: "quarto" , item: "item", img:"images/cobertor-manta.webp" },
// ];

// const Topico3 = [
//     { id: 301,titulo: "banheiro" , item: "item", img:"images/jogo-de-tapete.jpeg" },
//     { id: 302,titulo: "banheiro" , item: "item", img:"images/toalha de banho.webp" },
//     { id: 303,titulo: "banheiro" , item: "item", img:"images/kit-lavabo.webp" },
//     { id: 304,titulo: "banheiro" , item: "item", img:"images/toalha-de-rosto.jpeg" },
// ];

// const Topico4 = [
//     { id: 401,  titulo: "lavanderia" , item: "item", img:"images/cesto-de-roupa.webp"  },
//     { id: 402,  titulo: "lavanderia" , item: "item", img:"images/varal-de-roupas.webp"  },
//     { id: 403,  titulo: "lavanderia" , item: "item", img:"images/tabua-de-passar.jpg"  },
//     { id: 404,  titulo: "lavanderia" , item: "item", img:"images/ferro-de-passar.jpg"  },
//     { id: 405,  titulo: "lavanderia" , item: "item", img:"images/rodo-mop.webp"  },
//     { id: 406,  titulo: "lavanderia" , item: "item", img:"images/porta-sabao.jpeg"  },
//     { id: 407,  titulo: "lavanderia" , item: "item", img:"images/bacia.jpeg"  },
//     { id: 408, titulo: "lavanderia" ,  item: "item", img:"images/tapete-lavanderia.webp"  },
// ];

// const Topico5 = [
//     { id: 501, titulo: "eletrodomesticos", item: "item", img:"images/liquidificador.webp"  },
//     { id: 502, titulo: "eletrodomesticos", item: "item", img:"images/processador.jpg"  },
//     { id: 503, titulo: "eletrodomesticos", item: "item", img:"images/batedeira.jpg"  },
//     { id: 504, titulo: "eletrodomesticos", item: "item", img:"images/sanduicheira.webp"  },
//     { id: 505, titulo: "eletrodomesticos", item: "item", img:"images/panela-de-arroz.jpeg"  },
//     { id: 506, titulo: "eletrodomesticos", item: "item", img:"images/chaleira.jpg"  },
// ];

// const  Topico6 = [
//     { id: 601,  titulo: "utensilios", item: "item", img:"images/panela-de-pressão.jpeg" },
//     { id: 602,  titulo: "utensilios", item: "item", img:"images/copos-de-vidro.webp" },
//     { id: 603,  titulo: "utensilios", item: "item", img:"images/taças.webp" },
//     { id: 604,  titulo: "utensilios", item: "item", img:"images/jogo-de-sobremesa.jpeg" },
//     { id: 605,  titulo: "utensilios", item: "item", img:"images/jogo-de-xicaras.webp" },
//     { id: 606,  titulo: "utensilios", item: "item", img:"images/marinex.webp" },
//     { id: 607,  titulo: "utensilios", item: "item", img:"images/jogo-de-travessa.webp" },
//     { id: 608,  titulo: "utensilios", item: "item", img:"images/forma-de-bolo.jpeg" },
//     { id: 609,  titulo: "utensilios", item: "item", img:"images/jogo-de-talher.webp" },
//     { id: 610, titulo: "utensilios",  item: "item", img:"images/jogo-de-faca.webp" },
//     { id: 611, titulo: "utensilios",  item: "item", img:"images/jogo-americano.webp" },
//     { id: 612, titulo: "utensilios",  item: "item", img:"images/jogo-de-aparelho-de-jantar.jpg" },
//     { id: 613, titulo: "utensilios",  item: "item", img:"images/panelas-antiaderente.jpg" },
//     { id: 614, titulo: "utensilios",  item: "item",img:"images/colher-de-silicone.webp" },
//     { id: 615, titulo: "utensilios",  item: "item", img:"images/kit-concha.jpg" },
//     { id: 616, titulo: "utensilios",  item: "item", img:"images/pote-mantimentos.jpeg" },
//     { id: 617, titulo: "utensilios",  item: "item", img:"images/toalha de mesa.webp" },
//     { id: 618, titulo: "utensilios",  item: "item", img:"images/pano-de-prato.jpg" },
//     { id: 619, titulo: "utensilios",  item: "item", img:"images/616-porta-temepros.jpg" },
//     { id: 620, titulo: "utensilios",  item: "item", img:"images/escorredor-de-louça.jpg" },
//     { id: 621, titulo: "utensilios",  item: "item", img:"images/pote-de-vidro.avif" },
//     { id: 622, titulo: "utensilios",  item: "item", img:"images/fruteira.webp" },
//     { id: 623, titulo: "utensilios",  item: "item", img:"images/escorredor-de-macarrão.jpg" },
//     { id: 624, titulo: "utensilios",  item: "item", img:"images/jogo-garra-agua.jpeg" },
//     { id: 625, titulo: "utensilios",  item: "item", img:"images/saladeira.webp" },
//     { id: 626, titulo: "utensilios",  item: "item", img:"images/jogo-garra-agua.jpeg" },
//     { id: 627, titulo: "utensilios",  item: "item", img:"images/medidor.jpg" },
//     { id: 628, titulo: "utensilios",  item: "item", img:"images/frigideira.jpeg" },
//     { id: 629, titulo: "utensilios",  item: "item", img:"images/cuscuzeira.jpeg" },
//     { id: 631, titulo: "utensilios",  item: "item", img:"images/mini-processador.jpg" },
//     { id: 632, titulo: "utensilios",  item: "item", img:"images/descascador.webp" },
//     { id: 633, titulo: "utensilios",  item: "item", img:"images/rolo.jpg" },
// ];

// const presentes = [Topico1,Topico2,Topico3,Topico4,Topico5,Topico6];
