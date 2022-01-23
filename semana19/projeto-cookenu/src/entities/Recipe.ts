export class Recipe {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private date: Date,
        private userId: string
    ) {}
  
    public getId() {
        return this.id
    }

    public getTitle() {
        return this.title
    }

    public getDescription() {
        return this.description
    }
    
    public getCreateDate() {
        return this.date
    }

    public getUserId() {
        return this.userId
    }
  
    static toRecipeModel(data: any): Recipe {
        return new Recipe(data.id, data.title, data.description, data.date, data.userId)
    }
}