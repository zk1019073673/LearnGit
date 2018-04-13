/**
 * 获取设备宽度
 * 输出:整个设备宽度,将高度分成640份的函数,传入所需高度大小
 */
import {Dimensions} from 'react-native';

// device width
// 获取设备宽度
const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 360;

export default function px2dw(uiElementWx) {
    return uiElementWx * deviceWidthDp / uiWidthPx;
}
