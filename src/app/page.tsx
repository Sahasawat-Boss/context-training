import CounterComp from "./components/Counter"
import Input from "./components/Input"
import Toggle from "./components/OnOff"


const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-black">Home Page</h1>
      <br />
      <CounterComp />
      <Input />
      <Toggle />

    </div>
  )
}

export default Home