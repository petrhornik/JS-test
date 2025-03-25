// oblast definice funkcí

// 1) Funkce co vrací string, který odpovídá slovu (jsou oddělena mezerou) ze stringInput na pozici dané wordIndex (od 1), pokud index není vyplněn pracuje se s prvním slovem, vrácené slovo bude pouze malými písmeny, pokud slovo na dané pozici neexistuje, vrátí se prázdný string
// například pro "My Cat Is Yellow?" a 3 bude výsledek "is"
function lowercaseWord(stringInput, wordIndex) {
  const slova = stringInput.split(" "); //string rozdělí na slova dle mezer
  return slova[2].toLowerCase(); //2 slovo se převede na lowwercase
}

// 2) Funkce co přijme testScore, a vrátí odpovídající známku podle následující tabulky:
// 0-64 -> F, 65-78 -> E, 79-86 -> D, 87-92 -> C, 93-98 -> B, 99-100 -> A, pokud je testScore mimo rozsah 0-100, nebo nevalidní hodnota funkce vrátí "INVALID SCORE"
// například pro 75 bude výsledek "E"
function transformScoreToGrade(testScore) {
  switch(testScore) {
    case 0-64:
      return "F";
      break;
    case 65-78:
      return "E";
      break;
    case 79-86:
      return "D";
      break;
    case 87-92:
      return "C";
      break;
    case 93-98:
      return "B";
      break;
    case 99-100:
      return "A";
      break;
    default:
      return "INVALID SCORE";
      break
  }
}

// 3) Funkce na výpočet factorialu, pomocí cyklu, vstupem je factorialNumber, výstupem bude výsledek faktoriálu
// nevalidní vstupem je záporné číslo, nebo nečíslo, v takovém případě funkce vrátí undefined
// faktoriál je součin všech kladných celých čísel menších nebo rovných zadanému číslu; pozor faktoriál čísla 0 je 1
// například pro 5 bude výsledek 120; vzorec: 5! = 5 * 4 * 3 * 2 * 1 = 120
function factorial(factorialNumber) {
  if (typeof factorialNumber !== "number" || factorialNumber < 0) { //pokud je factorialNumber nečíslo nebo záporné číslo tak se vrátí undefined
    return undefined
  }
  else{
    let i = factorialNumber;
  let vysledek = 1;
  while (i > 0) {   //dokud je i větší než 0 opakuj
    vysledek = vysledek * i;
    i--;  //inkcementace i
  }
  return vysledek;
  }
} 
// oblast volání funkcí

// 1)
const result1 = lowercaseWord("My Cat Is Yellow?", 3);
console.log(result1);

// 2)
const result2 = transformScoreToGrade(75);
console.log(result2);

// 3)
const result3 = factorial(5);
console.log(result3);

// do kódu níže nezasahujte

module.exports = {
  variant: "2A",
  lowercaseWord,
  transformScoreToGrade,
  factorial,
};
