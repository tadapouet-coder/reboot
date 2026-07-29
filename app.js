const workouts=["Haut du corps : 3 tours de 10 pompes, 10 dips, 30s gainage","Bas du corps : 3 tours de 15 squats, 10 fentes","Cardio : Marche rapide 20 min","Core : Planche, dead bug, bird dog","Mobilité : Hanches, épaules, dos 15 min"];
function generateWorkout(){
let s=+sleep.value,e=+energy.value,st=+stress.value,m=+motivation.value;
if(s<=2||e<=2){result.innerHTML='<h2>🟡 Mode Survie</h2><p>10 minutes de marche ou mobilité. Mission accomplie.</p>';return;}
const score=Math.round(((s*30)+(e*30)+(m*20)+((6-st)*20))/5);
const w=workouts[Math.floor(Math.random()*workouts.length)];
result.innerHTML=`<h2>Readiness : ${score}/100</h2><p>${w}</p>`;
}
function saveWeight(){let data=JSON.parse(localStorage.getItem('weights')||'[]');data.push(weight.value);localStorage.setItem('weights',JSON.stringify(data));renderWeights();}
function renderWeights(){let data=JSON.parse(localStorage.getItem('weights')||'[]');weights.innerHTML=data.map(w=>`<li>${w} kg</li>`).join('');}
renderWeights();