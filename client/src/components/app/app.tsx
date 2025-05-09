import { FavoritesPage } from "../../pages/favorites-page/favorites-page";
import { LoginPage } from "../../pages/login-page/login-page";
import { MainPage } from "../../pages/main-page/main-page";
import { NotFoundPage } from "../../pages/not-found-page/not-found-page";
import { OfferPage } from "../../pages/offer-page/offer-page";

function App(){

    return(
        <>
        <MainPage />
        <FavoritesPage />
        <LoginPage/>
        <OfferPage/>
        <NotFoundPage/>
        </>
    )

}

export { App };