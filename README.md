# RMP Investimentos — landing page

Site estático, sem etapa de build. Basta enviar a pasta inteira para a hospedagem.

```
index.html      estrutura e textos da página
css/style.css   cores, tipografia e layout (as cores ficam no bloco :root, no topo)
js/main.js      links do WhatsApp e simulador
img/            foto do Robson
```

Onde mexer:
- Número do WhatsApp: variável `WA` em `js/main.js` e os links `wa.me` em `index.html`.
- Faixas e valores do simulador: objeto `tipos` em `js/main.js`.
- Cores: variáveis `--red`, `--black`, `--gold` em `css/style.css`.
