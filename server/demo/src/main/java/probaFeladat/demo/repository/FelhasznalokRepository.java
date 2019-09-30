package probaFeladat.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import probaFeladat.demo.domain.Felhasznalok;

@Transactional
@Repository
public interface FelhasznalokRepository extends JpaRepository<Felhasznalok, Long> {
    public void deleteById(Long id);

}
