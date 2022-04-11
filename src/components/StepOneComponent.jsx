import React, { Component } from 'react'

class StepOneComponent extends Component {
    state = {
        isLoading: false,
        pickDate1: -1,
        service1: undefined,
        patient_id1: undefined,
        describe1: undefined,

        pickDate2: -1,
        service2: undefined,
        patient_id2: undefined,
        describe2: undefined,
    }
    focusArray1=[];
    focusArray2=[];
    errorArray1=[];
    arrayItem=[
        { key  : "1",name : "07h - 08h" },
        { key  : "2",name : "08h - 09h" },
        { key  : "3",name : "09h - 10h" },
        { key  : "4",name : "10h - 11h" },
        { key  : "5",name : "11h - 12h" },
        { key  : "6",name : "12h - 13h" },
        { key  : "7",name : "13h - 14h" },
        { key  : "8",name : "14h - 15h" },
        { key  : "9",name : "15h - 16h" },
        { key  : "10",name : "16h - 17h" },
    ];
    arraySelect1=[
        { 
            label  : "Sản - Phụ khoa",
            children : [
                {key : "1",child_name : "Không yêu cầu bác sỹ chỉ định",price : "200.000",},
                {key : "2",child_name : "BSCKII Nguyễn Tuấn Anh",price : "200.000",},
            ] 
        },
        { 
            label  : "Khám nội",
            children : [
                {key : "3",child_name : "Không yêu cầu bác sỹ chỉ định",price : "150.000",},
                {key : "4",child_name : "BSCKII.Nguyễn Thế Sơn",price : "150.000",},
            ] 
        },
        { 
            label  : "Khoa nhi",
            children : [
                {key : "5",child_name : "Không yêu cầu bác sỹ chỉ định",price : "150.000",},
                {key : "6",child_name : "BSCKI.Nguyễn Xuân Giao",price : "150.000",},
            ] 
        },
    ];

    changeItem = (item)=>{
        if(this.focusArray1.includes(item)){
            let index = this.focusArray1.indexOf(item);
            if (index > -1) {
                this.focusArray1.splice(index, 1);
            }
        }
        else{
            this.focusArray1.push(item);
        }
        this.setState({isLoading:true});
    }
    changeItem2 = (item)=>{
        if(this.focusArray2.includes(item)){
            let index = this.focusArray2.indexOf(item);
            if (index > -1) {
                this.focusArray2.splice(index, 1);
            }
        }
        else{
            this.focusArray2.push(item);
        }
        this.setState({isLoading:true});
    }

