import './Admin.css'
import React, { PureComponent } from 'react';
import Sidebars from './Sidebar';

class Rooms extends PureComponent {
    state = {
        formState: {
            id: '',
            title: "",
            description: "",
            price: "",
            maxPeople: "",
            mode: "submit"
        },
        users: [
            {
                id: 0,
                title: "2 bed room",
                description: "king size bed",
                price: "350",
                maxPeople: "2",
                updating: false
            },
            {
                id: 1,
                title: "2 bed room",
                description: "king size bed",
                price: "350",
                maxPeople: "2",
                updating: false
            }, {
                id: 2,
                title: "2 bed room",
                description: "king size bed",
                price: "350",
                maxPeople: "2",
                updating: false
            }, {
                id: 3,
                title: "2 bed room",
                description: "king size bed",
                price: "350",
                maxPeople: "2",
                updating: false
            }, {
                id: 4,
                title: "2 bed room",
                description: "king size bed",
                price: "350",
                maxPeople: "2",
                updating: false
            }, {
                id: 5,
                title: "2 bed room",
                description: "king size bed",
                price: "350",
                maxPeople: "2",
                updating: false
            }
        ]
    };

    resetFormState = () => {
        this.setState({
            formState: {
                id: '',
            title: "",
            description: "",
            price: "",
            maxPeople: "",
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
            <div className="rowss">

                <div className="sidebar">
                    <Sidebars />
                </div>

                <div className='home'>
                    <h1>Rooms List</h1>
                    <div >
                        <Table
                            users={users}
                            updateUser={this.updateUser}
                            deleteUser={this.deleteUser}
                        />
                    </div>
                </div>
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
                    <div className="column">Title</div>
                    <div className="column">Description</div>
                    <div className="column">Price</div>
                    <div className="column">Max People</div>
                    <div className="column">Action</div>
                </div>
            </div>
            <div className="table-body">
                {users.map((user, key) => {
                    return (
                        <div className={`row ${user.updating ? "updating" : ""}`}>
                            <div className="column">{user.id}</div>
                            <div className="column">{user.title}</div>
                            <div className="column">{user.description}</div>
                            <div className="column">{user.price}</div>
                            <div className="column">{user.maxPeople}</div>
                            <div className="column">
                                <button
                                    onClick={() => updateUser(key)}
                                >
                                    <a>update</a>
                                </button>
                                <button onClick={() => deleteUser(key)}>
                                    <a>Delete</a>
                                </button>
                            </div>
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
export default Rooms;