# EstimLink — Site vitrine

Site officiel de présentation de l'add-in Excel **EstimLink** (chiffrage BTP : DQE, bibliothèque de prix, liaison ArchiCAD).

Site 100 % statique — aucun build, aucune dépendance.

## Structure

- `index.html` — page d'accueil (hero, produit, ArchiCAD, tarification, téléchargement)
- `docs.html` — guide d'installation et démarrage rapide
- `style.css` — feuille de style partagée
- `download/EstimLink-manifest.xml` — manifeste de l'add-in proposé au téléchargement (copie de `manifest-prod.xml` du projet add-in)
- `assets/` — logos et icônes

## Déployer sur Vercel

1. Créer un repo Git dédié (ex. `EstimLink-site`) et y pousser ce dossier :
   ```
   git init
   git add .
   git commit -m "Site vitrine EstimLink"
   ```
2. Sur vercel.com → **Add New → Project** → importer le repo.
3. Framework preset : **Other** (site statique, pas de commande de build ni de dossier de sortie à configurer).
4. Déployer. Plus tard, brancher un domaine (ex. `estimlink.com`) dans les settings du projet ; l'add-in reste sur `estim-link-m8bt.vercel.app`.

## À maintenir

- **Manifeste** : quand `manifest-prod.xml` change dans le projet add-in, recopier la nouvelle version dans `download/EstimLink-manifest.xml`.
- **Tarifs** : les montants du plan Pro sont des placeholders (`—`) à remplacer dans `index.html` (section `#tarifs`).
- **Contact** : les liens `mailto:` pointent sur sanou.moham92@gmail.com.
