import React from 'react';
function Header() {

    return (
        <>
            <div className='dark-bg'>
                {/* <img src='assetes/images/bg_img.jpg' /> */}
            </div>

            <div className="container">
                <div className="row">
                    <div className="col mt-2">
                        <img className='logo' src='assetes/images/logo_W.png' />
                    </div>
                    <div className="col mt-2 text-end">
                        <img className='logo' src='assetes/images/reaktr_w_logo.png' />
                    </div>

                </div>

            </div>
        </>
    );
}
export default Header;


