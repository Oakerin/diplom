const express = require('express');
const router = express.Router();
const Excel = require('exceljs');

const fileName = '/diplom_28-05.xlsx';

const getData = (arr) => {
    return arr.map(val => {
        if (val && val.result != null) {
            return val.result;
        }
    
        return val;
    })
}

/* GET users listing. */
router.get('/', function (req, res, next) {
    async function readFile() {
        const workbook = new Excel.Workbook();
        const worksheet = await workbook.xlsx.readFile(__dirname + fileName);

        return [
            {
                title: 'ДИНАМИКА ГОДОВЫХ ТЕМПОВ ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА',
                x: worksheet.worksheets[0].getColumn('H').values,
                y: getData(worksheet.worksheets[0].getColumn('I').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('G').values).slice(13),
                    datasets: [
                        {
                            label: 'ДИНАМИКА ГОДОВЫХ ТЕМПОВ ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА',
                            data: getData(worksheet.worksheets[0].getColumn('H').values).slice(13),
                            borderColor: '#FFBF00'
                        },
                        {
                            label: 'Прогноз Минэкономразвития c учётом эпидемии КВ',
                            data: getData(worksheet.worksheets[0].getColumn('J').values).slice(13),
                            borderColor: '#FF7F50'
                        },
                        {
                            label: 'Прогноз  по модели без учёта эпидемии КВ',
                            data: getData(worksheet.worksheets[0].getColumn('I').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#FFBF00',
                xTitle: 'Год',
                yTitle: 'pW'
            },
            {
                title: 'ДИНАМИКА  БАЗИСНЫХ ТЕМПОВ ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА',
                x: worksheet.worksheets[0].getColumn('AD').values,
                y: getData(worksheet.worksheets[0].getColumn('AE').values),
		        data: {
                    labels: getData(worksheet.worksheets[0].getColumn('AD').values).slice(13),
                    datasets: [
                        {
                            label: 'ДИНАМИКА  БАЗИСНЫХ ТЕМПОВ ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА',
                            data: getData(worksheet.worksheets[0].getColumn('AE').values).slice(13),
                            borderColor: '#20B2AA'
                        },
                        {
                            label: 'Тренд',
                            data: getData(worksheet.worksheets[0].getColumn('AF').values).slice(13),
                            borderColor: '#C0C0C0'
                        },
                        {
                            label: 'Прогноз',
                            data: getData(worksheet.worksheets[0].getColumn('AG').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#FF7F50',
                xTitle: 'Год',
                yTitle: 'Pw'
            },
            {
                title: 'ДИНАМИКА  БАЗИСНОГО ДЕФЛЯТОРА МОДИФИЦИРОВАННОГО ЭКСПОРТА',
                x: worksheet.worksheets[0].getColumn('BA').values,
                y: getData(worksheet.worksheets[0].getColumn('BB').values),
                borderColor: '#DE3163',
                xTitle: 'Год',
                yTitle: 'Dem'
            },
            {
                title: 'ДИНАМИКА БАЗИСНОГО ТЕМПА МОДИФИЦИРОВАННОГО ЭКСПОРТА',
                x: worksheet.worksheets[0].getColumn('BW').values,
                y: getData(worksheet.worksheets[0].getColumn('BX').values),
                borderColor: '#9FE2BF',
                xTitle: 'Год',
                yTitle: 'Pem'
            },
            {
                title: 'ДИНАМИКА ВВОДОВ ОСНОВНЫХ ФОНДОВ в сопоставимых ценах 1995 года',
                x: worksheet.worksheets[0].getColumn('CT').values,
                y: getData(worksheet.worksheets[0].getColumn('CU').values),
                borderColor: '#40E0D0',
                xTitle: 'Год',
                yTitle: 'pW'
            },

            {
                title: 'КОЭФИЦИЕНТ ПЕРЕВОДА ИНВЕСТИЦИЙ В ОК ВО ВВОДЫ в сопоставимых ценах 1995 года ',
                x: worksheet.worksheets[0].getColumn('DO').values,
                y: getData(worksheet.worksheets[0].getColumn('DP').values),
                borderColor: '#FFA07A',
                xTitle: 'Год',
                yTitle: 'kS'
            },

            {
                title: '  ДИНАМИКА  ГОДОВЫХ ТЕМПОВ ИНВЕСТИЦИЙ В ОСНОВНОЙ КАПИТАЛ',
                x: worksheet.worksheets[0].getColumn('EG').values,
                y: getData(worksheet.worksheets[0].getColumn('EH').values),
                borderColor: '#8B4513',
                xTitle: 'Год',
                yTitle: 'pIN'
            },

            {
                title: '  ДИНАМИКА  БАЗИСНЫХ ТЕМПОВ ИНВЕСТИЦИЙ В ОСНОВНОЙ КАПИТАЛ',
                x: worksheet.worksheets[0].getColumn('FC').values,
                y: getData(worksheet.worksheets[0].getColumn('FD').values),
                borderColor: '#9ACD32',
                xTitle: 'Год',
                yTitle: 'Pn'
            },

            {
                title: 'ДИНАМИКА  ГОДОВОГО ТЕМПА ИМПОРТА',
                x: worksheet.worksheets[0].getColumn('FY').values,
                y: getData(worksheet.worksheets[0].getColumn('FZ').values),
                borderColor: '#FF1493',
                xTitle: 'Год',
                yTitle: 'pIM'
            },

            {
                title: 'ДИНАМИКА БАЗИСНОГО ТЕМПА ИМПОРТА',
                x: worksheet.worksheets[0].getColumn('GU').values,
                y: getData(worksheet.worksheets[0].getColumn('GV').values),
                borderColor: '#0000FF',
                xTitle: 'Год',
                yTitle: 'Pm'
            },

            {
                title: 'ДОЛЯ ИМПОРТА В ОТЕЧЕСТВЕННОМ ВЫПУСКЕ',
                x: worksheet.worksheets[0].getColumn('HR').values,
                y: getData(worksheet.worksheets[0].getColumn('HS').values),
                borderColor: '#D2691E',
                xTitle: 'Год',
                yTitle: 'qIM'
            },

            {
                title: 'РЕГРЕССИЯ ВВОДОВ ОФ ОТ ИНВЕСТИЦИЙ В ОК в текущих рыночных ценах',
                x: worksheet.worksheets[0].getColumn('IN').values,
                y: getData(worksheet.worksheets[0].getColumn('IO').values),
                borderColor: '#FFD700',
                xTitle: 'Год',
                yTitle: 'WW'
            },

            {
                title: 'ДИНАМИКА  ГОДОВЫХ ТЕМПОВ КОНЕЧНОГО ПОТРЕБЛЕНИЯ ДОМАШНИХ ХОЗЯЙСТВ',
                x: worksheet.worksheets[0].getColumn('JL').values,
                y: getData(worksheet.worksheets[0].getColumn('JM').values),
                borderColor: '#808000',
                xTitle: 'Год',
                yTitle: 'pYD'
            },

            {
                title: 'ДИНАМИКА  БАЗИСНЫХ ТЕМПОВ КОНЕЧНОГО ПОТРЕБЛЕНИЯ ДОМАШНИХ ХОЗЯЙСТВ',
                x: worksheet.worksheets[0].getColumn('KH').values,
                y: getData(worksheet.worksheets[0].getColumn('KI').values),
                borderColor: '#20B2AA',
                xTitle: 'Год',
                yTitle: 'Pd'
            },

            {
                title: 'ДИНАМИКА  ЧИСЛЕННОСТИ ЗАНЯТЫХ И БЕЗРАБОТНЫХ (млн чел)',
                x: worksheet.worksheets[0].getColumn('LE').values,
                y: getData(worksheet.worksheets[0].getColumn('LF').values),
                borderColor: '#C71585',
                xTitle: 'Год',
                yTitle: 'LZ'
            },

            {
                title: 'ВЫПУСК ОТЕЧЕСТВЕННОЙ ПРОДУКЦИИ в сопоставимых ценах 1995 года',
                x: worksheet.worksheets[0].getColumn('MB').values,
                y: getData(worksheet.worksheets[0].getColumn('MC').values),
                borderColor: '#FF4500',
                xTitle: 'Год',
                yTitle: 'XOS (млрд руб)'
            },

            {
                title: 'ДИНАМИКА ПРОИЗВОДИТЕЛЬНОСТИ ТРУДА в сопоставимых ценах 1995 года (тыс руб / чел)',
                x: worksheet.worksheets[0].getColumn('MY').values,
                y: getData(worksheet.worksheets[0].getColumn('MZ').values),
                borderColor: '#00FF00',
                xTitle: 'Год',
                yTitle: 'POS = XOS / LZ'
            },

            {
                title: 'БАЗИСНЫЕ ДЕФЛЯТОРЫ ВВОДОВ ОФ ИНВЕСТИЦИЙ в ОК и ОСНОВЫНЫХ ФОНДОВ',
                x: worksheet.worksheets[0].getColumn('NV').values,
                y: getData(worksheet.worksheets[0].getColumn('NW').values),
                borderColor: '#FF0000',
                xTitle: 'Год',
                yTitle: 'Dww'
            },

            {
                title: 'ДИНАМИКА  ГОДОВЫХ ТЕМПОВ КОНЕЧНОГО ПОТРЕБЛЕНИЯ ГОСУДАРСТВА',
                x: worksheet.worksheets[0].getColumn('OU').values,
                y: getData(worksheet.worksheets[0].getColumn('OV').values),
                borderColor: '#00CED1',
                xTitle: 'Год',
                yTitle: 'pYG'
            },

            {
                title: 'ДИНАМИКА  БАЗИСНОГО ТЕМПА КОНЕЧНОГО ПОТРЕБЛЕНИЯ ГОСУДАРСТВА',
                x: worksheet.worksheets[0].getColumn('PQ').values,
                y: getData(worksheet.worksheets[0].getColumn('PR').values),
                borderColor: '#800000',
                xTitle: 'Год',
                yTitle: 'Pg'
            },

            {
                title: 'ДИНАМИКА  ГОДОВОГО ТЕМПА ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА',
                x: worksheet.worksheets[0].getColumn('QM').values,
                y: getData(worksheet.worksheets[0].getColumn('QN').values),
                borderColor: '#808000',
                xTitle: 'Год',
                yTitle: ''
            },

            {
                title: 'ДИНАМИКА ОСНОВНЫХ ФОНДОВ в сопоставимых ценах 1995 года (млрд руб)',
                x: worksheet.worksheets[0].getColumn('RJ').values,
                y: getData(worksheet.worksheets[0].getColumn('RK').values),
                borderColor: '#B8860B',
                xTitle: 'Год',
                yTitle: 'FS'
            },

            {
                title: 'ДИНАМИКА ФОНДООТДАЧИ в сопоставимых ценах 1995 года',
                x: worksheet.worksheets[0].getColumn('SG').values,
                y: getData(worksheet.worksheets[0].getColumn('SH').values),
                borderColor: '#800080',
                xTitle: 'Год',
                yTitle: 'FOS=XOS/FS'
            },

            {
                title: 'ДИНАМИКА  БАЗИСНОГО ТЕМПА ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА',
                x: worksheet.worksheets[0].getColumn('TC').values,
                y: getData(worksheet.worksheets[0].getColumn('TD').values),
                borderColor: '#FFD700',
                xTitle: 'Год',
                yTitle: ''
            },

            {
                title: 'ДИНАМИКА  ГОДОВЫХ ТЕМПОВ КОНЕЧНОГО ПОТРЕБЛЕНИЯ НКО',
                x: worksheet.worksheets[0].getColumn('TZ').values,
                y: getData(worksheet.worksheets[0].getColumn('UA').values),
                borderColor: '#8B0000',
                xTitle: 'Год',
                yTitle: 'pYNK'
            },

            {
                title: 'ДИНАМИКА  БАЗИСНОГО ТЕМПА КОНЕЧНОГО ПОТРЕБЛЕНИЯ НКО',
                x: worksheet.worksheets[0].getColumn('UW').values,
                y: getData(worksheet.worksheets[0].getColumn('UX').values),
                borderColor: '#00FFFF',
                xTitle: 'Год',
                yTitle: 'Pnk'
            },

            {
                title: 'ДИНАМИКА  ГОДОВОГО ТЕМПА ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА',
                x: worksheet.worksheets[0].getColumn('VS').values,
                y: getData(worksheet.worksheets[0].getColumn('VT').values),
                borderColor: '#D2691E',
                xTitle: 'Год',
                yTitle: ''
            },

            {
                title: 'ГРАНИЦА ОТЕЧЕСТВЕННОГО ВЫПУСКА РОССИЙСКОЙ ЭКОНОМИКИ в сопоставимых ценах 1995 года',
                x: worksheet.worksheets[0].getColumn('WO').values,
                y: getData(worksheet.worksheets[0].getColumn('WP').values),
                borderColor: '#2F4F4F',
                xTitle: 'Год',
                yTitle: 'XOS'
            },

            {
                title: 'КОЭФФИЦИЕНТ ЗАГРУЗКИ ПРОИЗВОДСТВЕННЫХ  МОЩНОСТЕЙ',
                x: worksheet.worksheets[0].getColumn('XK').values,
                y: getData(worksheet.worksheets[0].getColumn('XL').values),
                borderColor: '#00FF00',
                xTitle: 'Год',
                yTitle: 'kZG'
            },

            {
                title: 'ДИНАМИКА  БАЗИСНОГО ТЕМПА ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА',
                x: worksheet.worksheets[0].getColumn('YG').values,
                y: getData(worksheet.worksheets[0].getColumn('YH').values),
                borderColor: '#FF0000',
                xTitle: 'Год',
                yTitle: ''
            },

        ];
    }

    readFile().then(data => {
        res.send(JSON.stringify({data}));
    });
});

/* POST users listing. */
router.post('/', async function (req, res, next) {
    const workbook = new Excel.Workbook();
    const worksheet = await workbook.xlsx.readFile(__dirname + fileName);

    worksheet.worksheets[0].addRow([3, 'Sam']);

    workbook.xlsx.writeFile(__dirname + fileName).then(() => {
        res.send(JSON.stringify({}));
        console.log('Finished...');
    });
});


module.exports = router;
