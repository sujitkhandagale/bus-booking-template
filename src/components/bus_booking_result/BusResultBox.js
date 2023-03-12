import React from "react";
import "./result_boxes.scss";
import Bus from "../../assets/bus_Images/bus_1.png";

function BusResultBox({
  RouteFrom,
  RouteTo,
  Time,
  Date,
  AvailableSeats,
  BusType,
}) {
  return (
    <div className="Bus_result_box">
      <div className="bux_result_details">
        <div>
          <img src={Bus} alt="" />
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td>Bus : OLUS Bus I Semi Premium</td>
                <td>

                  <i class="fa-duotone fa-calendar-days"></i> 12/09/1256
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fa-duotone fa-location-dot"></i> Latur - Mumbai
                  (12/02/2001 - 12/02/2001)
                </td>

                <td>
                  <i className="fa-duotone fa-person-seat"></i> <b>(24)</b>
                  <span>Available</span>
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fa-duotone fa-timer"></i> 20:00 To 07:00
                </td>
                <td>
                  <i class="fa-duotone fa-bus"></i> (NON A/C Semi Sleeper (2+2))
                  Type
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <i class="fa-duotone fa-tag"></i>
                  <span className="Price_tag">2599 Rs</span>
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fa-duotone fa-clock"></i> 10 Hours
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button className="Booking_btn">Book</button>
        </div>
      </div>
      &nbsp;
      &nbsp;
      <div className="bux_result_details">
        <div>
          <img src={Bus} alt="" />
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td>Bus : OLUS Bus I Semi Premium</td>
                <td>

                  <i class="fa-duotone fa-calendar-days"></i> 12/09/1256
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fa-duotone fa-location-dot"></i> Latur - Mumbai
                  (12/02/2001 - 12/02/2001)
                </td>

                <td>
                  <i className="fa-duotone fa-person-seat"></i> <b>(24)</b>
                  <span>Available</span>
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fa-duotone fa-timer"></i> 20:00 To 07:00
                </td>
                <td>
                  <i class="fa-duotone fa-bus"></i> (NON A/C Semi Sleeper (2+2))
                  Type
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <i class="fa-duotone fa-tag"></i>
                  <span className="Price_tag">2599 Rs</span>
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fa-duotone fa-clock"></i> 10 Hours
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button className="Booking_btn">Book Now</button>
        </div>
      </div>


    </div>
  );
}

export default BusResultBox;
