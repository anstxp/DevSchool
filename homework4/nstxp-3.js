class Warrior {
    constructor() {
        this.lvl = 1;
        this.xp = 100;
        this.ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
        this.ac = [];
    }
    level() {
        return this.lvl;
    }
    rank() {
        return this.ranks[Math.floor(this.lvl / 10)];
    }
    achievements() {
        return this.ac;
    }
    training([train, xp, n]) {
        if (this.lvl < n) return "Not strong enough";
        this.ac.push(train);
        this.xp += xp;
        this.updateStats();
        return train;
    }
    updateStats() {
        this.lvl = Math.floor(this.xp / 100);
        if (this.lvl > 100) this.lvl = 100;
        if (this.xp > 10000) this.xp = 10000;
    }
    battle(level) {
        if (level > 100 || level < 1) return "Invalid level";
        const diff = level - this.lvl;
        let response = "";console.log(level, this.lvl, diff)

        if (diff >= 5 && (Math.floor(this.lvl / 10) < Math.floor(level / 10))) return "You've been defeated";
        if (diff <= -2) response = "Easy fight";
        else if (diff === 0 || diff === -1) response = "A good fight";
        else response = "An intense fight";

        if (diff === 0) this.xp += 10;
        else if (diff === -1) this.xp += 5;
        else if (diff >= 1) this.xp += 20 * diff * diff;

        this.updateStats();
        return response;
    }
    experience() {
        return this.xp;
    }
}