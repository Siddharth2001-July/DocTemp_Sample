const PSPDFKit = window.PSPDFKit;

// We need to inform PSPDFKit where to look for its library assets, i.e. the location of the `pspdfkit-lib` directory.
const baseUrl = "https://cdn.cloud.pspdfkit.com/pspdfkit-web@2024.4.0/";

var _instance = null;

async function runner() {
  await PSPDFKit.load({
    baseUrl,
    container: "#pspdfkit",
    document: "document.pdf",
    toolbarItems: [...PSPDFKit.defaultToolbarItems, { type: "comment" }],
  })
    .then(async (instance) => {
      _instance = instance;
    })
    .catch((error) => {
      console.error(error.message);
    });
}
runner();
