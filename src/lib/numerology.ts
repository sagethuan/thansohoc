/**
 * Numerology calculation functions
 * Pythagorean system with Master Number support (11, 22, 33)
 */

// Pythagorean letter values: A=1, B=2, ..., I=9, J=1, K=2, ...
const LETTER_VALUES: Record<string, number> = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
    J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
    S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
};

const VOWELS = ['A', 'E', 'I', 'O', 'U'];

/**
 * Reduce a number to single digit, keeping master numbers 11, 22, 33
 */
export function reduceNumber(num: number, keepMaster: boolean = true): number {
    if (num <= 9 && num >= 1) return num;
    if (keepMaster && (num === 11 || num === 22 || num === 33)) return num;

    const sum = String(num)
        .split('')
        .reduce((acc, digit) => acc + parseInt(digit, 10), 0);

    return reduceNumber(sum, keepMaster);
}

/**
 * Get numeric value of a letter (Pythagorean system)
 */
export function getLetterValue(letter: string): number {
    return LETTER_VALUES[letter.toUpperCase()] || 0;
}

/**
 * Calculate Life Path Number (Số chủ đạo)
 * @param dob - Date of birth in format YYYY-MM-DD
 * @returns Life Path number (1-9 or 11, 22, 33)
 */
export function calculateLifePath(dob: string): number {
    const parts = dob.split('-');
    if (parts.length !== 3) return 0;

    const [year, month, day] = parts.map(Number);

    // Add all digits from the full date
    const allDigits = `${day}${month}${year}`;
    const sum = allDigits
        .split('')
        .reduce((acc, digit) => acc + parseInt(digit, 10), 0);

    return reduceNumber(sum, true);
}

/**
 * Calculate Expression/Destiny Number (Số Sứ Mệnh)
 * Sum of all letters in full name
 */
export function calculateExpression(name: string): number {
    const sum = name
        .toUpperCase()
        .split('')
        .reduce((acc, char) => acc + getLetterValue(char), 0);

    return reduceNumber(sum, true);
}

/**
 * Calculate Soul Urge Number (Số Linh Hồn)
 * Sum of vowels in full name
 */
export function calculateSoulUrge(name: string): number {
    const sum = name
        .toUpperCase()
        .split('')
        .filter(char => VOWELS.includes(char))
        .reduce((acc, char) => acc + getLetterValue(char), 0);

    return reduceNumber(sum, true);
}

/**
 * Calculate Personality Number (Số Nhân Cách)
 * Sum of consonants in full name
 */
export function calculatePersonality(name: string): number {
    const sum = name
        .toUpperCase()
        .split('')
        .filter(char => LETTER_VALUES[char] && !VOWELS.includes(char))
        .reduce((acc, char) => acc + getLetterValue(char), 0);

    return reduceNumber(sum, true);
}

/**
 * Calculate Birthday Number (Số Ngày Sinh)
 * Just the day of birth reduced
 */
export function calculateBirthday(dob: string): number {
    const parts = dob.split('-');
    if (parts.length !== 3) return 0;

    const day = parseInt(parts[2], 10);
    return reduceNumber(day, true);
}

/**
 * Calculate Personal Year (Năm cá nhân)
 * @param dob - Date of birth in format YYYY-MM-DD
 * @param targetYear - The year to calculate for (defaults to current year)
 * @returns Personal Year number (1-9)
 */
export function calculatePersonalYear(dob: string, targetYear?: number): number {
    const parts = dob.split('-');
    if (parts.length !== 3) return 0;

    const [, month, day] = parts.map(Number);
    const year = targetYear ?? new Date().getFullYear();

    // Sum day + month + target year digits
    const allDigits = `${day}${month}${year}`;
    const sum = allDigits
        .split('')
        .reduce((acc, digit) => acc + parseInt(digit, 10), 0);

    // Personal Year is usually reduced to 1-9 (not keeping master numbers)
    return reduceNumber(sum, false);
}

/**
 * Detect Karmic Debts from date of birth
 * Karmic debt numbers: 13, 14, 16, 19
 * These appear during the reduction process or in the birth day itself
 */
export function detectKarmicDebts(dob: string): string[] {
    const parts = dob.split('-');
    if (parts.length !== 3) return [];

    const [year, month, day] = parts.map(Number);
    const karmicNumbers = [13, 14, 16, 19];
    const karmicMap: Record<number, string> = {
        13: "13/4",
        14: "14/5",
        16: "16/7",
        19: "19/1"
    };

    const foundDebts = new Set<string>();

    // Check if day is a karmic number
    if (karmicNumbers.includes(day)) {
        foundDebts.add(karmicMap[day]);
    }

    // Calculate sum of all digits and check intermediate values
    const allDigits = `${day}${month}${year}`;
    let sum = allDigits
        .split('')
        .reduce((acc, digit) => acc + parseInt(digit, 10), 0);

    // Check initial sum
    if (karmicNumbers.includes(sum)) {
        foundDebts.add(karmicMap[sum]);
    }

    // Check during reduction process
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
        sum = String(sum)
            .split('')
            .reduce((acc, digit) => acc + parseInt(digit, 10), 0);

        if (karmicNumbers.includes(sum)) {
            foundDebts.add(karmicMap[sum]);
        }
    }

    return Array.from(foundDebts);
}

/**
 * Calculate all 6 numerology numbers + karmic debts
 */
export interface NumerologyResult {
    lifePath: number;
    expression: number;
    soulUrge: number;
    personality: number;
    birthday: number;
    personalYear: number;
    karmicDebts: string[];
}

export function calculateAllNumbers(name: string, dob: string): NumerologyResult {
    return {
        lifePath: calculateLifePath(dob),
        expression: calculateExpression(name),
        soulUrge: calculateSoulUrge(name),
        personality: calculatePersonality(name),
        birthday: calculateBirthday(dob),
        personalYear: calculatePersonalYear(dob),
        karmicDebts: detectKarmicDebts(dob)
    };
}

/**
 * Format result text for copying
 */
export function formatResultForCopy(
    name: string,
    result: NumerologyResult
): string {
    return `🔮 Kết quả Thần Số Học cho ${name}

📊 Số Chủ Đạo: ${result.lifePath}
🎯 Số Sứ Mệnh: ${result.expression}
💜 Số Linh Hồn: ${result.soulUrge}
👤 Số Nhân Cách: ${result.personality}
🎂 Số Ngày Sinh: ${result.birthday}
📅 Năm Cá Nhân ${new Date().getFullYear()}: ${result.personalYear}

---
Tính tại: thansohoc.vn`;
}
