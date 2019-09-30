package probaFeladat.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import probaFeladat.demo.domain.Felhasznalok;
import probaFeladat.demo.service.FelhasznalokService;

import java.util.List;

@RestController
@RequestMapping(path = "felhasznalok")
public class FelhasznalokController {

    @Autowired
    private FelhasznalokService felhasznalokService;

    @PostMapping("/add")
    public ResponseEntity<Felhasznalok> addFelhasznalo(@RequestBody Felhasznalok felhasznalok) {
        return ResponseEntity.ok(felhasznalokService.save(felhasznalok));
    }

    @PutMapping("/update")
    public ResponseEntity<Felhasznalok> updateFelhasznalo(@RequestBody Felhasznalok felhasznalok) {
        return ResponseEntity.ok(felhasznalokService.save(felhasznalok));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteFelhasznalo(@PathVariable Long id) {
        felhasznalokService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/list-felhasznalok")
    public ResponseEntity<List<Felhasznalok>> listFelhasznalok() {
        return ResponseEntity.ok(felhasznalokService.listFelhasznalok());
    }
 }
