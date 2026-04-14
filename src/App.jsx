import React from 'react'

function App() {
  return (
    <div className="min-h-screen p-6 md:p-12 max-w-7xl mx-auto font-sans antialiased text-gray-400 bg-bgEscuro flex flex-col selection:bg-roseDestaque selection:text-white">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center pb-6 mb-12 border-b border-bordaEscura">
        <div className="text-2xl font-bold text-white tracking-tighter">
          .tuba<span className="text-roseDestaque">tpina.</span>
        </div>
        <div className="flex gap-8 font-medium text-sm text-gray-500">
          <a href="#sobre" className="hover:text-white transition-colors">Perfil</a>
          <a href="#projetos" className="hover:text-white transition-colors">Portfólio</a>
        </div>
      </nav>

      {/* =========================================
         BENTO BOX GRID (FINAL VERSION)
         ========================================= */}
      <main className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 grid-flow-row-dense flex-grow">
        
        {/* 1. PERFIL RÁPIDO */}
        <div className="md:col-span-2 lg:col-span-3 bg-cardEscuro border border-bordaEscura p-8 rounded-3xl flex flex-col sm:flex-row items-center sm:items-start gap-6 group hover:border-roseDestaque transition-colors" id="sobre">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-brancoDestaque group-hover:shadow-[0_0_15px_#f4f4f5] transition-shadow duration-300 shrink-0">
            <img 
              src="/foto.jpg" 
              alt="Tanuris Pina" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Tanuris Pina</h1>
            <p className="text-sm font-mono text-brancoDestaque uppercase tracking-widest mb-3">Dados & Automação</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Aliando 10 anos de experiência em Suporte N2 e telecomunicações a novos estudos em Ciência de Dados para criar soluções analíticas reais.
            </p>
            <div className="mt-4 inline-block bg-brancoDestaque/10 text-brancoDestaque border border-brancoDestaque/30 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              Disponível • 100% Remoto
            </div>
          </div>
        </div>

        {/* 2. O DIFERENCIAL (A TRANSIÇÃO) */}
        <div className="md:col-span-2 lg:col-span-3 bg-cardEscuro border border-bordaEscura p-8 rounded-3xl hover:border-roseDestaque transition-colors flex flex-col justify-center">
          <h2 className="text-xl font-bold text-white mb-4 tracking-tight">Do Campo para o Código</h2>
          <p className="text-gray-400 leading-relaxed text-sm mb-3">
            Construí uma base sólida atuando por uma década como <strong>Líder de Operações e Suporte N2</strong>, lidando com implantações de sistemas (ERP/SQL) e resolvendo problemas complexos de infraestrutura.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm">
            Hoje, em um novo ciclo de formação em Ciência de Dados, aplico minha forte bagagem de lógica de negócios aliado à Inteligência Artificial para acelerar o desenvolvimento de ferramentas internas, focando em soluções que facilitem a rotina técnica.
          </p>
        </div>

        {/* 3. HARD & SOFT SKILLS */}
        <div className="md:col-span-2 lg:col-span-2 bg-cardEscuro border border-bordaEscura p-8 rounded-3xl hover:border-roseDestaque transition-colors flex flex-col justify-center">
           <div className="mb-5">
             <h3 className="text-[10px] font-mono text-brancoDestaque tracking-widest uppercase mb-3">Hard Skills</h3>
             
             {/* Subdivisão 1: Core */}
             <span className="text-[9px] font-mono text-gray-500 block mb-2 uppercase tracking-wider">Core (Domínio)</span>
             <div className="flex flex-wrap gap-2 mb-3">
               <span className="text-[11px] font-bold bg-white/5 border border-bordaEscura px-2.5 py-1 rounded-lg text-gray-300">SQL / ERP</span>
               <span className="text-[11px] font-bold bg-white/5 border border-bordaEscura px-2.5 py-1 rounded-lg text-gray-300">Redes (N2)</span>
               <span className="text-[11px] font-bold bg-white/5 border border-bordaEscura px-2.5 py-1 rounded-lg text-gray-300">Infraestrutura</span>
             </div>

             {/* Subdivisão 2: Learning Path */}
             <span className="text-[9px] font-mono text-gray-500 block mb-2 uppercase tracking-wider">Learning Path</span>
             <div className="flex flex-wrap gap-2">
               <span className="text-[11px] font-bold bg-roseDestaque/10 text-roseDestaque border border-roseDestaque/30 px-2.5 py-1 rounded-lg">Python (Pandas)</span>
               <span className="text-[11px] font-bold bg-white/5 border border-bordaEscura px-2.5 py-1 rounded-lg text-gray-300">Lógica</span>
               <span className="text-[11px] font-bold bg-white/5 border border-bordaEscura px-2.5 py-1 rounded-lg text-gray-300">React JS</span>
               <span className="text-[11px] font-bold bg-white/5 border border-bordaEscura px-2.5 py-1 rounded-lg text-gray-300">Git</span>
             </div>
           </div>

           <div className="pt-4 border-t border-bordaEscura">
             <h3 className="text-[10px] font-mono text-brancoDestaque tracking-widest uppercase mb-3">Soft Skills</h3>
             <ul className="space-y-2.5">
               <li className="text-[11px] text-gray-400 flex items-start gap-2 leading-tight">
                 <span className="text-roseDestaque shrink-0">💡</span> 
                 <span><strong>Resolução Analítica:</strong> Foco em diagnósticos complexos e redução de downtime.</span>
               </li>
               <li className="text-[11px] text-gray-400 flex items-start gap-2 leading-tight">
                 <span className="text-roseDestaque shrink-0">🗣️</span> 
                 <span><strong>Interface Técnico-Negócio:</strong> Comunicação clara entre a operação de campo e a gestão.</span>
               </li>
               <li className="text-[11px] text-gray-400 flex items-start gap-2 leading-tight">
                 <span className="text-roseDestaque shrink-0">🎯</span> 
                 <span><strong>Ownership & Adaptabilidade:</strong> Experiência em implantação de operações do zero.</span>
               </li>
             </ul>
           </div>
        </div>

        {/* 4. LINKS E DOWNLOAD CV */}
        <div className="md:col-span-2 lg:col-span-2 bg-cardEscuro border border-bordaEscura p-8 rounded-3xl hover:border-roseDestaque transition-colors flex flex-col justify-center">
           <h3 className="text-xs font-mono text-brancoDestaque tracking-widest uppercase mb-4">Recursos</h3>
           <div className="flex flex-col gap-3">
            <a href="https://linkedin.com/in/tanurispina" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex items-center justify-between bg-bgEscuro border border-bordaEscura px-4 py-2 rounded-lg font-semibold hover:text-white hover:border-roseDestaque transition-all group">
              <span className="flex items-center gap-2"><span className="group-hover:text-roseDestaque transition-colors">🔗</span> LinkedIn</span>
              <span className="text-gray-600 group-hover:text-roseDestaque text-xs">↗</span>
            </a>
            <a href="https://github.com/tanurispina" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex items-center justify-between bg-bgEscuro border border-bordaEscura px-4 py-2 rounded-lg font-semibold hover:text-white hover:border-roseDestaque transition-all group">
              <span className="flex items-center gap-2"><span className="group-hover:text-roseDestaque transition-colors">🐙</span> GitHub</span>
              <span className="text-gray-600 group-hover:text-roseDestaque text-xs">↗</span>
            </a>
            <a href="/CV_Tanuris_Pina.pdf" download="CV_Tanuris_Pina.pdf" className="flex items-center justify-center gap-2 mt-2 bg-roseDestaque text-white px-6 py-3 rounded-lg font-bold hover:scale-[1.02] transition-all text-sm uppercase tracking-wider shadow-[0_5px_15px_rgba(225,29,72,0.2)]">
              📄 Baixar CV Completo
            </a>
          </div>
        </div>

        {/* 5. CITAÇÃO */}
         <div className="md:col-span-4 lg:col-span-2 bg-gradient-to-br from-cardEscuro to-[#130b14] border border-bordaEscura p-8 rounded-3xl hover:border-roseDestaque transition-colors flex flex-col justify-center text-center group">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🚀</div>
            <p className="text-gray-300 font-medium italic text-sm leading-relaxed">
              "A tecnologia só tem valor quando resolve um problema real e o usuário consegue operá-la com facilidade."
            </p>
        </div>

        {/* --- PROJETOS --- */}
        <div className="md:col-span-4 lg:col-span-6 mt-8 mb-2" id="projetos">
          <h2 className="text-2xl font-bold text-white tracking-tight">O que eu construo</h2>
        </div>

        {/* SUPRICHECK */}
        <div className="md:col-span-4 lg:col-span-4 lg:row-span-2 bg-cardEscuro border border-bordaEscura rounded-3xl hover:border-roseDestaque transition-colors flex flex-col md:flex-row overflow-hidden group">
          <div className="p-8 md:w-3/5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-brancoDestaque mb-2 tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-roseDestaque animate-pulse"></span> Produto Real
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">SupriCheck</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Prova de conceito nascida da necessidade real na Suprinet Telecom. Automatiza checklists técnicos em campo para mitigar falhas operacionais e eliminar formulários em papel.
              </p>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Interface web mobile-first construída unindo lógica de negócios, fundamentos de React e forte apoio de IA para acelerar a codificação.
              </p>
            </div>
            
            {/* TAGS E BOTÃO DE LINK */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-4 border-t border-bordaEscura/50 items-start sm:items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                <span className="text-[10px] font-bold bg-roseDestaque/10 text-roseDestaque border border-roseDestaque/30 px-3 py-1.5 rounded-full uppercase tracking-wider">React JS</span>
                <span className="text-[10px] font-bold bg-white/5 border border-bordaEscura px-3 py-1.5 rounded-full text-gray-400">Automação Web</span>
              </div>
              <a 
                href="https://supricheck.netlify.app/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 text-xs font-bold text-white bg-white/5 hover:bg-roseDestaque border border-bordaEscura hover:border-roseDestaque px-4 py-2 rounded-lg transition-all group"
              >
                Acessar App <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>
          </div>
          <div className="md:w-2/5 bg-bgEscuro p-6 flex justify-center items-center border-l border-bordaEscura relative overflow-hidden min-h-[300px]">
             <div className="absolute inset-0 bg-roseDestaque/5 group-hover:bg-roseDestaque/10 transition-colors"></div>
             <div className="relative w-full max-w-[180px] rounded-[2rem] overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.9)] border-[6px] border-[#1a1a1a] group-hover:-translate-y-2 group-hover:shadow-[0_15px_60px_rgba(225,29,72,0.3)] transition-all duration-500 z-10">
               <img src="/supricheck-screen.png" alt="SupriCheck UI" className="w-full h-auto object-cover"/>
             </div>
          </div>
        </div>

        {/* SUPRIHUB */}
        <div className="md:col-span-2 lg:col-span-2 bg-cardEscuro border border-bordaEscura p-6 rounded-3xl hover:border-roseDestaque transition-colors flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-roseDestaque text-white text-[8px] font-bold px-3 py-1 rounded-bl-lg uppercase">WIP</div>
          <div className="mt-2">
            <div className="text-[10px] font-mono text-brancoDestaque tracking-widest uppercase mb-1">UI Lab</div>
            <h3 className="text-xl font-bold text-white mb-2 hover:text-roseDestaque transition-colors">SupriHub</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Plataforma de gestão em construção. Foco no desenvolvimento de layouts responsivos e componentização.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap mt-auto">
            <span className="text-[9px] font-bold bg-white/5 border border-bordaEscura px-2 py-0.5 rounded-full text-gray-400">Tailwind CSS</span>
          </div>
        </div>

        {/* DATA LABS - Focado em Telecom */}
        <div className="md:col-span-2 lg:col-span-2 bg-cardEscuro border border-bordaEscura p-6 rounded-3xl hover:border-roseDestaque transition-colors flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-mono text-brancoDestaque tracking-widest uppercase mb-1">Dados & Telecom</div>
            <h3 className="text-xl font-bold text-white mb-2 hover:text-roseDestaque transition-colors">Análise de Evasão</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Tradução de dados brutos de provedores de internet em inteligência de negócio, utilizando Python e Pandas para análise de churn.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap mt-auto">
            <span className="text-[9px] font-bold bg-white/5 border border-bordaEscura px-2 py-0.5 rounded-full text-gray-400">Python</span>
            <span className="text-[9px] font-bold bg-white/5 border border-bordaEscura px-2 py-0.5 rounded-full text-gray-400">Pandas</span>
            <span className="text-[9px] font-bold bg-white/5 border border-bordaEscura px-2 py-0.5 rounded-full text-gray-400">Data Science</span>
          </div>
        </div>

      </main>
      
      {/* --- FOOTER (MINIMAL) --- */}
      <footer className="mt-20 mb-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium text-gray-500 border-t border-bordaEscura pt-8">
        <div>© 2026 Tanuris Pina.</div>
        <div className="flex items-center gap-3 sm:gap-6">
          <a href="mailto:tanurispina@gmail.com" className="hover:text-roseDestaque transition-colors">tanurispina@gmail.com</a>
          <span className="text-bordaEscura">/</span>
          <a href="https://linkedin.com/in/tanurispina" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <span className="text-bordaEscura">/</span>
          <a href="https://github.com/tanurispina" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
        </div>
        <a href="#sobre" className="hover:text-white transition-colors uppercase tracking-widest">Voltar ao Topo ↑</a>
      </footer>

    </div>
  )
}

export default App