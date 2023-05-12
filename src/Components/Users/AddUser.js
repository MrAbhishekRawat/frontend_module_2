import React from "react";

const AddUser = (props) => {

    const addUserHandler = (event) => {
        event.preventDefault();
    }
    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
            <label htmlFor="age">Age(Years)</label>
            <input id="age" type="number" />
            <label htmlFor="college">College Name:</label>

            <select name="college" id="college">
                <option value="col1">College 1</option>
                <option value="col2">College 2</option>
                <option value="col3">College 3</option>
            </select>

            <button type="submit">Add User</button>

        </form>
    )
}
export default AddUser;