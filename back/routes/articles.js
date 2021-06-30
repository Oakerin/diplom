const express = require('express');
const router = express.Router();
const Excel = require('exceljs');

const fileName = '/diplom_28-05.xlsx';

const firstYearCell = {
    row: 50,
    column: 'P',
    columnKey: 36,
    value: 2010
}


const rows = [];
const rowsData = {

    '2-1-1': [51,52,53,54,56,60,61,62,64],
    '2-1-2': [51,53,54,56,65],
    '2-1-3': [65,88,98,53,99,54,101],
    '2-1-4': [101,98,99],
    '2-1-6': [60,69,70,71],
    '2-1-7': [80,81],
    '2-6-1': [65,60,69,70,71,61,80,81,63,62,52],
    '2-6-3': [60,69,70,71,60],
    '2-6-10': [80],

    '2-7-1': [65,80,62,52],
    '3-2': [88,100,66,101],
    '3-3': [60,69,70,71,61,80,81,63,52,64],
    '3-4': [51,56,58,53,54,65],
    '3-5': [51,56,58,53,54,65],
    '3-6': [51,56,58,53,54,65],
    '3-7': [51,56,58,53,54,65],
    '3-8': [65,66,58,88,101],

};


function getRowsById(id) {
    if (rowsData[id] == null) {
        return rows;
    }

    return rowsData[id];
}

router.get('/', function (req, res, next) {
    console.log(req.query.id);

    async function readFile() {
        const workbook = new Excel.Workbook();
        const worksheet = await workbook.xlsx.readFile(__dirname + fileName);

        // года
        const years = worksheet.worksheets[1].getRow(50).values.slice(firstYearCell.columnKey,67); // 16
        const column = 'K';

        return {
            years,
            data: getRowsById(req.query.id).map(row => {
                return {
                    name: worksheet.worksheets[1].getCell(column + row).value,
                    data: worksheet.worksheets[1].getRow(row).values.slice(firstYearCell.columnKey,67) // численность населения
                }
            })
        };
    }

    readFile().then(data => {
        res.send(JSON.stringify({data}));
    });
});

/* POST users listing. */
router.post('/', async function (req, res, next) {
    // const fileName = '/test.xlsx';

    const workbook = new Excel.Workbook();
    const worksheet = await workbook.xlsx.readFile(__dirname + fileName);

    const colNum = req.body.year - firstYearCell.value + firstYearCell.columnKey;

    console.log(colNum);
    console.log(req.body);
    console.log(worksheet.worksheets[1].getCell('86', colNum).value);

    getRowsById(req.body.id).forEach((row, i) => {
        const cellVal = worksheet.worksheets[1].getCell(''+row, colNum).value;
        console.log('cellVal', cellVal);
        if (cellVal == null || cellVal.result == null) {
            worksheet.worksheets[1].getCell(''+row, colNum).value = req.body[''+i];
        }
    });

    workbook.xlsx.writeFile(__dirname + fileName).then(() => {
        res.send(JSON.stringify({ status: 200 }));

        // console.log(req.body.year);
        console.log('Finished...');
    });
});


module.exports = router;
