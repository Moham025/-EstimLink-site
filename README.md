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

## Installeurs (GitHub Releases)

Les boutons de téléchargement pointent vers les GitHub Releases de ce repo :
- Excel : `v1.3.0/EstimLink-Excel-Setup.exe` (inchangé).
- Connecteur Archicad complet : `v1.3.1/EstimLink-for-Archicad-Setup.exe`.
- Réparation d'une installation existante : `v1.3.1/EstimLink-Tapir-Repair-1.3.1.exe` (guide d'installation).

La version 1.3.1 corrige la détection d'Archicad depuis PowerShell 32 bits et les
messages d'échec de copie de Tapir. Le connecteur complet conserve le bundle
Python extrait de la release publique 1.3.0 ; seuls les scripts d'installation
et de vérification sont mis à jour.

Pour publier une version :
1. Compiler les installeurs concernés (repo EstimLink-Local, dossier `installer/`).
2. Créer une release GitHub avec le nouveau tag, joindre les `.exe`, puis publier.
3. Vérifier que les liens de téléchargement fonctionnent avant de mettre à jour
   `index.html` et `docs.html`. Conserver les liens des composants inchangés.

## À maintenir

- **Manifeste** : quand `manifest-prod.xml` change dans le projet add-in, recopier la nouvelle version dans `download/EstimLink-manifest.xml`.
- **Tarifs** : les montants du plan Pro sont des placeholders (`—`) à remplacer dans `index.html` (section `#tarifs`).
- **Contact** : les liens `mailto:` pointent sur sanou.moham92@gmail.com.
