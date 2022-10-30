
var invoiceDocument = [
    {
    InvoiceID: 001,
    DocumentName: "Invoice 001",
    DocumentType: "invoice",
    Name: "Fly High Business Inc.",
    Product: [
      {
        Description: `24" Monitor`,
        QTY: 5,
        Price: 10000
      },
      {
        Description: `Keyboard and Mouse set`,
        QTY: 4,
        Price: 1500
      }
    ],
  },
  {
    InvoiceID: 002,
    DocumentName: "Invoice 002",
    DocumentType: "invoice",
    Name: "Bracket Logic Appliances Inc.",
    Product: [
      {
        Description: "Projector",
        QTY: 2,
        Price: 15000
      },
      {
        Description: "peakerphone",
        QTY: 1,
        Price: 5500
      },
      {
        Description: "Aircon",
        QTY: 3,
        Price: 25200
    }
]
},
];
 
function totalPerInvoice() {
  let total = 0;
  invoiceDocument.forEach((data) => {
    console.log(`Invoice Name: ${data.DocumentName}`);
    console.log(`Products:`);
    let ProductDescription = data.Product.map((prod) => {
      total += prod.Price * prod.QTY;
    })
    let itemDescription = data.Product.map((item) => {
        console.log(`${item.Description} - ₱${item.Price} x ${item.QTY} pc(s)`);
      })
    
    console.log(`${itemDescription.join("")} `);
    console.log(`-------------`);
    console.log(`Total: ₱${total}`);
    console.log();
  });
}
 
totalPerInvoice();