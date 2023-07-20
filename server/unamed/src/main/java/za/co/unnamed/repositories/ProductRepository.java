package za.co.unnamed.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import za.co.unnamed.models.Product;


public interface ProductRepository extends JpaRepository<Product, Integer> {
}
