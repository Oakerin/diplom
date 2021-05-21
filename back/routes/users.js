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
                title: 'ДИНАМИКА ГОДОВЫХ ТЕМПОВ ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА',
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
            },

            {
                title: 'КОЭФИЦИЕНТ ПЕРЕВОДА ИНВЕСТИЦИЙ В ОК ВО ВВОДЫ в сопоставимых ценах 1995 года ',
                x: worksheet.worksheets[0].getColumn('AH').values,
                y: worksheet.worksheets[0].getColumn('AI').values,
                borderColor: '#FFA07A',
                xTitle: 'Год',
                yTitle: 'kS'
            },

            {
                title: '  ДИНАМИКА  ГОДОВЫХ ТЕМПОВ ИНВЕСТИЦИЙ В ОСНОВНОЙ КАПИТАЛ',
                x: worksheet.worksheets[0].getColumn('AO').values,
                y: worksheet.worksheets[0].getColumn('AP').values,
                borderColor: '#8B4513',
                xTitle: 'Год',
                yTitle: 'pIN'
            },

            {
                title: '  ДИНАМИКА  БАЗИСНЫХ ТЕМПОВ ИНВЕСТИЦИЙ В ОСНОВНОЙ КАПИТАЛ',
                x: worksheet.worksheets[0].getColumn('AU').values,
                y: worksheet.worksheets[0].getColumn('AV').values,
                borderColor: '#9ACD32',
                xTitle: 'Год',
                yTitle: 'Pn'
            },

            {
                title: 'ДИНАМИКА  ГОДОВОГО ТЕМПА ИМПОРТА',
                x: worksheet.worksheets[0].getColumn('BA').values,
                y: worksheet.worksheets[0].getColumn('BB').values,
                borderColor: '#FF1493',
                xTitle: 'Год',
                yTitle: 'pIM'
            },

            {
                title: 'ДИНАМИКА БАЗИСНОГО ТЕМПА ИМПОРТА',
                x: worksheet.worksheets[0].getColumn('BG').values,
                y: worksheet.worksheets[0].getColumn('BH').values,
                borderColor: '#0000FF',
                xTitle: 'Год',
                yTitle: 'Pm'
            },

            {
                title: 'ДОЛЯ ИМПОРТА В ОТЕЧЕСТВЕННОМ ВЫПУСКЕ',
                x: worksheet.worksheets[0].getColumn('BN').values,
                y: worksheet.worksheets[0].getColumn('BO').values,
                borderColor: '#D2691E',
                xTitle: 'Год',
                yTitle: 'qIM'
            },

            {
                title: 'РЕГРЕССИЯ ВВОДОВ ОФ ОТ ИНВЕСТИЦИЙ В ОК в текущих рыночных ценах',
                x: worksheet.worksheets[0].getColumn('BT').values,
                y: worksheet.worksheets[0].getColumn('BU').values,
                borderColor: '#FFD700',
                xTitle: 'Год',
                yTitle: 'WW'
            },

            {
                title: 'ДИНАМИКА  ГОДОВЫХ ТЕМПОВ КОНЕЧНОГО ПОТРЕБЛЕНИЯ ДОМАШНИХ ХОЗЯЙСТВ',
                x: worksheet.worksheets[0].getColumn('CA').values,
                y: worksheet.worksheets[0].getColumn('CB').values,
                borderColor: '#808000',
                xTitle: 'Год',
                yTitle: 'pYD'
            },

            {
                title: 'ДИНАМИКА  БАЗИСНЫХ ТЕМПОВ КОНЕЧНОГО ПОТРЕБЛЕНИЯ ДОМАШНИХ ХОЗЯЙСТВ',
                x: worksheet.worksheets[0].getColumn('CG').values,
                y: worksheet.worksheets[0].getColumn('CH').values,
                borderColor: '#20B2AA',
                xTitle: 'Год',
                yTitle: 'Pd'
            },

            {
                title: 'ДИНАМИКА  ЧИСЛЕННОСТИ ЗАНЯТЫХ И БЕЗРАБОТНЫХ (млн чел)',
                x: worksheet.worksheets[0].getColumn('CN').values,
                y: worksheet.worksheets[0].getColumn('CO').values,
                borderColor: '#C71585',
                xTitle: 'Год',
                yTitle: 'LZ'
            },

            {
                title: 'ВЫПУСК ОТЕЧЕСТВЕННОЙ ПРОДУКЦИИ в сопоставимых ценах 1995 года',
                x: worksheet.worksheets[0].getColumn('CV').values,
                y: worksheet.worksheets[0].getColumn('CW').values,
                borderColor: '#FF4500',
                xTitle: 'Год',
                yTitle: 'XOS (млрд руб)'
            },

            {
                title: 'ДИНАМИКА ПРОИЗВОДИТЕЛЬНОСТИ ТРУДА в сопоставимых ценах 1995 года (тыс руб / чел)',
                x: worksheet.worksheets[0].getColumn('DB').values,
                y: worksheet.worksheets[0].getColumn('DC').values,
                borderColor: '#00FF00',
                xTitle: 'Год',
                yTitle: 'POS = XOS / LZ'
            },

            {
                title: 'БАЗИСНЫЕ ДЕФЛЯТОРЫ ВВОДОВ ОФ ИНВЕСТИЦИЙ в ОК и ОСНОВЫНЫХ ФОНДОВ',
                x: worksheet.worksheets[0].getColumn('DH').values,
                y: worksheet.worksheets[0].getColumn('DI').values,
                borderColor: '#FF0000',
                xTitle: 'Год',
                yTitle: 'Dww'
            },

            {
                title: 'ДИНАМИКА  ГОДОВЫХ ТЕМПОВ КОНЕЧНОГО ПОТРЕБЛЕНИЯ ГОСУДАРСТВА',
                x: worksheet.worksheets[0].getColumn('DP').values,
                y: worksheet.worksheets[0].getColumn('DQ').values,
                borderColor: '#00CED1',
                xTitle: 'Год',
                yTitle: 'pYG'
            },

            {
                title: 'ДИНАМИКА  БАЗИСНОГО ТЕМПА КОНЕЧНОГО ПОТРЕБЛЕНИЯ ГОСУДАРСТВА',
                x: worksheet.worksheets[0].getColumn('DV').values,
                y: worksheet.worksheets[0].getColumn('DW').values,
                borderColor: '#800000',
                xTitle: 'Год',
                yTitle: 'Pg'
            },

            {
                title: 'ДИНАМИКА  ГОДОВОГО ТЕМПА ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА',
                x: worksheet.worksheets[0].getColumn('EB').values,
                y: worksheet.worksheets[0].getColumn('EC').values,
                borderColor: '#808000',
                xTitle: 'Год',
                yTitle: ''
            },

            {
                title: 'ДИНАМИКА ОСНОВНЫХ ФОНДОВ в сопоставимых ценах 1995 года (млрд руб)',
                x: worksheet.worksheets[0].getColumn('EH').values,
                y: worksheet.worksheets[0].getColumn('EI').values,
                borderColor: '#B8860B',
                xTitle: 'Год',
                yTitle: 'FS'
            },

            {
                title: 'ДИНАМИКА ФОНДООТДАЧИ в сопоставимых ценах 1995 года',
                x: worksheet.worksheets[0].getColumn('EO').values,
                y: worksheet.worksheets[0].getColumn('EP').values,
                borderColor: '#800080',
                xTitle: 'Год',
                yTitle: 'FOS=XOS/FS'
            },

            {
                title: 'ДИНАМИКА  БАЗИСНОГО ТЕМПА ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА',
                x: worksheet.worksheets[0].getColumn('EU').values,
                y: worksheet.worksheets[0].getColumn('EV').values,
                borderColor: '#FFD700',
                xTitle: 'Год',
                yTitle: ''
            },

            {
                title: 'ДИНАМИКА  ГОДОВЫХ ТЕМПОВ КОНЕЧНОГО ПОТРЕБЛЕНИЯ НКО',
                x: worksheet.worksheets[0].getColumn('FA').values,
                y: worksheet.worksheets[0].getColumn('FB').values,
                borderColor: '#8B0000',
                xTitle: 'Год',
                yTitle: 'pYNK'
            },

            {
                title: 'ДИНАМИКА  БАЗИСНОГО ТЕМПА КОНЕЧНОГО ПОТРЕБЛЕНИЯ НКО',
                x: worksheet.worksheets[0].getColumn('FH').values,
                y: worksheet.worksheets[0].getColumn('FI').values,
                borderColor: '#00FFFF',
                xTitle: 'Год',
                yTitle: 'Pnk'
            },

            {
                title: 'ДИНАМИКА  ГОДОВОГО ТЕМПА ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА',
                x: worksheet.worksheets[0].getColumn('FN').values,
                y: worksheet.worksheets[0].getColumn('FO').values,
                borderColor: '#D2691E',
                xTitle: 'Год',
                yTitle: ''
            },

            {
                title: 'ГРАНИЦА ОТЕЧЕСТВЕННОГО ВЫПУСКА РОССИЙСКОЙ ЭКОНОМИКИ в сопоставимых ценах 1995 года',
                x: worksheet.worksheets[0].getColumn('FT').values,
                y: worksheet.worksheets[0].getColumn('FU').values,
                borderColor: '#2F4F4F',
                xTitle: 'Год',
                yTitle: 'XOS'
            },

            {
                title: 'КОЭФФИЦИЕНТ ЗАГРУЗКИ ПРОИЗВОДСТВЕННЫХ  МОЩНОСТЕЙ',
                x: worksheet.worksheets[0].getColumn('GA').values,
                y: worksheet.worksheets[0].getColumn('GB').values,
                borderColor: '#00FF00',
                xTitle: 'Год',
                yTitle: 'kZG'
            },

            {
                title: 'ДИНАМИКА  БАЗИСНОГО ТЕМПА ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА',
                x: worksheet.worksheets[0].getColumn('GG').values,
                y: worksheet.worksheets[0].getColumn('GH').values,
                borderColor: '#FF0000',
                xTitle: 'Год',
                yTitle: ''
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
