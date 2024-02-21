import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import Preview from './preview';

function DownloadPDF() {
    return (
        <PDFViewer className="pdf-viewer" ref={pdfRef}>
            <Document>
                <Page size="A4">
                    <View>
                        <Text>Content before modal</Text>
                        <Preview/>
                        <Text>Content after modal</Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}

export default DownloadPDF;