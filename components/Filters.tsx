import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import styles, { DARK_GRAY } from "../assets/styles";
import { Link } from "@react-navigation/native";
const Filters = () => (
  <TouchableOpacity style={styles.filters}>
    <Text style={styles.filtersText}>
      <Icon name="filter" size={13} color={DARK_GRAY} /> VMatch
    </Text>
  </TouchableOpacity>
);

export default Filters;
