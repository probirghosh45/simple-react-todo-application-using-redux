import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import { Provider } from 'react-redux'
import store from "./redux/store";

function App() {
  return (
    <Provider store={store} >
      <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Navbar />
          <Header />
          <hr class="mt-4" />
          <TodoList />
          <hr class="mt-4" />
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
