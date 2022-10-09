class Cost {
    static cost = 10

    static addCost(c) {
        this.cost += c
    }

    static downCost(c) {
        if ((this.cost - c) >= 0)
            this.cost -= c
        else
            alert("Недостаточно средств")
    }

    static check() {
        return this.cost
    }
}

export default Cost