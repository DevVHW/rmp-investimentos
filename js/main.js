(function(){
  var WA="https://wa.me/554792036119?text=";
  var padrao="Olá, Robson! Vi o site da RMP Investimentos e quero saber mais sobre consórcio.";
  document.querySelectorAll("[data-wa]").forEach(function(a){a.href=WA+encodeURIComponent(padrao)});
  var tipos={
    imovel:{nome:"imóvel",min:100000,max:1000000,step:10000,val:300000,pmin:120,pmax:220,pval:200},
    veiculo:{nome:"veículo",min:30000,max:300000,step:5000,val:80000,pmin:36,pmax:100,pval:80},
    pesados:{nome:"pesados",min:150000,max:1000000,step:10000,val:400000,pmin:60,pmax:120,pval:100}
  };
  var $=function(id){return document.getElementById(id)};
  var c=$("credito"),p=$("prazo"),t=$("taxa"),atual="imovel";
  var brl=function(v,d){return v.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:d,maximumFractionDigits:d})};
  function calc(){
    var cr=+c.value,pz=+p.value,tx=+t.value,total=cr*(1+tx/100),parc=total/pz;
    $("o-credito").textContent=$("r-credito").textContent=brl(cr,0);
    $("o-prazo").textContent=$("r-prazo").textContent=pz+" meses";
    $("o-taxa").textContent=tx.toLocaleString("pt-BR")+"%";
    $("parcela").textContent=brl(parc,2);
    $("r-total").textContent=brl(total,0);
    var msg="Olá, Robson! Fiz uma simulação no site: consórcio de "+tipos[atual].nome+", crédito de "+brl(cr,0)+" em "+pz+" meses, parcela estimada de "+brl(parc,2)+". Pode me enviar uma proposta?";
    $("enviar").href=WA+encodeURIComponent(msg);
  }
  function setTipo(k){
    atual=k;var d=tipos[k];
    c.min=d.min;c.max=d.max;c.step=d.step;c.value=d.val;
    p.min=d.pmin;p.max=d.pmax;p.step=1;p.value=d.pval;
    document.querySelectorAll(".tabs button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.t===k)});
    calc();
  }
  document.querySelectorAll(".tabs button").forEach(function(b){b.addEventListener("click",function(){setTipo(b.dataset.t)})});
  [c,p,t].forEach(function(el){el.addEventListener("input",calc)});
  $("sim-form").addEventListener("submit",function(e){e.preventDefault()});
  setTipo("imovel");
})();
