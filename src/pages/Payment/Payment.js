import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ActivityIndicator,
  Dimensions,
  Linking,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { getQrImg, getQrLink, getUserCode } from '../../hook/axios';
import { useSelector } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';

const deviceHeight = Dimensions.get('window').height;

const PrevilegeItem = ({ title, subTitle }) => {
  return (
    <View style={styles.previlegeItem}>
      <Ionicons
        name="checkmark-circle-outline"
        color={'#00C931'}
        size={30}
        style={{ marginRight: 10 }}
      />

      <View style={{ width: '90%' }}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemSub}>{subTitle}</Text>
      </View>
    </View>
  );
};

const Payment = ({ navigation }) => {
  const userInfo = useSelector((state) => state.user);

  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paymentCode, setPaymentCode] = useState('');
  const [qrCodeImg, setQrCodeImg] = useState('');
  const [qrLink, setQrLink] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    getUserCode(userInfo.token)
      .then((rs) => {
        setPaymentCode(rs.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setPaymentCode(
          'ERROR, Code thanh toán tạm thời ngừng hoạt động, xin hãy thử lại vào lúc khác'
        );
        setIsLoading(false);
      });

    getQrImg()
      .then((rs) => setQrCodeImg(rs.data))
      .catch((err) => console.log(err));

    getQrLink()
      .then((rs) => setQrLink(rs.data))
      .catch((err) => console.log(err));
  }, []);

  const openMomo = () => {
    const momoPaymentURL = qrLink;
    Linking.openURL(momoPaymentURL)
      .then(() => {
        console.log('Opened other app successfully');
      })
      .catch((error) => {
        console.error('Failed to open other app:', error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../../../assets/imgs/paymentWall.png')}
        resizeMode="cover"
      >
        <View style={styles.subContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 20
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="close-outline"
                style={styles.returnIcon}
                size={30}
                color={'#FFFFFF'}
              />
            </TouchableOpacity>

            <Text style={styles.appTitle}>
              <Text style={{ color: '#EA736D' }}>Dr</Text>
              Map
            </Text>
          </View>

          <Text style={{ fontSize: 28, marginTop: 195, color: '#FFFFFF' }}>
            Đặc quyền gói premium
          </Text>
          <View style={{ marginVertical: 15 }}>
            <PrevilegeItem
              title={'Tìm đường đi ngắn nhất'}
              subTitle={
                'Sắp xếp những điểm đến của bạn hợp lý, tiết kiệm thời gian, tối ưu quãng đường đi'
              }
            />
            <PrevilegeItem
              title={'Không hạn chế điểm đến'}
              subTitle={'Cho phép người dùng nhập số lượng điểm đến bất kỳ'}
            />
            <PrevilegeItem
              title={'Tìm địa điểm nhanh chóng'}
              subTitle={'Tìm kiếm địa điểm nhanh và tối ưu hơn'}
            />
          </View>
          {!userInfo.isActivated ? (
            <View
              style={{
                justifyContent: 'center'
              }}
            >
              <Text
                style={{ fontSize: 28, textAlign: 'center', marginBottom: 5 }}
              >
                Trở thành hội viên Premium chỉ với 32k/1 tháng!!!
              </Text>
              <Button title="Mua ngay" onPress={toggleModal} />
            </View>
          ) : (
            ''
          )}
        </View>
        {!userInfo.isActivated ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              paddingHorizontal: 10,
              paddingBottom: 10,
              paddingTop: 30
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                textAlignVertical: 'bottom'
              }}
            >
              Lưu ý: Quá trình thanh toán sẽ tốn từ 1 - 2 giờ, nếu bạn có bất kỳ
              rắc rối nào xin liên hệ qua {'\n'}
              Email: wearedareteam@gmail.com
            </Text>
          </View>
        ) : (
          ''
        )}
      </ImageBackground>

      <Modal
        isVisible={isModalVisible}
        style={[styles.modalCtn]}
        deviceHeight={deviceHeight}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.paymentTitle}>
            <Text style={{ fontWeight: '500' }}>NGUYEN HO HONG DUC</Text>
            <Text>*******789</Text>
          </View>
          <Image
            source={{
              uri: qrCodeImg
            }}
            style={styles.qrImg}
          />
          <View style={{ marginVertical: 10 }}>
            {isLoading ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 5
                }}
              >
                <Text>Đang tạo code {'   '}</Text>
                <ActivityIndicator size="small" color={'#43A9EB'} />
              </View>
            ) : (
              <View>
                <Text style={{ fontWeight: '500' }}>
                  Mã code thanh toán của bạn:
                </Text>
                <Text style={styles.paymentCodeTxt}>{paymentCode}</Text>
              </View>
            )}
            <Text style={{ fontWeight: '500' }}>
              Lưu ý: Hãy chuyển khoản với nội dung chứa mã code thanh toán
            </Text>
          </View>
          <Button title="Thanh toán" onPress={openMomo} color={'#FF0080'} />
          <View style={{ marginVertical: 6 }}></View>
          <Button title="Quay về" onPress={toggleModal} />
        </View>
        <Text style={{ textAlign: 'center' }}>
          Nếu bạn có bất kỳ vấn đề nào, xin hãy liên lạc với chúng tôi qua
          {' \n'}
          <Text>Email: wearedareteam@gmail.com</Text>
        </Text>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: '#4B84ED'
  },
  subContainer: {
    paddingHorizontal: 20
  },
  txt: {
    textShadowRadius: 1,
    textShadowColor: '#000000'
  },
  returnIcon: {
    borderRadius: 23,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 45,
    height: 45,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  appTitle: {
    fontSize: 44,
    fontFamily: 'Roboto Mono',
    fontStyle: 'italic',
    textAlign: 'right',
    letterSpacing: 2
  },
  previlegeItem: {
    flexDirection: 'row',
    width: '100%'
  },
  itemTitle: {
    fontSize: 22,
    color: '#FFFFFF'
  },
  itemSub: {
    fontSize: 18,
    color: '#AFAFAF'
  },

  //Modal css
  modalCtn: {
    padding: 25,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    width: '80%'
  },
  paymentTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  qrImg: {
    width: deviceHeight * 0.357,
    height: 300,
    borderRadius: 5,
    resizeMode: 'cover',
    alignSelf: 'center'
  },
  paymentCodeTxt: {
    textAlign: 'center',
    marginVertical: 7,
    fontSize: 18
  }
});

