import './Admin.css'
import React, { PureComponent } from 'react';


class Dashboard extends PureComponent {
    state = {
        formState: {
            id: '',
            user: "",
            hotel: "",
            room: "",
            date: "",
            price: "",
            payment: "",
            status: "",
            mode: "submit"
        },
        users: [
            {
                id: 0,
                user: "david123",
                hotel: "ha noi hotel",
                room: "101, 102",
                date: "",
                price: "$350",
                payment: "visa",
                status: "checkin",
                updating: false
            },
            {
                id: 1,
                user: "david123",
                hotel: "ha noi hotel",
                room: "101, 102",
                date: "",
                price: "$350",
                payment: "visa",
                status: "checkin",
                updating: false
            }, {
                id: 2,
                user: "david123",
                hotel: "ha noi hotel",
                room: "101, 102",
                date: "",
                price: "$350",
                payment: "visa",
                status: "checkout",
                updating: false
            }
        ]
    };

    resetFormState = () => {
        this.setState({
            formState: {
                id: '',
                user: "",
                hotel: "",
                room: "",
                date: "",
                price: "",
                payment: "",
                mode: "submit"
            }
        });
    };

    onChange = event => {
        this.setState({
            formState: {
                ...this.state.formState,
                [event.target.name]: event.target.value
            }
        });
    };

    // onSubmit = event => {
    //     const { users, formState } = this.state;
    //     event.preventDefault();
    //     const firstName = event.target.querySelector("input[name='firstName']")
    //         .value;
    //     const lastName = event.target.querySelector("input[name='lastName']")
    //         .value;
    //     const email = event.target.querySelector("input[name='email']").value;
    //     if (formState.mode === "submit") {
    //         this.setState({
    //             users: [
    //                 ...this.state.users,
    //                 {
    //                     firstName,
    //                     lastName,
    //                     email,
    //                     updating: false,
    //                     id: this.state.users[this.state.users.length - 1].id + 1
    //                 }
    //             ]
    //         });
    //     }
    //     //  else if (formState.mode === "edit") {
    //     //    const index = users.find((user)=> user.id === formState.id).id;
    //     //    users[index] = {
    //     //             firstName,
    //     //             lastName,
    //     //             email,
    //     //             updating: false,
    //     //             id: users[index].id
    //     //          }
    //     //    this.setState({
    //     //       users: [...users]
    //     //    });
    //     // }

    //     this.resetFormState();
    // };

    deleteUser = key => {
        let { users } = this.state;
        users.splice(key, 1);
        this.setState({
            users: [...users]
        });
    };
    render() {
        const { users, formState } = this.state;
        return (
                <div >
                    <Table
                        users={users}
                        // updateUser={this.updateUser}
                        // deleteUser={this.deleteUser}
                    />
                </div>
        );
    }

}
const Table = ({ users = [], updateUser, deleteUser }) => {
    return (
        <div className="table">
            <div className="table-header">
                <div className="row">
                    <div className="column">ID</div>
                    <div className="column">User</div>
                    <div className="column">Hotel</div>
                    <div className="column">Room</div>
                    <div className="column">Date</div>
                    <div className="column">Price</div>
                    <div className="column">status</div>
                </div>
            </div>
            <div className="table-body">
                {users.map((user, key) => {
                    return (
                        <div className={`row ${user.updating ? "updating" : ""}`}>
                            <div className="column">{user.id}</div>
                            <div className="column">{user.user}</div>
                            <div className="column">{user.hotel}</div>
                            <div className="column">{user.room}</div>
                            <div className="column">{user.date}</div>
                            <div className="column">{user.price}</div>
                            <div className="column">{user.status}</div>
                            {/* <div className="column">
                                <button
                                    onClick={() => updateUser(key)}
                                >
                                    <a>update</a>
                                </button>
                                <button  onClick={() => deleteUser(key)}>
                                    <a>Delete</a>
                                </button>
                            </div> */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Field = ({ label = "", name = "", value = "", onChange }) => {
    return (
        <div className="field">
            <label htmlFOR={name}>{label}</label>
            <input type="text" name={name} value={value} onChange={onChange} />
        </div>
    );
};

const Form = ({ formState, onChange, onSubmit }) => {
    return (
        <form className="form" onSubmit={onSubmit}>
            <fieldset>
                <Field
                    name="firstName"
                    label="user name"
                    value={formState.firstName}
                    onChange={onChange}
                />
                <Field
                    name="lastName"
                    label="last name"
                    value={formState.lastName}
                    onChange={onChange}
                />
                <Field
                    name="email"
                    label="email"
                    value={formState.email}
                    onChange={onChange}
                />
            </fieldset>
            <button>{formState.mode}</button>
        </form>
    );
};
export default Dashboard;