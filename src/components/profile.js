import React, { Component } from 'react';
import {jsPDF} from 'jspdf'
import 'jspdf-autotable';



class profile extends Component {

        state = {
            my_token: "d",
            sataic_data: "this is the static data",
            my_data : ["red", "green","blue"],
            people: [
                { ID:"1", color: "Red", size: "XL", qty: 51200 },
                { ID:"2", color: "Green", size: "M", sqty: 31250 },
                { ID:"3", color: "Blue", size: "S", qty: 12600 },
                { ID:"4", color: "White", size: "L", qty: 8200 },
              ]
        }


    myfun (){
        const adil = [
            { ID:"1", color: "Red", size: "XL", qty: 3200 },
            { ID:"2", color: "Green", size: "M", qty: 5250 },
            { ID:"3", color: "Blue", size: "S", qty: 2600 },
            { ID:"4", color: "White", size: "L", qty: 1100 },
            { ID:"5", color: "Red", size: "M", qty: 1500 },
          ]
        const unit = "pt";
        const size = "A4";
        const orientation = "portrait";
        const title = "Pro-Forma Invoice";
        const headers = [["NAME", "Pro Forma Invoice"]]
        const headers2 = [["SL","Color", "Size", "Quantity"]]
        
        const data = adil.map(elt=> [elt.ID, elt.color, elt.size, elt.qty]);

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
        let content = {
            startY: 230,
            head: headers2,
            body: data,
            theme: 'grid'
        };

        
        doc.text(title, marginLeft, 40)
        doc.autoTable(content)
        //doc.text("Hello", 40, 220)
        let pId= "PRFI12345568"

        let image = "data:image/png;base64,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"
        let style= " Pullover Lorex "
        let buyerName = " Mr. Kim"
        let supplierName = " NewmissionAccesorie"
        let supplierEmail = " newmission@gmail.com"
        let qty = "13650"
        let shifment_date = "12-10-2020"
        doc.setFontSize(13)
        doc.setFont('sans-serif')
        doc.text("Buyer Name: "+ buyerName, 40, 90)
        doc.text("Date: "+ shifment_date, 350, 90)
        doc.text("Supplier Name: " + supplierName, 350, 110)
        doc.text("Supplier Email: " + supplierEmail, 350, 130)
        doc.text("Shipment Date: " + "16-12-2020", 350, 150)
        doc.text("Style Name: " + style, 40, 110)
        doc.text("Order Qty: " + qty , 40, 130)
        doc.text("Price per Quantity: 12.05"  , 40, 150)
        doc.text("Total Quantity : 13650", 385, 450);
        doc.text("Price per Quantity(pcs) : 12.05", 340, 470);
        doc.text("VAT (%) : 0.0", 413, 490);
        doc.text("----------------------------------------------------------------------------------------------------------------", 40, 500);
        doc.text("Total = "+"5564.98", 430, 520);
        // doc.setTextColor("Red")
        // doc.text("Shipment Date: "+shifment_date, 10, 50);
        // doc.text("Price:", 10, 60);
        // doc.text("Total Value:", 10, 70);
        doc.text("ID: "+pId, 40, 60);
        doc.addImage(image, "png", 470, 30, 80, 34);

        doc.save("proformainvoice.pdf")
    }
    
    
    
    render() {
        let my_data = this.state.my_data
        return (
            <div className="container">
                <h1>hello</h1>
                <h3>{this.state.my_token}</h3>
                <h3>{this.state.sataic_data}</h3>
                <h1 style={{color:'red', background:'gray', height:'40px'}}>this is profile page</h1>
                <button className="btn btn-primary" onClick={this.myfun}>Pdf export</button>
                <hr/>
                {
                    my_data.map((val, inx)=>(
                    <h1>{val}</h1>
                    ))
                }

                
            </div>

        );
    }
}

export default profile;