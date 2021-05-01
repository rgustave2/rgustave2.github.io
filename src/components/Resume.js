import React, { Component } from "react"
import {Button} from 'reactstrap'
import jsPDF from 'jspdf'

class Resume extends Component {
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <Button>Download pdf</Button>
            </div>
        );
    }
}

export default Resume