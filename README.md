# Calculadora de Frete — PWA

Aplicativo instalável para estimar custos, resultado, margem e viabilidade de fretes rodoviários, com conferência de piso mínimo da ANTT conforme os coeficientes cadastrados da Portaria SUROC nº 22/2026.

**Aplicação publicada:** https://jvsnegocioss-prog.github.io/Calculadora-frete/  
**Repositório:** https://github.com/jvsnegocioss-prog/Calculadora-frete

## Funcionalidades

### 1. Dados do frete
- Valor do frete de ida e, quando houver, de retorno.
- Distâncias de ida e retorno.
- Seleção independente dos trechos pagos pelo cliente.
- Tipo de carga e tempo total da viagem.
- O retorno pode gerar custo mesmo quando não há faturamento de volta.

### 2. Custos variáveis
- Consumo médio e preço do diesel.
- ARLA 32.
- Pedágios.
- Manutenção e pneus por quilômetro.
- Alimentação, banho e pernoite.
- Outros custos variáveis da viagem.

Os custos operacionais consideram toda a distância informada (ida e retorno), independentemente de o trecho de volta ser remunerado.

### 3. Custos fixos e metas
- Cadastro mensal de financiamento, seguro, rastreador, taxas provisionadas, remuneração do motorista e outros custos fixos.
- Soma automática das despesas fixas.
- Rateio dos custos fixos conforme os quilômetros mensais informados.
- Configuração de impostos/comissões e margem de lucro desejada.

### 4. Resultados
O aplicativo apresenta faturamento bruto, resultado estimado, custo total, custo por quilômetro, margem, distância total, diesel estimado, resultado por hora e frete mínimo estimado para atingir a margem definida, além do detalhamento dos custos.

Os resultados dependem dos dados preenchidos e são estimativas para apoio à decisão.

## Conferência do piso mínimo da ANTT

A calculadora permite selecionar:
- Conjunto contratado: conjunto completo (cavalo mecânico + semirreboque) ou somente unidade de tração.
- Eixos carregados: 2, 3, 4, 5, 6, 7 ou 9.
- Classificação da operação: convencional ou alto desempenho.
- Categoria da carga.

A tabela é selecionada conforme o conjunto e a classificação da operação:

| Tabela | Contratação | Operação |
|---|---|---|
| A | Conjunto completo | Convencional |
| B | Somente unidade de tração | Convencional |
| C | Conjunto completo | Alto desempenho |
| D | Somente unidade de tração | Alto desempenho |

A conferência é feita separadamente para cada trecho marcado como pago. O aplicativo apresenta o piso estimado da ida e/ou da volta e compara o valor de frete informado com o piso, indicando **Acima do piso**, **Abaixo do piso** ou **No piso**.

A comparação considera valores arredondados a centavos. Quando não existe coeficiente cadastrado para a combinação selecionada de carga, eixos e tabela, o aplicativo informa a indisponibilidade e não substitui o coeficiente por outro de categoria diferente.

**Importante:** a classificação da operação e o enquadramento da carga devem ser confirmados antes da contratação. A ferramenta é auxiliar e não substitui a consulta à norma oficial nem a análise das condições concretas do transporte.

### Referência normativa
Portaria SUROC nº 22/2026 — ANTT:  
https://anttlegis.antt.gov.br/action/ActionDatalegis.php?acao=abrirTextoAto&cod_menu=7804&cod_modulo=161&link=S&numeroAto=00000022&orgao=SUROC/ANTT/MT&seqAto=000&tipo=POR&valorAno=2026

## Backup e restauração dos dados

A aplicação oferece exportação de um arquivo JSON com as configurações, histórico de viagens, cadastro de veículos e despesas avulsas. O arquivo pode ser guardado em outro local e importado posteriormente. A restauração substitui os dados locais atuais e exige confirmação. Recomenda-se gerar um backup atualizado antes de restaurar outro arquivo. O backup contém informações financeiras e operacionais; mantenha-o em local seguro.

## Salvamento e privacidade dos dados

- As configurações são salvas automaticamente no armazenamento local do navegador/aparelho (localStorage).
- Os valores podem ser editados posteriormente no mesmo aparelho e navegador.
- Os dados não são sincronizados entre dispositivos nem enviados para uma conta.
- Limpar os dados do site ou do navegador pode apagar as configurações salvas. Recomenda-se manter um registro externo dos valores importantes.

## Instalação e funcionamento

O projeto é uma Progressive Web App (PWA), com manifesto e Service Worker para cache dos arquivos principais. Em navegadores compatíveis, pode ser instalado na tela inicial. O funcionamento offline depende de os arquivos já terem sido carregados e armazenados em cache e das limitações do navegador.

## Arquivos do projeto

- index.html: interface, campos e cálculos.
- manifest.webmanifest: identificação e configuração de instalação da PWA.
- sw.js: cache e estratégia básica de funcionamento offline.
- icon-192.png e icon-512.png: ícones da aplicação.

O rodapé da interface identifica a versão funcional como **1.0**. O Service Worker utiliza o identificador de cache **calculadora-frete-v25-backup-restauracao**; esse identificador controla a atualização do cache.

## Atualização do projeto

Para atualizar a aplicação, publique os arquivos alterados no repositório existente. Ao alterar arquivos utilizados pelo Service Worker, atualize também o identificador do cache em sw.js, para que os aparelhos recebam a nova versão.

## Limitações

- Os coeficientes disponíveis dependem das combinações efetivamente cadastradas no código. Nem toda combinação de categoria, eixos e tabela necessariamente possui coeficiente.
- A calculadora não valida automaticamente documentos, características da carga, contratação ou enquadramento jurídico da operação.
- O resultado financeiro depende da precisão e da atualização dos custos informados pelo usuário.
- O armazenamento local não oferece sincronização nem backup automático.
