# GCT Generator

This repository contains the code behind the Super Mario Sunshine Cheatfile Generator at https://gct.zint.ch/

---

## Features

- Custom cheat combination
- Custom stage loader based on [QbeRoot's fastcodes](https://github.com/QbeRoot/fastcodes)
- Creates cheatfiles ready for use with [Nintendont](https://github.com/FIX94/Nintendont), [Gecko Cheat Manager](https://wiibrew.org/wiki/CheatManager) and [Dolphin](https://github.com/dolphin-emu/dolphin)

---

## Contributing

### Updating Practice Codes

The codes are stored as XML files (one for each game version) in the [docs/.vuepress/public/codes](https://github.com/BitPatty/gctGenerator/tree/master/docs/.vuepress/public/codes) directory. If you want to add or change codes edit the corresponding XML file. Node that GMSJ0A refers to the NTSC-J 1.1 release of Super Mario Sunshine. (It's not actually called version A but that's what we've been calling it for years due to a misconception on what the A on the back of the box means).

### Updating Guides

You can find the guides in the [docs](https://github.com/BitPatty/gctGenerator/tree/master/docs) folder. Simply edit the corresponding markdown file (.md).

### Site Development

If you intend to change site code you need [NodeJS](https://nodejs.org/en/) version 12.18.1 or greater installed on your local.

```sh
# Install yarn
npm i -g yarn

# Install dependencies
yarn

# Run project in watch mode
# This will serve the page in development mode on http://localhost:8080
yarn dev

# Build project
yarn build
```

### Build and preview the site (Docker)

The project root provides a [docker-compose](https://docs.docker.com/compose/) file, which creates a clean build (with the same configuration as the production build) and spins up a minimal Apache server on your local, serving the resulting build on port 8080.

```sh
# Build and serve the site on http://localhost:8080
# Press CTRL+C to stop the container
docker-compose up --build
```
