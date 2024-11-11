import Link from "next/link"

interface announcement{
    title: String,
    date: String,
    description: String,
}

const announcements: announcement[] = [
    {
        title: "Close Day",
        date: "08-12-2024-12",
        description:"tizakhala tikutsekela sukulu pa date li chonde zabwereni ndi makolo"
    },
    {
        title: "Fees Adjustments",
        date: "23-01-2025",
        description:"due to inflation and other factors in meeting operational costs we would like to alert parents that fees has be adjusted to MWK 350,000.00"
    },
    {
        title: "Computer Studies ",
        date: "21-01-2025",
        description:"With the introudction of our new state of the art lab we are pleased to announce that we have added computer studies to list of subjects."
    },

]


export default function Announcements(){

    return (
        <div className="flex flex-col gap-4">
        <div className="flex justify-between">
            <h1 className="text-lg text-gray-600">Announcements</h1>
            <Link href="#" className="text-gray-600 ">View all</Link>
        </div>

        {
               announcements.map((announcement,index)=> (
                    <div className="shadow-sm bg-white px-4 even:bg-[#C3EBFA] rounded-lg odd:bg-purple-200" key={index}>
                        <div className="flex justify-between items-center my-2">
                            <h1 className="font-bold tex-lg">{announcement.title}</h1>
                            <span className="text-xs px-2 py-2 bg-white rounded-lg text-gray-600 capitalize">{announcement.date}</span>
                        </div>

                        <div className="text-gray-600 my-3 text-xs">
                            {announcement.description}
                        </div>
                    </div>
                ))
            }

        </div>
    )
}