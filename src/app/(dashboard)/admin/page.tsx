import StatCard from '@/components/stats-card';
import CountChart from '@/components/countchart';
import AttendanceChart from '@/components/attendanceChart';
import FinanceChart from '@/components/financechart';
import EventCalendar from '@/components/eventcalendar';




const AdminPage = () => {
    return (
        <div className="p-5 flex flex-col gap-8 md:flex-row">
            {/* left */}
            <div className="w-full md:w-3/5">
                    {/* cards */}
                <div className="flex gap-4 flex-wrap">
                    <StatCard  type={{user:"Students",count:6123}}/>
                    <StatCard  type={{user:"Parents",count:1123}}/>
                    <StatCard  type={{user:"Staffs",count:34}}/>
                    <StatCard  type={{user:"Teachers",count:20}}/>
                </div>

                {/* charts   */}

                <div className="my-4 flex flex-col md:flex-row gap-4 justify-between">
                    <div className="w-full md:w-2/5 h-[350px]">
                        <CountChart />
                    </div>

                    <div className="w-full md:w-3/5 h-[350px]">
                        <AttendanceChart />
                    </div>

                </div>

                <div className="w-full">
                    <FinanceChart />
                </div>
            </div>


            {/* right */}
            <div className="flex flex-col gap-8 w-full md:w-2/5 ">
             <div className="">
                <EventCalendar />
             </div>
            </div>


        </div>
    )
}

export default AdminPage