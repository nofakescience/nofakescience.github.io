# Consultation
La page est accessible [ici](https://nofakescience.github.io/).

# Documentation de développement
Ce projet s'appuie sur le moteur de blog [Jekyll](https://jekyllrb.com) et nécessite les [dépendances suivantes](https://jekyllrb.com/docs/) :
 * Environnement de développement Ruby
 * Jekyll
 * Bundler gems

Si vous ne souhaitez pas installer ces dépendances, vous pouvez également utiliser docker :

```bash
docker run --rm -it -v $PWD:/srv/jekyll:rw -p 4000:4000 -p 35729:35729 jekyll/builder jekyll serve --incremental --livereload --watch --force_polling
```
Les options ajoutés ont les effets suivants :
 * __incremental__ : rebuild uniquement les fichiers ayant été modifiés
 * __livereload__ : le navigateur se recharge lorsque le site est rebuild
 * __watch__ : rebuild automatiquement lorsqu'un fichier a été modifié
 * __force_polling__ : workaround pour montage cifs

Un docker-compose est mis à disposition et se lance de la manière suivante :
```bash
docker-compose up -d serve
```

# Génération du site
```bash
jekyll build
```
ou
```bash
docker run --rm -it -v $PWD:/srv/jekyll:rw jekyll/builder jekyll build
```
ou
```bash
docker-compose up build
```

# Documentation d'ajout et modification de contenu
```
En cours
```
