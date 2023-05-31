import Booking from "./Booking";

const BookingsList = ({bookings, removeBooking}) => {
    const bookingsList  = bookings.map((booking) => {
        return <Booking booking={booking} key={booking._id} removeBooking={removeBooking}/>
    })

    return (
        <>
        
            {bookingsList}
    
        </>

    )
}

export default BookingsList;

