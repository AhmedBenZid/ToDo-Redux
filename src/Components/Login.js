import React from 'react'

function Login() {
    return (
        <div className="container">
            <div className="p-2 text-danger">
                <h1>ToDo-App</h1>
            </div>
            <div className="row m-2">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="Instructeur" id="exampleRadios1" value="Instructeur" checked />
                    <label class="form-check-label" for="Instructeur">
                        Instructeur
                    </label>
                    <input class="form-check-input" type="radio" name="Student" id="exampleRadios2" value="Student" />
                    <label class="form-check-label" for="Student">
                        Student
                </label>
                </div>
                <button className="btn btn-primary mx-2">Add</button>
            </div>
        </div >
    )
}

export default Login
