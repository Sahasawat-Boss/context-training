import CounterContext from "@/app/components/comp-context/CounterContext"
import DisplayCounterContext from "@/app/components/comp-context/DisplayConterContext"
import InputContext from "@/app/components/comp-context/InputContext"
import DisplayInputContext from "@/app/components/comp-context/DisInputContext"

const TestContext = () => {
    return (
        <main className='p-4'>
            <h1 className='font-bold text-2xl mb-4'>TestContext</h1>
            <div>
                <CounterContext />
                <br />
                <DisplayCounterContext />
                <InputContext />
                <DisplayInputContext/>
            </div>
        </main>
    )
}

export default TestContext