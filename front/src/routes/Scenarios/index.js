import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link as RouteLink, useParams, useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const links = [
    {
        name: 'Основные социально-экономические характеристики Российской Федерации',
        links: [
            {name: 'Основные социально-экономические показатели', to: '/1'},
            {
                name: 'Среднегодовые темпы прироста (снижения) основных социально-экономических показателей в 1971-2010 гг.',
                to: '/2'
            },
            {name: 'Темпы роста (снижения) основных социально-экономических показателей', to: '/3'},
            {name: 'Внешний долг Российской Федерации', to: '/4'},
            {name: 'Темпы роста (снижения) производительности труда по видам экономической деятельности', to: '/5'}
        ]
    },
    {
        name: 'Государственное устройство Российской Федерации, общественные объединения и религиозные организации',
        links: [
            {name: 'Предисловие', to: '/1'},
            {name: 'Государственное устройство Российской Федерации', to: '/2'},
            {
                name: 'Территория и городские населенные пункты cубъектов Российской Федерации на 1 января 2012 г.',
                to: '/3'
            },
            {name: 'Характеристики муниципальных образований в субъектах Российской Федерации в 2011 г.', to: '/4'},
            {
                name: 'Численность работников государственных органов и органов местного самоуправления по ветвям власти и уровням управления',
                to: '/5'
            },
            {
                name: 'Численность работников государственных органов и органов местного самоуправления по ветвям власти и субъектам Российской Федерации на конец 2011 г.',
                to: '/6'
            },
            {name: 'Численность работников федеральных государственных органов на конец 2011 г.', to: '/7'},
            {
                name: 'Численность работников органов исполнительной власти и местного самоуправления по уровням управления на конец 2011 г.',
                to: '/8'
            },
            {name: 'Численность работников федеральных органов исполнительной власти', to: '/9'},
            {
                name: 'Численность работников государственных органов субъектов Российской Федерации и органов местного самоуправления по уровням управления на конец 2011 г.',
                to: '/10'
            },
            {
                name: 'Численность работников государственных органов субъектов Российской Федерации и органов местного самоуправления по ветвям власти на конец 2011 г. .',
                to: '/11'
            },
            {
                name: 'Численность работников, замещавших должности гражданской и муниципальной службы в Российской Федерации, по ветвям власти и уровням управления',
                to: '/12'
            },
            {name: 'Состав Федерального Собрания Российской Федерации', to: '/13'},
            {
                name: 'Число общественных объединений и организаций, зарегистрированных в Российской Федерации, на 1 января 2012 г.',
                to: '/14'
            },
            {
                name: 'Число религиозных организаций, зарегистрированных в Российской Федерации, на 1 января 2012 г.',
                to: '/15'
            }
        ]
    },
    {name: 'Природные ресурсы и охрана окружающей среды', links: []},
    {name: 'Население', links: []},
    {name: 'Труд', links: []},
    {name: 'Уровень жизни населения', links: []},
    {name: 'Образование', links: []},
    {name: 'Здравоохранение', links: []},
    {name: 'Культура, отдых и туризм', links: []},
    {name: 'Правонарушения', links: []},
    {name: 'Система национальных счетов', links: []},
    {name: 'Предприятия и организации', links: []},
    {
        name: 'Добыча полезных ископаемых, обрабатывающие производства, производство и распределение электроэнергии, газа и воды',
        links: []
    },
    {name: 'Сельское и лесное хозяйство', links: []},
    {name: 'Рыболовство и рыбоводство', links: []},
    {name: 'Строительство', links: []},
    {name: 'Транспорт', links: []},
    {name: 'Связь', links: []},
    {name: 'Информационные и коммуникационные технологии', links: []},
    {name: 'Торговля и услуги', links: []},
    {name: 'Научные исследования и инновации', links: []},
    {name: 'Финансы', links: []},
    {name: 'Геологоразведочные работы', links: []},
    {name: 'Инвестиции', links: []},
    {name: 'Цены и тарифы', links: []},
    {name: 'Внешнеэкономическая деятельность', links: []},
    {name: 'Международные сравнения', links: []}
];

function Scenarios() {
    const { scenarioId } = useParams();
    const history = useHistory();

    const handleChange = (index) => (event, isExpanded) => {
        history.push(`/scenarios/${isExpanded ? index : 'list'}`);
    };

    return (
        <Box>
            <Typography variant="h5" gutterBottom>Архив исходных данных</Typography>
            {links.map((link, i) => {
                return (
                    <Box marginBottom="16px">
                        <Typography varint="subtitle1" gutterBottom>{link.name}</Typography>
                        <Box display="flex" flexDirection="column">
                            {link.links.map(link => {
                                return (
                                    <Box key={link.name} display="flex" alignItems="flex-start">
                                        <NavigateNextIcon fontSize="small"/>
                                        <Link component={RouteLink} to={`/scenarios/article${link.to}`}>{link.name}</Link>
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>
                );
            })}
        </Box>
    );
}

export default Scenarios;
