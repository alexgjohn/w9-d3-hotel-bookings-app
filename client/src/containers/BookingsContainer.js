import BookingForm from "../components/BookingForm";
import BookingsList from "../components/BookingsList";

const BookingsContainer = ({bookings, addBooking, removeBooking, setBooking}) => {
    return (
        <>
        <h2>I'm a BookingsContainer</h2>
        <BookingForm addBooking={addBooking}/>
        <BookingsList bookings={bookings} removeBooking={removeBooking} />
        </>

    )
}

export default BookingsContainer;

