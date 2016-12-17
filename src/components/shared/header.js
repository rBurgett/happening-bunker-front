import React from 'react';
import { Link } from 'react-router';
import co from 'co';
import { promiseAlert, swal } from 'promise-alert';
import { connect } from 'react-redux';

const Header = ({ logout }) => {

    const styles = {
        headerImage: {
            display: 'inline-block',
            height: 30,
            width: 30,
            marginLeft: -7,
            marginTop: -3,
            marginRight: 5
        }
    };

    const onLogoutClick = e => {
        e.preventDefault();
        logout();
    };

    return (
        <div>
            <div className="header-nav-flex-container">
                <div><a href="/"><img style={styles.headerImage} src="./images/happening_bunker.jpg"></img>Happening Bunker</a></div>
                <div className="spacer"></div>
                <div><Link to={'/'} title="Home"><i className="fa fa-home"></i></Link></div>
                <div><Link to={'/profile'} title="Profile"><i className="fa fa-user"></i></Link></div>
                <div><Link to={'/settings'} title="Settings"><i className="fa fa-cog"></i></Link></div>
                <div><a href="#" title="Log Out" onClick={onLogoutClick}><i className="fa fa-sign-out"></i></a></div>
            </div>
        </div>
    );
};
Header.propTypes = {
    logout: React.PropTypes.func
};

const HeaderContainer = connect(
    null,
    (dispatch, props) => {
        return {
            logout() {
                const { api } = props;
                co(function* () {
                    try {

                        const confirmed = yield promiseAlert({
                            title: 'Are you sure?',
                            text: 'Are you sure that you want to log out?',
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonText: 'Yes, logout.'
                            // closeOnConfirm: false
                        });

                        if(!confirmed) {
                            swal.close();
                            return;
                        }

                        yield api.logout();

                        // yield promiseAlert({
                        //     text: 'You are logged out.',
                        //     title: 'Success!',
                        //     type: 'success'
                        // });

                        window.location = '/';

                    } catch(err) {
                        console.error(err);
                    }
                });
            }
        };
    }
)(Header);

export default HeaderContainer;
