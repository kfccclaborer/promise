const defaultData = {
  theme:{navy:"#061b4f", navy2:"#003f9e", teal:"#007f7f", teal2:"#00a99d", accent:"#ffcc33", bg:"#f3f7fc"},
  brandName:"중앙회노조 ON",
  brandSub:"청취 · 측정 · 설계 · 실행 · 공개 · 개선",
  eyebrow:"새마을금고중앙회 노동조합 선거 공약",
  mainTitle:"듣고, 확인하고, 공개하겠습니다",
  heroChip:"청취 · 측정 · 실행 · 공개",
  heroTitle:"조합원이 바로 보는 노동조합",
  heroText:"의견은 접수하고, 진행은 공개하고, 결과는 숫자로 확인하겠습니다.",
  primaryCta:"의견 남기기",
  secondaryCta:"이행률 보기",
  navLabels:{home:"홈",transfer:"전보",hr:"인사",committee:"위원회",live:"라이브",voice:"의견",pledges:"이행률",admin:"관리"},
  quickBoxTitle:"언제든 말할 수 있는 공간",
  quickBoxText:"전보·인사·승진·업무고충을 안전하게 남겨주세요.",
  quickBoxButton:"의견 남기기",
  summaryTitle:"우리의 약속은 다릅니다.",
  summaryLead:"감이 아니라 자료로, 말이 아니라 절차로, 조합원이 직접 확인하는 방식으로 바꾸겠습니다.",
  summaryCards:[
    {title:"먼저 듣겠습니다", text:"전보·인사·복지·근무조건 의견을 상시 접수합니다."},
    {title:"숫자로 확인하겠습니다", text:"고충 처리율·평균 처리기간·이행률을 공개합니다."},
    {title:"계획으로 움직이겠습니다", text:"30일·100일·6개월·1년 로드맵으로 추진합니다."},
    {title:"공개로 검증받겠습니다", text:"교섭 안건·진행상황·결과·후속조치를 공개합니다."}
  ],
  strategyHeading:"핵심 전략",
  strategySub:"듣고, 측정하고, 설계하고, 실행하고, 공개하고, 개선하겠습니다.",
  strategyCards:[
    {icon:"듣", title:"청취", text:"익명 제안과 긴급 고충을 상시 접수합니다."},
    {icon:"數", title:"측정", text:"전보·인사·복지·업무량을 지표로 확인합니다."},
    {icon:"設", title:"설계", text:"확인된 요구를 교섭안과 로드맵으로 정리합니다."},
    {icon:"行", title:"실행", text:"위원회·노사협의·단체교섭으로 추진합니다."},
    {icon:"開", title:"공개", text:"진행상황과 결과를 웹앱에 공개합니다."},
    {icon:"改", title:"개선", text:"제안→검토→반영→공개 절차로 관리합니다."}
  ],
  roadmapHeading:"100일 실행 로드맵",
  metricsHeading:"공개 지표",
  roadmap:[
    {date:"30일", text:"전보·인사·복지 긴급 설문"},
    {date:"60일", text:"고충 창구와 위원회 구성안 공개"},
    {date:"100일", text:"공정성 개선안과 교섭 요구안 발표"},
    {date:"6개월", text:"사전예고·이의제기 절차 교섭 요구"},
    {date:"1년", text:"정기 보고 제도화"}
  ],
  metrics:[
    {label:"공약 이행률", value:"상시"},
    {label:"고충 처리율", value:"분기"},
    {label:"평균 처리기간", value:"공개"},
    {label:"설문 참여율", value:"실시간"}
  ],
  transferTitle:"합리적 전보 4대 약속",
  transferLead:"전보는 직원의 생활·가족·주거·통근·건강·경력에 직접 영향을 줍니다. 기준·예고·설명·이의제기 절차를 요구하겠습니다.",
  transferPromises:[
    {title:"전보 사전예고", text:"갑작스러운 발령 불안을 줄이는 예고 기준을 요구합니다."},
    {title:"전보 기준 공개", text:"직무·경력·생활영향을 고려한 설명 가능한 기준을 요구합니다."},
    {title:"생활영향 심사", text:"가족·주거·통근·건강·돌봄 사정을 반영하는 절차를 추진합니다."},
    {title:"이의제기 절차", text:"불합리하다고 느끼는 전보에 대해 공식 창구를 운영합니다."}
  ],
  hrTitle:"인사·승진 공정성 4대 약속",
  hrLead:"결과만 통보받는 인사에서 벗어나, 기준을 알고 피드백을 받고 이의를 제기할 수 있는 구조를 만들겠습니다.",
  hrPromises:[
    {title:"평가 피드백권", text:"평가 사유와 개선 피드백을 받을 권리를 요구합니다."},
    {title:"승진 기준 공개", text:"승진 기준·절차·가점항목의 투명한 공개를 요구합니다."},
    {title:"인사고충 센터", text:"평가·승진·전보 고충을 접수하고 처리현황을 관리합니다."},
    {title:"반기별 보고", text:"제도개선 추진 현황을 반기별로 공개합니다."}
  ],
  committeeTitle:"조합원 참여 위원회",
  committeeLead:"주제별 위원회를 만들어 제안→검토→반영→공개까지 이어지는 의견수렴 구조를 만들겠습니다.",
  committees:[
    {title:"전보·인사 공정성 위원회", text:"전보, 평가, 승진, 생활영향 심사 개선안을 마련합니다."},
    {title:"청년·신규직원 위원회", text:"초기 경력, 교육, 성장, 조직문화 문제를 다룹니다."},
    {title:"지역근무·생활안정 위원회", text:"원거리 근무, 주거, 통근, 가족 돌봄 문제를 수집합니다."},
    {title:"소통·공개 혁신 위원회", text:"웹앱, 교섭 라이브, 이행률 공개 방식을 개선합니다."}
  ],
  liveTitle:"교섭 라이브",
  liveLead:"회의 전 안건, 준비, 협의 중, 결과 공유, 후속조치까지 단계별로 공개합니다.",
  live:[
    {status:"진행중", title:"단체교섭 요구안 정리", memo:"전보 기준·평가 피드백권·공개 시스템 포함", date:"05.20"},
    {status:"준비중", title:"전보 공정성 설문", memo:"무분별한 전보 불만 유형 조사", date:"05.22"},
    {status:"진행중", title:"의견광장 시범 운영", memo:"익명 제안·긴급 고충 접수", date:"05.24"},
    {status:"계획중", title:"위원회 구성안 발표", memo:"전보·인사, 청년, 지역근무, 소통혁신", date:"05.30"}
  ],
  voiceTitle:"언제든 말할 수 있는 공간",
  voiceLead:"익명 또는 실명으로 의견을 남길 수 있습니다. 전보·인사·승진·복지·업무고충·조합운영 제안을 접수합니다.",
  voiceCategories:["전보 고충","인사·평가","승진 기준","복지 제안","근무조건","위원회 제안","교섭 의제","조합 운영","긴급 상담","자유 의견"],
  voiceScopes:["익명 제안","비공개 상담","공개 제안"],
  voiceStorageMode:"google",
  googleFormUrl:"",
  googleSheetUrl:"",
  googleFormButtonText:"의견 제출하기",
  googleFormGuide:"의견은 Google Forms로 접수되어 담당자 Google Sheets에서 한곳에 모아 관리됩니다.",
  googleDisplayMode:"button",
  pledgeTitle:"공약 이행률",
  pledgeLead:"완료·진행 중·계획 중·보류 사유를 모바일에서 바로 확인할 수 있도록 공개합니다.",
  pledges:[
    {title:"전보 공정성 개선안", percent:35, status:"진행중", memo:"설문 문항과 고충 유형 분류 준비"},
    {title:"인사·승진 기준 공개 요구", percent:25, status:"준비중", memo:"평가 피드백권과 기준 공개 요구안 정리"},
    {title:"위원회 신설", percent:40, status:"진행중", memo:"전보·인사, 청년, 지역근무, 소통혁신 구성안 준비"},
    {title:"교섭 라이브 공개", percent:55, status:"진행중", memo:"안건, 진행상황, 결과, 후속조치 공개 방식 설계"},
    {title:"의견광장 운영", percent:70, status:"진행중", memo:"익명 제안, 긴급 고충, 상담 접수 운영"}
  ],
  voices:[]
};

