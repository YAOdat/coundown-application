import './Countdown.css'
import React from 'react';

class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date(),
            endDate: new Date('12/22/2022'),
            totalDate: '',
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0

        }
    }



    componentDidMount = () => {
        this.interval = setInterval(() => {

            const date1 = new Date();
            const date2 = new Date('12/22/2022');
            const diffTime = Math.abs(this.state.endDate - this.state.currentDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            const milliseconds = Math.floor(diffTime % 1000);
            const seconds = Math.floor((diffTime / 1000) % 60);
            const minutes = Math.floor((diffTime / 1000 / 60) % 60);
            const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);

            this.setState({ days: diffDays, hours:('0'+hours).slice(-2), minutes: ('0'+minutes).slice(-2), seconds: ('0'+seconds).slice(-2) });

        }, 1000);

        this.interval = setInterval(() => {
            this.setState({ currentDate: new Date() });
        }, 1000);
    }


    render() {

        return (
            <div className="container">
                <div className="wrapper-main">
                    <div id="title" className="title">JavaScript Bootcamp Graduation Countdown</div>
                    <div className="clock">
                        <div id="day" className="label-count">
                            <div id="day-count" className="count">{this.state.days}</div>
                            <div id="day-label" className="label">Days</div>
                        </div>
                        <div className="label-count">
                            <div id="hour-count" className="count">{this.state.hours}</div>
                            <div id="hour-label" className="label">Hours</div>
                        </div>
                        <div className="label-count">
                            <div id="minute-count" className="count">{this.state.minutes}</div>
                            <div id="minute-label" className="label">Minutes</div>
                        </div>
                        <div className="label-count">
                            <div id="second-count" className="count">{this.state.seconds}</div>
                            <div id="second-label" className="label">Seconds</div>
                        </div>
                    </div>
                </div>



            </div>
        );


    }

}


export default Countdown;