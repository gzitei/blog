import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Article from "./Article";
import Tags from "./Tags";
import About from "./About";
import ErrorBoundary from "./ErrorBoundary";
import CardContainer from "./CardContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const prefix = "/blog";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary>
            <Header />
            <Content>
              <Routes>
                <Route path="/" element={<CardContainer />}></Route>
                <Route path={prefix + "/"} element={<CardContainer />}></Route>
                <Route
                  path={prefix + "/article/:id"}
                  element={<Article />}
                ></Route>
                <Route path={prefix + "/tags"} element={<Tags />}></Route>
                <Route path={prefix + "/about"} element={<About />}></Route>
              </Routes>
            </Content>
            <Footer />
          </ErrorBoundary>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
