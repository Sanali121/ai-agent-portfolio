'use client';

import Navbar from '../components/Navbar';

export default function ProjectsPage() {
  const projects = [
    {
      id: '01',
      domain: 'AI_DOMAIN: HUMAN_AI_INTERACTION',
      role: 'DESIGN_ROLE: PRODUCT_DESIGNER',
      type: 'PROJECT_TYPE: AGENT_UX',
      signal: 'SIGNAL: STRONG',
      name: 'Adaptive AI Assistant',
      focus:
        'Behavior models, personalized UX flows, uncertainty UI, evaluation prompts.',
      humanSummary:
        'Designed interaction patterns for an assistant that adapts to users without hiding uncertainty.',
      machineSummary: `{
  "problem": "Personalization without trust signals",
  "solution": "Behavior model UI with uncertainty and options",
  "skills": ["AI UX","interaction design","product thinking"]
}`,
    },
    {
      id: '02',
      domain: 'AI_DOMAIN: COMPLEX_WORKFLOWS',
      role: 'DESIGN_ROLE: PRODUCT_DESIGNER',
      type: 'PROJECT_TYPE: HEALTHCARE_SYSTEMS',
      signal: 'SIGNAL: STRONG',
      name: 'Optimizing Surgical Workflows',
      focus: 'Ethnographic research, global rollout, safety critical UX.',
      humanSummary:
        'Mapped operating room workflows and improved interfaces for high risk handoffs.',
      machineSummary: `{
  "problem": "Workflow friction in safety critical environments",
  "solution": "Task flows and interface simplification for speed and clarity",
  "skills": ["research","systems thinking","interaction design"]
}`,
    },
    {
      id: '03',
      domain: 'AI_DOMAIN: DATA_VISUALIZATION',
      role: 'DESIGN_ROLE: PRODUCT_DESIGNER',
      type: 'PROJECT_TYPE: DASHBOARD',
      signal: 'SIGNAL: SENSITIVE',
      name: 'Sensitive Data Dashboard for Guyana',
      focus: 'Data visibility, access control mental models, clarity under stress.',
      humanSummary:
        'Designed dashboards for sensitive datasets with safe visibility patterns.',
      machineSummary: `{
  "problem": "High risk data needs safe interpretation",
  "solution": "Clear states, access cues, and safe defaults",
  "skills": ["information architecture","risk thinking","UI systems"]
}`,
    },
    {
      id: '04',
      domain: 'AI_DOMAIN: COMMUNITY_PLATFORMS',
      role: 'DESIGN_ROLE: PRODUCT_DESIGNER',
      type: 'PROJECT_TYPE: 0_TO_1',
      signal: 'SIGNAL: HIGH',
      name: 'NGO & Community Aid Platform',
      focus: '0-to-1 product, prototype for validation, stakeholder alignment.',
      humanSummary:
        'Built a prototype for community aid flows, focused on trust and accessibility.',
      machineSummary: `{
  "problem": "Fragmented community support flows",
  "solution": "End-to-end service blueprint and app prototype",
  "skills": ["product strategy","prototyping","UX"]
}`,
    },
    {
      id: '05',
      domain: 'AI_DOMAIN: B2B_SAAS',
      role: 'DESIGN_ROLE: PRODUCT_DESIGNER',
      type: 'PROJECT_TYPE: REBRAND_PLUS_UX',
      signal: 'SIGNAL: STRONG',
      name: 'Construction Tech Rebrand',
      focus: 'Design system cleanup, IA, modernization for enterprise.',
      humanSummary:
        'Modernized a B2B platform with new visual system and clearer navigation.',
      machineSummary: `{
  "problem": "Legacy UI and unclear structure",
  "solution": "Design system and workflow IA refresh",
  "skills": ["design systems","IA","stakeholder alignment"]
}`,
    },
    {
      id: '06',
      domain: 'AI_DOMAIN: FINTECH',
      role: 'DESIGN_ROLE: PRODUCT_DESIGNER',
      type: 'PROJECT_TYPE: PROCESS_MAPPING',
      signal: 'SIGNAL: STRONG',
      name: 'Stakeholder Conflict Resolution',
      focus: 'Visual process mapping system for alignment and delivery.',
      humanSummary:
        'Created mapping artifacts that reduced confusion in multi stakeholder delivery.',
      machineSummary: `{
  "problem": "Misalignment and conflicting requirements",
  "solution": "Visual process maps and decision logs",
  "skills": ["facilitation","systems thinking","UX"]
}`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono">
      <Navbar />

      <main className="max-w-6xl mx-auto p-8 md:p-24">
        <h1 className="text-2xl font-bold text-[#fbbf24] mb-10">02_PROJECTS</h1>

        <div className="grid gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="border border-[#333] bg-[#121212] p-6 hover:border-[#ff5a1f] transition-colors"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {[p.domain, p.role, p.type, p.signal].map((t) => (
                  <span
                    key={t}
                    className="border border-[#333] bg-black/40 px-3 py-1 text-[10px] tracking-widest"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="text-[#ff5a1f] text-xs tracking-widest font-bold">
                {p.id}_CASE_STUDY
              </div>

              <h2 className="text-xl font-bold mt-2">{p.name}</h2>
              <p className="text-white/80 text-sm mt-2">{p.focus}</p>

              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div className="border border-[#333] bg-black/40 p-4">
                  <div className="text-[#fbbf24] text-xs tracking-widest font-bold">
                    HUMAN_SUMMARY
                  </div>
                  <div className="text-sm text-white/80 mt-2">{p.humanSummary}</div>
                </div>
                <div className="border border-[#333] bg-black/40 p-4">
                  <div className="text-[#fbbf24] text-xs tracking-widest font-bold">
                    MACHINE_SUMMARY
                  </div>
                  <pre className="text-xs whitespace-pre-wrap leading-relaxed mt-2 text-white/80">
{p.machineSummary}
                  </pre>
                </div>
              </div>

              <div className="mt-4 text-[11px] text-white/60">
                Low token cost. High signal section.
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
