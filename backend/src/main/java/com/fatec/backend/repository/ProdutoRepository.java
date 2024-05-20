package com.fatec.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.Query;
import com.fatec.backend.entity.ProdutoEntity;

@Repository
public interface ProdutoRepository extends JpaRepository<ProdutoEntity, Integer> {
    public ProdutoEntity findById(long id);

    @Query(value = "select * from produto where nome_produto like CONCAT('%',?1,'%')", nativeQuery = true)
    Optional<List<ProdutoEntity>> findByDesc(String desc);
}
