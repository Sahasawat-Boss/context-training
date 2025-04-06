import CounterContext from "@/app/components/comp-context/CounterContext"
import DisplayCounterContext from "@/app/components/comp-context/DisplayConterContext"

const TestContext = () => {
    return (
        <main className='p-4'>
            <h1 className='font-bold text-2xl mb-4'>TestContext</h1>
            <div>
                <CounterContext/>
                <br />
                <DisplayCounterContext/>
            </div>
        </main>
    )
}

export default TestContext