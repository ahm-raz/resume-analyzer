import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});


// Alright bro 😄 super simple, no fancy wording.

// This is your **Vite setup file**. It tells Vite **what extra powers to enable** when your app runs.

// ```ts
// export default defineConfig({
//   plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
// });
// ```

// ### What’s going on here:

// * **Vite** = your dev server + bundler
// * **plugins** = features you want to add

// ### Each plugin, in plain words:

// * `tailwindcss()`
//   👉 lets you use **Tailwind CSS classes** (`flex`, `p-4`, `bg-red-500`, etc.)

// * `reactRouter()`
//   👉 enables **React Router’s framework mode**
//   👉 gives you file-based routes, loaders, actions, and SSR support

// * `tsconfigPaths()`
//   👉 lets you import like this:

//   ```ts
//   import Button from "@/components/Button";
//   ```

//   instead of ugly `../../../../`

// ### Big picture

// Together with your earlier `react-router.config.ts`:

// * You’re running a **React Router SSR app**
// * Built with **Vite**
// * Styled with **Tailwind**
// * Clean imports using **TypeScript paths**

// That’s it. No magic. Just tools doing their jobs 👍
