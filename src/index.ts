class Sorter {
	constructor(public collection: number[]) { }

	sort(): void {
		const { length } = this.collection;

		for (let j = 0; j < length; j++) {
			for (let i = 0; i < length - j - 1; i++) {
				
				const currentElement = this.collection[i];

				if (i !== length && currentElement > this.collection[i + 1]) {
					this.collection[i] = this.collection[i + 1];
					this.collection[i + 1] = currentElement;
				}
			}
		}
	}
}

const sorter = new Sorter([3, -4, 29, 5, 2, 11]);
sorter.sort();

console.log(sorter);
