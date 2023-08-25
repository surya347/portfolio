import {LightningElement, track, wire} from 'lwc';
import fetchRecords from "@salesforce/apex/pdfController.fetchRecords";
import sendPdf from "@salesforce/apex/pdfController.sendPdf";
import downloadPDF from '@salesforce/apex/pdfController.downloadPDF';

export default class PdfCreator extends LightningElement {

    projectData;

 @wire(fetchRecords, {})
    wireData({error, data}) {
        if (data) {
            try {
               this.projectData = data;
                console.log('check data here:'+ JSON.stringify(this.projectData));

            } catch (error) {
                console.error('check error here', error);
            }
        } else if (error) {
            console.error('check error here', error);
        }
    }

  generatePDF(){
        downloadPDF()
        .then(result =>{
                  let downloadLink = document.createElement("a");
                downloadLink.href = "data:application/pdf;base64,"+result;
                downloadLink.download = "SuryaResume.pdf";
                downloadLink.click();

        })
        .catch(error=>{
            console.error('check error here', error);

        })
    }

}