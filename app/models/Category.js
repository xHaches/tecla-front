import {
    CATEGORY_ID,
    SITE_ID,
    trendsUrl,
    searchByNameUrl,
    getCategoriesUrl
} from "../globals/apiPaths.js";

export class CategoryService {
    trends;
    categories;
    async getTrendsByCategory() {
        const trends = await fetch(trendsUrl(SITE_ID, CATEGORY_ID));
        return await trends.json();
    }

    async getCategories() {
        const categories = await fetch(getCategoriesUrl(SITE_ID));
        return await categories.json();
    }

    async seachByName(name) {
        const product = await fetch(searchByNameUrl(SITE_ID, name));
        return await product.json();
    }

    async getRandomTrendProducts(trends) {
        // TODO asignar un rango aleatorio de 10 del 0 al 49
        const slicedTrends = trends.slice(0, 10);
        const products = await Promise.all(
            slicedTrends.map(trend => this.seachByName(trend.keyword))
        );
        return await products;
    }
}


