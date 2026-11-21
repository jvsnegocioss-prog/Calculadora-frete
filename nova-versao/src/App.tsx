import { useState } from 'react'
import {
  Activity, ArrowDownRight, ArrowUpRight, BarChart3, Bell, BriefcaseBusiness,
  Calculator, ChevronDown, CircleHelp, Fuel, LayoutDashboard, Menu, Plus,
  Settings2, Truck, Wallet, X
} from 'lucide-react'

const menu = [
  { label: 'Visão geral', icon: LayoutDashboard },
  { label: 'Fretes', icon: BriefcaseBusiness },
  { label: 'Calculadora', icon: Calculator },
  { label: 'Veículos', icon: Truck },
  { label: 'Motoristas', icon: Activity },
  { label: 'Despesas', icon: Wallet },
  { label: 'Relatórios', icon: BarChart3 },
]

function Metric({ label, value, detail, icon: Icon, tone }: {
  label: string; value: string; detail: string; icon: typeof Wallet; tone: string
}) {
  return <article className="metric-card">
    <div className="metric-top"><span className={`metric-icon ${tone}`}><Icon size={19} /></span><span className="metric-period">Este mês</span></div>
    <p className="metric-label">{label}</p>
    <strong className="metric-value">{value}</strong>
    <p className="metric-detail">{detail}</p>
  </article>
}

export default function App() {
  const [active, setActive] = useState('Visão geral')
  const [open, setOpen] = useState(false)
  return <div className="app-shell">
    <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
      <div className="brand"><span className="brand-mark">CF</span><span><b>Frete<span>Pro</span></b><small>GESTÃO DE TRANSPORTE</small></span><button className="mobile-close" onClick={() => setOpen(false)} aria-label="Fechar menu"><X size={20}/></button></div>
      <div className="workspace"><span className="workspace-avatar">J</span><span><b>Minha operação</b><small>Plano de demonstração</small></span><ChevronDown size={16}/></div>
      <p className="nav-caption">MENU PRINCIPAL</p>
      <nav>{menu.map(({label, icon: Icon}) => <button key={label} className={active === label ? 'nav-item active' : 'nav-item'} onClick={() => {setActive(label);setOpen(false)}}><Icon size={18}/><span>{label}</span></button>)}</nav>
      <div className="sidebar-bottom"><button className="nav-item" onClick={() => setActive('Configurações')}><Settings2 size={18}/>Configurações</button><button className="nav-item" onClick={() => setActive('Ajuda')}><CircleHelp size={18}/>Central de ajuda</button><div className="profile-mini"><span className="profile-avatar">U</span><span><b>Usuário</b><small>Conta a configurar</small></span><ChevronDown size={16}/></div></div>
    </aside>
    {open && <button className="scrim" aria-label="Fechar menu" onClick={() => setOpen(false)} />}
    <main className="main-area">
      <header className="topbar"><button className="mobile-menu" onClick={() => setOpen(true)} aria-label="Abrir menu"><Menu size={22}/></button><div className="breadcrumb">Painel <span>/</span> {active}</div><div className="top-actions"><button className="icon-button" aria-label="Notificações"><Bell size={19}/></button><span className="top-divider"/><span className="top-user">J</span></div></header>
      <div className="page-content">
        <section className="welcome-row"><div><p className="eyebrow">PAINEL DE CONTROLE</p><h1>{active === 'Visão geral' ? 'Visão geral da operação' : active}</h1><p className="subtitle">Acompanhe seus fretes, custos e resultados em um só lugar.</p></div><button className="primary-button" onClick={() => setActive('Novo frete')}><Plus size={18}/> Novo frete</button></section>
        <section className="period-row"><div><span className="status-dot"/> Operação pronta para configurar</div><button className="period-select">Últimos 30 dias <ChevronDown size={15}/></button></section>
        <section className="metrics-grid">
          <Metric label="Faturamento" value="R$ 0,00" detail="Nenhum frete lançado" icon={Wallet} tone="blue"/>
          <Metric label="Custos totais" value="R$ 0,00" detail="Aguardando despesas" icon={ArrowDownRight} tone="orange"/>
          <Metric label="Lucro líquido" value="R$ 0,00" detail="Resultado do período" icon={ArrowUpRight} tone="green"/>
          <Metric label="Fretes realizados" value="0" detail="Neste período" icon={Truck} tone="purple"/>
        </section>
        <section className="content-grid">
          <article className="panel chart-panel"><div className="panel-heading"><div><h2>Desempenho financeiro</h2><p>Receitas e custos ao longo do período</p></div><button className="subtle-button">Ver relatório <ArrowUpRight size={15}/></button></div><div className="chart-empty"><div className="chart-symbol"><BarChart3 size={28}/></div><b>Seus resultados aparecerão aqui</b><span>Cadastre seu primeiro frete para começar a acompanhar a evolução financeira.</span></div></article>
          <article className="panel quick-panel"><div className="panel-heading"><div><h2>Acesso rápido</h2><p>Atalhos da operação</p></div></div><button className="quick-link" onClick={() => setActive('Calculadora')}><span className="quick-icon blue"><Calculator size={18}/></span><span><b>Simular frete</b><small>Calcule custos e lucro antes de aceitar</small></span><ArrowUpRight size={17}/></button><button className="quick-link" onClick={() => setActive('Veículos')}><span className="quick-icon green"><Truck size={18}/></span><span><b>Cadastrar veículo</b><small>Configure caminhão e implemento</small></span><ArrowUpRight size={17}/></button><button className="quick-link" onClick={() => setActive('Despesas')}><span className="quick-icon orange"><Fuel size={18}/></span><span><b>Lançar despesa</b><small>Registre abastecimento e custos</small></span><ArrowUpRight size={17}/></button></article>
        </section>
        <section className="panel recent-panel"><div className="panel-heading"><div><h2>Fretes recentes</h2><p>Últimas movimentações cadastradas</p></div><button className="subtle-button" onClick={() => setActive('Fretes')}>Ver todos <ArrowUpRight size={15}/></button></div><div className="empty-table"><span className="empty-icon"><BriefcaseBusiness size={22}/></span><b>Nenhum frete cadastrado</b><span>Quando você registrar fretes, eles aparecerão nesta lista.</span><button className="outline-button" onClick={() => setActive('Novo frete')}><Plus size={16}/> Cadastrar primeiro frete</button></div></section>
        <footer>Calculadora de Frete <span>•</span> Nova versão em desenvolvimento <span>•</span> Seus dados serão sincronizados na nuvem após a configuração da conta.</footer>
      </div>
    </main>
  </div>
}