    handleClickNext1 = ()=>{
        this.errorArray1=[];
        if(this.state.service1== null || this.state.service1=== undefined){
            this.errorArray1.push("Vui lòng chọn dịch vụ khám");
        }
        if(this.state.pickDate1< 0 || this.state.pickDate1 < Date.parse(new Date().toISOString().slice(0, 10)) ){
            this.errorArray1.push("Vui lòng chọn lại ngày khám");
        }
        if(this.focusArray1.length < 1 ){
            this.errorArray1.push("Vui lòng chọn thời gian đăng kí khám");
        }
        if(this.state.describe1== null || this.state.service1=== undefined){
            this.errorArray1.push("Vui lòng nhập mô tả");

        }
        if(this.errorArray1.length <1 ){
            return window.location.href="/Two";
        }else{
            alert(this.errorArray1.join("\n"));
            return "";
        }
    } 
    handleClickNext2 = ()=>{
        this.errorArray2=[];
        if(this.state.service2== null || this.state.service2=== undefined){
            this.errorArray2.push("Vui lòng chọn dịch vụ khám");
        }
        if(this.state.pickDate2< 0 || this.state.pickDate2 < Date.parse(new Date().toISOString().slice(0, 10)) ){
            this.errorArray2.push("Vui lòng chọn lại ngày khám");
        }
        if(this.focusArray2.length < 1 ){
            this.errorArray2.push("Vui lòng chọn thời gian đăng kí khám");
        }
        if(this.state.describe2== null || this.state.service2=== undefined){
            this.errorArray2.push("Vui lòng nhập mô tả");
        }
        if(this.errorArray2.length <1 ){
            return window.location.href="/Two";
        }else{
            alert(this.errorArray2.join("\n"));
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
                    <div style={{textAlign:'center', marginTop:'2%', fontSize:'16px'}}> <b>THÔNG TIN ĐĂNG KÝ KHÁM</b></div>
                    <div class="row" style={{marginLeft:'1%', fontSize:'15px'}}>
                        <b>Loại dịch vụ <i style={{color:'red'}}>*</i></b>
                    </div>
                    <div class="row" >
                         <ul class="nav nav-pills" style={{width:'96%', margin:'5%'}}>
                            <li class="nav-item" style={{ textAlign:'center', width:'50%'}}>
                                <a class="nav-link active" data-toggle="pill" href="#menu1">Dịch vụ có thu phí</a>
                            </li>
                            <li class="nav-item" style={{  textAlign:'center', width:'50%'}}>
                                <a class="nav-link" data-toggle="pill" href="#menu2">Tư vấn miễn phí</a>
                            </li>
                        </ul>
                    </div>

                    <div class="row">
                        <div class="tab-content"  style={{width:'100%'}}>
                            <div class="tab-pane container active" id="menu1" style={{width:'100%',marginTop:'1%', fontSize:'15px'}}>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <b> Dịch vụ khám <i style={{color:'red'}}>*</i> </b>
                                        <select class="form-control" 
                                            id="select1" 
                                            style={{width:'100%'}}
                                            onChange={(e)=>this.setState({service1:e.target.value})}
                                            value={this.state.service1}
                                            >
                                            <option key ="0" value ="" selected>Chọn dịch vụ khám</option>
                                            {this.arraySelect1.map(item=>(
                                                <optgroup label={item.label}>
                                                    {item.children.map(child=>(
                                                        <option key={child.key} value={child.child_name + " - " + child.price}>{child.child_name} - {child.price}</option>
                                                    ))}
                                                </optgroup>
                                            ))}
                                        </select>
                                    </div>
                                    <div class="col-sm-6" >
                                        <b> Ngày đăng ký khám <i style={{color:'red'}}>*</i></b>        
                                        <input type="date" onChange={(e)=>this.setState({pickDate1 : Date.parse(e.target.value)})} style={{width:'100%', height:'60%'}}></input>
                                    </div>
                                </div>

                                <div class="row"  style={{marginTop:'2%', fontSize:'15px'}}>
                                    <div class="col-sm-6">
                                        <b>Thời gian đăng ký khám <i style={{color:'red'}}>*</i> </b>
                                        {this.state.pickDate1 < 0  && 
                                            <div class="form-control" style={{textOverflow: "ellipsis",overflow: "hidden",whiteSpace: "nowrap",}}>Chọn ngày đăng ký khám</div>
                                        }
                                        {this.state.pickDate1 > 0 && this.state.pickDate1 >= Date.parse(new Date().toISOString().slice(0, 10)) && 
                                            <div class="row" style={{marginLeft:'1%'}}>
                                                {this.arrayItem.map((item)=>(
                                                    <div class="col-2" style={{padding: "2% 0",marginLeft:"1%"}}>
                                                        <div class={this.focusArray1.includes(item.key) && 'isActive'} key={item.key} style={{ padding: "12% 0",cursor: "pointer",borderRadius:"5px",fontSize:"15px",border:'2px solid #79bc4b',textAlign:'center',maxHeight: "170%"}} value ={item.key} onClick={(e)=>this.changeItem(item.key)}>
                                                            {item.name}
                                                        </div>
                                                    </div>)
                                                )}
                                            </div>
                                        }
                                        {this.state.pickDate1 > 0 && this.state.pickDate1 < Date.parse(new Date().toISOString().slice(0, 10)) && 
                                            <div class="form-control" style={{textOverflow: "ellipsis",overflow: "hidden",whiteSpace: "nowrap",backgroundColor:'#f35252',color:'white'}}>Chưa có lịch khám vào ngày đã chọn</div>
                                        }
                                    </div>
                                    <div  class="col-sm-6" >
                                        <b> Mã số bệnh nhân</b>
                                        <input style={{padding:'1%',width:'100%', maxHeight:'100%'}} onChange={(e)=>this.setState({patient_id1:e.target.value})} placeholder='Nhập mã số bệnh nhân'></input>
                                    </div>
                                </div>
                                <div class="row"  style={{marginTop:'2%', fontSize:'15px'}}>
                                    <div class="col-sm-6" >
                                        <b>Mô tả <i style={{color:'red'}}>*</i></b>
                                    </div>
                                    <div class="col-sm-12" >
                                        <textarea name="description" rows="3" onChange={(e)=>this.setState({describe1:e.target.value})}  placeholder='Nhập triệu chứng, lí do khám' style={{width:'100%',paddingLeft:"1%"}}></textarea>
                                    </div>
                                </div>
                                <div style={{marginTop:'2%', textAlign:'center'}}>
                                    <a class="btn btn-outline-dark" role="button">Đính kèm tài liệu</a>
                                    <button onClick={this.handleClickNext1} class="btn btn-info" style={{marginLeft:'2%', backgroundColor:'#79bc4b', borderColor:'#79bc4b'}}>Tiếp theo</button>
                                </div>
                            </div>
                            <div class="tab-pane container" id="menu2" style={{marginTop:'1%', fontSize:'15px'}}>
                                <div class="row" >
                                    <div class="col-sm-6">
                                        <b> Dịch vụ khám <i style={{color:'red'}}>*</i> </b>
                                        <select class="form-control" onChange={(e)=>this.setState({service2:e.target.value})} id="select1" style={{width:'100%'}}>
                                            <option selected>Chọn dịch vụ khám</option>
                                            <optgroup label="Tư vấn sức khỏe">
                                                <option key="1" value="Không yêu cầu bác sỹ chỉ định">Không yêu cầu bác sỹ chỉ định</option>
                                                <option key="2" value="Bác sỹ Trần Lê Sơn">Bác sỹ Trần Lê Sơn</option>
                                                <option key="3" value="Bác sỹ Nguyễn Phương Thảo">Bác sỹ Nguyễn Phương Thảo</option>
                                            </optgroup> 
                                        </select>
                                    </div>
                                    <div  class="col-sm-6" >
                                        <b> Ngày đăng ký khám <i style={{color:'red'}}>*</i></b>
                                        <input type="date" onChange={(e)=>this.setState({pickDate2:Date.parse(e.target.value)})}  style={{width:'100%', height:'60%'}}></input>
                                    </div>
                                </div>

                                <div class="row"  style={{marginTop:'2%', fontSize:'15px'}}>
                                    <div class="col-sm-6">
                                        <b>Thời gian đăng ký khám <i style={{color:'red'}}>*</i> </b>
                                        {this.state.pickDate2 < 0  && 
                                            <div class="form-control" style={{textOverflow: "ellipsis",overflow: "hidden",whiteSpace: "nowrap",}}>Chọn ngày đăng ký khám</div>
                                        }
                                        {this.state.pickDate2 > 0 && this.state.pickDate2 >= Date.parse(new Date().toISOString().slice(0, 10)) && 
                                            <div class="row" style={{marginLeft:'1%'}}>
                                                {this.arrayItem.map((item)=>(
                                                    <div class="col-2" style={{padding: "2% 0",marginLeft:"1%"}}>
                                                        <div class={this.focusArray2.includes(item.key) && 'isActive'} key={item.key} style={{ padding: "12% 0",cursor: "pointer",borderRadius:"5px",fontSize:"15px",border:'2px solid #79bc4b',textAlign:'center',maxHeight: "170%"}} value ={item.key} onClick={(e)=>this.changeItem2(item.key)}>
                                                            {item.name}
                                                        </div>
                                                    </div>)
                                                )}
                                            </div>
                                        }
                                        {this.state.pickDate2 > 0 && this.state.pickDate2 < Date.parse(new Date().toISOString().slice(0, 10)) && 
                                            <div class="form-control" style={{textOverflow: "ellipsis",overflow: "hidden",whiteSpace: "nowrap",backgroundColor:'#f35252',color:'white'}}>Chưa có lịch khám vào ngày đã chọn</div>
                                        }
                                    </div>
                                    <div  class="col-sm-6" >
                                        <b> Mã số bệnh nhân</b>
                                        <input style={{padding:'1%',width:'100%', maxHeight:'100%'}} onChange={(e)=>this.setState({patient_id2:e.target.value})}  placeholder='Nhập mã số bệnh nhân'></input>

                                    </div>
                                </div>   

                                <div class="row"  style={{marginTop:'2%' , fontSize:'15px'}}>
                                    <div  class="col-sm-6" ><b>Mô tả <i style={{color:'red'}}>*</i></b></div> 
                                    <div  class="col-sm-12" ><textarea name="description" rows="3" placeholder='Nhập triệu chứng, lí do khám' onChange={(e)=>this.setState({describe2:e.target.value})} style={{width:'100%',paddingLeft:"1%"}}></textarea></div>
                                </div>
                                <div style={{marginTop:'2%', textAlign:'center'}}>
                                    <a class="btn btn-outline-dark" role="button">Đính kèm tài liệu</a>
                                    <button onClick={this.handleClickNext2} class="btn btn-info" style={{marginLeft:'2%', backgroundColor:'#79bc4b', borderColor:'#79bc4b'}}>Tiếp theo</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        )
    }
}


export default StepOneComponent
