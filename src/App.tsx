import React, { Suspense } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllTodos from "./pages/AllTodos";

import LoadingSpinner from "./components/UI/LoadingSpinner";

// this block responsible of the lazy loading, each page will be rendered when you try to visit them for the first try
// lazy loading is good when you have tonnes of pages and you want to reduce visitors loading time
const NewTodo = React.lazy(() => import("./pages/NewTodo"));
const TodoDetail = React.lazy(() => import("./pages/TodoDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="Todos" />} />
          <Route path="Todos/" element={<AllTodos />} />
          <Route path="Todos/:TodoID/*" element={<TodoDetail />} />
          <Route path="new-Todo" element={<NewTodo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
