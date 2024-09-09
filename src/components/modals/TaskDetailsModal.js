import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React from 'react';
import theme from '../../assets/themes/theme';

const TaskDetailsModal = ({showModal, setShowModal, data}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={() => setShowModal(false)}>
      <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={() => false}>
            <View style={styles.innerContainer}>
              <Text style={styles.title}>Task Details</Text>
              <View style={styles.detailContainer}>
                <Text style={styles.subTitle}>Task Title: {data?.name}</Text>
                <Text style={styles.subTitle}>Task Description:</Text>
                <Text style={styles.description}>{data?.description}</Text>
                <Text style={styles.subTitle}>Created At: {data?.date}</Text>
                <Text style={styles.subTitle}>
                  Status: {data?.doneStatus ? 'Completed' : 'Not Completed'}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default TaskDetailsModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  innerContainer: {
    width: Dimensions.get('screen').width * 0.85,
    backgroundColor: theme.colors.mintCream,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  detailContainer: {
    width: Dimensions.get('screen').width * 0.85,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  title: {color: theme.colors.font, fontSize: 20, fontWeight: '500'},
  subTitle: {
    color: theme.colors.font,
    fontSize: 18,
    fontWeight: '400',
    marginTop: 10,
  },
  description: {
    color: theme.colors.font,
    fontSize: 15,
    fontWeight: '400',
    marginTop: 2,
  },
});
