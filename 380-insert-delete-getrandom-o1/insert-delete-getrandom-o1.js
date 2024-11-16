class RandomizedSet {
    constructor() {
        this.ans = new Set()
    }

    insert(val) {
        if (this.ans.has(val)) {
            return false
        } else {
            this.ans.add(val)
            return true
        }
    }
    remove(val) {
        if (this.ans.has(val)) {
            this.ans.delete(val)
            return true
        } else {
            return false
        }
    }
    getRandom() {
        let idx = Math.floor(Math.random() * this.ans.size)
        let arr = [...this.ans]
        return arr[idx]
    }
}