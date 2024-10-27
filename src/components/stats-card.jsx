import Link from "next/link"
export default function StatCard({type}){
    return (
        <div className="rounded-2xl even:bg-purple-300  p-4 odd:bg-yellow-100">
                <div className="flex gap-3  justify-between items-center">
                    <span className="rounded-lg bg-white p-1 text-xs">{new Date().getFullYear() }</span>
                    <Link href={"#"}>
                        <img src="/more.png" className="w-4 h-2" alt="more" />
                    </Link>
                </div>

                <h1 className="text-lg font-semibold my-2">{type.count}</h1>

                <span className="text-gray-600 py-1">{ type?.user}</span>

        </div>
    )
}