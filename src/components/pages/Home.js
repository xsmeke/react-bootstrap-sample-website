import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

//Re-usable components
import Services from '../Common/Services';

class Home extends Component {

    render() {
        return (
            <div>
                <Header 
                    title="Welcome to my site!"
                    subtitle="It's xsmeke this side"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                    
                />

                <Services />
                
            </div>
        );
    }

}

export default Home;