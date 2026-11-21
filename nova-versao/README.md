# Calculadora de Frete — Nova Versão

Esta é a fundação independente da nova experiência de gestão. O aplicativo publicado na raiz do repositório e a branch `main` permanecem preservados.

## Executar localmente
1. Instale Node.js 22 ou superior.
2. Entre nesta pasta: `cd nova-versao`.
3. Instale as dependências: `npm install`.
4. Inicie: `npm run dev`.
5. Valide a compilação: `npm run build`.

## Estado atual
- Estrutura React + TypeScript + Vite criada.
- Primeira interface de Dashboard responsiva criada com dados zerados e estados vazios.
- Navegação visual inicial preparada.
- Backend e autenticação ainda não conectados.
- Não inserir credenciais no código. As variáveis de ambiente serão configuradas quando o projeto Supabase dedicado estiver aprovado e criado.

## Próxima etapa
Criar o projeto Supabase exclusivo, configurar autenticação, organizações e membros, ativar RLS e validar o isolamento entre uma conta autônoma e uma transportadora.
