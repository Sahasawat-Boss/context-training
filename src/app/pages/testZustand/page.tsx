import CounterZ from "@/app/components/comp-Zustand/CouterZ"
import InputSimpleZComp from "@/app/components/comp-Zustand/SimpleInputZ"
import UserZ from "@/app/components/comp-Zustand/UserZ"

const ZustandPage = () => {
    return (

        <main className='p-4'>
            <h1 className='font-bold text-2xl mb-4'>ZustandPage</h1>
            <div>
                <CounterZ />
                <UserZ />
                <InputSimpleZComp/>
            </div>
        </main>
    )
}

export default ZustandPage