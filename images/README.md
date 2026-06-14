# Imagens do site

Coloque aqui as fotos reais do site. Enquanto não houver foto, o site mostra
um gradiente colorido bonito no lugar (não fica quebrado).

## Como adicionar uma foto

1. Salve a imagem nesta pasta `images/` com o nome esperado (veja a lista abaixo).
2. No arquivo HTML correspondente, **descomente** a linha `<img ...>` que está logo
   acima do texto `📷 images/...` e apague o `<span class="photo-hint">...</span>`.

   Exemplo, em `index.html`:

   ```html
   <div class="hero-photo photo">
     <img src="images/hero.jpg" alt="Mulheres viajando juntas com bandeira LGBT">
   </div>
   ```

## Nomes de arquivo usados pelo site

| Arquivo                     | Onde aparece                         |
|-----------------------------|--------------------------------------|
| `hero.jpg`                  | Foto grande da Home                  |
| `projeto.jpg`               | Seção "O que é o projeto?" (Home)    |
| `mogi.jpg`                  | Card Mogi – SP (Home)                |
| `morro.jpg`                 | Card Morro de São Paulo (Home)       |
| `projeto-hero.jpg`          | Foto grande da página "O Projeto"    |
| `viagens-hero.jpg`          | Foto grande da página "Nossas Viagens" |

Dica: use imagens em formato **.jpg** com largura de ~1200px para o site ficar leve e rápido.
