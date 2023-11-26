import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useLocation, useNavigate } from "react-router-dom";
import "./Bookings.css";

const Bookings = () => {

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const navigate = useNavigate();
  const ToTransactions = () => {
    navigate('/transaction');
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="listContainer">
        <div className="bookingWrapper">
          <div className="lsItems">
            <h2>Dates</h2>
            <span className="full-size" >{`${format(
              date[0].startDate,
              "MM/dd/yyyy"
            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {(
              <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />
            )}
          </div>
          <div className="lsItems">
            <h2>Reserve Info</h2>
            <div className="full_name">
              <h4 className="">Your Full Name</h4>
            </div>
            <div className="">
              <input type="text" className="form-control reserve" placeholder="Full Name" />
            </div>
            <div className="full_name">
              <h4 className="">Your Email</h4>
            </div>
            <div className="">
              <input type="text" className="form-control reserve" placeholder="Email" />
            </div>
            <div className="full_name">
              <h4 className="">Your Phone Number</h4>
            </div>
            <div className="">
              <input type="text" className="form-control reserve" placeholder="Phone Number" />
            </div>
            <div className="full_name">
              <h4 className="">Your Indentity Card Number</h4>
            </div>
            <div className="">
              <input type="text" className="form-control reserve" placeholder="Card Number" />
            </div>
          </div>
        </div>
        <div className="bookingWrapper"><h2>Select Rooms</h2></div>
        <div className="bookingWrapper">

          <div className="lsItems">
            <h3 >Budget Double Room</h3>
            <h4 className="font-normal">Pay nothing ultil September 04,2023</h4>
            <h4 className="font-normal">Max people : 3</h4>
            <h3>$350</h3>
          </div>
          <div className="lsItems">
            <h3 >Budget Double Room</h3>
            <h4 className="font-normal">Pay nothing ultil September 04,2023</h4>
            <h4 className="font-normal">Max people : 3</h4>
            <h3>$350</h3>
          </div>
        </div>
        <div className="bookingWrapper">
          <h2>Total Bill : $700</h2>
        </div>
        <div className="bookingWrapper">
          <div className="lsItems">
            <h4 className="font-normal">Select Payment Method</h4>
            <select name="payment">
              <option value="">VISA</option>
              <option value="">Credit Card</option>
              <option value="">COD</option>
            </select>
          </div>
          <div className="lsItems">
            <button className="headerBtn" onClick={ToTransactions}>
              Reserve Now
            </button>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>


    </div>


  );
};
export default Bookings;