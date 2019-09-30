package probaFeladat.demo.domain;

import javax.persistence.*;

@Entity
@Table(name = "felhasznalok")
public class Felhasznalok {

    @Id
    @SequenceGenerator(name="felhasznalokSeqGenerator", initialValue = 1, allocationSize = 1)
    @GeneratedValue(generator = "felhasznalokSeqGenerator", strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private Long id;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "deleted")
    private boolean deleted;

    public Felhasznalok(Long id, String firstName, String lastName, boolean deleted) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.deleted = deleted;
    }

    public Felhasznalok(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.deleted = false;
    }

    public Felhasznalok() {
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
