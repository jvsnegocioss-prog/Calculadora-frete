# Nova Calculadora de Frete — Arquitetura Técnica

## Objetivo
Evoluir a Calculadora de Frete para um sistema completo de gestão para caminhoneiro autônomo e transportadora, mantendo o aplicativo atualmente publicado intacto.

## Decisões aprovadas
- Público: caminhoneiro autônomo e transportadora.
- Veículos: veículo individual e gestão de frota.
- Persistência: nuvem, vinculada à conta e à organização.
- Interface: moderna, responsiva e instalável como PWA.

## Stack
- Frontend: React + TypeScript + Vite.
- Interface: componentes responsivos, acessibilidade e design system próprio.
- PWA: instalação em iOS, Android e desktop; cache apenas dos recursos estáticos.
- Backend: Supabase Auth + PostgreSQL + Storage quando necessário.
- Hospedagem: Vercel.
- Repositório: branch isolada nesta fase; a publicação atual continua na branch main.

## Arquitetura funcional
1. Autenticação e onboarding: cadastro, login, recuperação de senha e escolha do perfil operacional.
2. Organizações e permissões: conta individual autônoma ou empresa/transportadora com membros e funções.
3. Dashboard: faturamento, custos, lucro, margem, custo/km, resultado/hora, fretes em aberto e indicadores da frota.
4. Fretes: origem, destino, contratante, modalidade de cobrança (valor fechado, por tonelada ou por km), distância, receita, datas, status de recebimento e documentos.
5. Veículos: cavalo, implementos, configuração, consumo, quilometragem, custos e situação.
6. Motoristas: cadastro, vínculo com veículo, remuneração e histórico de operações.
7. Despesas: fixas mensais e variáveis por viagem, abastecimentos, pedágios, manutenção, pneus, alimentação, seguro, financiamento e outros.
8. Calculadora: simulação antes de aceitar o frete, custos estimados, lucro, margem, custo/km e resultado/hora.
9. ANTT: seleção de tabela, contratação, eixos, categoria e classificação da operação, com coeficientes versionados por vigência.
10. Relatórios: períodos, veículo, motorista, frete, cliente, receitas, despesas e exportação.
11. Configurações: dados da empresa/usuário, parâmetros de custo, preferências e backup/exportação.

## Modelo de acesso multiempresa
- Toda organização possui um tipo: individual_autonomo ou transportadora.
- Um usuário pode pertencer a uma ou mais organizações.
- A tabela organization_members define vínculo e papel (owner, admin, operador, financeiro ou motorista).
- O papel e a autorização ficam no banco, não em user_metadata editável.
- Registros operacionais carregam organization_id.
- Políticas RLS validam a associação ativa do usuário à organização antes de permitir leitura ou alteração.
- Dados de organizações diferentes não podem ser consultados ou alterados entre si.

## Modelo financeiro — sem duplicidade
- Despesas mensais como financiamento, seguro, rastreador e salário fixo são registradas uma vez como custos fixos mensais.
- O custo fixo atribuído à viagem é rateado proporcionalmente à quilometragem: custo mensal / km planejados ou realizados no mês × km da viagem, conforme a metodologia escolhida e exibida.
- Perfil empresa com motorista contratado: remuneração do motorista entra como custo fixo mensal rateado; não se aplica comissão percentual automaticamente.
- Perfil autônomo proprietário-motorista: percentual editável sobre o faturamento bruto do frete entra como custo variável da viagem; o salário fixo de motorista fica fora do cálculo nesse perfil.
- O percentual do motorista não pode ser aplicado sobre lucro ou faturamento líquido.
- O cálculo do frete mínimo deve considerar percentuais sobre o faturamento no denominador, evitando duplicar a remuneração percentual no numerador.
- Cada relatório deve discriminar custos fixos rateados, remuneração do motorista, custos operacionais variáveis e impostos separadamente.

## Modelo de dados inicial
- profiles
- organizations
- organization_members
- vehicles
- trailers
- drivers
- driver_vehicle_assignments
- freight_jobs
- freight_legs
- expenses
- refuelings
- cost_profiles
- monthly_costs
- trip_costs
- antt_tables
- antt_coefficients
- attachments
- audit_events

## Segurança e integridade
- RLS ativada em todas as tabelas expostas.
- Políticas por organização e papel, com validação de pertencimento.
- Chave service_role nunca será incluída no frontend.
- Chave publishable pode ser usada no cliente, sempre protegida por RLS.
- Alterações críticas (pagamentos, exclusões, permissões e parâmetros oficiais) devem ser auditáveis.
- Tabelas ANTT terão fonte oficial, vigência inicial/final, versão e data de conferência.
- Valores monetários serão armazenados em numeric, sem ponto flutuante binário.
- Exclusões de fretes e despesas deverão preservar histórico quando houver dependência financeira.

## Etapas de desenvolvimento
1. Fundação: branch isolada, especificação, scaffold React/Vite/TypeScript e identidade visual base.
2. Backend: projeto Supabase dedicado, Auth, organizações, membros, RLS e primeiro teste de isolamento.
3. Cadastros: perfil, veículos, implementos e motoristas.
4. Financeiro: custos fixos/variáveis, abastecimento e rateios.
5. Fretes e calculadora.
6. ANTT com tabelas versionadas e testes de referência.
7. Dashboard e relatórios.
8. PWA, responsividade, acessibilidade e testes em aparelhos.
9. Homologação, publicação e migração opcional de dados da versão antiga.

## Primeira etapa — limites
Nesta primeira etapa, somente a branch nova e os arquivos de especificação/fundação são alterados. Não alterar a branch main, o aplicativo publicado nem qualquer outro projeto. A criação de um projeto Supabase dedicado será feita depois de confirmar a organização de destino e apresentar eventual custo.
