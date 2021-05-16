const express = require('express');
const router = express.Router();
const Excel = require('exceljs');

/* GET users listing. */
router.get('/', function (req, res, next) {
    async function readFile() {
        const workbook = new Excel.Workbook();
        const worksheet = await workbook.xlsx.readFile(__dirname + '/diplom.xlsx');

        return [
            {
                title:'ДИНАМИКА ГОДОВЫХ ТЕМПОВ ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА',
                x: worksheet.worksheets[0].getColumn('A').values,
                y: worksheet.worksheets[0].getColumn('B').values,
                borderColor: '#FFBF00',
                xTitle: 'Год',
                yTitle: 'pW'
            },
            {
                title: 'ДИНАМИКА БАЗИСНЫХ ТЕМПОВ ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА',
                x: worksheet.worksheets[0].getColumn('H').values,
                y: worksheet.worksheets[0].getColumn('I').values,
                borderColor: '#FF7F50',
                xTitle: 'Год',
                yTitle: 'Pw'
            },
            {
                title: 'ДИНАМИКА ГОДОВОГО ТЕМПА МОДИФИЦИРОВАННОГО ЭКСПОРТА',
                x: worksheet.worksheets[0].getColumn('O').values,
                y: worksheet.worksheets[0].getColumn('P').values,
                borderColor: '#DE3163',
                xTitle: 'Год',
                yTitle: 'pEXM'
            },
            {
                title: 'ДИНАМИКА БАЗИСНОГО ТЕМПА МОДИФИЦИРОВАННОГО ЭКСПОРТА',
                x: worksheet.worksheets[0].getColumn('U').values,
                y: worksheet.worksheets[0].getColumn('V').values,
                borderColor: '#9FE2BF',
                xTitle: 'Год',
                yTitle: 'Pem'
            },
            {
                title: '  ДИНАМИКА ВВОДОВ ОСНОВНЫХ ФОНДОВ в сопоставимых ценах 1995 года',
                x: worksheet.worksheets[0].getColumn('AB').values,
                y: worksheet.worksheets[0].getColumn('AC').values,
                borderColor: '#40E0D0',
                xTitle: 'Год',
                yTitle: 'WWS'
            }
        ];
    }

    readFile().then(data => {
        res.send(JSON.stringify({data}));
    });
});

/* POST users listing. */
router.post('/', async function (req, res, next) {
    const workbook = new Excel.Workbook();
    const worksheet = await workbook.xlsx.readFile(__dirname + '/diplom.xlsx');

    worksheet.worksheets[0].addRow([3, 'Sam']);

    workbook.xlsx.writeFile(__dirname + '/diplom.xlsx').then(() => {
        res.send(JSON.stringify({}));
        console.log('Finished...');
    });
});



module.exports = router;
