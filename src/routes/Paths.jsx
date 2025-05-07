import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feedback from '../components/FeedbackForm';


const Paths = () => {
    return(
        <>
            <BrowserRouter basename="/formulario-React">
                <Routes>
                    <Route path="/" element={<Feedback/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default Paths