import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useContext} from 'react';
import theme from '../../assets/themes/theme';
import {ToDoContext} from '../../contexts/ToDoContext';

const AddTaskModal = ({showModal, setShowModal}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const {addToDo} = useContext(ToDoContext);

  const handleAddToDo = () => {
    if (title.length != 0) {
      addToDo({name: title, description: description});
      setTitle('');
      setDescription('');
      setShowModal(false);
    }
  };

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
              <Text style={styles.title}>Add A New Task</Text>
              <View style={styles.taskContsiner}>
                <Text style={styles.subTitle}>Task Title</Text>
                <TextInput
                  style={styles.textInput1}
                  placeholder="Enter title"
                  value={title}
                  onChangeText={setTitle}
                />
                <Text style={styles.subTitle}>Description</Text>
                <TextInput
                  multiline
                  style={styles.textInput2}
                  placeholder="Enter Description"
                  value={description}
                  onChangeText={setDescription}
                />
              </View>
              <TouchableOpacity style={styles.button} onPress={handleAddToDo}>
                <Text style={styles.buttonText}>Create</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AddTaskModal;

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
  taskContsiner: {
    width: Dimensions.get('screen').width * 0.85,
    paddingHorizontal: 10,
  },
  title: {color: theme.colors.font, fontSize: 20, fontWeight: '500'},
  subTitle: {
    color: theme.colors.font,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 20,
  },
  textInput1: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    color: theme.colors.font,
  },
  textInput2: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    color: theme.colors.font,
    marginBottom: 15,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.colors.lightGreen,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  buttonText: {color: theme.colors.lightGreen, fontSize: 18, fontWeight: '500'},
});
