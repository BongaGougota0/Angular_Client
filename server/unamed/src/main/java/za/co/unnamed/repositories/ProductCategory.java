package za.co.unnamed.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
public interface ProductCategory extends JpaRepository<za.co.unnamed.models.ProductCategory, Integer> {
}
