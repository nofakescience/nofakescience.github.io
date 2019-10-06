<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="CC BY-NC-ND 4.0" src="https://img.shields.io/badge/license-CC%20BY--NC--ND%204.0-brightgreen.svg"/></a>

# Consultation

La page est accessible [ici](https://nofakescience.github.io/).

# Documentation de développement

Ce projet s'appuie sur le moteur de blog [Jekyll](https://jekyllrb.com) et nécessite les [dépendances suivantes](https://jekyllrb.com/docs/) :

- Environnement de développement Ruby
- Jekyll
- Bundler gems

Si vous ne souhaitez pas installer ces dépendances, vous pouvez également utiliser docker :

```bash
docker run --rm -it -v $PWD:/srv/jekyll:rw -p 4000:4000 -p 35729:35729 jekyll/builder jekyll serve --incremental --livereload --watch --force_polling
```

Les options ajoutés ont les effets suivants :

- __incremental__ : rebuild uniquement les fichiers ayant été modifiés
- __livereload__ : le navigateur se recharge lorsque le site est rebuild
- __watch__ : rebuild automatiquement lorsqu'un fichier a été modifié
- __force_polling__ : workaround pour montage cifs

Un docker-compose est mis à disposition et se lance de la manière suivante :

```bash
docker-compose up -d serve
```

# Génération du site

```bash
bundle exec jekyll serve --livereload --watch --force_polling --trace -V
```

ou

```bash
bundle exec jekyll build -d ../master
```

# Documentation d'ajout et modification de contenu

```bash
En cours
```

## Ajout d'article de presse

Pour ajouter un objet dans la liste des articles de presse (section droite du site web), il faut ajouter un objet dans le fichier [_data/press.yml](./_data/press.yml), en précisant les informations suivantes :

- site : le site de l'article de presse
- desc : une courte description de l'article
- date : la date de publication
- link : le lien pour accéder à l'article
