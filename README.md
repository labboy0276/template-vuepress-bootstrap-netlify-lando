# VuePress, Bootstrap 4, Netlify, Lando Template

Use this template to easily spin up [Bootstrap 4](https://getbootstrap.com/) themed [VuePress](https://vuepress.vuejs.org/) sites to use locally with [Lando](https://lando.dev/) and on [Netlify](https://www.netlify.com/).

### Developing

You can easily get the site running locally.

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
