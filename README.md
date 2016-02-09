# tag

Styled tags for ESS

## Usage

You can import all the defaults

    %ui-kit-tag/index.ess
    
Or pick and choose as skins

    html
      %ui-kit-tag/html.ess

    h1
      %ui-kit-tag/h1.ess
      
    p
      %ui-kit-tag/p.ess
      
    a
      %ui-kit-tag/a.ess


You can even extend skins by passing optional props

    .anchor
      %ui-kit-tag/a.ess(color='hsla(0, 50%, 50%, 1)')

## Configuring

All variables come with defaults, and can either be configured through props (see above) or through the `root.js`, prefixed with
`tag`. For example, to set `html`'s `fontFamily` to `Courier`, do

    {
      tagHtmlFontFamily: 'Courier'
    }
    
in your `root.js`. See below for a complete list of available tags and their respective variables.

## Tags

### `html`

- `fontSize`
- `fontFamily`

### `body`

- `fontSize`

### `a`

- `color`
- `hoverColor`

### `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`

Since these tags use `ui-kit/typography` to generate styles, they do not accept variables directly.
However, you can configure them easily via the [typography variables](https://github.com/ui-kit/typography).

## Todo

- `ul`, `li`

## License

MIT
