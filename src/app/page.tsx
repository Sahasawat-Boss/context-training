import CounterComp from "./components/ReactComps/Counter"
import Input from "./components/ReactComps/Input"
import Toggle from "./components/ReactComps/OnOff"
import TodoList from "./components/ReactComps/Todo"

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-black">Home Page</h1>
      <br />
      <CounterComp />
      <Input />
      <Toggle />
      <TodoList/>
    </div>
  )
}

export default Home