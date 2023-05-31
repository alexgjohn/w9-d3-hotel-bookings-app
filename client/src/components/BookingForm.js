import { useState } from 'react';
import { postBooking } from "../services/BookingService"

const BookingForm = ({addBooking}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkedIn: false
    })

    const onChange = (event) => {
        const newFormData = Object.assign({}, formData)
        newFormData[event.target.name] = event.target.value
        setFormData(newFormData)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        postBooking(formData).then((data) => {
            addBooking(data)
        })
        setFormData({
            name: "",
            email: "",
            checkedIn: false
        })
    }

    return (
        <>
        <h2>Add a booking!</h2>
        <form 
            onSubmit={onSubmit}
            id="bookings-form"
        >
            <label htmlFor="name">Name: </label>
            <input 
                onChange={onChange}
                id="name"
                type="text"
                name="name"
            />
            <label htmlFor="email">Email address: </label>
            <input 
                onChange={onChange}
                id="email"
                type="text"
                name="email"
            />
            <label htmlFor="checkedIn">Checked In? </label>
            <select 
                onChange={onChange}
                id="checkedIn"
                name="checkedIn"
            >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <input type="submit"/>
        </form>
        <hr></hr>

        </>

    )
}

export default BookingForm;

