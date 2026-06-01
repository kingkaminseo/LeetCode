function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
    const asteroidsAsc = asteroids.sort((a, b) => a-b)
    let num = mass
    for (let i = 0; i < asteroidsAsc.length; i++) {
        if ((num >= asteroidsAsc[i]) === false) {
            return false
        }
        num = num + asteroidsAsc[i]
    }
    return true
};