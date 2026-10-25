# Calculadora de Frete — PWA v0.4

## Arquivos
- `index.html`: interface responsiva, custos mensais detalhados e cálculos.
- `manifest.webmanifest`: configuração de instalação como PWA.
- `sw.js`: cache offline com versão atualizado.
- `icon-192.png` e `icon-512.png`: ícones do PWA.

## Novidades da versão 0.4
- Cadastro separado de financiamento, seguro, rastreador, taxas anuais provisionadas, remuneração do motorista e outros custos fixos.
- Soma automática dos custos fixos mensais e rateio por quilômetro.
- Salvamento automático no armazenamento local do navegador/aparelho (`localStorage`). Os dados podem ser editados a qualquer momento.
- Botão para apagar os dados salvos e restaurar valores de exemplo.
- O salvamento é local: não sincroniza entre dispositivos nem substitui backup.

## Como atualizar
Publique os arquivos deste pacote no repositório existente, substituindo os arquivos com o mesmo nome. Não é necessário criar outro repositório.

## Limitações
- A conferência automática dos coeficientes oficiais da ANTT ainda não está implementada.
- Resultados são estimativas e dependem da precisão dos valores informados.
- O armazenamento local depende das configurações do navegador; limpar os dados do site pode apagar as configurações salvas.
