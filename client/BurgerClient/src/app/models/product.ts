export class Product {
    constructor(public productId: number,
                public category: string,
                public productName: string,
                public productDescription: string,
                public productPrice: number,
                public imageUrl: string,
                public productCount: number
    ){}
}
