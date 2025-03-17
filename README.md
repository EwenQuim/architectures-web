# Architectures Web

Dans ce cours, nous allons voir les différentes architectures web qui existent. Nous allons voir les avantages et les inconvénients de chacune d'entre elles.

Pour chaque architecture, vous allez pouvoir retrouver un exemple simple pour mieux comprendre comment cela fonctionne. Pour le lancer en local, il suffit d'exécuter la commande `make` dans le dossier de l'architecture que vous souhaitez tester, ou `make run-0`, `make run-1`, `make run-2`... pour lancer la démo de l'architecture de votre choix.

Les commandes lançent les projets en mode prod et non développement : il faut redémarrer le serveur à chaque modification. C'est volontaire, pour que les exemples soient plus proches de la réalité, simples à comprends et non pollués par des outils de développement.

## TD fil rouge

Pour ce TD, vous allez devoir réaliser une application web simple, qui permet de gérer une liste de recettes. Vous allez devoir réaliser cette application en utilisant une des architectures que nous avons vu en cours.

Elle se basera sur une API REST qui permettra de gérer les recettes. Vous devrez réaliser une interface web qui permettra d'interagir avec cette API.

- API : https://gourmet.cours.quimerch.com (elle fournit aussi une interface utilisateur et des routes admin, mais vous n'avez pas besoin de les utiliser)
- OpenAPI (description des routes existantes et disponibles) : https://gourmet.cours.quimerch.com/swagger/index.html

### Fonctionnalités demandées

- PAGE `/` : Afficher la liste des recettes disponibles
- PAGE `/recettes/{recetteID}` : Afficher une recette en particulier
- Se connecter avec son compte utilisateur (un user/mdp vous sera donné)
- Se déconnecter de son compte utilisateur
- Ajouter une recette à ses favoris
- Supprimer une recette de ses favoris
- PAGE `/favorites` Voir la liste de ses recettes favorites

### Contraintes

- Utiliser Docker pour déployer votre application
- Utiliser Git pour versionner votre code
- Utiliser une des architectures vues en cours
  - **Recommendé**
    - React (Dockerfile fourni)
    - Next.js (Dockerfile fourni)
    - Astro (Dockerfile fourni)
  - Je peux **aussi** vous noter sur les technologies suivantes. Cependant, je ne pourrai pas vous aider si vous avez des problèmes avec celles-ci, et je ne fournirai pas de Dockerfile. C'est à vos risques et périls!
    - Vue / Nuxt
    - Svelte / SvelteKit
    - Templating (Django, Go, Ruby on Rails, PHP)

### Évaluation

- 20% Répondre aux exigences (features demandées, pas de crashs)
- 10% Bonne UX/UI
- 10% Code de qualité
- 20% Performance
- 20% Sécurité
- 20% Pratiques professionnelles (tests, CI/CD, documentation, etc...)

Toute initiative est la bienvenue, tant que les fonctionnalités demandées sont bien implémentées. Si vous avez des idées pour améliorer l'application, n'hésitez pas à les implémenter!

### Pour commencer

### Groupes

| Team Name | Team Member 1 | Team Member 2 | Git Repository | Docker Image Link |
| --------- | ------------- | ------------- | -------------- | ----------------- |
| alpha     | Arthur Baudin | Clara Guillet |  https://github.com/dd-absol/archiweb-project |[lien docker hub](https://hub.docker.com/r/ddabsol/gourmet-astro)|
| beta      | Damien Ouzillou | Théo Garampon | https://github.com/DamsOuz/architectures-web |                   |
| gamma     |Antoine Cheneau|               |         https://github.com/chenow/gourmitton         |    [chenow/gourmitton](https://hub.docker.com/r/chenow/gourmitton)               |
| delta     |               |               |                |                   |
| epsilon   |  Liwei SUN    | Dac-An VO     | https://github.com/Dac-An-hub/cass-app               |                   |
| zeta      |  Laurent Sun             |   Sharmilan             |     https://github.com/laurentsunCs/architectures-web           |    llsun/recipe-app|
| eta       |  Ayoub SGUIAR LHAMDANI |               |     https://github.com/ayoub-sguiar/architectures-web           |                   |
| theta     |               |               |                |                   |
| iota      |               |               |                |                   |
| kappa     |  Pierre-Olivier Coudert             |               |  https://github.com/MRmdum/TD-ArchiWeb              |                   |
| lambda    |Antoine Castel |Arnaud PY      |[Lien GitHub](https://github.com/antoinecstl/Gourmitton)|[nonouille/lambda-archi-web](https://hub.docker.com/repository/docker/nonouille/lambda-archi-web/general)|
| mu        |Clara Bou Hanna             |Tom Bray|              |  https://hub.docker.com/repository/docker/clarabh/gourmet-frontend/general           |
| nu        |Elias Salvan   |Antoine Pélerin|https://github.com/elsgit43/architectures-web|https://hub.docker.com/r/elsal1/bon-app|
| xi        |               |               |                |                   |
| omicron   |               |               |                |                   |
| pi        | Elie Caratgé  | Ayman Ben Souira | [git@github.com:dotdelete/gourmet.git](https://github.com/dotdelete/gourmet.git) | [dotdelete/gourmet:latest](https://hub.docker.com/repository/docker/dotdelete/gourmet/general)                  |
| rho       |               |               |                |                   |
| sigma     |Thibault Muller|Pierre-Louis Veyrenc|[tibo-mllr/TP-archi-web](https://github.com/tibo-mllr/TP-archi-web)|[tibo-mllr/sigma-cooking](https://hub.docker.com/r/tibomllr/sigma-cooking)|
| tau       | Timothée Vargenau              |               | [Lien GitHub](https://github.com/timothee-vrg/architectures-web-recipe)               |                   |
| upsilon   |Alex Melhem|               |[J'ai faim](https://github.com/41ks/archiweb-jaifaim)|[am0911/jaifaim](https://hub.docker.com/r/am0911/jaifaim)|
| phi       |               |               |                |                   |
| chi       | Alexandre Correia   |  Gustave Legrand     | https://github.com/AlexandreCGithub/archiweb-TD               |  https://hub.docker.com/r/magnoir/archiweb-td                 |
| psi       | Lisa Lupi|Thomas Soupizet|[github](https://github.com/lisa-lupi-cs/archiweb)|[docker](https://hub.docker.com/r/thomas01111/duo_gourmand)|
| omega     | Thomas Melwig |Valentin Gérard|[CookingMadness](https://github.com/tmelwig/CookingMadness)|[DockerImage](https://hub.docker.com/repository/docker/ankydios/cooking-madness/general)|
