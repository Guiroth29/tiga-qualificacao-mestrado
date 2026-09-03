# TIGA — qualificação de mestrado e ferramenta web

Pesquisa de mestrado em Informática (PPGInf / UFPR) de **Guilherme de Queiroz Lima Roth**.

A TIGA (*Taxonomy for Integrating Generative AI in Non-Interactive Audiovisual Production*) é uma taxonomia multidimensional para classificar o uso de inteligência artificial generativa em filme, série, clipe, publicidade e animação linear.

Orientação: Natasha Malveira Costa Valentim. Coorientação: Rafael de Andrade de Pereira.

## Para a banca / orientadora: como ver o site

Não é preciso instalar nada. Abra o link:

**https://guiroth29.github.io/tiga-qualificacao-mestrado/**

O atalho **Ver um exemplo pronto** mostra uma ficha já preenchida (estudo MagicVFX do corpus). **Classificar meu projeto** percorre o protocolo da taxonomia e gera o resultado.

**Minhas fichas** guarda classificações só neste navegador (não há login). Para a apresentação, use o exemplo pronto ou classifique um projeto na hora.

## O que tem neste repositório

| Pasta | Conteúdo |
| --- | --- |
| [`tiga-web/`](tiga-web/) | Ferramenta web (HTML, CSS e JavaScript). Sem servidor, sem banco, sem build. |
| [`Qualificação_mestrado/`](Qualificação_mestrado/) | Fonte LaTeX da qualificação e um PDF compilado (`main.pdf`), quando disponível. |

## Rodar o site no computador

Abra `tiga-web/index.html` no navegador, ou:

```bash
cd tiga-web
python3 -m http.server 8765
```

Depois acesse `http://localhost:8765/`.

## Compilar a qualificação (LaTeX)

```bash
cd Qualificação_mestrado
make
```

O modelo é o do PPGInf/UFPR. Se preferir não instalar TeX, use o `main.pdf` deste repositório ou importe os `.tex` no [Overleaf](https://www.overleaf.com/).
