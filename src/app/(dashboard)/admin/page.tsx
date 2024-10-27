import StatCard from '@/components/stats-card';

const AdminPage = () => {
    return (
        <div className="p-5 felx flex-col md:fle-row">
            {/* left */}
            <div className="2/3">

                <div className="flex gap-4 flex-wrap">
                    <StatCard  type={{user:"Students",count:6123}}/>
                    <StatCard  type={{user:"Parents",count:1123}}/>
                    <StatCard  type={{user:"Staffs",count:34}}/>
                    <StatCard  type={{user:"Teachers",count:20}}/>
                </div>
            </div>
            {/* right */}
            <div className="1/3">
            </div>
        </div>
    )
}

export default AdminPage