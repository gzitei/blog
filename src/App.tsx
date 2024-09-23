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

//TODO make app responsive

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
                <Route path="/" element={<CardContainer />} />
                <Route path={prefix + "/"} element={<CardContainer />} />
                <Route path={prefix + "/article/:id"} element={<Article />} />
                <Route path={prefix + "/tags"} element={<Tags />} />
                <Route path={prefix + "/about"} element={<About />} />
                <Route path="/*" element={<h2>Content not found!</h2>} />
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
