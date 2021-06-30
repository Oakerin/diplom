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
                groupName: 'Траекторные показатели',
                x: worksheet.worksheets[0].getColumn('G').values,
                y: getData(worksheet.worksheets[0].getColumn('H').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('G').values).slice(13),
                    datasets: [
                        {
                            label: 'pW',
                            data: getData(worksheet.worksheets[0].getColumn('H').values).slice(13),
                            borderColor: '#CD853F'
                        },
                        {
                            label: 'СЧЕТ (Прогноз Минэкономразвития c учётом эпидемии КВ)',
                            data: getData(worksheet.worksheets[0].getColumn('J').values).slice(13),
                            borderColor: '#FF0000'
                        },
                        {
                            label: 'СЧЕТ (Прогноз  по модели без учёта эпидемии КВ)',
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
                            label: 'Pw',
                            data: getData(worksheet.worksheets[0].getColumn('AE').values).slice(13),
                            borderColor: '#1E90FF'
                        },
                        {
                            label: 'Тренд',
                            data: getData(worksheet.worksheets[0].getColumn('AF').values).slice(13),
                            borderColor: '#C0C0C0'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
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
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('BA').values).slice(13),
                    datasets: [
                        {
                            label: 'pEXM',
                            data: getData(worksheet.worksheets[0].getColumn('BB').values).slice(13),
                            borderColor: '#1E90FF'
                        },
                        {
                            label: 'СЧЕТ (Экспертный прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('BC').values).slice(13),
                            borderColor: '#FF0000'

                        },
                    ]
                },
                borderColor: '#DE3163',
                xTitle: 'Год',
                yTitle: 'Dem'
            },
            {
                title: 'ДИНАМИКА БАЗИСНОГО ТЕМПА МОДИФИЦИРОВАННОГО ЭКСПОРТА',
                x: worksheet.worksheets[0].getColumn('BW').values,
                y: getData(worksheet.worksheets[0].getColumn('BX').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('BW').values).slice(13),
                    datasets: [
                        {
                            label: 'Pem',
                            data: getData(worksheet.worksheets[0].getColumn('BX').values).slice(13),
                            borderColor: '#0000FF'
                        },
                        {
                            label: 'Pe',
                            data: getData(worksheet.worksheets[0].getColumn('BY').values).slice(13),
                            borderColor: '#BC8F8F'
                        },
                        {
                            label: 'СЧЕТ (Экспертный прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('BZ').values).slice(13),
                            borderColor: '#FF0000'

                        },
                    ]
                },
                borderColor: '#9FE2BF',
                xTitle: 'Год',
                yTitle: 'Pem'
            },
            {
                title: 'ДИНАМИКА ВВОДОВ ОСНОВНЫХ ФОНДОВ в сопоставимых ценах 1995 года',
                x: worksheet.worksheets[0].getColumn('CT').values,
                y: getData(worksheet.worksheets[0].getColumn('CU').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('CT').values).slice(13),
                    datasets: [
                        {
                            label: 'WWS',
                            data: getData(worksheet.worksheets[0].getColumn('CU').values).slice(13),
                            borderColor: '#FF00FF'
                        },
                    ]
                },
                borderColor: '#FF00FF',
                xTitle: 'Год',
                yTitle: 'pW'
            },

            {
                title: 'КОЭФИЦИЕНТ ПЕРЕВОДА ИНВЕСТИЦИЙ В ОК ВО ВВОДЫ в сопоставимых ценах 1995 года',
                x: worksheet.worksheets[0].getColumn('DO').values,
                y: getData(worksheet.worksheets[0].getColumn('DP').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('DO').values).slice(13),
                    datasets: [
                        {
                            label: 'WWS',
                            data: getData(worksheet.worksheets[0].getColumn('DP').values).slice(13),
                            borderColor: '#0000FF'
                        },
                        {
                            label: 'kS',
                            data: getData(worksheet.worksheets[0].getColumn('DQ').values).slice(13),
                            borderColor: '#BC8F8F'
                        },
                        {
                            label: 'INS',
                            data: getData(worksheet.worksheets[0].getColumn('DR').values).slice(13),
                            borderColor: '#FF0000'

                        },
                    ]
                },
                borderColor: '#FFA07A',
                xTitle: 'Год',
                yTitle: 'kS'
            },
            {
                title: 'ДИНАМИКА  ГОДОВЫХ ТЕМПОВ ИНВЕСТИЦИЙ В ОСНОВНОЙ КАПИТАЛ',
                groupName: 'Занятость и оплата труда',
                x: worksheet.worksheets[0].getColumn('EG').values,
                y: getData(worksheet.worksheets[0].getColumn('EH').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('EG').values).slice(13),
                    datasets: [
                        {
                            label: 'pIN',
                            data: getData(worksheet.worksheets[0].getColumn('EH').values).slice(13),
                            borderColor: '#B8860B'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('EI').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#8B4513',
                xTitle: 'Год',
                yTitle: 'pIN'
            },

            {
                title: 'ДИНАМИКА  БАЗИСНЫХ ТЕМПОВ ИНВЕСТИЦИЙ В ОСНОВНОЙ КАПИТАЛ',
                x: worksheet.worksheets[0].getColumn('FC').values,
                y: getData(worksheet.worksheets[0].getColumn('FD').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('FC').values).slice(13),
                    datasets: [
                        {
                            label: 'Pn',
                            data: getData(worksheet.worksheets[0].getColumn('FD').values).slice(13),
                            borderColor: '#00FF7F'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('FE').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#9ACD32',
                xTitle: 'Год',
                yTitle: 'Pn'
            },

            {
                title: 'ДИНАМИКА  ГОДОВОГО ТЕМПА ИМПОРТА',
                x: worksheet.worksheets[0].getColumn('FY').values,
                y: getData(worksheet.worksheets[0].getColumn('FZ').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('FY').values).slice(13),
                    datasets: [
                        {
                            label: 'pIM',
                            data: getData(worksheet.worksheets[0].getColumn('FZ').values).slice(13),
                            borderColor: '#DC143C'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('GA').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#FF1493',
                xTitle: 'Год',
                yTitle: 'pIM'
            },

            {
                title: 'ДИНАМИКА БАЗИСНОГО ТЕМПА ИМПОРТА',
                x: worksheet.worksheets[0].getColumn('GU').values,
                y: getData(worksheet.worksheets[0].getColumn('GV').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('GU').values).slice(13),
                    datasets: [
                        {
                            label: 'IMS',
                            data: getData(worksheet.worksheets[0].getColumn('GV').values).slice(13),
                            borderColor: '#4169E1'
                        },
                        {
                            label: 'qIM',
                            data: getData(worksheet.worksheets[0].getColumn('GW').values).slice(13),
                            borderColor: '#FF0000'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('GX').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#0000FF',
                xTitle: 'Год',
                yTitle: 'Pm'
            },

            {
                title: 'ДОЛЯ ИМПОРТА В ОТЕЧЕСТВЕННОМ ВЫПУСКЕ',
                x: worksheet.worksheets[0].getColumn('HR').values,
                y: getData(worksheet.worksheets[0].getColumn('HS').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('HR').values).slice(13),
                    datasets: [
                        {
                            label: 'qIM',
                            data: getData(worksheet.worksheets[0].getColumn('HS').values).slice(13),
                            borderColor: '#D2691E'
                        },
                    ]
                },
                borderColor: '#D2691E',
                xTitle: 'Год',
                yTitle: 'qIM'
            },

            {
                title: 'РЕГРЕССИЯ ВВОДОВ ОФ ОТ ИНВЕСТИЦИЙ В ОК в текущих рыночных ценах',
                x: worksheet.worksheets[0].getColumn('IN').values,
                y: getData(worksheet.worksheets[0].getColumn('IO').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('IN').values).slice(13),
                    datasets: [
                        {
                            label: 'WW',
                            data: getData(worksheet.worksheets[0].getColumn('IO').values).slice(13),
                            borderColor: '#FFD700'
                        },
                        {
                            label: 'FA',
                            data: getData(worksheet.worksheets[0].getColumn('IP').values).slice(13),
                            borderColor: '#FFD700'
                        },
                        {
                            label: 'IN',
                            data: getData(worksheet.worksheets[0].getColumn('IQ').values).slice(13),
                            borderColor: '#FFD700'
                        },
                    ]
                },
                borderColor: '#FFD700',
                xTitle: 'Год',
                yTitle: 'WW'
            },

            {
                title: 'ДИНАМИКА  ГОДОВЫХ ТЕМПОВ КОНЕЧНОГО ПОТРЕБЛЕНИЯ ДОМАШНИХ ХОЗЯЙСТВ',
                groupName: 'Динамика основных фондов и производственных мощностей',
                x: worksheet.worksheets[0].getColumn('JL').values,
                y: getData(worksheet.worksheets[0].getColumn('JM').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('JL').values).slice(13),
                    datasets: [
                        {
                            label: 'pYD',
                            data: getData(worksheet.worksheets[0].getColumn('JM').values).slice(13),
                            borderColor: '#B8860B'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('JN').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#808000',
                xTitle: 'Год',
                yTitle: 'pYD'
            },

            {
                title: 'ДИНАМИКА  БАЗИСНЫХ ТЕМПОВ КОНЕЧНОГО ПОТРЕБЛЕНИЯ ДОМАШНИХ ХОЗЯЙСТВ',
                x: worksheet.worksheets[0].getColumn('KH').values,
                y: getData(worksheet.worksheets[0].getColumn('KI').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('KH').values).slice(13),
                    datasets: [
                        {
                            label: 'Pd',
                            data: getData(worksheet.worksheets[0].getColumn('KI').values).slice(13),
                            borderColor: '#4169E1'
                        },
                        {
                            label: 'Pd*',
                            data: getData(worksheet.worksheets[0].getColumn('KJ').values).slice(13),
                            borderColor: '#4169E1'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('KK').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#20B2AA',
                xTitle: 'Год',
                yTitle: 'Pd'
            },

            {
                title: 'ДИНАМИКА  ЧИСЛЕННОСТИ ЗАНЯТЫХ И БЕЗРАБОТНЫХ (млн чел)',
                x: worksheet.worksheets[0].getColumn('LE').values,
                y: getData(worksheet.worksheets[0].getColumn('LF').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('LE').values).slice(13),
                    datasets: [
                        {
                            label: 'LZ',
                            data: getData(worksheet.worksheets[0].getColumn('LF').values).slice(13),
                            borderColor: '#4169E1'
                        },
                        {
                            label: 'СЧЕТ* (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('LG').values).slice(13),
                            borderColor: '#000000'
                        },
                        {
                            label: 'BZ',
                            data: getData(worksheet.worksheets[0].getColumn('LH').values).slice(13),
                            borderColor: '#FFA500'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('LI').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#C71585',
                xTitle: 'Год',
                yTitle: 'LZ'
            },

            {
                title: 'ВЫПУСК ОТЕЧЕСТВЕННОЙ ПРОДУКЦИИ в сопоставимых ценах 1995 года',
                x: worksheet.worksheets[0].getColumn('MB').values,
                y: getData(worksheet.worksheets[0].getColumn('MC').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('MB').values).slice(13),
                    datasets: [
                        {
                            label: 'XOS',
                            data: getData(worksheet.worksheets[0].getColumn('MC').values).slice(13),
                            borderColor: '#87CEEB'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('MD').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#FF4500',
                xTitle: 'Год',
                yTitle: 'XOS (млрд руб)'
            },

            {
                title: 'ДИНАМИКА ПРОИЗВОДИТЕЛЬНОСТИ ТРУДА в сопоставимых ценах 1995 года (тыс руб / чел)',
                x: worksheet.worksheets[0].getColumn('MY').values,
                y: getData(worksheet.worksheets[0].getColumn('MZ').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('MY').values).slice(13),
                    datasets: [
                        {
                            label: 'pOS',
                            data: getData(worksheet.worksheets[0].getColumn('MZ').values).slice(13),
                            borderColor: '#008000'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('NA').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#00FF00',
                xTitle: 'Год',
                yTitle: 'POS = XOS / LZ'
            },

            {
                title: 'БАЗИСНЫЕ ДЕФЛЯТОРЫ ВВОДОВ ОФ ИНВЕСТИЦИЙ в ОК и ОСНОВЫНЫХ ФОНДОВ',
                x: worksheet.worksheets[0].getColumn('NV').values,
                y: getData(worksheet.worksheets[0].getColumn('NW').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('NV').values).slice(13),
                    datasets: [
                        {
                            label: 'Dww',
                            data: getData(worksheet.worksheets[0].getColumn('NW').values).slice(13),
                            borderColor: '#00BFFF'
                        },
                        {
                            label: 'IPC',
                            data: getData(worksheet.worksheets[0].getColumn('NX').values).slice(13),
                            borderColor: '#000000'
                        },
                        {
                            label: 'Df',
                            data: getData(worksheet.worksheets[0].getColumn('NY').values).slice(13),
                            borderColor: '#008000'
                        },
                        {
                            label: 'Dn',
                            data: getData(worksheet.worksheets[0].getColumn('NZ').values).slice(13),
                            borderColor: '#FF0000'
                        },
                    ]
                },
                borderColor: '#FF0000',
                xTitle: 'Год',
                yTitle: 'Dww'
            },

            {
                title: 'ДИНАМИКА  ГОДОВЫХ ТЕМПОВ КОНЕЧНОГО ПОТРЕБЛЕНИЯ ГОСУДАРСТВА',
                groupName: 'Рабочие гипотезы',
                x: worksheet.worksheets[0].getColumn('OU').values,
                y: getData(worksheet.worksheets[0].getColumn('OV').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('OU').values).slice(13),
                    datasets: [
                        {
                            label: 'pYG',
                            data: getData(worksheet.worksheets[0].getColumn('OV').values).slice(13),
                            borderColor: '#FF0000'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('OW').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#00CED1',
                xTitle: 'Год',
                yTitle: 'pYG'
            },

            {
                title: 'ДИНАМИКА  БАЗИСНОГО ТЕМПА КОНЕЧНОГО ПОТРЕБЛЕНИЯ ГОСУДАРСТВА',
                x: worksheet.worksheets[0].getColumn('PQ').values,
                y: getData(worksheet.worksheets[0].getColumn('PR').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('PQ').values).slice(13),
                    datasets: [
                        {
                            label: 'Pg',
                            data: getData(worksheet.worksheets[0].getColumn('PR').values).slice(13),
                            borderColor: '#00BFFF'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('PS').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#800000',
                xTitle: 'Год',
                yTitle: 'Pg'
            },

            {
                title: 'ДИНАМИКА  ГОДОВОГО ТЕМПА ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА',
                x: worksheet.worksheets[0].getColumn('QM').values,
                y: getData(worksheet.worksheets[0].getColumn('QN').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('QM').values).slice(13),
                    datasets: [
                        {
                            label: 'pW',
                            data: getData(worksheet.worksheets[0].getColumn('QN').values).slice(13),
                            borderColor: '#B8860B'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('QO').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#808000',
                xTitle: 'Год',
                yTitle: ''
            },

            {
                title: 'ДИНАМИКА ОСНОВНЫХ ФОНДОВ в сопоставимых ценах 1995 года (млрд руб)',
                x: worksheet.worksheets[0].getColumn('RJ').values,
                y: getData(worksheet.worksheets[0].getColumn('RK').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('RJ').values).slice(13),
                    datasets: [
                        {
                            label: 'FS',
                            data: getData(worksheet.worksheets[0].getColumn('RK').values).slice(13),
                            borderColor: '#FFD700'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('RM').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#B8860B',
                xTitle: 'Год',
                yTitle: 'FS'
            },

            {
                title: 'ДИНАМИКА ФОНДООТДАЧИ в сопоставимых ценах 1995 года',
                x: worksheet.worksheets[0].getColumn('SG').values,
                y: getData(worksheet.worksheets[0].getColumn('SH').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('SG').values).slice(13),
                    datasets: [
                        {
                            label: 'fOS',
                            data: getData(worksheet.worksheets[0].getColumn('SH').values).slice(13),
                            borderColor: '#FF0000'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('SI').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#800080',
                xTitle: 'Год',
                yTitle: 'FOS=XOS/FS'
            },

            {
                title: 'ДИНАМИКА  БАЗИСНОГО ТЕМПА ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА',
                x: worksheet.worksheets[0].getColumn('TC').values,
                y: getData(worksheet.worksheets[0].getColumn('TD').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('TC').values).slice(13),
                    datasets: [
                        {
                            label: 'Pw',
                            data: getData(worksheet.worksheets[0].getColumn('TD').values).slice(13),
                            borderColor: '#B8860B'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('TE').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#FFD700',
                xTitle: 'Год',
                yTitle: ''
            },

            {
                title: 'ДИНАМИКА  ГОДОВЫХ ТЕМПОВ КОНЕЧНОГО ПОТРЕБЛЕНИЯ НКО',
                groupName: 'Сценарии исходных данных',
                x: worksheet.worksheets[0].getColumn('TZ').values,
                y: getData(worksheet.worksheets[0].getColumn('UA').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('TZ').values).slice(13),
                    datasets: [
                        {
                            label: 'Pynk',
                            data: getData(worksheet.worksheets[0].getColumn('UA').values).slice(13),
                            borderColor: '#DC143C'
                        },
                        {
                            label: 'Тренд',
                            data: getData(worksheet.worksheets[0].getColumn('UB').values).slice(13),
                            borderColor: '#C0C0C0'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('UC').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#8B0000',
                xTitle: 'Год',
                yTitle: 'pYNK'
            },

            {
                title: 'ДИНАМИКА  БАЗИСНОГО ТЕМПА КОНЕЧНОГО ПОТРЕБЛЕНИЯ НКО',
                x: worksheet.worksheets[0].getColumn('UW').values,
                y: getData(worksheet.worksheets[0].getColumn('UX').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('UW').values).slice(13),
                    datasets: [
                        {
                            label: 'Pnk',
                            data: getData(worksheet.worksheets[0].getColumn('UX').values).slice(13),
                            borderColor: '#00008B'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('UY').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#00FFFF',
                xTitle: 'Год',
                yTitle: 'Pnk'
            },

            {
                title: 'ДИНАМИКА  ГОДОВОГО ТЕМПА ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА',
                x: worksheet.worksheets[0].getColumn('VS').values,
                y: getData(worksheet.worksheets[0].getColumn('VT').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('VS').values).slice(13),
                    datasets: [
                        {
                            label: 'pW',
                            data: getData(worksheet.worksheets[0].getColumn('VT').values).slice(13),
                            borderColor: '#B8860B'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('VU').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#D2691E',
                xTitle: 'Год',
                yTitle: ''
            },

            {
                title: 'ГРАНИЦА ОТЕЧЕСТВЕННОГО ВЫПУСКА РОССИЙСКОЙ ЭКОНОМИКИ в сопоставимых ценах 1995 года',
                x: worksheet.worksheets[0].getColumn('WO').values,
                y: getData(worksheet.worksheets[0].getColumn('WP').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('WO').values).slice(13),
                    datasets: [
                        {
                            label: 'XOS',
                            data: getData(worksheet.worksheets[0].getColumn('WP').values).slice(13),
                            borderColor: '#6495ED'
                        },
                        {
                            label: 'ПРЕДЕЛЬНЫЙ ВЫПУСК  ^XOS',
                            data: getData(worksheet.worksheets[0].getColumn('WQ').values).slice(13),
                            borderColor: '#B8860B'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('WR').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#2F4F4F',
                xTitle: 'Год',
                yTitle: 'XOS'
            },

            {
                title: 'КОЭФФИЦИЕНТ ЗАГРУЗКИ ПРОИЗВОДСТВЕННЫХ  МОЩНОСТЕЙ',
                x: worksheet.worksheets[0].getColumn('XK').values,
                y: getData(worksheet.worksheets[0].getColumn('XL').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('XK').values).slice(13),
                    datasets: [
                        {
                            label: 'koZ',
                            data: getData(worksheet.worksheets[0].getColumn('XL').values).slice(13),
                            borderColor: '#FF0000'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('XM').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#00FF00',
                xTitle: 'Год',
                yTitle: 'kZG'
            },

            {
                title: 'ДИНАМИКА  БАЗИСНОГО ТЕМПА ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА',
                x: worksheet.worksheets[0].getColumn('YG').values,
                y: getData(worksheet.worksheets[0].getColumn('YH').values),
                data: {
                    labels: getData(worksheet.worksheets[0].getColumn('YG').values).slice(13),
                    datasets: [
                        {
                            label: 'Pw',
                            data: getData(worksheet.worksheets[0].getColumn('YH').values).slice(13),
                            borderColor: '#B8860B'
                        },
                        {
                            label: 'СЧЕТ (Прогноз)',
                            data: getData(worksheet.worksheets[0].getColumn('YI').values).slice(13),
                            borderColor: '#000000'
                        },
                    ]
                },
                borderColor: '#FF0000',
                xTitle: 'Год',
                yTitle: ''
            },

        ];
    }

    readFile().then(data => {
        res.send(JSON.stringify({ data }));
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

    worksheet.worksheets[1].getCell('AS86').value = 146;

    workbook.xlsx.writeFile(__dirname + fileName).then(() => {
        res.send(JSON.stringify({ status: 200 }));
        console.log('Finished...');
    });
});


module.exports = router;
