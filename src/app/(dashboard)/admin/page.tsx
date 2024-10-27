import StatCard from '@/components/stats-card';
import CountChart from '@/components/countchart';


const AdminPage = () => {
    return (
        <div className="p-5 flex flex-col md:flex-row">
            {/* left */}
            <div className="2/3">
                    {/* cards */}
                <div className="flex gap-4 flex-wrap">
                    <StatCard  type={{user:"Students",count:6123}}/>
                    <StatCard  type={{user:"Parents",count:1123}}/>
                    <StatCard  type={{user:"Staffs",count:34}}/>
                    <StatCard  type={{user:"Teachers",count:20}}/>
                </div>

                {/* charts   */}

                <div className="flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-1/2">
                        <CountChart />
                    </div>

                    <div className="w-full w-1/2">
                        <span> other stats </span>
                    </div>

                </div>
            </div>


            {/* right */}
            <div className="1/3">
            </div>

            
        </div>
    )
}

export default AdminPage