-- -----------------------------------------------------
-- Schema burger-app
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `burger-app`;

CREATE SCHEMA `burger-app`;
USE `burger-app` ;

-- -----------------------------------------------------
-- Table `burger-app`.`product_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `burger-app`.`product_category` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `burger-app`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `burger-app`.`product` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `sku` VARCHAR(255) DEFAULT NULL,
  `name` VARCHAR(255) DEFAULT NULL,
  `description` VARCHAR(255) DEFAULT NULL,
  `unit_price` DECIMAL(13,2) DEFAULT NULL,
  `image_url` VARCHAR(255) DEFAULT NULL,
  `active` BIT DEFAULT 1,
  `units_in_stock` INT(11) DEFAULT NULL,
   `date_created` DATETIME(6) DEFAULT NULL,
  `last_updated` DATETIME(6) DEFAULT NULL,
  `category_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_category` (`category_id`),
  CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `product_category` (`id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;


-- -----------------------------------------------------
-- Add sample data
-- -----------------------------------------------------

INSERT INTO product_category(category_name) VALUES ('Burger');

INSERT INTO product_category(category_name) VALUES ('Pizza');

INSERT INTO product_category(category_name) VALUES ('Shwarma');

INSERT INTO product_category(category_name) VALUES ('Pie');

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('BURGER1000', 'The Original Burger', 'OursBurgers, The Original Classic',
'assets/images/products/small_slider_bg.jpg'
,1,100,19.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('BURGER1001', 'The Original Burger', 'OursBurgers, The Original Classic',
'assets/images/products/small_slider_bg.jpg'
,1,100,19.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('BURGER1002', 'The Original Burger', 'OursBurgers, The Original Classic',
'assets/images/products/small_slider_bg.jpg'
,1,100,19.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('BURGER1003', 'The Original Burger', 'OursBurgers, The Original Classic',
'assets/images/products/small_slider_bg.jpg'
,1,100,19.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('BURGER1004', 'The Original Burger', 'OursBurgers, The Original Classic',
'assets/images/products/small_slider_bg.jpg'
,1,100,19.99,1, NOW());
