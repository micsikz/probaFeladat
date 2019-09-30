package probaFeladat.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import probaFeladat.demo.domain.Felhasznalok;
import probaFeladat.demo.exception.NotFoundFelhasznaloException;
import probaFeladat.demo.repository.FelhasznalokRepository;

import java.util.List;

@Service
@Transactional
public class FelhasznalokService {

    @Autowired
    private FelhasznalokRepository felhasznalokRepository;

    public Felhasznalok save(Felhasznalok felhasznalok) {
        return felhasznalokRepository.save(felhasznalok);
    }

    public void delete (Long id) {
        try {
            felhasznalokRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new NotFoundFelhasznaloException(id);
        }
    }

    public List<Felhasznalok> listFelhasznalok() {
        return felhasznalokRepository.findAll();
    }

    public Felhasznalok getOne(Long id) {
        if (felhasznalokRepository.findById(id).isPresent()) {
            return felhasznalokRepository.findById(id).get();
        }
        throw new NotFoundFelhasznaloException(id);
    }
}
