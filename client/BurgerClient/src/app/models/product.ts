export class Product {
    constructor(public productId: number,
                public category: string,
                public name: string,
                public description: string,
                public productPrice: number,
                public imageUrl: string,
                public productCount: number
    ){}
}
