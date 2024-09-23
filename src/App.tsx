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
                <Route path="/article/:id" element={<Article />}></Route>
                <Route path="/tags" element={<Tags />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/*" element={<h2>Content not found!</h2>}></Route>
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
