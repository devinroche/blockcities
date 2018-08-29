import React from 'react';
import { Row} from 'react-native-easy-grid';
import {Text, Image, View, TouchableOpacity} from 'react-native'
import font from '../../../theme/styles/Typography.style';
import btnStyles from '../../../theme/styles/CreateAccount.style';
import tc from '../../../../assets/img/limited_edition_set.png'

const CollectionFooter = () => (
    <View>
        <Row style={{width: '55%', flex: 1, justifyContent: 'center', alignSelf: 'center', paddingBottom: 20}}>
            <View style={{width: 160, shadowColor: '#ffffff', shadowOpacity: 0.2,shadowRadius: 8, height: 180, backgroundColor: '#E6F5FF', flex: 1, justifyContent: 'center', alignSelf: 'center',}}>
                <Image source={tc} resizeMode="contain" style={{width: 180, height: 160, alignSelf: 'center'}}/>
            </View>
        </Row>
        <Row size={1} style={{ paddingTop: 20, justifyContent: 'center'}}>
            <Text style={font.featureHead}>Terminus Collection</Text>
        </Row>
        <Row size={1} style={{justifyContent: 'center', paddingBottom: 20}}>
            <Text style={[font.info, { fontSize: 13}]}>Three iconic towers in Buckhead Atlanta</Text>
        </Row>
        <Row style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={[btnStyles.followBtn, {marginBottom: 20}]}>
                <Text style={font.light}>Buy Collection</Text>
            </TouchableOpacity>
        </Row>
    </View>
);

export default CollectionFooter;