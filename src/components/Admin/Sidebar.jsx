import './Admin.css'


function Sidebars () {
    return (
        <div className="MainContain">

            <div className="sidebar">

                <div className="image-text">
                    <span className="headers">
                        <a href='/admin'>Admin Page</a>
                    </span>

                </div>
                <div className="menu-bar">
                    <div className="menu">

                        <ul className="menu-links">

                            <a className='text labels'>Main</a>

                            <li className="nav-link">
                                <a href="/admin/dashboard">
                                    <span className="text nav-text">Dashboard</span>
                                </a>
                            </li>

                            <a className='text labels'>Lists</a>

                            <li className="nav-link">
                                <a href="#">
                                    <span className="text nav-text">Users</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="/admin/hotels">
                                    <span className="text nav-text">Hotels</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="/admin/rooms">
                                    <span className="text nav-text">Rooms</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="/admin/transactions">
                                    <span className="text nav-text">Transactions</span>
                                </a>
                            </li>

                            <a className='text labels'>New</a>
                            <li className="nav-link">
                                <a href="/admin/addhotels">
                                    <span className="text nav-text">New Hotel</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="#">
                                    <span className="text nav-text">New Room</span>
                                </a>
                            </li>
                            <a className='text labels'>Users</a>
                            <li className="nav-link">
                                <a href="#">
                                    <span className="text nav-text">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Sidebars;