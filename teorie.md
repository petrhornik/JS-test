# Část otázek

## Jaké jsou datové typy v Javascriptu?
string = textový řeťezec

number = číselná hodnota v 64bit floating pointu

boolean = rozhodovací true/false

undefined = pokud použita v prom. tak prom. nic neobsahuje

object = pro komplexní data, obsahuje více dat které si můžeme poté "volat"

null = definuje že objekt v prom. je nic. není nastaven pointer, ani hodnota jako taková

## Jaký je rozdíl v porovnání pomocí `!=` a `!==`?

!= -> porovnávané hodnoty si nejsou rovny, ale nezáleží na jejich typu

!== -> porovnávané hodnoty si nejsou rovny nebo jsou každá jiného typu

## Kde se používá klíčové slovo `const`?

const = pro definování proměnných které jsou pevně dané a nedají se v průběhu programu měnit

## Jak se používá a k čemu slouží funkce `map()` nad polem (array)?

= mapa může vzít původní array a vytvořit z něj nový s tím že na jednotlivé prvky může uplatnit nějakou fci. co položky upraví

## Jaké jsou rozdíli mezi polem (array) a Map kolekcí?


array = nějaký list/pole hodnot(list obsahující hodnoty různých typů), k jednotlivým položkám přistupujeme pomocí indexace [index]
        - obsahuje různé hodnoty se kterými lze dále manipulovat

map = list klíčových hodnot a a prvků k nim přiřazewným, pokud si zavoláme klíčové slovo z mapy tak se místo něj vypíše klíčová hodnota
    - např.: můžeme vytvořit cenník jídel - po zadání názvu jídla se vypíše cena