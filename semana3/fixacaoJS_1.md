function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  salarioFixo = 2000
  comissao = (0.05 * valorTotalVendas) + (100 * qtdeCarrosVendidos)
  salarioDoMes = salarioFixo + comissao
  return salarioDoMes
}