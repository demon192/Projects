import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
