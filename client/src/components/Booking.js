import { deleteBooking } from "../services/BookingService"


const Booking = ({ booking, removeBooking }) => {

    const handleDelete = () => {
        console.log("booking id:",booking._id)
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id)
        })
    }

    return (
        <>
    
                <table>
                    <tr>
                        <th>Name:</th>
                        <th>Email Address:</th>
                        <th>Checked In?</th>
                    </tr>
                    <tr>
                        <td>{booking.name}</td>
                        <td>{booking.email}</td>
                        <td>{booking.checkedIn ? <>Yes</> : <>No</>}</td>
                        {/* <td>{booking.checkedIn}</td> */}
                    </tr>
    
                </table>
        
            <button onClick={handleDelete}>Remove</button>
            <hr></hr>

        </>

    )
}

export default Booking;

