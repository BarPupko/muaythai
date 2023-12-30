import { FunctionComponent } from "react";

interface ScheduleProps {

}

const Schedule: FunctionComponent<ScheduleProps> = () => {
    return (<>
        <div className="container padding-5px-tb">
            <div className="table-responsive">
                <p className="text-white center">STAY UP TO DATE ON CLASS TIMES!</p>
                <h2 className="text-white text-center padding-5px-tb padding-15px-lr border-radius-5 margin-2px-bottom"> CONTACT US IF YOU HAVE ANY QUESTIONS ABOUT OUR CLASSES.</h2>
                <table className="table table-bordered text-center">
                    <thead>
                        <tr className="bg-light-gray">
                            <th className="text-uppercase">Time
                            </th>
                            <th className="text-uppercase">Sunday</th>
                            <th className="text-uppercase">Monday</th>
                            <th className="text-uppercase">Tuesday</th>
                            <th className="text-uppercase">Wednesday</th>
                            <th className="text-uppercase">Thursday</th>
                            <th className="text-uppercase">Friday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="align-middle">09:00am</td>
                            <td>
                                <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Thai-Fit</span>
                                <div className="margin-10px-top font-size14">9:00-10:00</div>
                            </td>
                            <td>
                            </td>

                            <td>
                                <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Thai-Fit</span>
                                <div className="margin-10px-top font-size14">9:00-10:00</div>
                            </td>
                            <td>
                            </td>
                            <td>
                                <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Thai-Fit</span>
                                <div className="margin-10px-top font-size14">9:00-10:00</div>
                            </td>
                            <td>
                            </td>
                        </tr>

                        <tr>
                            <td className="align-middle">10:00am</td>
                            <td>
                                <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Thai-Fit</span>
                                <div className="margin-10px-top font-size14">10:00-11:00</div>
                            </td>
                            <td className="bg-light-gray">

                            </td>
                            <td>
                                <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Thai-Fit</span>
                                <div className="margin-10px-top font-size14">10:00-11:00</div>
                            </td>
                            <td>

                            </td>
                            <td>
                                <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Thai-Fit</span>
                                <div className="margin-10px-top font-size14">10:00-11:00</div>
                            </td>
                            <td className="bg-light-gray">

                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle">12:00am</td>
                            <td>
                            </td>
                            <td className="bg-light-gray">

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>
                            </td>
                            <td>
                                <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Team Muay-Thai</span>
                                <div className="margin-10px-top font-size14">12:00-14:00</div>
                            </td>
                        </tr>

                        <tr>
                            <td className="align-middle">17:00pm</td>
                            <td>

                            </td>
                            <td>
                                <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Muay-Thai kids</span>
                                <div className="margin-10px-top font-size14">17:00-18:00</div>
                            </td>
                            <td>

                            </td>
                            <td>
                                <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Muay-Thai kids</span>
                                <div className="margin-10px-top font-size14">17:00-18:00</div>
                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                        </tr>

                        <tr>
                            <td className="align-middle">18:00pm</td>
                            <td className="bg-light-gray">

                            </td>
                            <td>
                                <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Muay-Thai youth</span>
                                <div className="margin-10px-top font-size14">18:00-19:00</div>
                            </td>
                            <td>

                            </td>
                            <td>
                                <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Muay-Thai youth</span>
                                <div className="margin-10px-top font-size14">18:00-19:00</div>
                            </td>
                            <td className="bg-light-gray">

                            </td>
                            <td>

                            </td>
                        </tr>

                        <tr>
                            <td className="align-middle">19:00pm</td>
                            <td>

                            </td>
                            <td>
                                <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Muay-Thai youth+</span>
                                <div className="margin-10px-top font-size14">19:00-20:00</div>
                            </td>
                            <td>

                            </td>
                            <td>
                                <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Muay-Thai youth+</span>
                                <div className="margin-10px-top font-size14">19:00-20:00</div>
                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle">20:00pm</td>
                            <td>

                            </td>
                            <td>
                                <span className="bg-danger padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Muay-thai adults</span>
                                <div className="margin-10px-top font-size14">20:00-21:30</div>
                            </td>
                            <td>

                            </td>
                            <td>
                                <span className="bg-danger padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Muay-thai adults</span>
                                <div className="margin-10px-top font-size14">20:00-21:30</div>
                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12 page-section-header">
                    <h4 className="text-center text-white">About Our</h4>
                    <h2 className="text-center text-white">Class Schedule</h2>
                </div>
                <div className="col-12">
                    <p className="text-center text-white">Here you can find all the information you need about our class schedule, including times, dates, and locations.</p>
                    <p className="text-center text-white">We offer a variety of classes throughout the week, including both Adult’s and Children’s sessions. Our classes are designed for students of all skill levels, from beginners to advanced practitioners. Our instructors are experienced and passionate about teaching Mixed Martial Arts, and are committed to helping you achieve your goals.</p>
                    <p className="text-center text-white">Please note that our schedule may be subject to change, so we encourage you to check back regularly for updates. We also offer private lessons, which can be scheduled at a time that is convenient for you. If you have any questions about our schedule or classes, please don’t hesitate to contact us.</p>
                    <h5 className="text-center color: text-white">We look forward to seeing you on the mats!</h5>
                </div>
            </div>
        </div>
    </>);
}

export default Schedule;