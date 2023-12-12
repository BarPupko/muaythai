import { FunctionComponent } from "react";

interface ScheduleProps {

}

const Schedule: FunctionComponent<ScheduleProps> = () => {
    return (<>
        <div className="container padding-5px-tb">
            <div className="table-responsive">
                <h1 className="schedule text-white padding-5px-tb padding-15px-lr border-radius-5 margin-2px-bottom center">Schedule</h1>
                <p className="text-white text-center"> Our Classes</p>
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
                                <div className="margin-10px-top font-size14">9:00-10:00</div>
                            </td>
                            <td className="bg-light-gray">

                            </td>
                            <td>
                                <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Thai-Fit</span>
                                <div className="margin-10px-top font-size14">9:00-10:00</div>
                            </td>
                            <td>

                            </td>
                            <td>
                                <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Thai-Fit</span>
                                <div className="margin-10px-top font-size14">9:00-10:00</div>
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
                                <div className="margin-10px-top font-size14">20:00-21:00</div>
                            </td>
                            <td>

                            </td>
                            <td>
                                <span className="bg-danger padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Muay-thai adults</span>
                                <div className="margin-10px-top font-size14">20:00-21:00</div>
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
    </>);
}

export default Schedule;