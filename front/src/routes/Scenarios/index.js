import React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Typography from '@material-ui/core/Typography';

const links = [
    { name: 'Основные социально-экономические характеристики Российской Федерации', to: '/1' },
    { name: 'Государственное устройство Российской Федерации, общественные объединения и религиозные организации', to: '/2' },
    { name: 'Природные ресурсы и охрана окружающей среды', to: '/3' },
    { name: 'Население', to: '/4' },
    { name: 'Труд', to: '/5' },
    { name: 'Уровень жизни населения', to: '/6' },
    { name: 'Образование', to: '/7' },
    { name: 'Здравоохранение', to: '/8' },
    { name: 'Культура, отдых и туризм', to: '/9' },
    { name: 'Правонарушения', to: '/10' },
    { name: 'Система национальных счетов', to: '/11' },
    { name: 'Предприятия и организации', to: '/12' },
    { name: 'Добыча полезных ископаемых, обрабатывающие производства, производство и распределение электроэнергии, газа и воды', to: '/13' },
    { name: 'Сельское и лесное хозяйство', to: '/14' },
    { name: 'Рыболовство и рыбоводство', to: '/15' },
    { name: 'Строительство', to: '/16' },
    { name: 'Транспорт', to: '/17' },
    { name: 'Связь', to: '/' },
    { name: 'Информационные и коммуникационные технологии', to: '/18' },
    { name: 'Торговля и услуги', to: '/19' },
    { name: 'Научные исследования и инновации', to: '/20' },
    { name: 'Финансы', to: '/21' },
    { name: 'Геологоразведочные работы', to: '/22' },
    { name: 'Инвестиции', to: '/23' },
    { name: 'Цены и тарифы', to: '/24' },
    { name: 'Внешнеэкономическая деятельность', to: '/25' },
    { name: 'Международные сравнения', to: '/26' },
];

function Scenarios() {
    return (
        <Box>
            <Typography variant="h5" gutterBottom>Архив сценариев исходных данных опорной траектории</Typography>
            <Box display="flex" flexDirection="column">
                {links.map(link => {
                    return (
                        <Box display="flex" alignItems="center">
                            <NavigateNextIcon fontSize="small" />
                            <Link component={RouterLink} to={link.to}>{link.name}</Link>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    );
}

export default Scenarios;
