const PSPDFKit = window.PSPDFKit;

// We need to inform PSPDFKit where to look for its library assets, i.e. the location of the `pspdfkit-lib` directory.
const baseUrl = 'https://cdn.cloud.pspdfkit.com/pspdfkit-web@2024.4.0/';

var _instance = null;

async function runner(){
  let data = {
    config: {
      delimiter: {
        start: "{{",
        end: "}}"
      }
    },
    model: {
      helloWorld: "PSPDFKit" 
    }
  }
  const docBuffer = await PSPDFKit.populateDocumentTemplate(
    {
      document: "doctemp.docx"
    },
    data
  )
  await PSPDFKit.load({
    baseUrl,
    container: "#pspdfkit",
    document: docBuffer,
    toolbarItems: [...PSPDFKit.defaultToolbarItems, { type: "comment" }],
  })
    .then((instance) => {
      _instance = instance;
    })
    .catch((error) => {
      console.error(error.message);
    });

}
runner();

