function calculaPrecoTotal(quantidade) {
  if (quantidade >= 12){
    custoTotal = quantidade * 1.00
  } else {
    custoTotal = quantidade * 1.30
  }
  return custoTotal
}