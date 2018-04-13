/**
 * 获取设备高度
 * 输出:将高度分成640份的函数，传入所需高度大小
 */
import {Dimensions} from 'react-native';

// device height
//获取设备高度
const deviceHeightDp = Dimensions.get('window').height;
const uiHeightPx = 640;

export default function px2dp(uiElementPx) {
    return uiElementPx * deviceHeightDp / uiHeightPx;
}


