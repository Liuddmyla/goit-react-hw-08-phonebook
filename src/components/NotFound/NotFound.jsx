import { useNavigate } from "react-router-dom";
import css from "./NotFound.module.css";
import Button from '@mui/material/Button';

const NotFound = () => {
    const navigate = useNavigate();

    const handleClick = () => {
    navigate('/');
    }

    return (
        <div className={css.box}>
            <p className={css.text}>NotFound</p>
            <Button type="button" onClick={handleClick} variant="contained" size='large'> Go back </Button>
        </div>
    )    
}

export default NotFound;