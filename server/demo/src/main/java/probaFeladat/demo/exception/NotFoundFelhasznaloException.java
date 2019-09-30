package probaFeladat.demo.exception;

public class NotFoundFelhasznaloException extends RuntimeException {
    public NotFoundFelhasznaloException (Long id) {
        super ("Nem található az alábbi felhasználó" + id);
    }
}
