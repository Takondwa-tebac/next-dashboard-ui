import Announcements from '@/components/announcements'
import Schedule from '@/components/bigcalendar'
import Performance from '@/components/performance';
import Link from 'next/link';

export default function Teacher(props){
    return(
        <div className="flex mx-4 flex-1 flex-col md:flex-row gap-4">
            {/* left */}
            <div className="w-full xl:w-2/3">
              <div className="flex flex-col xl:flex-row gap-4">
                    <div className="p-4 w-full xl:w-3/5 flex items-center gap-4 bg-blue-300">
                        <img src="/avatar.png" alt="" className="h-auto w-20 rounded-full" />
                        <div className="flex flex-col  gap-2 w-full">
                            <h1 className="text-lg font-semibold">Takondwa Kapyola</h1>
                            <span className="text-sm my-2 font-light">
                                A very hardworking young man with a diverse set of skills and delivers his work on time
                            </span>

                            <div className="flex flex-col xl:flex-row gap-4">
                                <div className="flex-col gap-2 flex">
                                    <div className="flex items-center gap-2">
                                        <img src="/result.png" alt="result" className="w-4 h-4" />
                                        <span className="text-xs">A+</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <img src="/calendar.png" alt="result" className="w-4 h-4" />
                                        <span className="text-xs">23/02/2001</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                            <img src="/mail.png" alt="result" className="w-4 h-4" />
                                            <span className="text-xs">tkapyola@lyncsystems.tech</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <img src="/phone.png" alt="result" className="w-4 h-4" />
                                            <span className="text-xs">+265 883 682 676</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col xl:w-1/5 gap-3">
                        <div className="w-full h-full flex items-center shadow-sm bg-white gap-3">
                                <img src="/singleAttendance.png" alt="2w" className="w-6 m-2" />
                                <div className="">
                                    <h1 className="font-semibold text-lg">90%</h1>
                                    <span className="text-gray-600 text-sm">Attendance</span>
                                </div>
                        </div>

                        <div className="w-full h-full flex items-center shadow-sm bg-white gap-3">
                                <img src="/singleLesson.png" alt="2w" className="w-6 m-2" />
                                <div className="">
                                    <h1 className="font-semibold text-lg">6</h1>
                                    <span className="text-gray-600 text-sm">Lessons</span>
                                </div>
                        </div>
                    </div>
                    
                    <div className="w-full flex flex-col xl:w-1/5 gap-3">

                        <div className="w-full h-full flex items-center shadow-sm bg-white p-3">
                                <img src="/singleBranch.png" alt="2w" className="w-6 m-2" />
                                <div className="">
                                    <h1 className="font-semibold text-lg">2</h1>
                                    <span className="text-gray-600 text-sm">Branches</span>
                                </div>
                        </div>


                        <div className="w-full h-full flex items-center shadow-sm bg-white p-3">
                                <img src="/singleClass.png" alt="2w" className="w-6 m-2" />
                                <div className="">
                                    <h1 className="font-semibold text-lg">6</h1>
                                    <span className="text-gray-600 text-sm">Classes</span>
                                </div>
                        </div>

                    </div>
                </div>

                {/* bottom */}
                <div className="my-4">
                  <h1 className="my-2">Teacher Schedule</h1>

                  <Schedule />
                </div>                
            </div>


            {/* right */}
            <div className="w-full xl:w-1/3">
            <div className="bg-white rounded-md">
                <h1 className="text-gray-600 font-bold text-lg">Quick Shortcuts</h1>
                <div className="my-4 flex flex-wrap gap-4">
                    <Link href={"#"} className='p-3 text-xs rounded-md bg-green-200'>Teacher's Lessons</Link>
                    <Link href={"#"} className='p-3 text-xs rounded-md bg-purple-200'>Teacher's Students</Link>
                    <Link href={"#"} className='p-3 text-xs rounded-md bg-green-200'>Teacher's Exams</Link>
                    <Link href={"#"} className='p-3 text-xs rounded-md bg-purple-200'>Teacher's Assignemts</Link>
                </div>
            </div>
            <Performance />

            <Announcements />
            </div>
        </div>
    )
}