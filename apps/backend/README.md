# @injective-otc/backend

## CLI

Run the production server:

```bash
yarn
yarn build
yarn start --chain-id {INJECTIVE_CHAIN_ID}
```

Run the development server with live reload:

```bash
yarn
yarn dev -- --chain-id {INJECTIVE_CHAIN_ID}
```

Other flags:

```bash
yarn
yarn start --help
```

## Docker

Run the docker image for the production server:

```bash
docker build -t {YOUR_IMAGE_NAME} .
docker run -v {PATH_YOU_WANT_TO_STORE_DATA}:/data {YOUR_IMAGE_NAME}  --chain-id {INJECTIVE_CHAIN_ID}
```
