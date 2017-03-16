<?php
/**
Napisz klasę ShoppingCart. Klasa ta ma posiadać podane atrybuty:

products - tablica z obiektami klasy Product.

Klasa powinna mieć też następujące metody:

addProduct(product $newProduct) - metoda ta powinna dodawać nowy produkt do tablicy z produktami. Kluczem produktu powinno być jego id (dzięki temu będziemy mogli łatwo znaleźć produkt w naszym koszyku).
removeProduct($productId) - metoda ta powinna usuwać produkt z koszyka. Jeśli taki produkt nie był wcześniej zeskanowany, to ma nic nie robić.
changeProductQuantity($productId, $newQuantity) - metoda ta powinna zmieniać ilość danego produktu w koszyku. Jeśli taki produkt nie był wcześniej zeskanowany, to ma nic nie robić.
printRecipt() - metoda drukująca paragon. Na paragonie powinno się znaleźć: lista wszystkich produktów, wraz z ich id, nazwą, ceną, ilością i łączą ceną (pamiętaj że masz do tego dedykowaną metodę w klasie Product) i łączna kwota za wszystkie produkty znajdujące się w koszyku.

 */

require_once ("Product.php");

class ShoppingCart
{
    public $products = [];

    public function addProduct (Product $newProduct)
    {
        $this->products[] = $newProduct;
    }



    public function removeProduct($productId)
    {
        foreach ($this->products as $keyToDelete => $oneLine)
        {
            if ($oneLine->getId() == $productId)
            {
             unset($this->products[$keyToDelete]);
            }
        }

    }

    public function changeProductQuantity($productId, $newQuantity)
    {

        foreach ($this->products as $oneLine)
        {
            if ($oneLine->getId() == $productId)
            {
                $oneLine->setQuantity($newQuantity);
            }
        }


    }

    public function printRecipt()
    {
        echo "<table border=1><tr>";
        echo "<td>ID</td>";
        echo "<td>Name</td>";
        echo "<td>Description</td>";
        echo "<td>Price per item</td>";
        echo "<td>Quantity</td>";
        echo "<td>Total price</td>";
        echo "</tr>";
        $totalAmountToPay = 0;
        foreach ($this->products as $oneLine) {
            echo "<tr>";

            echo "<td>" . $oneLine->getId() . "</td>";
            echo "<td>" . $oneLine->getName() . "</td>";
            echo "<td>" . $oneLine->getDescription() . "</td>";
            echo "<td>" . number_format($oneLine->getPrice(), 2, ',', ' ') . "</td>";
            echo "<td>" . $oneLine->getQuantity() . "</td>";
            $totalAmountToPay += Product::getTotalSumWithQuantity($oneLine->getPrice(),$oneLine->getQuantity());
            echo "<td>" . number_format(Product::getTotalSumWithQuantity($oneLine->getPrice(),$oneLine->getQuantity()), 2, ',', ' ') . "</td>";

            echo "</tr>";
        }

        echo "<tr><td></td><td></td><td></td><td></td>";
        echo "<td><strong>Total:</strong></td>";
        echo "<td>";

        echo "<strong>" . number_format($totalAmountToPay, 2, ',', ' ') ."</strong>";

        echo "</td>";
        echo "</tr>";

        echo "</table>";
    }


}


$product1 = new Product('Zabawka','Zabawka dla dzieci powyżej 7 lat', 20.00, 1);
var_dump($product1);
$product2 = new Product('Młotek','Narzędzie do wbijania gwoździ', 19.90, 2);
var_dump($product2);
$product3 = new Product('Śrubokręt','Narzędzie do wkręcania śrub', 11.20, 1);
var_dump($product3);
$product4 = new Product('Śrubokręt','Narzędzie do wkręcania śrub', 31.20, 1);
var_dump($product4);
$product5 = new Product('Wiertarka','Narzędzie do wiercenia', 311.70, 1);
var_dump($product5);


$cartWithProducts = new ShoppingCart();
$cartWithProducts->addProduct($product3);
$cartWithProducts->addProduct($product1);
$cartWithProducts->addProduct($product4);
$cartWithProducts->addProduct($product2);
$cartWithProducts->addProduct($product5);


$cartWithProducts->printRecipt();
$cartWithProducts->removeProduct(1);
$cartWithProducts->changeProductQuantity(2, 3);
$cartWithProducts->changeProductQuantity(0, 2);
$cartWithProducts->printRecipt();

