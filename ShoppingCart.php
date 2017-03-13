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
        $this->products[] = array("productId" => $newProduct->getId(), "name" => $newProduct->getName(), "description" => $newProduct->getDescription(), "price" => $newProduct->getPrice(), "quantity" => 1, "totalPrice" => Product::getTotalSumWithQuantity($newProduct->getPrice(),1));

    }



    public function removeProduct($productId)
    {
        foreach ($this->products as $keyToDelete => $oneLine)
        {
            foreach ($oneLine as $key => $element)
            {
             if ($key == 'productId' && $element == $productId)  unset($this->products[$keyToDelete]); //usuwa z tablicy produkt
            }
        }

    }

    public function changeProductQuantity($productId, $newQuantity)
    {

        foreach ($this->products as &$item)  //Ważne - trzeba zastosować referencję
        {
            if ($item['productId'] == $productId)
            {
                $item['quantity'] = $newQuantity;
                $item['totalPrice'] = $newQuantity * $item['price'];

                $item['totalPrice'] = Product::getTotalSumWithQuantity($item['price'],$newQuantity);

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
        foreach ($this->products as $oneLine) {
            echo "<tr>";
            //Można zastsować takie rozwiązanie, tylko tu byłby bez formatowania liczb za pomocą funkcji number_format:
               /*
                *
                foreach ($oneLine as $element) {
                echo "<td>";
                echo $element;
                echo "</td>";
               }
               */

            echo "<td>" . $oneLine['productId'] . "</td>";
            echo "<td>" . $oneLine['name'] . "</td>";
            echo "<td>" . $oneLine['description'] . "</td>";
            echo "<td>" . number_format($oneLine['price'], 2, ',', ' ') . "</td>";
            echo "<td>" . $oneLine['quantity'] . "</td>";
            echo "<td>" . number_format($oneLine['totalPrice'], 2, ',', ' ') . "</td>";

            echo "</tr>";
        }

        echo "<tr><td></td><td></td><td></td><td></td>";
        echo "<td><strong>Total:</strong></td>";
        echo "<td>";
        $totalAmountToPay = 0;
        foreach ($this->products as $item)
        {
            $totalAmountToPay +=    $item['totalPrice'];
        }
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


$cartWithProducts = new ShoppingCart();
$cartWithProducts->addProduct($product3);
$cartWithProducts->addProduct($product1);
$cartWithProducts->addProduct($product2);


$cartWithProducts->printRecipt();
$cartWithProducts->removeProduct(1);
$cartWithProducts->changeProductQuantity(2, 3);
$cartWithProducts->changeProductQuantity(0, 2);
$cartWithProducts->printRecipt();

