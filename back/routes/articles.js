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
    '1': [116, 86, 91, 93, 96, 87, 88, 65, 61, 69, 82, 83, 79, 52],
    '1-2-1': [86]
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
        // console.log(cellVal);
        if (cellVal.result == null) {
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
