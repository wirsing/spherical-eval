# LA JENI index visualization.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# yarn
yarn build
```

Locally preview production build:

```bash
# npm
# yarn
yarn preview
```

## Env Variables

You will need a mapbox access token to access maps and styles. Create your own accound and contact the author to get access to the map styles.

## Todos

Please look for todos in the code. Additionally consider these optimizations:

- Speed optimizations on the map. Digure out how to minimize layer data and map load times, optimize tile layer.
- Create a loader when map changes
- Optimize responsiveness
- Add more Integration tests. 
- Add metadata for search optimization and display
- Possibly move styling data to code from saved mapbox map style.

Check out the nuxt [documentation](https://nuxt.com/docs/) for more information.
More info on [mapbox](https://docs.mapbox.com/).
