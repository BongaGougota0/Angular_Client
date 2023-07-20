package za.co.unnamed.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Table(name = "product_category")
@Entity
public class ProductCategory
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private Integer categoryId;

    @Column(name = "category_name")
    private String categoryName;
}
