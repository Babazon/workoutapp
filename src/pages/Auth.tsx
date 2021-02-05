import { View, StyleSheet, Button, Text } from "react-native"
import React from 'react';
import { TextInput } from "react-native-gesture-handler";
import { useSelector, connect } from "react-redux";
import { useAppDispatch } from "../domain/state/redux";
import { getEmail, getPassword, getShowError } from "../domain/state/selectors";
import { setEmail, setPassword, login } from "../domain/state/actions";

const Auth = () => {
  const dispatch = useAppDispatch();
  const email = useSelector(getEmail) ?? '';
  const password = useSelector(getPassword) ?? '';
  const showError = useSelector(getShowError);
  const setEmailInStore = (text: string) => dispatch(setEmail(text));
  const setPasswordInStore = (text: string) => dispatch(setPassword(text));
  const attemptLogin = () => dispatch(login());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vätiön</Text>
      <View style={styles.labelWrapper}>
        <Text style={styles.label}>Email</Text>
        <TextInput value={email} onChangeText={setEmailInStore} style={styles.input} placeholder={'hans.mustermann@gmx.de'} />
      </View>
      <View style={styles.labelWrapper}>
        <Text style={styles.label}>Password</Text>
        <TextInput value={password} onChangeText={setPasswordInStore} style={styles.input} placeholder={'******'} secureTextEntry />
      </View>
      {showError && <Text style={styles.errorText}>An error occurred..</Text>}
      <Button title={'Log in'} onPress={attemptLogin} color='teal' />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    color: 'white',
    height: 100,
    width: 200
  },
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 100
  },
  errorText: {
    color: 'red'
  },
  labelWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  input: {
    backgroundColor: 'white',
    color: 'teal',
    height: 25,
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: 300,
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: 'gray'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40
  },
  label: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginVertical: 4
  }
})

export default connect()(Auth);