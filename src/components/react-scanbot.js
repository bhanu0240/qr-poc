import React from 'react';
import ScanbotSDK from 'scanbot-web-sdk/webpack';




export default class ReactScanBot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastBarcode: null,
        }
    }

    barcodes = [];

    LICENSE_KEY =
        "RGJKhO/7jpzbUzATlLlMv74iloEi0m" +
        "/1aUmJY9pvAV/PLPDsRFtP1vh3eOTc" +
        "cplG4y7gbipgJtVgHeELjV3qwqgFTu" +
        "XmHnmnvEn65QgB9TH+iOHiIaeyc3vn" +
        "h9i9UNke+uVYbC/m/igzBu4TEmxCbN" +
        "3YRDHVuaKBPyBTmVFxX5PM9MovxKzp" +
        "T3uZRQFijZiRIobV7FuxKYNSpUEvpr" +
        "ekgGB6fZw/j7DkoQWu6J8DoGr9mVYK" +
        "FX6Rp6RGmflWfTy4KhvoPkTLcfiXTr" +
        "k+ky5Yw0URyZVxXe+E2gqA6GJwSzho" +
        "FbLuL2j/kmQVnAi5jQIDd8pMIxEGud" +
        "vYRENmxGEoCg==\nU2NhbmJvdFNESw" +
        "psb2NhbGhvc3R8cXItcG9jLWFscGhh" +
        "LnZlcmNlbC5hcHAKMTcwMzIwMzE5OQ" +
        "o4Mzg4NjA3Cjg=\n";

    async componentDidMount() {
        this.sdk = await ScanbotSDK.initialize({
            licenseKey: this.LICENSE_KEY,
            engine: "/",
        });

        const licenseInfo = await this.sdk.getLicenseInfo();

        const isValid = licenseInfo.isValid();

        if (isValid) {
            // Making your calls to the Scanbot SDK API is now safe.


            const config = {
                onBarcodesDetected: this.onBarcodesDetected.bind(this),
                containerId: 'barcode-scanner-view',
                onError: this.onError.bind(this)
            };


            this.barcodeScanner = await this.sdk.createBarcodeScanner(config);
        } else {
            console.log("License not valid");
        }

    }

    async onBarcodesDetected(result) {
        this.barcodes.push(result);
        this.setState({
            lastBarcode: result
        });
    }

    onError(error) {
        console.log("Error" + error);
    }

    render() {

        let barcodeText;
        if (!this.state.lastBarcode) {
            barcodeText = '';
        } else {
            const barcodes = this.state.lastBarcode.barcodes;
            barcodeText = JSON.stringify(
                barcodes.map((barcodes) => barcodes.text + " (" + barcodes.format + ") "));
        }
        return (
            <div
                id='barcode-scanner-view'
                style={{ height: "70%", width: "70%" }}>
                {barcodeText}
            </div>
        );
    }
}