const STORAGE_KEY = "union_campaign_webapp_v6";
let data = loadData();
let currentAdminTab = "home";

function clone(o){ return JSON.parse(JSON.stringify(o)); }
function loadData(){
  try{ const raw=localStorage.getItem(STORAGE_KEY); if(!raw) return clone(defaultData); return deepMerge(clone(defaultData), JSON.parse(raw)); }
  catch(e){ return clone(defaultData); }
}
function deepMerge(base, saved){
  for(const k in saved){
    if(saved[k] && typeof saved[k]==="object" && !Array.isArray(saved[k]) && base[k]) base[k]=deepMerge(base[k], saved[k]);
    else base[k]=saved[k];
  }
  return base;
}
function saveData(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
function $(id){ return document.getElementById(id); }
function esc(s){ return String(s ?? "").replace(/[&<>"]/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[m])); }
function toast(msg){ const t=document.createElement("div"); t.className="toast"; t.textContent=msg; document.body.appendChild(t); setTimeout(()=>t.remove(),1800); }
function avgPledge(){ return data.pledges?.length ? Math.round(data.pledges.reduce((a,p)=>a+(Number(p.percent)||0),0)/data.pledges.length) : 0; }
function visible(items){ return (items||[]).filter(x=>!x.hidden); }
function short(s,n=62){ s=String(s||""); return s.length>n ? s.slice(0,n-1)+"…" : s; }

function applyTheme(){
  const root=document.documentElement;
  Object.entries(data.theme||{}).forEach(([k,v])=>root.style.setProperty("--"+k,v));
}
function setText(id, val){ if($(id)) $(id).textContent=val||""; }
function render(){
  applyTheme();
  ["brandName","brandSub","eyebrow","mainTitle","heroChip","heroTitle","heroText","summaryTitle","summaryLead","transferTitle","transferLead","hrTitle","hrLead","committeeTitle","committeeLead","liveTitle","liveLead","voiceTitle","voiceLead","pledgeTitle","pledgeLead"].forEach(k=>setText(k,data[k]));
  document.querySelectorAll('[data-view="home"]').forEach(b=>b.textContent=data.navLabels.home);
  document.querySelectorAll('[data-view="transfer"]').forEach(b=>b.textContent=data.navLabels.transfer);
  document.querySelectorAll('[data-view="hr"]').forEach(b=>b.textContent=data.navLabels.hr);
  document.querySelectorAll('[data-view="committee"]').forEach(b=>b.textContent=data.navLabels.committee);
  document.querySelectorAll('[data-view="live"]').forEach(b=>b.textContent=data.navLabels.live);
  document.querySelectorAll('[data-view="voice"]').forEach(b=>b.textContent=data.navLabels.voice);
  document.querySelectorAll('[data-view="pledges"]').forEach(b=>b.textContent=data.navLabels.pledges);
  document.querySelectorAll('[data-view="admin"],[data-view-jump="admin"]').forEach(b=>b.textContent=data.navLabels.admin);
  document.querySelectorAll('[data-view-jump="voice"], [data-open-voice]').forEach(b=>b.textContent=data.primaryCta || data.navLabels.voice);
  document.querySelectorAll('[data-view-jump="pledges"]').forEach(b=>b.textContent=data.secondaryCta || data.navLabels.pledges);
  const q=document.querySelector('.consult-box'); if(q){ q.querySelector('strong').textContent=data.quickBoxTitle; q.querySelector('p').textContent=data.quickBoxText; q.querySelector('button').textContent=data.quickBoxButton; }
  const strategyHead=document.querySelector('.section-head.compact h2'); if(strategyHead) strategyHead.textContent=data.strategyHeading;
  const strategySub=document.querySelector('.section-head.compact p'); if(strategySub) strategySub.textContent=data.strategySub;
  const panelHeads=document.querySelectorAll('.panel.split h2'); if(panelHeads[0]) panelHeads[0].textContent=data.roadmapHeading; if(panelHeads[1]) panelHeads[1].textContent=data.metricsHeading;
  const avg=avgPledge(); setText("overallPercent",avg+"%"); setText("pledgeTotalText",avg+"%"); if($("overallBar")) $("overallBar").style.width=avg+"%"; setText("overallText",`전체 평균 ${avg}% · 항목별 진행상황 공개`);
  renderSummary(); renderCards("strategyCards", visible(data.strategyCards)); renderRoadmap(); renderMetrics(); renderPromises(); renderCommittees(); renderLive(); renderVoices(); renderPledges(); renderVoiceOptions(); renderVoiceIntegration();
}
function renderSummary(){ if($("summaryCards")) $("summaryCards").innerHTML = visible(data.summaryCards).map(c=>`<article class="summary-card"><strong>${esc(c.title)}</strong><p>${esc(c.text)}</p></article>`).join(""); }
function renderCards(id, items){ if($(id)) $(id).innerHTML = items.map(c=>`<article class="card"><div class="icon">${esc(c.icon||"•")}</div><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p></article>`).join(""); }
function renderRoadmap(){ if($("roadmapList")) $("roadmapList").innerHTML = visible(data.roadmap).map(r=>`<li><b>${esc(r.date)}</b><span>${esc(r.text)}</span></li>`).join(""); }
function renderMetrics(){ if($("metricsList")) $("metricsList").innerHTML = visible(data.metrics).map(m=>`<div class="metric"><strong>${esc(m.value)}</strong><span>${esc(m.label)}</span></div>`).join(""); }
function renderPromises(){
  if($("transferPromises")) $("transferPromises").innerHTML = visible(data.transferPromises).map(p=>`<article class="card promise"><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></article>`).join("");
  if($("hrPromises")) $("hrPromises").innerHTML = visible(data.hrPromises).map(p=>`<article class="card promise"><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></article>`).join("");
}
function renderCommittees(){ if($("committeeList")) $("committeeList").innerHTML = visible(data.committees).map(p=>`<article class="card promise"><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></article>`).join(""); }
function renderLive(){ if($("liveBoard")) $("liveBoard").innerHTML = visible(data.live).map(x=>`<div class="live-item"><span class="badge ${esc(x.status)}">${esc(x.status)}</span><div><strong>${esc(x.title)}</strong><p>${esc(x.memo)}</p></div><time>${esc(x.date)}</time></div>`).join(""); }
function renderVoiceOptions(){
  if($("voiceCategory")) $("voiceCategory").innerHTML=(data.voiceCategories||[]).map(x=>`<option>${esc(x)}</option>`).join("");
  if($("voiceScope")) $("voiceScope").innerHTML=(data.voiceScopes||[]).map(x=>`<option>${esc(x)}</option>`).join("");
}
function renderVoiceIntegration(){
  const box=$('externalVoiceBox');
  const form=$('voiceForm');
  if(!box || !form) return;
  const mode=(data.voiceStorageMode||'local').trim();
  const url=(data.googleFormUrl||'').trim();
  const useGoogle=mode==='google' && url;
  if(useGoogle){
    box.classList.remove('hidden');
    const guide=esc(data.googleFormGuide||'의견은 Google Forms로 접수됩니다.');
    const btn=esc(data.googleFormButtonText||'의견 제출하기');
    const safeUrl=esc(url);
    const embed=(data.googleDisplayMode||'button')==='embed';
    box.innerHTML=`<div class="external-voice-card"><div><span class="system-badge">실전 접수</span><h3>중앙 의견함으로 바로 접수됩니다</h3><p>${guide}</p></div><a class="primary link-btn" href="${safeUrl}" target="_blank" rel="noopener">${btn}</a>${embed?`<iframe class="google-form-frame" src="${safeUrl}" title="의견 제출 Google Form"></iframe>`:''}</div>`;
    form.classList.add('hidden');
  }else{
    box.classList.add('hidden');
    box.innerHTML='';
    form.classList.remove('hidden');
  }
}
function renderVoices(){
  const list=data.voices||[]; if(!$("voiceList")) return;
  $("voiceList").innerHTML = list.length ? list.map(v=>`<div class="voice-card"><div class="pill-row"><span class="pill">${esc(v.category)}</span><span class="pill">${esc(v.scope)}</span></div><p>${esc(v.text)}</p><small>${esc(v.date)}</small></div>`).join("") : `<div class="empty">아직 접수된 의견이 없습니다.</div>`;
}
function renderPledges(){ if($("pledgeList")) $("pledgeList").innerHTML = visible(data.pledges).map(p=>`<article class="pledge"><div class="pledge-head"><h3>${esc(p.title)}</h3><span class="badge ${esc(p.status)}">${esc(p.status)}</span></div><div class="bar"><span style="width:${Number(p.percent)||0}%"></span></div><p><b>${Number(p.percent)||0}%</b> · ${esc(p.memo)}</p></article>`).join(""); }

function switchView(view){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  const target=$("view-"+view); if(target) target.classList.add("active");
  document.querySelectorAll(".nav,.mobile-nav").forEach(b=>b.classList.toggle("active", b.dataset.view===view));
  document.querySelector(".sidebar").classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
}
document.addEventListener("click", e=>{
  const nav=e.target.closest("[data-view]"); if(nav) switchView(nav.dataset.view);
  const jump=e.target.closest("[data-view-jump]"); if(jump) switchView(jump.dataset.viewJump);
  if(e.target.closest("[data-open-voice]")) switchView("voice");
});
$("menuToggle").addEventListener("click",()=>document.querySelector(".sidebar").classList.toggle("open"));
$("voiceForm").addEventListener("submit",e=>{
  e.preventDefault(); const text=$("voiceText").value.trim(); if(!text) return;
  data.voices.unshift({category:$("voiceCategory").value,scope:$("voiceScope").value,text,date:new Date().toLocaleString("ko-KR")});
  $("voiceText").value=""; saveData(); renderVoices(); toast("의견이 접수되었습니다");
});

const adminTabs=[
  {key:"home",label:"첫 화면"},{key:"summary",label:"한 장 요약"},{key:"strategy",label:"전략·지표"},{key:"transfer",label:"전보"},{key:"hr",label:"인사"},{key:"committee",label:"위원회"},{key:"live",label:"라이브"},{key:"pledges",label:"이행률"},{key:"voice",label:"의견"},{key:"menus",label:"메뉴·버튼"},{key:"style",label:"색상"},{key:"data",label:"백업"}
];
$("loginBtn").addEventListener("click",()=>{ if($("adminPw").value==="2026"){ $("loginBox").classList.add("hidden"); $("adminPanel").classList.remove("hidden"); renderAdminTabs(); renderAdminEditor(); } else toast("비밀번호가 맞지 않습니다"); });
function renderAdminTabs(){ $("adminTabs").innerHTML=adminTabs.map(t=>`<button class="admin-tab ${t.key===currentAdminTab?'active':''}" data-admin-tab="${t.key}">${t.label}</button>`).join(""); document.querySelectorAll("[data-admin-tab]").forEach(b=>b.onclick=()=>{currentAdminTab=b.dataset.adminTab;renderAdminTabs();renderAdminEditor();}); }
function inputField(label,key,type="text",hint=""){
  const val=esc(data[key]||""); const tag=type==="textarea"?`<textarea data-key="${key}">${val}</textarea>`:`<input data-key="${key}" value="${val}">`;
  return `<label class="field">${label}${tag}${hint?`<small class="hint">${hint}</small>`:""}</label>`;
}
function nestedField(label,objKey,prop,type="text"){
  const val=esc((data[objKey]||{})[prop]||""); return `<label class="field">${label}<input data-nested="${objKey}" data-prop="${prop}" ${type==="color"?'type="color"':''} value="${val}"></label>`;
}
function listEditor(title,key,placeholder="새 항목"){
  const arr=data[key]||[]; return `<div class="editor-card"><h4>${title}</h4>${arr.map((v,i)=>`<div class="item-editor"><label class="field">항목 <input data-list="${key}" data-index="${i}" value="${esc(v)}"></label><div class="item-actions"><button class="small-btn" data-list-up="${key}" data-index="${i}">위로</button><button class="small-btn" data-list-down="${key}" data-index="${i}">아래로</button><button class="small-btn" data-list-del="${key}" data-index="${i}">삭제</button></div></div>`).join("")}<button class="add-btn" data-list-add="${key}" data-placeholder="${placeholder}">+ 항목 추가</button></div>`;
}
function arrayEditor(title,key,fields){ const items=data[key]||[]; return `<div class="editor-card"><h4>${title}</h4>${items.map((item,i)=>itemEditor(key,item,i,fields)).join("")}<button class="add-btn" data-add="${key}">+ 항목 추가</button></div>`; }
function itemEditor(key,item,i,fields){
  const body=fields.map(f=>`<label class="field">${f.label}<${f.type==='textarea'?'textarea':'input'} data-array="${key}" data-index="${i}" data-field="${f.name}" ${f.type==='number'?'type="number" min="0" max="100"':''} ${f.type!=='textarea'?`value="${esc(item[f.name]||'')}"`:''}>${f.type==='textarea'?esc(item[f.name]||''):''}</${f.type==='textarea'?'textarea':'input'}>${f.max?`<small class="hint">권장 ${f.max}자 이내 · 현재 ${String(item[f.name]||'').length}자</small>`:""}</label>`).join("");
  const hidden=`<label class="toggle-row"><input type="checkbox" data-hide="${key}" data-index="${i}" ${item.hidden?'checked':''}> 이 항목 숨기기</label>`;
  return `<div class="item-editor">${body}${hidden}<div class="item-actions"><button class="small-btn" data-up="${key}" data-index="${i}">위로</button><button class="small-btn" data-down="${key}" data-index="${i}">아래로</button><button class="small-btn" data-copy="${key}" data-index="${i}">복사</button><button class="small-btn" data-del="${key}" data-index="${i}">삭제</button></div></div>`;
}
function renderAdminEditor(){
  let html=`<div class="admin-help">관리 화면은 보이는 문구를 그대로 고치는 방식입니다. 모바일에서는 짧은 문장, 큰 제목, 1카드 1메시지가 가장 잘 보입니다.</div>`;
  if(currentAdminTab==="home") html += `<div class="editor-section"><div class="editor-card"><h4>첫 화면 문구</h4><div class="editor-grid">${inputField("브랜드명","brandName")}${inputField("브랜드 설명","brandSub")}${inputField("상단 작은 문구","eyebrow")}${inputField("상단 제목","mainTitle")}${inputField("키워드 칩","heroChip","text","모바일 권장 20자 이내")}${inputField("첫 화면 큰 문구","heroTitle","text","모바일 권장 20자 이내")}</div><div class="editor-grid full">${inputField("첫 화면 설명","heroText","textarea","모바일 권장 60자 이내")}</div></div></div>`;
  if(currentAdminTab==="summary") html += `<div class="editor-section"><div class="editor-card"><h4>한 장 요약</h4><div class="editor-grid full">${inputField("요약 제목","summaryTitle")}${inputField("요약 설명","summaryLead","textarea","짧을수록 모바일에서 강합니다")}</div></div>${arrayEditor("요약 카드", "summaryCards", [{name:"title",label:"제목",max:14},{name:"text",label:"내용",type:"textarea",max:42}])}</div>`;
  if(currentAdminTab==="strategy") html += `<div class="editor-section"><div class="editor-card"><h4>전략 화면 제목</h4><div class="editor-grid">${inputField("전략 제목","strategyHeading")}${inputField("공개 지표 제목","metricsHeading")}${inputField("로드맵 제목","roadmapHeading")}</div><div class="editor-grid full">${inputField("전략 설명","strategySub","textarea")}</div></div>${arrayEditor("핵심 전략 카드","strategyCards",[{name:"icon",label:"짧은 표시",max:1},{name:"title",label:"제목",max:8},{name:"text",label:"내용",type:"textarea",max:40}])}${arrayEditor("100일 로드맵","roadmap",[{name:"date",label:"시점"},{name:"text",label:"실행 내용",type:"textarea",max:36}])}${arrayEditor("공개 지표","metrics",[{name:"label",label:"지표명"},{name:"value",label:"표시값"}])}</div>`;
  if(currentAdminTab==="transfer") html += `<div class="editor-section"><div class="editor-card"><h4>전보 화면</h4><div class="editor-grid full">${inputField("제목","transferTitle")}${inputField("설명","transferLead","textarea")}</div></div>${arrayEditor("전보 공약","transferPromises",[{name:"title",label:"제목",max:14},{name:"text",label:"내용",type:"textarea",max:48}])}</div>`;
  if(currentAdminTab==="hr") html += `<div class="editor-section"><div class="editor-card"><h4>인사 화면</h4><div class="editor-grid full">${inputField("제목","hrTitle")}${inputField("설명","hrLead","textarea")}</div></div>${arrayEditor("인사·승진 공약","hrPromises",[{name:"title",label:"제목",max:14},{name:"text",label:"내용",type:"textarea",max:48}])}</div>`;
  if(currentAdminTab==="committee") html += `<div class="editor-section"><div class="editor-card"><h4>위원회 화면</h4><div class="editor-grid full">${inputField("제목","committeeTitle")}${inputField("설명","committeeLead","textarea")}</div></div>${arrayEditor("위원회","committees",[{name:"title",label:"위원회명",max:16},{name:"text",label:"역할",type:"textarea",max:50}])}</div>`;
  if(currentAdminTab==="live") html += `<div class="editor-section"><div class="editor-card"><h4>교섭 라이브</h4><div class="editor-grid full">${inputField("제목","liveTitle")}${inputField("설명","liveLead","textarea")}</div></div>${arrayEditor("라이브 항목","live",[{name:"status",label:"상태"},{name:"title",label:"제목",max:18},{name:"memo",label:"설명",type:"textarea",max:50},{name:"date",label:"날짜"}])}</div>`;
  if(currentAdminTab==="pledges") html += `<div class="editor-section"><div class="editor-card"><h4>이행률 화면</h4><div class="editor-grid full">${inputField("제목","pledgeTitle")}${inputField("설명","pledgeLead","textarea")}</div></div>${arrayEditor("이행률 항목","pledges",[{name:"title",label:"공약명",max:18},{name:"percent",label:"이행률 숫자",type:"number"},{name:"status",label:"상태"},{name:"memo",label:"설명",type:"textarea",max:55}])}</div>`;
  if(currentAdminTab==="voice") html += `<div class="editor-section"><div class="editor-card"><h4>의견 저장 방식</h4><div class="admin-help">실제 선거 운영은 <b>Google Forms/Sheets 접수</b>를 권장합니다. 관리자가 바뀌면 이 화면에서 Google Form 주소와 관리자용 Sheet 주소만 바꾸면 됩니다.</div><div class="mode-buttons"><button class="tool-btn ${data.voiceStorageMode==='google'?'selected':''}" data-voice-mode="google">Google Forms/Sheets 사용</button><button class="tool-btn ${data.voiceStorageMode!=='google'?'selected':''}" data-voice-mode="local">이 기기 저장/시연용</button></div><div class="editor-grid full">${inputField("Google Form 조합원 제출 링크","googleFormUrl","text","Google Form의 '보내기 > 링크' 주소를 붙여넣기")}${inputField("Google Sheet 관리자 확인 링크","googleSheetUrl","text","응답이 모이는 스프레드시트 링크. 관리자만 참고")}${inputField("제출 버튼 문구","googleFormButtonText")}${inputField("안내 문구","googleFormGuide","textarea")}</div><div class="mode-buttons"><button class="tool-btn ${data.googleDisplayMode==='button'?'selected':''}" data-display-mode="button">버튼형 표시</button><button class="tool-btn ${data.googleDisplayMode==='embed'?'selected':''}" data-display-mode="embed">폼 삽입형 표시</button></div>${data.googleSheetUrl?`<a class="primary link-btn" href="${esc(data.googleSheetUrl)}" target="_blank" rel="noopener">관리자용 응답 Sheet 열기</a>`:''}</div><div class="editor-card"><h4>의견광장 화면 문구</h4><div class="editor-grid full">${inputField("제목","voiceTitle")}${inputField("설명","voiceLead","textarea")}</div></div>${listEditor("의견 분류", "voiceCategories", "새 분류")}${listEditor("공개 범위", "voiceScopes", "새 범위")}<div class="editor-card"><h4>이 기기에 저장된 시연용 의견</h4>${(data.voices||[]).map((v,i)=>`<div class="voice-card"><b>${esc(v.category)} · ${esc(v.scope)}</b><p>${esc(v.text)}</p><small>${esc(v.date)}</small><br><button class="small-btn" data-voice-del="${i}">삭제</button></div>`).join("") || '<div class="empty">이 기기에 저장된 의견이 없습니다.</div>'}</div></div>`;
  if(currentAdminTab==="menus") html += `<div class="editor-section"><div class="editor-card"><h4>메뉴 이름</h4><div class="editor-grid">${Object.keys(data.navLabels).map(k=>nestedField(k,"navLabels",k)).join("")}</div></div><div class="editor-card"><h4>버튼·상담 박스</h4><div class="editor-grid">${inputField("주요 버튼","primaryCta")}${inputField("보조 버튼","secondaryCta")}${inputField("상담 박스 제목","quickBoxTitle")}${inputField("상담 박스 버튼","quickBoxButton")}</div><div class="editor-grid full">${inputField("상담 박스 설명","quickBoxText","textarea")}</div></div></div>`;
  if(currentAdminTab==="style") html += `<div class="editor-section"><div class="editor-card"><h4>색상 설정</h4><div class="color-row">${nestedField("진한 남색","theme","navy","color")}${nestedField("보조 파랑","theme","navy2","color")}${nestedField("강조 청록","theme","teal","color")}${nestedField("밝은 청록","theme","teal2","color")}${nestedField("이행률 노랑","theme","accent","color")}${nestedField("배경색","theme","bg","color")}</div></div><div class="editor-card"><h4>빠른 색상 조합</h4><div class="quick-tools"><button class="tool-btn" data-palette="trust">신뢰형</button><button class="tool-btn" data-palette="fresh">산뜻형</button><button class="tool-btn" data-palette="strong">강조형</button></div></div></div>`;
  if(currentAdminTab==="data") html += `<div class="editor-section"><div class="editor-card"><h4>백업·복원</h4><div class="quick-tools"><button class="tool-btn" id="exportJson">현재 내용 백업</button><button class="tool-btn" id="copyJson">백업문 복사</button><button class="tool-btn" id="compactText">모바일 문장 자동 축약</button></div><label class="field">백업문 붙여넣기<textarea id="importBox" placeholder="백업한 JSON 내용을 붙여넣으세요"></textarea></label><button class="primary" id="importJson">복원하기</button></div></div>`;
  $("adminEditor").innerHTML=html; bindEditorEvents();
}
function bindEditorEvents(){
  document.querySelectorAll("[data-key]").forEach(el=>el.oninput=()=>{data[el.dataset.key]=el.value;render();});
  document.querySelectorAll("[data-nested]").forEach(el=>el.oninput=()=>{data[el.dataset.nested][el.dataset.prop]=el.value;render();});
  document.querySelectorAll("[data-array]").forEach(el=>el.oninput=()=>{const arr=data[el.dataset.array];const i=Number(el.dataset.index);arr[i][el.dataset.field]=el.type==="number"?Number(el.value):el.value;render();});
  document.querySelectorAll("[data-hide]").forEach(el=>el.onchange=()=>{data[el.dataset.hide][Number(el.dataset.index)].hidden=el.checked;render();});
  document.querySelectorAll("[data-add]").forEach(btn=>btn.onclick=()=>{const key=btn.dataset.add;const sample={title:"새 항목",text:"내용"}; if(key==="strategyCards") Object.assign(sample,{icon:"•"}); if(key==="roadmap") Object.assign(sample,{date:"시점",text:"실행 내용"}); if(key==="metrics") Object.assign(sample,{label:"지표",value:"공개"}); if(key==="live") Object.assign(sample,{status:"계획중",memo:"설명",date:"날짜"}); if(key==="pledges") Object.assign(sample,{percent:0,status:"계획중",memo:"설명"}); data[key].push(sample);renderAdminEditor();render();});
  document.querySelectorAll("[data-del]").forEach(btn=>btn.onclick=()=>{data[btn.dataset.del].splice(Number(btn.dataset.index),1);renderAdminEditor();render();});
  document.querySelectorAll("[data-copy]").forEach(btn=>btn.onclick=()=>{const k=btn.dataset.copy,i=Number(btn.dataset.index);data[k].splice(i+1,0,{...data[k][i]});renderAdminEditor();render();});
  document.querySelectorAll("[data-up]").forEach(btn=>btn.onclick=()=>move(btn.dataset.up,Number(btn.dataset.index),-1));
  document.querySelectorAll("[data-down]").forEach(btn=>btn.onclick=()=>move(btn.dataset.down,Number(btn.dataset.index),1));
  document.querySelectorAll("[data-list]").forEach(el=>el.oninput=()=>{data[el.dataset.list][Number(el.dataset.index)]=el.value;render();});
  document.querySelectorAll("[data-list-add]").forEach(btn=>btn.onclick=()=>{data[btn.dataset.listAdd].push(btn.dataset.placeholder||"새 항목");renderAdminEditor();render();});
  document.querySelectorAll("[data-list-del]").forEach(btn=>btn.onclick=()=>{data[btn.dataset.listDel].splice(Number(btn.dataset.index),1);renderAdminEditor();render();});
  document.querySelectorAll("[data-list-up]").forEach(btn=>btn.onclick=()=>move(btn.dataset.listUp,Number(btn.dataset.index),-1));
  document.querySelectorAll("[data-list-down]").forEach(btn=>btn.onclick=()=>move(btn.dataset.listDown,Number(btn.dataset.index),1));
  document.querySelectorAll("[data-voice-del]").forEach(btn=>btn.onclick=()=>{data.voices.splice(Number(btn.dataset.voiceDel),1);renderAdminEditor();render();});
  document.querySelectorAll("[data-voice-mode]").forEach(btn=>btn.onclick=()=>{data.voiceStorageMode=btn.dataset.voiceMode;renderAdminEditor();render();toast(data.voiceStorageMode==='google'?'Google Forms 접수로 설정했습니다':'시연용 저장으로 설정했습니다');});
  document.querySelectorAll("[data-display-mode]").forEach(btn=>btn.onclick=()=>{data.googleDisplayMode=btn.dataset.displayMode;renderAdminEditor();render();toast(data.googleDisplayMode==='embed'?'폼 삽입형으로 설정했습니다':'버튼형으로 설정했습니다');});
  document.querySelectorAll("[data-palette]").forEach(btn=>btn.onclick=()=>{setPalette(btn.dataset.palette);renderAdminEditor();render();});
  if($("exportJson")) $("exportJson").onclick=()=>downloadJson();
  if($("copyJson")) $("copyJson").onclick=()=>{navigator.clipboard?.writeText(JSON.stringify(data,null,2));toast("백업문을 복사했습니다");};
  if($("importJson")) $("importJson").onclick=()=>{try{data=deepMerge(clone(defaultData),JSON.parse($("importBox").value));saveData();render();renderAdminEditor();toast("복원했습니다");}catch(e){toast("복원 실패: 형식을 확인하세요");}};
  if($("compactText")) $("compactText").onclick=()=>{compactMobileText();render();renderAdminEditor();toast("긴 문장을 줄였습니다");};
}
function move(k,i,d){ const j=i+d; if(j<0||j>=data[k].length) return; [data[k][i],data[k][j]]=[data[k][j],data[k][i]]; renderAdminEditor(); render(); }
function setPalette(name){ const sets={trust:{navy:"#061b4f",navy2:"#003f9e",teal:"#007f7f",teal2:"#00a99d",accent:"#ffcc33",bg:"#f3f7fc"},fresh:{navy:"#083344",navy2:"#0369a1",teal:"#059669",teal2:"#22c55e",accent:"#fde047",bg:"#f0fdfa"},strong:{navy:"#111827",navy2:"#1d4ed8",teal:"#dc2626",teal2:"#f97316",accent:"#facc15",bg:"#f8fafc"}}; data.theme=sets[name]; }
function compactMobileText(){
  data.heroText=short(data.heroText,54); data.summaryLead=short(data.summaryLead,58); data.transferLead=short(data.transferLead,78); data.hrLead=short(data.hrLead,74); data.committeeLead=short(data.committeeLead,74); data.liveLead=short(data.liveLead,62); data.voiceLead=short(data.voiceLead,72); data.pledgeLead=short(data.pledgeLead,62);
  ["summaryCards","strategyCards","transferPromises","hrPromises","committees","live","pledges"].forEach(k=>(data[k]||[]).forEach(x=>{ if(x.text) x.text=short(x.text,46); if(x.memo) x.memo=short(x.memo,48); }));
}
function downloadJson(){ const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}); const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="union-campaign-webapp-backup.json"; a.click(); URL.revokeObjectURL(a.href); }
$("saveAdmin").addEventListener("click",()=>{saveData();toast("저장되었습니다");});
$("previewHome").addEventListener("click",()=>switchView("home"));
$("resetData").addEventListener("click",()=>{ if(confirm("초기 데이터로 되돌릴까요?")){ data=clone(defaultData); saveData(); render(); renderAdminEditor(); toast("초기화되었습니다"); }});
render();
