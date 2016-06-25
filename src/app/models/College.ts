export class College {
    constructor(public name: string, public details: string, public isApplied: boolean, public isCompleted: boolean){

    }

    toggle(): void {
		this.isCompleted = !this.isCompleted;
    }
}