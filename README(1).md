

<img src="https://raw.githubusercontent.com/SAP-Custom-Widget/dynamoTable/main/icon.png" width="100">

## SAC-P Custom Widget: dynamoTable
A custom widget to help you create custom tables.

![preview](https://raw.githubusercontent.com/SAP-Custom-Widget/dynamoTable/main/screenshot.PNG)

## Installation
To use this widget in your SAP application, follow these steps:

<a target="_blank" href="https://sap-custom-widget.github.io/?dl=dynamoTable"><img width="150" src="https://raw.githubusercontent.com/SAP-Custom-Widget/sap-custom-widget.github.io/main/download.png"/></a>
- Download the `dynamoTable.json` file from the URLs specified in the webcomponents property of the JSON.
- Go to your SAC Portal, select Analytic Application from the left side bar, and then go to the Custom Widget tab.
- Click on the + icon on the right side and select the `dynamoTable.json` file that you downloaded.
- You're done! You can now use it in your app.

## Methods
The widget has the following methods:


|  Method | Return Type | Description  |
| ------------ | ------------ | ------------ |
| setTableData(arrayOfObject)  | Selection/Object `array` |  Data as array of object format. |

### Example
```javascript

var data  = [
  {
    productId: "1",
    productName: "Wireless Mouse",
    category: "Electronics",
    price: "25.99",
    quantitySold: "120",
    dateOfSale: "2024-05-01"
  },
  {
    productId: "2",
    productName: "Bluetooth Headphones",
    category: "Electronics",
    price: "79.99",
    quantitySold: "75",
    dateOfSale: "2024-05-02"
  }
];

dynamoTable_1.setTableData(data);
```

### Output
![preview](https://raw.githubusercontent.com/SAP-Custom-Widget/dynamoTable/main/screenshot1.PNG)

## About
This sac-p custom widget is developed by [Rohit Chouhan](http://linkedin.com/in/itsrohitchouhan "Rohit Chouhan"), Follow me on Linkedin [@itsrohitchouhan](http://linkedin.com/in/itsrohitchouhan "@itsrohitchouhan")
