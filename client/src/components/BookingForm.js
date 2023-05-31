import { useState } from 'react';
import styled from "styled-components"
import { postBooking } from "../services/BookingService"

const FormBox = styled.div`
    border-style: solid;
`

const BookingForm = ({addBooking}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkedIn: null
    })


    const onChange = (event) => {
        const newFormData = Object.assign({}, formData)
        newFormData[event.target.name] = event.target.value
        setFormData(newFormData)
    }


    const onSubmit = (event) => {
        event.preventDefault()
        if (formData.name !== "" && formData.email !== "" && formData.checkedIn !== null) {
            postBooking(formData)
            .then((data) => {
                addBooking(data)
                setFormData({
                    name: "",
                    email: "",
                    checkedIn: null
                }) 
            })
        }
        
    }

    return (
        <FormBox>
            <h3>Add a booking!</h3>
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
                    value={formData.name}
                    placeholder="Your name"
                />
                <label htmlFor="email">Email address: </label>
                <input 
                    onChange={onChange}
                    id="email"
                    type="text"
                    name="email"
                    value={formData.email}
                    placeholder="Your email address"
                />
                <label htmlFor="checkedIn">Checked In? </label>
                <select 
                    onChange={onChange}
                    id="checkedIn"
                    name="checkedIn"
                >
                    <option value={null}>Choose an option</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <input type="submit"/>
            </form>
            <hr></hr>
        </FormBox>

    )
    }


export default BookingForm;

