import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable // This element is useful for customizing a button unlike to use builds-in react native button then Pressable will make an element be pressable to behave as a button
        android_ripple={{ color: "#210644" }} // This is specific to Android property passed to Pressable element to see effect when pressing in this element on any Android devices or emulators
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem} // This is specific to iOS property passed to Pressable element to see effect when pressing in this element on any iOS devices or emulators
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6, /*This property can be applied directly as style on
     a nested element like Text in a View component but it will be
      understandable only by Android not by iOS so to fix it and make
       it work on both platforms it is better to apply it on the View container*/  
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
