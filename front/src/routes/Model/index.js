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
            <Typography variant="body1" gutterBottom>Модель Р1-4.0(2018-1) – модификация однопродуктовой имитационноэкспертной модели, отражающей динамику воспроизводства ВВП экономики
                России на интервале 1995-2030 гг. Формально параметры модели представляют
                собой совокупность некоторого «основного тренда» и «помех», причём «помехи» имитируются на «историческом» интервале 1995-2016 гг., а на интервале
                прогноза (2017-30 гг.) используются лишь «основные тренды». Таким образом,
                прогноз – это оценка средних значений, которые удовлетворяют балансовым
                соотношениям и регрессионным зависимостям. Модель опирается на официальную отчётность Росстата по системе национального счетоводства с 1995 года и использует гипотезы экспертов о взаимосвязи различных параметров.
            </Typography>
            <Typography variant="h5">
                СПИСОК УРАВНЕНИЙ МОДЕЛИ
            </Typography>
            <Typography variant="body1">
                Приведём модифицированный список уравнений, используемых для описания производственного контура и инвестиционного контура модели. <br />
                1. WWPt = INt + YDt + YGMt +YNKt + EXt – IMt + STRt – метод использования доходов.<br />
                2. WWPt = WDCt + CN1t – производственный метод.<br />
                3. WWPt = WPRt + OTt + CN2t – формирование ВВП по источникам доходов.<br />
                4. WDCt = XOt – Zt – валовая добавленная стоимость.<br />
                5. Xt = XOt + CN1t – выпуск в ценах покупателей.<br />
                6. WWPSt = INSt + YDSt + YGMSt +YNKSt + EXSt – IMSt – ВВП в сопоставимых ценах (СЦ).<br />
                7. Pxt = POxt – гипотеза о базисных темпах выпуска.<br />
                8. XSt = XOSt + Pxt*CN1o – выпуск в СЦ.<br />
                9. at = Zt / Xt – коэффициент промежуточного потребления.<br />
                10. aSt = ZSt /XSt – КПР в СЦ.<br />
                11. bSt = IMSt / (INSt + YDSt + YGМSt + YNKSt) – доля импорта в СЦ.<br />
                12. WDSt = XOSt – ZSt – валовая добавленная стоимость в СЦ.<br />
                13. Pwt = (INSt + YDSt + YGSt +YNKSt + EXSt – IMSt) / WWPo – баз. темп ВВП.<br />
                14. Dwt = WWPt / WWPSt – базисный дефлятор ВВП.<br />
                15. INt = Dnt*INSt – инвестиции в ОК.<br />
                16. YDt = Ddt*YDSt – конечное потребление ДХ.<br />
                17. YGMt = Dgt*YGMSt – модифицированное конечное потребление ГОС.<br />
                18. YNKt = Dnkt*YNKSt – конечное потребление организаций, обслуживающих ДХ.<br />
                19. IMt = Dmt*IMSt – импорт.<br />
                20. EXt = Det*EXSt – экспорт.<br />
                21. Ft = Dft*FSt – основные фонды (ОФ) н/х России.<br />
                22. FSt = FSt-1 + WWSt – WBSt – динамика ОФ в СЦ.<br />
                23. WWt = 0,8374*Хt – 167,09 – вводы ОФ, где Xt=0,7*INt + 0,2*INt-1 + 0,1*INt-2.<br />
                24. WWSt = WWt / Dwwt – вводы ОФ в СЦ.<br />
                25. kWBt = WBSt / FSt-1 – коэффициент выбытия ОФ в СЦ.<br />
                25. kWWt = WWSt / FSt – коэффициент обновления ОФ в СЦ.<br />
                26. LZt = 0,0056*WWPSt +57,857 – регрессия численности занятых.<br />
                27. INt = 0,1368*Хt + 3540,2 – регрессия инвестиций в ОК, где Xt = 0,5*WWPt + 0,3*WWPt-1 + 0,2*WWPt-2.<br />
                28. OTt = kRUt*LZt*IPCt*UOTo – оплата труда.<br />
                29. FOSt = XOSt / FSt – фондоотдача в СЦ.<br />
                30. ^FOS = max(t) FOSt – предельное значение фондоотдачи.<br />
                31. ^FOS*FSt {'>'} XOSt – потребные и располагаемые производственные мощности.<br />
                32. XSt = WWPSt / (1- aSt) – выпуск в СЦ конечных покупателей.<br />
                33. DHt = OTt + 0,1537*WWPt + 393,18 – доходы населения.<br />
                34. YDt = 0,8336*DHt - 523,88 – регрессия КП домашних хозяйств.<br />
                35. POkt = 0,8653*Pnt + 0,1558 – регрессия базисного темпа ВН ОК.<br />
                36. WNOKSt = POkt*WNOKo – валовое накопление ОК (ВН ОК) в СЦ.<br />
                37. WNSt = WNOKSt + eSt*XOSt – валовое накопление (ВН).<br />
                38. YNKt = 0,0023*WWPt +108,57 – КП некоммерческих организаций.<br />
                39. IPCt = 1*ip1*ip2*ip3…*ipt – базисный индекс потребительских цен.<br />
                40. Det = 0,82*IPCt + 0,07*CNt – регрессия базисного дефлятора экспорта.<br />
                41. Kвыб = 0,5373*Кобн + 0,0135 – регрессия коэффициента выбытия.<br />
                42. Dmt = 0,121*WKt + 0,329*IPCt + 0,173 – регрессия базисных дефлятора импорта.<br />
                43. LBt = LАt – LZt – численность безработных.<br />
                44. XOt = Xt / (1 + n1t) – выпуск в основных ценах.<br />
                45. CN1t = n1t*XOt – чистые налоги на продукты.<br />
                46. CN2t = n2t*(XOt + IMt) – чистые налоги на производство и импорт.<br />
                47. RBJt = rt*WWPt – расходы консолидированного бюджета.<br />
            </Typography>
        </Box>
    );
}

export default Model;
