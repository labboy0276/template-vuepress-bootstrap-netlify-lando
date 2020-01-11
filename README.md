# VuePress Template

Use this template to easily spin up Bootsrap 4 themed VuePress sites to use locally and on Netlify.

### Developing

You can easily get the site running locally.

__TODO: Add link to start state spinups__

```bash
# Start it up
cd template-vuepress
lando start

# Get a helpful list of all your lando commands
lando

# Watch site while writing codez
lando yarn dev
```

### Testing

```bash
# Run the VueJS linter
lando lint

# Run the markdown linter
lando test
```

### Theming

There are standard components in the theme directory.  I have split them out to home and interior pages so you can have different styled pages.  Although the look the same now, you can use your coding skillz to make the changes.

## References

* [Lando docs](https://docs.devwithlando.io/)
* [Vuepress docs](https://vuepress.vuejs.org)
