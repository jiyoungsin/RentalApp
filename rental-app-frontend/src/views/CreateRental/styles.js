import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    formStyle: {
        width: '100%',
        height: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        justifyItems : 'center',
        justifySelf : 'center',
    },
    container: {
        width: '60%',
        height: '60%',
        margin: 'auto',
    },
    buttonPadding: {
        padding: "10px",
        marginTop: "20px",
        marginBottom: "20px",
    },
    labelText: {
        fontSize: '24px',
    },
    checkbox: {
        display: "flex",
        marginTop: "10px",
    },
    text: {
        fontSize: '24px',
        marginRight: "auto"
    },
    checkboxStyle: {
        height: "30px", width: "30px"
    }
}));

export { useStyles };