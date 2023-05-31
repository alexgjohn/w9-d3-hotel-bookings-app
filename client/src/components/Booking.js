import styled from "styled-components"
import { deleteBooking } from "../services/BookingService"


const StyledTableHeader = styled.th`
    text-align: center;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
    width: 300px;
`

const StyledTableData = styled.td`
    text-align: center;
    border: 1px solid #ddd;
    padding: 8px;
    width: 300px;
`

const RemoveButton = styled.button`
    font-weight: bold;
    background-color: rgb(131, 53, 140);
    color: white;
    
`

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
                <tbody>
                <tr>
                    <StyledTableHeader>Name:</StyledTableHeader>
                    <StyledTableHeader>Email Address:</StyledTableHeader>
                    <StyledTableHeader>Checked In?</StyledTableHeader>
                </tr>
                <tr>
                    <StyledTableData>{booking.name}</StyledTableData>
                    <StyledTableData>{booking.email}</StyledTableData>
                    <StyledTableData>{booking.checkedIn ? <>Yes</> : <>No</>}</StyledTableData>
                </tr>
                </tbody>
            </table>

            <RemoveButton onClick={handleDelete}>Remove</RemoveButton>
            <hr></hr>
        </>

    )
}

export default Booking;

