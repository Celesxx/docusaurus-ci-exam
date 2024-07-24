---
sidebar_position: 1
---

# explication des étapes 

## étape 1

faire la commande suivante pour initialisation docubidule

```bash
npx create-docusaurus@latest my-website classic  
```

## étape 2 

faire un dossier .github à la racine du projet puis ajouter ceci dans un fichier action.yml

```yml
name: Deploiment de l'app docbidule

on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest
    steps:

      - uses: actions/checkout@v2
      
      - name: Installation de Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'

      - name: Installation de yarn
        run: yarn install

      - name: Run tests
        run: npm test
        continue-on-error: true
        
      - name: Build de l'application
        run: yarn build

      - name: Deploy to GitHub Pages
        uses: celesx/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: build

```

# étape 3 

faire les commandes suivantes pour ajouter sur le repo 

```bash
git add .
git commit -m "feat: ajout du projet et du github action"
git push
```

# étape 4 

faire un dossier `__tests__` et ajouter dans le fichier build.test.js 

```js
const { execSync } = require('child_process');

describe('Processus de build', () => 
{
    test('Vérification du build', () =>
    {
        try { execSync('yarn build', { stdio: 'inherit' }); } 
        catch (error) { throw new Error('Build process failed.'); }
    });
});
```

le gitflow utilisé c'est feat pour les nouvelles version et update pour l'upgrade de fonctions
