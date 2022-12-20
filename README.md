# Swipy

## Setup
Dieses Projekt habe ich mit Vue 3 + Vite aufgesetzt. Grund dafür ist die default Einstellung beim initialen Aufsetzen von Vue 3. Zusätzlich bietet Vite einen zügigen Development Prozess an, der durchaus schneller sein kann als bei bspw. Webpack. Zudem könnte Vitest hinzugefügt werden.
Verzichtet wurde jedoch auf besagte Tests und auch auf Typescript, da dieses Projekt nur eine sehr begrenzte Größe hat. In den Components wurde die Options API verwenden, da dies eine klare Sturktur bietet und Skalierung (und Wiederverwendbarkeit), bei dieser Größe eine untergeordnete Rolle spielte. Zudem ist meine Erfahrung mit der Options API deutlich größer. 

## UX/UI
Angeleht ist das Design und die Benutzererfahrung an einen Lockscreen vom Smartphone. Der Header stellt dabei den Lockbutton dar, den es zu swipen gilt. Dieser ändert sich dann in eine Menüleiste.
Dies ist ein von jedem Menschen gelerntes Verhalten, sodass es intuitiv bedienbar ist.

## Vue 3 Project Setup README

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
