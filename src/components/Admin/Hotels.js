import './Admin.css'
import React, { PureComponent } from 'react';
import Sidebars from './Sidebar';

class Dashboard extends PureComponent {
    state = {
        formState: {
            id: '',
            name: "",
            type: "",
            title: "",
            city: "",
            mode: "submit"
        },
        users: [
            {
                id: 0,
                name: "ha noi hotel",
                type: "hotel",
                title: "Ha noi royal",
                city: "Ha Noi",
                updating: false
            },
            {
                id: 1,
                name: "ha noi hotel",
                type: "hotel",
                title: "Ha noi royal",
                city: "Ha Noi",
                updating: false
            }, {
                id: 2,
                name: "ha noi hotel",
                type: "hotel",
                title: "Ha noi royal",
                city: "Ha Noi",
                updating: false
            }, {
                id: 3,
                name: "ha noi hotel",
                type: "hotel",
                title: "Ha noi royal",
                city: "Ha Noi",
                updating: false
            }, {
                id: 4,
                name: "ha noi hotel",
                type: "hotel",
                title: "Ha noi royal",
                city: "Ha Noi",
                updating: false
            }, {
                id: 5,
                name: "ha noi hotel",
                type: "hotel",
                title: "Ha noi royal",
                city: "Ha Noi",
                updating: false
            }
        ]
    };

    resetFormState = () => {
        this.setState({
            formState: {
                id: '',
                name: "",
                type: "",
                title: "",
                city: "",
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
                    <h1>Hotels List</h1>
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
                    <div className="column">Name</div>
                    <div className="column">Type</div>
                    <div className="column">Title</div>
                    <div className="column">City</div>
                    <div className="column">Action</div>
                </div>
            </div>
            <div className="table-body">
                {users.map((user, key) => {
                    return (
                        <div className={`row ${user.updating ? "updating" : ""}`}>
                            <div className="column">{user.id}</div>
                            <div className="column">{user.name}</div>
                            <div className="column">{user.type}</div>
                            <div className="column">{user.title}</div>
                            <div className="column">{user.city}</div>
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
export default Dashboard;