import { LightningElement,api,wire } from 'lwc';
// import getFootballerList from '@salesforce/apex/FootballerRecordInfoController.getFootballerList';

/**
 * Details component that is on top of the video.
 */

export default class HeroDetails extends LightningElement {
    @api title = 'Hero Details'; // Default title to comply with accessibility
    @api slogan;
    @api recordName;

    recordInfoData;
    hrefUrl;

    // @wire(getFootballerList, { footballerName: '$recordName' })
    // recordInfo({ error, data }) {
    //     this.recordInfoData = { error, data };
    //     console.log("data>>:"+JSON.stringify(data))

    //     // Temporary workaround so that clicking on button navigates every time
    //     if (!error && data) {
    //         console.log("data:"+data)
    //         if (data) {
    //             this.hrefUrl = `detail/${data[0]}`;
    //         }
    //     }
    // }

}