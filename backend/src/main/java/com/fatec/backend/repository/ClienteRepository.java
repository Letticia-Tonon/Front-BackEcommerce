package com.fatec.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fatec.backend.entity.ClienteEntity;

import jakarta.transaction.Transactional;

public interface ClienteRepository
        extends JpaRepository<ClienteEntity, Integer>,
        JpaSpecificationExecutor<ClienteEntity> {

    Optional<ClienteEntity> findById(long id);

    @Query(value = "select * from cliente where email=?1 and senha=?2", nativeQuery = true)
    Optional<ClienteEntity> fazerLogin(String email, String senha);

    @Query(value = "select * from cliente where email=?1 ", nativeQuery = true)
    Optional<ClienteEntity> findByEmail(@Param("email") String email);

    @Query(value = "select * from cliente where email=?1", nativeQuery = true)
    Optional<ClienteEntity> enviarEmailRecuperacao(String email);

    @Transactional
    public void deleteAllByEmail(String email);
}
