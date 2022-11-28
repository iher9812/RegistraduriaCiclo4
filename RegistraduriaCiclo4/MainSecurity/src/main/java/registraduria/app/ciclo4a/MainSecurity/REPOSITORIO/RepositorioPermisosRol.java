package registraduria.app.ciclo4a.MainSecurity.REPOSITORIO;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import registraduria.app.ciclo4a.MainSecurity.MODELOS.PermisosRol;

public interface RepositorioPermisosRol extends MongoRepository<PermisosRol,String> {
    @Query("{'rol.$id':ObjectId(?0), 'permiso.$id':ObjectId(?1)}")
    PermisosRol getPermisoRol(String id_rol, String id_permiso);
}
