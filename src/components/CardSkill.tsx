import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from "react-native";

interface CardSkillProps extends TouchableOpacityProps {
  skill: string;
}

export function CardSkill({ skill, ...rest }: CardSkillProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 50,
    marginVertical: 10,
    alignItems: "center",
  },

  textSkill: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffff",
  },
});
