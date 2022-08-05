
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 2,
  },
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  title:{
    color: '#f1f1f1',
    fontSize: 25,
    fontWeight: 'bold'
  },
  titleTasks:{
    color: '#f1f1f1',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20
  },
  titleTask:{
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input:{
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    fontSize: 15,
    borderRadius: 7,
    padding: 15,
    marginTop: 30,
  },
  button: {
    backgroundColor: '#eba417',
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 7,
    padding: 15,
    width: '50%',
    marginLeft: '25%'
  },
  buttonTask: {
    backgroundColor: 'gray',
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15
  }
});
