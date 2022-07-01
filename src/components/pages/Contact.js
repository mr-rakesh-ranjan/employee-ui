import React from 'react'

const Contact = () => {
    return (
        <div className="container ">
            <div className="py-4">
                <h1 className="text-center">Contact Page</h1>
                <form>
                    <div class="form-group">
                        <label for="user_email">Email address</label>
                        <input
                            type="email"
                            class="form-control"
                            id="user_email"
                        />
                        <small id="emailHelp" class="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="user_Name">Name</label>
                        <input
                            type="text"
                            class="form-control"
                            id="user_name"
                        />
                    </div>
                    <div class="form-group">
                        <label for="user_address">Address</label>
                        <input
                            type="text"
                            class="form-control"
                            id="user_address"
                        />
                    </div>
                    <div class="form-group form-check">
                        <input
                            type="checkbox"
                            class="form-check-input"
                            id="checked"
                        />
                        <label class="form-check-label" for="checked">
                            Check me out
                        </label>
                    </div>
                    <button type="submit" class="btn btn-secondary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact