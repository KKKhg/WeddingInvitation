import React from 'react';
import AnimatedWrap from "./AnimatedWrap";
import './Calendar.css';

const Calendar = () => {
    
    return (
        <div className="calendar_whole_wrapper">
            <img className="border_img"
               src={require(`../assets/images/calendar_border.png`)}
            />
            <div className="calendar_wrapper">
            <div className="f-l calendar_month">JUN</div>
                <div className="calendar">
                    <AnimatedWrap>
                        <div className="calendar_row_wrap_weekend">
                            <div><span className="calendar_sun">SUN</span></div>
                            <div><span>MON</span></div>
                            <div><span>TUE</span></div>
                            <div><span>WED</span></div>
                            <div><span>THU</span></div>
                            <div><span>FRI</span></div>
                            <div><span className="calendar_sat">SAT</span></div>
                        </div>
                    </AnimatedWrap>
                    <AnimatedWrap>
                        <div className="calendar_row_wrap">
                            <div><span className="calendar_sun"></span></div>
                            <div><span></span></div>
                            <div><span></span></div>
                            <div><span></span></div>
                            <div><span>1</span></div>
                            <div><span>2</span></div>
                            <div><span className="calendar_sat">3</span></div>
                        </div>
                    </AnimatedWrap>
                    <AnimatedWrap>
                        <div className="calendar_row_wrap">
                            <div><span className="calendar_sun">4</span></div>
                            <div><span>5</span></div>
                            <div><span>6</span></div>
                            <div><span>7</span></div>
                            <div><span>8</span></div>
                            <div><span>9</span></div>
                            <div><span className="calendar_sat">10</span></div>
                        </div>
                    </AnimatedWrap>
                    <AnimatedWrap>
                        <div className="calendar_row_wrap">
                            <div><span className="calendar_sun">11</span></div>
                            <div><span>12</span></div>
                            <div><span>13</span></div>
                            <div><span>14</span></div>
                            <div><span>15</span></div>
                            <div><span>16</span></div>
                            <div><span className="calendar_sat">17</span></div>
                        </div>
                    </AnimatedWrap>
                    <AnimatedWrap>
                        <div className="calendar_row_wrap">
                            <div><span className="calendar_sun">18</span></div>
                            <div><span>19</span></div>
                            <div><span>20</span></div>
                            <div><span>21</span></div>
                            <div><span>22</span></div>
                            <div><span>23</span></div>
                            <div className="d_day_"><span>24</span></div>
                        </div>
                    </AnimatedWrap>
                    <AnimatedWrap>
                        <div className="calendar_row_wrap">
                            <div><span className="calendar_sun">25</span></div>
                            <div><span>26</span></div>
                            <div><span>27</span></div>
                            <div><span>28</span></div>
                            <div><span>29</span></div>
                            <div><span>30</span></div>
                            <div><span className="calendar_sat"></span></div>
                        </div>
                    </AnimatedWrap>
                </div>
            </div>       
        </div>
            
    )
}

export default Calendar;