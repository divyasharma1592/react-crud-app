import React, { Component } from 'react';
import { FaList, FaPlusCircle } from 'react-icons/fa';

interface IProps {
}
    
class HeaderComponent extends React.Component<IProps> {
    constructor(props:IProps) {
        super(props)
    }


    render() {
        const title = {  
            color: "#fff",  
            marginLeft: '39%',
        };  

        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <h2 className="text-center" style={title}>React Crud App</h2>
                    
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent