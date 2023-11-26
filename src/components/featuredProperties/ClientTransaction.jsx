import '../Admin/Admin.css';


import React, { PureComponent } from 'react';
import Navbar from '../navbar/Navbar';
import MailList from '../mailList/MailList';
import Footer from '../footer/Footer';


class ClientTrans extends PureComponent {
    state = {
        formState: {
            id: '',
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
                hotel: "ha noi hotel",
                room: "101, 102",
                date: "",
                price: "$350",
                payment: "visa",
                status: "checkin",
                updating: false
            }, {
                id: 2,
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
            <div>
                <Navbar/>
                <div className='container' >
                <Table
                    users={users}
                />
                <MailList />
                    <Footer />     
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
                            <div className="column">{user.hotel}</div>
                            <div className="column">{user.room}</div>
                            <div className="column">{user.date}</div>
                            <div className="column">{user.price}</div>
                            <div className="column">{user.status}</div>

                        </div>
                    );
                })}
            </div>
        </div>
    );
};




export default ClientTrans;