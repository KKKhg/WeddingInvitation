import React from 'react';
import './Calendar.css';

const Calendar = () => {
    
    return (
        <div className="calendar_whole_wrapper">
            <img className="border_img"
               src={require(`../assets/images/calendar_border.png`)}
            />
            <div className="calendar_wrapper">
                <div className="calendar">
                    <div className="calendar_row_wrap">
                        <span className="calendar_day calendar_sun">SUN</span>
                        <span className="calendar_day">MON</span>
                        <span className="calendar_day">TUE</span>
                        <span className="calendar_day">WED</span>
                        <span className="calendar_day">THU</span>
                        <span className="calendar_day">FRI</span>
                        <span className="calendar_day calendar_sat">SAT</span>
                    </div>
                    <div className="calendar_row_wrap">
                        <span className="calendar_date calendar_sun"></span>
                        <span className="calendar_date"></span>
                        <span className="calendar_date"></span>
                        <span className="calendar_date"></span>
                        <span className="calendar_date">1</span>
                        <span className="calendar_date">2</span>
                        <span className="calendar_date calendar_sat">3</span>
                    </div>
                    <div className="calendar_row_wrap">
                        <span className="calendar_date calendar_sun">4</span>
                        <span className="calendar_date">5</span>
                        <span className="calendar_date">6</span>
                        <span className="calendar_date">7</span>
                        <span className="calendar_date">8</span>
                        <span className="calendar_date">9</span>
                        <span className="calendar_date calendar_sat">10</span>
                    </div>
                    <div className="calendar_row_wrap">
                        <span className="calendar_date calendar_sun">11</span>
                        <span className="calendar_date">12</span>
                        <span className="calendar_date">13</span>
                        <span className="calendar_date">14</span>
                        <span className="calendar_date">15</span>
                        <span className="calendar_date">16</span>
                        <span className="calendar_date calendar_sat">17</span>
                    </div>
                    <div className="calendar_row_wrap">
                        <span className="calendar_date calendar_sun">18</span>
                        <span className="calendar_date">19</span>
                        <span className="calendar_date">20</span>
                        <span className="calendar_date">21</span>
                        <span className="calendar_date">22</span>
                        <span className="calendar_date">23</span>
                        <span className="calendar_date calendar_sat d_day_">24</span>
                    </div>
                    <div className="calendar_row_wrap">
                        <span className="calendar_date calendar_sun">25</span>
                        <span className="calendar_date">26</span>
                        <span className="calendar_date">27</span>
                        <span className="calendar_date">28</span>
                        <span className="calendar_date">29</span>
                        <span className="calendar_date">30</span>
                        <span className="calendar_date calendar_sat"></span>
                    </div>
                </div>
            </div>       
        </div>
            
    )
}

export default Calendar;