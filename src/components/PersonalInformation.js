import React from 'react';

class PersonalInformation extends React.Component {
    render() {
        return (
            <div>
                <h2 className="form__header">Personal Information</h2>

                <div className="form__field">
                    <label className="form__label">Title:</label>
                    <select id="title" onChange={this.props.update}>
                        <option></option>
                        <option>Mr.</option>
                        <option>Mrs.</option>
                        <option>Ms.</option>
                        <option>Dr.</option>
                    </select>
                </div>

                <div className="form__field">
                    <input
                    id="fullName"
                    placeholder="Full name"
                    onChange={this.props.update}
                    className="form__input"
                    />
                </div>

                <div className="form__field">
                    <input
                    id="address"
                    placeholder="Address"
                    onChange={this.props.update}
                    className="form__input"
                    />
                </div>

                <div className="form__field">
                    <input
                    id="phone"
                    placeholder="Contact number"
                    onChange={this.props.update}
                    className="form__input"
                    />
                </div>

                <div className="form__field">
                    <input
                    id="email"
                    placeholder="Email address"
                    onChange={this.props.update}
                    className="form__input"
                    />
                </div>

                <div className="form__field">
                    <textarea
                    id="bio"
                    placeholder="This section is for you to tell us a bit about yourself!"
                    onChange={this.props.update}
                    className="form__text"
                    />
                </div>
            </div>
        )
    }
}

export default PersonalInformation;