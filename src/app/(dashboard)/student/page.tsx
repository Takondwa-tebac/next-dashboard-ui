import EventCalendar from '@/components/eventcalendar';
import Announcements from '@/components/announcements';
import Schedule from '@/components/bigcalendar';

const StudentPage = () => {
    return (
        <div className="p-5 flex flex-col xl:flex-row">

         <div className="w-full xl:w-2/3">

            <div className="h-full rounded-mx p-4">
                <h1 className="text-xl font-semibold">Shedule (3 East) </h1>

                <div className="my-2">
                    <Schedule />
                </div>
            </div>
         
         </div>

         <div className="w-full xl:w-1/3">

            <div className="">
                <EventCalendar />
             </div>

             <div className="">
                <Announcements />
             </div>

         </div>
      </div>
    )
}

export default StudentPage