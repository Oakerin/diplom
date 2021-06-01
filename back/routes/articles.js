const express = require('express');
const router = express.Router();
const Excel = require('exceljs');

const fileName = '/diplom_28-05.xlsx';

router.get('/', function (req, res, next) {
    async function readFile() {
        const workbook = new Excel.Workbook();
        const worksheet = await workbook.xlsx.readFile(__dirname + fileName);

        // года
        const years = worksheet.worksheets[1].getRow(50).values.slice(16,45).reverse(); // 16
        const column = 'K';
        const rows = [
            86, 91, 93, 96, 87, 88, 65, 61, 60, 69, 82, 83, 79, 63, 52
        ];

        return {
            years,
            data: rows.map(row => {
                return {
                    name: worksheet.worksheets[1].getCell(column + row).value,
                    data: worksheet.worksheets[1].getRow(row).values.slice(16,45).reverse() // численность населения
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

    const firstYearCell = {
        row: 50,
        column: 'P',
        value: 1990
    }
    // const fileName = '/test.xlsx';

    const workbook = new Excel.Workbook();
    const worksheet = await workbook.xlsx.readFile(__dirname + fileName);

    worksheet.worksheets[1].getCell('AS86').value = req.body.year;

    workbook.xlsx.writeFile(__dirname + fileName).then(() => {
        res.send(JSON.stringify({ status: 200 }));
        
        console.log(req.body.year);
        console.log('Finished...');
    });
});


module.exports = router;
