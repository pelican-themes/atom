## Pelican Atom Theme

A responsive theme inspired by the VSCode and Atom.
![Render of the Atom theme](showcase.png)


## TODOs

- [ ] Update link/text to Atom theme in the bottom
- [ ] Option to include image instead of ASCII art
- [ ] Move ASCII art picture out of the config file
- [ ] Support pagination
- [ ] Support FEEDS
- [ ] Disqus support
- [ ] Add `archives`, `author`, `authors` and `period_archives` templates
- [ ] Clean up Javascript code
- [ ] Support for translations
- [ ] Finish social media meta `X` and `open_graph`

## Installation


## Settings

```python
AUTHOR = 'Author'
SITENAME = 'Atom'
SITEURL = 'http://localhost:8000/'
HEADLINE = 'Atom Theme'
TIMEZONE = 'Europe/Amsterdam'
DEFAULT_LANG = 'En'
DEFAULT_PAGINATION = 10

# meta data description
DESCRIPTION = "hello world"

# Note that the key of this dict are the font-awesome classnames
SOCIALS = {
    'github': 'https://github.com/frankcorneliusmartin',
    'linkedin': 'https://www.linkedin.com/in/frankcorneliusmartin',
    'facebook': None,
    'pinterest': None
}

THEME =  Path('.') / 'atom'

STATIC_PATHS = ['images', 'extra/CNAME']

EXTRA_PATH_METADATA = {
    'extra/CNAME': {'path': 'CNAME'},
    'extra/robots.txt': {'path': 'robots.txt'},
    # expects a folder containing several files generated at:
    # https://favicon.io/favicon-converter/
    'images/favicon': {'path': 'favicon/'}
}

# Disable the use of tags, these are shown for each post on the index
# pages (e.g home and the tags page) and shown above each post on the
# post page.
SHOW_TAGS = True

# Disable the use of categories, these are shown for each post on the
# index pages (e.g home and the tags page) and shown above each post on
# the post page.
SHOW_CATEGORIE = True


MENU_ITEMS = (
    ('Blog', SITEURL),
    ('Curriculum Vitae', f'{SITEURL}/pages/curriculum-vitae.html'),
    ('Topics', f'{SITEURL}/{TAGS_URL}'),
    ('Categories', f'{SITEURL}/{CATEGORIES_URL}'),
)

# Code blocks line numbering
PYGMENTS_RST_OPTIONS = {'linenos': 'table'}
```

## Generate Articles

## Styling Options

TODO:
- cv items
- rows of images
- code blocks
