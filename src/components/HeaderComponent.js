import React, { Component } from 'react'
import images from '../images.png';
import images2 from '../images2.png';


class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header style={{backgroundColor:'#f9f9f9'}}>
                    <div class="row">
                        <div class="col-sm-4"><img src={images} className="header-left"/></div>
                        <div class="col-sm-4"></div>
                        <div class="col-sm-2"></div>
                        <div class="col-sm-2" style={{ fontSize: '14px', paddingTop: '1%'}}> <i class="fa fa-user-circle"></i> Tổng đài hỗ trợ</div>
                    </div>
                    <div style={{marginBottom:'5%'}}>
                        <img src={images2 } style={{width: '100%'}}/>
                    </div>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
