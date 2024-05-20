package com.fatec.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.backend.entity.PedidoEntity;
import com.fatec.backend.repository.PedidoRepository;

@RestController
@CrossOrigin("*")
public class PedidoController {
    @Autowired
    PedidoRepository repository;
    
    @PostMapping("/api/pedido")
    public ResponseEntity<PedidoEntity> inserir(@RequestBody PedidoEntity obj) {
        try {
            repository.save(obj);
            return ResponseEntity.ok(new PedidoEntity());
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

}

    // @PutMapping("/api/pedido")
    // public ResponseEntity<String>
    // alterar(@RequestBody PedidoEntity obj){
    // String mensagem = "pedido atualizado";
    // return ResponseEntity.ok(mensagem);
    // }
    // @GetMapping("/api/pedido/{id}")
    // public ResponseEntity<PedidoEntity>
    // carregar(@PathVariable int id){
    // PedidoEntity obj = new PedidoEntity();
    // return ResponseEntity.ok(obj);
    // }
    // @GetMapping("/api/pedido/lista/{cliente}")
    // public ResponseEntity<List<PedidoEntity>>
    // lista(@PathVariable int cliente){
    // List<PedidoEntity> lista = new ArrayList<PedidoEntity>();
    // return ResponseEntity.ok(lista);
    // }
    // @DeleteMapping("/api/pedido/{id}")
    // public ResponseEntity<String> remover(@PathVariable int id){
    // String mensagem = "pedido removido!";
    // return ResponseEntity.ok(mensagem);
    // }

