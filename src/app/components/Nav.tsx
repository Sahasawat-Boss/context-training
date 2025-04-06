import Link from "next/link"

const Nav = () => {
    return (
        <nav className="border p-2 bg-gray-300 flex justify-between">
            <div>Nav</div>
            <div className="flex text-lg gap-4">
                <Link href={'/'}>Home |</Link>
                <Link href={'../pages/testcontext'}>Test Context |</Link>
            </div>
        </nav>
    )
}

export default Nav