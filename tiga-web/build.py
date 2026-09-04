#!/usr/bin/env python3
"""
Gera versões de arquivo único do TIGA a partir dos fontes separados.

    python3 build.py

Saídas em dist/:
  tiga.html           página completa e autossuficiente (abre com duplo clique,
                      serve para hospedar em qualquer lugar: GitHub Pages, Netlify,
                      pendrive, anexo de e-mail)
  tiga-artifact.html  o mesmo conteúdo sem as tags <!doctype>, <html>, <head> e
                      <body>, no formato que a publicação como Artifact espera

Os fontes em assets/ continuam sendo a fonte da verdade. Edite lá e rode de novo.
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent
DIST = ROOT / "dist"


def read(rel: str) -> str:
    path = ROOT / rel
    if not path.exists():
        sys.exit(f"arquivo não encontrado: {rel}")
    return path.read_text(encoding="utf-8")


def build() -> None:
    html = read("index.html")
    css = read("assets/css/styles.css")
    js = "\n".join(read(f) for f in ("assets/js/content.js", "assets/js/app.js"))

    # O CSS entra no lugar do <link>, preservando a ordem em relação às fontes.
    html = html.replace(
        '<link rel="stylesheet" href="assets/css/styles.css">',
        f"<style>\n{css}\n</style>",
        1,
    )

    # Os dois <script src> viram um só bloco embutido.
    # O replacement precisa ser uma função: como string, o re.sub trataria as
    # sequências \n do próprio JavaScript como escapes e corromperia o código.
    html = re.sub(
        r'\s*<script src="assets/js/content\.js"></script>\s*'
        r'<script src="assets/js/app\.js"></script>',
        lambda _m: "\n  <script>\n" + js + "\n  </script>",
        html,
        count=1,
    )

    if "assets/" in html:
        sys.exit("sobrou referência a assets/ no HTML: verifique os nomes dos arquivos")

    DIST.mkdir(exist_ok=True)
    (DIST / "tiga.html").write_text(html, encoding="utf-8")

    # Versão para Artifact: só o miolo, sem as tags de documento.
    head = re.search(r"<head>(.*?)</head>", html, re.S).group(1)
    body = re.search(r"<body>(.*?)</body>", html, re.S).group(1)
    keep = "\n".join(
        line
        for line in head.splitlines()
        # charset e viewport já vêm do invólucro do Artifact
        if not re.search(r'name="viewport"|charset=', line)
    ).strip()
    (DIST / "tiga-artifact.html").write_text(f"{keep}\n{body}", encoding="utf-8")

    for name in ("tiga.html", "tiga-artifact.html"):
        size = (DIST / name).stat().st_size
        print(f"dist/{name}: {size / 1024:.0f} KB")


if __name__ == "__main__":
    build()
