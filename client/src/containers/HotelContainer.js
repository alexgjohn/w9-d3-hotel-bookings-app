import BookingsContainer from './BookingsContainer';
import {useState, useEffect} from 'react';
import { getBookings } from '../services/BookingService';

const HotelContainer = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings().then((allBookings) => {
            setBookings(allBookings)
        })
    }, [])

    const addBooking = (booking) => {
        setBookings([...bookings, booking])
    }

    const removeBooking = (id) => {
        const bookingsToKeep = bookings.filter(booking => booking._id !== id)
        setBookings(bookingsToKeep)
    }

    return (
        <>
        <h1>I'm a HotelContainer</h1>
        <BookingsContainer 
            bookings={bookings}
            addBooking={addBooking}
            removeBooking={removeBooking}
            setBookings={setBookings}
        />


        </>

    )
}

export default HotelContainer;

