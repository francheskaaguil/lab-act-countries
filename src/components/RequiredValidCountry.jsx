import {Navigate ,Outlet, useLocation, useParams} from "react-router";
import COUNTRIES from "../data/countries";

const RequiredValidCountry = () => {
    const { countryCode } = useParams();
    const location = useLocation();

    const exists = COUNTRIES.some((c) => c.code === countryCode.toUpperCase());

    if (!exists) {
        return (
            <Navigate to="/countries" state={{ from: location }} replace /> 
        );
    }

    return <Outlet />;
};

export default RequiredValidCountry;