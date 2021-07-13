/**
 * Script à lancer avec `node` dans un terminal,
 * en utilisant deux arguments :
 *   - le fichier de la liste des nombres (par ex. "subject1.txt")
 *   - le nombre "k" (la cible du check)
 *
 * Exemple :
 *
 *     node project/exo1.js subject1.txt 17
 *
 */
 const data = require('./parseData');
 const target = Number(process.argv[3]);
 let comparisons = 0;
 
 if (!target) {
     throw new Error('Please provide a valid target number.')
 }
 
 const exo1 = (numbers, resultTarget) => {
     return numbers.some((value1, index1) => {
         return numbers.some((value2, index2) => {
             if (index2 === index1) {
                 return false;
             }
             comparisons += 1;
             return ((value1 + value2) === resultTarget);
         });
     });
 }
 
 const result = exo1(data, target);
 console.log(result, `(${comparisons} comparisons)`);