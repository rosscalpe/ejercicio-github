let estoEsGit = (number) => number + 1;
function aumentando (n1, callback){
    return n1 + callback (n1);
}
aumentando (1, estoEsGit);
console.log (aumentando (1, estoEsGit));