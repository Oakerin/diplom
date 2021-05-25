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

function Model() {
    return (
        <Box>
            <Typography variant="h5" gutterBottom>Модифицированная макроэкономическая имитационная модель развития России</Typography>
            <Typography variant="body1">Модель Р1-4.0(2018-1) – модификация однопродуктовой имитационноэкспертной модели, отражающей динамику воспроизводства ВВП экономики
                России на интервале 1995-2030 гг. Формально параметры модели представляют
                собой совокупность некоторого «основного тренда» и «помех», причём «помехи» имитируются на «историческом» интервале 1995-2016 гг., а на интервале
                прогноза (2017-30 гг.) используются лишь «основные тренды». Таким образом,
                прогноз – это оценка средних значений, которые удовлетворяют балансовым
                соотношениям и регрессионным зависимостям. Модель опирается на официальную отчётность Росстата по системе национального счетоводства с 1995 года и использует гипотезы экспертов о взаимосвязи различных параметров.
            </Typography>
        </Box>
    );
}

export default Model;
