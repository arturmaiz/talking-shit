import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#2a2f32",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ListItem: {
    color: "#fff",
  },
  ListItemText: {
    color: "#fff",
  },
}));

export default useStyles;
