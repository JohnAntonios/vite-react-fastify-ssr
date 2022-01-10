import { UserConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import viteSSR from "vite-plugin-ssr/plugin";

export default <UserConfig>{
  plugins: [viteReact(), viteSSR()],
};
