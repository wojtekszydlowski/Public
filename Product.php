<?php
/**
Napisz obiektowo program, który będzie obsługiwał skanowanie produktów w sklepie.

Stwórz klasę 'Product'. Klasa ta ma posiadać podane atrybuty:
id - liczba całkowita. Powinna być unikalna w całym systemie (jak to osiągnąć będzie wytłumaczone w dalszej części zadania).
name - string. Jest to nazwa danego produktu.
description - string. Jest to opis danego produktu.
price - float. Jest to cena za jeden produkt. Powinna być większa od 0.01.
quantity - liczba całkowita większa od zera.

Klasa powinna mieć też następujące metody:
konstruktor - powinien przyjmować opis, cenę i ilość produktu.
setery dla następujących atrybutów: opisu, nazwy, ceny i ilości. Nie piszemy setera dla identyfikatora produktu - nie chcemy żeby raz stworzony produkt mógł zmienić swoje id.
getery dla wszystkich atrybutów.
metodę getTotalSum która będzie zwracała łączną kwotę za dany produkt (wyliczaną jako ilość * cena produktu.
Generowanie unikalnego id dla produktu:

W dalszej części programu będziemy chcieli identyfikować nasze produkty po ich id. Dlatego musimy zagwarantować że każdy z stworzonych produktów będzie miał unikalny numer identyfikacyjny. W tym celu nasza klasa powinna mieć statyczny prywatny atrybut nextId:

static priveate $nextId = 0;

Atrybut ten będzie trzymał id które zostanie nadane następnemu stworzonemu produktowi. Następnie w konstruktorze klasy musimy wykonać następujące czynności:
właśnie tworzonemu produktowi przypisać id trzymane w statycznym atrybucie nextId,
zwiększyć wartość atrybutu nextId o jeden.

// w konstruktorze
$this->id = self::$nextId;
self::$nextId++;

Dzięki temu żaden z naszych produktów nie będzie miał takiego samego id.
 */


class Product
{
    private $id = 0;
    static private $nextId = 0;
    private $name = "";
    private $description = "";
    private $price = 0.0;
    private $quantity = 1;

    /**
     * Product constructor.
     * @param string $name
     * @param string $description
     * @param float $price
     * @param int $quantity
     */
    public function __construct($name, $description, $price, $quantity)
    {
        $this->id = self::$nextId;
        self::$nextId++;
        $this->name = is_string($name) ? $name : "";
        $this->description = is_string($description) ? $description : "";
        $this->price = (is_numeric($price) && ($price > 0.01)) ? $price : 0.01;
        $this->quantity = (is_integer($quantity) && $quantity > 0) ? $quantity : 1;
    }

    /**
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @param string $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * @param float $price
     */
    public function setPrice($price)
    {
        $this->price = $price;
    }

    /**
     * @param int $quantity
     */
    public function setQuantity($quantity)
    {
        $this->quantity = $quantity;
    }

    /**
     * @return int
     */
    //public static function getId()
    public function getId()
    {
        //return self::$id;
        return $this->id;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @return float
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * @return int
     */
    public function getQuantity()
    {
        return $this->quantity;
    }



    public function getTotalSum()
    {
        return $this->price * $this->quantity;
    }

    static public function getTotalSumWithQuantity($price, $quantity)
    {
        if ($quantity > 2) {return $price * 0.8 * $quantity;} else {return $price * $quantity;}

    }





}

//$product1 = new Product('Zabawka','Zabawka dla dzieci powyżej 7 lat', 20.00, 1);
//var_dump($product1);
//$product2 = new Product('Młotek','Narzędzie do wbijania gwoździ', 19.90, 2);
//var_dump($product2);