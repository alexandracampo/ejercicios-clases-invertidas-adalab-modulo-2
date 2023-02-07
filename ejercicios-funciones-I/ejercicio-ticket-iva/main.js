function ivaCalc(a) {
    const calcResult = `Precio sin IVA: + ${a} + IVA: 21% y total: + ${a * 1.21}`;
    return calcResult;
}

console.log(ivaCalc(10));