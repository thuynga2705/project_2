import React, { Component } from 'react'

class StepTwoComponent extends Component {
    state = {
        name: undefined,
        birthday: -1,
        phone: undefined,
        gender: undefined,
        address: undefined,
    }
    errorArray=[];
    handleClickNext = ()=>{
        this.errorArray=[];
        if(this.state.name== null || this.state.name=== undefined){
            this.errorArray.push("Vui lòng nhập họ tên");
        }
        if(this.state.birthday< 0 || this.state.birthday < Date.parse(new Date().toISOString().slice(0, 10)) ){
            this.errorArray.push("Vui lòng chọn lại ngày sinh");
        }
        if(this.state.phone== null || this.state.phone=== undefined || isNaN(this.state.phone)){
            this.errorArray.push("Vui lòng nhập đúng số điện thoại");
        }
        if(this.state.gender== null || this.state.gender=== undefined){
            this.errorArray.push("Vui lòng chọn giới tính");
        }
        if(this.state.address== null || this.state.address=== undefined ){
            this.errorArray.push("Vui lòng nhập địa chỉ");
        }
        if(this.errorArray.length <1 ){
            return window.location.href="/Three";
        }else{
            alert(this.errorArray.join("\n"));
            return "";
        }
    } 
   
    render() {
        return (
            <div class="card" style={{width: '80%', marginInline: 'auto'}}>
                <div class="card-header" style={{backgroundColor:'#79bc4b', color:'white'}}>
                   <p> Đăng ký thông tin khám trực tuyến</p>
                </div>
                <div class="card-body" >
                    <div class="alert alert-success" style={{fontSize:'14px'}}>
                         Các trường đánh dấu <i style={{color:'red'}}>&nbsp;*&nbsp;</i> là các trường bắt buộc nhập. Thông tin bệnh nhân, thông tin đăng ký khám cần nhập chính xác
                    </div>
                    <div style={{textAlign:'center', marginTop:'2%', fontSize:'16px'}}> <b>THÔNG TIN BỆNH NHÂN</b></div>
                    <div class="row"  style={{marginTop:'2%', fontSize:'15px'}}>
                        <div class="col-sm-6">
                            <b> Họ và tên <i style={{color:'red'}}>*</i> </b>
                            <input style={{width:'100%', height:'60%'}} onChange={(e)=>this.setState({name:e.target.value})} placeholder='Nhập họ tên'></input>
                        </div>
                        <div  class="col-sm-6" >
                            <b> Ngày sinh <i style={{color:'red'}}>*</i></b>
                            <input type="date" onChange={(e)=>this.setState({birthday : Date.parse(e.target.value)})}  style={{width:'100%', height:'60%'}}></input>
                        </div>
                    </div>
                    <div class="row"  style={{marginTop:'2%', fontSize:'15px'}}>
                        <div class="col-sm-6">
                            <b>Số điện thoại <i style={{color:'red'}}>*</i> </b>
                            <input style={{width:'100%', height:'60%'}} onChange={(e)=>this.setState({phone:e.target.value})} placeholder='Nhập số điện thoại'></input>

                        </div>
                        <div  class="col-sm-6" >
                            <b> Giới tính <i style={{color:'red'}}>*</i></b>
                            <select class="form-control" onChange={(e)=>this.setState({gender:e.target.value})}>
                                <option key="0" value="" selected disabled>Chọn giới tính</option>
                                <option key="1" value="Nam">Nam</option>
                                <option key="2" value="Nữ">Nữ</option>
                                <option key="3" value="Khác">Khác</option>
                            </select>
                        </div>
                    </div>   
                    <div class="row"  style={{marginTop:'2%' , fontSize:'15px'}}>
                        <div  class="col-sm-12" >
                            <b>Địa chỉ <i style={{color:'red'}}>*</i></b>
                            <textarea rows="1,5" onChange={(e)=>this.setState({address:e.target.value})} placeholder='Nhập địa chỉ' style={{width:'100%'}}></textarea>
                        </div> 
                    </div>
                    <div style={{marginTop:'2%', textAlign:'center'}}>
                        <a href="/"  class="btn btn-outline-dark" role="button" style={{width:'20%'}}>Quay lại</a>
                        <button onClick={this.handleClickNext} class="btn btn-info" style={{marginLeft:'2%', backgroundColor:'#79bc4b', borderColor:'#79bc4b'}}>Tiếp theo</button>
                    </div>
                </div>
            </div>
            
        )
    }
}


export default StepTwoComponent
