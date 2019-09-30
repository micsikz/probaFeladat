package probaFeladat.demo.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import probaFeladat.demo.domain.Felhasznalok;
import probaFeladat.demo.repository.FelhasznalokRepository;

@Component
public class DemoStart implements CommandLineRunner {

    @Autowired
    private FelhasznalokRepository felhasznalokRepository;

    @Override
    public void run(String... args) throws Exception {
        Felhasznalok felhasznalo1 = new Felhasznalok("Jakab", "Gipsz");
        Felhasznalok felhasznalo2 = new Felhasznalok("John", "Do");

        felhasznalokRepository.save(felhasznalo1);
        felhasznalokRepository.save(felhasznalo2);
    }
}
