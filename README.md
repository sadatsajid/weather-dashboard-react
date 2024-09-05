# Weather Dashboard React Application

This repository is used as a template of all the React-based applications.

## Technologies Used

* React
* TypeScript
* MUI (Material UI)
* React Query
* Axios

## System Requirements

- Node >=18.19.0.

### Required NPM packages

- TypeScript `npm i -g typescript`

## Installation

#### Install all the Node dependencies:
```bash
pnpm install
```

#### Copy all the contents of `.env.example` to `.env`:
```bash
cp .env.example .env
```

#### Update all the necessary environment variables and most importantly these:
```dotenv
VITE_APP_WEATHER_API_BASE_URL=
```

#### Run using the following command in your terminal:
```bash
pnpm dev
```

#### Create dist folder using the following command in your terminal:
```bash
pnpm build
```

#### Access the panel from:
```
http://localhost:5173/
```

## Project Structure

* **src/assets:** Images are stored here
* **src/components:** Define re-usable components
* **src/contexts:** Entities/Interface setup of each features
* **src/layouts:** Design application layouts (Sidebar, Topbar)
* **src/pages:**  Top level application screens
* **src/providers:**  Define library providers for App.tsx
* **src/themes:**  Define custom theme
* **src/types:**  Define types and interfaces

## Documentation is your best friend:

- React: https://react.dev/
- Vite: https://vitejs.dev/
- Typescript: https://www.typescriptlang.org/
- MUI: https://mui.com/material-ui/
- React Query: https://tanstack.com/query/latest/docs/framework/react/overview
