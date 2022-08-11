import './App.css';
import CounterView from "./features/counter/CounterView";
import PostsView from './features/post/PostsView';


function App() {
  return (
    <div className="App">
      <h1>Welcome to react-redux</h1>
      <CounterView></CounterView>
      <PostsView></PostsView>
    </div>
  );
}

export default App;