export default Payment;

{
  /* 
  
  const TableRecord = ({ name, des1, des2, des3 }) => {
  return (
    <View style={styles.privilegeRecord}>
      <Text style={styles.privilegeName}>
        <Text style={{ backgroundColor: 'red', height: '100%' }}>{name}</Text>
      </Text>
      <Text style={styles.privilegeDescription}>{des1}</Text>
      <Text style={styles.privilegeDescription}>{des2}</Text>
      <Text style={styles.privilegeDescription}>{des3}</Text>
    </View>
  );
};

  <View>
        <View>
          <Text style={[styles.txtCenter, styles.txtTitle]}>Gói thường</Text>
        </View>
        <View>
          <Text>Đặc quyền gói</Text>
        </View>
        <View style={styles.privilegeSection}>
          <TableRecord
            name={''}
            des1={'Tìm kiếm đường đi ngắn nhất'}
            des2={'Điểm nhập không hạn chế'}
            des3={'Tìm kiếm nhanh hơn'}
          />
          <TableRecord
            name={'Gói Premium'}
            des1={
              <Ionicons
                name="checkmark-circle-outline"
                color={'#00C931'}
                size={30}
              />
            }
            des2={
              <Ionicons
                name="checkmark-circle-outline"
                color={'#00C931'}
                size={30}
              />
            }
            des3={
              <Ionicons
                name="checkmark-circle-outline"
                color={'#00C931'}
                size={30}
              />
            }
          />
          <TableRecord
            name={'Gói Free'}
            des1={
              <Ionicons
                name="checkmark-circle-outline"
                color={'#00C931'}
                size={30}
              />
            }
            des2={
              <Ionicons
                name="close-circle-outline"
                color={'#FF5A5A'}
                size={30}
              />
            }
            des3={
              <Ionicons
                name="close-circle-outline"
                color={'#FF5A5A'}
                size={30}
              />
            }
          />
        </View>
        <View>
          <Text>Sở hữu ngay gói Premium chỉ với 32k!!!</Text>
        </View>
      </View> 
      ----CSS
       txtCenter: {
    textAlign: 'center'
  },
  txtTitle: {},
  privilegeSection: {},
  privilegeRecord: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  privilegeName: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#CECECE',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  privilegeDescription: {
    flex: 1,
    textAlign: 'center',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#CECECE',
    paddingHorizontal: 6,
    paddingVertical: 2
  },
      
      
      */
}
