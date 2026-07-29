const workouts=["Haut du corps: Pompes, rowing, gainage 20 min","Bas du corps: squats, fentes, hip thrust 20 min","Cardio: marche rapide 25 min","Core: planche, dead bug, bird dog 15 min","Mobilité: hanches, dos, épaules 15 min"];
const breakfasts=["Skyr + fruits","Omelette 3 oeufs","Fromage blanc + banane"];
const lunches=["Poulet riz légumes","Chili con carne","Thon pommes de terre"];
const dinners=["Saumon légumes","Omelette salade","Steak haricots verts"];
const snacks=["Skyr","Yaourt grec","Amandes"];
function rand(a){return a[Math.floor(Math.random()*a.length)]}
function generateDay(){let s=+sleep.value,e=+energy.value,st=+stress.value,m=+motivation.value;let txt='';if(s<=2||e<=2){txt='<h3>🟡 Mode Survie</h3><p>10 min marche ou mobilité. Journée validée.</p>';}else{let score=Math.round(((s*30)+(e*30)+(m*20)+((6-st)*20))/5);let w=rand(workouts);txt=`<h3>Readiness ${score}/100</h3><p>${w}</p>`;let hist=JSON.parse(localStorage.getItem('history')||'[]');hist.push(new Date().toLocaleDateString()+' - '+w);localStorage.setItem('history',JSON.stringify(hist));renderHistory();}day.innerHTML=txt;}
function generateMeals(){meals.innerHTML=`<p><b>Petit-déjeuner:</b> ${rand(breakfasts)}</p><p><b>Déjeuner:</b> ${rand(lunches)}</p><p><b>Dîner:</b> ${rand(dinners)}</p><p><b>Collation:</b> ${rand(snacks)}</p>`}
function saveWeight(){let d=JSON.parse(localStorage.getItem('weights')||'[]');d.push(weight.value);localStorage.setItem('weights',JSON.stringify(d));renderWeights();}
function renderWeights(){let d=JSON.parse(localStorage.getItem('weights')||'[]');weightList.innerHTML=d.map(x=>'<li>'+x+' kg</li>').join('')}
function renderHistory(){let h=JSON.parse(localStorage.getItem('history')||'[]');history.innerHTML=h.slice(-20).reverse().map(x=>'<li>'+x+'</li>').join('')}
renderWeights();renderHistory();generateMeals();