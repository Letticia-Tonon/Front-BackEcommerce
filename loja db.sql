drop database loja;
create database loja;
use loja; 
     
insert into produto ( nome_produto, descricao_curta, descricao_longa, preco, link_foto)  values ('Creme Demaquilante','Cleansing Balm 100g','O Cleansing Balm é um demaquilante em creme com textura bálsamo que trata a pele, possui ativos antioxidantes e hidratantes. Ele demaquila e limpa profundamente sem ressecar a pele ou deixá-la oleosa.','79.00','https://oceane.vtexassets.com/arquivos/ids/197103-1600-1600?v=637680894272930000&width=1600&height=1600&aspect=true');
insert into produto ( nome_produto, descricao_curta, descricao_longa, preco, link_foto)  values ('Gel de Limpeza Facial com Vitamina C','Vitamin C Cleanser 100ml','O Gel de Limpeza Facial com Vitamina C é perfeito para limpar e revigorar a pele, ele forma uma espuma suave com micropartículas que promovem uma esfoliação delicada e confortável, sua fórmula é vegana e cruelty free.','49.00','https://oceane.vtexassets.com/arquivos/ids/203346-1600-1600?v=638258178675530000&width=1600&height=1600&aspect=true');
insert into produto ( nome_produto, descricao_curta, descricao_longa, preco, link_foto)  values ('Bruma Hidratante','Hydrating Face Mist 100ml','A Bruma Hidratante Facial Océane é um produto de textura leve e rápida absorção, pode ser usado por todos os tipos de pele. A Hydrating Face Mist possui Ácido Hialurônico e Esqualano, hidrata, tonifica e refresca a pele.','64.00','https://oceane.vtexassets.com/arquivos/ids/197098-1600-1600?v=638260637649500000&width=1600&height=1600&aspect=true');
insert into produto ( nome_produto, descricao_curta, descricao_longa, preco, link_foto)  values ('Sérum Facial de Retinol e Niacinamida','Retinol + Niacinamide Serum 30 Ml','O Sérum Facial de Retinol e Niacinamida é o aliado perfeito para uma pele mais hidratada e uniforme. Previne e trata linhas finas, hidrata, estimula a renovação celular e a produção de colágeno, além de controlar a oleosidade.','74.00','https://oceane.vtexassets.com/arquivos/ids/200375-1600-1600?v=637969582310000000&width=1600&height=1600&aspect=true');
insert into produto ( nome_produto, descricao_curta, descricao_longa, preco, link_foto)  values ('Sérum Facial de Vitamina C e Ácido Salicílico','Vitamin C + Salicilyc Acid Serum 30ml','O Sérum Facial de Vitamina C e Ácido Salicílico ajuda a suavizar rugas, linhas de expressão e uniformizar a tonalidade, ao clarear manchas e iluminar. Além disso ele ajuda a controlar a oleosidade da pele.','78.00','https://oceane.vtexassets.com/arquivos/ids/200406-1600-1600?v=637969685940670000&width=1600&height=1600&aspect=true');
insert into produto ( nome_produto, descricao_curta, descricao_longa, preco, link_foto)  values ('Tônico Facial com Aloe Vera','Aloe Skin Toner 120ml','O Tônico Facial é formulado com aloe vera, ácido hialurônico e ácido salicílico. Ele refresca, hidrata, limpa e regula o PH da pele, possibilitando uma melhor absorção dos próximos passos da rotina de skincare.','69.00','https://oceane.vtexassets.com/arquivos/ids/203337-1600-1600?v=638258176839330000&width=1600&height=1600&aspect=true');
insert into produto ( nome_produto, descricao_curta, descricao_longa, preco, link_foto)  values ('Hidratante Labial Morango','Lip Balm 15g','O Hidratante Labial Morango Océane oferece uma hidratação potente, é fácil de aplicar e possui uma textura de bálsamo. O Lip Balm tem fórmula cruelty free com óleo de jojoba.','37.50','https://oceane.vtexassets.com/arquivos/ids/195627-1600-1600?v=637608296640100000&width=1600&height=1600&aspect=true');
insert into produto ( nome_produto, descricao_curta, descricao_longa, preco, link_foto)  values ('Esfoliante Facial com Extrato de Bambu','Facial Scrub 100ml','O Esfoliante Facial com Extrato de Bambu promove uma limpeza profunda, auxiliando na renovação celular. Esfolia e hidrata, possui efeito clareador e calmante, O Facial Scrub deixa a pele com um toque de frescor.','42.00','https://oceane.vtexassets.com/arquivos/ids/195303-1600-1600?v=637680875019570000&width=1600&height=1600&aspect=true');

select * from cliente;
select * from produto;
select * from pedido;
