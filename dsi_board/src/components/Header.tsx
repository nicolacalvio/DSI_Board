import React, {Component} from 'react';


class Header extends Component<any, any> {
    state = {}

    render(){
        return (
            <>
                <nav
                    className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
                    <div className="mb-2 sm:mb-0">
                        <a href="/home"
                           className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">DSI Board</a>
                    </div>
                </nav>
            </>
        );
    }

}

export default Header;
