import {Route, Switch} from 'react-router-dom';
import React from 'react';
import Catalog from '../catalog/Catalog';
import NotFound from '../components/NotFound';
import CategoryItem from '../catalog/CategoryItem';
import RecipeItem from '../catalog/RecipeItem';
import SearchResult from '../catalog/SearchResult';
import SearchIngredient from '../pages/SearchIngredient';




export default function Content() {
    
    //const {categories, loading} = useContext(CatalogContext);
    
    // если пользователь ввел поисковый запрос и нажал Enter,
    // то переходим на страницу server.com/search?str=Beaf и
    // добавляем ее в историю посещенных страниц браузера
    

    return (
        <main className="container">
            <Switch>
                <Route exact path="/" component={Catalog} />
                <Route exact path="/category/:name" component={CategoryItem} />
                <Route exact path="/recipe/:id(\d+)" component={RecipeItem} /> 
                <Route exact path="/search" component={SearchResult} />   
                <Route exact path="/ingredient" component={SearchIngredient} /> 
                <Route component={NotFound} />
            </Switch>
        </main>
    );
}