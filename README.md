# Calculadora de Frete — PWA v0.2

## Arquivos
- `index.html`: tela responsiva e cálculos da primeira versão.
- `manifest.webmanifest`: configura o site como instalável.
- `sw.js`: cache básico para abrir a interface offline depois do primeiro acesso.
- `icon-192.png` e `icon-512.png`: ícones do PWA.

## Como testar
1. Publique estes arquivos em um host com HTTPS (por exemplo, GitHub Pages).
2. Abra o endereço no navegador do celular.
3. No iPhone, use Compartilhar > Adicionar à Tela de Início. No Android, use o menu do navegador > Instalar app/Adicionar à tela inicial.
4. Faça uma simulação e confira os custos inseridos.

## Limitações desta versão
- A conferência da ANTT ainda não está automatizada. O aplicativo não afirma que um frete está legalmente conforme a tabela.
- O valor de “frete mínimo para sua meta” é uma estimativa matemática a partir dos custos informados e da meta de margem.
- Pedágios, distância, consumo, tributos e custos devem ser conferidos pelo usuário.
- O modo offline depende do primeiro carregamento bem-sucedido e do suporte do navegador.

## Fórmulas principais
- Distância total = ida + retorno.
- Litros estimados = distância total / consumo médio (km/L).
- Custo de combustível = litros estimados × preço do diesel.
- Custo fixo da viagem = custos fixos mensais / km mensais × distância total.
- Custo total estimado = custos variáveis + custos fixos proporcionais + impostos/comissões sobre o frete.
- Resultado estimado = frete de ida + frete de retorno − custo total estimado.


## Versão 0.2
- Adicionado o indicador de faturamento bruto total (frete de ida + frete de retorno).
- Resumo compartilhado agora discrimina faturamento, frete de ida e frete de retorno.
- Cache do service worker atualizado para carregar a nova versão.
