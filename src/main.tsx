import { ViteReactSSG } from "vite-react-ssg";
import type { RouteRecord } from "vite-react-ssg";
import App from "./App.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import "./index.css";

const routes: RouteRecord[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, Component: Index },
      { path: "*", Component: NotFound },
    ],
  },
];

export const createRoot = ViteReactSSG({ routes });
