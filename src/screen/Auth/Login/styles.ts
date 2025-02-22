import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  mainWrapper: {
    margin: 20,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: 'black',
  },
  welcomeText: {
    fontSize: 14,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EAE9FB',
    padding: 4,
    borderRadius: 20,
    marginTop: 32,
  },
  authText: {
    color: '#0B0B0B',
    fontSize: 14,
  },
  loginBtn: {
    alignItems: 'center',
    backgroundColor: '#F8F8F9',
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  registrationBtn: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  titleContainer: {
    gap: 4,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 25,
    marginVertical: 4,
    paddingHorizontal: 24,
    paddingVertical: Platform.select({
      android: 12,
      ios: 14,
      default: 12,
    }),
  },
  formContainer: {marginTop: 28, marginBottom: 68},
  input: {
    padding: 0,
  },
  loginBtnContainer: {
    borderRadius: 25,
    backgroundColor: '#7A71BA',
    paddingVertical: 12,
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
  },
});
