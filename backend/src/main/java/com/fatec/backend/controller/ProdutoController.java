package com.fatec.backend.controller;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.backend.repository.ProdutoRepository;
import com.fatec.backend.entity.ProdutoEntity;

@RestController
@CrossOrigin("*")
public class ProdutoController {
    @Autowired
    private ProdutoRepository repository;

    @PostMapping("/api/produtos")
    public ResponseEntity<String> inserir(@RequestBody ProdutoEntity obj) {
        String mensagem = "produto cadastrado com sucesso";
        return ResponseEntity.ok(mensagem);
    }

    // @PutMapping("/api/produtos")
    // public ResponseEntity<String> alterar(@RequestBody ProdutoEntity obj) {
    // String mensagem = "produto atualizado";
    // return ResponseEntity.ok(mensagem);
    // }

    @GetMapping("/api/produtos/{id}")
    public ResponseEntity<ProdutoEntity> carregar(@PathVariable long id) {
        ProdutoEntity obj = repository.findById(id);
        return ResponseEntity.ok(obj);
    }

    @GetMapping("/api/produtos/desc/{desc}")
    public ResponseEntity<List<ProdutoEntity>> descricao(@PathVariable String desc) {
        Optional<List<ProdutoEntity>> obj = repository.findByDesc(desc);
        if (obj.isPresent()) {
            return ResponseEntity.ok(obj.get());
        }
        return ResponseEntity.badRequest().build();

    }

    @GetMapping("/api/produtos/lista")
    public ResponseEntity<List<ProdutoEntity>> lista() {
        List<ProdutoEntity> lista = repository.findAll();
        return ResponseEntity.ok(lista);
    }

    // @DeleteMapping("/api/produtos/{id}")
    // public ResponseEntity<String> remover(@PathVariable int id) {
    // String mensagem = "produto removido!";
    // return ResponseEntity.ok(mensagem);
    // }
}