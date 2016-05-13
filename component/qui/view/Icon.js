import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Image,
    PixelRatio
} from 'react-native';

const urlBase = "http://i.gtimg.cn/vipstyle/frozenui/rn/icon/";
const iconInfo = {
    "arrow" : {
        "name": 'arrow.png',
        "width": 9,
        'height': 15
    },
    "close" : {
        "name": 'close.png',
        "width": 14,
        'height': 14
    },
    "info" : {
        "name": 'info-n.png',
        "width": 22,
        'height':22
    },
    "fresh" : {
        "name": 'fresh.png',
        "width": 22,
        'height': 22
    },
    "infoWarn" : {
        "name": 'info-w.png',
        "width": 22,
        'height': 22
    },
    "search" : {
        "name": 'search.png',
        "width": 14,
        'height': 14
    }
};

/**
 * Icon Component
 * @example
 * <Icon name="arrow" />
 */
export default class Icon extends Component {
    /**
     * This is Icon constructor.
     * @param {object} props
     * @param {string}  props.name - icon name, one of arrow, close, info, fresh, infoWarn, search
     */
    constructor(props) {
        super(props);
    };

    static propTypes = {
        name: PropTypes.string
    };

    render() {
        const {
            name,
        } = this.props;

        var iconConf = iconInfo[name] || '',
            iconStyle = {};
        if(typeof iconConf === 'object') {
            iconStyle = {
                width:iconConf['width'],
                height:iconConf["height"]
            };
        }

        if (iconConf) {
            var src = urlBase + iconConf['name'];
            return (
                <Image style={iconStyle} source={{uri:src}} />
            );
        }

    }
}
