import StatCard from '@/components/stats-card';
import CountChart from '@/components/countchart';


const AdminPage = () => {
    return (
        <div className="p-5 flex flex-col md:flex-row">
            {/* left */}
            <div className="4/5">
                    {/* cards */}
                <div className="flex gap-4 flex-wrap">
                    <StatCard  type={{user:"Students",count:6123}}/>
                    <StatCard  type={{user:"Parents",count:1123}}/>
                    <StatCard  type={{user:"Staffs",count:34}}/>
                    <StatCard  type={{user:"Teachers",count:20}}/>
                </div>

                {/* charts   */}

                <div className="my-4 flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-2/5 h-[350px]">
                        <CountChart />
                    </div>

                    <div className="w-full w-3/5 h-[350px]">
                        <span> other stats </span>
                    </div>

                </div>
            </div>


            {/* right */}
            <div className="1/5">
            </div>


        </div>
    )
}

export default AdminPage