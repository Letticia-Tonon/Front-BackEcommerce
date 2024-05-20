package com.fatec.backend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.backend.repository.ClienteRepository;
import com.fatec.backend.entity.ClienteEntity;

@RestController
@CrossOrigin("*")
public class ClienteController {
    @Autowired
    ClienteRepository repository;

    @Autowired
    JavaMailSender mailSender;

    @PostMapping("/api/cliente")
    public ResponseEntity<ClienteEntity> inserir(@RequestBody ClienteEntity obj) {
        try {
            repository.save(obj);
            return ResponseEntity.ok(new ClienteEntity());
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/api/cliente/{id}")
    public ResponseEntity<ClienteEntity> carregar(@PathVariable long id) {
        Optional<ClienteEntity> obj = repository.findById(id);
        if (obj.isPresent())
            return ResponseEntity.ok(obj.get());
        else
            return ResponseEntity.ok(new ClienteEntity());
    }

    @PostMapping("/api/cliente/login")
    public ResponseEntity<ClienteEntity> fazerLogin(@RequestBody ClienteEntity obj) {
        Optional<ClienteEntity> retorno = repository.fazerLogin(obj.getEmail(), obj.getSenha());
        if (retorno.isPresent()) {
            return ResponseEntity.ok(retorno.get());
        } else {
            return ResponseEntity.ok(new ClienteEntity());
        }
    }

    @PostMapping("/api/cliente/esqueci-senha")
    public ResponseEntity<ClienteEntity> enviarEmailRecuperacao(@RequestBody String email) {
        Optional<ClienteEntity> retorno = repository.enviarEmailRecuperacao(email);

        if (retorno.isPresent()) {
            return ResponseEntity.ok(retorno.get());
        } else {
            return ResponseEntity.ok(new ClienteEntity());
        }
    }

    @PostMapping("/api/cliente/recuperar/{email}")
    public ResponseEntity<String> faleConosco(@PathVariable String email, @RequestBody String email2) {
        SimpleMailMessage novoEmail = new SimpleMailMessage();

        String senha = Long.toString(System.currentTimeMillis());

        Optional<ClienteEntity> cliente = repository.findByEmail(email);
        if (!cliente.isPresent()) {
            return ResponseEntity.badRequest().body("Email não encontrado");
        }
        ClienteEntity att = cliente.get();
        repository.deleteAllByEmail(att.getEmail());
        att.setSenha(senha);
        repository.save(att);
        try {
        } catch (Exception err) {
            return ResponseEntity.badRequest().body("Ocorreu um erro ao atualizar a senha: " + err.getMessage());
        }

        novoEmail.setSubject("Recuperar Senha");
        novoEmail.setText("Sua nova senha é: " + senha);
        novoEmail.setFrom("cavalolivre2000@gmail.com");
        novoEmail.setTo(email);
        try {
            mailSender.send(novoEmail);
            return ResponseEntity.ok("email enviado com sucesso");
        } catch (Exception err) {
            return ResponseEntity.ok("Ocorreu um erro no envio do email: " + err.getMessage());
        }
    }

}
