# TIGA — máscara de aplicação da taxonomia

Interface pública da TIGA (Taxonomia de Integração da IA Generativa no Audiovisual
Não Interativo). A pessoa responde perguntas em linguagem de produção — sem jargão
acadêmico nem de computação — e recebe uma ficha com o perfil do uso de IA no
projeto, o veredito por tópico e o que fazer sobre cada ponto.

Base empírica: mapeamento sistemático com 60 estudos primários (IEEE Xplore e ACM
Digital Library, publicações de 2023 a abril de 2025).

## Rodar

Não há dependências nem etapa de build para desenvolver. Como os scripts são
carregados por `<script src>`, abra por um servidor local em vez de duplo clique:

```bash
python3 -m http.server 8000
# depois: http://localhost:8000
```

## Gerar a versão de arquivo único

```bash
python3 build.py
```

Produz em `dist/`:

| arquivo | para quê |
| --- | --- |
| `tiga.html` | página completa e autossuficiente: abre com duplo clique, sobe em GitHub Pages, cabe num pendrive ou anexo de e-mail |
| `tiga-artifact.html` | o mesmo conteúdo sem as tags de documento, no formato que a publicação como Artifact espera |

Os fontes em `assets/` continuam sendo a fonte da verdade — edite lá e rode o build
de novo.

## Estrutura

```
index.html            marcação e landmarks
assets/css/styles.css tokens, os dois temas e todos os componentes
assets/js/content.js  textos em pt-BR e inglês, facetas, vereditos, regras,
                      casos do corpus e glossário
assets/js/app.js      montagem do formulário, cálculo dos índices e telas
build.py              gera as versões de arquivo único
```

Para mudar um texto, uma faceta ou uma regra de recomendação, mexa em
`content.js` — cada string é um par `{ pt, en }`, o que impede que uma tradução
fique para trás.

## Como o resultado é calculado

Três índices de 0 a 100, todos derivados das respostas:

- **Autonomia** — o quanto da decisão criativa foi delegado à ferramenta.
- **Exigência técnica** — composto de saída, infraestrutura, gargalo e família
  arquitetural.
- **Custo sociotécnico** — média ponderada de autoria (24%), impacto no trabalho
  (22%), perceptibilidade (20%), reprodutibilidade (18%) e viés (16%).

Duas decisões de projeto que valem registro:

1. *Não reportado* nunca vale como risco baixo. Silêncio pontua acima do meio da
   escala, porque ausência de menção não é ausência de risco — foi um dos
   refinamentos que a aplicação da taxonomia a estudos reais exigiu.
2. Quando a autonomia é alta e o custo declarado é baixo, a ficha emite um alerta
   de subdeclaração, em vez de aceitar o número. No corpus, autonomia alta e custo
   alto caminham juntos; fugir dessa correlação costuma indicar frente não
   examinada.

O resultado não avalia qualidade artística nem técnica, e a interface diz isso
explicitamente na tela de resultado.

## Acessibilidade

- Marcação semântica com landmarks, link de salto e `fieldset`/`legend` por pergunta.
- Cartões de opção são `<label>` sobre `input` real: navegação por teclado nativa.
- O foco acompanha a troca de tela e volta para o título da seção aberta.
- Contraste AA nos dois temas; estado nunca depende só de cor (ícone e texto junto).
- Alvos de toque de 44px em ponteiro grosso.
- `prefers-reduced-motion` e `prefers-color-scheme` respeitados.
- `lang` do documento acompanha a troca de idioma.

## Idiomas

Botões de bandeira no cabeçalho alternam entre português do Brasil e inglês. A
escolha e o tema ficam salvos no navegador da pessoa (`localStorage`), junto com o
rascunho do formulário e o histórico de fichas.
