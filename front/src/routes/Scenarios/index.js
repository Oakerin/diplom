import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DotIcon from '@material-ui/icons/FiberManualRecord';
import { Link as RouteLink, useParams, useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const links = [
    {
        name: 'ОБЩИЕ МАКРОЭКОНОМИЧЕСКИЕ ПОКАЗАТЕЛИ',
        links: [
            {
                name: 'Основные социально-экономические показатели',
                to: '/1-1'
            },
            {
                name: 'Индекс производительности труда в 2015-2017 гг',
                to: '/1-2'
            }
        ]
    },
    {
        name: 'ГОДОВЫЕ ПОКАЗАТЕЛИ СИСТЕМЫ НАЦИОНАЛЬНЫХ СЧЕТОВ',
        links: [
            {
                name: 'Консолидированные счета в 2014-2018 гг',
                to: null,
                links: [
                    {
                        name: ' Счет товаров и услуг',
                        to: '/2-1-1'
                    },
                    {
                        name: 'Счет производства',
                        to: '/2-1-2'
                    },
                    {
                        name: 'Счет образования доходов',
                        to: '/2-1-3'
                    },
                    {
                        name: 'Счет распределения первичных доходов',
                        to: '/2-1-4'
                    },
                    {
                        name: 'Счет использования располагаемого дохода',
                        to: '/2-1-6'
                    },
                    {
                        name: 'Счет операций с капиталом',
                        to: '/2-1-7'
                    },
                ]
            },
            {
                name: 'Показатели использования валового внутреннего продукта',
                to: null,
                links: [
                    {
                        name: 'Использование валового внутреннего продукта в 2014-2018 гг',
                        to: '/2-6-1'
                    },
                    {
                        name: 'Расходы на конечное потребление и фактическое конечное потребление в 2014-2018 гг',
                        to: '/2-6-3'
                    },
                    {
                        name: 'Валовое накопление основного капитала по видам активов в 2014-2017 г',
                        to: '/2-6-10'
                    },
                ]
            },
            {
                name: 'Годовая динамика валового внутреннего продукта и его элементов',
                to: null,
                links: [
                    {
                        name: 'Валовой внутренний продукт и его элементы в 2014-2018 гг',
                        to: '/2-7-1'
                    },
                    {
                        name: 'Индексы физического объема расходов на конечное потребление домашних хозяйств по группам товаров\n' +
                            'и услуг в 2015-2017 гг. в процентах к предыдущему году',
                        to: '/2-7-15'
                    },
                    {
                        name: 'Индексы физического объема элементов использования валового внутреннего продукта в 2014-2018 гг.\n' +
                            'в процентах к 2016 г',
                        to: '/2-7-17'
                    },
                    {
                        name: 'Индексы физического объема фактического конечного потребления домашних хозяйств в 2014-2018 гг.\n' +
                            'в процентах к 2016 г',
                        to: '/2-7-18'
                    },
                    {
                        name: 'Дефляторы элементов использования валового внутреннего продукта в 2015-2018 гг.\n' +
                            'в процентах к предыдущему году ',
                        to: '/2-7-19'
                    },
                    {
                        name: 'Дефляторы расходов на конечное потребление домашних хозяйств по группам товаров и услуг\n' +
                        'в 2015-2017 гг. в процентах к предыдущему году',
                        to: '/2-7-20'
                    },
                ]
            },
        ],
    },        
    {
        name: 'КВАРТАЛЬНЫЕ ПОКАЗАТЕЛИ ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА И ЕГО ЭЛЕМЕНТОВ',
        links: [
            {
                name: 'Валовой внутренний продукт по источникам доходов по кварталам 2014-2018 гг. в текущих ценах',
                to: '/3-2'
            },
            {
                name: 'Валовой внутренний продукт по элементам использования по кварталам в 2014-2018 гг. в текущих ценах ',
                to: '/3-3'
            },
            {
                name: 'Счет производства по институциональным секторам по кварталам в 2014 г',
                to: '/3-4'
            },
            {
                name: 'Счет производства по институциональным секторам по кварталам в 2015 г',
                to: '/3-5'
            },
            {
                name: 'Счет производства по институциональным секторам по кварталам в 2016 г',
                to: '/3-6'
            },
            {
                name: 'Счет производства по институциональным секторам по кварталам в 2017 г',
                to: '/3-7'
            },
            {
                name: 'Счет образования доходов по институциональным секторам по кварталам в 2014 г.',
                to: '/3-8'
            }
        ]
    },
    {
        name: 'РЕЗУЛЬТАТЫ МЕЖДУНАРОДНЫХ СОПОСТАВЛЕНИЙ ВАЛОВОГО ВНУТРЕННЕГО ПРОДУКТА',
        links: [
            {
                name: 'Оценка валового внутреннего продукта России по результатам международных сопоставлений',
                to: '/4-1'
            },
            {
                name: 'Основные результаты международных сопоставлений ВВП за 2014 г',
                to: '/4-2'
            },
            {
                name: 'Фактическое конечное потребление домашних хозяйств по результатам международных сопоставлений\n' +
                    'ВВП за 2014 г',
                to: '/4-3'
            },
            {
                name: ' Валовое накопление основного капитала по результатам международных сопоставлений ВВП за 2014 г',
                to: '/4-4'
            }
        ]
    }
];

function Scenarios() {
    const [expanded, setExpanded] = React.useState(false);
    const history = useHistory();

    const handleExpand = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box>
            <Typography variant="h5" gutterBottom>Архив исходных данных</Typography>

            {links.map((link, i) => {
                return (
                    <Accordion 
                        key={i}
                        expanded={expanded === `panel${i}`} 
                        onChange={handleExpand(`panel${i}`)}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{link.name}</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Box display="flex" flexDirection="column">
                                {link.links.map(link => {
                                    return (
                                        <Box key={link.name} display="flex" alignItems="flex-start">
                                            {link.links != null 
                                                ?   (
                                                        <Box>
                                                            <Box display="flex" alignItems="flex-start">
                                                                <NavigateNextIcon fontSize="small"/>
                                                                <Typography style={{ cursor: 'pointer' }} variant="body2">{link.name}</Typography>
                                                            </Box>
                                                            <Box marginLeft="16px" display="flex" flexDirection="column">
                                                                {link.links.map(link => {
                                                                    return (
                                                                        <Box key={link.name} display="flex" alignItems="center">
                                                                            <DotIcon style={{ fontSize: '8px', marginRight: '4px' }} />
                                                                            <Link component={RouteLink} to={`/scenarios/article${link.to}`}>{link.name}</Link>
                                                                        </Box>
                                                                    )
                                                                })}
                                                            </Box>
                                                        </Box>
                                                    )
                                                :   (
                                                        <>
                                                            <NavigateNextIcon fontSize="small"/>
                                                            <Link component={RouteLink} to={`/scenarios/article${link.to}`}>{link.name}</Link>
                                                        </>
                                                    )   
                                            }
                                        </Box>
                                    )
                                })}
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                )}
            )}
        </Box>
    );
}

export default Scenarios;
